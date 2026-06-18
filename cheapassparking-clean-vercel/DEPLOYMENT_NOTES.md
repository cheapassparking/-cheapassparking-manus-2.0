# Cheap Ass Parking — Cleaned Cloud Deploy Zip

This version was cleaned from the Manus export for GitHub/Vercel deployment.

## What was fixed
- Removed Manus-specific Vite runtime/debug plugins.
- Replaced Manus-only `/manus-storage/...` image paths with local `/public/assets/...` files.
- Simplified the build command to `vite build`.
- Added `vercel.json` with the correct output folder: `dist/public`.

## Vercel settings
- Framework: Vite
- Build command: `pnpm install --frozen-lockfile=false && pnpm build`
- Output directory: `dist/public`

## Local test
```bash
pnpm install --frozen-lockfile=false
pnpm build
pnpm preview
```

## Important
The original Manus image files were not included in the zip, so placeholder local SVG files were added. Replace these in `client/public/assets/` with your final real logo/mascot images when ready.
