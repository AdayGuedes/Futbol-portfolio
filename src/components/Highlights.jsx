import { profile } from '../data/profile.js'
import { useLanguage } from '../i18n/LanguageContext.jsx'
import { isPlaceholder } from '../utils/format.js'
import Reveal from './Reveal.jsx'
import SectionHeading from './SectionHeading.jsx'
import VideoCard from './VideoCard.jsx'
import './Highlights.css'

export default function Highlights() {
  const { t } = useLanguage()
  const { main, categories } = profile.videos
  const visibleCategories = categories.filter((category) => category.items?.length > 0)

  const { shirtNumber, highlightsShirtNumber } = profile
  const showShirtNote =
    highlightsShirtNumber &&
    shirtNumber &&
    !isPlaceholder(highlightsShirtNumber) &&
    !isPlaceholder(shirtNumber) &&
    highlightsShirtNumber !== shirtNumber
  const shirtNote = t.highlights.shirtNote
    .replace('{highlights}', highlightsShirtNumber)
    .replace('{current}', shirtNumber)

  return (
    <section id="highlights" className="section section--light highlights">
      <div className="container">
        <SectionHeading eyebrow={t.highlights.eyebrow} title={t.highlights.title} intro={t.highlights.intro} />

        {showShirtNote && (
          <Reveal as="p" className="highlights__shirt-note">
            {shirtNote}
          </Reveal>
        )}

        <Reveal as="article" className="highlights__main" aria-label={t.highlights.main}>
          <VideoCard video={main} large />
        </Reveal>

        {visibleCategories.map((category) => (
          <div key={category.id} className="highlights__category">
            <Reveal as="h3" className="highlights__category-title">
              {t.highlights.categories[category.id] ?? category.id}
            </Reveal>
            <div className="video-grid">
              {category.items.map((video, i) => (
                <Reveal as="article" key={`${video.url}-${i}`} delay={i * 80}>
                  <VideoCard video={video} />
                </Reveal>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
