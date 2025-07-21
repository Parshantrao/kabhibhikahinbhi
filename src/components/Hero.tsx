import { useState } from "react";
import { Menu, X } from "lucide-react";
import img3 from '../assets/website wallpaper.jpg';
import img4 from '../assets/website wallpaper1.jpg';

const scrollToSection = (id: string, duration = 1500) => {
  const target = document.querySelector(id);
  if (!target) return;

  const start = window.pageYOffset;
  const end = (target as HTMLElement).offsetTop;
  const distance = end - start;
  let startTime: number | null = null;

  const easeInOutQuad = (t: number) =>
    t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t;

  const step = (timestamp: number) => {
    if (!startTime) startTime = timestamp;
    const timeElapsed = timestamp - startTime;
    const progress = Math.min(timeElapsed / duration, 1);
    const ease = easeInOutQuad(progress);
    window.scrollTo(0, start + distance * ease);

    if (timeElapsed < duration) {
      requestAnimationFrame(step);
    }
  };

  requestAnimationFrame(step);
};

const Hero = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div
      className="relative h-screen w-full bg-cover bg-center text-white font-sans"
      style={{ backgroundImage: `url(${img4})` }}
    >
      {/* ===== Dark Overlay ===== */}
      <div className="absolute inset-0 bg-black bg-opacity-50 z-10" />

      {/* ===== Navigation Bar ===== */}
      <nav className="absolute top-0 left-0 right-0 px-6 py-4 z-30">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="w-12 h-12 rounded-full flex items-center justify-center shadow-md">
              <img src="/logo1.png" alt="Logo" className="w-10 h-10" />
            </div>
            <span className="text-white font-semibold text-xl tracking-wide">
              Sktti Tours & Travels
            </span>
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
          <button className="md:hidden text-white" onClick={() => setIsMenuOpen(!isMenuOpen)}>
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
          <h1 className="text-4xl md:text-7xl font-extrabold leading-tight mb-6 drop-shadow-xl font-poppins animate-fade-in">
            Kabhi Bhi Kahin Bhi
          </h1>

          <div className="mb-8 text-xl md:text-3xl font-bold drop-shadow-lg text-yellow-300 animate-pulse">
            Welcome to Sktti Tours & Travels
          </div>

          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <button
              onClick={() => scrollToSection("#gallery", 1500)}
              className="bg-yellow-400 hover:bg-yellow-500 text-blue-900 font-bold py-3 px-6 rounded-full text-lg shadow-md transition"
            >
              Start Your Journey
            </button>

            <button
              onClick={() => scrollToSection("#contact", 1500)}
              className="border-2 border-white text-white hover:bg-white hover:text-blue-900 font-bold py-3 px-6 rounded-full text-lg transition"
            >
              Customise your Package
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
