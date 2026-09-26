"use client";
import { useState } from "react";
import { FiMenu, FiX, FiSearch } from "react-icons/fi";
import Brand from "./Brand";
const links = [["Home", "#"], ["About", "#about"], ["Events", "#events"], ["Communities", "#communities"], ["Our promise", "#benefits"]];
export default function Navbar() {
  const [open, setOpen] = useState(false);
  return <header className="relative z-30 bg-[#f8f1eb]">
    <a href="#main-content" className="absolute left-4 top-2 -translate-y-24 rounded-lg bg-[#38253d] p-3 text-white focus:translate-y-0">Skip to content</a>
    <div className="mx-auto flex h-24 max-w-[1440px] items-center justify-between gap-6 px-6 lg:px-12">
      <Brand />
      <nav aria-label="Main navigation" className="hidden items-center gap-7 text-[13px] font-medium lg:flex">{links.map(([label, href]) => <a key={label} href={href} className="py-2 underline-offset-8 hover:underline">{label}</a>)}</nav>
      <div className="flex items-center gap-4"><a href="#communities" aria-label="Find a community" className="hidden rounded-full p-2 hover:bg-[#eadcd6] sm:block"><FiSearch size={20} /></a><a href="#join" className="hidden rounded-full bg-[#38253d] px-6 py-3.5 text-xs font-medium text-white transition hover:bg-[#67465f] sm:block">Join the Community</a><button type="button" onClick={() => setOpen(!open)} aria-label={open ? "Close menu" : "Open menu"} aria-expanded={open} aria-controls="mobile-navigation" className="rounded-lg p-2 lg:hidden">{open ? <FiX size={25} /> : <FiMenu size={25} />}</button></div>
    </div>
    {open && <nav id="mobile-navigation" aria-label="Mobile navigation" className="absolute inset-x-0 top-full space-y-1 border-t border-[#38253d]/10 bg-[#f8f1eb] p-6 shadow-lg lg:hidden">{[...links, ["Join the Community", "#join"]].map(([label, href]) => <a key={label} href={href} onClick={() => setOpen(false)} className="block rounded-lg px-3 py-3 hover:bg-[#eadcd6]">{label}</a>)}</nav>}
  </header>;
}
