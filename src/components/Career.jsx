import { profile } from '../data/profile.js'
import { useLanguage } from '../i18n/LanguageContext.jsx'
import { isPlaceholder, localize } from '../utils/format.js'
import Reveal from './Reveal.jsx'
import SectionHeading from './SectionHeading.jsx'
import './Career.css'

function Field({ as: Tag, className, value }) {
  if (!value) return null
  return <Tag className={`${className}${isPlaceholder(value) ? ' is-placeholder' : ''}`}>{value}</Tag>
}

export default function Career() {
  const { t, lang } = useLanguage()

  return (
    <section id="career" className="section section--light">
      <div className="container">
        <SectionHeading eyebrow={t.career.eyebrow} title={t.career.title} />

        <ol className="timeline">
          {profile.career.map((item, i) => (
            <Reveal
              as="li"
              key={`${item.period}-${i}`}
              className={`timeline__item${item.current ? ' is-current' : ''}`}
              delay={i * 100}
            >
              <span className="timeline__dot" aria-hidden="true" />
              <div className="timeline__card">
                <div className="timeline__top">
                  <Field as="p" className="timeline__period" value={localize(item.period, lang)} />
                  {item.current && <span className="timeline__badge">{t.career.current}</span>}
                </div>
                <Field as="h3" className="timeline__team" value={localize(item.team, lang)} />
                <Field as="p" className="timeline__location" value={localize(item.location, lang)} />
                <Field as="p" className="timeline__note" value={localize(item.note, lang)} />
              </div>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  )
}
