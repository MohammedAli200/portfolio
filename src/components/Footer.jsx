import React from 'react';

const Footer = () => {
  return (
    <footer className="py-8 px-6 border-t border-white/10 text-center text-gray-500 text-sm">
      <div className="max-w-7xl mx-auto">
        <p>© {new Date().getFullYear()} Mohammed Ali. All rights reserved.</p>
        <p className="mt-2">Built with React, Tailwind CSS & Framer Motion.</p>
      </div>
    </footer>
  );
};

export default Footer;
