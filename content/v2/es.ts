import type { V2Dictionary } from "./types";

export const v2es: V2Dictionary = {
  meta: {
    title: "Kairox — Producción publicitaria con IA para marcas",
    description:
      "Generamos imagen, vídeo y contenido para redes a la velocidad y al coste de la IA. Para marcas que no pueden permitirse esperar cuatro semanas por un spot.",
  },
  nav: {
    services: "Servicios",
    sectors: "Sectores",
    process: "Proceso",
    contact: "Contacto",
    cta: "Hablemos",
  },
  hero: {
    eyebrow: "studio · producción · ia",
    headline: "Tu próxima campaña, ",
    headlineTail: "sin la productora.",
    subhead:
      "Generamos imagen, vídeo y contenido para redes con IA — a una fracción del coste de una productora tradicional y en días, no en semanas. Para marcas que necesitan iterar rápido y aparecer en todas partes a la vez.",
    cta: "Hablemos",
    secondaryCta: "Ver servicios",
    badges: ["Imagen", "Vídeo", "Reels diarios", "DTC · Ecommerce"],
  },
  studioVisual: {
    app: "kairox · studio render queue",
    live: "rendering",
    queueLabel: "cola de renderizado",
    variantLabel: "variantes",
    statusReady: "listo",
    statusRendering: "rendering",
    statusQueued: "en cola",
  },
  servicesSection: {
    eyebrow: "qué producimos",
    title:
      "Tres líneas, un objetivo: que tu marca tenga el contenido que necesita, cuando lo necesita.",
    body: "Productizamos lo que antes era un proyecto a medida con presupuesto cerrado. Tú nos dices qué necesitas; nosotros entregamos.",
    seeAll: "Ver servicios completos",
    pricingNote: "Cotización a medida según marca, volumen y exclusividad.",
  },
  services: [
    {
      slug: "imagenes",
      name: "Packs de imagen por producto",
      short:
        "Catálogo, lifestyle y campaña — generados sobre tu producto, listos para web, ecommerce y redes.",
      description:
        "Imagen estática a medida: variantes de catálogo, escenas lifestyle, ángulos de cámara, fondos y composiciones. Entregado en los formatos que necesitas (cuadrado, vertical, horizontal, banner). Pensado para marcas DTC que renuevan creatividades constantemente.",
      unit: "por número de productos",
      sampleAlt: "Muestras de imagen generadas para distintos productos",
      tiers: [
        {
          slug: "1-producto",
          label: "1 producto",
          headline: "Setup mínimo, ideal para una primera prueba",
          description: "Un único producto, varias escenas y formatos.",
          bullets: [
            "Hasta 20 variantes por producto",
            "3 escenarios (catálogo, lifestyle, campaña)",
            "Formatos: cuadrado, vertical, horizontal",
            "Entrega en 5 días laborables",
          ],
        },
        {
          slug: "2-productos",
          label: "2 productos",
          headline: "Para marcas que lanzan en parejas",
          description: "Dos productos coordinados visualmente.",
          bullets: [
            "Hasta 20 variantes por producto",
            "Coherencia visual entre ambos productos",
            "Formatos extendidos para campañas multi-canal",
            "Entrega en 7 días laborables",
          ],
        },
        {
          slug: "3-productos",
          label: "3 productos",
          headline: "Para colecciones y lanzamientos completos",
          description: "Tres productos como una colección coherente.",
          bullets: [
            "Hasta 20 variantes por producto",
            "Hero shots + escenas de grupo",
            "Variantes específicas por canal",
            "Entrega en 10 días laborables",
          ],
        },
      ],
    },
    {
      slug: "video",
      name: "Packs de vídeo por duración",
      short:
        "Desde un story de 5 segundos hasta un spot de un minuto. Mismo proceso, distinto formato.",
      description:
        "Vídeo generado o producido con IA, con tu producto, tu marca y tu mensaje. Cubrimos desde stories y reels de redes sociales hasta spots para web, presentaciones y campañas pagadas.",
      unit: "por duración",
      sampleAlt: "Muestras de fotogramas de vídeos generados",
      tiers: [
        {
          slug: "5s",
          label: "5 segundos",
          headline: "Stories y bumpers",
          description: "Pieza corta para stories, pre-roll, transiciones.",
          bullets: [
            "Hasta 5 variantes",
            "Vertical y cuadrado",
            "Entrega en 3 días",
          ],
        },
        {
          slug: "15s",
          label: "10–15 segundos",
          headline: "Reels y posts de feed",
          description: "Formato dominante en TikTok, IG, Reels.",
          bullets: [
            "Hasta 4 variantes",
            "Optimizado por plataforma",
            "Entrega en 4 días",
          ],
        },
        {
          slug: "30s",
          label: "20–30 segundos",
          headline: "Spots cortos para redes y web",
          description: "Para campañas pagadas y home de web.",
          bullets: [
            "Hasta 3 variantes con foco distinto",
            "Voz en off y subtítulos opcionales",
            "Entrega en 6 días",
          ],
        },
        {
          slug: "60s",
          label: "60 segundos",
          headline: "Spots completos",
          description: "Pieza con narrativa para campañas.",
          bullets: [
            "Hasta 2 variantes",
            "Storyboard previo, voz en off, música",
            "Entrega en 10 días",
          ],
        },
        {
          slug: "120s",
          label: "1–2 minutos",
          headline: "Branded content",
          description: "Pieza extendida para web, presentaciones, vídeo corporativo.",
          bullets: [
            "Storyboard + script trabajado",
            "Múltiples escenas y locuciones",
            "Entrega en 14 días",
          ],
        },
      ],
    },
    {
      slug: "suscripcion",
      name: "Suscripción de contenido para redes",
      short:
        "Un flujo constante de reels diarios listos para publicar. Sin huecos en tu calendario.",
      description:
        "Contenido continuo para mantener tu marca presente en redes sin que un equipo interno tenga que producirlo. Adaptación nativa por plataforma — un mismo concepto en variantes para Instagram, TikTok, Facebook y X.",
      unit: "por mes",
      sampleAlt: "Muestras de reels publicados en redes sociales",
      tiers: [
        {
          slug: "1-reel",
          label: "1 reel diario",
          headline: "Presencia constante",
          description: "Un reel cada día laborable, listo para publicar.",
          bullets: [
            "20–22 reels al mes",
            "Adaptado a IG, TikTok, FB, X",
            "Calendario editorial mensual",
            "Iteración mensual sobre rendimiento",
          ],
        },
        {
          slug: "2-reels",
          label: "2 reels diarios",
          headline: "Para marcas con apetito de publicación alto",
          description: "Doble cadencia para alimentar varias plataformas.",
          bullets: [
            "40–44 reels al mes",
            "Variantes específicas por canal",
            "Análisis mensual de rendimiento",
            "Línea editorial co-trabajada",
          ],
        },
        {
          slug: "3-reels",
          label: "3 reels diarios",
          headline: "Para marcas always-on",
          description: "Triple cadencia con A/B continuo.",
          bullets: [
            "60–66 reels al mes",
            "A/B sobre formatos y mensajes",
            "Reporting semanal",
            "Roadmap de contenido trimestral",
          ],
        },
      ],
    },
  ],
  sectorsSection: {
    eyebrow: "para quién",
    title: "Marcas que necesitan velocidad y volumen sin perder calidad.",
    body: "Trabajamos especialmente bien con marcas DTC y ecommerce que renuevan creatividades constantemente. Si tu producción tradicional cuesta cuatro semanas y cinco mil euros por spot, hablemos.",
    seeAll: "Ver todos los sectores",
  },
  sectors: [
    {
      slug: "puericultura",
      name: "Puericultura e infantil",
      short: "Producto físico con vida útil de campaña corta y alta rotación de creatividades.",
      description:
        "Marcas como las que hay en cualquier feria del sector — Jané, Asalvo, Babyauto, Olmitos, Lorena Canals — necesitan renovar contenido cada lanzamiento y para cada canal. Usamos tu producto real como referencia y generamos las escenas que necesitas.",
      uses: [
        "Imagen de catálogo y lifestyle por SKU",
        "Reels diarios para Instagram y TikTok",
        "Spots de 15–30s para campañas estacionales",
      ],
      imageAlt: "Producto de puericultura en una escena lifestyle",
    },
    {
      slug: "cosmetica",
      name: "Cosmética y cuidado personal",
      short: "Lanzamientos frecuentes, packaging que importa, comunidad activa en redes.",
      description:
        "Marcas como Freshly Cosmetics, ISDIN o cualquier marca DTC del sector cosmético viven de lanzamientos y de presencia constante. Generamos packshots, vídeos de producto, reels de uso y campañas estacionales.",
      uses: [
        "Packshots y bodegones por producto",
        "Vídeo de aplicación / textura",
        "Calendario de reels para lanzamientos",
      ],
      imageAlt: "Bodegón de producto cosmético con luz natural",
    },
    {
      slug: "moda",
      name: "Moda y accesorios",
      short: "Colecciones por temporada, look-and-feel coherente, mucho contenido para muchos canales.",
      description:
        "Marcas como Singularu, Gocco o cualquier marca de moda DTC necesitan generar contenido a velocidad de colección. Trabajamos sobre tus prendas reales para mantener fidelidad de producto.",
      uses: [
        "Look-books generados por colección",
        "Variantes por modelo y por canal",
        "Vídeo editorial corto",
      ],
      imageAlt: "Pieza de moda fotografiada en estudio",
    },
    {
      slug: "hogar",
      name: "Hogar y decoración",
      short: "Producto que necesita verse en contexto. Mucha variedad de escenas y ambientes.",
      description:
        "Para marcas de hogar, decoración y mueble, la imagen lifestyle vende más que el packshot. Generamos escenas de producto en distintos ambientes — moderno, mediterráneo, nórdico — sin tener que montar set.",
      uses: [
        "Lifestyle por ambiente",
        "Variantes estacionales (Navidad, primavera)",
        "Reels de uso e inspiración",
      ],
      imageAlt: "Producto de hogar en una escena de salón",
    },
    {
      slug: "dtc-ecommerce",
      name: "DTC y ecommerce",
      short: "Volumen constante, presupuesto acotado, KPIs de conversión claros.",
      description:
        "Si vendes online y tu motor son las creatividades, necesitas iterar continuamente. Te damos un flujo regular de imagen, vídeo y reel — y nos integramos con tu equipo de performance para alimentar campañas pagadas con material fresco.",
      uses: [
        "Creatividades para Meta Ads y TikTok Ads",
        "Variantes A/B sobre el mismo producto",
        "Reels y posts orgánicos diarios",
      ],
      imageAlt: "Marca DTC en su tienda online",
    },
    {
      slug: "servicios",
      name: "Marcas de servicios",
      short: "Sin producto físico — la creatividad se apoya en el concepto y el storytelling.",
      description:
        "Para marcas de servicios (B2B, SaaS, consultoría, salud, educación), la pieza no es el producto: es la idea. Generamos contenido conceptual, escenas humanas, gráficos animados y vídeo explicativo.",
      uses: [
        "Vídeo explicativo de producto / servicio",
        "Reels editoriales conceptuales",
        "Imagen para landing y campañas",
      ],
      imageAlt: "Escena de oficina moderna con personas trabajando",
    },
  ],
  comparisonSection: {
    eyebrow: "por qué con nosotros",
    title: "Lo mismo que una productora — sin lo que hace que cueste cuatro semanas.",
    body: "No vamos contra el oficio del cine ni de la publicidad. Vamos contra el coste y el tiempo que la mayoría de marcas no se pueden permitir mes a mes.",
    leftLabel: "Producción tradicional",
    rightLabel: "Producción con Kairox",
    rows: [
      { metric: "Tiempo medio por spot", traditional: "3–6 semanas", kairox: "3–10 días", delta: "10× más rápido" },
      { metric: "Coste por spot 15s", traditional: "3.000 – 8.000 €", kairox: "200 – 500 €", delta: "Hasta 15× menos coste" },
      { metric: "Variantes por concepto", traditional: "1 final", kairox: "5–8 variantes", delta: "Más material para A/B" },
      { metric: "Iteraciones tras revisión", traditional: "1–2 limitadas", kairox: "Las que necesites", delta: "Sin sobrecostes ocultos" },
      { metric: "Rotación de creatividades", traditional: "Trimestral", kairox: "Semanal o diaria", delta: "Para campañas always-on" },
    ],
  },
  processSection: {
    eyebrow: "cómo trabajamos",
    title: "Cinco pasos. Sin reuniones de cuatro horas. Sin cambios sorpresa de presupuesto.",
    body: "Pensado para que tu equipo de marketing reciba contenido sin tener que convertirse en productores.",
    steps: [
      {
        label: "01",
        title: "Brief",
        body: "Producto, marca, ángulos, tono. En una llamada de 30 minutos cerramos el alcance.",
        detail:
          "Necesitamos entender tu producto, tus claims, tu identidad visual y los ángulos comerciales que quieres explorar. Si tienes un brand kit, brief de campaña o referencias visuales, mejor — pero no es bloqueante.",
      },
      {
        label: "02",
        title: "Generación",
        body: "Generamos las primeras variantes en 48–72 horas. Tú las revisas en una galería privada.",
        detail:
          "Trabajamos en paralelo con varios modelos y técnicas. Cada concepto sale en múltiples variantes para que puedas comparar. Acceso a una galería privada donde marcas las que quieres iterar y las que descartas.",
      },
      {
        label: "03",
        title: "Review",
        body: "Iteramos sobre tu feedback. Sin límite de retoques dentro del alcance.",
        detail:
          "Cada iteración baja la entropía: del 'me gusta esta dirección pero más limpio' al 'esto vale'. No cobramos extra por iteraciones razonables — está incluido en el alcance.",
      },
      {
        label: "04",
        title: "Entrega",
        body: "Entregamos en los formatos que necesites — cuadrado, vertical, horizontal, banner — listos para publicar.",
        detail:
          "Cada pieza se entrega en los formatos que tu equipo de marketing necesita: redes (cuadrado, vertical), web (banner, hero), ads (cuadrado y vertical), email (horizontal). Naming claro, organización por carpeta, todo descargable.",
      },
      {
        label: "05",
        title: "Iteración",
        body: "Para suscripciones: revisamos rendimiento mes a mes y ajustamos el roadmap de contenido.",
        detail:
          "En contratos de suscripción mensual, evaluamos qué piezas están funcionando (impresiones, engagement, CTR si lo medimos juntos) y orientamos la siguiente tanda hacia ángulos que están dando resultado.",
      },
    ],
    needs: {
      title: "Qué necesitamos de ti",
      items: [
        "Tu producto (físico o referencias claras)",
        "Brand kit o guía de estilo (si la tienes)",
        "Una persona de contacto que pueda decidir y dar feedback",
        "Acceso a tus canales para entender tono y audiencia (opcional)",
      ],
    },
  },
  finalCta: {
    title: "¿Tu próxima campaña empieza ya?",
    body: "Cuéntanos qué marca llevas y qué necesitas. Te respondemos en 24 horas con propuesta concreta.",
    cta: "Hablemos",
  },
  contact: {
    eyebrow: "contacto",
    title: "Cuéntanos tu marca y tu próxima campaña.",
    body: "Respondemos en menos de 24 horas laborables con una propuesta concreta y un calendario realista.",
    formName: "Nombre",
    formCompany: "Marca / empresa",
    formEmail: "Email",
    formMessage: "Cuéntanos qué tipo de contenido necesitas",
    formConsent:
      "He leído y acepto la {privacy}. Doy mi consentimiento para que Kairox trate mis datos para responder a esta consulta.",
    formConsentRequired: "Debes aceptar la política de privacidad.",
    formSubmit: "Enviar",
    formSubmitting: "Enviando…",
    formSuccess: "Mensaje recibido. Te respondemos en menos de 24 horas.",
    formError: "Algo ha fallado. Escríbenos directamente a {email}.",
    emailLabel: "Escríbenos directamente",
    privacyLink: "política de privacidad",
  },
  footer: {
    tagline: "Producción publicitaria con IA para marcas que no pueden esperar.",
    nav: "Navegación",
    legal: "Legal",
    avisoLegal: "Aviso legal",
    privacidad: "Privacidad",
    cookies: "Cookies",
    rights: "Todos los derechos reservados.",
    versionSwitch: "← Ver Kairox v1 (back office)",
  },
};
