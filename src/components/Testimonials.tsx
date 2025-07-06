import { Star } from "lucide-react";
import { MdMan, MdWoman } from "react-icons/md";

const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      name: "Aditi Sharma",
      country: "India (Delhi)",
      rating: 5,
      text: "Exploring the peaceful villages of Uttarakhand was a dream. From morning yoga by the Ganges in Rishikesh to trekking in Chopta, every moment felt magical.",
      gender: "female"
    },
    {
      id: 2,
      name: "Carlos Alvarez",
      country: "Spain",
      rating: 5,
      text: "I never imagined such stunning views! Himachal’s Spiti Valley was breathtaking, and our guide ensured we experienced true Himalayan hospitality.",
      gender: "male"
    },
    {
      id: 3,
      name: "Sneha Mehta",
      country: "India (Mumbai)",
      rating: 5,
      text: "The blend of adventure and spirituality in Himachal is unmatched. Paragliding in Bir and meditating in monasteries gave me both adrenaline and peace.",
      gender: "female"
    },
    {
      id: 4,
      name: "Tom Becker",
      country: "Germany",
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
            Traveler Stories from the Hills
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Hear firsthand how our guests experienced the serenity, adventure, and charm of Uttarakhand and Himachal Pradesh.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {testimonials.map(testimonial => (
            <div key={testimonial.id} className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow">
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 rounded-full bg-blue-100 flex items-center justify-center mr-4">
                  {testimonial.gender === "female" ? (
                    <MdWoman className="w-12 h-12 text-pink-500" />
                  ) : (
                    <MdMan className="w-12 h-12 text-blue-500" />
                  )}
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
              <div className="text-sm text-gray-600">Mountain Travelers</div>
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
