import Image from 'next/image';

const Hero = () => {
    return (
        <section className="relative w-full h-[500px] flex items-center justify-center text-center px-4 overflow-hidden">
            <div className="absolute top-6 left-6 w-40 h-10 z-20">
                <Image
                    src="/Tobams-logo.png"
                    alt="Tobams Logo"
                    fill
                    priority
                    className="object-contain"
                />
            </div>
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
                <span className="inline-block px-6 py-1.5 rounded-full bg-white/10 backdrop-blur-md text-white text-xs uppercase tracking-widest mb-6 border border-white/20">
                    What we do
                </span>

                <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                    Training and Development
                </h1>

                <p className="text-gray-300 text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed">
                    Our comprehensive range of programs and resources is designed to enhance skills,
                    broaden knowledge, and propel careers forward in today&apos;s ever-evolving landscape.
                </p>

                <button className="bg-tobams-dark text-white px-8 py-3 rounded-md font-medium hover:bg-opacity-90 transition-all">
                    Book a Consultation
                </button>
            </div>
        </section>
    );
};

export default Hero;