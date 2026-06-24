import { motion } from 'framer-motion'
import { FiArrowRight, FiCalendar } from 'react-icons/fi'
import { useScrollReveal } from '../hooks/useScrollReveal'

export default function CTASection() {
  const [ref, visible] = useScrollReveal()

  return (
    <section className="cta" id="contact">
      <div className="wrap">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={visible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.65 }}
        >
          <h2>지금 바로 시작하세요</h2>
          <p>
            1개월 무료 체험으로 병원에 맞는 효과를 직접 확인하세요.<br />
            도입 상담은 30분, 설치는 하루면 완료됩니다.
          </p>
          <div className="actions" style={{ justifyContent: 'center' }}>
            <button className="btn gold">
              <FiArrowRight size={15} />
              무료 도입 상담 신청
            </button>
            <button className="btn ghost">
              <FiCalendar size={14} />
              데모 일정 잡기
            </button>
          </div>
          <small>
            계약 없이 1개월 무료 체험 · 언제든지 해지 가능 · 설치 지원 포함
          </small>
        </motion.div>
      </div>
    </section>
  )
}
