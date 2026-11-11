import { useEffect, useRef } from 'react'
import { useLanguage } from '../i18n/LanguageContext.jsx'
import { localize } from '../utils/format.js'
import { CloseIcon } from './Icons.jsx'
import YouTubeEmbed from './YouTubeEmbed.jsx'
import './VideoModal.css'

export default function VideoModal({ open, onClose, video }) {
  const { t, lang } = useLanguage()
  const closeRef = useRef(null)
  const modalRef = useRef(null)

  useEffect(() => {
    if (!open) return undefined
    const previouslyFocused = document.activeElement
    const previousOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'

    // Todo lo que hay detrás del modal queda inerte: el foco no puede salir del diálogo.
    const siblings = Array.from(modalRef.current?.parentElement?.children ?? []).filter(
      (el) => el !== modalRef.current,
    )
    siblings.forEach((el) => {
      el.inert = true
    })
    closeRef.current?.focus()

    const onKey = (e) => {
      if (e.key === 'Escape') onClose()
    }
    window.addEventListener('keydown', onKey)

    return () => {
      window.removeEventListener('keydown', onKey)
      siblings.forEach((el) => {
        el.inert = false
      })
      document.body.style.overflow = previousOverflow
      if (previouslyFocused instanceof HTMLElement) previouslyFocused.focus()
    }
  }, [open, onClose])

  if (!open) return null

  const title = localize(video.title, lang)

  return (
    <div ref={modalRef} className="modal" role="dialog" aria-modal="true" aria-label={title} onClick={onClose}>
      <div className="modal__dialog" onClick={(e) => e.stopPropagation()}>
        <button ref={closeRef} type="button" className="modal__close" onClick={onClose} aria-label={t.video.close}>
          <CloseIcon />
        </button>
        <YouTubeEmbed url={video.url} title={title} autoplay />
      </div>
    </div>
  )
}
