import type { ReactNode } from "react";
export default function SectionHeading({ eyebrow, title, description, action }: { eyebrow: string; title: string; description: string; action?: ReactNode }) {
  return <div className="mb-7 flex flex-wrap items-end justify-between gap-5"><div><p className="text-[10px] font-semibold uppercase tracking-[2.5px] text-[#91606e]">{eyebrow}</p><h2 className="mt-2 font-serif text-3xl leading-[1.15] tracking-[-1px] sm:text-[40px] lg:text-[44px]">{title}</h2><p className="mt-3 text-sm leading-6 text-[#63565f] sm:text-base">{description}</p></div>{action}</div>;
}
