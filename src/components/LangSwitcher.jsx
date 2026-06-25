import { useTranslation } from 'react-i18next'

const langs = [
  { code: 'ko', label: '한국어', short: 'KO' },
  { code: 'en', label: 'EN', short: 'EN' },
  { code: 'ja', label: '日本語', short: 'JP' },
]

export default function LangSwitcher({ compact = false }) {
  const { i18n } = useTranslation()
  const current = i18n.language?.slice(0, 2)

  return (
    <div className={`langSwitcher${compact ? ' langSwitcherCompact' : ''}`}>
      {langs.map((l) => (
        <button
          key={l.code}
          className={`langBtn${current === l.code ? ' langBtnActive' : ''}`}
          onClick={() => i18n.changeLanguage(l.code)}
        >
          {compact ? l.short : l.label}
        </button>
      ))}
    </div>
  )
}
