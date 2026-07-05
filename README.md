# Portfolio

A futuristic, interactive personal portfolio built with Next.js, TypeScript, Tailwind CSS, Framer Motion, and Three.js.

## Run locally

```bash
npm install
npm run dev
```

Open http://localhost:3000.

## GitHub Pages deployment

The repository includes a GitHub Actions workflow in [.github/workflows/deploy.yml](.github/workflows/deploy.yml) that builds and deploys the app to GitHub Pages on every push to the main branch.

To enable deployment in GitHub:
1. Open your repository settings.
2. Go to Pages.
3. Set Source to GitHub Actions.

## Add new content

- Projects: edit [data/content.ts](data/content.ts)
- Blog posts: edit [data/content.ts](data/content.ts)

## Structure

- [app/page.tsx](app/page.tsx) - main single-page experience
- [components/HeroScene.tsx](components/HeroScene.tsx) - animated 3D hero scene
- [data/content.ts](data/content.ts) - projects, posts, skills, and stats
