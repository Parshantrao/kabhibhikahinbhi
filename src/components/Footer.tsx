import { MapPin, Phone, Mail, Instagram, Youtube } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center">
                <span className="text-white font-bold">TR</span>
              </div>
              <span className="text-xl font-bold">Kabhi Bhi Kahi Bhi</span>
            </div>
            <p className="text-gray-400 mb-6 max-w-md">
              Your trusted travel partner for authentic experiences across Uttarakhand, Himachal Pradesh, and Rajasthan.
              Explore with locals, uncover hidden gems, and create memories for a lifetime.
            </p>
            <div className="flex space-x-4">
              <a 
                href="https://www.instagram.com/kabhibhi_kahinbhi/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-pink-500 transition-colors"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a 
                href="https://www.youtube.com/@Kabhibhi_Kahinbhi" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-red-600 transition-colors"
              >
                <Youtube className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="#home" className="text-gray-400 hover:text-white transition-colors">Home</a></li>
              <li><a href="#about" className="text-gray-400 hover:text-white transition-colors">About Us</a></li>
              <li><a href="#gallery" className="text-gray-400 hover:text-white transition-colors">Gallery</a></li>
              <li><a href="#testimonials" className="text-gray-400 hover:text-white transition-colors">Reviews</a></li>
              <li><a href="#contact" className="text-gray-400 hover:text-white transition-colors">Contact</a></li>
            </ul>
          </div>

          {/* Focus States */}
          <div>
            <h3 className="text-lg font-semibold mb-4">We Specialize In</h3>
            <ul className="space-y-2">
              <li><span className="text-gray-400">Uttarakhand</span></li>
              <li><span className="text-gray-400">Himachal Pradesh</span></li>
              <li><span className="text-gray-400">Rajasthan</span></li>
            </ul>
          </div>
        </div>

        {/* Contact Info */}
        <div className="mt-8 pt-8 border-t border-gray-800">
          <div className="grid md:grid-cols-3 gap-6">
            <div className="flex items-center space-x-3">
              <MapPin className="w-5 h-5 text-blue-500" />
              <span className="text-gray-400">India (Gurgaon, Jhunjhunu)</span>
            </div>
            <div className="flex items-center space-x-3">
              <Phone className="w-5 h-5 text-blue-500" />
              <span className="text-gray-400">+91 9636410155, +91 9211342155</span>
            </div>
            <div className="flex items-center space-x-3">
              <Mail className="w-5 h-5 text-blue-500" />
              <span className="text-gray-400">support@kabhibhikahibhi.com</span>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-8 pt-8 border-t border-gray-800 text-center">
          <p className="text-gray-400">
            © 2025 Kabhi Bhi Kahi Bhi. All rights reserved. |
            <span className="ml-2">Made with ❤️ by passionate travel lovers</span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
