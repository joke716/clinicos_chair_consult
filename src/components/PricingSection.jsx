import { motion } from 'framer-motion'
import { useScrollReveal } from '../hooks/useScrollReveal'

const formulas = [
  {
    title: '체어 모니터',
    big: '월 29만원~',
    desc: '체어 수에 따라 조정 / 설치비 별도',
    edge: false,
  },
  {
    title: '상담 관리',
    big: '월 39만원~',
    desc: '월 상담 건수에 따라 조정',
    edge: false,
  },
  {
    title: '패키지 (추천)',
    big: '월 58만원~',
    desc: '두 제품 동시 도입 시 월 10만원 할인',
    edge: true,
  },
]

const tableData = [
  ['강남 치과 A', '체어 4대', '상담 120건/월', '₩580,000', '전환율 +28%'],
  ['분당 피부과 B', '체어 2대', '상담 80건/월', '₩480,000', '설명시간 -40%'],
  ['홍대 한의원 C', '체어 3대', '상담 60건/월', '₩390,000', '재방문율 +31%'],
  ['수원 안과 D', '체어 5대', '상담 200건/월', '₩720,000', '전환율 +35%'],
  ['대구 성형외과 E', '체어 6대', '상담 150건/월', '₩680,000', '리뷰 4.9→5.0'],
]

const stagger = { hidden: {}, visible: { transition: { staggerChildren: 0.08 } } }
const item = { hidden: { opacity: 0, y: 16 }, visible: { opacity: 1, y: 0, transition: { duration: 0.45 } } }

export default function PricingSection() {
  const [ref, visible] = useScrollReveal()
  const [ref2, visible2] = useScrollReveal()

  return (
    <section className="ivory" id="pricing">
      <div className="wrap">
        <div className="sectionHead">
          <h2>도입 구조 & 요금</h2>
          <p>병원 규모에 맞게 유연하게 설계된 합리적인 구조</p>
          <div className="goldline" />
        </div>

        <div className="pricing">
          <div className="pricingHead">
            <div>
              <h3>Clinic OS 요금</h3>
              <p>월 구독 기준 / 부가세 별도 / 최초 1개월 무료 체험</p>
            </div>
            <span className="badge">두 제품 동시 도입 시 월 10만 할인</span>
          </div>

          <motion.div
            ref={ref}
            className="formulaGrid"
            variants={stagger}
            initial="hidden"
            animate={visible ? 'visible' : 'hidden'}
          >
            {formulas.map((f, i) => (
              <motion.div className={`formula${f.edge ? ' edge' : ''}`} key={i} variants={item}>
                <b>{f.title}</b>
                <div className="big">{f.big}</div>
                <p>{f.desc}</p>
              </motion.div>
            ))}
          </motion.div>

          <div className="tableWrap">
            <table>
              <thead>
                <tr>
                  <th>병원</th>
                  <th>체어 수</th>
                  <th>상담량</th>
                  <th>월 요금</th>
                  <th>주요 성과</th>
                </tr>
              </thead>
              <tbody>
                {tableData.map((row, i) => (
                  <tr key={i}>
                    {row.map((cell, j) => <td key={j}>{cell}</td>)}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <motion.div
          ref={ref2}
          className="notes"
          variants={stagger}
          initial="hidden"
          animate={visible2 ? 'visible' : 'hidden'}
        >
          <motion.div className="note" variants={item}>
            <b>초과 사용</b>
            <p>기본 건수 초과 시 건당 500원 추가 / 월 말 정산</p>
          </motion.div>
          <motion.div className="note" variants={item}>
            <b>풀 확장</b>
            <p>체어 10대 이상·월 300건 이상 병원은 별도 엔터프라이즈 플랜 문의</p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
