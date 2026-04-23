import React from "react";

type TrainingProps = {
  title: string;
  description: string;
  items: string[];
  imageSrc: string;
  imageRight?: boolean;
};

const Training = ({
  title,
  description,
  items,
  imageSrc,
  imageRight = true,
}: TrainingProps) => {
  return (
    <div className="max-w-[1440px] mx-auto py-16">
      {/* Main Content Box */}
      <div
        className={`flex flex-col-reverse ${
          imageRight ? "md:flex-row" : "md:flex-row-reverse"
        } items-center justify-between gap-10 md:gap-[75px] p-6 md:p-[30px]`}
      >
        {/* Text Content */}
        <div className="flex-1 flex flex-col justify-between space-y-6"> 
          <div className="space-y-6">
            <h2 className="font-bold text-3xl md:text-4xl text-[#1A1A1A]">
              {title}
            </h2>

            <p className="text-gray-600 leading-relaxed text-base md:text-lg">
              {description}
            </p>
          </div>

          <ul className="space-y-4 pt-2 pl-4 md:pl-10">
            {items.map((item, index) => (
              <li key={index} className="flex items-start gap-3 group">
                <span className="mt-1 flex-shrink-0">
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                  >
                    <path
                      d="M13 2L3 14H12L11 22L21 10H12L13 2Z"
                      fill="#571244"
                      stroke="#571244"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </span>
                <span className="text-gray-700 font-medium group-hover:text-[#571244] transition-colors">
                  {item}
                </span>
              </li>
            ))}
          </ul>
        </div>

        {/* Image Content */}
        <div className="flex-1 w-full max-w-[612px]">
          <div
            className={`overflow-hidden shadow-xl ${
              imageRight
                ? "rounded-tl-[50px] rounded-tr-[10px] rounded-br-[10px] rounded-bl-[10px]"
                : "rounded-tr-[10px] rounded-tl-[50px] rounded-br-[10px] rounded-bl-[10px]"
            }`}
          >
            <img
              src={imageSrc}
              alt={title}
              className="w-full h-[400px] object-cover hover:scale-105 transition-transform duration-500"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default function TrainingPage() {
  const sections: TrainingProps[] = [
    {
      title: "Corporate Trainings",
      description:
        "Empower your team with our customised Corporate Training programs designed to address the unique needs and objectives of your organisation. Our expert facilitators work closely with your team to deliver tailored learning experiences that align with your company's goals and values.",
      items: [
        "Leadership Training",
        "Strategic Planning and Implementation",
        "Project Management",
        "Sustainability Training",
        "Customised Training",
      ],
      imageSrc: "/corporate.jpg",
      imageRight: true,
    },
    {
      title: "Personalised Individual Training",
      description:
        "Begin a journey of lifelong learning and professional development with Tobams Group's diverse range of training programs for individuals. From technical skills mastery to soft skills enhancement, our courses cover a wide spectrum of topics to meet the evolving needs of today's professionals.",
      items: [
        "Leadership Development",
        "Soft Skills Development",
        "Industry Specific Knowledge",
        "Technical Skills Enhancement",
        "Time Management and Productivity",
        "Career Development",
      ],
      imageSrc: "/personalised.jpg",
      imageRight: false,
    },
    {
      title: "Capacity Development",
      description:
        "At Tobams Group, we empower individuals and organizations through tailored training programs, expert-led workshops, and personalized mentorship. We are committed to your success and growth. We are dedicated to providing a comprehensive suite of benefits designed to foster your development and success:",
      items: [
        "Tailored Training Programs",
        "Expert-Led Workshops",
        "Personalized Mentorship",
        "Technical Skills Enhancement",
        "Collaborative Learning Environment",
        "Ongoing Support and Resources",
      ],
      imageSrc: "/capacity.jpg",
      imageRight: true,
    },
  ];

  return (
    <main className="bg-white min-h-screen">
      {sections.map((section, index) => (
        <Training key={index} {...section} />
      ))}
    </main>
  );
}