import { profile } from '../data/profile.js'
import { useLanguage } from '../i18n/LanguageContext.jsx'
import { isPlaceholder, localize } from '../utils/format.js'
import { PlayIcon } from './Icons.jsx'
import './Hero.css'

export default function Hero({ onPlay }) {
  const { t, lang } = useLanguage()
  const { club } = profile
  const subtitle = `${profile.hometown} · ${club.name} (${club.league}, ${localize(club.country, lang)})`
  const showNumber = profile.shirtNumber && !isPlaceholder(profile.shirtNumber)

  return (
    <section id="top" className="hero" style={{ '--hero-image': `url("${profile.heroImage}")` }}>
      <div className="hero__bg" aria-hidden="true" />

      <div className="container hero__inner">
        <button type="button" className="hero__play" onClick={onPlay} aria-label={t.hero.play}>
          <PlayIcon />
        </button>

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

          <p className="hero__meta">{subtitle}</p>

          <div className="hero__actions">
            <button type="button" className="btn btn--primary" onClick={onPlay}>
              <PlayIcon />
              {t.hero.watch}
            </button>
            <a href="#contact" className="btn btn--secondary">
              {t.hero.contact}
            </a>
          </div>
        </div>
      </div>

      <a href="#profile" className="hero__scroll">
        {t.hero.scroll}
        <span aria-hidden="true" />
      </a>
    </section>
  )
}
