import { Search, MapPin, Home, DollarSign } from 'lucide-react';
import { useState } from 'react';

interface HeroProps {
  onSearch: (filters: { location: string; type: string; budget: string }) => void;
}

export default function Hero({ onSearch }: HeroProps) {
  const [location, setLocation] = useState('');
  const [type, setType] = useState('');
  const [budget, setBudget] = useState('');

  const handleSearch = () => {
    onSearch({ location, type, budget });
  };

  return (
    <div className="relative bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800 text-white">
      <div className="absolute inset-0 opacity-10">
        <img
          src="https://images.pexels.com/photos/323780/pexels-photo-323780.jpeg?auto=compress&cs=tinysrgb&w=1600"
          alt="Real Estate"
          className="w-full h-full object-cover"
        />
      </div>

      <div className="relative container mx-auto px-4 py-24">
        <div className="max-w-3xl">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
            Find Your Dream Property Today
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-blue-100">
            Premium flats, plots & commercial spaces at unbeatable prices
          </p>

          <div className="bg-white rounded-xl shadow-2xl p-6 text-slate-800">
            <div className="grid md:grid-cols-4 gap-4">
              <div className="relative">
                <MapPin className="absolute left-3 top-3 w-5 h-5 text-slate-400" />
                <input
                  type="text"
                  placeholder="Location"
                  value={location}
                  onChange={(e) => setLocation(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              <div className="relative">
                <Home className="absolute left-3 top-3 w-5 h-5 text-slate-400" />
                <select
                  value={type}
                  onChange={(e) => setType(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 appearance-none bg-white"
                >
                  <option value="">All Types</option>
                  <option value="flat">Flat</option>
                  <option value="plot">Plot</option>
                  <option value="commercial">Commercial</option>
                </select>
              </div>

              <div className="relative">
                <DollarSign className="absolute left-3 top-3 w-5 h-5 text-slate-400" />
                <select
                  value={budget}
                  onChange={(e) => setBudget(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 appearance-none bg-white"
                >
                  <option value="">Budget</option>
                  <option value="0-5000000">Under ₹50L</option>
                  <option value="5000000-10000000">₹50L - ₹1Cr</option>
                  <option value="10000000-20000000">₹1Cr - ₹2Cr</option>
                  <option value="20000000-999999999">Above ₹2Cr</option>
                </select>
              </div>

              <button
                onClick={handleSearch}
                className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors font-medium flex items-center justify-center gap-2"
              >
                <Search className="w-5 h-5" />
                Search
              </button>
            </div>
          </div>
        </div>

        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8">
          <div className="text-center">
            <div className="text-4xl font-bold text-blue-300 mb-2">500+</div>
            <div className="text-blue-100">Properties Sold</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-blue-300 mb-2">300+</div>
            <div className="text-blue-100">Happy Clients</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-blue-300 mb-2">15+</div>
            <div className="text-blue-100">Years Experience</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-blue-300 mb-2">50+</div>
            <div className="text-blue-100">Active Listings</div>
          </div>
        </div>
      </div>
    </div>
  );
}
