import { useTranslation } from 'react-i18next'

export default function Footer() {
  const { t } = useTranslation()
  return (
    <footer>
      <div className="wrap">
        {t('footer.copy')} &nbsp;|&nbsp; {t('footer.desc')}
      </div>
    </footer>
  )
}
