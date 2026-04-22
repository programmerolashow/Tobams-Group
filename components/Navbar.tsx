import Image from 'next/image';
import Link from 'next/link';
import { ChevronDown } from 'lucide-react';

const Navbar = () => {
    return (
        <nav className="w-full bg-white border-b border-gray-100">
            {/* Top Bar: Logo and Buttons */}
            <div className="flex flex-row w-full max-w-[1440px] h-[104px] border-b border-gray-200 justify-between pt-6 pb-6 pr-16 pl-16 items-center">
                <div className="relative w-[165.71429443359375px] h-[64px]">
                    <Image
                        src="/Tobams-logo.png" // Replace with actual logo path
                        alt="Tobams Group"
                        fill
                        className="object-contain"
                    />
                </div>

                <div className="flex items-center gap-6 h-[48px]">
                    <button className="flex flex-row items-center w-fit h-fit rounded-[4px] border border-[#571244] bg-[#571244] py-2 px-4 gap-3 text-white bg-tobams-dark">
                        <span className="flex flex-row items-center justify-center w-8 h-8 rounded-full bg-[#DDD0DA] gap-[2.67px]">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="#571244" className="size-5">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
                            </svg>
                        </span>
                        Account
                        <ChevronDown size={16} />
                    </button>
                    <button className="flex flex-row items-center w-fit h-fit rounded-[4px] bg-[#EF4353] pt-[10.5px] pb-[10.5px] px-5 gap-[10px] text-white bg-tobams-red">
                        Take Assessment
                    </button>
                </div>
            </div>

            <hr />

            {/* Navigation Links */}
            <div className="max-w-7xl mx-auto px-1 py-2 flex items-center justify-center gap-[32px] text-sm font-medium text-gray-600">
                <Link href="#" className="text-tobams-dark border-b-2 border-tobams-dark pb-1">About</Link>
                <Link href="#" className="flex items-center gap-1 hover:text-tobams-dark">What We Do <ChevronDown size={14} /></Link>
                <Link href="#" className="flex items-center gap-1 hover:text-tobams-dark">Jobs <ChevronDown size={14} /></Link>
                <Link href="#">Projects</Link>
                <Link href="#">TG Academy</Link>
                <Link href="#">Strategic Partnership</Link>
                <Link href="#">Pricing</Link>
                <Link href="#">Book a Consultation</Link>
            </div>
        </nav>
    );
};

export default Navbar;