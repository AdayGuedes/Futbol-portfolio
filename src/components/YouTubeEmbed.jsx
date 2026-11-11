import { useState } from 'react'
import { useLanguage } from '../i18n/LanguageContext.jsx'
import { getEmbedUrl, getThumbnailUrl, getYouTubeId } from '../utils/youtube.js'
import { PlayIcon } from './Icons.jsx'
import './YouTubeEmbed.css'

/**
 * Vídeo de YouTube "ligero": muestra la miniatura y solo carga el reproductor al pulsar.
 * Así la página va rápida en móvil aunque haya muchos vídeos.
 */
export default function YouTubeEmbed({ url, title, vertical = false, autoplay = false }) {
  const { t } = useLanguage()
  const [active, setActive] = useState(autoplay)
  const id = getYouTubeId(url)
  const className = `yt${vertical ? ' yt--vertical' : ''}`

  if (!id) {
    return (
      <div className={`${className} yt--empty`}>
        <span className="yt__soon">
          <PlayIcon />
          {t.video.comingSoon}
        </span>
      </div>
    )
  }

  if (active) {
    return (
      <div className={className}>
        <iframe
          src={getEmbedUrl(id, { autoplay: true })}
          title={title}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        />
      </div>
    )
  }

  return (
    <button type="button" className={className} onClick={() => setActive(true)} aria-label={`${t.video.play}: ${title}`}>
      <img src={getThumbnailUrl(id)} alt="" loading="lazy" decoding="async" />
      <span className="yt__play" aria-hidden="true">
        <PlayIcon />
      </span>
    </button>
  )
}
