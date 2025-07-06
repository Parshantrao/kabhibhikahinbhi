import { useState } from "react";
import imgDSCN1223 from '../assets/images/DSCN1223.JPG';
import imgLaxmangarh from '../assets/images/Laxmangarh.jpg';
import imgSunset from '../assets/images/sunset.jpg';
import imgRj1 from '../assets/images/rj1.jpg';
import imgChirag from '../assets/images/chirag.JPG';
import imgInditales from '../assets/images/Places To See In Jhunjhunu Shekhawati Region Of Rajasthan - Inditales (1).jpg';
import imgHimch1 from '../assets/images/himch1.jpeg';
import imgHimch2 from '../assets/images/himch2.jpeg';
import imgHimch3 from '../assets/images/himch3.jpeg';
import imgHimch4 from '../assets/images/himch4.jpeg';
import imgUttr1 from '../assets/images/uttr1.jpeg';
import imgUttr2 from '../assets/images/uttr2.jpeg';
import imgUttr3 from '../assets/images/uttr3.jpeg';
// import imgUttr4 from '../assets/images/uttr4.HEIC';
// import imgIMG2167 from '../assets/images/IMG_2167.HEIC';
// import imgIMG2168 from '../assets/images/IMG_2168.HEIC';
// import imgIMG5618 from '../assets/images/IMG_5618.HEIC';

const ImageGallery = () => {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [showAll, setShowAll] = useState(false);

  const images = [
    { id: 1, src: imgDSCN1223, category: 'rajasthan', title: 'DSCN1223', location: 'Rajasthan' },
    { id: 2, src: imgLaxmangarh, category: 'rajasthan', title: 'Laxmangarh', location: 'Rajasthan' },
    { id: 3, src: imgSunset, category: 'rajasthan', title: 'Sunset', location: 'Rajasthan' },
    { id: 4, src: imgRj1, category: 'rajasthan', title: 'RJ1', location: 'Rajasthan' },
    { id: 5, src: imgChirag, category: 'himachal', title: 'Chirag', location: 'Himachal Pradesh' },
    { id: 6, src: imgInditales, category: 'rajasthan', title: 'Jhunjhunu Shekhawati', location: 'Rajasthan' },
    { id: 7, src: imgHimch1, category: 'himachal', title: 'Himch 1', location: 'Himachal Pradesh' },
    { id: 8, src: imgHimch2, category: 'himachal', title: 'Himch 2', location: 'Himachal Pradesh' },
    { id: 9, src: imgHimch3, category: 'himachal', title: 'Himch 3', location: 'Himachal Pradesh' },
    { id: 10, src: imgHimch4, category: 'himachal', title: 'Himch 4', location: 'Himachal Pradesh' },
    { id: 11, src: imgUttr1, category: 'uttarakhand', title: 'Uttr 1', location: 'Uttarakhand' },
    { id: 12, src: imgUttr2, category: 'uttarakhand', title: 'Uttr 2', location: 'Uttarakhand' },
    { id: 13, src: imgUttr3, category: 'uttarakhand', title: 'Uttr 3', location: 'Uttarakhand' },

  ];

  const categories = [
    { id: "all", name: "All Destinations" },
    { id: "rajasthan", name: "Rajasthan" },
    { id: "himachal", name: "Himachal Pradesh" },
    { id: "uttarakhand", name: "Uttarakhand" },
    // { id: "wildlife", name: "Wildlife" }
  ];

  const filteredImages = selectedCategory === "all"
    ? (showAll ? images : images.slice(0, 6))
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
                onClick={() => setSelectedCategory(category.id)}
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
              className="group relative overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer"
            >
              <img
                src={image.src}
                alt={image.title}
                className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-300"
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
