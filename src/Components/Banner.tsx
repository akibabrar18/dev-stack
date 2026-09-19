import bannerImage from "../assets/banner-stack.png";

const Banner = () => {
  return (
    <>
      <div className="flex container mx-auto gap-10 items-center justify-between max-lg:mt-10  ">
        
        <div className="w-full md:w-1/2 flex flex-col gap-4 items-center md:items-start text-center md:text-left">
          
          <h1 className="text-4xl md:text-6xl font-bold leading-tight md:leading-normal">
            Build Your Ideal <br />
            <span className="bg-gradient-to-r from-[#FF5722] to-[#7C3AED] bg-clip-text text-transparent">
              Development Stack
            </span>
          </h1>
          
          <p className="text-[#475569]">
            Explore frontend, backend, database, and tooling options, compare
            them side by side, and put together the stack that fits your next
            project.
          </p>
          
          <div className="flex w-full md:w-auto gap-3 md:gap-4 mt-4 justify-center md:justify-start">
            
            <button className="btn btn-secondary border-none bg-gradient-to-r from-[#FF5722] to-[#EC4899] text-white">
              Explore Technologies
            </button>
            
            <button className="btn btn-soft bg-white text-[#374151] border border-gray-200">
              Learn More
            </button>
          </div>
        </div>
        
        <div className="hidden md:block md:w-1/2">
          <img src={bannerImage} alt="Banner" className="w-full" />
        </div>
      </div>
      
      <img src={bannerImage} alt="Banner" className="w-full md:hidden mt-8 px-4" />
    </>
  );
};

export default Banner;