import React from "react";

const Transformation = () => {
  const features = [
    "Strategic Career Guidance",
    "Leadership Development",
    "CV Development",
    "Sustainability Leadership",
    "Communication Skills",
    "Business Model",
  ];

  return (
    <div className="flex items-center justify-center min-h-screen bg-white p-6">
      {/* Parent Container */}
      <div className="w-full max-w-[1400px] bg-[#FDE7EB] rounded-[24px] p-8 md:p-16 shadow-2xl">

        {/* Header */}
        <div className="mb-10">
          <p className="text-[#3F51B5] font-medium italic mb-2">
            Learning With Our CEO:
          </p>

          <h1 className="font-['Montserrat'] font-bold text-3xl md:text-5xl text-[#571244] mb-6 leading-tight">
            Transformation Hub With Jite Newton
          </h1>

          <p className="text-gray-700 leading-relaxed text-sm md:text-base max-w-[1000px]">
            Transformation Hub with Jite Newton is a flagship webinar series curated by the CEO, Dr. Jite Newton.
            Designed to elevate career trajectories and leadership capabilities, this exclusive event offers
            invaluable insights and strategies for personal and professional growth.
          </p>
        </div>

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row gap-12 items-stretch">

          {/* Image Section */}
          <div className="w-full max-w-[660px] h-[400px]">
            <img
              src="/Transformation.jpg"
              alt="Transformation Hub Visual"
              className="w-full h-full object-cover rounded-[16px] shadow-sm"
            />
          </div>

          {/* Features Section (NOW MATCHES IMAGE HEIGHT) */}
          <div className="w-full max-w-[640px] h-[400px] flex flex-col justify-between bg-white/30 py-8 px-5 rounded-lg">

            {/* Feature Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="flex flex-row items-center w-full max-w-[288px] h-fit rounded-xl p-4 gap-[10px] bg-white shadow-sm border border-pink-100 hover:shadow-md transition-shadow"
                >
                  <span className="flex-shrink-0">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                      <path
                        d="M13 2L3 14H12L11 22L21 10H12L13 2Z"
                        fill="#571244"
                        stroke="#571244"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </span>

                  <span className="text-[#1A1A1A] font-medium text-sm">
                    {feature}
                  </span>
                </div>
              ))}
            </div>

            {/* Button */}
            <button className="flex items-center justify-center gap-2 bg-[#571244] text-white w-fit py-3 px-8 rounded-[8px] font-semibold hover:bg-[#450e36] transition-colors group">
              Learn More
              <svg
                className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
              >
                <path
                  d="M7 17L17 7M17 7H7M17 7V17"
                  stroke="white"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>

          </div>
        </div>
      </div>
    </div>
  );
};

export default Transformation;