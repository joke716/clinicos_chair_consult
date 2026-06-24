import { motion } from 'framer-motion'
import { FiCheck, FiMonitor, FiThumbsUp, FiStar, FiAward } from 'react-icons/fi'
import { useScrollReveal } from '../hooks/useScrollReveal'
import img4 from '../assets/img4.png'

const checks = [
  '대기 중 체어에서 맞춤 치료 콘텐츠 자동 재생',
  '환자 불안 감소, 치료 동의율 향상',
  '반복 설명 피로 없이 일관된 정보 전달',
  '프리미엄 병원 이미지 자연스럽게 형성',
]

const values = [
  { icon: <FiMonitor size={24} />, title: '환자 이해도 향상', desc: '치료 전 맞춤 영상으로 환자가 스스로 필요성을 이해합니다.' },
  { icon: <FiThumbsUp size={24} />, title: '반복 설명 완화', desc: '직원의 설명 부담을 줄이고 일관된 품질을 유지합니다.' },
  { icon: <FiStar size={24} />, title: '프리미엄 경험', desc: '대기 시간을 가치 있는 정보 시간으로 전환합니다.' },
  { icon: <FiAward size={24} />, title: '병원 이미지', desc: '첨단 시스템으로 신뢰감 있는 병원 브랜드를 구축합니다.' },
]

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
}
const item = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
}

export default function ChairSection() {
  const [ref, visible] = useScrollReveal()
  const [ref2, visible2] = useScrollReveal()

  return (
    <section className="ivory" id="chair">
      <div className="wrap">
        <div className="sectionHead">
          <h2>AI 체어 모니터</h2>
          <p>대기 환자에게 필요한 정보를 전달하는 스마트 환자 경험 시스템</p>
          <div className="goldline" />
        </div>

        <motion.div
          ref={ref}
          className="productBlock reverse"
          variants={stagger}
          initial="hidden"
          animate={visible ? 'visible' : 'hidden'}
        >
          <motion.div className="productText" variants={item}>
            <span className="tag">02 · Chair Monitor</span>
            <h3>대기 시간을<br />설득의 시간으로</h3>
            <p>
              환자가 체어에 앉아 대기하는 짧은 순간, AI가 그 환자에게 맞는
              치료 콘텐츠를 자동으로 선별해 재생합니다.
              의료진의 설명 전에 이미 이해한 환자는 더 쉽게 결정합니다.
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
              "설명도 안 했는데 환자가 먼저 치료를 물어봅니다."
            </div>
          </motion.div>
          <motion.div className="imagePanel" variants={item}>
            <img src={img4} alt="AI 체어 모니터 화면" />
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
