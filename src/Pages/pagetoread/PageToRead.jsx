import React from "react";

const PageToRead = () => {
  return (
    <div>
      <div className="flex flex-col items-center justify-center min-h-[70vh] text-center px-4">
        {/* Animated Icon */}
        <div className="w-24 h-24 mb-6 text-amber-500 animate-bounce">
          <svg fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m10 0a2 2 0 100-4m0 4a2 2 0 110-4M6 20h12a2 2 0 002-2v-5a2 2 0 00-2-2H6a2 2 0 00-2 2v5a2 2 0 002 2z"
            />
          </svg>
        </div>

        <h2 className="text-4xl md:text-5xl font-black text-gray-800 mb-4">
          Under Construction
        </h2>

        <p className="text-gray-500 text-lg md:text-xl max-w-md mx-auto leading-relaxed">
          We are currently working hard to bring you new features. This page
          will be available very soon. Stay tuned!
        </p>

        {/* Progress Bar Decoration */}
        <div className="mt-8 w-64 h-2 bg-gray-200 rounded-full overflow-hidden">
          <div className="bg-amber-500 h-full w-2/3 animate-pulse"></div>
        </div>
      </div>
    </div>
  );
};

export default PageToRead;
