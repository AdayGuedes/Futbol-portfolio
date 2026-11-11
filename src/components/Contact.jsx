import { profile } from '../data/profile.js'
import { useLanguage } from '../i18n/LanguageContext.jsx'
import { isPlaceholder } from '../utils/format.js'
import { ChatIcon, DownloadIcon, MailIcon } from './Icons.jsx'
import Reveal from './Reveal.jsx'
import SectionHeading from './SectionHeading.jsx'
import './Contact.css'

/** Enlace que, mientras el dato sea un placeholder, se ve pero no navega. */
function ContactLink({ href, className, children, ...rest }) {
  if (!href) {
    return (
      <a className={className} aria-disabled="true" role="link" tabIndex={0} onClick={(e) => e.preventDefault()}>
        {children}
      </a>
    )
  }
  return (
    <a href={href} className={className} {...rest}>
      {children}
    </a>
  )
}

const EMAIL_PATTERN = /^[^\s@?&,]+@[^\s@?&,]+\.[^\s@?&,]+$/

export default function Contact() {
  const { t } = useLanguage()
  const { email, whatsapp, cvUrl } = profile.contact

  const emailHref =
    isPlaceholder(email) || !EMAIL_PATTERN.test(email)
      ? null
      : `mailto:${email}?subject=${encodeURIComponent(t.contact.emailSubject)}`
  const whatsappMessage = t.contact.whatsappMessage.replace('{name}', profile.firstName)

  const whatsappDigits = whatsapp.replace(/\D/g, '')
  const whatsappHref =
    isPlaceholder(whatsapp) || !whatsappDigits
      ? null
      : `https://wa.me/${whatsappDigits}?text=${encodeURIComponent(whatsappMessage)}`

  return (
    <section id="contact" className="section section--dark contact">
      <div className="container">
        <SectionHeading eyebrow={t.contact.eyebrow} title={t.contact.title} intro={t.contact.intro} center />

        <Reveal className="contact__actions">
          <ContactLink href={emailHref} className="btn btn--primary contact__btn">
            <MailIcon />
            {t.contact.email}
          </ContactLink>
          <ContactLink
            href={whatsappHref}
            className="btn btn--secondary contact__btn"
            target="_blank"
            rel="noopener noreferrer"
          >
            <ChatIcon />
            {t.contact.whatsapp}
          </ContactLink>
          <ContactLink href={cvUrl} className="btn btn--ghost contact__btn" download>
            <DownloadIcon />
            {t.contact.cv}
          </ContactLink>
        </Reveal>

        <Reveal as="p" className={`contact__email${isPlaceholder(email) ? ' is-placeholder' : ''}`} delay={100}>
          {email}
        </Reveal>
      </div>
    </section>
  )
}
