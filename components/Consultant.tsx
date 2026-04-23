import React from 'react';

const Consultant = () => {
  const features = [
    {
      title: "Expert-Led Learning",
      description: "Gain insight from seasoned professionals in the field as they mentor you through the subtleties of business analysis."
    },
    {
      title: "Interactive Workshops",
      description: "Engage in hands-on workshops designed to enhance your training capabilities and provide practical insights."
    },
    {
      title: "Comprehensive Curriculum",
      description: "Access a robust curriculum that covers fundamental principles and advanced methodologies, ensuring a well-rounded understanding."
    },
    {
      title: "Global Recognition",
      description: "You will attain a globally recognized certification, opening doors to new career opportunities and industry recognition."
    }
  ];

  return (
    <div className="min-h-screen bg-[#F9F9F9] flex items-center justify-center pt-6">
      {/* Main Container */}
      <div className="flex flex-col w-full max-w-full h-fit bg-[#571244]/10 py-12 px-6 md:px-16 gap-6">

        {/* Header Section */}
        <div className="mb-12">
          <h1 className="font-bold text-3xl md:text-5xl text-[#571244] mb-4 leading-tight">
            Training The Consultant
          </h1>
          <p className="text-[#571244] font-semibold text-sm md:text-base mb-8">
            Maximise Your Potential as a Certified Trainer:
          </p>
          <p className="text-black leading-relaxed text-sm md:text-base max-w-[1200px]">
            With the help of our Training Consultants program, take a revolutionary step toward becoming a distinguished certified training consultant. Learn from professionals in the field, immerse yourself in a thorough curriculum, and hone your training methods through interactive workshops. Participating in our program will enable you to gain expertise in diverse courses while also developing the abilities to mentor and encourage others in their career advancement.
          </p>
        </div>

        {/* Feature Grid Box */}
        <div className="bg-[#571244] rounded-[12px] p-8 md:p-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-12 text-white">
            {features.map((feature, index) => (
              <div key={index} className="space-y-3">
                <h3 className="font-bold text-lg md:text-xl">
                  {feature.title}
                </h3>
                <p className="text-gray-200 text-sm md:text-base leading-relaxed font-light">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Learn More Button */}
        <button className="mt-10 flex items-center justify-center gap-2 bg-[#571244] text-white w-fit py-3 px-8 rounded-[8px] font-semibold hover:bg-[#450e36] transition-all group">
          Learn More
          <svg
            className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform"
            width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M7 17L17 7M17 7H7M17 7V17" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>

      </div>
    </div>
  );
};

export default Consultant;