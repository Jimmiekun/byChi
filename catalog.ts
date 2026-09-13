export const brand = {
  name: "Atelier Noir",
  eyebrow: "Private collection · Lagos / worldwide",
  tagline: "Objects with presence.",
  description:
    "A considered edit of exceptional pieces for those who prefer the unforgettable.",
  whatsappNumber: "2348169502660",
  whatsappLabel: "+234 816 950 2660",
  whatsappMessage:
    "Hello Atelier Noir, I would like to make a private enquiry about your collection.",
  email: "hello@ateliernoir.example",
};

export const socialLinks = {
  instagram: "https://www.instagram.com/",
  tiktok: "https://www.tiktok.com/",
  facebook: "https://www.facebook.com/",
};

export type ProductCategory = "Leather" | "Jewellery" | "Timepieces" | "Objects";

export type Product = {
  name: string;
  category: ProductCategory;
  descriptor: string;
  image: string;
  accent: string;
  featured?: boolean;
};

// Add or replace products here. Keep the same object shape for a seamless catalog update.
export const products: Product[] = [
  {
    name: "The Sculpted Carryall",
    category: "Leather",
    descriptor: "Italian leather · hand finished",
    image:
      "https://images.unsplash.com/photo-1548036328-c9fa89d128fa?auto=format&fit=crop&w=1200&q=88",
    accent: "01 / 04",
    featured: true,
  },
  {
    name: "No. 07 Parfum",
    category: "Objects",
    descriptor: "Orris · smoked cedar · amber",
    image:
      "https://images.unsplash.com/photo-1541643600914-78b084683601?auto=format&fit=crop&w=1200&q=88",
    accent: "02 / 04",
    featured: true,
  },
  {
    name: "The Signet Study",
    category: "Jewellery",
    descriptor: "Brushed gold · obsidian",
    image:
      "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?auto=format&fit=crop&w=1200&q=88",
    accent: "03 / 04",
    featured: true,
  },
  {
    name: "The Meridian 38",
    category: "Timepieces",
    descriptor: "Steel · midnight dial · automatic",
    image:
      "https://images.unsplash.com/photo-1524805444758-089113d48a6d?auto=format&fit=crop&w=1200&q=88",
    accent: "04 / 04",
    featured: true,
  },
  {
    name: "The Verve Loafer",
    category: "Objects",
    descriptor: "Hand-burnished calfskin",
    image:
      "https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=1200&q=88",
    accent: "05 / 08",
  },
  {
    name: "The Frame No. 2",
    category: "Objects",
    descriptor: "Sculptural acetate · smoked lens",
    image:
      "https://images.unsplash.com/photo-1511499767150-a48a237f0083?auto=format&fit=crop&w=1200&q=88",
    accent: "06 / 08",
  },
  {
    name: "The Atelier Chain",
    category: "Jewellery",
    descriptor: "18k gold vermeil · hand linked",
    image:
      "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?auto=format&fit=crop&w=1200&q=88",
    accent: "07 / 08",
  },
  {
    name: "The Valet Tray",
    category: "Objects",
    descriptor: "Full-grain leather · brass edge",
    image:
      "https://images.unsplash.com/photo-1584917865442-de89df76afd3?auto=format&fit=crop&w=1200&q=88",
    accent: "08 / 08",
  },
];

export const categories: Array<"All" | ProductCategory> = [
  "All",
  "Leather",
  "Jewellery",
  "Timepieces",
  "Objects",
];

export function whatsappHref(message = brand.whatsappMessage) {
  return `https://wa.me/${brand.whatsappNumber}?text=${encodeURIComponent(message)}`;
}
