import Reveal from './Reveal.jsx'

export default function SectionHeading({ eyebrow, title, intro, center = false }) {
  return (
    <Reveal className={`section-heading${center ? ' section-heading--center' : ''}`}>
      <p className="eyebrow">{eyebrow}</p>
      <h2 className="section-title">{title}</h2>
      {intro && <p className="section-intro">{intro}</p>}
    </Reveal>
  )
}
