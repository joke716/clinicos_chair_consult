import { useState, useEffect } from 'react'
import { useTranslation } from 'react-i18next'
import { FiPhone, FiMenu, FiX } from 'react-icons/fi'
import LangSwitcher from './LangSwitcher'

export default function Navbar() {
  const { t } = useTranslation()
  const [menuOpen, setMenuOpen] = useState(false)

  const scrollTo = (id) => {
    setMenuOpen(false)
    setTimeout(() => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' }), 50)
  }

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [menuOpen])

  return (
    <>
      <nav className="nav">
        <div className="wrap navin">
          <a href="#top" className="brand" onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }) }}>
            <div className="mark" />
            <div>
              {t('nav.brand')}
              <small>{t('nav.brandSub')}</small>
            </div>
          </a>

          {/* 데스크톱 메뉴 */}
          <div className="navlinks navDesktop">
            <a href="#consult" onClick={(e) => { e.preventDefault(); scrollTo('consult') }}>{t('nav.consult')}</a>
            <a href="#chair" onClick={(e) => { e.preventDefault(); scrollTo('chair') }}>{t('nav.chair')}</a>
            <a href="#pricing" onClick={(e) => { e.preventDefault(); scrollTo('pricing') }}>{t('nav.pricing')}</a>
            <LangSwitcher />
            <a href="#contact" className="btn gold" onClick={(e) => { e.preventDefault(); scrollTo('contact') }}>
              <FiPhone size={14} />
              {t('nav.cta')}
            </a>
          </div>

          {/* 모바일: 햄버거만 */}
          <div className="navMobileRight">
            <button className="hamburger" onClick={() => setMenuOpen(v => !v)} aria-label="메뉴">
              {menuOpen ? <FiX size={22} /> : <FiMenu size={22} />}
            </button>
          </div>
        </div>
      </nav>

      {/* 모바일 드로어 */}
      {menuOpen && (
        <div className="mobileDrawer" onClick={() => setMenuOpen(false)}>
          <div className="mobileDrawerInner" onClick={(e) => e.stopPropagation()}>
            <div className="mobileDrawerLinks">
              <a onClick={() => scrollTo('consult')}>{t('nav.consult')}</a>
              <a onClick={() => scrollTo('chair')}>{t('nav.chair')}</a>
              <a onClick={() => scrollTo('pricing')}>{t('nav.pricing')}</a>
              <div className="mobileDrawerLang">
                <LangSwitcher />
              </div>
              <a onClick={() => scrollTo('contact')} className="btn gold mobileCtaBtn">
                <FiPhone size={14} />
                {t('nav.cta')}
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
