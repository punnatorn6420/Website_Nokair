import React from 'react';

interface Props {
  dict: {
    terms: string;
    use: string;
    privacy: string;
    copyright: string;
  };
}

const Footer: React.FC<Props> = ({ dict }) => {
  const year = new Date().getFullYear().toString();
  const copyright = dict.copyright.replace('{{year}}', year);
  return (
    <footer className="p-4 bg-gray-100 text-center text-sm">
      <div className="flex justify-center gap-4 mb-2">
        <a href="#">{dict.terms}</a>
        <a href="#">{dict.use}</a>
        <a href="#">{dict.privacy}</a>
      </div>
      <p>{copyright}</p>
    </footer>
  );
};

export default Footer;
