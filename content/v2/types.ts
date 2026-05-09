import type { Locale } from "../types";

export type Tier = {
  slug: string;
  label: string; // "1 producto" / "5 segundos" / "1 reel diario"
  headline: string; // short value prop
  description: string;
  bullets: string[];
};

export type ServiceLine = {
  slug: "imagenes" | "video" | "suscripcion";
  name: string;
  short: string;
  description: string;
  unit: string; // "por producto" / "por duración" / "por mes"
  tiers: Tier[];
  sampleAlt: string; // accessibility text for the sample thumbnails
};

export type Sector = {
  slug: string;
  name: string;
  short: string;
  description: string;
  uses: string[]; // bullet list of typical deliverables for this sector
  imageAlt: string;
};

export type ProcessStep = {
  label: string; // "01"
  title: string;
  body: string;
  detail: string; // longer description for /proceso page
};

export type ComparisonRow = {
  metric: string; // "Tiempo por campaña"
  traditional: string; // "4 semanas"
  kairox: string; // "4 días"
  delta?: string; // "10× más rápido" — optional
};

export type V2Dictionary = {
  meta: { title: string; description: string };
  nav: {
    services: string;
    sectors: string;
    process: string;
    contact: string;
    cta: string;
  };
  hero: {
    eyebrow: string;
    headline: string;
    headlineTail: string; // gradient-highlighted phrase
    subhead: string;
    cta: string;
    secondaryCta: string;
    badges: string[]; // small mono chips below CTAs
  };
  studioVisual: {
    app: string;
    live: string;
    queueLabel: string;
    variantLabel: string;
    statusReady: string;
    statusRendering: string;
    statusQueued: string;
  };
  servicesSection: {
    eyebrow: string;
    title: string;
    body: string;
    seeAll: string;
    pricingNote: string; // "Cotización a medida según marca y volumen"
  };
  services: ServiceLine[];
  sectorsSection: {
    eyebrow: string;
    title: string;
    body: string;
    seeAll: string;
  };
  sectors: Sector[];
  comparisonSection: {
    eyebrow: string;
    title: string;
    body: string;
    leftLabel: string; // "Producción tradicional"
    rightLabel: string; // "Producción con Kairox"
    rows: ComparisonRow[];
  };
  processSection: {
    eyebrow: string;
    title: string;
    body: string;
    steps: ProcessStep[];
    needs: { title: string; items: string[] };
  };
  finalCta: { title: string; body: string; cta: string };
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
    privacyLink: string;
  };
  footer: {
    tagline: string;
    nav: string;
    legal: string;
    avisoLegal: string;
    privacidad: string;
    cookies: string;
    rights: string;
    versionSwitch: string; // "Ver Kairox v1"
  };
};

export type { Locale };
