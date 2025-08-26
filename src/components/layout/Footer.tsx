import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="p-4 bg-gray-100 text-center text-sm">
      <p>&copy; {new Date().getFullYear()} Nokair</p>
    </footer>
  );
};

export default Footer;
