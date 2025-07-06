
import { useState } from "react";
import { useEffect, useRef } from "react";

import { MapPin, Calendar, Users, Send } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const QueryForm = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    destination: "",
    travelDate: "",
    groupSize: "",
    message: ""
  });

  const destinations = [
    "Rajasthan (Jaipur, Udaipur, Jodhpur)",
    "Himachal Pradesh (Shimla, Manali, Dharamshala)",
    "Kashmir (Srinagar, Gulmarg, Pahalgam)",
    "Uttarakhand (Rishikesh, Haridwar, Nainital)",
    "Kerala (Munnar, Alleppey, Kochi)",
    "Goa (Beaches, Culture, Adventure)",
    "Custom Package - Tell us your preference"
  ];

  const [suggestionsVisible, setSuggestionsVisible] = useState(false);
  const suggestionsRef = useRef<HTMLDivElement | null>(null);

  // Filter destinations on input
  const filteredDestinations = destinations.filter(dest =>
    dest.toLowerCase().includes(formData.destination.toLowerCase())
  );

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (suggestionsRef.current && !suggestionsRef.current.contains(e.target as Node)) {
        setSuggestionsVisible(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Basic validation
    if (!formData.name || !formData.email || !formData.destination) {
      toast({
        title: "Missing Information",
        description: "Please fill in all required fields.",
        variant: "destructive"
      });
      return;
    }

    // Simulate form submission
    toast({
      title: "Query Submitted Successfully!",
      description: "We'll get back to you within 24 hours with a customized package.",
    });

    // Reset form
    setFormData({
      name: "",
      email: "",
      phone: "",
      destination: "",
      travelDate: "",
      groupSize: "",
      message: ""
    });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contact" className="py-20 bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left Side - Information */}
          <div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Plan Your Dream Journey
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Ready to explore incredible India with local experts? Fill out the form and we'll create
              a personalized itinerary just for you!
            </p>

            <div className="space-y-6">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold">Multiple Destinations</h3>
                  <p className="text-gray-400">From Rajasthan's deserts to Kashmir's valleys</p>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center">
                  <Calendar className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold">Flexible Dates</h3>
                  <p className="text-gray-400">We adapt to your schedule and preferences</p>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center">
                  <Users className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold">All Group Sizes</h3>
                  <p className="text-gray-400">Solo travelers to large groups welcome</p>
                </div>
              </div>
            </div>

            <div className="mt-8 p-6 bg-blue-900 rounded-xl">
              <h3 className="text-xl font-semibold mb-2">Quick Response Guarantee</h3>
              <p className="text-blue-200">
                We respond to all queries within 24 hours with detailed itineraries and transparent pricing.
              </p>
            </div>
          </div>

          {/* Right Side - Form */}
          <div className="bg-white text-gray-900 rounded-2xl p-8 shadow-2xl">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium mb-2" htmlFor="name">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Your full name"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2" htmlFor="email">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="your@email.com"
                    required
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium mb-2" htmlFor="phone">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="9876543210"
                    pattern="[6-9]{1}[0-9]{9}"
                    maxLength={10}
                    minLength={10}
                    title="Enter a valid 10-digit Indian mobile number starting with 6, 7, 8, or 9"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2" htmlFor="groupSize">
                    Group Size
                  </label>
                  <select
                    id="groupSize"
                    name="groupSize"
                    value={formData.groupSize}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  >
                    <option value="">Select group size</option>
                    <option value="1">Solo Traveler</option>
                    <option value="2">Couple (2 people)</option>
                    <option value="3-5">Small Group (3-5 people)</option>
                    <option value="6-10">Medium Group (6-10 people)</option>
                    <option value="10+">Large Group (10+ people)</option>
                  </select>
                </div>
              </div>

              <div className="relative" ref={suggestionsRef}>
                <label className="block text-sm font-medium mb-2" htmlFor="destination">
                  Preferred State *
                </label>
                <select
                  id="destination"
                  name="destination"
                  value={formData.destination}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                >
                  <option value="">Select a State</option>
                  <option value="Uttarakhand">Uttarakhand</option>
                  <option value="Himachal Pradesh">Himachal Pradesh</option>
                  <option value="Rajasthan">Rajasthan</option>
                </select>
              </div>


              <div>
                <label className="block text-sm font-medium mb-2" htmlFor="travelDate">
                  Preferred Travel Date
                </label>
                <input
                  type="date"
                  id="travelDate"
                  name="travelDate"
                  value={formData.travelDate}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-2" htmlFor="message">
                  Additional Information and Requests (City Names, Places of Interest)
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={4}
                  placeholder="e.g., Rishikesh, Nainital, Jaipur, Manali..."
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
              {/* <div>
                <label className="block text-sm font-medium mb-2" htmlFor="message">
                  Special Requests or Questions
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={4}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="Tell us about your interests, budget, or any special requirements..."
                />
              </div> */}

              <button
                type="submit"
                className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 px-6 rounded-lg transition-colors flex items-center justify-center space-x-2"
              >
                <Send className="w-5 h-5" />
                <span>Send My Query</span>
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default QueryForm;
