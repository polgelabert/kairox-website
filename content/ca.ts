import type { Dictionary } from "./types";

export const ca: Dictionary = {
  heroVisual: {
    app: "kairox · consola ops",
    live: "en directe",
    response: "resposta p50",
    open: "obertes",
    csat: "csat 7d",
    volume24h: "volum · 24h",
    feed: [
      { who: "@maria · WA", msg: "ok perfecte, demà tanco el pagament", t: "ara" },
      { who: "@dani · TG", msg: "podeu enviar la factura al correu?", t: "1m" },
      { who: "@r/community", msg: "thread: com gestioneu els pics?", t: "3m" },
    ],
    feedExtra: [
      { who: "@laura · IG", msg: "responeu cap de setmana? necessito info urgent", t: "ara" },
      { who: "@carlos · WA", msg: "transferència feta, ja us arriba?", t: "ara" },
      { who: "@alex · TG", msg: "🙏 gràcies pel seguiment", t: "ara" },
      { who: "@u/sandra", msg: "comment: just el que necessitava veure", t: "ara" },
      { who: "@nico · WA", msg: "perfecte, tanquem call dimarts", t: "ara" },
    ],
  },
  meta: {
    title: "Kairox — El back office per a negocis que viuen en missatgeria",
    description:
      "Construïm dashboards a mida, sistemes d'operacions socials i infraestructura d'automatització per a equips que treballen a WhatsApp, Telegram, Instagram, Reddit i TikTok.",
  },
  nav: {
    services: "Serveis",
    work: "Feina",
    about: "Nosaltres",
    contact: "Contacte",
    cta: "Parlem",
  },
  hero: {
    eyebrow: "studio · enginyeria · infraestructura",
    headline: "El back office per a negocis que viuen en missatgeria.",
    subhead:
      "Construïm dashboards a mida, sistemes d'operacions socials i infraestructura d'automatització per a equips que treballen a WhatsApp, Telegram, Instagram, Reddit i TikTok. Quan l'estàndard no encaixa, construïm el sistema que sí.",
    cta: "Parlem",
    secondaryCta: "Veure serveis",
  },
  servicesSection: {
    eyebrow: "què construïm",
    title:
      "Quatre línies. Una idea: sistemes que la teva operació necessita i que ningú ven empaquetats.",
    body: "No som una agència ni un integrador de no-code. Dissenyem i desenvolupem programari a mida per a equips que mouen el seu dia a dia per xat, missatgeria i plataformes socials.",
    seeAll: "Veure tots els serveis",
  },
  services: [
    {
      slug: "analytics-conversacional",
      name: "Analítica i monitorització conversacional",
      tag: "analítica",
      short:
        "Dashboards en temps real per a equips que mouen milers de converses al dia.",
      description:
        "Dashboards a mida i sistemes de monitorització per a equips que gestionen converses a WhatsApp, Telegram, Instagram, Facebook DMs, Reddit i altres superfícies de xat. Mètriques de resposta en temps real, anàlisi de sentiment, volum, rendiment per agent, embuts de conversió. Sobre les teves dades, a la teva infraestructura o a la nostra.",
      bullets: [
        "Mètriques de resposta i SLA en temps real",
        "Rendiment per agent i per canal",
        "Anàlisi de sentiment i categorització",
        "Embuts de conversió sobre conversa",
        "Desplegament al teu núvol o al nostre",
      ],
    },
    {
      slug: "operacions-socials",
      name: "Sistemes d'operacions socials multi-plataforma",
      tag: "ops",
      short:
        "Un command center unificat per gestionar Meta, Reddit, TikTok i X des d'un sol lloc.",
      description:
        "Un panell de comandament unificat per a equips que gestionen presència a Meta (Instagram + Facebook via Business Suite API), Reddit, TikTok i X. Programació, cross-posting amb adaptació de contingut per plataforma, triatge de comentaris i DMs, analítica de rendiment, biblioteca de continguts.",
      bullets: [
        "Programació i cross-posting natiu per plataforma",
        "Triatge de DMs i comentaris en una bústia",
        "Biblioteca de continguts versionada",
        "Analítica unificada per marca i per canal",
        "Rols, permisos i aprovacions per a equips",
      ],
    },
    {
      slug: "infraestructura-telegram",
      name: "Infraestructura de Telegram i missatgeria",
      tag: "telegram",
      short:
        "Bots, canals, broadcast i monetització a nivell de producció. Res de pegament no-code.",
      description:
        "Bots, canals, sistemes de broadcast, gestió de subscriptors, fluxos de monetització, eines de moderació. Programari de producció, no glue de no-code que es trenca el primer cap de setmana ocupat.",
      bullets: [
        "Bots a mida amb lògica de negoci real",
        "Broadcast i segmentació d'audiències",
        "Gestió de subscripcions i pagaments",
        "Moderació automatitzada i eines per a admins",
        "Mètriques i observabilitat d'extrem a extrem",
      ],
    },
    {
      slug: "integracions-a-mida",
      name: "Integracions i desenvolupaments a mida",
      tag: "a mida",
      short:
        "Quan el de prestatgeria no encaixa, construïm el sistema que sí.",
      description:
        "Quan l'estàndard no encaixa: connexions amb CRMs, ponts amb ERP i comptabilitat, fluxos de pagament, pipelines de contingut, integracions d'IA sobre sistemes existents. La línia que recull la feina que no entra netament a les anteriors.",
      bullets: [
        "Integracions amb CRMs, ERPs i eines internes",
        "Pipelines de contingut i generació amb IA",
        "Fluxos de pagament i subscripció",
        "Infraestructura cloud (Oracle, AWS, RunPod)",
        "Migracions i reescriptures de sistemes legacy",
      ],
    },
  ],
  workSection: {
    eyebrow: "feina seleccionada",
    title: "Una mostra del tipus de sistemes que construïm.",
    body: "Projectes anonimitzats. Sense noms de client, sense mètriques exactes. La forma de la feina, no el cotilleig.",
    seeAll: "Veure tota la feina",
  },
  work: [
    {
      slug: "suport-conversacional",
      title: "Centre d'operació per a un equip de suport conversacional",
      story:
        "Els dilluns a primera hora la cua podia tenir 80 converses esperant. Abans: cada agent obria el primer que veia, els VIP es barrejaven amb consultes de 'gràcies', i a mig matí algú descobria un tiquet esperant des de divendres. Ara: la cua es prioritza automàticament per SLA i tipus de client, cada agent rep el que millor encaixa amb la seva skill, el supervisor veu la càrrega real a la seva pantalla, i si una conversa s'acosta a l'SLA l'alerta salta abans — no després.",
      problem:
        "Un equip de suport gestionant milers de converses diàries per WhatsApp, Telegram i Instagram. Sense enrutament: cada agent agafava converses a l'atzar. Sense SLA visible: l'única manera de saber si una conversa s'endarreria era llegir-la. Sense visibilitat de càrrega: el supervisor no sabia qui estava saturat i qui lliure. Resultat: clients VIP esperant, tiquets antics oblidats i sensació constant d'anar a remolc.",
      built:
        "Workspace operatiu a mida amb tot el que l'equip necessitava en una sola pantalla — cua prioritzada, assignació automàtica, perfil del client al costat de cada conversa, vista de supervisor en temps real i mètriques que de debò accionen decisions. Sobre la seva infraestructura, sense tercers tocant dades de client.",
      bullets: [
        "Cua prioritzada per SLA, antiguitat i tipus de client",
        "Assignació automàtica per càrrega, skill i idioma",
        "Perfil del client al costat de la conversa: historial, comandes, NPS",
        "Plantilles de resposta versionades amb variables",
        "Vista de supervisor: càrrega per agent, risc SLA, distribució per canal",
        "Alertes abans de l'incompliment, no després",
        "Escalat a segona línia o a equips específics (billing, devolucions)",
        "Mètriques reals: CSAT, p50/p95, volum per canal, productivitat per agent",
      ],
      scope: "Discovery + disseny + build + handover. Manteniment mensual.",
    },
    {
      slug: "ops-socials-multi-plataforma",
      title: "Command center social connectat al sistema intern",
      story:
        "La marca utilitzava una eina de social media per publicar i un sistema intern separat per gestionar comandes. Cada vegada que arribava un DM o un comentari preguntant per una factura, un enviament o l'estat d'un compte, l'agent saltava entre tres pestanyes. Vam construir un command center sobre el seu núvol que llegeix directament del seu ERP: l'equip veu la comanda del client al costat del missatge i respon amb context amb un sol clic.",
      problem:
        "Una marca amb presència a Instagram, Facebook, Reddit i TikTok pagava dues eines — una per publicar i una altra per a suport — i tot i així els agents havien de saltar a un tercer sistema intern cada vegada que un DM preguntava alguna cosa concreta. L'off-the-shelf no s'integra amb el seu backend.",
      built:
        "Command center a mida sobre la seva infraestructura: programació amb adaptació nativa per canal, bústia única per a comentaris i DMs, lectura directa de l'ERP/CRM al costat de cada conversa (comandes, subscripcions, factures), biblioteca de continguts versionada.",
      scope: "Discovery + build incremental + roadmap continu.",
    },
    {
      slug: "telegram-broadcast",
      title: "Infraestructura de Telegram per a un negoci de comunitat",
      story:
        "Un canal amb milers de subscriptors havia crescut més ràpid que les seves eines. Vam muntar la infraestructura completa — bot amb lògica de negoci real, broadcast segmentat, cobraments i moderació automatitzada. El primer cap de setmana ocupat va escalar sense parpellejar.",
      problem:
        "Un negoci basat en canals i comunitat de Telegram que necessitava broadcast segmentat, gestió de subscripcions i eines de moderació que escalessin amb el creixement.",
      built:
        "Stack de bots i serveis de producció: broadcast amb segmentació, gestió de subscriptors, fluxos de monetització, eines per a admins, mètriques en temps real.",
      scope: "Build + suport continu.",
    },
    {
      slug: "ai-pipelines",
      title: "Pipelines de generació amb IA en GPU cloud",
      story:
        "El client generava imatge i vídeo a volum, però el seu flux local no escalava ni en velocitat ni en cost. Vam moure tota la generació a GPU cloud amb orquestració a mida sobre ComfyUI. Mateix equip, mateixa qualitat, diverses vegades més output al mateix cost.",
      problem:
        "Un flux de treball intensiu en generació visual (imatge i vídeo) que en local no escalava ni en velocitat ni en cost.",
      built:
        "Infraestructura a mida sobre RunPod / GPU cloud per a pipelines de ComfyUI: orquestració de jobs, gestió de models, control de cost per treball, integració amb sistemes de contingut aigües amunt.",
      scope: "Build + iteració sobre cost/qualitat.",
    },
  ],
  processSection: {
    eyebrow: "com treballem",
    title: "Poques reunions. Molt codi. Cap promesa que no puguem sostenir.",
    body: "Un procés pensat per començar petit, validar l'abast real, i lliurar programari que l'equip pugui operar.",
    steps: [
      {
        label: "01",
        title: "Discovery",
        body: "Trucada inicial, revisió de la teva operació actual, mapatge dels sistemes que ja tens i dels punts de fricció reals. Sortim amb una proposta d'abast escrita.",
      },
      {
        label: "02",
        title: "Scope",
        body: "Definim contracte, pressupost tancat, fites i criteris de lliurament. Sense sorpreses a mig projecte.",
      },
      {
        label: "03",
        title: "Build",
        body: "Iteracions curtes amb visibilitat contínua. Accés a l'entorn de staging des de la primera fita.",
      },
      {
        label: "04",
        title: "Handover",
        body: "Desplegament a producció, documentació, formació a l'equip. El sistema queda a la teva infraestructura, amb la teva propietat del codi.",
      },
      {
        label: "05",
        title: "Partnership",
        body: "Manteniment opcional, evolució contínua, segona fase. La majoria de clients es queden.",
      },
    ],
  },
  about: {
    eyebrow: "qui som",
    title: "Dos socis. Profunditat tècnica i focus comercial.",
    body: "Kairox és un studio petit i deliberat. Sense piràmide, sense comptes que passen per tres mans abans d'arribar a qui construeix. Parles amb qui dissenya el sistema i amb qui el construeix.",
    techRole: "Co-fundador · Enginyeria",
    techBio:
      "Lidera l'enginyeria i el lliurament. Python, APIs, bases de dades, infraestructura cloud (Oracle Cloud, RunPod) i pipelines de generació amb IA (ComfyUI). Hands-on amb Claude Code i automatització de fluxos de treball.",
    salesRole: "Co-fundadora · Operacions i client",
    salesBio:
      "Lidera la relació amb el client, l'scoping i les propostes. Punt de contacte únic des de la primera trucada fins al lliurament i més enllà. Vetlla perquè el que es promet sigui exactament el que es construeix.",
  },
  contact: {
    eyebrow: "contacte",
    title: "Explica'ns què vols construir.",
    body: "Responem en menys de 24 hores laborables. Si el teu projecte encaixa amb el que fem, agendem una trucada de discovery sense cost.",
    formName: "Nom",
    formCompany: "Empresa",
    formEmail: "Email",
    formMessage: "Explica'ns breument què tens al cap",
    formConsent:
      "He llegit i accepto la {privacy}. Dono el meu consentiment perquè Kairox tracti les meves dades per respondre a aquesta consulta.",
    formConsentRequired: "Has d'acceptar la política de privacitat.",
    formSubmit: "Enviar",
    formSubmitting: "Enviant…",
    formSuccess: "Missatge rebut. Et responem en menys de 24 hores.",
    formError: "Alguna cosa ha fallat. Escriu-nos directament a {email}.",
    emailLabel: "Escriu-nos directament",
    bookingLabel: "O agenda una trucada",
    privacyLink: "política de privacitat",
  },
  finalCta: {
    title: "Tens un sistema per construir?",
    body: "Explica'ns-ho. Si encaixa, et responem amb una proposta concreta i un calendari realista.",
    cta: "Parlem",
  },
  footer: {
    tagline: "El back office per a negocis que viuen en missatgeria.",
    nav: "Navegació",
    legal: "Legal",
    avisoLegal: "Avís legal",
    privacidad: "Privacitat",
    cookies: "Cookies",
    rights: "Tots els drets reservats.",
  },
  cookies: {
    body: "Utilitzem cookies estrictament necessàries per al funcionament del web. No utilitzem cookies d'analítica ni de publicitat.",
    accept: "Acceptar",
    reject: "Rebutjar",
    configure: "Configurar",
    privacyLink: "Més informació",
  },
  legal: {
    avisoLegal: {
      title: "Avís legal",
      body: `En compliment de l'article 10 de la Llei 34/2002, d'11 de juliol, de Serveis de la Societat de la Informació i Comerç Electrònic (LSSI-CE), s'informa de les següents dades identificatives del titular del lloc web:

· Raó social: Kairox Nexus Digital SL
· CIF: B25903097
· Domicili social: Revolt Negre 4, Cornellà de Llobregat 08940 (Barcelona)
· Email de contacte: kairoxnd@gmail.com
· Dades registrals: {{DATOS_REGISTRALES}}

L'accés i ús d'aquest lloc web atribueix la condició d'usuari i implica l'acceptació dels termes recollits en el present Avís Legal.

Tots els continguts del lloc (textos, imatges, codi, disseny gràfic) són titularitat del titular o disposen de la corresponent autorització per a la seva utilització. Queda prohibida la reproducció total o parcial sense autorització expressa.

Per a qualsevol qüestió relacionada amb aquest Avís Legal, pots contactar a kairoxnd@gmail.com.`,
    },
    privacidad: {
      title: "Política de privacitat",
      body: `Aquesta Política de Privacitat descriu com Kairox Nexus Digital SL ("Kairox") tracta les dades personals recollides a través d'aquest lloc web, conforme al Reglament (UE) 2016/679 (RGPD) i la Llei Orgànica 3/2018 de Protecció de Dades Personals (LOPDGDD).

1. RESPONSABLE DEL TRACTAMENT
· Raó social: Kairox Nexus Digital SL
· CIF: B25903097
· Domicili: Revolt Negre 4, Cornellà de Llobregat 08940 (Barcelona)
· Email: kairoxnd@gmail.com

2. DADES QUE RECOLLIM
A través del formulari de contacte recollim: nom, empresa (opcional), email i contingut del missatge. No recollim dades de categories especials.

3. FINALITAT
Tractem les teves dades exclusivament per respondre a la consulta plantejada i, si escau, per gestionar la relació comercial que pogués derivar-se'n.

4. LEGITIMACIÓ
La base legal és el consentiment exprés que prestes en enviar el formulari, marcant la casella corresponent.

5. CONSERVACIÓ
Conservem les dades durant el temps necessari per atendre la teva consulta i, si escau, durant el termini legalment exigible si s'estableix relació contractual.

6. DESTINATARIS
No cedim dades a tercers excepte per obligació legal. Utilitzem proveïdors de hosting i email transaccional dins de l'Espai Econòmic Europeu o amb garanties adequades.

7. DRETS
Pots exercir els drets d'accés, rectificació, supressió, oposició, limitació i portabilitat escrivint a kairoxnd@gmail.com. Tens dret a presentar una reclamació davant l'Agència Espanyola de Protecció de Dades (www.aepd.es).

8. SEGURETAT
Apliquem mesures tècniques i organitzatives raonables per protegir les teves dades.`,
    },
    cookies: {
      title: "Política de cookies",
      body: `Aquesta Política de Cookies explica què són les cookies i com les utilitzem en aquest lloc web.

QUÈ SÓN LES COOKIES?
Les cookies són petits arxius de text que els llocs web col·loquen al teu dispositiu per emmagatzemar informació sobre la teva visita.

COOKIES QUE UTILITZEM
Aquest lloc web utilitza únicament cookies estrictament necessàries per al seu funcionament (per exemple, per recordar la teva preferència d'idioma o la teva elecció sobre el banner de cookies). Aquestes cookies estan exemptes del deure de consentiment conforme a l'article 22.2 de la LSSI.

NO utilitzem cookies de:
· Analítica de tercers (Google Analytics, etc.)
· Publicitat o tracking
· Xarxes socials

GESTIÓ DE COOKIES
Pots configurar el teu navegador per bloquejar o eliminar cookies en qualsevol moment.

Per a qualsevol consulta sobre cookies, escriu-nos a kairoxnd@gmail.com.`,
    },
  },
  routes: {
    services: "serveis",
    work: "feina",
    about: "nosaltres",
    contact: "contacte",
    legal: "legal",
    avisoLegal: "avis-legal",
    privacidad: "privacitat",
    cookies: "cookies",
  },
};
