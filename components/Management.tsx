import React from 'react';

const Management = () => {
  const benefits = [
    "Enhanced Leadership Skills",
    "Improved Employee Engagement",
    "Stronger Organisational Culture",
    "Sustainable Growth"
  ];

  return (
    <div className="flex items-center justify-center min-h-screen bg-white p-6">
      {/* Main Container */}
      <div className="flex flex-col md:flex-row w-full max-w-[1400px] bg-[#1A0314] rounded-[24px] p-6 md:p-12 gap-12 overflow-hidden shadow-2xl">
        {/* Image Section */}
        <div className="flex-1">
          <img 
            src="/management.jpg" 
            alt="Management team collaborating" 
            className="w-full h-full object-cover rounded-[16px] min-h-[350px]"
          />
        </div>

        {/* Content Section */}
        <div className="flex-1 flex flex-col justify-center text-white">
          <h1 className="font-bold text-3xl md:text-5xl mb-6 leading-tight">
            Management Development Program
          </h1>

          <div className="space-y-6 text-gray-300 font-light leading-relaxed mb-10 text-sm md:text-base">
            <p>
              Tobams Group offers a comprehensive Management Development Program designed 
              to equip corporate organisations with the high-performing leaders they need to thrive.
            </p>
            <p>
              Our program includes workshops, seminars, coaching sessions, online courses, 
              and experiential learning opportunities designed to improve leadership, 
              strategic thinking, communication, and other essential managerial 
              competencies for corporate organisations.
            </p>
          </div>

          {/* Benefits List */}
          <div className="flex flex-col gap-3">
            {benefits.map((benefit, index) => (
              <div 
                key={index} 
                className="flex items-center gap-3 bg-[#571244]/40 border border-white/10 rounded-[8px] py-3 px-5 transition-transform hover:translate-x-2 duration-300"
              >
                <span className="flex-shrink-0">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M13 2L3 14H12L11 22L21 10H12L13 2Z" fill="white" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </span>
                <span className="text-sm md:text-base font-medium">
                  {benefit}
                </span>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
};

export default Management;