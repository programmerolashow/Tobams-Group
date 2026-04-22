import Image from 'next/image';
import { ArrowUpRight } from 'lucide-react';

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
        <section className="bg-[#FDF2F4] py-16 md:py-24 px-4 overflow-hidden">
            <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

                {/* Left Side: Circular Image */}
                <div className="relative flex justify-center lg:justify-start">
                    <div className="relative w-[320px] h-[320px] md:w-[450px] md:h-[450px] overflow-hidden rounded-full border-8 border-white shadow-xl">
                        <Image
                            src="/lms-image.jpg" // Ensure you export this from Figma
                            alt="LMS Professional Team"
                            fill
                            className="object-cover"
                        />
                    </div>
                </div>

                {/* Right Side: Content */}
                <div className="flex flex-col gap-6">
                    <h2 className="text-3xl md:text-4xl font-bold text-[#3F103F]">
                        Learning Management System
                    </h2>

                    <div className="bg-[#E6D5E0]/40 p-8 rounded-xl border border-[#3F103F]/5">
                        <p className="text-gray-700 leading-relaxed mb-6 text-sm md:text-base">
                            TG Academy is a hub of knowledge and skill-building resources designed to
                            empower tech talents on their learning journey. From technical courses
                            covering the latest programming languages and development frameworks to
                            soft skills training in leadership, effective communication and project
                            management. TG Academy offers a wide range of courses to cater to diverse
                            learning needs.
                        </p>

                        <h3 className="text-[#3F103F] font-bold mb-4">Some of our courses include:</h3>

                        {/* 2-Column List for Mobile/Desktop */}
                        <ul className="grid grid-cols-1 md:grid-cols-2 gap-y-3 gap-x-4">
                            {courses.map((course, index) => (
                                <li key={index} className="flex items-center gap-2 text-sm text-gray-800">
                                    <span className="w-1.5 h-1.5 bg-[#3F103F] rounded-full" />
                                    {course}
                                </li>
                            ))}
                        </ul>
                    </div>

                    <button className="flex items-center justify-center gap-2 bg-[#3F103F] text-white px-8 py-3 rounded-md w-fit font-medium hover:bg-opacity-90 transition-all">
                        Learn More
                        <ArrowUpRight size={18} />
                    </button>
                </div>
            </div>
        </section>
    );
};

export default LMS;