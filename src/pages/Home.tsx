
import AboutUs from '../components/AboutUs';
import WhyChooseUs from '../components/WhyChooseUs';
import { PricingSection } from '../components/ui/pricing';
import CostCalculator from '../components/CostCalculator';
import StaggerTestimonials from '../components/StaggerTestimonials';
import DecorativeLines from '../components/DecorativeLines';

const Home = () => {
    return (
        <>
            <section className="relative w-full h-screen overflow-hidden">
                {/* Desktop video */}
                <video
                    className="absolute inset-0 w-full h-full object-cover hidden md:block"
                    autoPlay
                    loop
                    muted
                    playsInline
                >
                    <source src="/Video Project 6_Precise_Starlight_Fast_2.webm" type="video/webm" />
                    <source src="/Video Project 6_Precise_Starlight_Fast_2.mp4" type="video/mp4" />
                </video>
                {/* Mobile portrait video */}
                <video
                    className="absolute inset-0 w-full h-full object-cover block md:hidden"
                    autoPlay
                    loop
                    muted
                    playsInline
                >
                    <source src="/Flow_delpmaspu_.webm" type="video/webm" />
                    <source src="/Flow_delpmaspu_.mp4" type="video/mp4" />
                </video>
            </section>
            <DecorativeLines>
                <AboutUs />
                <WhyChooseUs />
                <PricingSection />
                <CostCalculator />
                <StaggerTestimonials />
            </DecorativeLines>
        </>
    );
};

export default Home;
