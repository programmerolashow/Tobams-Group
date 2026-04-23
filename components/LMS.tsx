import Image from "next/image";
import { ArrowUpRight } from "lucide-react";

const LMS = () => {
  const courses = [
    "Business Analysis",
    "Design Thinking",
    "Effective Communication",
    "Entrepreneurship",
    "Career Development",
    "Business Model",
  ];

  return (
    <section className="bg-white py-[40px] overflow-hidden">
      {/* FULL WIDTH CONTAINER */}
      <div className="w-full bg-[#F1E9F0] flex flex-col lg:flex-row items-center gap-8 lg:gap-12 px-6 md:px-16 py-12">
        
        {/* Mobile Title - Visible only on mobile/tablet */}
        <h2 className="text-3xl font-bold text-[#571244] lg:hidden text-center mb-2">
          Learning Management System
        </h2>

        {/* LEFT: IMAGE */}
        <div className="flex justify-center lg:justify-start w-full lg:w-1/2">
          <div className="relative w-[300px] sm:w-[450px] lg:w-[556.88px] h-[330px] sm:h-[500px] lg:h-[568px] overflow-hidden rounded-full lg:rounded-[357.57px] shadow-sm">
            <Image
              src="/lms-image.jpg"
              alt="LMS Professional Team"
              fill
              className="object-cover"
            />
          </div>
        </div>

        {/* RIGHT: CONTENT */}
        <div className="flex flex-col gap-6 w-full lg:w-1/2 px-0 lg:px-0">
          {/* Desktop Title - Visible only on large screens */}
          <h2 className="hidden lg:block text-3xl md:text-4xl font-bold text-[#571244]">
            Learning Management System
          </h2>

          <div className="bg-[#E6D5E0]/60 p-6 md:p-8 rounded-xl">
            <p className="text-black leading-relaxed mb-6 text-sm md:text-base">
              TG Academy is a hub of knowledge and skill-building resources designed to empower tech talents on their learning journey. From technical courses covering the latest programming languages and development frameworks to soft skills training in leadership, effective communication and project management, TG Academy offers a wide range of courses to cater to diverse learning needs. With accessible and interactive learning materials, individuals can enhance their skills and stay ahead in today's competitive tech landscape.
            </p>

            <h3 className="text-[#571244] font-bold mb-4">
              Some of our courses include:
            </h3>

            <ul className="grid grid-cols-1 md:grid-cols-3 gap-y-3 gap-x-2">
              {courses.map((course, index) => (
                <li key={index} className="flex items-center gap-2 text-[13px] text-gray-800">
                  <span className="w-1.5 h-1.5 bg-black rounded-full" />
                  {course}
                </li>
              ))}
            </ul>

            {/* Mobile/Tablet Button: Inside the card */}
            <button className="lg:hidden mt-5 flex items-center justify-center gap-2 bg-[#571244] text-white px-8 py-3 rounded-md w-fit font-medium hover:bg-opacity-90 transition-all">
              Learn More
              <ArrowUpRight size={18} />
            </button>
          </div>

          {/* Desktop Button: Outside the card */}
          <button className="hidden lg:flex items-center justify-center gap-2 bg-[#571244] text-white px-8 py-3 rounded-md w-fit font-medium hover:bg-opacity-90 transition-all mt-5">
            Learn More
            <ArrowUpRight size={18} />
          </button>
        </div>
      </div>
    </section>
  );
};

export default LMS;