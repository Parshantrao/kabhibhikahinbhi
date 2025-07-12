
import { Users, MapPin, Star, Camera } from "lucide-react";

const AboutUs = () => {
  const features = [
    {
      icon: <Users className="w-8 h-8 text-blue-600" />,
      title: "Customization Expert",
      description: "From “let’s go” to “wow,” every detail is made just for you. We match your mood, style, and pace."
    },
    {
      icon: <MapPin className="w-8 h-8 text-blue-600" />,
      title: "Location Expert",
      description: "Vibes over views — we choose places that feel good, not just look good."
    },
    {
      icon: <Star className="w-8 h-8 text-blue-600" />,
      title: "Group Adventures",
      description: "From awkward hellos to unforgettable memories — vibe with strangers."
    },
    {
      icon: <Camera className="w-8 h-8 text-blue-600" />,
      title: "Picture Perfect",
      description: "Visit the most photogenic and Instagram-worthy locations"
    }
  ];

  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Smart Travellers Pick Us — Here's Why?
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Kabhi Bhi Kahin Bhi is not just a travel partner. We provide safety with our premium service in an affordable price option. This isn’t just work — it’s pure joy watching you find yours.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {features.map((feature, index) => (
            <div key={index} className="text-center p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="flex justify-center mb-4">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>

        <div className="bg-blue-900 rounded-2xl p-8 md:p-12 text-white">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-3xl font-bold mb-6">Our Story</h3>
              <p className="text-blue-100 mb-4">
                Born from a passion for sharing our beautiful homeland, we started as a small group
                of local friends who loved showing visitors the real India beyond the tourist trails.
              </p>
              <p className="text-blue-100 mb-6">
                Today, we're proud to offer authentic experiences that connect travelers with local
                culture, breathtaking landscapes, and unforgettable adventures across Rajasthan,
                Himachal Pradesh, Kashmir, and beyond.
              </p>
              <div className="flex space-x-8">
                <div className="text-center">
                  <div className="text-2xl font-bold text-yellow-400">500+</div>
                  <div className="text-sm text-blue-200">Happy Travelers</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-yellow-400">50+</div>
                  <div className="text-sm text-blue-200">Destinations</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-yellow-400">5</div>
                  <div className="text-sm text-blue-200">Years Experience</div>
                </div>
              </div>
            </div>
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1469041797191-50ace28483c3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=4752&q=80"
                alt="Local guides with camels"
                className="rounded-xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
