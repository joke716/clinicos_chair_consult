import { motion } from 'framer-motion'
import { useTranslation } from 'react-i18next'
import { FiTrendingUp, FiCpu, FiSettings, FiEye } from 'react-icons/fi'
import { useScrollReveal } from '../hooks/useScrollReveal'

const stagger = { hidden: {}, visible: { transition: { staggerChildren: 0.1 } } }
const item = { hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { duration: 0.5 } } }

export default function CompareSection() {
  const { t } = useTranslation()
  const [ref, visible] = useScrollReveal()

  const cards = [
    { icon: <FiTrendingUp size={24} />, title: t('compare.c1Title'), desc: t('compare.c1Desc') },
    { icon: <FiCpu size={24} />, title: t('compare.c2Title'), desc: t('compare.c2Desc') },
    { icon: <FiSettings size={24} />, title: t('compare.c3Title'), desc: t('compare.c3Desc') },
    { icon: <FiEye size={24} />, title: t('compare.c4Title'), desc: t('compare.c4Desc') },
  ]

  return (
    <section className="navySec">
      <div className="wrap">
        <div className="sectionHead">
          <h2>{t('compare.sectionTitle')}</h2>
          <p>{t('compare.sectionDesc')}</p>
        </div>
        <motion.div ref={ref} className="valueGrid" variants={stagger} initial="hidden" animate={visible ? 'visible' : 'hidden'}>
          {cards.map((c, i) => (
            <motion.div className="valueCard dark" key={i} variants={item}>
              <div className="cardIcon">{c.icon}</div>
              <b>{c.title}</b>
              <p>{c.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
