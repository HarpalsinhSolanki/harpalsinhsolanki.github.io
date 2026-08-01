import React from 'react';
import { Code2, Heart, ArrowUp } from 'lucide-react';

const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <footer className="bg-gray-600 text-white py-4">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center text-center">
          <div className="flex items-center mb-4 md:mb-0">
            <Code2 size={20} className="text-white mr-2" />
            <span className="font-bold text-lg">hs.dev</span>
          </div>
          
          <div className="flex flex-col items-center">
            <p className="text-gray-300 mb-2 text-sm">
              © {new Date().getFullYear()} Harpalsinh Solanki. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;