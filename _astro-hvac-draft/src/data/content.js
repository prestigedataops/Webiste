/** Page copy and structured content. Keep claims honest: no invented statistics, logos or testimonials. */

export const PAINS = [
  {
    title: "After hours and peak season",
    text: "Heat waves and cold snaps flood the phones while your team is on jobs or off the clock. A caller who reaches voicemail usually calls the next company.",
  },
  {
    title: "Slow follow-up",
    text: "Web forms, Google Local Services leads and open quotes go cold while the office catches up. Speed decides who gets the job.",
  },
  {
    title: "Customers who quietly lapse",
    text: "Maintenance agreements expire and past customers drift away, even though they are your cheapest and most loyal source of revenue.",
  },
];

export const SOLUTIONS = [
  {
    n: "01",
    title: "AI Call Answering & Booking",
    text: "Every call answered around the clock. No-heat and no-cool calls are triaged, safety issues such as a gas smell are escalated to a person immediately, and routine calls are booked straight onto your schedule.",
  },
  {
    n: "02",
    title: "Lead & Quote Follow-up",
    text: "Instant replies to web, Local Services and marketplace leads, plus polite, automatic nudges on quotes that have not been answered.",
  },
  {
    n: "03",
    title: "Maintenance Agreement Automation",
    text: "Renewal reminders, seasonal tune-up campaigns and win-back messages that keep your customer list working for you.",
  },
  {
    n: "04",
    title: "Reviews & Reputation",
    text: "Review requests after every completed job, routed so happy customers reach Google and concerns reach you first.",
  },
  {
    n: "05",
    title: "Back-Office Automation",
    text: "Job details moved between the phone system, your field-service software and accounting, so the office stops retyping the same information.",
  },
];

export const STEPS = [
  { n: "01", title: "Audit", text: "We review how calls and leads are handled today and find where jobs are being lost." },
  { n: "02", title: "Design", text: "You see the call flows, the tools involved and the cost before anything is built." },
  { n: "03", title: "Launch", text: "We connect it to your phones and software, test it with your team, then go live." },
  { n: "04", title: "Optimize", text: "We review real calls, fix gaps and tune results as your seasons change." },
];

export const PRINCIPLES = [
  { title: "A person for emergencies", text: "Safety calls and anything the system is unsure about go to a human right away, by phone or text." },
  { title: "Least access, encrypted data", text: "We request only the access each workflow needs and store customer data encrypted. NDA on request." },
  { title: "Consent built in", text: "Call recording notices and text-message opt-in are part of every design, with state-by-state rules reviewed during the audit." },
  { title: "You own what we build", text: "Your scripts, workflows and data stay yours. Nothing you share is used to train public models." },
];

export const FAQS = [
  {
    q: "Will it handle emergency calls?",
    a: "Yes, with guardrails. It collects the details of no-heat and no-cool calls and books or dispatches according to your rules. Anything involving safety, such as a gas smell or carbon monoxide alarm, is escalated to a person immediately.",
  },
  {
    q: "What if a caller wants to speak to a human?",
    a: "They can, at any point. The assistant transfers the call to your team during business hours or takes a message and alerts the on-call person after hours.",
  },
  {
    q: "Will it work with our field-service software?",
    a: "We connect to most field-service, CRM, calendar, accounting and phone tools. During the audit we confirm exactly what your stack supports. If a tool has no API, we find another route or tell you plainly.",
  },
  {
    q: "How long until it is live?",
    a: "Most first workflows go live in under 30 days. Larger builds ship in phases so you see value early.",
  },
  {
    q: "How do you handle call recording and text-message consent?",
    a: "Call-recording laws vary by state and text messaging requires opt-in. We design disclosures and opt-in flows into every workflow and review your states during the audit. This is not legal advice, so we recommend your own counsel confirm your policies.",
  },
  {
    q: "What happens after launch?",
    a: "Every build includes 30 days of support. After that you can run it yourself or keep us on for monitoring and improvements.",
  },
];

// TODO: pricing is carried over from the original design and is unconfirmed. Verify before launch.
export const PLANS = [
  {
    name: "Starter",
    tagline: "One workflow, done properly.",
    price: "$2,900",
    prefix: "from",
    billing: "One-time",
    features: ["One workflow or agent", "Up to 3 integrations", "Live in 2–3 weeks", "30 days of support"],
    cta: "Start with Starter",
    featured: false,
  },
  {
    name: "Growth",
    tagline: "A connected front office across your team.",
    price: "$7,500",
    prefix: "from",
    billing: "Per project",
    features: [
      "Up to 3 connected workflows",
      "AI agent trained on your own knowledge",
      "Monthly optimization review",
      "Priority support",
    ],
    cta: "Choose Growth",
    featured: true,
    badge: "Most chosen",
  },
  {
    name: "Custom",
    tagline: "For multi-location and more specific builds.",
    price: "Let’s talk",
    prefix: "",
    billing: "Scoped to fit",
    features: ["Multi-location systems", "Custom internal tools", "Security review and hosting", "Dedicated engineer"],
    cta: "Book a call",
    featured: false,
  },
];

export const TRUCK_SIZES = ["1–3 trucks", "4–10 trucks", "11–25 trucks", "26–50 trucks", "50+ trucks"];
export const FSM_OPTIONS = ["ServiceTitan", "Housecall Pro", "Jobber", "FieldEdge", "Service Fusion", "Other", "None yet"];
