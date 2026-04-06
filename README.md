# ITEC Lab Tracker

A lightweight web interface for planning Sinclair Community College's ITEC lab spaces.

## Included

- `index.html` for the page structure
- `styles.css` for layout and presentation styling
- `app.js` for lab data, filtering, editing, and presentation mode behavior

## Notes

- The current version supports a working mode and a presentation mode.
- Lab status and equipment ownership changes are saved in the browser by default.
- When `config.js` is connected to Supabase, the tracker also saves to a shared cloud workspace so the live GitHub Pages site and multiple Macs can stay in sync.
- Older reading-parser materials were moved into `archive/readings-tool/` to keep this repo focused.

## Supabase Sync Setup

1. Create a Supabase project.
2. In the Supabase SQL editor, run `supabase-setup.sql`.
3. Open `Project Settings -> API` in Supabase and copy:
   - Project URL
   - `anon` public key
4. Update `config.js` with those values.
5. Commit and push `config.js`, `index.html`, `styles.css`, and `app.js` so GitHub Pages gets the cloud-enabled version.

## How It Works

- The app still keeps a local copy in `localStorage` as a safety net.
- If Supabase is configured, changes are also pushed to the shared `lab_tracker_state` row for the configured workspace.
- Other computers and the published site pull from that same workspace on load and during periodic refreshes.

## Important Note

- The included SQL policies allow public read and write so the static GitHub Pages site can save without a separate backend login flow.
- That is the fastest setup, but anyone who can use the page can also edit the data.
- If you want stricter security later, we can add authentication and lock writes to signed-in users only.
