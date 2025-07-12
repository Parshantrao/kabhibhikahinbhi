
import Hero from "@/components/Hero";
import AboutUs from "@/components/AboutUs";
import ImageGallery from "@/components/ImageGallery";
import Testimonials from "@/components/Testimonials";
import QueryForm from "@/components/QueryForm";
import Footer from "@/components/Footer";

const Index = () => {
  
  return (
    <div className="min-h-screen bg-white">
      <Hero />
      <ImageGallery />
      <AboutUs />
      <Testimonials />
      <QueryForm />
      <Footer />
    </div>
  );
};

export default Index;
