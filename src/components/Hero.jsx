import { motion } from 'framer-motion'
import { FiCheck, FiArrowRight, FiMessageSquare } from 'react-icons/fi'
import img1 from '../assets/img1.png'
import img2 from '../assets/img2.png'

const points = [
  '상담 후 미결정 환자를 AI가 자동으로 감지하고 재연결',
  '대기 중 체어 모니터로 치료 필요성을 자연스럽게 이해',
  '원장님은 요약 리포트만 확인, 반복 설명 부담 제로',
]

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 28 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.65, delay, ease: 'easeOut' },
})

export default function Hero() {
  const scrollTo = (id) => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })

  return (
    <header className="hero" id="top">
      <div className="wrap heroIn">
        <div>
          <motion.div className="eyebrow" {...fadeUp(0.1)}>
            AI 운영 시스템
          </motion.div>
          <motion.h1 {...fadeUp(0.2)}>
            환자 경험과<br />
            <strong>상담 회수</strong>를<br />
            바꾸는 AI
          </motion.h1>
          <motion.p {...fadeUp(0.3)}>
            AI 체어 모니터와 AI 상담 관리 시스템으로 대기 환자에게 필요한 설명을 전달하고,
            상담 후 끊긴 환자를 다시 병원의 상담과 치료 흐름으로 연결합니다.
          </motion.p>
          <motion.div className="actions" {...fadeUp(0.4)}>
            <button className="btn gold" onClick={() => scrollTo('contact')}>
              <FiArrowRight size={15} />
              무료 도입 상담
            </button>
            <button className="btn ghost" onClick={() => scrollTo('consult')}>
              <FiMessageSquare size={14} />
              제품 둘러보기
            </button>
          </motion.div>
          <motion.ul className="pointList" {...fadeUp(0.5)}>
            {points.map((pt, i) => (
              <li key={i}>
                <span className="checkIcon"><FiCheck size={11} /></span>
                {pt}
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
            <img src={img1} alt="AI 상담 관리 시스템" />
            <div className="visualLabel">
              <b>AI 상담 관리</b>
              <span>미결정 환자 자동 재연결</span>
            </div>
          </div>
          <div className="visualCard">
            <img src={img2} alt="AI 체어 모니터" />
            <div className="visualLabel">
              <b>AI 체어 모니터</b>
              <span>대기 중 치료 이해도 향상</span>
            </div>
          </div>
        </motion.div>
      </div>
    </header>
  )
}
