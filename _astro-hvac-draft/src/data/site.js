/** Sitewide constants. Change brand facts here, never inline in pages. */
export const SITE = {
  name: "Prestige DataOps",
  descriptor: "AI automation for HVAC companies",
  url: "https://prestigedataops.com",
  email: "hello@prestigedataops.com",
  // TODO: add a real sales phone number (e.g. "+1-555-000-0000") to show it in the header and structured data.
  phone: "",
  // Optional integrations, set in .env (see .env.example)
  bookingUrl: import.meta.env.PUBLIC_BOOKING_URL ?? "",
  formEndpoint: import.meta.env.PUBLIC_FORM_ENDPOINT ?? "",
  gaId: import.meta.env.PUBLIC_GA_ID ?? "",
};

export const NAV = [
  { label: "Solutions", href: "/#solutions" },
  { label: "How it works", href: "/#how-it-works" },
  { label: "Pricing", href: "/pricing/" },
  { label: "FAQ", href: "/#faq" },
];

export const FOOTER_COLUMNS = [
  {
    title: "Solutions",
    links: [
      { label: "Call answering & booking", href: "/#solutions" },
      { label: "Lead & quote follow-up", href: "/#solutions" },
      { label: "Maintenance agreements", href: "/#solutions" },
      { label: "Reviews & reputation", href: "/#solutions" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "How it works", href: "/#how-it-works" },
      { label: "Pricing", href: "/pricing/" },
      { label: "FAQ", href: "/#faq" },
      { label: "Book an audit", href: "/book/" },
    ],
  },
  {
    title: "Legal",
    links: [
      { label: "Privacy", href: "/privacy/" },
      { label: "Terms", href: "/terms/" },
    ],
  },
];
