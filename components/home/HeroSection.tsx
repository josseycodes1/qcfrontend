import Image from "next/image";
import { FiArrowRight, FiHeart } from "react-icons/fi";
export default function HeroSection() {
  return <section aria-labelledby="hero-title" className="relative isolate overflow-hidden bg-[#38253d] lg:min-h-[640px] xl:min-h-[680px]">
    {/* Keep the portrait and its overlays in separate horizontal areas. */}
    <div className="absolute inset-y-0 right-0 hidden w-[58%] lg:block"><Image src="/images/hero-v2.png" alt="A woman with braids looking left while relaxing on a sofa with a warm cup of coffee" fill preload sizes="58vw" className="object-cover object-[48%_center]" /></div>
    <div aria-hidden="true" className="absolute -left-[24%] -top-[23%] hidden h-[128%] w-[77%] rounded-r-[50%] bg-[#38253d] lg:block" />
    <div className="relative mx-auto max-w-[1536px] px-6 pb-14 pt-16 md:px-12 lg:px-[6%] lg:pb-20 lg:pt-16 xl:pt-20">
      <div className="max-w-[560px] text-[#fff9f3] lg:w-[49%] lg:max-w-none">
        <p className="text-[10px] font-semibold uppercase tracking-[2.5px] text-[#f0d6c7] sm:text-xs">A community for Nigerian introverts</p>
        <h1 id="hero-title" className="mt-5 font-serif text-[clamp(2.5rem,6vw,3.875rem)] leading-[1.08] tracking-[-1.5px] lg:text-[clamp(2.5rem,4.1vw,4rem)]"><span className="block">You don’t have to</span><span className="block lg:whitespace-nowrap">be the loudest person</span><span className="block text-[#c49396]">to belong.</span></h1>
        <p className="mt-6 max-w-[485px] text-[15px] leading-[1.85] text-[#f4eaf0] sm:text-base">Meet people who understand your pace. Build meaningful connections, attend small-crowd events, grow personally and professionally — all in a space designed for introverts in Nigeria.</p>
        <div className="mt-8 flex flex-wrap gap-4"><a href="#join" className="inline-flex items-center gap-4 rounded-full bg-[#eab59d] px-5 py-4 text-xs font-semibold text-[#302032] transition hover:bg-[#f4cbb7] xl:px-7 xl:text-sm">Join the Community <FiArrowRight size={19} /></a><a href="#events" className="rounded-full border border-[#d5aba9] px-6 py-4 text-xs font-medium transition hover:bg-white/10 xl:px-8 xl:text-sm">Explore Events</a></div>
        <div className="mt-7 flex items-center gap-3 text-xs leading-5 text-[#e8dbe6]"><span className="flex h-10 w-10 items-center justify-center rounded-full border border-[#cfb3c4] bg-white/10"><FiHeart size={19} /></span><p>A little less noise.<br />A lot more connection.</p></div>
      </div>
    </div>
    <div className="relative aspect-[3/2] min-h-[320px] sm:min-h-[460px] lg:hidden"><Image src="/images/hero-v2.png" alt="A relaxed, welcoming space to be yourself" fill sizes="100vw" className="object-cover object-[48%_center]" /></div>
    <p className="pointer-events-none absolute left-[53%] top-[7%] hidden -rotate-12 font-serif text-xl italic leading-snug text-white xl:block">Same<br />energy.<br />Deeper<br />connections.</p>
    <div aria-hidden="true" className="pointer-events-none absolute -right-[17%] top-[-10%] hidden h-[125%] w-[30%] -rotate-12 rounded-[50%] border-[28px] border-[#ead3c8] bg-[#bc9291] lg:block" />
    <div className="absolute right-[2%] top-[20%] hidden w-[17%] rounded-[28px] bg-[#ae8985] px-4 py-5 text-[11px] leading-6 text-white lg:block xl:px-6 xl:text-sm xl:leading-7">Real People<br />Smaller Crowds<br />Meaningful Conversations</div>
    <div className="absolute bottom-[14%] right-[-2%] hidden aspect-[1.2] w-[23%] max-w-[340px] -rotate-6 overflow-hidden rounded-[60px] border-[6px] border-[#f3e3d8] shadow-xl lg:block"><Image src="/images/community.png" alt="Friends connecting over a relaxed conversation" fill sizes="23vw" className="object-cover" /></div>
    <div aria-hidden="true" className="pointer-events-none absolute -bottom-16 -left-[8%] h-24 w-[67%] rotate-6 rounded-[50%] bg-[#f8f1eb]" />
    <div aria-hidden="true" className="pointer-events-none absolute -bottom-20 right-[-10%] h-28 w-[65%] -rotate-6 rounded-[50%] bg-[#f8f1eb]" />
  </section>;
}
