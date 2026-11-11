import { profile } from '../data/profile.js'
import { useLanguage } from '../i18n/LanguageContext.jsx'
import { localize } from '../utils/format.js'
import './Footer.css'

export default function Footer() {
  const { t, lang } = useLanguage()

  return (
    <footer className="footer">
      <div className="container footer__inner">
        <p className="footer__name">
          {profile.firstName} {profile.lastName}
        </p>
        <p className="footer__info">
          <span>{localize(profile.position.primary, lang)}</span>
          <span aria-hidden="true">·</span>
          <span>
            {profile.hometown} · {t.footer.country}
          </span>
        </p>
        <p className="footer__year">© {new Date().getFullYear()}</p>
      </div>
    </footer>
  )
}
