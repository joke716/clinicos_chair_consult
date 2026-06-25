import { motion } from 'framer-motion'
import { useTranslation } from 'react-i18next'
import { FiCheck, FiTrendingDown, FiUsers, FiDollarSign, FiTarget } from 'react-icons/fi'
import { useScrollReveal } from '../hooks/useScrollReveal'
import img3 from '../assets/img3.png'

const stagger = { hidden: {}, visible: { transition: { staggerChildren: 0.1 } } }
const item = { hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { duration: 0.5 } } }

export default function ConsultSection() {
  const { t } = useTranslation()
  const [ref, visible] = useScrollReveal()
  const [ref2, visible2] = useScrollReveal()
  const [ref3, visible3] = useScrollReveal()

  const needs = ['need1','need2','need3','need4','need5','need6']

  const values = [
    { icon: <FiTrendingDown size={24} />, title: t('consult.v1Title'), desc: t('consult.v1Desc') },
    { icon: <FiUsers size={24} />, title: t('consult.v2Title'), desc: t('consult.v2Desc') },
    { icon: <FiDollarSign size={24} />, title: t('consult.v3Title'), desc: t('consult.v3Desc') },
    { icon: <FiTarget size={24} />, title: t('consult.v4Title'), desc: t('consult.v4Desc') },
  ]

  return (
    <section className="ivory" id="consult">
      <div className="wrap">
        <div className="sectionHead">
          <h2>{t('consult.sectionTitle')}</h2>
          <p>{t('consult.sectionDesc')}</p>
          <div className="goldline" />
        </div>

        <motion.div ref={ref} className="productBlock" variants={stagger} initial="hidden" animate={visible ? 'visible' : 'hidden'}>
          <motion.div className="imagePanel" variants={item}>
            <img src={img3} alt={t('consult.sectionTitle')} />
          </motion.div>
          <motion.div className="productText" variants={item}>
            <span className="tag">{t('consult.tag')}</span>
            <h3>{t('consult.h3_1')}<br />{t('consult.h3_2')}</h3>
            <p>{t('consult.desc')}</p>
            <div className="checks">
              {['check1','check2','check3','check4'].map((k) => (
                <div className="check" key={k}>
                  <span className="checkIcon"><FiCheck size={12} /></span>
                  {t(`consult.${k}`)}
                </div>
              ))}
            </div>
            <div className="quote">{t('consult.quote')}</div>
          </motion.div>
        </motion.div>

        <motion.div ref={ref2} className="needBlock" initial={{ opacity: 0, y: 20 }} animate={visible2 ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.5 }}>
          <h4 className="needTitle">{t('consult.needTitle')}</h4>
          <ul className="needList">
            {needs.map((k) => (
              <li key={k}>
                <span className="needDot" />
                {t(`consult.${k}`)}
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
