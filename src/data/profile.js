/**
 * ============================================================
 *  DATOS DEL JUGADOR — edita SOLO este archivo.
 * ============================================================
 *
 *  · Los textos que cambian según el idioma van como { es: '...', en: '...' }.
 *    Los que son iguales en los dos idiomas van como texto normal: 'NAIA'.
 *  · Todo lo que empieza por "EDITAR" / "EDIT" es un placeholder.
 *    La web lo muestra atenuado para que sepas qué te falta por rellenar.
 *  · Vídeos: pega la URL normal de YouTube. Valen estos formatos:
 *      https://www.youtube.com/watch?v=XXXXXXXXXXX
 *      https://youtu.be/XXXXXXXXXXX
 *      https://www.youtube.com/shorts/XXXXXXXXXXX
 *    Mientras la URL no sea válida, se muestra "Vídeo próximamente".
 *  · Imágenes y PDF van en la carpeta /public (ver README.md).
 */

export const profile = {
  // ---------- Identidad ----------
  firstName: 'Aday',
  lastName: 'Muñoz Guedes',
  initials: 'AM',
  shirtNumber: '5', // Dorsal actual (Union). Se muestra en la portada.
  // Dorsal que llevo en la mayoría de vídeos de highlights. Si es distinto de shirtNumber,
  // la sección "Highlights" muestra un aviso con los dos números.
  highlightsShirtNumber: '2',
  hometown: 'Gran Canaria',

  // Foto principal de la portada (public/images/hero.jpg).
  // Si el archivo no existe, se ve un fondo negro volcánico con degradado.
  heroImage: '/images/hero.jpg',

  // ---------- Posición ----------
  position: {
    primary: { es: 'Lateral / Fullback', en: 'Fullback' },
    secondary: { es: 'Extremo · Mediocentro', en: 'Winger · Central Midfielder' },
  },

  // Banda en la que juego de lateral
  side: { es: 'Derecho e izquierdo', en: 'Right and left (RB / LB)' },

  // ---------- Club actual ----------
  club: {
    name: 'Union Bulldogs',
    university: 'Union Commonwealth University',
    league: 'NAIA',
    country: { es: 'EE. UU.', en: 'USA' },
  },

  // ---------- Datos físicos ----------
  physical: {
    height: { es: '1,70 m', en: '1.70 m · 5\'7"' },
    weight: { es: '60 kg', en: '60 kg · 132 lb' },
    // Formato AAAA-MM-DD. La edad se calcula sola.
    birthDate: '2005-05-06',
    foot: { es: 'Derecha', en: 'Right' },
  },

  nationality: { es: 'Española', en: 'Spanish' },

  // Vacío a propósito: mientras esté vacío, la tarjeta "Disponibilidad" no se muestra.
  availability: { es: '', en: '' },

  // ---------- Contacto ----------
  contact: {
    email: 'adaymg2.official@gmail.com',
    // Solo números, con prefijo de país y sin "+"
    whatsapp: '34699562847',
    // Archivo en public/cv-deportivo.pdf (reemplaza el de ejemplo por el tuyo)
    cvUrl: '/cv-deportivo.pdf',
  },

  // ---------- Vídeos ----------
  videos: {
    // Vídeo principal: se abre con el botón play de la portada y aparece grande en "Highlights".
    main: {
      url: 'https://www.youtube.com/watch?v=EDITAR',
      title: { es: 'EDITAR: Highlights temporada 2025-26', en: 'EDIT: 2025-26 season highlights' },
      duration: 'EDITAR: m:ss',
    },

    // Vídeos secundarios por categoría. Son opcionales:
    // si una categoría tiene `items: []`, no se muestra.
    // Los nombres de categoría están en src/i18n/translations.js (highlights.categories).
    categories: [
      {
        id: 'defense', // Defensa 1vs1
        items: [
          {
            url: 'https://www.youtube.com/watch?v=EDITAR',
            title: { es: 'EDITAR: Duelos defensivos 1vs1', en: 'EDIT: 1v1 defending duels' },
            duration: 'EDITAR: m:ss',
          },
        ],
      },
      {
        id: 'attack', // Centros y ataque
        items: [
          {
            url: 'https://www.youtube.com/watch?v=EDITAR',
            title: { es: 'EDITAR: Centros y llegadas al área', en: 'EDIT: Crosses and attacking runs' },
            duration: 'EDITAR: m:ss',
          },
        ],
      },
      {
        id: 'buildup', // Salida de balón
        items: [
          {
            url: 'https://www.youtube.com/watch?v=EDITAR',
            title: { es: 'EDITAR: Salida de balón desde atrás', en: 'EDIT: Playing out from the back' },
            duration: 'EDITAR: m:ss',
          },
        ],
      },
      {
        id: 'fullMatches', // Partidos completos
        items: [
          {
            url: 'https://www.youtube.com/watch?v=EDITAR',
            title: { es: 'EDITAR: Union Bulldogs vs Rival (fecha)', en: 'EDIT: Union Bulldogs vs Opponent (date)' },
            duration: 'EDITAR: 90:00',
          },
        ],
      },
    ],
  },

  // ---------- Perfil atlético / gym ----------
  // Vídeos cortos (Shorts). `focus` es una de: 'power', 'unilateral', 'prevention', 'speed'
  // (los nombres están en translations.js). Ajusta el texto al ejercicio real de cada vídeo.
  athletic: [
    {
      focus: 'power',
      url: 'https://www.youtube.com/shorts/EDITAR',
      text: {
        es: 'Saltos con carga: potencia de tren inferior para ganar duelos y arrancar en carrera.',
        en: 'Loaded jumps: lower-body power to win duels and explode into sprints.',
      },
    },
    {
      focus: 'unilateral',
      url: 'https://www.youtube.com/shorts/EDITAR',
      text: {
        es: 'Trabajo a una pierna: estabilidad y fuerza para los cambios de dirección en banda.',
        en: 'Single-leg work: stability and strength for sharp changes of direction on the flank.',
      },
    },
    {
      focus: 'prevention',
      url: 'https://www.youtube.com/shorts/EDITAR',
      text: {
        es: 'Isquios y core: prevención de lesiones para estar disponible toda la temporada.',
        en: 'Hamstrings and core: injury prevention to stay available all season.',
      },
    },
    {
      focus: 'speed',
      url: 'https://www.youtube.com/shorts/EDITAR',
      text: {
        es: 'Aceleraciones y sprint: velocidad para subir la banda y volver a defender.',
        en: 'Acceleration and sprinting: pace to get forward and recover defensively.',
      },
    },
  ],

  // ---------- Trayectoria ----------
  // De más antiguo a más reciente. `current: true` marca el club actual.
  career: [
    {
      period: '2017 – 2021',
      team: 'C.D. Arguineguín',
      location: { es: 'Gran Canaria, España', en: 'Gran Canaria, Spain' },
      note: { es: 'Infantil – Cadete', en: 'Infantil – Cadete (youth)' },
    },
    {
      period: '2021 – 2023',
      team: 'Maspalomas',
      location: { es: 'Gran Canaria, España', en: 'Gran Canaria, Spain' },
      note: {
        es: 'Juvenil División de Honor · Juvenil Interinsular',
        en: 'U19 División de Honor · U19 Interinsular',
      },
    },
    {
      period: '2023 – 2026',
      team: 'York University',
      location: { es: 'York, Nebraska (EE. UU.)', en: 'York, Nebraska (USA)' },
      note: { es: 'Fútbol universitario', en: 'College soccer' },
    },
    {
      period: '2026 – 2027',
      team: 'Union Commonwealth University',
      location: { es: 'Barbourville, Kentucky (EE. UU.)', en: 'Barbourville, Kentucky (USA)' },
      note: { es: 'Union Bulldogs · NAIA', en: 'Union Bulldogs · NAIA' },
      current: true,
    },
  ],

  // ---------- SEO / vista previa al compartir (WhatsApp, redes) ----------
  // Se inyecta en index.html al arrancar/compilar (reinicia `npm run dev` si lo cambias).
  seo: {
    // URL pública final de la web. WhatsApp necesita la URL completa para mostrar la imagen.
    siteUrl: 'https://futbol-portfolio.munozguedesaday.workers.dev',
    // La versión `es` es la que ve WhatsApp al compartir (idioma por defecto).
    // Al cambiar de idioma en la web, la pestaña del navegador usa la versión `en`.
    title: {
      es: 'Aday Muñoz Guedes — Lateral / Fullback',
      en: 'Aday Muñoz Guedes — Fullback',
    },
    description: {
      es: 'Lateral de Gran Canaria en Union Bulldogs (NAIA, EE. UU.). Highlights, ficha y contacto.',
      en: 'Fullback from Gran Canaria playing for the Union Bulldogs (NAIA, USA). Highlights, profile and contact.',
    },
    // Imagen de 1200×630 px en public/images/og-image.jpg
    image: '/images/og-image.jpg',
  },
}
