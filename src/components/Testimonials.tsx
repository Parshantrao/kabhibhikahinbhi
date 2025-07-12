import { Star } from "lucide-react";
import { MdMan, MdWoman } from "react-icons/md";
import Rev1 from '../assets/Reviews/IMG_4811 (1).jpg'
import Rev2 from '../assets/Reviews/IMG_6210 (1) (1) (1) (1).jpg'
const Testimonials = () => {
  const testimonials = [
      {
      id: 1,
      name: "Shivani Singh",
      country: "Gurugram (Haryana)",
      rating: 5,
      text: "Kabhi Bhi Kahin bhi made it possible! No fixed plans, just pure vibes and epic memories. If you love spontaneous adventures and real experiences, this page is your go-to. Full paisa vasool trip!.",
      gender: "female",
      img: Rev1
    },
    {
      id: 2,
      name: "Priya Gupta",
      country: "UP (Etawah)",
      rating: 5,
      text: "I want to thanks Kabhi Bhi Kahin Bhi for my wonderful and safe trip. We enjoyed alot, hotel facilities are so good and next tour we will plan with you guys. Thanks",
      gender: "female",
      img: Rev2
    },
    {
      id: 3,
      name: "Aditi Sharma",
      country: "India (Delhi)",
      rating: 5,
      text: "Exploring the peaceful villages of Uttarakhand was a dream. From morning yoga by the Ganges in Rishikesh to trekking in Chopta, every moment felt magical.",
      gender: "female"
    },
  
    {
      id: 4,
      name: "Mohit Grovar",
      country: "India (Delhi)",
      rating: 5,
      text: "I went solo but left with lifelong friends! The homestays in Uttarakhand offered delicious food, warmth, and stories I’ll never forget.",
      gender: "male"
    }
  ];

  return (
    <section id="testimonials" className="py-20 bg-gradient-to-b from-blue-50 to-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Traveler Stories of Kabhi Bhi Kahin Bhi
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">

            Every review tells a story — of joy, discovery, and unforgettable memories.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {testimonials.map(testimonial => (
            <div key={testimonial.id} className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow">
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 rounded-full bg-blue-100 flex items-center justify-center mr-4">
                  {
                    testimonial.img ? (
                      <img src={testimonial.img} alt={testimonial.name} className="w-full h-full rounded-full object-cover" />
                    ) : (
                      <div className="w-12 h-12 bg-gray-300 rounded-full flex items-center justify-center">
                        <span className="text-gray-500 text-lg">{testimonial.name.charAt(0)}</span>
                      </div>
                    )
                  }
                  {/* {testimonial.gender === "female" ? (
                    <MdWoman className="w-12 h-12 text-pink-500" />
                  ) : (
                    <MdMan className="w-12 h-12 text-blue-500" />
                  )} */}
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900">{testimonial.name}</h3>
                  <p className="text-gray-600">{testimonial.country}</p>
                </div>
              </div>

              <div className="flex mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                ))}
              </div>

              <p className="text-gray-700 leading-relaxed italic">
                "{testimonial.text}"
              </p>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <div className="inline-flex items-center space-x-8 bg-white rounded-full px-8 py-4 shadow-lg">
            <div className="text-center">
              <div className="text-2xl font-bold text-blue-600">4.9/5</div>
              <div className="text-sm text-gray-600">Average Rating</div>
            </div>
            <div className="w-px h-8 bg-gray-300"></div>
            <div className="text-center">
              <div className="text-2xl font-bold text-blue-600">1000+</div>
              <div className="text-sm text-gray-600">Kabhi Bhi Kahin Bhi Travelers</div>
            </div>
            <div className="w-px h-8 bg-gray-300"></div>
            <div className="text-center">
              <div className="text-2xl font-bold text-blue-600">99%</div>
              <div className="text-sm text-gray-600">Would Return</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
