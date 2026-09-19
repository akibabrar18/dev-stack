import type TechnologieType from '../Types/TechnologieType';

interface SelectedTechnologiesProps {
  stack: TechnologieType[];
  onRemove: (name: string) => void;
  onRemoveAll: () => void;
}

const SelectedTechnologies = ({ stack, onRemove, onRemoveAll }: SelectedTechnologiesProps) => {
  const isEmpty = stack.length === 0;

  return (
    <div className="bg-white rounded-[24px] p-6 border border-gray-100 shadow-[0_4px_24px_rgb(0,0,0,0.04)] w-full font-sans">
      <h2 className="text-[22px] font-bold text-[#0F172A] mb-1">Your Stack</h2>
      
      {isEmpty ? (
        <>
          <p className="text-[#94A3B8] text-sm mb-6">No technologies selected yet.</p>
          <div className="border-2 border-dashed border-[#E2E8F0] rounded-[16px] py-10 flex items-center justify-center">
            <p className="text-[#94A3B8] font-medium text-[15px]">Your stack is empty.</p>
          </div>
        </>
      ) : (
        <>
          <p className="text-[#94A3B8] text-sm mb-6">{stack.length} Technology Selected</p>
          
          <div className="flex flex-col gap-3 mb-6">
            {stack.map((tech) => (
              <div key={tech.name} className="flex items-center justify-between p-3.5 border border-gray-100 rounded-[14px] bg-white shadow-sm">
                <div className="flex items-center gap-3.5">
                  <img src={tech.icon} alt={tech.name} className="w-9 h-9 object-contain" />
                  <div className="flex flex-col">
                    <span className="font-bold text-gray-900 text-[15px] leading-tight mb-0.5">{tech.name}</span>
                    <span className="text-[12px] text-gray-400 font-medium">{tech.category}</span>
                  </div>
                </div>
                <button 
                  onClick={() => onRemove(tech.name)}
                  className="text-gray-400 hover:text-gray-600 p-1"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
            ))}
          </div>

          <button 
            onClick={onRemoveAll}
            className="w-full py-3.5 rounded-[14px] border border-red-500 text-red-500 font-bold hover:bg-red-50 transition-colors"
          >
            Remove All
          </button>
        </>
      )}
    </div>
  );
};

export default SelectedTechnologies;