import React from 'react';
import { navigateTo } from '../utils/storage';
import { ArrowLeft, Home, Compass, Layers, Mail } from 'lucide-react';

export const NotFoundPage: React.FC = () => {
  return (
    <div className="pt-36 pb-28 max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-8">
      <div className="space-y-4">
        <div className="text-sm font-mono font-bold text-[#CCFF00] tracking-widest uppercase">
          Error 404
        </div>
        <h1 className="text-4xl sm:text-6xl font-extrabold text-white tracking-tight">
          Page Not Found
        </h1>
        <p className="text-sm sm:text-base text-neutral-400 max-w-md mx-auto leading-relaxed">
          The destination you requested has moved, been archived, or does not exist. Let's redirect your attention back to growth.
        </p>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 max-w-xl mx-auto pt-4">
        <button
          onClick={() => navigateTo('/')}
          className="p-4 rounded-xl bg-[#121216] border border-neutral-800 hover:border-[#CCFF00]/50 text-neutral-300 hover:text-white transition-all flex flex-col items-center gap-2 cursor-pointer"
        >
          <Home className="w-5 h-5 text-[#CCFF00]" />
          <span className="text-xs font-semibold">Home</span>
        </button>

        <button
          onClick={() => navigateTo('/services')}
          className="p-4 rounded-xl bg-[#121216] border border-neutral-800 hover:border-[#CCFF00]/50 text-neutral-300 hover:text-white transition-all flex flex-col items-center gap-2 cursor-pointer"
        >
          <Layers className="w-5 h-5 text-[#CCFF00]" />
          <span className="text-xs font-semibold">Services</span>
        </button>

        <button
          onClick={() => navigateTo('/work')}
          className="p-4 rounded-xl bg-[#121216] border border-neutral-800 hover:border-[#CCFF00]/50 text-neutral-300 hover:text-white transition-all flex flex-col items-center gap-2 cursor-pointer"
        >
          <Compass className="w-5 h-5 text-[#CCFF00]" />
          <span className="text-xs font-semibold">Work</span>
        </button>

        <button
          onClick={() => navigateTo('/contact')}
          className="p-4 rounded-xl bg-[#121216] border border-neutral-800 hover:border-[#CCFF00]/50 text-neutral-300 hover:text-white transition-all flex flex-col items-center gap-2 cursor-pointer"
        >
          <Mail className="w-5 h-5 text-[#CCFF00]" />
          <span className="text-xs font-semibold">Contact</span>
        </button>
      </div>
    </div>
  );
};
