import { useTranslation } from 'react-i18next';

export function LanguageSwitcher() {
  const { i18n } = useTranslation();

  const toggleLang = () => {
    const newLang = i18n.language === 'en' ? 'vi' : 'en';
    i18n.changeLanguage(newLang);
  };

  return (
    <button
      onClick={toggleLang}
      className="w-9 h-9 rounded-full border border-dark-600 bg-dark-900 text-xs font-bold text-dark-100 hover:border-vertex-500 transition-all"
    >
      {i18n.language.toUpperCase()}
    </button>
  );
}