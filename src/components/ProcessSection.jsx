import { motion } from 'framer-motion'
import {
  FiEdit3, FiAlertCircle, FiSearch, FiSend,
  FiArrowRight, FiCheck,
} from 'react-icons/fi'
import { useScrollReveal } from '../hooks/useScrollReveal'

const steps = [
  {
    num: 1,
    icon: <FiEdit3 size={22} />,
    tag: '자동 기록',
    title: '상담 기록',
    desc: '코디네이터가 상담을 진행하는 동안 AI가 대화 내용을 실시간으로 구조화해 저장합니다.',
    points: [
      '치료명·금액·환자 반응 자동 태깅',
      '상담 요약문 즉시 생성',
      '원장 검토용 노트 자동 분류',
    ],
    color: '#1e6a55',
    bg: '#f0faf6',
  },
  {
    num: 2,
    icon: <FiAlertCircle size={22} />,
    tag: 'AI 분류',
    title: '미결정 감지',
    desc: '상담 종료 직후 AI가 결정 여부를 판별하고, 미결정 환자를 자동으로 후속 대상 풀로 분류합니다.',
    points: [
      '결정·미결정·재방문 3단계 자동 분류',
      '당일·3일·7일 추적 타임라인 설정',
      '분류 정확도 92% (자체 측정)',
    ],
    color: '#c5a05b',
    bg: '#fdf8ee',
  },
  {
    num: 3,
    icon: <FiSearch size={22} />,
    tag: '패턴 분석',
    title: '사유 분석',
    desc: '비용 부담·일정 조율·치료 불안 등 이탈 사유를 카테고리별로 패턴 분석해 원인을 특정합니다.',
    points: [
      '6개 이탈 유형별 사유 분류',
      '병원별 이탈 패턴 누적 학습',
      '코디네이터 상담 약점 자동 리포트',
    ],
    color: '#3b5bdb',
    bg: '#f0f3ff',
  },
  {
    num: 4,
    icon: <FiSend size={22} />,
    tag: '맞춤 메시지',
    title: '후속 연결',
    desc: '분석된 사유에 맞는 메시지를 최적 타이밍에 발송하고, 원장 확인 후 자동 전송합니다.',
    points: [
      '사유별 30종 이상 메시지 템플릿',
      '최적 발송 시간 AI 자동 선택',
      '응답률 평균 34% 향상 (도입 병원 기준)',
    ],
    color: '#1e6a55',
    bg: '#f0faf6',
  },
]

const metrics = [
  { label: '미결정 환자 감지율', value: '92%', sub: '상담 종료 후 자동 분류' },
  { label: '후속 메시지 응답률', value: '34%↑', sub: '미발송 대비 평균' },
  { label: '재방문 연결 성공', value: '2.8배', sub: '수동 운영 대비' },
  { label: '코디 업무 절감', value: '주 6시간', sub: '후속 관리 자동화 효과' },
]

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
}
const item = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
}
const metricItem = {
  hidden: { opacity: 0, scale: 0.92 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.45 } },
}

export default function ProcessSection() {
  const [ref, visible] = useScrollReveal()
  const [ref2, visible2] = useScrollReveal()

  return (
    <section className="paper">
      <div className="wrap">
        <div className="sectionHead">
          <h2>상담 자동화 프로세스</h2>
          <p>
            첫 상담 기록부터 후속 재연결까지 — 코디네이터가 놓쳤던 환자를<br />
            AI가 끝까지 추적해 병원 수익으로 연결합니다
          </p>
        </div>

        {/* Step cards */}
        <motion.div
          ref={ref}
          className="processGrid"
          variants={stagger}
          initial="hidden"
          animate={visible ? 'visible' : 'hidden'}
        >
          {steps.map((s, i) => (
            <div key={s.num} className="processRow">
              <motion.div className="stepCard" variants={item}>
                <div className="stepTop">
                  <div className="stepIconWrap" style={{ background: s.bg, color: s.color }}>
                    {s.icon}
                  </div>
                  <span className="stepTag" style={{ background: s.bg, color: s.color }}>{s.tag}</span>
                  <div className="stepNum">{s.num}</div>
                </div>
                <b className="stepTitle">{s.title}</b>
                <p className="stepDesc">{s.desc}</p>
                <ul className="stepPoints">
                  {s.points.map((pt, j) => (
                    <li key={j}>
                      <FiCheck size={11} style={{ color: s.color, flexShrink: 0, marginTop: 2 }} />
                      {pt}
                    </li>
                  ))}
                </ul>
              </motion.div>

              {i < steps.length - 1 && (
                <div className="stepArrow">
                  <FiArrowRight size={18} />
                </div>
              )}
            </div>
          ))}
        </motion.div>

        {/* Metrics bar */}
        <motion.div
          ref={ref2}
          className="metricsBar"
          variants={stagger}
          initial="hidden"
          animate={visible2 ? 'visible' : 'hidden'}
        >
          {metrics.map((m, i) => (
            <motion.div className="metricItem" key={i} variants={metricItem}>
              <div className="metricValue">{m.value}</div>
              <div className="metricLabel">{m.label}</div>
              <div className="metricSub">{m.sub}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
