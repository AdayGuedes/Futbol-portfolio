import { Fragment } from 'react'
import { useLanguage } from '../i18n/LanguageContext.jsx'
import { LANGUAGES } from '../i18n/translations.js'
import './LanguageSwitcher.css'

export default function LanguageSwitcher() {
  const { lang, setLang, t } = useLanguage()

  return (
    <div className="lang" role="group" aria-label={t.header.language}>
      {LANGUAGES.map((option, i) => (
        <Fragment key={option.code}>
          {i > 0 && (
            <span className="lang__sep" aria-hidden="true">
              |
            </span>
          )}
          <button
            type="button"
            className={`lang__btn${lang === option.code ? ' is-active' : ''}`}
            aria-pressed={lang === option.code}
            lang={option.code}
            title={option.name}
            onClick={() => setLang(option.code)}
          >
            <span className="lang__flag" aria-hidden="true">
              {option.flag}
            </span>
            {option.label}
          </button>
        </Fragment>
      ))}
    </div>
  )
}
