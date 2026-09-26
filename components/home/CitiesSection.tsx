import Image from "next/image";
import { FiArrowRight, FiCheck } from "react-icons/fi";
import { cities } from "./data";
import SectionHeading from "./SectionHeading";
export default function CitiesSection({ selected, onSelect }: { selected: string; onSelect: (city: string) => void }) {
  return <section id="communities" className="mt-20 scroll-mt-8 bg-[#efdfd7]/65 py-12 md:mt-24 md:py-16"><div className="mx-auto max-w-[1360px] px-6 md:px-12">
    <SectionHeading eyebrow="Cities" title="Find Your Circle, In Your City." description="Connect with introverts near you. More cities coming soon." action={<button type="button" onClick={() => onSelect("All")} className="inline-flex items-center gap-2 rounded-full px-2 py-2 text-xs font-medium hover:underline">View all cities <FiArrowRight size={17} /></button>} />
    <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-5">{cities.map(city => <button type="button" key={city.name} onClick={() => onSelect(city.name)} aria-pressed={selected === city.name} className="group relative isolate h-48 overflow-hidden rounded-[20px] text-left outline-offset-4 transition hover:-translate-y-1 focus-visible:outline-2 focus-visible:outline-[#714f69] sm:h-56">
      <Image src={`/images/${city.image}.png`} alt={`${city.name}, Nigeria`} fill sizes="(max-width: 767px) 50vw, (max-width: 1023px) 33vw, 20vw" className="object-cover transition duration-500 group-hover:scale-105 motion-reduce:transition-none" />
      <span className="absolute inset-0 bg-linear-to-t from-[#160f19]/95 via-black/10 to-transparent" />
      {selected === city.name && <span className="absolute right-3 top-3 rounded-full bg-[#f7e6d9] p-2"><FiCheck aria-label="Selected" /></span>}
      <span className="absolute inset-x-0 bottom-0 p-5 text-white"><span className="block text-xl font-semibold">{city.name}</span><span className="mt-1 block text-[10px] text-[#f3e4e9] sm:text-xs">{city.caption}</span></span>
    </button>)}</div>
  </div></section>;
}
