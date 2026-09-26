"use client";
import { useRef, useState } from "react";
import Image from "next/image";
import { FiArrowRight, FiMapPin, FiUsers, FiX, FiCalendar } from "react-icons/fi";
import CitiesSection from "./CitiesSection";
import SectionHeading from "./SectionHeading";
import { events, type CircleEvent } from "./data";

export default function ExploreSection() {
  const [city, setCity] = useState("All");
  const [event, setEvent] = useState<CircleEvent | null>(null);
  const dialog = useRef<HTMLDialogElement>(null);
  const visible = events.filter(item => city === "All" || item.city === city || item.city === "Online");
  function selectCity(value: string) {
    setCity(value);
    if (value !== "All") document.getElementById("events")?.scrollIntoView({ behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches ? "instant" : "smooth" });
  }
  function openEvent(item: CircleEvent) { setEvent(item); dialog.current?.showModal(); }
  return <>
    <CitiesSection selected={city} onSelect={selectCity} />
    <section id="events" className="mx-auto mt-20 max-w-[1360px] scroll-mt-8 px-6 md:mt-24 md:px-12">
      <SectionHeading eyebrow="Upcoming experiences" title="Smaller Crowds. Bigger Connections." description="Thoughtfully curated experiences for meaningful interactions." action={<button type="button" onClick={() => setCity("All")} className="inline-flex items-center gap-2 py-2 text-xs font-medium hover:underline">View all events <FiArrowRight size={17} /></button>} />
      <div className="mb-5 flex flex-wrap items-center justify-between gap-3"><p className="text-xs text-[#796974]">A preview of what’s to come. Dates and spaces are illustrative.</p>{city !== "All" && <button type="button" onClick={() => setCity("All")} className="inline-flex items-center gap-2 rounded-full bg-[#e7d4d2] px-4 py-2 text-xs">{city} + online <FiX aria-label="Clear filter" /></button>}</div>
      <div aria-live="polite" className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">{visible.map(item => <button type="button" key={item.title} onClick={() => openEvent(item)} className="group overflow-hidden rounded-[18px] bg-[#fffaf6] text-left transition hover:-translate-y-1 hover:shadow-lg focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#714f69]">
        <div className="relative h-44 overflow-hidden"><Image src={`/images/${item.image}.png`} alt={item.title} fill sizes="(max-width: 639px) 100vw, (max-width: 1023px) 50vw, 25vw" className="object-cover transition duration-500 group-hover:scale-105 motion-reduce:transition-none" /></div>
        <div className="flex gap-3 p-4"><span className="flex h-16 w-12 shrink-0 flex-col items-center justify-center rounded-lg bg-[#ecd9d2]"><span className="text-[10px] font-medium">{item.month}</span><span className="text-2xl font-medium leading-7">{item.day}</span></span><span><span className="block text-sm font-semibold">{item.title}</span><span className="mt-2 flex items-center gap-1.5 text-xs text-[#65555f]"><FiMapPin />{item.city === "Online" ? "Online (Nigeria)" : item.city}</span><span className="mt-2 flex items-center gap-1.5 text-xs text-[#65555f]"><FiUsers />Up to {item.capacity} people</span></span></div>
      </button>)}</div>
      {city !== "All" && !events.some(item => item.city === city) && <p className="mt-5 text-sm text-[#65555f]">In-person experiences in {city} are on their way. Explore our online gathering in the meantime.</p>}
    </section>
    <dialog ref={dialog} aria-labelledby="event-title" onClick={e => { if (e.target === e.currentTarget) dialog.current?.close(); }} className="fixed inset-0 m-auto max-h-[90dvh] w-[calc(100%-2rem)] max-w-lg overflow-y-auto rounded-3xl bg-[#fffaf6] p-0 text-[#38253d] shadow-2xl backdrop:bg-[#26172c]/60">
      {event && <><div className="relative h-56"><Image src={`/images/${event.image}.png`} alt={event.title} fill sizes="512px" className="object-cover" /><button type="button" autoFocus onClick={() => dialog.current?.close()} aria-label="Close event details" className="absolute right-4 top-4 rounded-full bg-[#fffaf6] p-3"><FiX size={20} /></button></div><div className="p-7"><p className="text-[10px] font-semibold uppercase tracking-widest text-[#91606e]">Experience preview</p><h2 id="event-title" className="mt-2 font-serif text-3xl">{event.title}</h2><p className="mt-4 flex items-center gap-2 text-sm"><FiCalendar />{event.date}<span aria-hidden="true">·</span>{event.city}</p><p className="mt-5 text-sm leading-7 text-[#65555f]">{event.description}</p><p className="mt-5 rounded-xl bg-[#f1e5de] p-4 text-xs leading-6">Bookings are not open yet. This is a preview of the kinds of experiences we’re creating.</p><button type="button" onClick={() => dialog.current?.close()} className="mt-6 rounded-full bg-[#38253d] px-6 py-3 text-sm text-white">Keep exploring</button></div></>}
    </dialog>
  </>;
}
