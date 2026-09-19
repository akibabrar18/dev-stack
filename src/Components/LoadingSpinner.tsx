import React from "react";

const LoadingSpinner = () => {
  return (
    <div className="flex min-h-screen w-full items-center justify-center bg-transparent">
      <div className="flex flex-col items-center justify-center gap-4">
        <div
          className="h-10 w-10 animate-spin rounded-full border-4 border-solid border-[#FF5722]/20 border-t-[#E91E63]"
          role="status"
          aria-label="loading"
        ></div>
        <span className="bg-gradient-to-r from-[#FF5722] to-[#E91E63] bg-clip-text text-xl font-bold tracking-wider text-transparent">
          Loading...
        </span>
      </div>
      s
    </div>
  );
};

export default LoadingSpinner;
