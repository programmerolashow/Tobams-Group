import Image from 'next/image';

const Hero = () => {
    return (
        <section className="relative w-full h-[500px] md:h-[600px] flex items-center justify-center text-center px-6 overflow-hidden">
            {/* Background Image with next/image optimization */}
            <Image
                src="/hero-image.jpg"
                alt="Training and Development Background"
                fill
                priority
                className="object-cover"
            />

            {/* Dark Overlay */}
            <div className="absolute inset-0 bg-black/70" />

            {/* Content */}
            <div className="relative z-10 max-w-4xl">
                <span className="inline-block px-4 py-1 md:px-6 md:py-1.5 rounded-full bg-white/10 backdrop-blur-md text-white text-[10px] md:text-xs uppercase tracking-widest mb-4 md:mb-6 border border-white/20">
                    What we do
                </span>

                <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold text-white mb-4 md:mb-6 leading-tight">
                    Learning and Development
                </h1>

                <p className="w-full max-w-[1077px] font-['Nunito_Sans'] text-sm md:text-[18px] leading-relaxed md:leading-[1.5] text-center text-[#FFFFFF] opacity-90 mx-auto">
                   Our comprehensive range of programs and resources is designed to enhance skills, broaden knowledge, and propel careers forward in today's ever-evolving landscape.
                </p>

                <button className="bg-[#571244] text-white px-6 py-2.5 md:px-8 md:py-3 rounded-md font-medium hover:bg-opacity-90 transition-all mt-8 md:mt-10">
                    Book a Consultation
                </button>
            </div>
        </section>
    );
};

export default Hero;