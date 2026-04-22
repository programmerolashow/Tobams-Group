import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import LMS from "@/components/LMS";
import Training from "@/components/Trainings";
import Management from "@/components/Management";

export default function Home() {
    return (
        <main className="min-h-screen bg-white">
            <Navbar />
            <Hero />
            <LMS />
            <Training />
            <Management />
        </main>
    );
}