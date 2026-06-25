import { motion } from 'framer-motion'
import { useTranslation } from 'react-i18next'
import { FiCheck, FiMonitor, FiThumbsUp, FiStar, FiAward } from 'react-icons/fi'
import { useScrollReveal } from '../hooks/useScrollReveal'
import img4 from '../assets/img4.png'

const stagger = { hidden: {}, visible: { transition: { staggerChildren: 0.1 } } }
const item = { hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { duration: 0.5 } } }

export default function ChairSection() {
  const { t } = useTranslation()
  const [ref, visible] = useScrollReveal()
  const [ref2, visible2] = useScrollReveal()
  const [ref3, visible3] = useScrollReveal()

  const needs = ['need1','need2','need3','need4','need5','need6']

  const values = [
    { icon: <FiMonitor size={24} />, title: t('chair.v1Title'), desc: t('chair.v1Desc') },
    { icon: <FiThumbsUp size={24} />, title: t('chair.v2Title'), desc: t('chair.v2Desc') },
    { icon: <FiStar size={24} />, title: t('chair.v3Title'), desc: t('chair.v3Desc') },
    { icon: <FiAward size={24} />, title: t('chair.v4Title'), desc: t('chair.v4Desc') },
  ]

  return (
    <section className="ivory" id="chair">
      <div className="wrap">
        <div className="sectionHead">
          <h2>{t('chair.sectionTitle')}</h2>
          <p>{t('chair.sectionDesc')}</p>
          <div className="goldline" />
        </div>

        <motion.div ref={ref} className="productBlock reverse" variants={stagger} initial="hidden" animate={visible ? 'visible' : 'hidden'}>
          <motion.div className="productText" variants={item}>
            <span className="tag">{t('chair.tag')}</span>
            <h3>{t('chair.h3_1')}<br />{t('chair.h3_2')}</h3>
            <p>{t('chair.desc')}</p>
            <div className="checks">
              {['check1','check2','check3','check4'].map((k) => (
                <div className="check" key={k}>
                  <span className="checkIcon"><FiCheck size={12} /></span>
                  {t('chair.' + k)}
                </div>
              ))}
            </div>
            <div className="quote">{t('chair.quote')}</div>
          </motion.div>
          <motion.div className="imagePanel" variants={item}>
            <img src={img4} alt={t('chair.sectionTitle')} />
          </motion.div>
        </motion.div>

        <motion.div ref={ref2} className="needBlock" initial={{ opacity: 0, y: 20 }} animate={visible2 ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.5 }}>
          <h4 className="needTitle">{t('chair.needTitle')}</h4>
          <ul className="needList">
            {needs.map((k) => (
              <li key={k}>
                <span className="needDot" />
                {t(`chair.${k}`)}
              </li>
            ))}
          </ul>
        </motion.div>

        <motion.div ref={ref3} className="valueGrid" style={{ marginTop: 16 }} variants={stagger} initial="hidden" animate={visible3 ? 'visible' : 'hidden'}>
          {values.map((v, i) => (
            <motion.div className="valueCard" key={i} variants={item}>
              <div className="cardIcon">{v.icon}</div>
              <b>{v.title}</b>
              <p>{v.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
