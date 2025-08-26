import Link from 'next/link';

interface Props {
  lang: string;
}

const LanguageSwitcher: React.FC<Props> = ({ lang }) => {
  return (
    <div className="flex gap-2 text-sm">
      <Link href="/en" className={lang === 'en' ? 'font-bold' : ''}>EN</Link>
      <span>|</span>
      <Link href="/th" className={lang === 'th' ? 'font-bold' : ''}>TH</Link>
    </div>
  );
};

export default LanguageSwitcher;
