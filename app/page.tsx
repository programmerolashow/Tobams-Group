import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import LMS from "@/components/LMS";
import Training from "@/components/Trainings";
import Management from "@/components/Management";
import Transformation from "@/components/Transformation";
import Consultant from "@/components/Consultant";
import Booking from "@/components/Booking"
import Testimonials from "@/components/Testimonials";

export default function Home() {
    return (
        <main className="min-h-screen bg-white">
            <Navbar />
            <Hero />
            <LMS />
            <Training />
            <Management />
            <Transformation />
            <Consultant />
            <Booking />
            <Testimonials />
        </main>
    );
}