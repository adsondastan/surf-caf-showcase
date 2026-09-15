import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, MapPin } from "lucide-react";
import heroAsset from "../assets/surf-cafe-fachada-oficial.jpg.asset.json";
import coffeeImage from "../assets/surf-cafe-coffee-demo.jpg";
import tableImage from "../assets/surf-cafe-table-demo.jpg";
import { restaurant, featuredMenu } from "../data/restaurant";
import { Button } from "../components/ui/button";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Surf Café Nampula | Restaurante, Café & Bar" },
      { name: "description", content: "Surf Café em Nampula. Consulte o nosso menu, conheça o espaço, faça a sua reserva e entre em contacto connosco." },
      { property: "og:title", content: "Surf Café Nampula | Restaurante, Café & Bar" },
      { property: "og:description", content: "Menu, reservas e contactos do Surf Café em Nampula." },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: Index,
});

// IMPORTANT: Replace this placeholder. See ./README.md for routing conventions.
function Index() {
  return (
    <div className="bg-background text-foreground">
      <section className="relative mx-auto max-w-[1600px]">
        <div className="aspect-[3/4] w-full overflow-hidden bg-muted md:aspect-[16/9] lg:aspect-[2/1]">
          <img src={heroAsset.url} width={1079} height={559} fetchPriority="high" className="h-full w-full object-cover" alt="Fachada oficial do Surf Café em Nampula" />
        </div>
        <div className="relative z-10 mx-5 -mt-28 max-w-3xl bg-background px-5 pb-7 pt-8 md:mx-12 md:-mt-44 md:px-10 lg:mx-20">
          <div className="animate-reveal flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.2em] text-brand-soft"><MapPin className="size-3" />Nampula, Moçambique</div>
          <h1 className="animate-reveal mt-5 flex flex-col font-serif text-[clamp(4.6rem,18vw,10rem)] font-extrabold italic leading-[0.78] tracking-normal [animation-delay:100ms]"><span>SURF</span><span className="pl-8 md:pl-20">CAFÉ</span></h1>
          <p className="animate-reveal mt-8 max-w-[38ch] font-mono text-xs leading-6 text-foreground/75 [animation-delay:180ms]">Gastronomia, café e bons momentos num ambiente descontraído em Nampula.</p>
          <div className="animate-reveal mt-7 grid grid-cols-2 gap-2 [animation-delay:260ms]">
            <Button asChild size="lg" className="h-14 rounded-none font-mono text-[10px] uppercase tracking-[0.16em]"><Link to="/menu">Ver menu</Link></Button>
            <Button asChild size="lg" variant="outline" className="h-14 rounded-none font-mono text-[10px] uppercase tracking-[0.16em]"><Link to="/reservas">Reservar mesa</Link></Button>
          </div>
        </div>
      </section>

      <section className="mt-6 grid grid-cols-2 divide-x divide-border border-y border-border md:grid-cols-4">
        <Info label="Segunda — Sexta" value="06h — 23h" />
        <Info label="Sábado — Domingo" value="07h — 23h" />
        <Info label="Avaliação encontrada" value="4,2 / 5" />
        <Info label="Local" value="Rua das FPLM" />
      </section>

      <section className="mx-auto max-w-6xl px-6 py-20 md:py-28">
        <div className="mb-10 flex items-baseline justify-between border-b border-primary pb-6">
          <h2 className="font-serif text-4xl font-bold italic md:text-5xl">Destaques</h2>
          <Link to="/menu" className="font-mono text-[10px] uppercase tracking-[0.18em] text-muted-foreground">Menu completo</Link>
        </div>
        <div className="grid gap-10 md:grid-cols-2">
          {featuredMenu.map((item) => <article key={item.name} className="border-l-2 border-border pl-5"><div className="grid grid-cols-[minmax(0,1fr)_auto] items-end gap-4"><h3 className="min-w-0 text-lg font-bold uppercase">{item.name}</h3><span className="shrink-0 font-mono text-xs font-bold">{item.price}</span></div></article>)}
        </div>
        <Button asChild variant="link" className="mt-12 px-0 font-mono text-xs uppercase tracking-[0.16em]"><Link to="/menu">Explorar o menu <ArrowRight /></Link></Button>
      </section>

      <section className="mx-auto grid max-w-6xl grid-cols-12 gap-2 px-6 pb-24">
        <figure className="col-span-7"><img src={coffeeImage} loading="lazy" width={800} height={800} className="aspect-square w-full object-cover" alt="Imagem de demonstração de café gelado" /><figcaption className="mt-2 font-mono text-[9px] uppercase tracking-[0.16em] text-muted-foreground">Imagem de demonstração</figcaption></figure>
        <div className="col-span-5 grid aspect-square place-items-center bg-primary p-4 text-primary-foreground"><span className="text-center font-serif text-2xl font-bold italic md:text-4xl">Saborear.<br/>Relaxar.<br/>Partilhar.</span></div>
        <figure className="col-span-12 mt-2"><img src={tableImage} loading="lazy" width={1200} height={675} className="aspect-video w-full object-cover" alt="Imagem de demonstração de uma experiência gastronómica" /><figcaption className="mt-2 font-mono text-[9px] uppercase tracking-[0.16em] text-muted-foreground">Imagem de demonstração — substituir por fotografia oficial</figcaption></figure>
      </section>

      <section className="bg-primary px-6 py-20 text-primary-foreground md:py-28"><div className="mx-auto max-w-6xl"><span className="font-mono text-[10px] uppercase tracking-[0.3em] text-primary-foreground/50">Reservas</span><h2 className="mt-6 max-w-xl font-serif text-5xl font-bold italic md:text-7xl">Reserve a sua mesa</h2><p className="mt-6 max-w-md font-mono text-xs leading-6 text-primary-foreground/65">Preencha os dados e envie o pedido diretamente para o Surf Café pelo WhatsApp.</p><Button asChild size="lg" variant="secondary" className="mt-10 h-16 rounded-none px-8 font-mono text-[10px] uppercase tracking-[0.18em]"><Link to="/reservas">Fazer pedido de reserva</Link></Button></div></section>
    </div>
  );
}

function Info({ label, value }: { label: string; value: string }) {
  return <div className="min-w-0 p-5 md:p-8"><span className="font-mono text-[9px] uppercase tracking-[0.15em] text-muted-foreground">{label}</span><p className="mt-2 font-serif text-lg font-semibold italic md:text-2xl">{value}</p></div>;
}
