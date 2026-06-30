<div align="center">
<img width="1200" height="475" alt="GHBanner" src="https://ai.google.dev/static/site-assets/images/share-ais-513315318.png" />
</div>

# Run and deploy your AI Studio app

This contains everything you need to run your app locally.

View your app in AI Studio: https://ai.studio/apps/3368f825-c623-49fb-bbf1-a55886062834

## GitHub Pages

This repo is configured to deploy the frontend as a static GitHub Pages site:

https://jackytsai70113.github.io/ai_kyushu/

The GitHub Pages build runs automatically on pushes to `main` through `.github/workflows/pages.yml`.

Because GitHub Pages has no server runtime, the AI chat API (`/api/gemini/chat`) is disabled on the static site and shows a clear "not connected" message. The itinerary, handbook, Japanese phrases, packing, and expense tools still work as frontend features.

## Japanese Learning Materials

旅行日文學習資料整理在 [`docs/japanese/`](docs/japanese/)。

## Run Locally

**Prerequisites:**  Node.js


1. Install dependencies:
   `npm install`
2. Set the `GEMINI_API_KEY` in [.env.local](.env.local) to your Gemini API key
3. Run the app:
   `npm run dev`
