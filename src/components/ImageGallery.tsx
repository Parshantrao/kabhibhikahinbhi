import { useState } from "react";

import RajasthanPkg from '../assets/Rajasthan tour packages.png'
import UttrakhandPkg from '../assets/Uttarakhand tour packages.png'
import HimachalPkg from '../assets/Himanchal Pradesh tour packages.png'
import img3 from '../assets/website wallpaper.jpg';
import { useNavigate } from "react-router-dom";

const ImageGallery = () => {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [showAll, setShowAll] = useState(false);
  const navigate = useNavigate();
  const images = [
    { id: 11, src: RajasthanPkg, category: 'uttarakhand', title: 'View Packages',url:"/rajasthan", location: 'Jaipur | Jodhpur | Jaisalmer | Udaipur | Others' },
    { id: 12, src: UttrakhandPkg, category: 'uttarakhand', title: 'View Packages',url:"/uttarakhand", location: 'Mussoorie | Rishikesh | Valley of Flowers | Chopta | Chakrata | Others' },
    { id: 13, src: HimachalPkg, category: 'uttarakhand', title: 'View Packages',url:"/himachal", location: 'Jibhi | Shimla | Bir Billing | Dalhousie | McLeod Ganj | Spiti | Others' },


  ];

  const categories = [
    { id: "all", name: "Destinations" },
    { id: "rajasthan", name: "Add your Destination" },
  ];

  const filteredImages = selectedCategory === "all"
    ? images 
    : images.filter(img => img.category === selectedCategory);

  return (
    <section id="gallery" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Breathtaking Destinations
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Explore the stunning landscapes and iconic landmarks that await you on your journey through India
          </p>

          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map(category => (
              <button
                key={category.id}
                onClick={
                  category.name === "Add your Destination"
                    ? () => {
                      setTimeout(() => {
                        document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" });
                      }, 200); // 200ms delay
                    }
                    : undefined // or another fallback handler
                }
                className={`px-6 py-3 rounded-full font-medium transition-colors ${selectedCategory === category.id
                    ? "bg-blue-600 text-white"
                    : "bg-gray-200 text-gray-700 hover:bg-gray-300"
                  }`}
              >
                {category.name}
              </button>

            ))}
          </div>
        </div>

        {/* Image Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredImages.map(image => (
            <div
              key={image.id}
              onClick={() => navigate(image.url)}
              className="group relative overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer"
            >
              <img
                src={image.src}
                alt={image.title}
                className="w-full h-64 object-fit group-hover:scale-110 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-4 left-4 text-white">
                  <h3 className="text-xl font-semibold mb-1">{image.title}</h3>
                  <p className="text-sm text-gray-200">{image.location}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
        {selectedCategory === "all" && images.length > 6 && !showAll && (
          <div className="flex justify-center mt-8">
            <button
              onClick={() => setShowAll(true)}
              className="px-8 py-3 rounded-full bg-blue-600 text-white font-semibold shadow-lg hover:bg-blue-700 transition-colors"
            >
              See All
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default ImageGallery;
