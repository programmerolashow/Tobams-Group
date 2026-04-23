import React from 'react';

const Booking = () => {
  return (
    <div className="flex items-center justify-center min-h-[400px] bg-white p-6">
      {/* Main Container */}
      <div className="w-full max-w-[1134px] bg-[#571244] rounded-[12px] py-12 md:py-[64px] px-6 md:px-16 text-center shadow-lg border-[1px] border-purple-400/30">
        
        {/* Text Content */}
        <h2 className="text-white text-lg md:text-2xl font-medium leading-relaxed mb-8">
          <span className="lg:hidden">
            Don&apos;t just dream it—let&apos;s build it! Click now and start your project with Tobams Group. Your journey to digital excellence begins here.
          </span>
          <span className="hidden lg:inline">
            Want to accelerate professional growth and development at your organisation?
          </span>
          <span className="block mt-1">See how we can help.</span>
        </h2>

        {/* Action Button */}
        <button className="bg-white text-[#571244] font-bold py-3 px-8 rounded-[8px] transition-all hover:bg-gray-100 hover:scale-105 active:scale-95 shadow-md">
          Book a Consultation
        </button>

      </div>
    </div>
  );
};

export default Booking;