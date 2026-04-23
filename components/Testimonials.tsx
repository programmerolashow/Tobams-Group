"use client";

import React, { useRef } from 'react';

const TestimonialCard = ({ name, role, text, avatar }: { name: string, role: string, text: string, avatar: string }) => (
  <div className="flex-shrink-0 w-[85vw] md:w-[413px] bg-white rounded-[16px] p-8 shadow-sm border-l-[4px] border-[#EF4353] flex flex-col justify-between transition-all hover:shadow-md h-full">
    <div>
      <div className="flex items-center gap-4 mb-6">
        <div className="w-12 h-12 rounded-full overflow-hidden border border-gray-100 flex-shrink-0">
          <img src={avatar} alt={name} className="w-full h-full object-cover" />
        </div>
        <div className="flex flex-col">
          <h4 className="font-bold text-[#1A1A1A] text-sm md:text-[15px] leading-tight">{name}</h4>
          <p className="text-gray-400 text-[10px] md:text-[11px] font-medium leading-tight mt-1">{role}</p>
        </div>
      </div>
      <p className="text-[#4B5563] text-sm md:text-[15px] leading-[1.6] font-normal">
        {text}
      </p>
    </div>
  </div>
);

const Testimonials = () => {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const { scrollLeft, clientWidth } = scrollRef.current;
      const scrollTo = direction === 'left' 
        ? scrollLeft - (clientWidth * 0.8) 
        : scrollLeft + (clientWidth * 0.8);
      
      scrollRef.current.scrollTo({ left: scrollTo, behavior: 'smooth' });
    }
  };

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
      text: "The Creative and Digital Media services at Tobams Group brought our ideas to life. Simple, creative, and impactful – exactly what we needed for our projects.",
      avatar: "/Zoe-Mantis.jpg"
    },
    {
      name: "Zoe Mantis",
      role: "Founder, Alpha Group",
      text: "Tobams Group's Digital Marketing tips transformed my small business. Their guidance is simple, effective, and perfect for anyone looking to grow online.",
      avatar: "/Zoe-Mantis.jpg"
    },
    {
      name: "Zoe Mantis",
      role: "Founder, Alpha Group",
      text: "As an IT professional, Tobams Group's Tech Talent Development program sharpened my skills. The hands-on approach and mentorship are invaluable",
      avatar: "/Zoe-Mantis.jpg"
    }
  ];

  return (
    <section className="bg-white py-20 overflow-hidden">
      <div className="max-w-[1440px] mx-auto">
        
        <h2 className="font-bold text-3xl md:text-[40px] text-[#1A1A1A] text-center mb-16">
          Testimonials
        </h2>

        {/* Scrollable container with padding-left to match heading start point */}
        <div 
          ref={scrollRef}
          className="flex flex-row gap-6 overflow-x-auto no-scrollbar scroll-smooth pb-10 pl-6 md:pl-16 pr-6 md:pr-16"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {data.map((item, index) => (
            <TestimonialCard key={index} {...item} />
          ))}
        </div>

        {/* Controls Container matched to the right edge of page content */}
        <div className="max-w-[1440px] mx-auto px-6 md:px-16 flex justify-end gap-3 mt-4">
          <button 
            onClick={() => scroll('left')}
            className="w-10 h-10 rounded-lg bg-[#FDE7EB] flex items-center justify-center text-[#EF4353] hover:bg-[#fbc2cc] transition-colors active:scale-95"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
              <path d="M15 18l-6-6 6-6" />
            </svg>
          </button>
          <button 
            onClick={() => scroll('right')}
            className="w-10 h-10 rounded-lg bg-[#FDE7EB] flex items-center justify-center text-[#EF4353] hover:bg-[#fbc2cc] transition-colors active:scale-95"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
              <path d="M9 18l6-6-6-6" />
            </svg>
          </button>
        </div>

      </div>
    </section>
  );
};

export default Testimonials;