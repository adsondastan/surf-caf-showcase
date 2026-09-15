import { createFileRoute } from "@tanstack/react-router";
import gallery01 from "../assets/gallery/gallery-000.jpg.asset.json";
import gallery02 from "../assets/gallery/gallery-001.jpg.asset.json";
import gallery03 from "../assets/gallery/gallery-002.jpg.asset.json";
import gallery04 from "../assets/gallery/gallery-003.jpg.asset.json";
import gallery05 from "../assets/gallery/gallery-004.jpg.asset.json";
import gallery06 from "../assets/gallery/gallery-005.jpg.asset.json";
import gallery07 from "../assets/gallery/gallery-006.jpg.asset.json";
import gallery08 from "../assets/gallery/gallery-007.jpg.asset.json";
import gallery09 from "../assets/gallery/gallery-008.jpg.asset.json";
import gallery10 from "../assets/gallery/gallery-009.jpg.asset.json";
import gallery11 from "../assets/gallery/gallery-010.jpg.asset.json";

export const Route = createFileRoute("/galeria")({
  head: () => ({
    meta: [
      { title: "Galeria | Surf Café Nampula" },
      { name: "description", content: "Conheça o espaço, a pastelaria e a gastronomia do Surf Café em Nampula." },
      { property: "og:title", content: "Galeria | Surf Café Nampula" },
      { property: "og:description", content: "Fotografias oficiais do Surf Café em Nampula." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/galeria" }],
  }),
  component: Galeria,
});

const images = [
  { asset: gallery01, label: "Surf Café", portrait: false },
  { asset: gallery02, label: "Interior", portrait: true },
  { asset: gallery03, label: "Balcão", portrait: false },
  { asset: gallery04, label: "Pastelaria", portrait: false },
  { asset: gallery05, label: "Vitrine de pastelaria", portrait: false },
  { asset: gallery06, label: "Bar", portrait: true },
  { asset: gallery07, label: "Sala", portrait: false },
  { asset: gallery08, label: "Gastronomia", portrait: true },
  { asset: gallery09, label: "Espaço lounge", portrait: true },
  { asset: gallery10, label: "Refeição", portrait: true },
  { asset: gallery11, label: "Ambiente Surf Café", portrait: true },
];

function Galeria() {
  return <div className="mx-auto max-w-6xl px-6 py-16 md:py-24"><p className="font-mono text-[10px] uppercase tracking-[0.25em] text-muted-foreground">Galeria</p><h1 className="mt-5 font-serif text-6xl font-extrabold italic md:text-8xl">O ambiente</h1><p className="mt-6 max-w-2xl text-sm leading-6 text-muted-foreground">Conheça o ambiente, a gastronomia e os diferentes espaços do Surf Café.</p><div className="mt-12 columns-1 gap-3 md:columns-2 lg:columns-3">{images.map((image)=><figure key={image.asset.asset_id} className="mb-3 break-inside-avoid"><img src={image.asset.url} width={1079} height={image.portrait ? 1400 : 800} loading="lazy" className="h-auto w-full object-cover" alt={`${image.label} no Surf Café`}/><figcaption className="mt-2 font-mono text-[9px] uppercase tracking-[0.14em] text-muted-foreground">{image.label}</figcaption></figure>)}</div></div>;
}