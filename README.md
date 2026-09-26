# The Quiet Circle frontend

A responsive Next.js homepage for a Nigerian introvert community.

## Development

```sh
npm install
npm run dev
```

## Checks

```sh
npm run lint
npx tsc --noEmit
npm run build
```

## Structure

- `app/page.tsx` composes imported homepage sections, following the BataX pattern.
- `components/home/` contains navigation, hero, benefits, city discovery, events, mission, invitation, and footer components.
- `components/home/data.ts` holds illustrative cities and events.
- `public/images/` contains 11 generated images and `GENERATION.md` with their prompts.
- Styling uses inline Tailwind utility classes; `app/globals.css` only imports Tailwind. Icons use React Icons.

City cards filter events. Event cards open native accessible dialogs. The mobile menu links to page sections. The invitation lets visitors select a city and clearly explains that signup is not open; it does not collect or submit personal data.

This folder owns the frontend Git repository. A future backend should be a sibling folder under `quiet-circle/` with its own Git repository. No backend, authentication, booking, or membership API is implemented.
