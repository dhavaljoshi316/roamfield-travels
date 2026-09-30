import { createFileRoute } from "@tanstack/react-router";
import {
  ArrowDown,
  ArrowRight,
  Check,
  ChevronRight,
  Compass,
  Instagram,
  Mail,
  MapPin,
  Menu,
  MessageCircle,
  Phone,
  Quote,
  Sparkles,
  X,
} from "lucide-react";
import { useState, type FormEvent, type ReactNode } from "react";

import destinationGrid from "@/assets/destinations-grid.jpg";
import experienceGrid from "@/assets/experiences-grid.jpg";
import heroImage from "@/assets/hero-lake-como.jpg";
import inspirationGrid from "@/assets/inspiration-grid.jpg";
import logoAsset from "@/assets/roamfield-logo.png.asset.json";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Roamfield Travel | Bespoke Holidays, Beautifully Planned" },
      {
        name: "description",
        content:
          "Thoughtful, tailor-made holidays from an independent UK travel company. Discover carefully chosen escapes, rich experiences and effortless planning.",
      },
      { property: "og:title", content: "Roamfield Travel | Go Further. Feel More." },
      {
        property: "og:description",
        content: "Bespoke journeys, personal service and holidays designed around you.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: HomePage,
});

const navItems = [
  ["Home", "home"],
  ["About", "about"],
  ["Destinations", "destinations"],
  ["Packages", "packages"],
  ["Experiences", "experiences"],
  ["Contact", "contact"],
] as const;

const destinations = [
  { name: "Santorini", region: "Greece", copy: "Sun-washed villages, hidden coves and long Aegean evenings.", crop: "crop-tl" },
  { name: "Kyoto", region: "Japan", copy: "Temple gardens, quiet traditions and remarkable seasonal colour.", crop: "crop-tr" },
  { name: "South Coast", region: "Iceland", copy: "Waterfalls, black shores and landscapes that feel otherworldly.", crop: "crop-bl" },
  { name: "Zanzibar", region: "Tanzania", copy: "Barefoot shores, spice-scented streets and warm Indian Ocean days.", crop: "crop-br" },
] as const;

const packages = [
  { number: "01", title: "Weekend Escapes", copy: "Beautiful places, thoughtfully planned for two or three restorative nights.", note: "2–3 nights" },
  { number: "02", title: "City Breaks", copy: "Characterful stays, neighbourhood finds and just the right amount of structure.", note: "3–5 nights" },
  { number: "03", title: "Family Holidays", copy: "Easy-going adventures with space, flexibility and something for everyone.", note: "7–14 nights" },
  { number: "04", title: "Luxury Getaways", copy: "Exceptional stays and quietly memorable details, chosen entirely around you.", note: "Tailor-made" },
] as const;

const experiences = [
  { title: "Adventure", copy: "Walk further, climb higher and return with a story worth telling.", crop: "crop-tl" },
  { title: "Culture", copy: "Meet a place through its crafts, communities and living traditions.", crop: "crop-tr" },
  { title: "Relaxation", copy: "Slow mornings, restorative spaces and absolutely nowhere else to be.", crop: "crop-bl" },
  { title: "Food", copy: "Local tables, market mornings and flavours that stay with you.", crop: "crop-br" },
] as const;

const reasons = [
  { icon: MessageCircle, title: "Personal service", copy: "One friendly travel expert, listening closely from first idea to final detail." },
  { icon: Sparkles, title: "Carefully chosen", copy: "Places and stays we trust, selected for their character rather than their hype." },
  { icon: Compass, title: "Flexible planning", copy: "No rigid templates. We shape every journey around your pace, tastes and budget." },
  { icon: MapPin, title: "Local knowledge", copy: "The small places, good tables and quieter routes that make a trip feel yours." },
] as const;

const testimonials = [
  { quote: "Roamfield understood the kind of holiday we wanted before we could quite put it into words. Every hotel felt special, and the whole trip flowed beautifully.", name: "Sophie & James", place: "Bath" },
  { quote: "Our family trip to Japan was wonderfully balanced. There was plenty to excite the children, but it never felt rushed or over-planned.", name: "The Shah family", place: "Manchester" },
  { quote: "From the first call to the little welcome note at our hotel, it felt genuinely personal. We have already asked them to plan the next one.", name: "Helen M.", place: "Edinburgh" },
] as const;

function Logo({ inverse = false }: { inverse?: boolean }) {
  return (
    <a href="#home" aria-label="Roamfield Travel home" className="block shrink-0">
      <img
        src={logoAsset.url}
        alt="Roamfield Travel"
        width={768}
        height={768}
        className={`h-14 w-36 object-contain object-center sm:h-16 sm:w-40 ${inverse ? "logo-inverse" : ""}`}
      />
    </a>
  );
}

function ButtonLink({ href, children, tone = "dark" }: { href: string; children: ReactNode; tone?: "dark" | "light" | "outline" }) {
  return (
    <a href={href} className={`button-link button-${tone}`}>
      <span>{children}</span><ArrowRight aria-hidden="true" size={17} />
    </a>
  );
}

function Eyebrow({ children, light = false }: { children: ReactNode; light?: boolean }) {
  return <p className={`eyebrow ${light ? "text-primary-foreground/75" : "text-primary"}`}>{children}</p>;
}

function SpriteImage({ src, crop, alt, grid = "two" }: { src: string; crop: string; alt: string; grid?: "two" | "three" }) {
  return <img src={src} alt={alt} loading="lazy" width={1600} height={1600} className={`sprite sprite-${grid} ${crop}`} />;
}

function HomePage() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [sent, setSent] = useState(false);

  const submitEnquiry = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSent(true);
    event.currentTarget.reset();
  };

  return (
    <main className="overflow-hidden bg-background text-foreground">
      <header className="fixed inset-x-0 top-0 z-50 border-b border-border/70 bg-background/95 backdrop-blur-sm">
        <div className="site-wrap flex h-20 items-center justify-between sm:h-24">
          <Logo />
          <nav aria-label="Main navigation" className="hidden items-center gap-7 xl:flex">
            {navItems.map(([label, id]) => <a key={id} href={`#${id}`} className="nav-link">{label}</a>)}
          </nav>
          <div className="flex items-center gap-3">
            <a href="#contact" className="button-link button-dark hidden sm:inline-flex"><span>Plan my trip</span><ArrowRight size={17} /></a>
            <button type="button" className="icon-button xl:hidden" aria-label={menuOpen ? "Close menu" : "Open menu"} aria-expanded={menuOpen} onClick={() => setMenuOpen((value) => !value)}>
              {menuOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>
        {menuOpen && (
          <nav aria-label="Mobile navigation" className="mobile-menu animate-fade-in xl:hidden">
            {navItems.map(([label, id]) => <a key={id} href={`#${id}`} onClick={() => setMenuOpen(false)}>{label}<ChevronRight size={17} /></a>)}
          </nav>
        )}
      </header>

      <section id="home" className="relative min-h-[92svh] pt-20 sm:pt-24">
        <img src={heroImage} alt="A classic boat cruising past villas on Lake Como" width={1920} height={1280} className="absolute inset-0 h-full w-full object-cover" />
        <div className="hero-shade absolute inset-0" />
        <div className="site-wrap relative flex min-h-[calc(92svh-5rem)] items-end pb-14 pt-28 sm:min-h-[calc(92svh-6rem)] sm:pb-20 lg:pb-24">
          <div className="max-w-4xl animate-fade-in text-primary-foreground">
            <Eyebrow light>Bespoke travel, beautifully considered</Eyebrow>
            <h1 className="mt-5 max-w-4xl font-display text-5xl font-semibold leading-[0.98] sm:text-7xl lg:text-[6.6rem]">Explore more.<br /><em className="font-medium">Travel your way.</em></h1>
            <p className="mt-6 max-w-xl text-base font-medium leading-7 text-primary-foreground/85 sm:text-lg">Thoughtful journeys, inspiring places and every detail taken care of — by people who love travel as much as you do.</p>
            <div className="mt-8 flex flex-wrap gap-3"><ButtonLink href="#destinations" tone="light">Explore destinations</ButtonLink><ButtonLink href="#contact" tone="outline">Plan my trip</ButtonLink></div>
          </div>
          <a href="#about" aria-label="Scroll to about" className="scroll-cue hidden lg:flex"><ArrowDown size={18} /><span>Discover more</span></a>
        </div>
      </section>

      <section id="about" className="section-pad scroll-mt-20">
        <div className="site-wrap grid items-end gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-24">
          <div><Eyebrow>Our approach</Eyebrow><h2 className="section-title mt-5">Travel should feel exciting, <em>not complicated.</em></h2></div>
          <div className="border-l border-gold/50 pl-7 sm:pl-10">
            <p className="text-xl font-semibold leading-8 text-foreground sm:text-2xl sm:leading-9">Roamfield is an independent UK travel company creating holidays that feel considered, personal and refreshingly effortless.</p>
            <p className="mt-5 max-w-2xl leading-7 text-muted-foreground">We take time to understand how you want to feel when you travel — then bring together the right places, stays and experiences. No off-the-shelf itineraries. Just honest advice, thoughtful details and a journey that fits you.</p>
            <div className="mt-8 flex flex-wrap gap-x-10 gap-y-4 text-sm font-bold uppercase tracking-[0.13em]"><span>Independent expertise</span><span>UK based</span><span>Truly tailor-made</span></div>
          </div>
        </div>
      </section>

      <section id="destinations" className="section-pad scroll-mt-20 bg-secondary">
        <div className="site-wrap">
          <div className="section-head"><div><Eyebrow>Where will you go?</Eyebrow><h2 className="section-title mt-4">Places worth <em>going further for.</em></h2></div><p>From quiet islands to culture-rich cities, these are starting points. Your journey will always be shaped around you.</p></div>
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:mt-16 lg:grid-cols-4">
            {destinations.map((item, index) => (
              <article key={item.name} className={`destination-card group ${index === 1 || index === 3 ? "lg:translate-y-10" : ""}`}>
                <div className="relative h-80 overflow-hidden sm:h-96"><SpriteImage src={destinationGrid} crop={item.crop} alt={`${item.name}, ${item.region}`} /><span className="absolute left-5 top-5 rounded-full bg-background/90 px-3 py-1.5 text-xs font-bold uppercase tracking-[0.12em] text-foreground">{item.region}</span></div>
                <div className="p-6"><h3 className="font-display text-3xl font-semibold">{item.name}</h3><p className="mt-2 text-sm leading-6 text-muted-foreground">{item.copy}</p><a href="#contact" className="mt-5 inline-flex items-center gap-2 text-sm font-bold text-primary">Explore <ArrowRight size={15} /></a></div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="packages" className="section-pad scroll-mt-20">
        <div className="site-wrap">
          <div className="section-head"><div><Eyebrow>Ways to travel</Eyebrow><h2 className="section-title mt-4">A holiday for <em>every season.</em></h2></div><p>Each idea is a loose beginning, not a fixed package. Tell us what matters and we will make it your own.</p></div>
          <div className="mt-12 divide-y divide-border border-y border-border lg:mt-16">
            {packages.map((item) => (
              <article key={item.title} className="package-row group">
                <span className="font-display text-2xl text-gold">{item.number}</span><div><h3 className="font-display text-3xl font-semibold sm:text-4xl">{item.title}</h3><p className="mt-2 max-w-xl leading-7 text-muted-foreground">{item.copy}</p></div><span className="text-sm font-bold uppercase tracking-[0.12em] text-muted-foreground">{item.note}</span><a href="#contact" aria-label={`Enquire about ${item.title}`} className="round-arrow"><ArrowRight size={20} /></a>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="experiences" className="section-pad scroll-mt-20 bg-primary text-primary-foreground">
        <div className="site-wrap">
          <div className="max-w-3xl"><Eyebrow light>Travel with feeling</Eyebrow><h2 className="section-title mt-4">Not just where you go. <em>How it feels.</em></h2></div>
          <div className="mt-12 grid gap-5 md:grid-cols-2 lg:mt-16">
            {experiences.map((item, index) => (
              <article key={item.title} className={`experience-card group ${index === 0 || index === 3 ? "lg:h-[34rem]" : "lg:h-[27rem]"}`}>
                <SpriteImage src={experienceGrid} crop={item.crop} alt={`${item.title} travel experience`} />
                <div className="hero-shade absolute inset-0" /><div className="absolute inset-x-0 bottom-0 p-7 sm:p-9"><span className="text-xs font-bold uppercase tracking-[0.16em] text-primary-foreground/70">0{index + 1}</span><h3 className="mt-2 font-display text-4xl font-semibold sm:text-5xl">{item.title}</h3><p className="mt-2 max-w-md leading-7 text-primary-foreground/80">{item.copy}</p></div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section-pad">
        <div className="site-wrap">
          <div className="text-center"><Eyebrow>Why Roamfield</Eyebrow><h2 className="section-title mx-auto mt-4 max-w-3xl">Travel planning, made <em>genuinely personal.</em></h2></div>
          <div className="mt-12 grid border-y border-border sm:grid-cols-2 lg:mt-16 lg:grid-cols-4 lg:divide-x lg:divide-border">
            {reasons.map((item, index) => <article key={item.title} className="reason-item"><span className="mb-8 flex h-12 w-12 items-center justify-center rounded-full bg-accent text-primary"><item.icon size={21} /></span><span className="text-xs font-bold text-gold">0{index + 1}</span><h3 className="mt-3 font-display text-2xl font-semibold">{item.title}</h3><p className="mt-3 text-sm leading-6 text-muted-foreground">{item.copy}</p></article>)}
          </div>
        </div>
      </section>

      <section className="section-pad border-y border-border bg-secondary">
        <div className="site-wrap">
          <div className="section-head"><div><Eyebrow>Travel inspiration</Eyebrow><h2 className="section-title mt-4">Moments that <em>move you.</em></h2></div><p>A glimpse of the roads, tables, coastlines and quiet corners that stay with us long after coming home.</p></div>
          <div className="gallery mt-12 lg:mt-16">
            {["Scotland", "Amalfi Coast", "Kenya", "Atlantic coast", "Paris", "Swiss Alps"].map((label, index) => {
              const crops = ["crop-3-tl", "crop-3-tm", "crop-3-tr", "crop-3-bl", "crop-3-bm", "crop-3-br"];
              return <figure key={label} className={`gallery-item gallery-${index + 1}`}><SpriteImage src={inspirationGrid} crop={crops[index] ?? "crop-3-tl"} alt={`Travel moment in ${label}`} grid="three" /><figcaption>{label}</figcaption></figure>;
            })}
          </div>
        </div>
      </section>

      <section className="section-pad">
        <div className="site-wrap"><div className="text-center"><Eyebrow>Traveller stories</Eyebrow><h2 className="section-title mx-auto mt-4 max-w-3xl">Lovely trips. <em>Lasting memories.</em></h2></div>
          <div className="mt-12 grid gap-5 lg:mt-16 lg:grid-cols-3">{testimonials.map((item) => <blockquote key={item.name} className="testimonial"><Quote className="text-gold" size={30} strokeWidth={1.5} /><p className="mt-8 font-display text-2xl font-semibold leading-9">“{item.quote}”</p><footer className="mt-8 border-t border-border pt-5"><strong className="block text-sm">{item.name}</strong><span className="mt-1 block text-xs font-bold uppercase tracking-[0.13em] text-muted-foreground">{item.place}</span></footer></blockquote>)}</div>
        </div>
      </section>

      <section className="relative min-h-[34rem] overflow-hidden bg-primary text-primary-foreground">
        <img src={heroImage} alt="Lake Como shoreline in evening light" loading="lazy" width={1920} height={1280} className="absolute inset-0 h-full w-full object-cover object-center opacity-40" /><div className="hero-shade absolute inset-0" />
        <div className="site-wrap relative flex min-h-[34rem] flex-col items-center justify-center py-24 text-center"><Eyebrow light>The world is waiting</Eyebrow><h2 className="mt-5 max-w-4xl font-display text-5xl font-semibold leading-tight sm:text-7xl">Your next journey <em>starts here.</em></h2><p className="mt-5 max-w-lg leading-7 text-primary-foreground/80">Tell us what you are dreaming of. We will take care of the rest.</p><div className="mt-8"><ButtonLink href="#contact" tone="light">Plan my trip</ButtonLink></div></div>
      </section>

      <section id="contact" className="section-pad scroll-mt-20">
        <div className="site-wrap grid gap-14 lg:grid-cols-[0.78fr_1.22fr] lg:gap-20">
          <div><Eyebrow>Start a conversation</Eyebrow><h2 className="section-title mt-4">Where would you <em>love to go?</em></h2><p className="mt-6 max-w-md leading-7 text-muted-foreground">Share a few details and one of our travel experts will be in touch to start shaping your journey.</p>
            <div className="mt-10 space-y-5 text-sm font-semibold"><a href="mailto:hello@roamfieldtravel.co.uk" className="contact-link"><Mail size={18} />hello@roamfieldtravel.co.uk</a><a href="tel:+442038855420" className="contact-link"><Phone size={18} />+44 (0)20 3885 5420</a><p className="contact-link"><MapPin size={18} />London, United Kingdom</p></div>
          </div>
          <form onSubmit={submitEnquiry} className="enquiry-form">
            <div className="grid gap-5 sm:grid-cols-2"><label>Name<input name="name" required placeholder="Your name" /></label><label>Email<input name="email" required type="email" placeholder="you@example.com" /></label><label>Destination<input name="destination" placeholder="Where are you thinking?" /></label><label>Travel date<input name="date" type="date" /></label></div><label className="mt-5">Tell us a little more<textarea name="message" rows={5} placeholder="Who is travelling, what you enjoy, and anything already on your wish list..." /></label>
            <div className="mt-6 flex flex-col items-start gap-4 sm:flex-row sm:items-center sm:justify-between"><button type="submit" className="button-link button-dark"><span>Send my enquiry</span><ArrowRight size={17} /></button>{sent && <p role="status" className="flex items-center gap-2 text-sm font-bold text-primary"><Check size={17} />Thank you — your enquiry is ready.</p>}</div>
          </form>
        </div>
      </section>

      <footer className="bg-primary py-14 text-primary-foreground sm:py-20">
        <div className="site-wrap"><div className="grid gap-12 border-b border-primary-foreground/15 pb-12 md:grid-cols-[1.3fr_0.7fr_0.8fr]">
          <div><Logo inverse /><p className="mt-5 max-w-sm text-sm leading-6 text-primary-foreground/65">Independent UK travel specialists creating thoughtful, tailor-made journeys with warmth and care.</p></div>
          <div><p className="footer-heading">Explore</p><div className="mt-5 grid gap-3 text-sm text-primary-foreground/70">{navItems.slice(1, 5).map(([label, id]) => <a key={id} href={`#${id}`}>{label}</a>)}</div></div>
          <div><p className="footer-heading">Stay inspired</p><p className="mt-5 text-sm text-primary-foreground/65">A little travel inspiration, now and then.</p><div className="mt-5 flex gap-3"><a href="#contact" className="social-link" aria-label="Instagram"><Instagram size={17} /></a><a href="mailto:hello@roamfieldtravel.co.uk" className="social-link" aria-label="Email"><Mail size={17} /></a></div></div>
        </div><div className="flex flex-col gap-4 pt-7 text-xs text-primary-foreground/50 sm:flex-row sm:items-center sm:justify-between"><p>© 2026 Roamfield Travel. All rights reserved.</p><div className="flex gap-6"><a href="#contact">Privacy policy</a><a href="#contact">Terms & conditions</a></div></div></div>
      </footer>
    </main>
  );
}