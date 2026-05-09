import type { Dictionary } from "./types";

export const en: Dictionary = {
  heroVisual: {
    app: "kairox · ops console",
    live: "live",
    response: "response p50",
    open: "open",
    csat: "csat 7d",
    volume24h: "volume · 24h",
    feed: [
      { who: "@maria · WA", msg: "perfect, sending payment tomorrow", t: "now" },
      { who: "@dani · TG", msg: "can you send the invoice to my email?", t: "1m" },
      { who: "@r/community", msg: "thread: how do you handle bursts?", t: "3m" },
    ],
    feedExtra: [
      { who: "@laura · IG", msg: "do you reply on weekends? need info urgently", t: "now" },
      { who: "@carlos · WA", msg: "transfer is done, did it land?", t: "now" },
      { who: "@alex · TG", msg: "🙏 thanks for the follow-up", t: "now" },
      { who: "@u/sandra", msg: "comment: exactly what I needed to see", t: "now" },
      { who: "@nico · WA", msg: "great, locking the call for tuesday", t: "now" },
    ],
  },
  meta: {
    title: "Kairox — The back office for messaging-first businesses",
    description:
      "We build custom dashboards, social operations systems and automation infrastructure for teams running across WhatsApp, Telegram, Instagram, Reddit and TikTok.",
  },
  nav: {
    services: "Services",
    work: "Work",
    about: "About",
    contact: "Contact",
    cta: "Let's talk",
  },
  hero: {
    eyebrow: "studio · engineering · infrastructure",
    headline: "The back office for messaging-first businesses.",
    subhead:
      "We build custom dashboards, social operations systems and automation infrastructure for teams running across WhatsApp, Telegram, Instagram, Reddit and TikTok. When the off-the-shelf doesn't fit, we build the system that does.",
    cta: "Let's talk",
    secondaryCta: "See services",
  },
  servicesSection: {
    eyebrow: "what we build",
    title:
      "Four lines. One idea: systems your operation needs that no one ships out of the box.",
    body: "We're not an agency or a no-code integrator. We design and build custom software for teams that run their day on chat, messaging and social platforms.",
    seeAll: "See all services",
  },
  services: [
    {
      slug: "conversational-analytics",
      name: "Conversational analytics & monitoring",
      tag: "analytics",
      short:
        "Real-time dashboards for teams handling thousands of conversations a day.",
      description:
        "Custom dashboards and monitoring systems for teams running customer conversations across WhatsApp, Telegram, Instagram, Facebook DMs, Reddit and other chat surfaces. Real-time response metrics, sentiment analysis, volume tracking, agent performance, conversion funnels. Built on your data, hosted on your infrastructure or ours.",
      bullets: [
        "Real-time response and SLA metrics",
        "Per-agent and per-channel performance",
        "Sentiment analysis and categorization",
        "Conversion funnels over conversations",
        "Deploy on your cloud or ours",
      ],
    },
    {
      slug: "social-operations",
      name: "Multi-platform social operations systems",
      tag: "ops",
      short:
        "A unified command center for managing Meta, Reddit, TikTok and X from one place.",
      description:
        "A unified command center for teams managing presence across Meta (Instagram + Facebook via Business Suite API), Reddit, TikTok and X. Scheduling, cross-posting with platform-aware adaptation, comment and DM triage, performance analytics, content libraries.",
      bullets: [
        "Scheduling and platform-native cross-posting",
        "DM and comment triage in a single inbox",
        "Versioned content library",
        "Unified analytics by brand and channel",
        "Roles, permissions and approvals for teams",
      ],
    },
    {
      slug: "telegram-infrastructure",
      name: "Telegram & messaging automation infrastructure",
      tag: "telegram",
      short:
        "Bots, channels, broadcast and monetization at production grade. No no-code glue.",
      description:
        "Bots, channels, broadcast systems, subscriber management, monetization flows, moderation tooling. Production software, not no-code glue that breaks the first busy weekend.",
      bullets: [
        "Custom bots with real business logic",
        "Broadcast and audience segmentation",
        "Subscription and payment flows",
        "Automated moderation and admin tools",
        "End-to-end metrics and observability",
      ],
    },
    {
      slug: "bespoke-integrations",
      name: "Custom integrations & bespoke builds",
      tag: "custom",
      short: "When the off-the-shelf doesn't fit, we build the system that does.",
      description:
        "When the off-the-shelf doesn't fit: CRM connections, ERP and accounting bridges, payment flows, content pipelines, AI integrations on top of existing systems. The line that catches the work that doesn't fit cleanly above.",
      bullets: [
        "Integrations with CRMs, ERPs and internal tools",
        "Content pipelines and AI generation",
        "Payment and subscription flows",
        "Cloud infrastructure (Oracle, AWS, RunPod)",
        "Migrations and legacy system rewrites",
      ],
    },
  ],
  workSection: {
    eyebrow: "selected work",
    title: "A sample of the kind of systems we build.",
    body: "Anonymized projects. No client names, no exact metrics. The shape of the work, not the gossip.",
    seeAll: "See all work",
  },
  work: [
    {
      slug: "support-workspace",
      title: "Operations workspace for a conversational support team",
      story:
        "Monday mornings the queue could carry 80 waiting conversations. Before: each agent opened whatever they saw first, VIPs got mixed with 'thanks!' replies, and by mid-morning someone would find a ticket that had been waiting since Friday. Now: the queue prioritizes itself by SLA and customer type, each agent gets what fits their skill, the supervisor sees real load on a single screen, and SLA alerts fire before — not after.",
      problem:
        "A support team handling thousands of daily conversations across WhatsApp, Telegram and Instagram. No routing — agents picked at random. No visible SLA — the only way to know a conversation was slipping was to read it. No load visibility — the supervisor couldn't tell who was overloaded vs. free. Result: VIP clients waiting, old tickets forgotten, the team always one step behind.",
      built:
        "A custom operations workspace with everything the team needed in one screen — prioritized queue, automatic assignment, customer profile alongside each conversation, real-time supervisor view, and metrics that actually drive decisions. On their own infrastructure, with no third parties touching customer data.",
      bullets: [
        "Queue prioritized by SLA, age and customer type",
        "Automatic assignment by load, skill and language",
        "Customer profile alongside each conversation: history, orders, NPS",
        "Versioned response templates with variables",
        "Supervisor view: per-agent load, SLA risk, per-channel distribution",
        "Alerts before SLA breach, not after",
        "Escalation to second line or specific teams (billing, returns)",
        "Real metrics: CSAT, p50/p95, per-channel volume, per-agent productivity",
      ],
      scope: "Discovery + design + build + handover. Monthly maintenance.",
    },
    {
      slug: "multi-platform-social-ops",
      title: "Social command center wired into the internal system",
      story:
        "The brand used a social media tool for publishing and a separate internal system for orders. Every time a DM or comment asked about an invoice, a shipment, or an account status, the agent jumped between three tabs. We built a command center on their cloud that reads directly from their ERP: the team sees the customer's order next to the message and responds with context in one click.",
      problem:
        "A brand with active presence on Instagram, Facebook, Reddit and TikTok was paying for two tools — one to publish and another for support — and agents still had to jump to a third internal system every time a DM asked something concrete. Off-the-shelf tools don't integrate with their backend.",
      built:
        "Custom command center on their infrastructure: scheduling with platform-native adaptation, single inbox for comments and DMs, direct read from ERP/CRM alongside each conversation (orders, subscriptions, invoices), versioned content library.",
      scope: "Discovery + incremental build + ongoing roadmap.",
    },
    {
      slug: "telegram-broadcast",
      title: "Telegram infrastructure for a community business",
      story:
        "A channel with thousands of subscribers had outgrown its tooling. We built the full stack — bot with real business logic, segmented broadcast, payments and automated moderation. The first busy weekend scaled without flinching.",
      problem:
        "A Telegram-channel and community business needing segmented broadcast, subscription management and moderation tooling that scaled with growth.",
      built:
        "Production bot stack and services: segmented broadcast, subscriber management, monetization flows, admin tools, real-time metrics.",
      scope: "Build + ongoing support.",
    },
    {
      slug: "ai-pipelines",
      title: "AI generation pipelines on cloud GPU",
      story:
        "The client was generating image and video at volume, but the local workflow didn't scale — neither in speed nor cost. We moved generation to cloud GPU with custom orchestration on top of ComfyUI. Same team, same quality, several times more output at the same cost.",
      problem:
        "A visual generation workflow (image and video) that didn't scale on local hardware in either speed or cost.",
      built:
        "Custom infrastructure on RunPod / cloud GPU for ComfyUI pipelines: job orchestration, model management, per-job cost control, integration with upstream content systems.",
      scope: "Build + cost/quality iteration.",
    },
  ],
  processSection: {
    eyebrow: "how we work",
    title: "Few meetings. Lots of code. No promises we can't keep.",
    body: "A process designed to start small, validate the real scope, and ship software your team can actually run.",
    steps: [
      {
        label: "01",
        title: "Discovery",
        body: "Initial call, review of your current operation, mapping of the systems you already have and the real friction points. We come out with a written scope proposal.",
      },
      {
        label: "02",
        title: "Scope",
        body: "We define contract, fixed budget, milestones and acceptance criteria. No mid-project surprises.",
      },
      {
        label: "03",
        title: "Build",
        body: "Short iterations with continuous visibility. Access to staging from the first milestone.",
      },
      {
        label: "04",
        title: "Handover",
        body: "Production deployment, documentation, team training. The system stays in your infrastructure, with code ownership.",
      },
      {
        label: "05",
        title: "Partnership",
        body: "Optional maintenance, ongoing evolution, second phase. Most clients stay.",
      },
    ],
  },
  about: {
    eyebrow: "who we are",
    title: "Two partners. Technical depth and commercial focus.",
    body: "Kairox is a small, deliberate studio. No pyramid, no accounts that pass through three hands before reaching the person who builds. You talk to the people who design the system and the people who build it.",
    techRole: "Co-founder · Engineering",
    techBio:
      "Leads engineering and delivery. Python, APIs, databases, cloud infrastructure (Oracle Cloud, RunPod) and AI generation pipelines (ComfyUI). Hands-on with Claude Code and workflow automation.",
    salesRole: "Co-founder · Operations & client",
    salesBio:
      "Leads client relationships, scoping and proposals. Single point of contact from first call to delivery and beyond. Makes sure what's promised is exactly what gets built.",
  },
  contact: {
    eyebrow: "contact",
    title: "Tell us what you want to build.",
    body: "We answer within 24 working hours. If your project fits what we do, we set up a no-cost discovery call.",
    formName: "Name",
    formCompany: "Company",
    formEmail: "Email",
    formMessage: "Briefly tell us what you have in mind",
    formConsent:
      "I have read and accept the {privacy}. I consent to Kairox processing my data to respond to this enquiry.",
    formConsentRequired: "You must accept the privacy policy.",
    formSubmit: "Send",
    formSubmitting: "Sending…",
    formSuccess: "Message received. We'll reply within 24 hours.",
    formError: "Something went wrong. Email us directly at {email}.",
    emailLabel: "Email us directly",
    bookingLabel: "Or book a call",
    privacyLink: "privacy policy",
  },
  finalCta: {
    title: "Got a system to build?",
    body: "Tell us about it. If it fits, we'll come back with a concrete proposal and a realistic timeline.",
    cta: "Let's talk",
  },
  footer: {
    tagline: "The back office for messaging-first businesses.",
    nav: "Navigation",
    legal: "Legal",
    avisoLegal: "Legal notice",
    privacidad: "Privacy",
    cookies: "Cookies",
    rights: "All rights reserved.",
  },
  cookies: {
    body: "We use strictly necessary cookies for the website to function. We do not use analytics or advertising cookies.",
    accept: "Accept",
    reject: "Reject",
    configure: "Configure",
    privacyLink: "More info",
  },
  legal: {
    avisoLegal: {
      title: "Legal notice",
      body: `In compliance with Article 10 of Spain's Law 34/2002 on Information Society Services and Electronic Commerce (LSSI-CE), the following identification details of the website owner are provided:

· Company name: Kairox Nexus Digital SL
· Tax ID (CIF): B25903097
· Registered office: Revolt Negre 4, Cornellà de Llobregat 08940 (Barcelona)
· Contact email: kairoxnd@gmail.com
· Registry data: {{DATOS_REGISTRALES}}

Access to and use of this website grants user status and implies acceptance of the terms set out in this Legal Notice. The owner reserves the right to modify any content of the site without prior notice.

All content on the site (text, images, code, graphic design) is owned by the owner or used with appropriate authorization. Total or partial reproduction without express authorization is prohibited.

For any matter related to this Legal Notice, contact us at kairoxnd@gmail.com.`,
    },
    privacidad: {
      title: "Privacy policy",
      body: `This Privacy Policy describes how Kairox Nexus Digital SL ("Kairox") processes personal data collected through this website, in accordance with Regulation (EU) 2016/679 (GDPR) and Spanish Organic Law 3/2018 on Personal Data Protection (LOPDGDD).

1. DATA CONTROLLER
· Company name: Kairox Nexus Digital SL
· Tax ID: B25903097
· Address: Revolt Negre 4, Cornellà de Llobregat 08940 (Barcelona)
· Email: kairoxnd@gmail.com

2. DATA WE COLLECT
Through the contact form we collect: name, company (optional), email and message content. We do not collect special categories of data.

3. PURPOSE
We process your data exclusively to respond to your enquiry and, where applicable, to manage any commercial relationship that may arise.

4. LEGAL BASIS
The legal basis is the express consent you provide when submitting the form by checking the corresponding box.

5. RETENTION
We retain data for the time necessary to handle your enquiry and, where applicable, for the legally required period if a contractual relationship is established.

6. RECIPIENTS
We do not transfer data to third parties except by legal obligation. We use hosting and transactional email providers within the European Economic Area or with adequate safeguards.

7. RIGHTS
You may exercise your rights of access, rectification, erasure, objection, restriction and portability by writing to kairoxnd@gmail.com. You have the right to lodge a complaint with the Spanish Data Protection Agency (www.aepd.es).

8. SECURITY
We apply reasonable technical and organizational measures to protect your data.`,
    },
    cookies: {
      title: "Cookie policy",
      body: `This Cookie Policy explains what cookies are and how we use them on this website.

WHAT ARE COOKIES?
Cookies are small text files that websites place on your device to store information about your visit.

COOKIES WE USE
This website uses only strictly necessary cookies for its operation (for example, to remember your language preference or your cookie banner choice). These cookies are exempt from the consent requirement under Article 22.2 of the LSSI.

We do NOT use:
· Third-party analytics (Google Analytics, etc.)
· Advertising or tracking
· Social network cookies

COOKIE MANAGEMENT
You can configure your browser to block or delete cookies at any time. See your browser's documentation for more information.

CHANGES
We may update this Cookie Policy. Any changes will be published on this same page.

For any cookie-related enquiries, write to us at kairoxnd@gmail.com.`,
    },
  },
  routes: {
    services: "servicios",
    work: "trabajo",
    about: "nosotros",
    contact: "contacto",
    legal: "legal",
    avisoLegal: "aviso-legal",
    privacidad: "privacidad",
    cookies: "cookies",
  },
};
