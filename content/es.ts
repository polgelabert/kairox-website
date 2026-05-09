import type { Dictionary } from "./types";

export const es: Dictionary = {
  heroVisual: {
    app: "kairox · consola ops",
    live: "en vivo",
    response: "respuesta p50",
    open: "abiertas",
    csat: "csat 7d",
    volume24h: "volumen · 24h",
    feed: [
      { who: "@maria · WA", msg: "ok perfecto, mañana cierro pago", t: "ahora" },
      { who: "@dani · TG", msg: "podéis enviar la factura al correo?", t: "1m" },
      { who: "@r/community", msg: "thread: cómo gestionáis los picos?", t: "3m" },
    ],
    feedExtra: [
      { who: "@laura · IG", msg: "respondéis en finde? necesito info urgente", t: "ahora" },
      { who: "@carlos · WA", msg: "transferencia hecha, ya os llega?", t: "ahora" },
      { who: "@alex · TG", msg: "🙏 gracias por el seguimiento", t: "ahora" },
      { who: "@u/sandra", msg: "comment: justo lo que necesitaba ver", t: "ahora" },
      { who: "@nico · WA", msg: "perfecto, cerramos call el martes", t: "ahora" },
    ],
  },
  meta: {
    title: "Kairox — El back office para negocios que viven en mensajería",
    description:
      "Construimos dashboards a medida, sistemas de operaciones sociales e infraestructura de automatización para equipos que trabajan en WhatsApp, Telegram, Instagram, Reddit y TikTok.",
  },
  nav: {
    services: "Servicios",
    work: "Trabajo",
    about: "Nosotros",
    contact: "Contacto",
    cta: "Hablemos",
  },
  hero: {
    eyebrow: "studio · ingeniería · infraestructura",
    headline: "El back office para negocios que viven en mensajería.",
    subhead:
      "Construimos dashboards a medida, sistemas de operaciones sociales e infraestructura de automatización para equipos que trabajan en WhatsApp, Telegram, Instagram, Reddit y TikTok. Cuando lo estándar no encaja, construimos el sistema que sí.",
    cta: "Hablemos",
    secondaryCta: "Ver servicios",
  },
  servicesSection: {
    eyebrow: "qué construimos",
    title: "Cuatro líneas. Una idea: sistemas que tu operación necesita y nadie vende empaquetados.",
    body: "No somos una agencia ni un integrador de no-code. Diseñamos y desarrollamos software a medida para equipos que mueven su día a día por chat, mensajería y plataformas sociales.",
    seeAll: "Ver todos los servicios",
  },
  services: [
    {
      slug: "analytics-conversacional",
      name: "Analytics y monitorización conversacional",
      tag: "analítica",
      short:
        "Dashboards en tiempo real para equipos que mueven miles de conversaciones al día.",
      description:
        "Dashboards a medida y sistemas de monitorización para equipos que gestionan conversaciones en WhatsApp, Telegram, Instagram, Facebook DMs, Reddit y otras superficies de chat. Métricas de respuesta en tiempo real, análisis de sentimiento, volumen, rendimiento por agente, embudos de conversión. Sobre tus datos, en tu infraestructura o en la nuestra.",
      bullets: [
        "Métricas de respuesta y SLA en tiempo real",
        "Rendimiento por agente y por canal",
        "Análisis de sentimiento y categorización",
        "Embudos de conversión sobre conversación",
        "Despliegue en tu nube o en la nuestra",
      ],
    },
    {
      slug: "operaciones-sociales",
      name: "Sistemas de operaciones sociales multi-plataforma",
      tag: "ops",
      short:
        "Un command center unificado para gestionar Meta, Reddit, TikTok y X desde un solo sitio.",
      description:
        "Un panel de mando unificado para equipos que gestionan presencia en Meta (Instagram + Facebook vía Business Suite API), Reddit, TikTok y X. Programación, cross-posting con adaptación de contenido por plataforma, triage de comentarios y DMs, analítica de rendimiento, biblioteca de contenidos.",
      bullets: [
        "Programación y cross-posting nativo por plataforma",
        "Triage de DMs y comentarios en una bandeja",
        "Biblioteca de contenidos versionada",
        "Analítica unificada por marca y por canal",
        "Roles, permisos y aprobaciones para equipos",
      ],
    },
    {
      slug: "infraestructura-telegram",
      name: "Infraestructura de Telegram y mensajería",
      tag: "telegram",
      short:
        "Bots, canales, broadcast y monetización a nivel producción. Nada de pegamento no-code.",
      description:
        "Bots, canales, sistemas de broadcast, gestión de suscriptores, flujos de monetización, herramientas de moderación. Software de producción, no glue de no-code que se rompe el primer fin de semana ocupado.",
      bullets: [
        "Bots a medida con lógica de negocio real",
        "Broadcast y segmentación de audiencias",
        "Gestión de suscripciones y pagos",
        "Moderación automatizada y herramientas para admins",
        "Métricas y observabilidad de extremo a extremo",
      ],
    },
    {
      slug: "integraciones-a-medida",
      name: "Integraciones y desarrollos a medida",
      tag: "a medida",
      short:
        "Cuando lo de la estantería no encaja, construimos el sistema que sí.",
      description:
        "Cuando lo estándar no encaja: conexiones con CRMs, puentes con ERP y contabilidad, flujos de pago, pipelines de contenido, integraciones de IA sobre sistemas existentes. La línea que recoge el trabajo que no entra limpiamente en las anteriores.",
      bullets: [
        "Integraciones con CRMs, ERPs y herramientas internas",
        "Pipelines de contenido y generación con IA",
        "Flujos de pago y suscripción",
        "Infraestructura cloud (Oracle, AWS, RunPod)",
        "Migraciones y reescrituras de sistemas legacy",
      ],
    },
  ],
  workSection: {
    eyebrow: "trabajo seleccionado",
    title: "Una muestra del tipo de sistemas que construimos.",
    body: "Proyectos anonimizados. Sin nombres de cliente, sin métricas exactas. La forma del trabajo, no el cotilleo.",
    seeAll: "Ver todo el trabajo",
  },
  work: [
    {
      slug: "soporte-conversacional",
      title: "Centro de operación para un equipo de soporte conversacional",
      story:
        "Los lunes a primera hora la cola podía tener 80 conversaciones esperando. Antes: cada agente abría lo primero que veía, los VIP se mezclaban con consultas de 'gracias', y a media mañana alguien descubría un ticket esperando desde el viernes. Ahora: la cola se prioriza automáticamente por SLA y tipo de cliente, cada agente recibe lo que mejor encaja con su skill, el supervisor ve la carga real en su pantalla, y si una conversación se acerca al SLA la alerta salta antes — no después.",
      problem:
        "Un equipo de soporte gestionando miles de conversaciones diarias por WhatsApp, Telegram e Instagram. Sin enrutado: cada agente cogía conversaciones al azar. Sin SLA visible: la única forma de saber si una conversación se estaba retrasando era leerla. Sin visibilidad de carga: el supervisor no sabía quién estaba saturado y quién libre. Resultado: clientes VIP esperando, tickets antiguos olvidados y sensación constante de ir a remolque.",
      built:
        "Workspace operativo a medida con todo lo que el equipo necesitaba en una sola pantalla — cola priorizada, asignación automática, perfil del cliente al lado de cada conversación, vista de supervisor en tiempo real y métricas que de verdad accionan decisiones. Sobre su infraestructura, sin terceros tocando datos de cliente.",
      bullets: [
        "Cola priorizada por SLA, antigüedad y tipo de cliente",
        "Asignación automática por carga, skill e idioma",
        "Perfil del cliente al lado de la conversación: historial, pedidos, NPS",
        "Plantillas de respuesta versionadas con variables",
        "Vista de supervisor: carga por agente, riesgo SLA, distribución por canal",
        "Alertas antes del incumplimiento, no después",
        "Escalado a segunda línea o a equipos específicos (billing, devoluciones)",
        "Métricas reales: CSAT, p50/p95, volumen por canal, productividad por agente",
      ],
      scope: "Discovery + diseño + build + handover. Mantenimiento mensual.",
    },
    {
      slug: "ops-sociales-multi-plataforma",
      title: "Command center social conectado al sistema interno",
      story:
        "La marca usaba una herramienta de social media para publicar y un sistema interno separado para gestionar pedidos. Cuando llegaba un DM o un comentario preguntando por una factura, un envío o el estado de una cuenta, el agente saltaba entre tres pestañas. Construimos un command center sobre su nube que lee directamente de su ERP: el equipo ve el pedido del cliente al lado del mensaje y responde con contexto en un click.",
      problem:
        "Una marca con presencia en Instagram, Facebook, Reddit y TikTok pagaba dos herramientas — una para publicar y otra para soporte — y aún así sus agentes saltaban a un tercer sistema interno cada vez que un DM preguntaba algo concreto. Lo off-the-shelf no se integra con su backend.",
      built:
        "Command center a medida sobre su infraestructura: programación con adaptación nativa por canal, bandeja única para comentarios y DMs, lectura directa del ERP/CRM al lado de cada conversación (pedidos, suscripciones, facturas), biblioteca de contenidos versionada.",
      scope: "Discovery + build incremental + roadmap continuo.",
    },
    {
      slug: "telegram-broadcast",
      title: "Infraestructura de Telegram para un negocio de comunidad",
      story:
        "Un canal con miles de suscriptores había crecido más rápido que sus herramientas. Montamos la infraestructura completa — bot con lógica de negocio real, broadcast segmentado, cobros y moderación automatizada. El primer fin de semana ocupado escaló sin parpadear.",
      problem:
        "Un negocio basado en canales y comunidad de Telegram que necesitaba broadcast segmentado, gestión de suscripciones y herramientas de moderación que escalaran con el crecimiento.",
      built:
        "Stack de bots y servicios de producción: broadcast con segmentación, gestión de suscriptores, flujos de monetización, herramientas para admins, métricas en tiempo real.",
      scope: "Build + soporte continuo.",
    },
    {
      slug: "ai-pipelines",
      title: "Pipelines de generación con IA en GPU cloud",
      story:
        "El cliente generaba imagen y vídeo a volumen, pero su flujo local no escalaba ni en velocidad ni en coste. Movimos toda la generación a GPU cloud con orquestación a medida sobre ComfyUI. Mismo equipo, misma calidad, varias veces más output al mismo coste.",
      problem:
        "Un flujo de trabajo intensivo en generación visual (imagen y vídeo) que en local no escalaba ni en velocidad ni en coste.",
      built:
        "Infraestructura a medida sobre RunPod / GPU cloud para pipelines de ComfyUI: orquestación de jobs, gestión de modelos, control de coste por trabajo, integración con sistemas de contenido aguas arriba.",
      scope: "Build + iteración sobre coste/calidad.",
    },
  ],
  processSection: {
    eyebrow: "cómo trabajamos",
    title: "Pocas reuniones. Mucho código. Cero promesas que no podamos sostener.",
    body: "Un proceso pensado para empezar pequeño, validar el alcance real, y entregar software que el equipo pueda operar.",
    steps: [
      {
        label: "01",
        title: "Discovery",
        body: "Llamada inicial, revisión de tu operación actual, mapeo de los sistemas que ya tienes y de los puntos de fricción reales. Salimos con una propuesta de alcance escrita.",
      },
      {
        label: "02",
        title: "Scope",
        body: "Definimos contrato, presupuesto cerrado, hitos y criterios de entrega. Sin sorpresas a mitad de proyecto.",
      },
      {
        label: "03",
        title: "Build",
        body: "Iteraciones cortas con visibilidad continua. Acceso al entorno de staging desde el primer hito.",
      },
      {
        label: "04",
        title: "Handover",
        body: "Despliegue a producción, documentación, formación al equipo. El sistema queda en tu infraestructura, con tu propiedad del código.",
      },
      {
        label: "05",
        title: "Partnership",
        body: "Mantenimiento opcional, evolución continua, segunda fase. La mayoría de clientes se quedan.",
      },
    ],
  },
  about: {
    eyebrow: "quiénes somos",
    title: "Dos socios. Profundidad técnica y foco comercial.",
    body: "Kairox es un studio pequeño y deliberado. Sin pirámide, sin cuentas que pasan por tres manos antes de llegar a quien construye. Hablas con quien diseña el sistema y con quien lo construye.",
    techRole: "Co-fundador · Ingeniería",
    techBio:
      "Lidera la ingeniería y la entrega. Python, APIs, bases de datos, infraestructura cloud (Oracle Cloud, RunPod) y pipelines de generación con IA (ComfyUI). Hands-on con Claude Code y automatización de flujos de trabajo.",
    salesRole: "Co-fundadora · Operaciones y cliente",
    salesBio:
      "Lidera la relación con cliente, el scoping y las propuestas. Punto de contacto único desde la primera llamada hasta la entrega y más allá. Se asegura de que lo que se promete sea exactamente lo que se construye.",
  },
  contact: {
    eyebrow: "contacto",
    title: "Cuéntanos qué quieres construir.",
    body: "Respondemos en menos de 24 horas laborables. Si tu proyecto encaja con lo que hacemos, agendamos una llamada de discovery sin coste.",
    formName: "Nombre",
    formCompany: "Empresa",
    formEmail: "Email",
    formMessage: "Cuéntanos brevemente qué tienes en mente",
    formConsent:
      "He leído y acepto la {privacy}. Doy mi consentimiento para que Kairox trate mis datos para responder a esta consulta.",
    formConsentRequired: "Debes aceptar la política de privacidad.",
    formSubmit: "Enviar",
    formSubmitting: "Enviando…",
    formSuccess: "Mensaje recibido. Te respondemos en menos de 24 horas.",
    formError: "Algo ha fallado. Escríbenos directamente a {email}.",
    emailLabel: "Escríbenos directamente",
    bookingLabel: "O agenda una llamada",
    privacyLink: "política de privacidad",
  },
  finalCta: {
    title: "¿Tienes un sistema que construir?",
    body: "Cuéntanoslo. Si encaja, te respondemos con una propuesta concreta y un calendario realista.",
    cta: "Hablemos",
  },
  footer: {
    tagline: "El back office para negocios que viven en mensajería.",
    nav: "Navegación",
    legal: "Legal",
    avisoLegal: "Aviso legal",
    privacidad: "Privacidad",
    cookies: "Cookies",
    rights: "Todos los derechos reservados.",
  },
  cookies: {
    body: "Usamos cookies estrictamente necesarias para el funcionamiento de la web. No usamos cookies de analítica ni de publicidad.",
    accept: "Aceptar",
    reject: "Rechazar",
    configure: "Configurar",
    privacyLink: "Más información",
  },
  legal: {
    avisoLegal: {
      title: "Aviso legal",
      body: `En cumplimiento del artículo 10 de la Ley 34/2002, de 11 de julio, de Servicios de la Sociedad de la Información y Comercio Electrónico (LSSI-CE), se informa de los siguientes datos identificativos del titular del sitio web:

· Razón social: Kairox Nexus Digital SL
· CIF: B25903097
· Domicilio social: Revolt Negre 4, Cornellà de Llobregat 08940 (Barcelona)
· Email de contacto: kairoxnd@gmail.com
· Datos registrales: {{DATOS_REGISTRALES}}

El acceso y uso de este sitio web atribuye la condición de usuario e implica la aceptación de los términos recogidos en el presente Aviso Legal. El titular se reserva el derecho de modificar cualquier contenido del sitio web sin previo aviso.

Todos los contenidos del sitio (textos, imágenes, código, diseño gráfico) son titularidad del titular o cuentan con la correspondiente autorización para su utilización. Queda prohibida la reproducción total o parcial sin autorización expresa.

El titular se compromete a no realizar publicidad engañosa. Los errores formales o numéricos que pudiera contener el sitio serán corregidos en cuanto se detecten.

Para cualquier cuestión relacionada con este Aviso Legal, puedes contactar en kairoxnd@gmail.com.`,
    },
    privacidad: {
      title: "Política de privacidad",
      body: `Esta Política de Privacidad describe cómo Kairox Nexus Digital SL (en adelante, "Kairox") trata los datos personales recabados a través de este sitio web, conforme al Reglamento (UE) 2016/679 (RGPD) y la Ley Orgánica 3/2018 de Protección de Datos Personales y garantía de los derechos digitales (LOPDGDD).

1. RESPONSABLE DEL TRATAMIENTO
· Razón social: Kairox Nexus Digital SL
· CIF: B25903097
· Domicilio: Revolt Negre 4, Cornellà de Llobregat 08940 (Barcelona)
· Email: kairoxnd@gmail.com

2. DATOS QUE RECABAMOS
A través del formulario de contacto recabamos: nombre, empresa (opcional), email y el contenido del mensaje. No recabamos datos de categorías especiales.

3. FINALIDAD
Tratamos tus datos exclusivamente para responder a la consulta planteada y, en su caso, para gestionar la relación comercial que pudiera derivarse.

4. LEGITIMACIÓN
La base legal es el consentimiento expreso que prestas al enviar el formulario, marcando la casilla correspondiente.

5. CONSERVACIÓN
Conservamos los datos durante el tiempo necesario para atender tu consulta y, en su caso, durante el plazo legalmente exigible si llega a establecerse relación contractual.

6. DESTINATARIOS
No cedemos datos a terceros salvo obligación legal. Utilizamos proveedores de hosting y email transaccional dentro del Espacio Económico Europeo o con garantías adecuadas.

7. DERECHOS
Puedes ejercer los derechos de acceso, rectificación, supresión, oposición, limitación y portabilidad escribiendo a kairoxnd@gmail.com. Tienes derecho a presentar una reclamación ante la Agencia Española de Protección de Datos (www.aepd.es).

8. SEGURIDAD
Aplicamos medidas técnicas y organizativas razonables para proteger tus datos.`,
    },
    cookies: {
      title: "Política de cookies",
      body: `Esta Política de Cookies explica qué son las cookies y cómo las utilizamos en este sitio web.

¿QUÉ SON LAS COOKIES?
Las cookies son pequeños archivos de texto que los sitios web colocan en tu dispositivo para almacenar información sobre tu visita.

COOKIES QUE UTILIZAMOS
Este sitio web utiliza únicamente cookies estrictamente necesarias para su funcionamiento (por ejemplo, para recordar tu preferencia de idioma o tu elección sobre el banner de cookies). Estas cookies están exentas del deber de consentimiento conforme al artículo 22.2 de la LSSI.

NO utilizamos cookies de:
· Analítica de terceros (Google Analytics, etc.)
· Publicidad o tracking
· Redes sociales

GESTIÓN DE COOKIES
Puedes configurar tu navegador para bloquear o eliminar cookies en cualquier momento. Consulta la documentación de tu navegador para más información.

CAMBIOS
Podemos actualizar esta Política de Cookies. Cualquier cambio se publicará en esta misma página.

Para cualquier consulta sobre cookies, escríbenos a kairoxnd@gmail.com.`,
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
