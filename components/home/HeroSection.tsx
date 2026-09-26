import Image from "next/image";
import { FiArrowRight, FiHeart } from "react-icons/fi";
export default function HeroSection() {
  return <section aria-labelledby="hero-title" className="relative isolate overflow-hidden bg-[#38253d] lg:min-h-[680px]">
    <div className="absolute inset-y-0 right-0 hidden w-[64%] lg:block"><Image src="/images/hero.png" alt="A woman enjoying a quiet moment with a warm cup of coffee" fill priority sizes="64vw" className="object-cover object-[65%_center]" /></div>
    <div aria-hidden="true" className="absolute -left-[22%] -top-[25%] hidden h-[135%] w-[80%] rounded-r-[50%] bg-[#38253d] lg:block" />
    <div className="relative mx-auto max-w-[1360px] px-6 pb-14 pt-16 md:px-12 lg:pb-24 lg:pt-20">
      <div className="max-w-[560px] text-[#fff9f3] lg:max-w-[49%]">
        <p className="text-[10px] font-semibold uppercase tracking-[2.5px] text-[#f0d6c7] sm:text-xs">A community for Nigerian introverts</p>
        <h1 id="hero-title" className="mt-5 font-serif text-[48px] leading-[1.06] tracking-[-1.7px] sm:text-[62px] xl:text-[70px]">You don’t have to<br className="hidden xl:block" /> be the loudest person<br /> <span className="text-[#c49396]">to belong.</span></h1>
        <p className="mt-6 max-w-[485px] text-[15px] leading-[1.85] text-[#f4eaf0] sm:text-base">Meet people who understand your pace. Build meaningful connections, attend small-crowd events, grow personally and professionally — all in a space designed for introverts in Nigeria.</p>
        <div className="mt-8 flex flex-wrap gap-4"><a href="#join" className="inline-flex items-center gap-5 rounded-full bg-[#eab59d] px-7 py-4 text-sm font-semibold text-[#302032] transition hover:bg-[#f4cbb7]">Join the Community <FiArrowRight size={19} /></a><a href="#events" className="rounded-full border border-[#d5aba9] px-8 py-4 text-sm font-medium transition hover:bg-white/10">Explore Events</a></div>
        <div className="mt-7 flex items-center gap-3 text-xs leading-5 text-[#e8dbe6]"><span className="flex h-10 w-10 items-center justify-center rounded-full border border-[#cfb3c4] bg-white/10"><FiHeart size={19} /></span><p>A little less noise.<br />A lot more connection.</p></div>
      </div>
    </div>
    <div className="relative h-[360px] sm:h-[460px] lg:hidden"><Image src="/images/hero.png" alt="A relaxed, welcoming space to be yourself" fill sizes="100vw" className="object-cover object-[65%_center]" /></div>
    <p className="absolute right-[29%] top-16 hidden -rotate-12 font-serif text-2xl italic leading-snug text-white xl:block">Same energy.<br />Deeper<br />connections.</p>
    <div className="absolute right-8 top-20 hidden rounded-[32px] bg-[#ae8985]/95 px-7 py-6 text-sm leading-7 text-white lg:block">Real People<br />Smaller Crowds<br />Meaningful Conversations</div>
    <div className="absolute bottom-16 right-[-35px] hidden h-60 w-80 -rotate-6 overflow-hidden rounded-[70px] border-[6px] border-[#f3e3d8] shadow-xl xl:block"><Image src="/images/community.png" alt="Friends connecting over a relaxed conversation" fill sizes="320px" className="object-cover" /></div>
    <div aria-hidden="true" className="absolute -bottom-11 left-[-5%] h-16 w-[110%] rounded-[50%] bg-[#f8f1eb]" />
  </section>;
}
