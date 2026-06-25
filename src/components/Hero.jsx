import { motion } from 'framer-motion'
import { useTranslation } from 'react-i18next'
import { FiCheck, FiArrowRight, FiMessageSquare } from 'react-icons/fi'
import img1 from '../assets/img1.png'
import img2 from '../assets/img2.png'

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 28 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.65, delay, ease: 'easeOut' },
})

export default function Hero() {
  const { t } = useTranslation()
  const scrollTo = (id) => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })

  return (
    <header className="hero" id="top">
      <div className="wrap heroIn">
        <div>
          <motion.div className="eyebrow" {...fadeUp(0.1)}>
            {t('hero.eyebrow')}
          </motion.div>
          <motion.h1 {...fadeUp(0.2)}>
            {t('hero.h1_1')}<br />
            <strong>{t('hero.h1_2')}</strong>{t('hero.h1_3')}<br />
            {t('hero.h1_4')}
          </motion.h1>
          <motion.p {...fadeUp(0.3)}>{t('hero.desc')}</motion.p>
          <motion.div className="actions" {...fadeUp(0.4)}>
            <button className="btn gold" onClick={() => scrollTo('contact')}>
              <FiArrowRight size={15} />
              {t('hero.btnFree')}
            </button>
            <button className="btn ghost" onClick={() => scrollTo('consult')}>
              <FiMessageSquare size={14} />
              {t('hero.btnExplore')}
            </button>
          </motion.div>
          <motion.ul className="pointList" {...fadeUp(0.5)}>
            {['point1', 'point2', 'point3'].map((k) => (
              <li key={k}>
                <span className="checkIcon"><FiCheck size={11} /></span>
                {t(`hero.${k}`)}
              </li>
            ))}
          </motion.ul>
        </div>

        <motion.div
          className="heroVisual"
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.3, ease: 'easeOut' }}
        >
          <div className="visualCard">
            <img src={img1} alt={t('hero.visual1Title')} />
            <div className="visualLabel">
              <b>{t('hero.visual1Title')}</b>
              <span>{t('hero.visual1Sub')}</span>
            </div>
          </div>
          <div className="visualCard">
            <img src={img2} alt={t('hero.visual2Title')} />
            <div className="visualLabel">
              <b>{t('hero.visual2Title')}</b>
              <span>{t('hero.visual2Sub')}</span>
            </div>
          </div>
        </motion.div>
      </div>
    </header>
  )
}
