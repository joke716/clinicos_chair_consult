import { motion } from 'framer-motion'
import { useTranslation } from 'react-i18next'
import { FiEdit3, FiAlertCircle, FiSearch, FiSend, FiArrowRight, FiCheck } from 'react-icons/fi'
import { useScrollReveal } from '../hooks/useScrollReveal'

const stagger = { hidden: {}, visible: { transition: { staggerChildren: 0.12 } } }
const item = { hidden: { opacity: 0, y: 24 }, visible: { opacity: 1, y: 0, transition: { duration: 0.5 } } }
const metricItem = { hidden: { opacity: 0, scale: 0.92 }, visible: { opacity: 1, scale: 1, transition: { duration: 0.45 } } }

const STEP_META = [
  { icon: <FiEdit3 size={22} />, color: '#1e6a55', bg: '#f0faf6', tagKey: 's1Tag', titleKey: 's1Title', descKey: 's1Desc', pts: ['s1p1','s1p2','s1p3'] },
  { icon: <FiAlertCircle size={22} />, color: '#c5a05b', bg: '#fdf8ee', tagKey: 's2Tag', titleKey: 's2Title', descKey: 's2Desc', pts: ['s2p1','s2p2','s2p3'] },
  { icon: <FiSearch size={22} />, color: '#3b5bdb', bg: '#f0f3ff', tagKey: 's3Tag', titleKey: 's3Title', descKey: 's3Desc', pts: ['s3p1','s3p2','s3p3'] },
  { icon: <FiSend size={22} />, color: '#1e6a55', bg: '#f0faf6', tagKey: 's4Tag', titleKey: 's4Title', descKey: 's4Desc', pts: ['s4p1','s4p2','s4p3'] },
]

const METRIC_KEYS = [
  { value: '92%', labelKey: 'm1Label', subKey: 'm1Sub' },
  { value: '34%↑', labelKey: 'm2Label', subKey: 'm2Sub' },
  { value: '2.8x', labelKey: 'm3Label', subKey: 'm3Sub' },
  { value: '6h/wk', labelKey: 'm4Label', subKey: 'm4Sub' },
]

export default function ProcessSection() {
  const { t } = useTranslation()
  const [ref, visible] = useScrollReveal()
  const [ref2, visible2] = useScrollReveal()

  return (
    <section className="paper">
      <div className="wrap">
        <div className="sectionHead">
          <h2>{t('process.sectionTitle')}</h2>
          <p>{t('process.sectionDesc')}</p>
        </div>

        <motion.div ref={ref} className="processGrid" variants={stagger} initial="hidden" animate={visible ? 'visible' : 'hidden'}>
          {STEP_META.map((s, i) => (
            <div key={i} className="processRow">
              <motion.div className="stepCard" variants={item}>
                <div className="stepTop">
                  <div className="stepIconWrap" style={{ background: s.bg, color: s.color }}>{s.icon}</div>
                  <span className="stepTag" style={{ background: s.bg, color: s.color }}>{t('process.' + s.tagKey)}</span>
                  <div className="stepNum">{i + 1}</div>
                </div>
                <b className="stepTitle">{t('process.' + s.titleKey)}</b>
                <p className="stepDesc">{t('process.' + s.descKey)}</p>
                <ul className="stepPoints">
                  {s.pts.map((pk) => (
                    <li key={pk}>
                      <FiCheck size={11} style={{ color: s.color, flexShrink: 0, marginTop: 2 }} />
                      {t('process.' + pk)}
                    </li>
                  ))}
                </ul>
              </motion.div>
              {i < STEP_META.length - 1 && (
                <div className="stepArrow"><FiArrowRight size={18} /></div>
              )}
            </div>
          ))}
        </motion.div>

        <motion.div ref={ref2} className="metricsBar" variants={stagger} initial="hidden" animate={visible2 ? 'visible' : 'hidden'}>
          {METRIC_KEYS.map((m, i) => (
            <motion.div className="metricItem" key={i} variants={metricItem}>
              <div className="metricValue">{m.value}</div>
              <div className="metricLabel">{t('process.' + m.labelKey)}</div>
              <div className="metricSub">{t('process.' + m.subKey)}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
