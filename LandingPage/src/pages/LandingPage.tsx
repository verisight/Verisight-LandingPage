import { DownloadChrome } from "@/components/DownloadChrome";
import { Feature } from "@/components/Feature";
import { Footer } from "@/components/Footer";
import { Hero } from "@/components/Hero";
import { Navbar } from "@/components/Navbar";
import { ScrollToTop } from "@/components/ScrollToTop";
import { SignupNow } from "@/components/SignupNow";
import { Team } from "@/components/Team";
import "../App.css";

const LandingPage = () => {
  return (
    <>
      {/* <Loader/> */}
      <Navbar />
      <Hero />
      <DownloadChrome />
      <Feature />
      <SignupNow />
      <Team />
      {/* <Features />
      <Services />
      <Cta />
      <Testimonials />
      <Team />
      <Pricing />
      <Newsletter />
      <FAQ /> */}
      <Footer />
      <ScrollToTop />
    </>
  );
};

export default LandingPage;
