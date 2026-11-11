# Aday Muñoz Guedes — Perfil de jugador

Web de presentación (solo frontend) hecha con Vite + React. Bilingüe ES / EN.

## Arrancar

```bash
npm install
npm run dev        # http://localhost:5173
npm run build      # genera /dist para subir a Netlify, Vercel, GitHub Pages…
npm run preview    # prueba la versión compilada
```

## Dónde editar

| Qué | Dónde |
| --- | --- |
| Todos tus datos (ficha, contacto, vídeos, trayectoria, SEO) | `src/data/profile.js` |
| Textos de la interfaz en español e inglés | `src/i18n/translations.js` |
| Colores, tipografías, espaciados | `src/styles/variables.css` |
| Foto de portada | `public/images/hero.jpg` |
| Imagen al compartir por WhatsApp (1200×630) | `public/images/og-image.jpg` |
| CV deportivo | `public/cv-deportivo.pdf` (sustituye el de ejemplo) |

Todo lo que pone `EDITAR` / `EDIT` en `profile.js` es un hueco pendiente: la web lo muestra atenuado.
Los botones de email y WhatsApp no funcionan hasta que pongas tus datos reales.

Si cambias `seo` en `profile.js`, reinicia `npm run dev` (los meta tags se generan al arrancar).
