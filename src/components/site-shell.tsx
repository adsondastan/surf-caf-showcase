import { useState } from "react";
import { Link } from "@tanstack/react-router";
import { Menu, X } from "lucide-react";
import { Button } from "./ui/button";
import { restaurant, whatsappUrl } from "../data/restaurant";
import whatsappAsset from "../assets/whatsapp.jpeg.asset.json";

const links = [
  ["Início", "/"], ["Sobre", "/sobre"], ["Menu", "/menu"], ["Galeria", "/galeria"],
  ["Reservas", "/reservas"], ["Localização", "/localizacao"], ["Contactos", "/contactos"],
] as const;

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  return <header className="sticky top-0 z-50 border-b border-border bg-background/90 backdrop-blur-md"><div className="mx-auto grid h-16 max-w-[1600px] grid-cols-[minmax(0,1fr)_auto] items-center px-5 md:px-8"><Link to="/" className="truncate font-mono text-[10px] font-bold uppercase tracking-[0.35em]">Surf Café</Link><nav className="hidden items-center gap-6 lg:flex">{links.map(([label,to]) => <Link key={to} to={to} activeProps={{className:"text-primary"}} inactiveProps={{className:"text-muted-foreground"}} className="font-mono text-[9px] uppercase tracking-[0.14em] transition-colors hover:text-primary">{label}</Link>)}</nav><Button variant="ghost" size="icon" className="lg:hidden" aria-label={open ? "Fechar menu" : "Abrir menu"} onClick={() => setOpen(!open)}>{open ? <X /> : <Menu />}</Button></div>{open && <nav className="border-t border-border bg-background px-5 py-5 lg:hidden">{links.map(([label,to]) => <Link key={to} to={to} onClick={() => setOpen(false)} className="block border-b border-border py-4 font-serif text-2xl font-bold italic">{label}</Link>)}</nav>}</header>;
}

export function SiteFooter() {
  return <footer className="border-t border-border px-6 py-14"><div className="mx-auto max-w-6xl"><div className="grid gap-10 md:grid-cols-2"><div><p className="font-mono text-xs font-bold uppercase tracking-[0.35em]">Surf Café</p><p className="mt-4 max-w-sm font-serif text-2xl font-semibold italic">Sabores, encontros e bons momentos em Nampula.</p></div><nav className="grid grid-cols-2 gap-3 md:justify-self-end">{links.map(([label,to]) => <Link key={to} to={to} className="font-mono text-[9px] uppercase tracking-[0.14em] text-muted-foreground hover:text-primary">{label}</Link>)}</nav></div><div className="mt-14 grid gap-2 border-t border-border pt-8 font-mono text-[9px] uppercase tracking-[0.12em] text-muted-foreground md:grid-cols-2"><p>© 2026 Surf Café. Todos os direitos reservados.</p><p className="md:text-right">Nr. 6, Rua das FPLM, Nampula</p></div></div></footer>;
}

export function WhatsAppFloat() {
  return <a href={whatsappUrl("Olá Surf Café! Gostaria de saber mais informações.")} target="_blank" rel="noreferrer" aria-label="Falar no WhatsApp" className="fixed bottom-4 right-4 z-40 inline-flex size-14 items-center justify-center overflow-hidden rounded-full shadow-lg transition-transform hover:-translate-y-0.5"><img src={whatsappAsset.url} width={196} height={196} className="h-full w-full object-cover" alt="" /></a>;
}