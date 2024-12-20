import About from "@/components/Home/About";
import Footer from "@/components/Home/Footer";
import HeroSection from "@/components/Home/HeroSection";
import Projects from "@/components/Home/Projects";
import Scroll from "@/components/Home/Scroll";
import TechStack from "@/components/Home/TechStack";


export default function Home() {
  return (
    <>
    <HeroSection/>
    <About/>
    <Projects/>
    <TechStack/>
    <Footer/>
    {/* <Scroll/> */}
    </>
  );
}
