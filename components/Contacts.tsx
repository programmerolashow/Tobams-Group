import React from "react";
import Image from "next/image";
import { Mail, Phone } from "lucide-react";
import { Linkedin, Instagram, Twitter } from "./icons/BrandIcons";

const Contacts = () => {
  return (
    <section className="bg-[#11040E] text-white">
      {/* CTA SECTION */}
      <div className="border-b border-white/70 px-6 md:px-16 py-12 flex flex-col md:flex-row items-center justify-between gap-6">
        <div>
          <p className="text-sm font-normal text-white/70 mb-2">
            Ready to be a part of something extraordinary?
          </p>
          <h2 className="text-2xl md:text-3xl font-semibold">
            Let’s work together to create a difference
          </h2>
        </div>

        <button className="bg-[#571244] hover:bg-[#d73746] transition px-6 py-3 rounded-md text-sm font-medium">
          Get In Touch
        </button>
      </div>

      {/* MAIN FOOTER */}
      <div className="px-6 md:px-16 py-14 grid grid-cols-1 md:grid-cols-5 gap-10">
        {/* LEFT: BRAND */}
        <div className="md:col-span-2">
          <Image
            src="/Tobams-logo.png"
            alt="Tobams Group Logo"
            width={160}
            height={40}
            className="mb-6"
          />
          <p className="text-sm text-white leading-relaxed mb-6 max-w-sm">
            Tobams Group is an innovative consultancy firm reshaping the future of tech talent development in Africa, specializing in talent acquisition, internships, and skill development with a global perspective.
          </p>

          {/* SOCIALS */}
          <div className="flex gap-4">
            <div className="w-9 h-9 flex items-center justify-center rounded-full bg-white hover:bg-white/90 cursor-pointer">
              <Linkedin size={16} color="#11040E" />
            </div>
            <div className="w-9 h-9 flex items-center justify-center rounded-full bg-white hover:bg-white/90 cursor-pointer">
              <Instagram size={16} color="#11040E" />
            </div>
            <div className="w-9 h-9 flex items-center justify-center rounded-full bg-white hover:bg-white/90 cursor-pointer">
              <Twitter size={16} color="#11040E" />
            </div>
          </div>
        </div>

        {/* WHAT WE DO */}
        <div>
          <h4 className="font-semibold mb-4">What We Do</h4>
          <ul className="space-y-2 text-sm text-white">
            <li>Sustainability Services</li>
            <li>Strategy Planning and Implementation</li>
            <li>Tech Talent Solutions</li>
            <li>Training and Development</li>
            <li>IT Consulting Services</li>
            <li>Social Impact</li>
            <li>Talent Recruitment</li>
          </ul>
        </div>

        {/* COMPANY */}
        <div>
          <h4 className="font-semibold mb-4">Company</h4>
          <ul className="space-y-2 text-sm text-white">
            <li>About</li>
            <li>Jobs</li>
            <li>Projects</li>
            <li>Our Founder</li>
            <li>Business Model</li>
            <li>The Team</li>
            <li>Contact Us</li>
            <li>Blog</li>
            <li>FAQs</li>
            <li>Testimonials</li>
          </ul>
        </div>

        {/* SOLUTIONS */}
        <div>
          <h4 className="font-semibold mb-4">Solution</h4>
          <ul className="space-y-2 text-sm text-white">
            <li>Tobams Group Academy</li>
            <li>Help a Tech Talent</li>
            <li>Campus Ambassadors Program</li>
            <li>Join Our Platform</li>
            <li>Pricing</li>
            <li>Book a Consultation</li>
            <li>Join Our Slack Community</li>
          </ul>
        </div>
      </div>

      {/* CONTACT STRIP */}
      <div className="px-6 md:px-16 pb-12">
        {/* Dark background container to match the image */}
        <div className="bg-[#1A0314] rounded-lg p-8 md:p-10">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">

            {/* LEFT SECTION: Registered Offices (Spans 8 columns) */}
            <div className="md:col-span-8 order-2 md:order-1">
              <h5 className="text-white font-bold text-lg mb-6">Registered Offices</h5>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* UNITED KINGDOM */}
                <div className="pr-4">
                  <h6 className="text-[#EF4353] font-semibold text-sm mb-2">United Kingdom</h6>
                  <p className="text-white/80 text-xs leading-relaxed">
                    07451196 (Registered by Company House) <br />
                    Vine Cottages, 215 North Street, Romford, Essex, United Kingdom, RM1 4QA
                  </p>
                </div>

                {/* NIGERIA - Vertical divider visible only on desktop */}
                <div className="md:border-l border-white/10 md:pl-10">
                  <h6 className="text-[#EF4353] font-semibold text-sm mb-2">Nigeria</h6>
                  <p className="text-white/80 text-xs leading-relaxed">
                    RC 1048722 (Registered by the Corporate Affairs Commission) <br />
                    4, Muaz Close, Angwar-Rimi
                  </p>
                </div>
              </div>
            </div>

            {/* RIGHT SECTION: Contact Info (Spans 4 columns) */}
            <div className="md:col-span-4 md:border-l border-white/10 md:pl-10 h-full order-1 md:order-2">
              <h5 className="text-white font-bold text-lg mb-6">Contact Information</h5>

              <div className="space-y-4">
                <div className="flex items-center gap-3 text-white/90 text-sm">
                  <Mail size={18} className="text-[#EF4353] fill-[#EF4353]/10" />
                  <span>theteam@tobamsgroup.com</span>
                </div>

                <div className="flex items-center gap-3 text-white/90 text-sm">
                  <Phone size={18} className="text-[#EF4353] fill-[#EF4353]/10" />
                  <span>+447886600748</span>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>

      {/* BOTTOM BAR */}
      <div className="border-t border-white/10 px-6 md:px-16 py-6 flex flex-col-reverse md:flex-row justify-between items-center gap-4 text-xs text-white">
        <p className="opacity-80">Copyright © Tobams Group, 2024. All rights reserved.</p>

        <div className="flex flex-wrap justify-center gap-6">
          <span className="underline md:no-underline hover:text-white cursor-pointer transition-colors">
            Terms and Conditions
          </span>
          <span className="underline md:no-underline hover:text-white cursor-pointer transition-colors">
            Privacy Policy
          </span>
          <span className="underline md:no-underline hover:text-white cursor-pointer transition-colors">
            Cookies Policy
          </span>
        </div>
      </div>
    </section>
  );
};

export default Contacts;