import { useState, useEffect, useRef } from "react";
import { MapPin, Calendar, Users, Send } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const QueryForm = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    destination: "",
    startDate: "",
    endDate: "",
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

    const { name, email, destination, startDate, endDate } = formData;

    if (!name || !email || !destination || !startDate || !endDate) {
      toast({
        title: "Missing Information",
        description: "Please fill in all required fields.",
        variant: "destructive"
      });
      return;
    }

    if (new Date(endDate) <= new Date(startDate)) {
      toast({
        title: "Invalid Dates",
        description: "End date must be after the start date.",
        variant: "destructive"
      });
      return;
    }

    toast({
      title: "Query Submitted Successfully!",
      description: "We'll get back to you within 12 hours with a customized package."
    });

    setFormData({
      name: "",
      email: "",
      phone: "",
      destination: "",
      startDate: "",
      endDate: "",
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
          {/* Left */}
          <div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Plan Your Dream Journey
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Ready to explore incredible India with local experts? Fill out the form and we'll create
              a personalized itinerary just for you!
            </p>

            <div className="space-y-6">
              <InfoItem icon={<MapPin />} title="Multiple Destinations" desc="From Rajasthan's deserts to Kashmir's valleys" />
              <InfoItem icon={<Calendar />} title="Flexible Dates" desc="We adapt to your schedule and preferences" />
              <InfoItem icon={<Users />} title="All Group Sizes" desc="Solo travelers to large groups welcome" />
            </div>

            <div className="mt-8 p-6 bg-blue-900 rounded-xl">
              <h3 className="text-xl font-semibold mb-2">Quick Response Guarantee</h3>
              <p className="text-blue-200">
                We respond to all queries within 12 hours with detailed itineraries and transparent pricing.
              </p>
            </div>
          </div>

          {/* Right - Form */}
          <div className="bg-white text-gray-900 rounded-2xl p-8 shadow-2xl">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-4">
                <InputField label="Full Name *" id="name" value={formData.name} onChange={handleChange} required />
                <InputField type="email" label="Email Address *" id="email" value={formData.email} onChange={handleChange} required />
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <InputField
                  label="Phone Number"
                  id="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  type="tel"
                  pattern="[6-9]{1}[0-9]{9}"
                  maxLength={10}
                  minLength={10}
                  title="Enter a valid 10-digit Indian mobile number"
                />

                <SelectField label="Group Size" id="groupSize" value={formData.groupSize} onChange={handleChange}>
                  <option value="">Select group size</option>
                  <option value="1">Solo Traveler</option>
                  <option value="2">Couple (2 people)</option>
                  <option value="3-5">Small Group (3-5 people)</option>
                  <option value="6-10">Medium Group (6-10 people)</option>
                  <option value="10+">Large Group (10+ people)</option>
                </SelectField>
              </div>

              <SelectField label="Preferred State *" id="destination" value={formData.destination} onChange={handleChange} required>
                <option value="">Select a State</option>
                <option value="Uttarakhand">Uttarakhand</option>
                <option value="Himachal Pradesh">Himachal Pradesh</option>
                <option value="Rajasthan">Rajasthan</option>
              </SelectField>

              <div className="grid md:grid-cols-2 gap-4">
                <InputField type="date" label="Tour Start Date *" id="startDate" value={formData.startDate} onChange={handleChange} required />
                <InputField type="date" label="Tour End Date *" id="endDate" value={formData.endDate} onChange={handleChange} required />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-2">
                  Additional Info / Places of Interest
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={4}
                  placeholder="e.g., Rishikesh, Manali, Jaipur..."
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                />
              </div>

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

// Helper Components
const InputField = ({ label, id, value, onChange, ...rest }: any) => (
  <div>
    <label htmlFor={id} className="block text-sm font-medium mb-2">{label}</label>
    <input
      id={id}
      name={id}
      value={value}
      onChange={onChange}
      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
      {...rest}
    />
  </div>
);

const SelectField = ({ label, id, value, onChange, children, ...rest }: any) => (
  <div>
    <label htmlFor={id} className="block text-sm font-medium mb-2">{label}</label>
    <select
      id={id}
      name={id}
      value={value}
      onChange={onChange}
      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
      {...rest}
    >
      {children}
    </select>
  </div>
);

const InfoItem = ({ icon, title, desc }: { icon: React.ReactNode; title: string; desc: string }) => (
  <div className="flex items-center space-x-4">
    <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center text-white">{icon}</div>
    <div>
      <h3 className="text-lg font-semibold">{title}</h3>
      <p className="text-gray-400">{desc}</p>
    </div>
  </div>
);

export default QueryForm;
