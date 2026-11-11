import { profile } from '../data/profile.js'
import { useLanguage } from '../i18n/LanguageContext.jsx'
import { isPlaceholder, localize } from '../utils/format.js'
import Reveal from './Reveal.jsx'
import SectionHeading from './SectionHeading.jsx'
import YouTubeEmbed from './YouTubeEmbed.jsx'
import './Athletic.css'

export default function Athletic() {
  const { t, lang } = useLanguage()

  return (
    <section id="athletic" className="section section--dark athletic">
      <div className="container">
        <SectionHeading eyebrow={t.athletic.eyebrow} title={t.athletic.title} intro={t.athletic.intro} />

        <div className="athletic__grid">
          {profile.athletic.map((clip, i) => {
            const focus = t.athletic.focus[clip.focus] ?? clip.focus
            const text = localize(clip.text, lang)
            return (
              <Reveal as="article" key={`${clip.focus}-${i}`} className="athletic__card" delay={i * 80}>
                <YouTubeEmbed url={clip.url} title={`${focus} — ${text}`} vertical />
                <h3 className="athletic__focus">{focus}</h3>
                <p className={`athletic__text${isPlaceholder(text) ? ' is-placeholder' : ''}`}>{text}</p>
              </Reveal>
            )
          })}
        </div>
      </div>
    </section>
  )
}
