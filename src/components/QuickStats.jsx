import { profile } from '../data/profile.js'
import { useLanguage } from '../i18n/LanguageContext.jsx'
import { formatDate, getAge, isPlaceholder, localize, parseBirthDate } from '../utils/format.js'
import Reveal from './Reveal.jsx'
import SectionHeading from './SectionHeading.jsx'
import './QuickStats.css'

export default function QuickStats() {
  const { t, lang } = useLanguage()
  const L = (value) => localize(value, lang)
  const { physical, position, club } = profile

  const birthDate = parseBirthDate(physical.birthDate)
  const age = birthDate
    ? { value: `${getAge(birthDate)} ${t.stats.years}`, sub: `${t.stats.born} ${formatDate(birthDate, lang)}` }
    : { value: physical.birthDate }

  const items = [
    { key: 'height', label: t.stats.height, value: L(physical.height) },
    { key: 'weight', label: t.stats.weight, value: L(physical.weight) },
    { key: 'age', label: t.stats.age, ...age },
    { key: 'foot', label: t.stats.foot, value: L(physical.foot) },
    { key: 'primary', label: t.stats.primaryPosition, value: L(position.primary), accent: true },
    { key: 'side', label: t.stats.side, value: L(profile.side) },
    { key: 'secondary', label: t.stats.secondaryPosition, value: L(position.secondary) },
    { key: 'nationality', label: t.stats.nationality, value: L(profile.nationality) },
    { key: 'club', label: t.stats.club, value: club.name, sub: `${club.university} · ${club.league}` },
    { key: 'availability', label: t.stats.availability, value: L(profile.availability), wide: true },
  ].filter((item) => String(item.value ?? '').trim() !== '') // un dato vacío no genera tarjeta

  // Si queda un número impar de tarjetas normales, la última ocupa toda la fila (sin huecos).
  const regular = items.filter((item) => !item.wide)
  if (regular.length % 2 === 1) regular[regular.length - 1].wide = true

  return (
    <section id="profile" className="section section--light">
      <div className="container">
        <SectionHeading eyebrow={t.stats.eyebrow} title={t.stats.title} />

        <dl className="stats">
          {items.map((item, i) => (
            <Reveal
              key={item.key}
              className={`stat${item.wide ? ' stat--wide' : ''}${item.accent ? ' stat--accent' : ''}`}
              delay={i * 50}
            >
              <dt className="stat__label">{item.label}</dt>
              <dd className={`stat__value${isPlaceholder(item.value) ? ' is-placeholder' : ''}`}>{item.value}</dd>
              {item.sub && <dd className="stat__sub">{item.sub}</dd>}
            </Reveal>
          ))}
        </dl>
      </div>
    </section>
  )
}
