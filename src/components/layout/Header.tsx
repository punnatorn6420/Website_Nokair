import React from 'react';
import Link from 'next/link';
import LanguageSwitcher from './LanguageSwitcher';

interface Props {
  dict: {
    home: string;
    booking: string;
    promotion: string;
    manage: string;
    language: string;
  };
  lang: string;
}

const Header: React.FC<Props> = ({ dict, lang }) => {
  return (
    <header className="p-4 bg-blue-500 text-white flex justify-between items-center">
      <h1 className="font-bold">Nokair</h1>
      <nav>
        <ul className="flex gap-4">
          <li>
            <Link href={`/${lang}`}>{dict.home}</Link>
          </li>
          <li>
            <a href="#">{dict.booking}</a>
          </li>
          <li>
            <a href="#">{dict.promotion}</a>
          </li>
          <li>
            <a href="#">{dict.manage}</a>
          </li>
        </ul>
      </nav>
      <LanguageSwitcher lang={lang} />
    </header>
  );
};

export default Header;
