const ID_PATTERN = /^[\w-]{11}$/

/** Extrae el ID de 11 caracteres de una URL de YouTube (watch, youtu.be, shorts, embed). */
export function getYouTubeId(url) {
  if (typeof url !== 'string' || !url) return null
  try {
    const parsed = new URL(url)
    const host = parsed.hostname.replace(/^www\.|^m\./, '')
    let id = null
    if (host === 'youtu.be') {
      id = parsed.pathname.slice(1)
    } else if (host === 'youtube.com' || host === 'youtube-nocookie.com') {
      id = parsed.searchParams.get('v')
      if (!id) {
        const match = parsed.pathname.match(/^\/(?:shorts|embed|live)\/([^/?#]+)/)
        id = match ? match[1] : null
      }
    }
    return id && ID_PATTERN.test(id) ? id : null
  } catch {
    return null
  }
}

export function getEmbedUrl(id, { autoplay = true } = {}) {
  const params = new URLSearchParams({
    autoplay: autoplay ? '1' : '0',
    rel: '0',
    playsinline: '1',
    modestbranding: '1',
  })
  return `https://www.youtube-nocookie.com/embed/${id}?${params}`
}

export function getThumbnailUrl(id) {
  return `https://i.ytimg.com/vi/${id}/hqdefault.jpg`
}
