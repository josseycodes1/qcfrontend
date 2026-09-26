"use client";
import { useState } from "react";
import { FiArrowRight, FiCheckCircle } from "react-icons/fi";
import { cities } from "./data";
export default function JoinSection() {
  const [choice, setChoice] = useState("Lagos");
  const [saved, setSaved] = useState(false);
  return <section id="join" className="mx-6 mt-24 scroll-mt-8 rounded-[32px] bg-[#eaddd6] px-6 py-14 text-center md:mx-auto md:mt-32 md:max-w-[1000px] md:px-12 md:py-16">
    <p className="text-[10px] font-semibold uppercase tracking-[2.5px] text-[#91606e]">At your own pace</p><h2 className="mt-3 font-serif text-4xl tracking-[-1px] sm:text-5xl">Your people are out there.</h2><p className="mx-auto mt-4 max-w-lg text-sm leading-7 text-[#65555f]">And you don’t have to become someone else to find them.<br />Where would you like to find your circle?</p>
    <form onSubmit={e => { e.preventDefault(); setSaved(true); }} className="mx-auto mt-7 flex max-w-md flex-col gap-3 sm:flex-row"><label htmlFor="join-city" className="sr-only">Choose your city</label><select id="join-city" value={choice} onChange={e => { setChoice(e.target.value); setSaved(false); }} className="min-w-0 flex-1 rounded-full border border-[#cbb7b5] bg-[#fffaf6] px-5 py-3.5 text-sm">{[...cities.map(c => c.name), "Online", "Another city"].map(city => <option key={city}>{city}</option>)}</select><button type="submit" className="inline-flex items-center justify-center gap-3 rounded-full bg-[#38253d] px-6 py-3.5 text-sm text-white transition hover:bg-[#67465f]">Find my circle <FiArrowRight /></button></form>
    {saved && <p role="status" className="mx-auto mt-5 flex max-w-md items-start justify-center gap-2 text-sm leading-6"><FiCheckCircle className="mt-1 shrink-0" />{choice === "Another city" ? "More cities are on the way." : `You’ve chosen ${choice}.`} Membership opens soon. No registration has been submitted.</p>}
    <p className="mt-5 text-xs text-[#796974]">Community signup is coming soon. For now, take a look around.</p>
  </section>;
}
