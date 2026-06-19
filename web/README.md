# Tokenity Japan Shareholder Wave Room

This folder contains a static shareholder briefing website.

The page supports four languages:

- Traditional Chinese: `?lang=zh-Hant`
- Simplified Chinese: `?lang=zh-Hans`
- English: `?lang=en`
- Japanese: `?lang=ja`

The default language is Traditional Chinese. The selected language is also stored in browser local storage.

## Files

- `index.html`: shareholder portal content
- `styles.css`: responsive visual design
- `app.js`: peer-analysis filter interaction
- multilingual content and rendering logic for Traditional Chinese, Simplified Chinese, English and Japanese
- `assets/tokenity-japan-hero.svg`: generated hero visual

## Local Preview

Open `index.html` directly in a browser, or run:

```bash
python3 -m http.server 4173 --directory web
```

Then open:

```text
http://localhost:4173
```

## Publishing Options

For overseas shareholders, publish this as a private or password-protected page.

Recommended options:

1. Upload the `web/` folder to a static host such as Render Static Site, Netlify, Vercel or Cloudflare Pages.
2. Recreate the sections in Wave/Wix/Webflow and use this static page as the source layout and copy.
3. Export the page content into a private investor portal or data room.

## Security Notes

- Do not publish the shareholder version publicly without removing confidential budget, market and strategy details.
- Add password protection, access logging and watermarking before sharing with overseas shareholders.
- Ask Japanese legal, tax, labor-dispatch and crypto-asset counsel to review the content before external circulation.
