# Atelier Noir — Luxury Product Showcase

A high-end, editorial-style React + Vite website for a premium product business. The visual system uses a dark charcoal hero, warm ivory catalog surfaces, muted gold accents, and a serif display typeface paired with a clean sans-serif for detail copy.

## Quick start

```bash
pnpm install
pnpm dev
```

Then open the local Vite URL shown in the terminal. To create a production build:

```bash
pnpm check
pnpm build
```

## The easiest way to edit the website

The main content system lives in `client/src/lib/catalog.ts`. This is the first file to update when adding products or changing contact details.

### Add a product

Add another object to the `products` array using the existing shape:

```ts
{
  name: "Your product name",
  category: "Leather", // Leather | Jewellery | Timepieces | Objects
  descriptor: "Material · finish · detail",
  image: "https://your-image-url.com/product.jpg",
  accent: "09 / 09",
  featured: false,
}
```

The catalog automatically renders the new item and makes it available under the category filters. Replace the sample Unsplash URLs with the business's product images when ready. For deployment-safe large media, use the WebDev asset upload workflow and paste the returned `/manus-storage/...` path into `image`.

### Change the brand and WhatsApp number

Update the `brand` object in `client/src/lib/catalog.ts`. The WhatsApp link is generated automatically by `whatsappHref()` and is used in the header, contact section, and floating action button.

Current WhatsApp destination: `+234 816 950 2660`

### Add real social media profiles

Replace the placeholder URLs in `socialLinks` with the business's actual Instagram, TikTok, and Facebook URLs. The links are used in the footer.

## Main files

| File | Purpose |
| --- | --- |
| `client/src/lib/catalog.ts` | Brand settings, WhatsApp/social links, categories, and product records |
| `client/src/pages/Home.tsx` | Homepage sections, responsive navigation, filters, catalog cards, and contact actions |
| `client/src/index.css` | Fonts, colors, grain texture, global styles, and motion preferences |
| `client/index.html` | Page title, metadata, and theme color |
| `README.md` | This handoff guide |

## Page structure

The homepage is intentionally a single scrolling experience:

1. Hero — brand statement and entry to the collection.
2. Collection — filterable product grid with enquiry links.
3. The Atelier — brand point of view and positioning.
4. Contact — WhatsApp, email, and private enquiry CTA.
5. Footer — social links and return-to-top control.

## Notes for future editors

Keep the `Product` object shape stable so the grid remains automatic. If the product categories change, update both the `ProductCategory` type and the `categories` array. The website is static/client-only by design; product enquiry currently opens WhatsApp rather than processing payments or orders.

Generated folders such as `dist/` and installed dependencies are intentionally excluded from the downloadable ZIP. Run `pnpm install` after extracting the project.
