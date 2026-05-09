export type Locale = "es" | "en" | "ca";

export const LOCALES: Locale[] = ["es", "en", "ca"];
export const DEFAULT_LOCALE: Locale = "es";

export type Service = {
  slug: string;
  name: string;
  tag: string;
  short: string;
  description: string;
  bullets: string[];
};

export type WorkCase = {
  slug: string;
  title: string;
  story: string;
  problem: string;
  built: string;
  scope: string;
};

export type ProcessStep = {
  label: string;
  title: string;
  body: string;
};

export type Dictionary = {
  heroVisual: {
    app: string;
    live: string;
    response: string;
    open: string;
    csat: string;
    volume24h: string;
    feed: { who: string; msg: string; t: string }[];
    feedExtra: { who: string; msg: string; t: string }[];
  };
  meta: {
    title: string;
    description: string;
  };
  nav: {
    services: string;
    work: string;
    about: string;
    contact: string;
    cta: string;
  };
  hero: {
    eyebrow: string;
    headline: string;
    subhead: string;
    cta: string;
    secondaryCta: string;
  };
  servicesSection: {
    eyebrow: string;
    title: string;
    body: string;
    seeAll: string;
  };
  services: Service[];
  workSection: {
    eyebrow: string;
    title: string;
    body: string;
    seeAll: string;
  };
  work: WorkCase[];
  processSection: {
    eyebrow: string;
    title: string;
    body: string;
    steps: ProcessStep[];
  };
  about: {
    eyebrow: string;
    title: string;
    body: string;
    techRole: string;
    techBio: string;
    salesRole: string;
    salesBio: string;
  };
  contact: {
    eyebrow: string;
    title: string;
    body: string;
    formName: string;
    formCompany: string;
    formEmail: string;
    formMessage: string;
    formConsent: string;
    formConsentRequired: string;
    formSubmit: string;
    formSubmitting: string;
    formSuccess: string;
    formError: string;
    emailLabel: string;
    bookingLabel: string;
    privacyLink: string;
  };
  finalCta: {
    title: string;
    body: string;
    cta: string;
  };
  footer: {
    tagline: string;
    nav: string;
    legal: string;
    avisoLegal: string;
    privacidad: string;
    cookies: string;
    rights: string;
  };
  cookies: {
    body: string;
    accept: string;
    reject: string;
    configure: string;
    privacyLink: string;
  };
  legal: {
    avisoLegal: { title: string; body: string };
    privacidad: { title: string; body: string };
    cookies: { title: string; body: string };
  };
  routes: {
    services: string;
    work: string;
    about: string;
    contact: string;
    legal: string;
    avisoLegal: string;
    privacidad: string;
    cookies: string;
  };
};
