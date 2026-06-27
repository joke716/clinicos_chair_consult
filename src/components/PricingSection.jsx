import { motion } from 'framer-motion'
import { useTranslation } from 'react-i18next'
import { FiCheck, FiStar } from 'react-icons/fi'
import { useScrollReveal } from '../hooks/useScrollReveal'

const stagger = { hidden: {}, visible: { transition: { staggerChildren: 0.09 } } }
const item = { hidden: { opacity: 0, y: 16 }, visible: { opacity: 1, y: 0, transition: { duration: 0.45 } } }

const PKG_ROWS = {
  ko: [
    { chair: '3', monitor: '35만 원', consult: '60만 원', sum: '95만 원', regular: '85만 원', special: '75만 원' },
    { chair: '4', monitor: '40만 원', consult: '60만 원', sum: '100만 원', regular: '90만 원', special: '80만 원' },
    { chair: '5', monitor: '45만 원', consult: '60만 원', sum: '105만 원', regular: '95만 원', special: '85만 원' },
    { chair: '6', monitor: '50만 원', consult: '60만 원', sum: '110만 원', regular: '100만 원', special: '90만 원' },
    { chair: '7', monitor: '55만 원', consult: '60만 원', sum: '115만 원', regular: '105만 원', special: '95만 원' },
    { chair: '8', monitor: '60만 원', consult: '60만 원', sum: '120만 원', regular: '110만 원', special: '100만 원' },
  ],
  en: [
    { chair: '3', monitor: '$220', consult: '$375', sum: '$595', regular: '$520', special: '$450' },
    { chair: '4', monitor: '$240', consult: '$375', sum: '$615', regular: '$540', special: '$465' },
    { chair: '5', monitor: '$265', consult: '$375', sum: '$640', regular: '$565', special: '$490' },
    { chair: '6', monitor: '$285', consult: '$375', sum: '$660', regular: '$585', special: '$510' },
    { chair: '7', monitor: '$310', consult: '$375', sum: '$685', regular: '$605', special: '$530' },
    { chair: '8', monitor: '$330', consult: '$375', sum: '$705', regular: '$625', special: '$555' },
  ],
  ja: [
    { chair: '3', monitor: '¥32,000', consult: '¥55,000', sum: '¥87,000', regular: '¥76,000', special: '¥65,000' },
    { chair: '4', monitor: '¥35,000', consult: '¥55,000', sum: '¥90,000', regular: '¥79,000', special: '¥68,000' },
    { chair: '5', monitor: '¥39,000', consult: '¥55,000', sum: '¥94,000', regular: '¥83,000', special: '¥72,000' },
    { chair: '6', monitor: '¥42,000', consult: '¥55,000', sum: '¥97,000', regular: '¥86,000', special: '¥75,000' },
    { chair: '7', monitor: '¥46,000', consult: '¥55,000', sum: '¥101,000', regular: '¥89,000', special: '¥78,000' },
    { chair: '8', monitor: '¥49,000', consult: '¥55,000', sum: '¥104,000', regular: '¥93,000', special: '¥82,000' },
  ],
}

const CLINIC_ROWS = {
  ko: [
    ['강남 치과 A', '5', '월 85만 원', '12개월', '상담 전환율 +31%'],
    ['분당 치과 B', '4', '월 80만 원', '12개월', '설명시간 -40%'],
    ['홍대 치과 C', '3', '월 75만 원', '12개월', '재방문율 +28%'],
    ['수원 치과 D', '6', '월 90만 원', '12개월', '전환율 +35%'],
    ['대구 치과 E', '8', '월 100만 원', '12개월', '리뷰 4.9→5.0'],
  ],
  en: [
    ['Gangnam Clinic A', '5', '$490/mo', '12 months', 'Consult conversion +31%'],
    ['Bundang Clinic B', '4', '$465/mo', '12 months', 'Explain time -40%'],
    ['Hongdae Clinic C', '3', '$450/mo', '12 months', 'Return visits +28%'],
    ['Suwon Clinic D', '6', '$510/mo', '12 months', 'Conversion rate +35%'],
    ['Daegu Clinic E', '8', '$555/mo', '12 months', 'Rating 4.9→5.0'],
  ],
  ja: [
    ['江南クリニックA', '5', '月¥72,000', '12ヶ月', '相談転換率 +31%'],
    ['盆唐クリニックB', '4', '月¥68,000', '12ヶ月', '説明時間 -40%'],
    ['弘大クリニックC', '3', '月¥65,000', '12ヶ月', '再来院率 +28%'],
    ['水原クリニックD', '6', '月¥75,000', '12ヶ月', '転換率 +35%'],
    ['大邱クリニックE', '8', '月¥82,000', '12ヶ月', '評価 4.9→5.0'],
  ],
}

const EXAMPLE_VALUES = {
  ko: { e1: '월 45만 원', e2: '월 60만 원', e3: '월 105만 원', e4: '월 95만 원', e5: '월 85만 원', e6: '300만 원', e7: '0원' },
  en: { e1: '$265/mo', e2: '$375/mo', e3: '$640/mo', e4: '$565/mo', e5: '$490/mo', e6: '$2,250', e7: '$0' },
  ja: { e1: '月¥39,000', e2: '月¥55,000', e3: '月¥94,000', e4: '月¥83,000', e5: '月¥72,000', e6: '¥330,000', e7: '¥0' },
}

export default function PricingSection() {
  const { t, i18n } = useTranslation()
  const lang = (i18n.language || 'ko').slice(0, 2)
  const pkgRows = PKG_ROWS[lang] || PKG_ROWS.ko
  const clinicRows = CLINIC_ROWS[lang] || CLINIC_ROWS.ko
  const exVal = EXAMPLE_VALUES[lang] || EXAMPLE_VALUES.ko

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
    { label: t('pricing.e1'), value: exVal.e1, highlight: false },
    { label: t('pricing.e2'), value: exVal.e2, highlight: false },
    { label: t('pricing.e3'), value: exVal.e3, highlight: false },
    { label: t('pricing.e4'), value: exVal.e4, highlight: false },
    { label: t('pricing.e5'), value: exVal.e5, highlight: true },
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
                {pkgRows.map((r, i) => (
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
                    <td style={{ color: 'var(--muted)', fontSize: '13px', textDecoration: 'line-through' }}>{exVal.e6}</td>
                  </tr>
                  <tr className="trHighlight">
                    <td style={{ textAlign: 'left', fontWeight: 700, color: 'var(--green)' }}>{t('pricing.e7')}</td>
                    <td style={{ fontWeight: 900, color: 'var(--green)', fontSize: '18px' }}>{exVal.e7}</td>
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
