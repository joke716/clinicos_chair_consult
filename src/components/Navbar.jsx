import { FiPhone } from 'react-icons/fi'

export default function Navbar() {
  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <nav className="nav">
      <div className="wrap navin">
        <a href="#top" className="brand" onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }) }}>
          <div className="mark" />
          <div>
            Clinic OS
            <small>BY BALANCETECH</small>
          </div>
        </a>
        <div className="navlinks">
          <a href="#consult" onClick={(e) => { e.preventDefault(); scrollTo('consult') }}>상담 관리</a>
          <a href="#chair" onClick={(e) => { e.preventDefault(); scrollTo('chair') }}>체어 모니터</a>
          <a href="#pricing" onClick={(e) => { e.preventDefault(); scrollTo('pricing') }}>도입 구조</a>
          <a
            href="#contact"
            className="btn gold"
            onClick={(e) => { e.preventDefault(); scrollTo('contact') }}
          >
            <FiPhone size={14} />
            도입 상담
          </a>
        </div>
      </div>
    </nav>
  )
}
