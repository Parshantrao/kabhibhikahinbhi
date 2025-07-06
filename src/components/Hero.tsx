import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/autoplay';
import img1 from '../assets/images/DSCN1223.JPG';
import img2 from '../assets/images/Laxmangarh.jpg';
import img4 from '../assets/images/sunset.jpg';

const Hero = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="relative h-screen w-full overflow-hidden text-white font-sans">

      {/* ===== Carousel Background ===== */}
      <Swiper
        modules={[Autoplay]}
        autoplay={{ delay: 5000, disableOnInteraction: false }}
        loop={true}
        slidesPerView={1}
        allowTouchMove={false}
        className="absolute inset-0 z-0 pointer-events-none"
      >
        {[img1, img2, img4].map((img, idx) => (
          <SwiperSlide key={idx}>
            <img
              src={img}
              alt={`Slide ${idx + 1}`}
              className="w-full h-screen object-cover"
            />
          </SwiperSlide>
        ))}
      </Swiper>

      {/* ===== Dark Overlay ===== */}
      <div className="absolute inset-0 bg-black bg-opacity-50 z-10 pointer-events-none" />

      {/* ===== Navigation Bar ===== */}
      <nav className="absolute top-0 left-0 right-0 px-6 py-4 z-30">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-md">
              <span className="text-blue-900 font-bold text-xl">TR</span>
            </div>
            <span className="text-white font-semibold text-xl tracking-wide">Kabhi Bhi Kahi Bhi</span>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-6 font-medium text-lg">
            <a href="#home" className="hover:text-yellow-400 transition">Home</a>
            <a href="#about" className="hover:text-yellow-400 transition">About</a>
            <a href="#gallery" className="hover:text-yellow-400 transition">Gallery</a>
            <a href="#testimonials" className="hover:text-yellow-400 transition">Reviews</a>
            <a href="#contact" className="hover:text-yellow-400 transition">Contact</a>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-white"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu Dropdown */}
        {isMenuOpen && (
          <div className="md:hidden mt-2 bg-black bg-opacity-80 rounded-lg p-4 space-y-4">
            <a href="#home" className="block hover:text-yellow-400">Home</a>
            <a href="#about" className="block hover:text-yellow-400">About</a>
            <a href="#gallery" className="block hover:text-yellow-400">Gallery</a>
            <a href="#testimonials" className="block hover:text-yellow-400">Reviews</a>
            <a href="#contact" className="block hover:text-yellow-400">Contact</a>
          </div>
        )}
      </nav>

      {/* ===== Hero Content ===== */}
      <div className="relative z-20 flex items-center justify-center h-full px-4">
        <div className="text-center max-w-3xl">
          <h1 className="text-4xl md:text-6xl font-extrabold leading-tight mb-6 drop-shadow-lg">
            Discover the Magic of <br />
            <span className="text-yellow-400">Incredible India</span>
          </h1>
          <p className="text-lg md:text-2xl text-blue-100 mb-8 drop-shadow">
            From majestic mountains to spiritual rivers, immerse yourself in timeless adventures and vibrant culture.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <button className="bg-yellow-400 hover:bg-yellow-500 text-blue-900 font-bold py-3 px-6 rounded-full text-lg shadow-md transition">
              Start Your Journey
            </button>
            <button className="border-2 border-white text-white hover:bg-white hover:text-blue-900 font-bold py-3 px-6 rounded-full text-lg transition">
              View Packages
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
