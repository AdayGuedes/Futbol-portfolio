import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { profile } from './src/data/profile.js'
import { localize } from './src/utils/format.js'
import { DEFAULT_LANG } from './src/i18n/translations.js'

const escapeHtml = (value) =>
  String(value).replace(/&/g, '&amp;').replace(/"/g, '&quot;').replace(/</g, '&lt;').replace(/>/g, '&gt;')

/** Convierte una ruta en URL absoluta si seo.siteUrl ya es una URL real (WhatsApp lo necesita). */
function toAbsolute(path) {
  const base = profile.seo.siteUrl
  if (!/^https?:\/\//.test(base)) return path
  try {
    return new URL(path, base).href
  } catch {
    return path
  }
}

/** Rellena los {{SEO_*}} de index.html con los datos de src/data/profile.js. */
function profileMeta() {
  const values = {
    SEO_TITLE: localize(profile.seo.title, DEFAULT_LANG),
    SEO_DESCRIPTION: localize(profile.seo.description, DEFAULT_LANG),
    SEO_IMAGE: toAbsolute(profile.seo.image),
    SEO_URL: toAbsolute('/'),
  }
  return {
    name: 'profile-meta',
    transformIndexHtml: {
      order: 'pre',
      handler: (html) => html.replace(/\{\{(SEO_\w+)\}\}/g, (match, key) => (key in values ? escapeHtml(values[key]) : match)),
    },
  }
}

export default defineConfig({
  plugins: [react(), profileMeta()],
})
