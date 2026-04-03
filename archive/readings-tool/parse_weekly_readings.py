#!/usr/bin/env python3
"""
Parse instructor weekly reading text into structured outputs.

Usage:
  python3 parse_weekly_readings.py --input week2.txt --output-dir output
"""

from __future__ import annotations

import argparse
import csv
import json
import re
from pathlib import Path
from typing import List, Dict

URL_RE = re.compile(r"https?://\S+")
WEEK_RE = re.compile(r"week\s*(\d+)", re.IGNORECASE)


def clean_text(s: str) -> str:
    s = s.replace("\u202f", " ").replace("\xa0", " ")
    s = re.sub(r"\s+", " ", s).strip()
    return s


def split_entries(text: str) -> List[str]:
    lines = [ln.rstrip() for ln in text.splitlines()]
    out: List[str] = []
    current: List[str] = []

    for ln in lines:
        if ln.strip() == "":
            if current:
                out.append(" ".join(current).strip())
                current = []
            continue
        current.append(ln.strip())

    if current:
        out.append(" ".join(current).strip())

    return [e for e in out if e]


def extract_week(text: str) -> str:
    m = WEEK_RE.search(text)
    return m.group(1) if m else "unknown"


def parse_entry(raw: str) -> Dict[str, str]:
    urls = URL_RE.findall(raw)
    url = urls[0].rstrip(".,);") if urls else ""
    text_no_url = clean_text(URL_RE.sub("", raw)).rstrip(" .")

    author = ""
    year = ""
    title = ""

    # Pattern A: Author. 2020. "Title" ...
    m = re.match(r"^(?P<author>.+?)\.\s*(?P<year>(?:19|20)\d{2})\.\s*[\"“](?P<title>.+?)[\"”]", text_no_url)
    if m:
        author = m.group("author").strip()
        year = m.group("year")
        title = m.group("title").strip()
    else:
        # Pattern B: Author, A. (2020). Title. ...
        m2 = re.match(r"^(?P<author>.+?)\.\s*\((?P<year>(?:19|20)\d{2})\)\.\s*(?P<title>.+?)\.", text_no_url)
        if m2:
            author = m2.group("author").strip()
            year = m2.group("year")
            title = m2.group("title").strip()
        else:
            # Pattern C: Author. 2018. Title. Publisher...
            m3 = re.match(r"^(?P<author>.+?)\.\s*(?P<year>(?:19|20)\d{2})\.\s*(?P<title>[^.]+)\.", text_no_url)
            if m3:
                author = m3.group("author").strip()
                year = m3.group("year")
                title = m3.group("title").strip()
            else:
                # Pattern D: Author. Title. ... 2019...
                m4 = re.match(r"^(?P<author>[^.]+)\.\s*(?P<title>[^.]+)\.", text_no_url)
                if m4:
                    author = m4.group("author").strip()
                    title = m4.group("title").strip()
                    y = re.search(r"\b((?:19|20)\d{2})\b", text_no_url)
                    if y:
                        year = y.group(1)
                else:
                    # Fallback: try first sentence as title
                    parts = [p.strip() for p in re.split(r"\.(?:\s+|$)", text_no_url) if p.strip()]
                    if parts:
                        title = parts[0]

    return {
        "raw": raw,
        "author": author,
        "year": year,
        "title": title,
        "url": url,
        "needs_manual_lookup": "yes" if not url else "no",
    }


def write_json(path: Path, payload: dict) -> None:
    path.write_text(json.dumps(payload, indent=2, ensure_ascii=True), encoding="utf-8")


def write_csv(path: Path, entries: List[Dict[str, str]]) -> None:
    fields = ["author", "year", "title", "url", "needs_manual_lookup", "raw"]
    with path.open("w", newline="", encoding="utf-8") as f:
        writer = csv.DictWriter(f, fieldnames=fields)
        writer.writeheader()
        writer.writerows(entries)


def write_markdown(path: Path, week: str, entries: List[Dict[str, str]]) -> None:
    lines = [f"# Week {week} Readings", ""]
    for i, e in enumerate(entries, start=1):
        heading = e["title"] if e["title"] else f"Reading {i}"
        lines.append(f"## {i}. {heading}")
        if e["author"] or e["year"]:
            lines.append(f"- Citation: {e['author']} ({e['year']})".strip())
        if e["url"]:
            lines.append(f"- Link: {e['url']}")
        else:
            lines.append("- Link: (manual lookup needed)")
        lines.append(f"- Raw: {e['raw']}")
        lines.append("")
    path.write_text("\n".join(lines).strip() + "\n", encoding="utf-8")


def main() -> None:
    parser = argparse.ArgumentParser(description="Parse weekly reading list text.")
    parser.add_argument("--input", required=True, help="Path to input text file")
    parser.add_argument("--output-dir", default="output", help="Directory for generated files")
    args = parser.parse_args()

    in_path = Path(args.input)
    out_dir = Path(args.output_dir)
    out_dir.mkdir(parents=True, exist_ok=True)

    text = in_path.read_text(encoding="utf-8")
    week = extract_week(text)
    chunks = split_entries(text)

    # Drop header chunk like "Week 2 readings:" if present.
    if chunks and WEEK_RE.search(chunks[0]) and len(chunks[0].split()) <= 6:
        chunks = chunks[1:]

    entries = [parse_entry(c) for c in chunks]
    payload = {"week": week, "count": len(entries), "entries": entries}

    base = f"week_{week}_readings"
    json_path = out_dir / f"{base}.json"
    csv_path = out_dir / f"{base}.csv"
    md_path = out_dir / f"{base}.md"

    write_json(json_path, payload)
    write_csv(csv_path, entries)
    write_markdown(md_path, week, entries)

    print(f"Parsed {len(entries)} readings for week {week}.")
    print(f"JSON: {json_path}")
    print(f"CSV:  {csv_path}")
    print(f"MD:   {md_path}")


if __name__ == "__main__":
    main()
