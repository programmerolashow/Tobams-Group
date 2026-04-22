import React from 'react';

const Testimonials = () => {
  const consultantFeatures = [
    {
      title: "Expert-Led Learning",
      desc: "Gain insight from seasoned professionals in the field as they mentor you through the subtleties of business analysis."
    },
    {
      title: "Interactive Workshops",
      desc: "Engage in hands-on workshops designed to enhance your training capabilities and provide practical insights."
    },
    {
      title: "Comprehensive Curriculum",
      desc: "Access a robust curriculum that covers fundamental principles and advanced methodologies, ensuring a well-rounded understanding."
    },
    {
      title: "Global Recognition",
      desc: "You will attain a globally recognized certification, opening doors to new career opportunities and industry recognition."
    }
  ];

  const testimonials = [
    {
      name: "Aisha Yusuf",
      role: "Founder, CraftHub NG",
      text: "Working with Tobams Group on our website was a breeze. They understood our vision and transformed it into a beautiful online space. Highly recommend their Website Design service!",
      avatar: "/api/placeholder/40/40"
    },
    {
      name: "John Davies",
      role: "Marketing Manager, E-Commerce Emporium",
      text: "Tobams Group's Digital Marketing strategies gave our brand the boost it needed. Simple yet powerful techniques that delivered tangible results. A pleasure to collaborate with!",
      avatar: "/api/placeholder/40/40"
    },
    {
      name: "Chinonso Nwankwo",
      role: "HR Director, FutureTech Solutions",
      text: "Tobams Group has been instrumental in our talent acquisition journey. Their Tech Talent Solution service consistently connects us with the right professionals. Reliable and straightforward.",
      avatar: "/api/placeholder/40/40"
    }
  ];

  return (
    <div className="bg-[#F9F9F9] min-h-screen">
      
      {/* 1. Training The Consultant Section */}
      <section className="max-w-[1440px] mx-auto py-16 px-6 md:px-16">
        <h1 className="font-['Montserrat'] font-bold text-4xl text-[#571244] mb-2">Training The Consultant</h1>
        <p className="text-[#571244] font-semibold text-sm mb-6">Maximise Your Potential as a Certified Trainer:</p>
        <p className="text-gray-600 mb-10 max-w-[1200px] leading-relaxed">
          With the help of our Training Consultants program, take a revolutionary step toward becoming a distinguished certified training consultant. 
          Learn from professionals in the field, immerse yourself in a thorough curriculum, and hone your training methods through interactive workshops.
        </p>

        <div className="bg-[#571244] rounded-[12px] p-10 grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-10 text-white">
          {consultantFeatures.map((f, i) => (
            <div key={i} className="space-y-2">
              <h3 className="font-bold text-lg">{f.title}</h3>
              <p className="text-gray-200 text-sm leading-relaxed">{f.desc}</p>
            </div>
          ))}
        </div>

        <button className="mt-8 flex items-center gap-2 bg-[#571244] text-white py-3 px-6 rounded-[8px] font-medium hover:bg-[#450e36] transition-all">
          Learn More <span className="rotate-45">↑</span>
        </button>
      </section>

      {/* 2. CTA Banner */}
      <section className="max-w-[1440px] mx-auto px-6 md:px-16 mb-20">
        <div className="bg-[#571244] rounded-[12px] p-12 text-center border-[3px] border-purple-400">
          <h2 className="text-white text-xl md:text-2xl mb-8 font-medium">
            Want to accelerate professional growth and development at your organisation?<br/>
            See how we can help.
          </h2>
          <button className="bg-white text-[#571244] font-bold py-3 px-8 rounded-[8px] hover:bg-gray-100 transition-colors">
            Book a Consultation
          </button>
        </div>
      </section>

      {/* 3. Testimonials Section */}
      <section className="max-w-[1440px] mx-auto pb-20 px-6 md:px-16">
        <h2 className="font-['Montserrat'] font-bold text-4xl text-center text-[#1A1A1A] mb-12">Testimonials</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <div key={i} className="bg-white p-8 rounded-[16px] shadow-sm border-l-4 border-red-400 flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-4 mb-6">
                  <img src={t.avatar} alt={t.name} className="w-12 h-12 rounded-full object-cover" />
                  <div>
                    <h4 className="font-bold text-[#1A1A1A] text-sm">{t.name}</h4>
                    <p className="text-gray-500 text-xs">{t.role}</p>
                  </div>
                </div>
                <p className="text-gray-600 text-sm leading-relaxed italic">"{t.text}"</p>
              </div>
            </div>
          ))}
        </div>

        {/* Slider Controls */}
        <div className="flex justify-end gap-3 mt-10">
          <button className="w-10 h-10 rounded-lg bg-pink-100 flex items-center justify-center text-[#571244] hover:bg-pink-200 transition-colors">
            ‹
          </button>
          <button className="w-10 h-10 rounded-lg bg-pink-100 flex items-center justify-center text-[#571244] hover:bg-pink-200 transition-colors">
            ›
          </button>
        </div>
      </section>

    </div>
  );
};

export default Testimonials;