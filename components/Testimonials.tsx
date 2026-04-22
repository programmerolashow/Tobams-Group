import React from 'react';

const TestimonialCard = ({ name, role, text, avatar }: { name: string, role: string, text: string, avatar: string }) => (
  <div className="flex-shrink-0 w-full md:w-[400px] bg-white rounded-[16px] p-8 shadow-sm border-l-[3px] border-[#EF4353] flex flex-col justify-between transition-all hover:shadow-md">
    <div>
      {/* Header: Avatar & Info */}
      <div className="flex items-center gap-4 mb-6">
        <div className="w-12 h-12 rounded-full overflow-hidden border border-gray-100 flex-shrink-0">
          <img src={avatar} alt={name} className="w-full h-full object-cover" />
        </div>
        <div className="flex flex-col">
          <h4 className="font-bold text-[#1A1A1A] text-sm md:text-base leading-tight">{name}</h4>
          <p className="text-gray-400 text-[11px] md:text-xs font-medium uppercase tracking-wider">{role}</p>
        </div>
      </div>

      {/* Testimonial Body */}
      <p className="text-gray-600 text-sm md:text-base leading-[1.6] font-normal">
        {text}
      </p>
    </div>
  </div>
);

const Testimonials = () => {
  const data = [
    {
      name: "Aisha Yusuf",
      role: "Founder, CraftHub NG",
      text: "Working with Tobams Group on our website was a breeze. They understood our vision and transformed it into a beautiful online space. Highly recommend their Website Design service!",
      avatar: "/Aisha-Yussuf.png"
    },
    {
      name: "John Davies",
      role: "Marketing Manager, E-Commerce Emporium",
      text: "Tobams Group's Digital Marketing strategies gave our brand the boost it needed. Simple yet powerful techniques that delivered tangible results. A pleasure to collaborate with!",
      avatar: "/John-Davies.png"
    },
    {
      name: "Chinonso Nwankwo",
      role: "HR Director, FutureTech Solutions",
      text: "Tobams Group has been instrumental in our talent acquisition journey. Their Tech Talent Solution service consistently connects us with the right professionals. Reliable and straightforward.",
      avatar: "/Chinonso-Nwakwo.png"
    },
    {
      name: "Zoe Mantis",
      role: "Founder, Alpha Group",
      text: "As an IT professional, Tobams Group's Tech Talent Development program sharpened my skills. The hands-on approach and mentorship are invaluable.",
      avatar: "/Zoe-Mantis.jpg"
    }
  ];

  return (
    <section className="bg-[#FDFDFD] py-20 px-6 md:px-16 overflow-hidden">
      <div className="max-w-[1440px] mx-auto">
        
        {/* Section Heading */}
        <h2 className="font-['Montserrat'] font-bold text-4xl md:text-5xl text-[#1A1A1A] text-center mb-16">
          Testimonials
        </h2>

        {/* Cards Container */}
        <div className="flex flex-col md:flex-row gap-6 justify-center items-stretch">
          {data.map((item, index) => (
            <TestimonialCard key={index} {...item} />
          ))}
        </div>

        {/* Slider Controls */}
        <div className="flex justify-center md:justify-end gap-3 mt-12">
          <button className="w-10 h-10 rounded-lg bg-[#FDE7EB] flex items-center justify-center text-[#EF4353] hover:bg-[#fbc2cc] transition-colors">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M15 18l-6-6 6-6" />
            </svg>
          </button>
          <button className="w-10 h-10 rounded-lg bg-[#FDE7EB] flex items-center justify-center text-[#EF4353] hover:bg-[#fbc2cc] transition-colors">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M9 18l6-6-6-6" />
            </svg>
          </button>
        </div>

      </div>
    </section>
  );
};

export default Testimonials;