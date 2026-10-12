# Hawkins for Schools

A single-page, static campaign website built with Astro, TypeScript, and Tailwind CSS 4 through the official `@tailwindcss/vite` integration. The initial copy came from **2026_Sep_Hawkins for Schools webpage content.docx**. The current beliefs come from **2026_Oct_What I Believe 2.docx**, sent October 7; the eight priorities come from **2026_Oct_HFS Website Priorities.docx**, sent October 6. These documents were read in full; wording, headings, and order are preserved, with repeated whitespace normalized. The October 7 attachment replaces all three belief paragraphs while retaining the existing headings. School assignments precede transportation, as in the October 6 priority list. Kevin describes the October 7 changes as his last edits and says the site can go live once edits are complete, while welcoming Bryan's and Michala's suggestions. His September 25, 2026 email supplies the candidate details, portrait, campaign artwork, and foundation-link request.

The site has no first-party client-side application JavaScript, React, CMS, authentication, database, form, analytics, or external font requests. Fonts are self-hosted from Fontsource packages. It identifies Kevin Hawkins as a candidate for South Bend Community School Corporation School Board Member representing District 1, not as a current board member or official district spokesperson.

The October 12 update removes the Hawkins Family Foundation link at Kevin's request. A header “Email Kevin” link and footer “Thoughts / Comments / Suggestions” link use `mailto:dayspring89005@gmail.com`, the public address supplied by Bryan. They open the visitor's configured email app; the site does not collect or send messages. Donation setup and approved “Why I Am Running for School Board” copy remain pending. Domain work is deferred at Bryan's request.

The WSBT-TV interview provided on October 6 is embedded between the introduction and beliefs, with a header navigation link and a direct YouTube fallback link. The responsive iframe uses YouTube's privacy-enhanced domain, lazy loading, native player controls, fullscreen support, and no autoplay. YouTube loads its own scripts and network resources inside the iframe. The embed's referrer policy sends the referring site's origin in the `Referer` header required by YouTube. Update the video ID, verified title, and publisher in `src/data/site.ts`.

## Requirements

- Node.js **24 LTS** recommended (`.nvmrc`); minimum 22.12.
- npm and the checked-in `package-lock.json`.

## Local development

```sh
npm ci
npm run dev
```

Open the local URL printed by Astro. Astro selects an available port. If using nvm, run `nvm use` first. Development does not require a Cloudflare account or credentials.

## Checks, build, and production preview

```sh
npm run check
npm run build
npm run preview
```

`check` runs Astro diagnostics and TypeScript checking. The production build command is **`npm run build`** and the static output directory is **`dist`**. Open the URL printed by the preview command. Astro 7 starts preview in the background; use `npx astro preview status`, `npx astro preview logs`, or `npx astro preview stop` to manage it.

For Cloudflare's local static asset handling, after building:

```sh
npm run preview:cloudflare
```

Open Wrangler's printed local URL, normally `http://localhost:8787`. This also lets you verify Cloudflare `_headers` handling; Astro's preview server does not apply those response headers.

To validate deployment preparation without publishing:

```sh
npm run deploy:check
```

This invokes `wrangler deploy --dry-run` against the existing `dist` directory. Run a fresh build first if the source changed.

## Updating content and design

- `src/data/site.ts`: approved copy, headings, metadata, and the public feedback email. Keep the supplied order and wording unless the client approves revisions.
- `src/pages/index.astro`: semantic page structure and noindex metadata.
- `src/styles/global.css`: shared color and font tokens in `@theme`, typography, responsive layout, focus states, reduced-motion and print styles.
- `src/components/Wordmark.astro`: the current campaign logo served as a responsive image in the header and footer, with alt text matching its “Hawkins for Schools” wording.
- `src/assets/kevin-hawkins.jpg`: original client-supplied Barbershop Selfie; Astro generates responsive WebP versions without retouching.
- `src/assets/hawkins-campaign-logo.png`: the unmodified 6001 × 1501 transparent `Hawkins Logo.png` supplied by Michala in the October 8 “Hawk Website” email, replacing the earlier yard-sign artwork. Retrieved from Spark's downloaded attachment; Astro generates responsive WebP versions.
- `public/favicon.svg`: provisional typographic H favicon.
- `public/_headers` and `public/robots.txt`: preview indexing controls.

The palette follows the supplied campaign artwork's blue and red, with a light neutral background; Newsreader and Manrope retain the original draft's typography. Shared design tokens make later adjustments straightforward. Font licenses are retained in `public/fonts` and included in the build.

The initial yard-sign PDF supplied the earlier campaign logo, District 1, and a sign slogan. The current website uses Michala's October 8 replacement PNG and the confirmed district. It does not present the full print layout as a web logo or add the sign slogan to the belief statements. The email's ballot spelling is inconsistent, so only “Kevin Hawkins” is shown pending clarification. The only public contact address is the feedback email explicitly supplied by Bryan on October 12; no other email address or phone number from the correspondence is included.

## Automatic deployment to the existing Cloudflare Pages site

The active Git repository is `alphadogagency/Hawk-School-Board`. It was transferred from `bryguy-404`, leaving the existing Pages Git integration pointing at the old owner. The `.github/workflows/deploy-pages.yml` workflow builds and uploads directly to the existing **`hawk-school-board`** Pages project. It preserves the existing `hawk-school-board.pages.dev` URL and any domains already attached to that project. No DNS or indexing changes are part of this setup.

Deployment configuration (October 12, 2026):

1. The account-owned **Hawk School Board GitHub Deploy** token has only **Pages Write** permission (also called **Account → Cloudflare Pages → Edit**), scoped to the agency's Cloudflare account, with no expiration as approved by Bryan. This grants access to Pages projects in that account, not just this project; no DNS, billing, Workers, or other permissions were added.
2. GitHub stores the token as the encrypted repository Actions secret `CLOUDFLARE_API_TOKEN` and the existing account ID as `CLOUDFLARE_ACCOUNT_ID`. Never commit credential values or put a token in a workflow file. To rotate the token, update the existing GitHub secret before revoking the old token.
3. The old Pages integration's automatic production and preview builds are disabled so there is only one deployment path. The existing Pages project and domains remain in place. Cloudflare may still display the old repository owner or say automatic Git builds are disabled; GitHub Actions now handles deployment.
4. Push to `main`, or run **Deploy to Cloudflare Pages** from GitHub's Actions tab with `main` selected. Check the workflow's result there and confirm the existing site serves the new content.

Each push to `main` runs `npm ci`, `npm run check`, and `npm run build`, then uses the lockfile-installed Wrangler to upload `dist`. Official GitHub actions are pinned to commit SHAs; the job has read-only repository permissions, and Cloudflare credentials are supplied only to the deployment step. Runs are serialized to prevent simultaneous production uploads. Forks and manual runs from other branches cannot deploy to this project.

The workflow uses `wrangler pages deploy`, **not** the legacy `npm run deploy` script below. The existing Workers config has no `pages_build_output_dir`, so Wrangler's Pages command ignores it and uses the explicitly supplied project, branch, and output directory.

References: [Cloudflare's repository-transfer limitation](https://developers.cloudflare.com/pages/configuration/git-integration/troubleshooting/), [deploying to existing Git-integrated Pages projects with Wrangler](https://developers.cloudflare.com/pages/configuration/git-integration/), and [GitHub Actions deployment setup](https://developers.cloudflare.com/pages/how-to/use-direct-upload-with-continuous-integration/).

## Optional Cloudflare Workers Static Assets deployment

**Final launch pending. Do not connect the proposed domain or enable indexing until final approval.** Bryan has shared a Cloudflare preview at `https://hawk-school-board.pages.dev/`. The repository retains the requested Workers Static Assets configuration; no hosting migration or custom-domain setup is performed by the campaign-content revision.

`wrangler.jsonc` serves `./dist` through Workers Static Assets. It intentionally contains no `main` entry point, runtime Worker script, SSR, Cloudflare Astro adapter, routes, or domain. The proposed Worker name is `hawkins-for-schools`; confirm its availability in the intended account before publishing.

After approval:

1. Resolve the launch items in `CLIENT-QUESTIONS.md` and obtain final content, design, and publication approval.
2. To allow indexing, remove the robots meta tag in `src/pages/index.astro`, remove only the `X-Robots-Tag` line in `public/_headers`, and change `public/robots.txt` to `User-agent: *` followed by `Allow: /`.
3. Once the real domain is confirmed, configure Astro's `site` URL and add matching canonical and Open Graph URL metadata. No production URL is currently invented.
4. Confirm the Cloudflare account and Worker name, then authenticate with `npx wrangler login`.
5. Run `npm run check`, `npm run build`, and `npm run deploy:check`.
6. Publish with `npm run deploy`. This reruns checks and builds before `wrangler deploy` uploads the static assets.
7. Connect the approved custom domain in Cloudflare only after authorization. Verify HTTPS, the final page, local assets, links, indexing headers, and metadata on the real URL.

For an approved Cloudflare build pipeline, use `npm run build` as the build command, `dist` as the static output, and `npx wrangler deploy` as the deployment command. Do not configure a server or an SSR adapter.

Official setup references: [Tailwind's Astro guide](https://tailwindcss.com/docs/installation/framework-guides/astro) and [Cloudflare's Astro static assets guide](https://developers.cloudflare.com/workers/framework-guides/web-apps/astro/).

## Review and handoff

- `CLIENT-QUESTIONS.md`: launch decisions and separate optional requests.
- `CLIENT-EMAIL.md`: short draft email for review; not sent.
- `QA-NOTES.md`: checks performed and testing limitations.

These Markdown files and the source Word documents are not in `public` or the built website output. Only `dist` is served or deployed.

The preview is marked `noindex, nofollow` in HTML and Cloudflare response headers, with crawling disallowed in `robots.txt`. These controls discourage indexing; they are not access control. `hawkinsforschools.org` was proposed by the client but still needs ownership/access confirmation with Kyle. No production domain or canonical URL has been configured. Future use after the election is recorded in `CLIENT-QUESTIONS.md`, not activated on a timer.
