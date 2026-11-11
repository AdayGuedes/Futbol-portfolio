import { useLanguage } from '../i18n/LanguageContext.jsx'
import { isPlaceholder, localize } from '../utils/format.js'
import { ClockIcon } from './Icons.jsx'
import YouTubeEmbed from './YouTubeEmbed.jsx'
import './VideoCard.css'

/** Título + duración de un vídeo. */
export function VideoMeta({ title, duration, large = false }) {
  const { t } = useLanguage()
  return (
    <div className={`video-meta${large ? ' video-meta--large' : ''}`}>
      <h3 className={`video-meta__title${isPlaceholder(title) ? ' is-placeholder' : ''}`}>{title}</h3>
      {duration && (
        <span className={`video-meta__duration${isPlaceholder(duration) ? ' is-placeholder' : ''}`}>
          <ClockIcon />
          <span className="visually-hidden">{t.video.duration}: </span>
          {duration}
        </span>
      )}
    </div>
  )
}

/** Vídeo + título + duración. */
export default function VideoCard({ video, large = false }) {
  const { lang } = useLanguage()
  const title = localize(video.title, lang)
  return (
    <>
      <YouTubeEmbed url={video.url} title={title} />
      <VideoMeta title={title} duration={localize(video.duration, lang)} large={large} />
    </>
  )
}
