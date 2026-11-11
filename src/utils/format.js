/** Devuelve el texto en el idioma activo si el valor es { es, en }; si no, el valor tal cual. */
export function localize(value, lang) {
  if (value && typeof value === 'object' && !Array.isArray(value)) {
    return value[lang] ?? value.es ?? ''
  }
  return value ?? ''
}

/** true si el valor es un placeholder pendiente de rellenar ("EDITAR…" / "EDIT…"). */
export function isPlaceholder(value) {
  return typeof value === 'string' && /^EDIT/.test(value.trim())
}

const ISO_DATE = /^(\d{4})-(\d{2})-(\d{2})$/

/** Convierte 'AAAA-MM-DD' en Date (hora local) o null si no es válida. */
export function parseBirthDate(value) {
  const match = typeof value === 'string' ? value.trim().match(ISO_DATE) : null
  if (!match) return null
  const [, y, m, d] = match.map(Number)
  const date = new Date(y, m - 1, d)
  return date.getMonth() === m - 1 ? date : null
}

export function getAge(birthDate, today = new Date()) {
  let age = today.getFullYear() - birthDate.getFullYear()
  const beforeBirthday =
    today.getMonth() < birthDate.getMonth() ||
    (today.getMonth() === birthDate.getMonth() && today.getDate() < birthDate.getDate())
  if (beforeBirthday) age -= 1
  return age
}

export function formatDate(date, lang) {
  return new Intl.DateTimeFormat(lang === 'es' ? 'es-ES' : 'en-US', { dateStyle: 'long' }).format(date)
}
