import React from 'react';
import type TechnologieType from '../Types/TechnologieType';

interface TechnologyCardProps {
  technology: TechnologieType;
  isSelected: boolean;
  onAdd: (tech: TechnologieType) => void;
}

const TechnologyCard = ({ technology, isSelected, onAdd }: TechnologyCardProps) => {
  return (
    <div className="bg-white rounded-[24px] p-6 border border-gray-100 shadow-[0_4px_24px_rgb(0,0,0,0.04)] w-full max-w-[340px] flex flex-col font-sans hover:shadow-lg transition-shadow duration-300">
      
      <div className="flex justify-between items-start">
        <img 
          src={technology.icon} 
          alt={`${technology.name} icon`} 
          className="w-[52px] h-[52px] object-contain" 
        />
        <span className="px-4 py-1.5 rounded-full text-sm font-medium border text-[#00BCEB] bg-[#F0FBFF] border-[#A6E5F7]">
          {technology.badge}
        </span>
      </div>

      <h3 className="text-2xl font-bold text-gray-900 mt-5 mb-3">
        {technology.name}
      </h3>
      
      <p className="text-gray-600 text-[15px] leading-[1.6] mb-6 flex-grow">
        {technology.description}
      </p>

      <div className="flex items-center gap-3 mb-6 text-[14px]">
        <span className="bg-gray-100 text-gray-700 px-3 py-1.5 rounded-lg font-medium">
          {technology.category}
        </span>
        <span className="text-gray-500 font-medium">
          {technology.difficulty}
        </span>
        
        <div className="flex items-center gap-1.5 ml-auto font-bold text-gray-900">
          <svg className="w-4 h-4 text-amber-400" fill="currentColor" viewBox="0 0 20 20">
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
          </svg>
          <span>{technology.rating}</span>
        </div>
      </div>

      {isSelected ? (
        <button disabled className="w-full bg-pink-50 text-pink-700 font-medium py-3.5 rounded-[14px] transition-colors flex items-center justify-center gap-2 cursor-not-allowed">
          ✓ Added to Stack
        </button>
      ) : (
        <button 
          onClick={() => onAdd(technology)}
          className="w-full bg-[#0F172A] hover:bg-gray-800 text-white font-medium py-3.5 rounded-[14px] transition-colors"
        >
          Add to Stack
        </button>
      )}
      
    </div>
  );
};

export default TechnologyCard;