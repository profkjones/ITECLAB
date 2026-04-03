# Weekly Readings Parser

Use this when your instructor posts readings as plain text.

## Web app (recommended)
Open this file in your browser:

- `index.html`

Or run a local server:

```bash
python3 -m http.server 8000
```

Then open:

- `http://localhost:8000`

In the web app:

- Paste your weekly reading text
- Click `Parse Readings`
- Edit any row fields if needed
- Download `Markdown`, `CSV`, or `JSON`

## 1) Save weekly text
Paste the weekly reading block into a file, for example:

- `week3.txt`

## 2) Run parser

```bash
python3 parse_weekly_readings.py --input week3.txt --output-dir output
```

## 3) Get outputs
The script creates:

- `output/week_<N>_readings.md` (easy to read)
- `output/week_<N>_readings.csv` (Excel/Sheets)
- `output/week_<N>_readings.json` (for automation)

## Notes
- If a reading has no URL in the instructor post, it will be marked `manual lookup needed`.
- If the header includes text like `Week 3 readings`, the week number is detected automatically.
- You can still log in manually to APUS and open/copy missing links for the flagged items.
