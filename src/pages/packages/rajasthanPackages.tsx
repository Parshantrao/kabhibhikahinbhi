import React, { useState } from 'react';
import RajasthanHero from '../../assets/Rajasthan tour packages.png';
import FortImg from '../../assets/images/rj1.jpg';
import BazaarImg from '../../assets/images/Places To See In Jhunjhunu Shekhawati Region Of Rajasthan - Inditales (1).jpg';
import SunsetImg from '../../assets/images/sunset.jpg';
import { Star, MapPin, ShoppingBag, Landmark, Hotel, Car, Sun } from 'lucide-react';

function RajasthanPackages() {
  // Sticky bar state for mobile menu (if needed in future)
  const [showSticky, setShowSticky] = useState(true);

  return (
    <div className="bg-white min-h-screen">
      {/* Sticky Price/Enquiry Bar */}
      <div className="sticky top-0 z-30 w-full bg-white/90 backdrop-blur border-b border-gray-200 shadow-sm flex items-center justify-between px-4 py-2 md:px-12">
        <div className="flex flex-col md:flex-row md:items-center gap-1 md:gap-6">
          <span className="inline-block bg-yellow-400 text-blue-900 font-bold rounded-full px-4 py-1 text-lg md:text-xl shadow">From ₹3,499/-</span>
          <span className="text-gray-700 font-medium text-sm md:text-base">2 Days / 1 Night</span>
        </div>
        <a href="/#contact" className="bg-blue-900 hover:bg-blue-800 text-white font-bold py-2 px-6 rounded-full text-base md:text-lg shadow transition">Book Now</a>
      </div>

      {/* Hero Section */}
      <section className="relative w-full h-[340px] md:h-[420px] flex items-center justify-center bg-center bg-cover" style={{ backgroundImage: `url(${RajasthanHero})` }}>
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/40 to-transparent" />
        <div className="relative z-10 text-center text-white flex flex-col items-center justify-center w-full">
          <h1 className="text-4xl md:text-6xl font-extrabold mb-3 drop-shadow-xl">Rajasthan Weekend Trips</h1>
          <p className="text-xl md:text-2xl font-semibold text-yellow-300 drop-shadow-lg mb-4">2-Day Heritage Jaipur Tour</p>
          <div className="flex flex-col md:flex-row items-center gap-3 mb-4">
            <span className="inline-block bg-yellow-400 text-blue-900 font-bold rounded-full px-5 py-2 text-lg md:text-xl shadow">From ₹3,499/-</span>
            <span className="inline-block bg-white/80 text-blue-900 font-semibold rounded-full px-4 py-2 text-base md:text-lg shadow">2 Days / 1 Night</span>
          </div>
          <a href="/#contact" className="inline-block bg-blue-900 hover:bg-blue-800 text-white font-bold py-3 px-10 rounded-full text-xl shadow-lg transition">Book Now / Enquire</a>
        </div>
      </section>

      {/* Overview */}
      <section className="max-w-7xl mx-auto px-4 py-12">
        <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12 mb-10">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Overview</h2>
          <p className="text-lg text-gray-700 mb-4">
            Experience the charm of Jaipur — the Pink City — in just 2 days with our Heritage Jaipur Tour, designed for short escapes and full-on exploration. From ancient forts to vibrant markets, and peaceful temples to sunset points, this trip covers it all in a relaxed, guided format.
          </p>
          <p className="text-lg text-gray-700 mb-2">We offer this tour in two options:</p>
          <ul className="list-disc list-inside text-gray-700 mb-2">
            <li><span className="font-semibold">Standard Package:</span> Budget-friendly stay with complete comfort</li>
            <li><span className="font-semibold">Premium Package:</span> Luxurious experience with 3 or 4-star hotel stay facing Jal Mahal</li>
          </ul>
          <p className="text-lg text-gray-700">Both packages include travel in a private AC car for maximum comfort.</p>
        </div>

        {/* Tour Options */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <div className="bg-blue-900 text-white rounded-2xl p-8 shadow-lg flex flex-col items-start">
            <Hotel className="w-8 h-8 mb-2 text-yellow-400" />
            <h3 className="text-2xl font-bold mb-2">Standard Package</h3>
            <ul className="list-disc list-inside mb-2 text-blue-100">
              <li>Stay in Standard AC Hotel Room</li>
              <li>Pickup & drop in a private AC car</li>
              <li>All sightseeing as per itinerary</li>
              <li>Clean, comfortable, and budget-friendly stay</li>
              <li>Ideal for backpackers, students, or budget couples</li>
            </ul>
          </div>
          <div className="bg-yellow-100 text-blue-900 rounded-2xl p-8 shadow-lg flex flex-col items-start">
            <Hotel className="w-8 h-8 mb-2 text-blue-900" />
            <h3 className="text-2xl font-bold mb-2">Premium Package</h3>
            <ul className="list-disc list-inside mb-2">
              <li>Stay in 3 or 4-star hotel with a view of Jal Mahal</li>
              <li>Room with luxury amenities & premium service</li>
              <li>Private AC sedan or SUV for all travel</li>
              <li>Same sightseeing itinerary with added comfort & upgraded stay</li>
              <li>Ideal for couples, honeymooners, and luxury travelers</li>
            </ul>
          </div>
        </div>

        {/* Itinerary */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Itinerary</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {/* Day 1 */}
            <div className="bg-white rounded-xl shadow-lg p-6 flex flex-col">
              <img src={FortImg} alt="Jaipur Fort" className="rounded-xl h-48 w-full object-cover mb-4" />
              <h3 className="text-2xl font-semibold mb-2 text-blue-900">Day 1: Arrival & Pink City Exploration</h3>
              <ul className="list-disc list-inside text-gray-700 mb-2">
                <li>Pickup: Jaipur Railway Station / Airport / Bus Stand</li>
                <li>Hotel check-in and time to relax</li>
                <li>Enjoy breakfast</li>
                <li>Begin sightseeing:</li>
                <ul className="ml-6">
                  <li>Garh Ganesh Temple (355 steps with panoramic city views)</li>
                  <li>Govind Dev Ji Temple – Spiritual center of Jaipur</li>
                  <li>Hawa Mahal – The stunning "Palace of Winds"</li>
                  <li>City Palace – Home of Jaipur’s royal heritage</li>
                  <li>Bapu Bazar & Johri Bazar – Famous markets for clothes, juttis, handicrafts</li>
                </ul>
                <li>Return to hotel for overnight stay</li>
              </ul>
            </div>
            {/* Day 2 */}
            <div className="bg-white rounded-xl shadow-lg p-6 flex flex-col">
              <img src={SunsetImg} alt="Nahargarh Fort Sunset" className="rounded-xl h-48 w-full object-cover mb-4" />
              <h3 className="text-2xl font-semibold mb-2 text-blue-900">Day 2: Temples, Forts & Departure</h3>
              <ul className="list-disc list-inside text-gray-700 mb-2">
                <li>Breakfast at the hotel</li>
                <li>Morning darshan at:</li>
                <ul className="ml-6">
                  <li>Moti Dungri Ganesh Temple</li>
                  <li>Birla Mandir – Elegant white marble temple</li>
                </ul>
                <li>Visit Jaipur’s photogenic landmarks:</li>
                <ul className="ml-6">
                  <li>Patrika Gate</li>
                  <li>Toran Dwar</li>
                </ul>
                <li>Dive into royal history:</li>
                <ul className="ml-6">
                  <li>Amber Fort – Grandeur of Rajputana</li>
                  <li>Nahargarh Fort – A perfect sunset view of the city</li>
                </ul>
                <li>Drop at Jaipur Railway Station / Airport / Bus Stand</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Tour Highlights */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Tour Highlights</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="flex items-start space-x-4 bg-white rounded-xl shadow-lg p-6">
              <Landmark className="w-8 h-8 text-yellow-400 mt-1" />
              <div>
                <h4 className="font-semibold text-lg mb-1">Explore Iconic Forts</h4>
                <p className="text-gray-700">Amber Fort and Nahargarh Fort</p>
              </div>
            </div>
            <div className="flex items-start space-x-4 bg-white rounded-xl shadow-lg p-6">
              <Landmark className="w-8 h-8 text-blue-600 mt-1" />
              <div>
                <h4 className="font-semibold text-lg mb-1">Visit Spiritual Landmarks</h4>
                <p className="text-gray-700">Garh Ganesh, Govind Dev Ji, Birla Mandir, Moti Dungri</p>
              </div>
            </div>
            <div className="flex items-start space-x-4 bg-white rounded-xl shadow-lg p-6">
              <Landmark className="w-8 h-8 text-pink-500 mt-1" />
              <div>
                <h4 className="font-semibold text-lg mb-1">Discover Jaipur’s Architecture</h4>
                <p className="text-gray-700">Hawa Mahal, City Palace, Patrika Gate, Toran Dwar</p>
              </div>
            </div>
            <div className="flex items-start space-x-4 bg-white rounded-xl shadow-lg p-6">
              <ShoppingBag className="w-8 h-8 text-green-600 mt-1" />
              <div>
                <h4 className="font-semibold text-lg mb-1">Shop Like a Local</h4>
                <p className="text-gray-700">Bapu Bazar and Johri Bazar</p>
              </div>
            </div>
            <div className="flex items-start space-x-4 bg-white rounded-xl shadow-lg p-6">
              <Hotel className="w-8 h-8 text-yellow-400 mt-1" />
              <div>
                <h4 className="font-semibold text-lg mb-1">Choose Your Experience</h4>
                <p className="text-gray-700">Standard Stay or Luxury Stay with Jal Mahal View</p>
              </div>
            </div>
            <div className="flex items-start space-x-4 bg-white rounded-xl shadow-lg p-6">
              <Car className="w-8 h-8 text-blue-900 mt-1" />
              <div>
                <h4 className="font-semibold text-lg mb-1">Travel Comfortably</h4>
                <p className="text-gray-700">Private AC car with experienced driver</p>
              </div>
            </div>
          </div>
        </div>

        {/* Price Table */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Prices (Per Person)</h2>
          <div className="overflow-x-auto">
            <table className="min-w-full bg-white rounded-xl shadow-lg">
              <thead>
                <tr>
                  <th className="py-3 px-6 border-b text-left font-semibold text-blue-900">Package</th>
                  <th className="py-3 px-6 border-b text-left font-semibold text-blue-900">2 Person</th>
                  <th className="py-3 px-6 border-b text-left font-semibold text-blue-900">3 or more</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="py-3 px-6 border-b">Standard</td>
                  <td className="py-3 px-6 border-b">₹3499/-</td>
                  <td className="py-3 px-6 border-b">₹2999/-</td>
                </tr>
                <tr>
                  <td className="py-3 px-6 border-b">Premium</td>
                  <td className="py-3 px-6 border-b">₹4499/-</td>
                  <td className="py-3 px-6 border-b">₹3999/-</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* Gallery */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Gallery</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <img src={RajasthanHero} alt="Rajasthan Tour" className="rounded-xl h-48 w-full object-cover shadow-lg" />
            <img src={FortImg} alt="Amber Fort" className="rounded-xl h-48 w-full object-cover shadow-lg" />
            <img src={BazaarImg} alt="Bapu Bazar" className="rounded-xl h-48 w-full object-cover shadow-lg" />
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mb-12">
          <a href="/#contact" className="inline-block bg-blue-900 hover:bg-blue-800 text-white font-bold py-4 px-10 rounded-full text-xl shadow-lg transition">Book Now / Enquire</a>
        </div>
      </section>
    </div>
  );
}

export default RajasthanPackages;
