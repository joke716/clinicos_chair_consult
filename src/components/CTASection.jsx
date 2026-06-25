import { motion } from 'framer-motion'
import { useTranslation } from 'react-i18next'
import { FiArrowRight, FiCalendar } from 'react-icons/fi'
import { useScrollReveal } from '../hooks/useScrollReveal'

export default function CTASection() {
  const { t } = useTranslation()
  const [ref, visible] = useScrollReveal()

  return (
    <section className="cta" id="contact">
      <div className="wrap">
        <motion.div ref={ref} initial={{ opacity: 0, y: 30 }} animate={visible ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.65 }}>
          <h2>{t('cta.h2')}</h2>
          <p>{t('cta.desc')}</p>
          <div className="actions" style={{ justifyContent: 'center' }}>
            <button className="btn gold">
              <FiArrowRight size={15} />
              {t('cta.btnFree')}
            </button>
            <button className="btn ghost">
              <FiCalendar size={14} />
              {t('cta.btnDemo')}
            </button>
          </div>
          <small>{t('cta.small')}</small>
        </motion.div>
      </div>
    </section>
  )
}
