import Brand from "./Brand";
export default function Footer() {
  return <footer className="mx-auto mt-20 max-w-[1360px] border-t border-[#38253d]/10 px-6 pb-8 pt-9 md:mt-24 md:px-12"><div className="flex flex-col items-start justify-between gap-7 sm:flex-row sm:items-center"><Brand /><p className="text-xs leading-6 text-[#796974]">A little less noise. A little more you.<br />Made for meaningful connections in Nigeria.</p><a href="#" className="text-xs underline underline-offset-4">Back to top</a></div><p className="mt-8 text-[10px] text-[#796974]">© {new Date().getFullYear()} The Quiet Circle. People. Places. Possibilities.</p></footer>;
}
