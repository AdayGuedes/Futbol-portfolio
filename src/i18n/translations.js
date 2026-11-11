/**
 * Textos de la interfaz en español e inglés.
 * Los DATOS del jugador (nombre, club, vídeos, trayectoria…) están en src/data/profile.js.
 */

export const DEFAULT_LANG = 'es'

export const LANGUAGES = [
  { code: 'es', flag: '🇪🇸', label: 'ES', name: 'Español' },
  { code: 'en', flag: '🇺🇸', label: 'EN', name: 'English' },
]

export const translations = {
  es: {
    header: {
      home: 'Ir al inicio',
      navLabel: 'Secciones',
      menu: 'Abrir menú',
      closeMenu: 'Cerrar menú',
      language: 'Idioma',
    },
    nav: {
      profile: 'Ficha',
      highlights: 'Highlights',
      athletic: 'Perfil atlético',
      career: 'Trayectoria',
      contact: 'Contacto',
    },
    hero: {
      watch: 'Ver highlights',
      contact: 'Contacto',
      play: 'Reproducir vídeo de highlights',
      scroll: 'Desliza',
      number: 'Dorsal',
    },
    stats: {
      eyebrow: 'Ficha rápida',
      title: 'El jugador en 10 segundos',
      height: 'Altura',
      weight: 'Peso',
      age: 'Edad',
      years: 'años',
      born: 'Nacido el',
      nationality: 'Nacionalidad',
      foot: 'Pierna dominante',
      side: 'Banda',
      primaryPosition: 'Posición principal',
      secondaryPosition: 'Posición secundaria',
      club: 'Club actual',
      availability: 'Disponibilidad',
    },
    highlights: {
      eyebrow: 'Highlights y vídeos',
      title: 'Cómo juego',
      intro: 'Vídeo principal y cortes por fase del juego.',
      main: 'Vídeo principal',
      // {highlights} = profile.highlightsShirtNumber · {current} = profile.shirtNumber
      shirtNote: 'Dorsal {highlights} en la mayoría de highlights · Dorsal {current} en Union (actual)',
      categories: {
        defense: 'Defensa 1vs1',
        attack: 'Centros y ataque',
        buildup: 'Salida de balón',
        fullMatches: 'Partidos completos',
      },
    },
    athletic: {
      eyebrow: 'Perfil atlético',
      title: 'Preparado para 90 minutos',
      intro: 'Entreno en el gimnasio con un objetivo concreto en cada ejercicio.',
      focus: {
        power: 'Potencia',
        unilateral: 'Fuerza unilateral',
        prevention: 'Prevención',
        speed: 'Velocidad',
      },
    },
    career: {
      eyebrow: 'Trayectoria',
      title: 'Mi recorrido',
      current: 'Actualidad',
    },
    contact: {
      eyebrow: 'Contacto',
      title: '¿Hablamos?',
      intro: 'Entrenadores, ojeadores y clubes en España y EE. UU.: escríbeme directamente.',
      email: 'Enviar email',
      whatsapp: 'Escribir por WhatsApp',
      cv: 'Descargar CV deportivo (PDF)',
      // {name} se sustituye por profile.firstName
      whatsappMessage: 'Hola {name}, he visto tu perfil y me gustaría hablar contigo.',
      emailSubject: 'Contacto desde tu perfil de jugador',
    },
    footer: {
      // Se muestra como "<profile.hometown> · <country>"
      country: 'EE. UU.',
    },
    video: {
      play: 'Reproducir',
      comingSoon: 'Vídeo próximamente',
      duration: 'Duración',
      close: 'Cerrar vídeo',
    },
  },

  en: {
    header: {
      home: 'Back to top',
      navLabel: 'Sections',
      menu: 'Open menu',
      closeMenu: 'Close menu',
      language: 'Language',
    },
    nav: {
      profile: 'Profile',
      highlights: 'Highlights',
      athletic: 'Athletic profile',
      career: 'Career',
      contact: 'Contact',
    },
    hero: {
      watch: 'Watch highlights',
      contact: 'Contact',
      play: 'Play highlights video',
      scroll: 'Scroll',
      number: 'Number',
    },
    stats: {
      eyebrow: 'Player profile',
      title: 'The player in 10 seconds',
      height: 'Height',
      weight: 'Weight',
      age: 'Age',
      years: 'years old',
      born: 'Born',
      nationality: 'Nationality',
      foot: 'Preferred foot',
      side: 'Side',
      primaryPosition: 'Primary position',
      secondaryPosition: 'Secondary position',
      club: 'Current club',
      availability: 'Availability',
    },
    highlights: {
      eyebrow: 'Highlights & videos',
      title: 'How I play',
      intro: 'Main reel plus clips broken down by phase of play.',
      main: 'Main reel',
      shirtNote: 'No. {highlights} in most highlights · No. {current} at Union (current)',
      categories: {
        defense: '1v1 defending',
        attack: 'Crossing & attacking',
        buildup: 'Build-up play',
        fullMatches: 'Full matches',
      },
    },
    athletic: {
      eyebrow: 'Athletic profile',
      title: 'Built for 90 minutes',
      intro: 'Gym work with a clear purpose behind every exercise.',
      focus: {
        power: 'Power',
        unilateral: 'Single-leg strength',
        prevention: 'Injury prevention',
        speed: 'Speed',
      },
    },
    career: {
      eyebrow: 'Career',
      title: 'My path',
      current: 'Current',
    },
    contact: {
      eyebrow: 'Contact',
      title: "Let's talk",
      intro: 'Coaches, scouts and clubs in Spain and the USA: reach out to me directly.',
      email: 'Send email',
      whatsapp: 'Message on WhatsApp',
      cv: 'Download player CV (PDF)',
      whatsappMessage: "Hi {name}, I've seen your player profile and would like to talk.",
      emailSubject: 'Contact from your player profile',
    },
    footer: {
      country: 'USA',
    },
    video: {
      play: 'Play',
      comingSoon: 'Video coming soon',
      duration: 'Length',
      close: 'Close video',
    },
  },
}
