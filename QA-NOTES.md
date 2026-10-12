# Hawkins for Schools verification

## October 12, 2026 — foundation removal and email feedback

- Removed the Hawkins Family Foundation link and its configuration at Kevin's request. Confirmed the built page contains neither the foundation name nor its URL.
- Added header and footer email links using the public address supplied by Bryan, `dayspring89005@gmail.com`. The header reads “Email Kevin”; the footer reads “Thoughts / Comments / Suggestions.” Both are native `mailto:` links with accessible names describing email contact.
- `npm run check` passed with zero errors, warnings, or hints. `npm run build` succeeded.
- Chromium checks verified both recipient URLs and visible 3px keyboard focus. Checked 320, 390, 768, and 1440 CSS-pixel widths without page or element overflow, plus 200% root text without page overflow. Inspected mobile and desktop header/footer screenshots.
- No form, message storage, mail service, or first-party client script was added. Beliefs, priorities, logo, video, and noindex settings are unchanged. No donation placeholder or unsupplied “Why I Am Running” copy was added; domain work remains deferred.
- Limits: native mail links were inspected without opening an external email app or sending a message. Actual delivery and individual visitors' email-client setup were not tested. Layout checks used desktop Chromium with viewport emulation.

## October 8, 2026 — designer's replacement logo

- Retrieved `Hawkins Logo.png` from Spark's downloaded attachment for the “Hawk Website” email shown by Bryan. Gmail search was rate-limited; the cached original attachment was available locally. Inspected the supplied 6001 × 1501 transparent PNG and confirmed its “Hawkins for Schools” wording.
- Replaced the shared header/footer asset with the unmodified attachment. SHA-256 checksums of the source attachment and repository PNG match. Updated alt text to “Hawkins for Schools”; existing colors, content, and layout are unchanged.
- `npm run check` passed with zero errors, warnings, or hints, and `npm run build` succeeded. Astro generated responsive WebP versions from the new source.
- Chromium checks at 320, 390, 768, and 1440 CSS pixels confirmed both logos load from the new asset, retain their proportions, and have the correct alt text. No horizontal page-element overflow. Inspected desktop/mobile header and mobile footer screenshots; the footer logo link still returns to the top.
- Preview noindex metadata is retained. No domain, indexing, or email changes were made.
- Limits: desktop Chromium with emulated viewport sizes; no physical-device or assistive-technology testing for this asset swap.

## October 7, 2026 — final belief revision

- Read `2026_Oct_What I Believe 2.docx` in full. It contains the same three belief headings with three replacement body paragraphs; no tracked changes or additional text parts were present.
- Replaced the three paragraphs without editorial rewriting. Normalized repeated spaces. Headings and the eight October 6 priorities remain unchanged.
- Compared every rendered belief heading/body with the latest attachment and every priority with the October 6 source; all wording and ordering match.
- `npm run check` passed with zero errors, warnings, or hints. `npm run build` succeeded.
- Chromium checks at 320, 390, 768, and 1440 CSS pixels found no horizontal page or element overflow. Rechecked page overflow at 200% root text size and keyboard navigation to both content sections. Inspected desktop and phone screenshots of the revised beliefs.
- The interview embed and preview noindex metadata remain present. No custom-domain or indexing changes are included. The email's conditional launch intent is recorded in `CLIENT-QUESTIONS.md`.
- Limits: desktop Chromium with emulated sizes; no physical-device, Safari, Firefox, or assistive-technology testing for this copy update. Unchanged video playback was not retested.

## October 6, 2026 — evening copy revisions

- Read both October Word attachments in full, including checking for tracked changes and additional text parts. The belief document contains three headings and three body paragraphs; the priorities document contains eight list entries. No tracked changes or additional text parts were present.
- Replaced all three beliefs and all eight priorities with the supplied wording, including moving school assignments ahead of transportation. Preserved headings and punctuation; only repeated whitespace was normalized.
- Compared every rendered belief heading/body and priority against independently extracted attachment text. All content and ordering match.
- `npm run check` passed with zero errors, warnings, or hints, and `npm run build` succeeded.
- Chromium checks at 320, 390, 768, and 1440 CSS pixels found no horizontal page or element overflow; 200% root text also reflowed without page overflow. Inspected revised sections in phone and desktop screenshots. Keyboard links still focus both sections correctly.
- Existing interview embed and noindex metadata remain present. No design, custom-domain, or indexing changes were made. Kevin's request to review the updated page before final launch is recorded in `CLIENT-QUESTIONS.md`.
- Limits: viewport emulation in desktop Chromium, not physical-device or assistive-technology testing. Unchanged video playback was not retested during this copy revision.

## October 6, 2026 — interview embed

- Confirmed the supplied YouTube ID `0cZHzmhVvik`, title, and WSBT-TV publisher using YouTube's oEmbed response. Added the interview below the introduction, an Interview navigation link, and a direct Watch on YouTube link. The supplied beliefs and priorities are unchanged.
- `npm run check` passed with zero errors, warnings, or hints. `npm run build` passed and produced the static page.
- Chromium checks at 320, 390, 768, and 1440 CSS pixels found no page or element overflow. Repeated page-overflow checks at 200% root text size. Inspected phone, tablet, and desktop screenshots.
- Verified skip-link keyboard behavior, visible header-link focus, and Enter moving focus to the interview section. Beliefs and priorities navigation still works.
- Verified lazy loading, the privacy-enhanced embed URL, fullscreen permission, the player title, the referrer policy, and the direct YouTube link. Playback starts after clicking YouTube's Play video button; video time advanced beyond one second with `paused: false` and `readyState: 4`.
- The player remains at least 200 pixels high on narrow phones. The normal player is 16:9. No autoplay or first-party JavaScript was added; YouTube does load third-party scripts and resources inside its iframe.
- No page errors during layout checks. HTML noindex metadata remains present. No custom domain or indexing settings changed.
- Limits: tested desktop Chromium with emulated viewport sizes, not physical devices, Safari, Firefox, or assistive technologies. Playback was checked briefly, not through the full interview.

## September 25, 2026 — original campaign revision

Checked September 25, 2026 against the production build, then repeated the relevant checks after implementing Kevin's afternoon campaign-details email.

## Passed

- **Source fidelity:** Read all non-empty paragraphs in the original Word document, including checking for headers, footers, notes, or comments. Compared its title, section headings, all three complete belief statements, and all eight priorities to `dist/index.html`. Wording, punctuation, and order match after whitespace normalization.
- **Astro and TypeScript:** `npm run check` completed with zero errors, warnings, or hints.
- **Production build:** `npm run build` completed successfully and produced one static page in `dist`.
- **Cloudflare preparation:** `npm run deploy:check` completed successfully with `--dry-run`. Local Wrangler served the static page with HTTP 200 and `X-Robots-Tag: noindex, nofollow`. No deployment was performed.
- **Responsive layout:** Inspected browser screenshots and checked layout at 320, 390, 768, 1024, and 1440 CSS-pixel viewport widths. No horizontal page or element overflow. Priorities remain in source order, switching from two columns to one on phones.
- **Text enlargement:** Checked 200% root text size at 320, 390, 768, and 1440 pixels. Content reflows without horizontal overflow.
- **Navigation:** Clicked all seven non-skip section/top links; every fragment resolved and scrolled to the intended destination. Verified the additional foundation link's URL against its live homepage and About page identifying Kevin Hawkins.
- **Keyboard:** Tab reveals the skip link; Enter moves focus to the main content. Header links have visible 3px focus outlines and Enter moves focus to the correct section. Controls use native links with no JavaScript dependency.
- **Reduced motion:** With the browser's reduced-motion preference enabled, smooth scrolling is disabled and CSS transitions are removed.
- **Contrast:** All text color/background combinations in the revised red/blue palette meet at least 4.5:1. The lowest checked ratio is 5.31:1 (red on the light background); button hover is 7.19:1.
- **Browser health:** No console errors, page errors, failed requests, or external resource requests during the final browser check. Self-hosted fonts load successfully.
- **Supplied assets:** Extracted the existing transparent 2001 × 501 campaign logo from the one-page PDF. The original selfie is preserved; Astro creates responsive WebP variants. All three rendered images (two logo instances and one portrait) load and include alt text and intrinsic dimensions. Desktop, tablet, and phone screenshots were inspected.
- **Email scope:** Read Kevin's latest reply through the connected Gmail account and retrieved attachments from Spark's local cache. Implemented the confirmed name, candidate role, seat, image, artwork, and requested foundation link. Private contact details from quoted correspondence are absent from the website. No email was sent.
- **Output:** No client-side script tags. No client questions, draft email, README, or source Word document in the public build. Font license files are included.
- **Preview metadata:** Supported title and description, viewport, language, favicon, and Open Graph title/description present. No invented domain. HTML noindex metadata, Cloudflare noindex response header, and robots.txt crawl restriction present.

## Testing limits

- Layout and keyboard checks used desktop Chromium with emulated viewport sizes, not physical phones or tablets.
- Safari, Firefox, VoiceOver, and other assistive technologies were not tested. The checks above are not a complete accessibility audit.
- Actual Cloudflare publication, production DNS, HTTPS, and search-engine behavior were intentionally not tested because publication and domain connection are not authorized yet.

## Review status

The campaign revision is ready for review. Kevin's name, candidacy, district/seat, campaign purpose, logo, portrait, and ASAP timing are now supplied. His final wording review, domain ownership/access, final approver, and footer decision remain unresolved. A ballot-name spelling inconsistency is recorded for confirmation; the page uses “Kevin Hawkins” only. The biography and post-election purpose change are deferred. See `CLIENT-QUESTIONS.md`. The updated `CLIENT-EMAIL.md` is saved for review and has not been sent. No custom domain or indexing change is included.
