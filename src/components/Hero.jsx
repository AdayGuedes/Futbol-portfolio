import { useState } from 'react'
import { profile } from '../data/profile.js'
import { useLanguage } from '../i18n/LanguageContext.jsx'
import { isPlaceholder, localize } from '../utils/format.js'
import { PlayIcon } from './Icons.jsx'
import './Hero.css'

export default function Hero({ onPlay }) {
  const { t, lang } = useLanguage()
  const [photoFailed, setPhotoFailed] = useState(false)
  const { club, heroImage, heroImageSize } = profile
  const fullName = `${profile.firstName} ${profile.lastName}`
  const subtitle = `${profile.hometown} · ${club.name} (${club.league}, ${localize(club.country, lang)})`
  const showNumber = profile.shirtNumber && !isPlaceholder(profile.shirtNumber)
  const showPhoto = Boolean(heroImage) && !photoFailed

  return (
    <section id="top" className={`hero${showPhoto ? ' hero--photo' : ''}`}>
      {showPhoto && (
        <div className="hero__media">
          {/* Foto vertical entera, sin recortes: de la cabeza a las botas */}
          <img
            className="hero__photo"
            src={heroImage}
            alt={t.hero.photoAlt.replace('{name}', fullName)}
            width={heroImageSize?.width}
            height={heroImageSize?.height}
            fetchPriority="high"
            decoding="async"
            onError={() => setPhotoFailed(true)}
          />
        </div>
      )}

      <div className="hero__body">
        <div className="hero__content">
          <p className="hero__position">
            {showNumber && (
              <span className="hero__number">
                <span className="visually-hidden">{t.hero.number} </span>#{profile.shirtNumber}
              </span>
            )}
            {localize(profile.position.primary, lang)}
          </p>

          <h1 className="hero__name">
            <span>{profile.firstName}</span> <span>{profile.lastName}</span>
          </h1>

          <button type="button" className="hero__watch" onClick={onPlay}>
            <span className="hero__watch-icon" aria-hidden="true">
              <PlayIcon />
            </span>
            {t.hero.watch}
          </button>

          <p className="hero__meta">{subtitle}</p>

          <div className="hero__actions">
            <a href="#contact" className="btn btn--secondary">
              {t.hero.contact}
            </a>
          </div>
        </div>

        <a href="#profile" className="hero__scroll">
          {t.hero.scroll}
          <span aria-hidden="true" />
        </a>
      </div>
    </section>
  )
}
