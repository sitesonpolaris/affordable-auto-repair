// All business facts live here. Source: Google Business Profile (checked Oct 24, 2026).
// Never add prices, certifications or claims that aren't on the public profile.

export const site = {
  name: "Affordable Auto Repair",
  short: "Affordable Auto",
  owner: "Tim",
  url: "https://affordable-auto-repair-gastonia.netlify.app",
  phone: "(704) 867-1754",
  phoneHref: "tel:+17048671754",
  street: "500 W Franklin Blvd",
  city: "Gastonia",
  region: "NC",
  zip: "28052",
  geo: { lat: 35.262721, lng: -81.1906251 },
  mapsUrl:
    "https://www.google.com/maps/search/?api=1&query=Affordable+Auto+Repair+500+W+Franklin+Blvd+Gastonia+NC+28052",
  mapsEmbed:
    "https://www.google.com/maps?q=Affordable+Auto+Repair,+500+W+Franklin+Blvd,+Gastonia,+NC+28052&z=16&output=embed",
  reviewsUrl:
    "https://www.google.com/maps/place/Affordable+Auto+Repair/@35.262721,-81.1906251,17z/data=!4m8!3m7!1s0x8856c03ec7d4a0d1:0x278bcec532bb30d9!8m2!3d35.262721!4d-81.1906251!9m1!1b1",
  rating: 4.7,
  reviewCount: 171,
  // 0 = Sunday … 6 = Saturday. Times are 24h, America/New_York.
  hours: [
    { day: "Monday", d: 1, open: "07:30", close: "17:30" },
    { day: "Tuesday", d: 2, open: "07:30", close: "17:30" },
    { day: "Wednesday", d: 3, open: "07:30", close: "17:30" },
    { day: "Thursday", d: 4, open: "07:30", close: "17:30" },
    { day: "Friday", d: 5, open: "07:30", close: "17:30" },
    { day: "Saturday", d: 6, open: null, close: null },
    { day: "Sunday", d: 0, open: null, close: null },
  ] as { day: string; d: number; open: string | null; close: string | null }[],
} as const;

// Work customers describe in their reviews. No prices on purpose: call for a quote.
export const services = [
  {
    code: "01",
    title: "Check engine light & diagnostics",
    body: "We find the cause instead of guessing, then explain it in plain English before any work starts.",
  },
  {
    code: "02",
    title: "Brakes",
    body: "Squealing, grinding or a soft pedal. We inspect pads, rotors and calipers and show you what we find.",
  },
  {
    code: "03",
    title: "Oil changes",
    body: "Quick, fairly priced oil service, with a look at the things that tend to get missed.",
  },
  {
    code: "04",
    title: "Tires & rotation",
    body: "Rotations to even out wear, plus an honest read on how much tread you have left.",
  },
  {
    code: "05",
    title: "Repairs & maintenance",
    body: "The everyday work that keeps a car on the road. Tell us what it's doing and we'll take it from there.",
  },
] as const;

// Verbatim from Google reviews. Do not edit wording (including typos).
export const reviews = [
  {
    name: "Alex Votary",
    when: "4 months ago",
    text: "Excellent shop! They diagnosed the issue quickly and got it taken care of. No up charging or funny business. Highly recommend. They stay busy, so you may want to call ahead for an appointment, but it's worth the wait.",
  },
  {
    name: "Garret Gay",
    when: "5 months ago",
    text: "Affordable auto repair and their crew are amazing. I received an affordable oil change and rotated my tires for me because the tread was low in the front. Tim, the owner, is the most honest and transparent mechanic you will meet with only looking out for what’s best for you. You’re in extremely capable hands here.",
  },
] as const;

export const featuredQuote = {
  name: "Loretta Crosby",
  when: "6 months ago",
  text: "After three months of chasing down an engine light for my DMV inspection—going through 4–5 different mechanics with no real answers—I was honestly at my wits' end.",
};

// Google's review-summary highlights (short quotes pulled from reviews).
export const highlights = [
  "Great service, great price, great speed.",
  "The quality of there work is great and their prices are fair.",
  "Peaceful, comfortable lobby, affordable prices, and personal customer service.",
] as const;
