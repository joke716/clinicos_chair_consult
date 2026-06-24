import { motion } from 'framer-motion'
import { FiCheck, FiMessageCircle, FiRepeat, FiBarChart2, FiFileText } from 'react-icons/fi'
import { useScrollReveal } from '../hooks/useScrollReveal'
import img3 from '../assets/img3.png'

const checks = [
  '상담 종료 후 미결정 환자를 AI가 자동 식별',
  '이탈 사유 분석으로 맞춤 후속 메시지 발송',
  '재방문 유도 성공률 평균 34% 향상',
  '원장·코디네이터용 일일 상담 요약 리포트',
]

const values = [
  { icon: <FiMessageCircle size={24} />, title: '상담 관리 자동화', desc: '놓친 환자 없이, 상담 흐름을 AI가 끝까지 관리합니다.' },
  { icon: <FiRepeat size={24} />, title: '미결정 환자 회수', desc: '상담 후 이탈한 환자를 적절한 타이밍에 재연결합니다.' },
  { icon: <FiBarChart2 size={24} />, title: '분석 & 코칭', desc: '상담 패턴 분석으로 코디네이터 역량을 지속 향상합니다.' },
  { icon: <FiFileText size={24} />, title: '원장 리포트', desc: '매일 아침 핵심 지표만 담은 리포트를 자동 발송합니다.' },
]

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
}
const item = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
}

export default function ConsultSection() {
  const [ref, visible] = useScrollReveal()
  const [ref2, visible2] = useScrollReveal()

  return (
    <section className="ivory" id="consult">
      <div className="wrap">
        <div className="sectionHead">
          <h2>AI 상담 관리 시스템</h2>
          <p>상담 후 끊긴 환자를 다시 치료 흐름으로 연결하는 AI 코디네이터</p>
          <div className="goldline" />
        </div>

        <motion.div
          ref={ref}
          className="productBlock"
          variants={stagger}
          initial="hidden"
          animate={visible ? 'visible' : 'hidden'}
        >
          <motion.div className="imagePanel" variants={item}>
            <img src={img3} alt="AI 상담 관리 시스템 화면" />
          </motion.div>
          <motion.div className="productText" variants={item}>
            <span className="tag">01 · Consult AI</span>
            <h3>상담 후 이탈을<br />막는 AI 코디</h3>
            <p>
              상담이 끝난 뒤 결정을 미룬 환자를 AI가 자동으로 감지합니다.
              이탈 사유를 분석해 적절한 타이밍에 맞춤형 메시지를 발송하고,
              자연스럽게 재방문으로 연결합니다.
            </p>
            <div className="checks">
              {checks.map((c, i) => (
                <div className="check" key={i}>
                  <span className="checkIcon"><FiCheck size={12} /></span>
                  {c}
                </div>
              ))}
            </div>
            <div className="quote">
              "상담 후 3일 이내 재연락으로 전환율이 눈에 띄게 올랐습니다."
            </div>
          </motion.div>
        </motion.div>

        <motion.div
          ref={ref2}
          className="valueGrid"
          style={{ marginTop: 40 }}
          variants={stagger}
          initial="hidden"
          animate={visible2 ? 'visible' : 'hidden'}
        >
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
