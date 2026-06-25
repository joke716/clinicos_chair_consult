import { motion } from 'framer-motion'
import { useTranslation } from 'react-i18next'
import { FiCheck, FiStar } from 'react-icons/fi'
import { useScrollReveal } from '../hooks/useScrollReveal'

const stagger = { hidden: {}, visible: { transition: { staggerChildren: 0.09 } } }
const item = { hidden: { opacity: 0, y: 16 }, visible: { opacity: 1, y: 0, transition: { duration: 0.45 } } }

const packageRows = [
  { chair: '3', monitor: '29만 원', consult: '50만 원', sum: '79만 원', regular: '69만 원', special: '59만 원' },
  { chair: '4', monitor: '32만 원', consult: '50만 원', sum: '82만 원', regular: '72만 원', special: '62만 원' },
  { chair: '5', monitor: '35만 원', consult: '50만 원', sum: '85만 원', regular: '75만 원', special: '65만 원' },
  { chair: '6', monitor: '38만 원', consult: '50만 원', sum: '88만 원', regular: '78만 원', special: '68만 원' },
  { chair: '7', monitor: '41만 원', consult: '50만 원', sum: '91만 원', regular: '81만 원', special: '71만 원' },
  { chair: '8', monitor: '44만 원', consult: '50만 원', sum: '94만 원', regular: '84만 원', special: '74만 원' },
]

const clinicRows = [
  ['강남 치과 A', '5', '월 65만 원', '12개월', '상담 전환율 +31%'],
  ['분당 치과 B', '4', '월 62만 원', '12개월', '설명시간 -40%'],
  ['홍대 치과 C', '3', '월 59만 원', '12개월', '재방문율 +28%'],
  ['수원 치과 D', '6', '월 68만 원', '12개월', '전환율 +35%'],
  ['대구 치과 E', '8', '월 74만 원', '12개월', '리뷰 4.9→5.0'],
]

export default function PricingSection() {
  const { t } = useTranslation()
  const [ref1, v1] = useScrollReveal()
  const [ref2, v2] = useScrollReveal()
  const [ref3, v3] = useScrollReveal()
  const [ref4, v4] = useScrollReveal()

  const singleProducts = [
    {
      tag: t('pricing.p1Tag'), title: t('pricing.p1Title'), price: t('pricing.p1Price'),
      priceNote: t('pricing.p1PriceNote'), desc: t('pricing.p1Desc'),
      points: [t('pricing.p1pt1'), t('pricing.p1pt2'), t('pricing.p1pt3')], edge: false,
    },
    {
      tag: t('pricing.p2Tag'), title: t('pricing.p2Title'), price: t('pricing.p2Price'),
      priceNote: t('pricing.p2PriceNote'), desc: t('pricing.p2Desc'),
      points: [t('pricing.p2pt1'), t('pricing.p2pt2'), t('pricing.p2pt3')], edge: false,
    },
    {
      tag: t('pricing.p3Tag'), title: t('pricing.p3Title'), price: t('pricing.p3Price'),
      priceNote: t('pricing.p3PriceNote'), desc: t('pricing.p3Desc'),
      points: [t('pricing.p3pt1'), t('pricing.p3pt2'), t('pricing.p3pt3')], edge: true,
    },
  ]

  const contractRows = [
    { period: t('pricing.c1period'), benefit: t('pricing.c1benefit'), cost: t('pricing.c1cost'), highlight: true },
    { period: t('pricing.c2period'), benefit: t('pricing.c2benefit'), cost: t('pricing.c2cost'), highlight: false },
    { period: t('pricing.c3period'), benefit: t('pricing.c3benefit'), cost: t('pricing.c3cost'), highlight: false },
  ]

  const exampleRows = [
    { label: t('pricing.e1'), value: '월 35만 원', highlight: false },
    { label: t('pricing.e2'), value: '월 50만 원', highlight: false },
    { label: t('pricing.e3'), value: '월 85만 원', highlight: false },
    { label: t('pricing.e4'), value: '월 75만 원', highlight: false },
    { label: t('pricing.e5'), value: '월 65만 원', highlight: true },
  ]

  const chairLabel = t('pricing.th_chair')

  return (
    <section className="ivory" id="pricing">
      <div className="wrap">
        <div className="sectionHead">
          <h2>{t('pricing.sectionTitle')}</h2>
          <p>{t('pricing.sectionDesc')}</p>
          <div className="goldline" />
        </div>

        <motion.div ref={ref1} className="pricingCards" variants={stagger} initial="hidden" animate={v1 ? 'visible' : 'hidden'}>
          {singleProducts.map((p, i) => (
            <motion.div className={'pricingCard' + (p.edge ? ' pricingCardEdge' : '')} key={i} variants={item}>
              {p.edge && (
                <div className="pricingCardBadge">
                  <FiStar size={11} /> {t('pricing.limitedBadge')}
                </div>
              )}
              <span className="tag">{p.tag}</span>
              <b className="pricingCardTitle">{p.title}</b>
              <div className="pricingCardPrice">{p.price}</div>
              <div className="pricingCardPriceNote">{p.priceNote}</div>
              <p className="pricingCardDesc">{p.desc}</p>
              <ul className="pricingCardPoints">
                {p.points.map((pt, j) => (
                  <li key={j}><FiCheck size={11} />{pt}</li>
                ))}
              </ul>
            </motion.div>
          ))}
        </motion.div>

        <motion.div ref={ref2} className="pricing" style={{ marginTop: 36 }} initial={{ opacity: 0, y: 20 }} animate={v2 ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.55 }}>
          <div className="pricingHead">
            <div>
              <h3>{t('pricing.packageTitle')}</h3>
              <p>{t('pricing.packageDesc')}</p>
            </div>
            <span className="badge">{t('pricing.packageBadge')}</span>
          </div>
          <div className="tableWrap tableWrapPkg">
            <table>
              <thead>
                <tr>
                  <th>{t('pricing.th_chair')}</th>
                  <th>{t('pricing.th_monitor')}</th>
                  <th>{t('pricing.th_consult')}</th>
                  <th>{t('pricing.th_sum')}</th>
                  <th>{t('pricing.th_regular')}</th>
                  <th className="thHighlight">{t('pricing.th_special')}</th>
                </tr>
              </thead>
              <tbody>
                {packageRows.map((r, i) => (
                  <tr key={i}>
                    <td data-label={t('pricing.th_chair')} style={{ fontWeight: 700, color: 'var(--navy-930)' }}>{r.chair}{chairLabel}</td>
                    <td data-label={t('pricing.th_monitor')}>{r.monitor}</td>
                    <td data-label={t('pricing.th_consult')}>{r.consult}</td>
                    <td data-label={t('pricing.th_sum')} style={{ color: 'var(--muted)', textDecoration: 'line-through' }}>{r.sum}</td>
                    <td data-label={t('pricing.th_regular')}>{r.regular}</td>
                    <td data-label={t('pricing.th_special')} className="tdHighlight">{r.special}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </motion.div>

        <motion.div ref={ref3} className="pricingTwoCol" variants={stagger} initial="hidden" animate={v3 ? 'visible' : 'hidden'}>
          <motion.div className="pricing" variants={item}>
            <div className="pricingHead">
              <div>
                <h3>{t('pricing.contractTitle')}</h3>
                <p>{t('pricing.contractDesc')}</p>
              </div>
            </div>
            <div className="tableWrap">
              <table>
                <thead>
                  <tr>
                    <th>{t('pricing.th_period')}</th>
                    <th>{t('pricing.th_benefit')}</th>
                    <th>{t('pricing.th_cost')}</th>
                  </tr>
                </thead>
                <tbody>
                  {contractRows.map((r, i) => (
                    <tr key={i} className={r.highlight ? 'trHighlight' : ''}>
                      <td style={{ fontWeight: 700, color: r.highlight ? 'var(--green)' : 'var(--navy-930)' }}>{r.period}</td>
                      <td>{r.benefit}</td>
                      <td style={{ fontWeight: 700, color: r.highlight ? 'var(--green)' : undefined }}>{r.cost}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </motion.div>

          <motion.div className="pricing" variants={item}>
            <div className="pricingHead">
              <div>
                <h3>{t('pricing.exampleTitle')}</h3>
                <p>{t('pricing.exampleDesc')}</p>
              </div>
            </div>
            <div className="tableWrap">
              <table>
                <thead>
                  <tr>
                    <th style={{ textAlign: 'left' }}>{t('pricing.th_item')}</th>
                    <th>{t('pricing.th_amount')}</th>
                  </tr>
                </thead>
                <tbody>
                  {exampleRows.map((r, i) => (
                    <tr key={i} className={r.highlight ? 'trHighlight' : ''}>
                      <td style={{ textAlign: 'left', fontWeight: r.highlight ? 700 : 400, color: r.highlight ? 'var(--green)' : 'var(--navy-930)' }}>{r.label}</td>
                      <td style={{ fontWeight: r.highlight ? 900 : 400, color: r.highlight ? 'var(--green)' : undefined, fontSize: r.highlight ? '17px' : undefined }}>{r.value}</td>
                    </tr>
                  ))}
                  <tr>
                    <td style={{ textAlign: 'left', color: 'var(--muted)', fontSize: '13px' }}>{t('pricing.e6')}</td>
                    <td style={{ color: 'var(--muted)', fontSize: '13px', textDecoration: 'line-through' }}>300만 원</td>
                  </tr>
                  <tr className="trHighlight">
                    <td style={{ textAlign: 'left', fontWeight: 700, color: 'var(--green)' }}>{t('pricing.e7')}</td>
                    <td style={{ fontWeight: 900, color: 'var(--green)', fontSize: '18px' }}>0원</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </motion.div>
        </motion.div>

        <motion.div ref={ref4} className="pricing" style={{ marginTop: 28 }} initial={{ opacity: 0, y: 20 }} animate={v4 ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.55 }}>
          <div className="pricingHead">
            <div>
              <h3>{t('pricing.clinicTitle')}</h3>
              <p>{t('pricing.clinicDesc')}</p>
            </div>
          </div>
          <div className="tableWrap tableWrapClinic">
            <table>
              <thead>
                <tr>
                  <th>{t('pricing.th_clinic')}</th>
                  <th>{t('pricing.th_chairs')}</th>
                  <th>{t('pricing.th_fee')}</th>
                  <th>{t('pricing.th_contract')}</th>
                  <th>{t('pricing.th_result')}</th>
                </tr>
              </thead>
              <tbody>
                {clinicRows.map((row, i) => {
                  const labels = [t('pricing.th_clinic'), t('pricing.th_chairs'), t('pricing.th_fee'), t('pricing.th_contract'), t('pricing.th_result')]
                  return (
                    <tr key={i}>
                      {row.map((cell, j) => <td key={j} data-label={labels[j]}>{cell}</td>)}
                    </tr>
                  )
                })}
              </tbody>
            </table>
          </div>
        </motion.div>

        <motion.div className="notes" style={{ marginTop: 22 }} variants={stagger} initial="hidden" animate={v4 ? 'visible' : 'hidden'}>
          <motion.div className="note" variants={item}>
            <b>{t('pricing.note1Title')}</b>
            <p>{t('pricing.note1Desc')}</p>
          </motion.div>
          <motion.div className="note" variants={item}>
            <b>{t('pricing.note2Title')}</b>
            <p>{t('pricing.note2Desc')}</p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
