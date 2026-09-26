import { FiUsers, FiFeather, FiBookOpen, FiBriefcase, FiHeart, FiCompass } from "react-icons/fi";
const benefits = [
  { icon: FiUsers, title: "Meet Like-Minded People", text: "Find introverts in your city and connect authentically." },
  { icon: FiFeather, title: "Attend Curated Events", text: "Picnics, game nights, book clubs, and more." },
  { icon: FiBookOpen, title: "Grow & Learn", text: "Workshops, mentorship and resources for personal and career growth." },
  { icon: FiBriefcase, title: "Discover Opportunities", text: "Jobs, collaborations and professional networking — minus the chaos." },
  { icon: FiHeart, title: "Find Your People", text: "Friendships, professional connections, or even love." },
  { icon: FiCompass, title: "Be Yourself", text: "A safe space to just be you, without judgment." },
];
export default function BenefitsSection() {
  return <section id="benefits" aria-label="A little more room to be you" className="mx-auto mt-14 grid max-w-[1360px] scroll-mt-8 grid-cols-2 gap-x-7 gap-y-10 px-6 md:mt-20 md:grid-cols-3 md:px-12 lg:grid-cols-6">{benefits.map(({ icon: Icon, title, text }) => <article key={title} className="text-center"><span className="mx-auto flex h-16 w-16 items-center justify-center rounded-[45%] bg-[#ddc5c5]"><Icon size={29} strokeWidth={1.7} aria-hidden="true" /></span><h2 className="mx-auto mt-4 max-w-40 text-sm font-semibold leading-5">{title}</h2><p className="mx-auto mt-2 max-w-44 text-xs leading-[1.8] text-[#5c5259]">{text}</p></article>)}</section>;
}
