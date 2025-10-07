import { useState } from 'react';
import { Property } from '../types';
import PropertyCard from './PropertyCard';
import { SlidersHorizontal } from 'lucide-react';

interface PropertyListProps {
  properties: Property[];
  onViewDetails: (property: Property) => void;
  onInquire: (property: Property) => void;
}

export default function PropertyList({ properties, onViewDetails, onInquire }: PropertyListProps) {
  const [filters, setFilters] = useState({
    location: '',
    type: '',
    minPrice: 0,
    maxPrice: 999999999
  });

  const [showFilters, setShowFilters] = useState(false);

  const locations = [...new Set(properties.map(p => p.location))];

  const filteredProperties = properties.filter(property => {
    const matchLocation = !filters.location || property.location === filters.location;
    const matchType = !filters.type || property.type === filters.type;
    const matchPrice = property.price >= filters.minPrice && property.price <= filters.maxPrice;
    return matchLocation && matchType && matchPrice;
  });

  return (
    <section className="py-16 bg-slate-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-slate-800 mb-4">Featured Properties</h2>
          <p className="text-slate-600 text-lg">Explore our handpicked selection of premium properties</p>
        </div>

        <div className="mb-8">
          <button
            onClick={() => setShowFilters(!showFilters)}
            className="flex items-center gap-2 bg-white px-6 py-3 rounded-lg shadow-md hover:shadow-lg transition-shadow font-medium text-slate-700"
          >
            <SlidersHorizontal className="w-5 h-5" />
            {showFilters ? 'Hide Filters' : 'Show Filters'}
          </button>

          {showFilters && (
            <div className="bg-white rounded-lg shadow-md p-6 mt-4">
              <div className="grid md:grid-cols-4 gap-4">
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">Location</label>
                  <select
                    value={filters.location}
                    onChange={(e) => setFilters({ ...filters, location: e.target.value })}
                    className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  >
                    <option value="">All Locations</option>
                    {locations.map(loc => (
                      <option key={loc} value={loc}>{loc}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">Property Type</label>
                  <select
                    value={filters.type}
                    onChange={(e) => setFilters({ ...filters, type: e.target.value })}
                    className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  >
                    <option value="">All Types</option>
                    <option value="flat">Flat</option>
                    <option value="plot">Plot</option>
                    <option value="commercial">Commercial</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">Min Price</label>
                  <select
                    value={filters.minPrice}
                    onChange={(e) => setFilters({ ...filters, minPrice: Number(e.target.value) })}
                    className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  >
                    <option value="0">No Min</option>
                    <option value="2000000">₹20L</option>
                    <option value="5000000">₹50L</option>
                    <option value="10000000">₹1Cr</option>
                    <option value="20000000">₹2Cr</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">Max Price</label>
                  <select
                    value={filters.maxPrice}
                    onChange={(e) => setFilters({ ...filters, maxPrice: Number(e.target.value) })}
                    className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  >
                    <option value="999999999">No Max</option>
                    <option value="5000000">₹50L</option>
                    <option value="10000000">₹1Cr</option>
                    <option value="20000000">₹2Cr</option>
                    <option value="50000000">₹5Cr</option>
                  </select>
                </div>

                
              </div>
            </div>
          )}
        </div>

        {filteredProperties.length === 0 ? (
          <div className="text-center py-16">
            <p className="text-slate-600 text-lg">No properties found matching your criteria</p>
          </div>
        ) : (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProperties.map(property => (
              <PropertyCard
                key={property.id}
                property={property}
                onViewDetails={onViewDetails}
                onInquire={onInquire}
              />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
