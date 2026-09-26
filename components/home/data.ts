// Preview content until community and event APIs are available.
export const cities = [
  { name: "Lagos", image: "lagos", caption: "A softer side of the city" },
  { name: "Abuja", image: "abuja", caption: "Make room for connection" },
  { name: "Ibadan", image: "ibadan", caption: "Slow down. Settle in." },
  { name: "Port Harcourt", image: "port-harcourt", caption: "Good company, close to home" },
  { name: "Enugu", image: "enugu", caption: "Find your own kind of people" },
];
export const events = [
  { title: "Introvert Picnic", city: "Lagos", month: "OCT", day: "10", date: "October 10, 2026", image: "picnic", capacity: 10, description: "An easy afternoon outdoors with picnic blankets, light snacks, and unhurried conversation. Come with a book, a friend, or just yourself." },
  { title: "Silent Book Club", city: "Abuja", month: "OCT", day: "17", date: "October 17, 2026", image: "book-club", capacity: 12, description: "Bring whatever you are reading. We will settle in for some quiet reading time, followed by an optional chat over coffee. No assigned books, no pressure." },
  { title: "Introvert Game Night", city: "Ibadan", month: "OCT", day: "24", date: "October 24, 2026", image: "game-night", capacity: 8, description: "A small table, a few easygoing board games, and friendly faces. Beginners are welcome, and taking a quiet break is always okay." },
  { title: "Virtual Co-working", city: "Online", month: "OCT", day: "31", date: "October 31, 2026", image: "coworking", capacity: 20, description: "Get a little work done with gentle company. Join a focused online session with optional check-ins and camera-off friendly quiet work blocks." },
];
export type CircleEvent = (typeof events)[number];
