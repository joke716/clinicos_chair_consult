import { motion } from 'framer-motion'
import { FiTrendingUp, FiCpu, FiSettings, FiEye } from 'react-icons/fi'
import { useScrollReveal } from '../hooks/useScrollReveal'

const cards = [
  { icon: <FiTrendingUp size={24} />, title: '상담 전환율', desc: '미결정 환자 재연결과 체어 교육으로 전환율을 이중으로 높입니다.' },
  { icon: <FiCpu size={24} />, title: '설명 품질', desc: 'AI가 일관된 정보를 전달해 사람에 따른 품질 편차를 없앱니다.' },
  { icon: <FiSettings size={24} />, title: '운영 표준화', desc: '상담·대기·후속 전 과정이 시스템으로 자동 운영됩니다.' },
  { icon: <FiEye size={24} />, title: '경영 시야', desc: '일별 리포트로 원장이 실시간 병원 현황을 한눈에 파악합니다.' },
]

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
}
const item = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
}

export default function CompareSection() {
  const [ref, visible] = useScrollReveal()

  return (
    <section className="navySec">
      <div className="wrap">
        <div className="sectionHead">
          <h2>두 시스템이 함께할 때</h2>
          <p>상담 관리와 체어 모니터가 연동되어 만들어내는 시너지</p>
        </div>
        <motion.div
          ref={ref}
          className="valueGrid"
          variants={stagger}
          initial="hidden"
          animate={visible ? 'visible' : 'hidden'}
        >
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
