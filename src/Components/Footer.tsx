import React from 'react';
import { MdOutlineCopyright } from 'react-icons/md';
import icon from '../assets/logo-text.png';

const Footer = () => {
  return (
    <footer className="mt-20 w-full bg-white py-12 md:py-16 px-6 md:px-16 lg:px-24 border-t border-slate-100 mb-8">
      <div className="max-w-7xl mx-auto">

        <div className="flex flex-col lg:flex-row justify-between items-center lg:items-start gap-12 lg:gap-8 mb-12 md:mb-16">
          
          <div className="max-w-sm flex flex-col items-center lg:items-start text-center lg:text-left">
            <div className="flex items-center gap-2 mb-6">
              <img 
                src={icon} 
                alt="DevStack Icon" 
              />
            </div>
            <p className="text-slate-500 text-sm leading-relaxed mb-6">
              Curated tools, technologies, and resources for developers building modern software.
            </p>
            <div className="flex items-center justify-center lg:justify-start gap-4 text-sm font-semibold text-slate-500 lg:text-gray-700">
              <a href="#" className="hover:text-pink-500 transition-colors flex items-center gap-4 after:content-['•'] after:text-slate-400 after:font-normal lg:after:hidden">GitHub</a>
              <a href="#" className="hover:text-pink-500 transition-colors flex items-center gap-4 after:content-['•'] after:text-slate-400 after:font-normal lg:after:hidden">Twitter</a>
              <a href="#" className="hover:text-pink-500 transition-colors">LinkedIn</a>
            </div>
          </div>
          <div className="hidden md:flex flex-wrap gap-16 md:gap-24 lg:gap-32">
            <div className="flex flex-col gap-4">
              <h4 className="text-xs font-bold text-gray-900 tracking-wider">PRODUCT</h4>
              <a href="#" className="text-slate-500 hover:text-gray-900 text-sm transition-colors">Home</a>
              <a href="#" className="text-slate-500 hover:text-gray-900 text-sm transition-colors">Technologies</a>
              <a href="#" className="text-slate-500 hover:text-gray-900 text-sm transition-colors">Projects</a>
            </div>
            <div className="flex flex-col gap-4">
              <h4 className="text-xs font-bold text-gray-900 tracking-wider">COMPANY</h4>
              <a href="#" className="text-slate-500 hover:text-gray-900 text-sm transition-colors">About</a>
              <a href="#" className="text-slate-500 hover:text-gray-900 text-sm transition-colors">Contact</a>
              <a href="#" className="text-slate-500 hover:text-gray-900 text-sm transition-colors">Careers</a>
            </div>
            <div className="flex flex-col gap-4">
              <h4 className="text-xs font-bold text-gray-900 tracking-wider">LEGAL</h4>
              <a href="#" className="text-slate-500 hover:text-gray-900 text-sm transition-colors">Privacy Policy</a>
              <a href="#" className="text-slate-500 hover:text-gray-900 text-sm transition-colors">Terms of Service</a>
            </div>

          </div>
        </div>

        <div className="border-t border-slate-100 mb-6 md:mb-8"></div>

        <div className="flex justify-between items-center gap-4 text-xs md:text-sm text-slate-400 w-full">

          <div className="flex items-center gap-1">
            <MdOutlineCopyright className="text-slate-400 text-base md:text-lg" />
            <span>2026 Dev Stack. All rights reserved.</span>
          </div>
          <div className="flex gap-4 md:gap-6">
            <a href="#" className="hover:text-slate-600 transition-colors">Privacy</a>
            <a href="#" className="hover:text-slate-600 transition-colors">Terms</a>
          </div>
          
        </div>
      </div>
    </footer>
  );
};

export default Footer;