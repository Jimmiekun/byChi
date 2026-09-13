import { useMemo, useState } from "react";
import {
  ArrowUpRight,
  ChevronDown,
  Instagram,
  Mail,
  Menu,
  MessageCircle,
  MoveRight,
  Play,
  Plus,
  ShoppingBag,
  Sparkles,
  X,
} from "lucide-react";
import { brand, categories, products, socialLinks, type ProductCategory, whatsappHref } from "@/lib/catalog";

function SectionLabel({ children, light = false }: { children: React.ReactNode; light?: boolean }) {
  return (
    <div className={`flex items-center gap-3 text-[10px] font-semibold uppercase tracking-[0.24em] ${light ? "text-[#e4c26b]" : "text-[#a1864b]"}`}>
      <span className={`h-px w-8 ${light ? "bg-[#c7a85c]" : "bg-[#bca66d]"}`} />
      {children}
    </div>
  );
}

function ProductCard({ product, index }: { product: (typeof products)[number]; index: number }) {
  return (
    <article className={`group ${index === 0 ? "md:col-span-2" : ""}`}>
      <a href="#contact" className="block" aria-label={`Enquire about ${product.name}`}>
        <div className={`relative overflow-hidden bg-[#e7e1d6] ${index === 0 ? "aspect-[16/10]" : "aspect-[4/5]"}`}>
          <img
            src={product.image}
            alt={product.name}
            loading={index > 1 ? "lazy" : "eager"}
            className="h-full w-full object-cover transition duration-700 ease-out group-hover:scale-[1.045]"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#11100e]/45 via-transparent to-transparent opacity-70" />
          <div className="absolute left-5 top-5 text-[10px] font-semibold uppercase tracking-[0.2em] text-white/80">
            {product.accent}
          </div>
          <div className="absolute bottom-4 left-5 right-5 flex items-end justify-between text-white">
            <span className="text-[10px] uppercase tracking-[0.2em] text-white/70">{product.category}</span>
            <span className="flex h-10 w-10 items-center justify-center rounded-full border border-white/50 bg-white/10 opacity-0 backdrop-blur-sm transition duration-300 group-hover:opacity-100">
              <ArrowUpRight size={16} strokeWidth={1.5} />
            </span>
          </div>
        </div>
        <div className="flex items-start justify-between gap-4 border-b border-[#d9d1c4] py-5">
          <div>
            <h3 className="font-display text-[clamp(1.2rem,2.2vw,1.75rem)] leading-none text-[#1b1a17]">{product.name}</h3>
            <p className="mt-2 text-xs tracking-[0.08em] text-[#7d756b]">{product.descriptor}</p>
          </div>
          <Plus size={17} strokeWidth={1.25} className="mt-1 shrink-0 text-[#a1864b] transition duration-300 group-hover:rotate-90" />
        </div>
      </a>
    </article>
  );
}

export default function Home() {
  const [activeCategory, setActiveCategory] = useState<"All" | ProductCategory>("All");
  const [menuOpen, setMenuOpen] = useState(false);

  const visibleProducts = useMemo(
    () => activeCategory === "All" ? products : products.filter((product) => product.category === activeCategory),
    [activeCategory],
  );

  return (
    <div className="min-h-screen overflow-hidden bg-[#f3f0e9] text-[#1b1a17] selection:bg-[#c8ab69] selection:text-[#161512]">
      <header className="absolute left-0 right-0 top-0 z-50 px-5 py-5 sm:px-8 lg:px-12">
        <div className="mx-auto flex max-w-[1440px] items-center justify-between">
          <a href="#top" className="font-display text-xl tracking-[0.2em] text-[#f7f2e8] sm:text-2xl">ATELIER NOIR</a>
          <nav className="hidden items-center gap-9 text-[10px] font-semibold uppercase tracking-[0.22em] text-white/75 md:flex">
            <a href="#collection" className="transition hover:text-white">Collection</a>
            <a href="#atelier" className="transition hover:text-white">The Atelier</a>
            <a href="#contact" className="transition hover:text-white">Contact</a>
          </nav>
          <div className="flex items-center gap-3">
            <a href={whatsappHref()} target="_blank" rel="noreferrer" className="hidden items-center gap-2 rounded-full border border-[#d4b66e]/60 bg-[#201e1a]/30 px-4 py-2.5 text-[10px] font-semibold uppercase tracking-[0.18em] text-[#f6e1a7] backdrop-blur-sm transition hover:bg-[#d4b66e] hover:text-[#201e1a] sm:flex">
              <MessageCircle size={13} strokeWidth={1.5} /> Private enquiry
            </a>
            <button aria-label={menuOpen ? "Close menu" : "Open menu"} onClick={() => setMenuOpen((open) => !open)} className="flex h-10 w-10 items-center justify-center rounded-full border border-white/30 text-white md:hidden">
              {menuOpen ? <X size={18} /> : <Menu size={18} />}
            </button>
          </div>
        </div>
        {menuOpen && (
          <nav className="mt-4 rounded-2xl border border-white/15 bg-[#191815]/95 p-5 text-sm text-white shadow-2xl backdrop-blur-lg md:hidden">
            <a onClick={() => setMenuOpen(false)} href="#collection" className="block border-b border-white/10 py-3">Collection</a>
            <a onClick={() => setMenuOpen(false)} href="#atelier" className="block border-b border-white/10 py-3">The Atelier</a>
            <a onClick={() => setMenuOpen(false)} href="#contact" className="block py-3">Contact</a>
          </nav>
        )}
      </header>

      <main id="top">
        <section className="relative min-h-[740px] overflow-hidden bg-[#1d1b17] text-[#f6f1e8] lg:min-h-[820px]">
          <img
            src="https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&w=2000&q=88"
            alt="Warmly lit luxury interior with a sculptural table"
            className="absolute inset-0 h-full w-full object-cover object-center opacity-55"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#11100e]/95 via-[#151310]/65 to-[#151310]/20" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_76%_24%,rgba(208,174,100,0.18),transparent_28%)]" />
          <div className="absolute bottom-8 left-5 right-5 top-0 mx-auto max-w-[1440px] sm:left-8 sm:right-8 lg:left-12 lg:right-12">
            <div className="flex h-full flex-col justify-end pb-20 sm:pb-24 lg:pb-28">
              <div className="max-w-4xl animate-in fade-in slide-in-from-bottom-3 duration-700">
                <SectionLabel light>Curated for distinction</SectionLabel>
                <h1 className="mt-7 max-w-4xl font-display text-[clamp(4.5rem,10vw,9.5rem)] leading-[0.82] tracking-[-0.05em] text-[#f6f1e8]">
                  Objects<br /><em className="ml-[12vw] text-[#d6b873]">with</em><br />presence.
                </h1>
                <div className="mt-9 flex max-w-xl flex-col gap-6 sm:ml-[12vw] sm:flex-row sm:items-end sm:justify-between">
                  <p className="max-w-[260px] text-sm leading-6 text-white/65">{brand.description}</p>
                  <a href="#collection" className="group flex items-center gap-3 text-[10px] font-semibold uppercase tracking-[0.23em] text-[#f2db9a]">
                    Explore the edit <span className="flex h-9 w-9 items-center justify-center rounded-full border border-[#d4b66e]/60 transition group-hover:bg-[#d4b66e] group-hover:text-[#201e1a]"><MoveRight size={15} strokeWidth={1.2} /></span>
                  </a>
                </div>
              </div>
            </div>
            <div className="absolute bottom-7 right-0 hidden items-center gap-3 text-[10px] uppercase tracking-[0.2em] text-white/50 sm:flex">
              <span className="h-px w-14 bg-white/35" /> Lagos · 06°27′N 03°24′E
            </div>
          </div>
        </section>

        <section id="collection" className="bg-[#f3f0e9] px-5 py-24 sm:px-8 lg:px-12 lg:py-32">
          <div className="mx-auto max-w-[1440px]">
            <div className="flex flex-col justify-between gap-10 border-b border-[#d9d1c4] pb-10 lg:flex-row lg:items-end">
              <div>
                <SectionLabel>The current edit</SectionLabel>
                <h2 className="mt-6 max-w-xl font-display text-[clamp(3.2rem,6vw,6rem)] leading-[0.86] tracking-[-0.045em]">Quietly<br /><em className="text-[#a1864b]">magnetic.</em></h2>
              </div>
              <p className="max-w-sm text-sm leading-6 text-[#6d665c]">A rotating selection of considered pieces. Each one chosen for its material, its line, and the way it stays with you.</p>
            </div>
            <div className="mt-10 flex items-center justify-between gap-6 overflow-x-auto pb-2">
              <div className="flex shrink-0 gap-2">
                {categories.map((category) => (
                  <button key={category} onClick={() => setActiveCategory(category)} className={`rounded-full border px-4 py-2.5 text-[10px] font-semibold uppercase tracking-[0.17em] transition ${activeCategory === category ? "border-[#211f1b] bg-[#211f1b] text-[#f6f1e8]" : "border-[#cec6b9] text-[#6f685d] hover:border-[#211f1b] hover:text-[#211f1b]"}`}>
                    {category}
                  </button>
                ))}
              </div>
              <span className="hidden shrink-0 text-[10px] uppercase tracking-[0.18em] text-[#9b9285] sm:block">{visibleProducts.length.toString().padStart(2, "0")} pieces</span>
            </div>
            <div className="mt-8 grid grid-cols-1 gap-x-6 gap-y-12 md:grid-cols-2">
              {visibleProducts.map((product, index) => <ProductCard key={product.name} product={product} index={index} />)}
            </div>
          </div>
        </section>

        <section id="atelier" className="relative overflow-hidden bg-[#22201c] px-5 py-24 text-[#f5f0e6] sm:px-8 lg:px-12 lg:py-32">
          <div className="absolute -right-24 -top-28 h-96 w-96 rounded-full border border-[#c8a95e]/20" />
          <div className="absolute -right-10 -top-14 h-64 w-64 rounded-full border border-[#c8a95e]/15" />
          <div className="relative mx-auto grid max-w-[1440px] gap-16 lg:grid-cols-[1fr_1.2fr] lg:items-end">
            <div>
              <SectionLabel light>The atelier</SectionLabel>
              <h2 className="mt-7 max-w-lg font-display text-[clamp(3.4rem,7vw,7rem)] leading-[0.84] tracking-[-0.05em]">Less, but<br /><em className="text-[#d3b56c]">better.</em></h2>
            </div>
            <div className="max-w-xl lg:pb-2">
              <p className="text-lg leading-8 text-white/70">Atelier Noir is an invitation to choose with intention. We seek out tactile materials, enduring silhouettes, and the small details that make an everyday ritual feel entirely your own.</p>
              <div className="mt-10 grid grid-cols-2 gap-8 border-t border-white/15 pt-6 sm:grid-cols-3">
                <div><span className="font-display text-3xl text-[#e0c47f]">01</span><p className="mt-2 text-[10px] uppercase tracking-[0.16em] text-white/45">Curated pieces</p></div>
                <div><span className="font-display text-3xl text-[#e0c47f]">04</span><p className="mt-2 text-[10px] uppercase tracking-[0.16em] text-white/45">Material stories</p></div>
                <div><span className="font-display text-3xl text-[#e0c47f]">∞</span><p className="mt-2 text-[10px] uppercase tracking-[0.16em] text-white/45">Personal style</p></div>
              </div>
            </div>
          </div>
        </section>

        <section id="contact" className="bg-[#c8aa64] px-5 py-24 sm:px-8 lg:px-12 lg:py-32">
          <div className="mx-auto grid max-w-[1440px] gap-14 lg:grid-cols-[1.2fr_0.8fr] lg:items-end">
            <div>
              <div className="flex items-center gap-3 text-[10px] font-semibold uppercase tracking-[0.24em] text-[#3e3321]"><span className="h-px w-8 bg-[#3e3321]/60" /> Begin a conversation</div>
              <h2 className="mt-7 max-w-3xl font-display text-[clamp(3.5rem,8vw,8rem)] leading-[0.82] tracking-[-0.055em] text-[#272116]">Your next<br /><em>signature.</em></h2>
              <p className="mt-8 max-w-md text-sm leading-6 text-[#4b3d27]">For availability, sourcing, or a private viewing, our team is one message away.</p>
            </div>
            <div className="lg:justify-self-end lg:text-right">
              <a href={whatsappHref()} target="_blank" rel="noreferrer" className="group inline-flex items-center gap-4 border-b border-[#332918] pb-4 text-left text-lg text-[#2b2317] transition hover:border-[#f9f0db] hover:text-[#f9f0db]">
                <span className="flex h-12 w-12 items-center justify-center rounded-full border border-[#332918] transition group-hover:border-[#f9f0db]"><MessageCircle size={20} strokeWidth={1.35} /></span>
                <span><span className="block text-[10px] font-semibold uppercase tracking-[0.18em]">WhatsApp us</span><span className="mt-1 block font-display text-2xl">{brand.whatsappLabel}</span></span>
                <ArrowUpRight size={18} strokeWidth={1.3} className="ml-3" />
              </a>
              <a href={`mailto:${brand.email}`} className="mt-7 flex items-center justify-end gap-3 text-xs text-[#55452b] transition hover:text-[#f9f0db]"><Mail size={14} strokeWidth={1.5} /> {brand.email}</a>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-[#151411] px-5 py-10 text-[#f6f1e8] sm:px-8 lg:px-12">
        <div className="mx-auto flex max-w-[1440px] flex-col gap-8 md:flex-row md:items-end md:justify-between">
          <div><div className="font-display text-xl tracking-[0.2em]">ATELIER NOIR</div><p className="mt-3 text-[10px] uppercase tracking-[0.16em] text-white/40">{brand.eyebrow}</p></div>
          <div className="flex flex-wrap items-center gap-6 text-[10px] font-semibold uppercase tracking-[0.18em] text-white/55">
            <a href={socialLinks.instagram} target="_blank" rel="noreferrer" className="flex items-center gap-2 transition hover:text-white"><Instagram size={14} strokeWidth={1.4} /> Instagram</a>
            <a href={socialLinks.tiktok} target="_blank" rel="noreferrer" className="transition hover:text-white">TikTok</a>
            <a href={socialLinks.facebook} target="_blank" rel="noreferrer" className="transition hover:text-white">Facebook</a>
            <a href="#top" className="flex items-center gap-2 text-[#c8aa64] transition hover:text-white">Back to top <ChevronDown size={13} className="rotate-180" /></a>
          </div>
        </div>
        <div className="mx-auto mt-9 flex max-w-[1440px] items-center justify-between border-t border-white/10 pt-5 text-[10px] uppercase tracking-[0.15em] text-white/30"><span>© 2026 Atelier Noir</span><span className="hidden sm:block">A considered way of living</span></div>
      </footer>

      <a href={whatsappHref()} target="_blank" rel="noreferrer" aria-label="Chat with Atelier Noir on WhatsApp" className="fixed bottom-5 right-5 z-40 flex h-14 w-14 items-center justify-center rounded-full bg-[#c8aa64] text-[#211d16] shadow-[0_12px_30px_rgba(0,0,0,0.2)] transition hover:-translate-y-1 hover:bg-[#eed58f] sm:bottom-7 sm:right-7"><MessageCircle size={24} strokeWidth={1.45} /></a>
    </div>
  );
}
