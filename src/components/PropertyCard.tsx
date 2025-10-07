import { MapPin, Bed, Bath, Maximize, Star, Phone } from 'lucide-react';
import { Property } from '../types';

interface PropertyCardProps {
  property: Property;
  onViewDetails: (property: Property) => void;
  onInquire: (property: Property) => void;
}

export default function PropertyCard({ property, onViewDetails, onInquire }: PropertyCardProps) {
  return (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-shadow duration-300">
      {property.featured && (
        <div className="absolute top-4 left-4 bg-yellow-500 text-white px-3 py-1 rounded-full text-sm font-semibold flex items-center gap-1 z-10">
          <Star className="w-4 h-4 fill-white" />
          Featured
        </div>
      )}

      <div className="relative h-64 overflow-hidden group">
        <img
          src={property.images[0]}
          alt={property.title}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>

      <div className="p-6">
        <div className="flex justify-between items-start mb-3">
          <div>
            <span className="inline-block bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-xs font-semibold mb-2 uppercase">
              {property.type}
            </span>
            <h3 className="text-xl font-bold text-slate-800">{property.title}</h3>
          </div>
          <div className="text-right">
            <div className="text-2xl font-bold text-blue-600">
              ₹{(property.price / 100000).toFixed(1)}L
            </div>
          </div>
        </div>

        <div className="flex items-center text-slate-600 mb-4">
          <MapPin className="w-4 h-4 mr-1" />
          <span className="text-sm">{property.location}</span>
        </div>

        <div className="flex gap-4 mb-4 text-slate-600">
          {property.bedrooms && (
            <div className="flex items-center gap-1">
              <Bed className="w-4 h-4" />
              <span className="text-sm">{property.bedrooms} Beds</span>
            </div>
          )}
          {property.bathrooms && (
            <div className="flex items-center gap-1">
              <Bath className="w-4 h-4" />
              <span className="text-sm">{property.bathrooms} Bath</span>
            </div>
          )}
          <div className="flex items-center gap-1">
            <Maximize className="w-4 h-4" />
            <span className="text-sm">{property.area} sqft</span>
          </div>
        </div>

        <p className="text-slate-600 text-sm mb-4 line-clamp-2">{property.description}</p>

        <div className="flex gap-3">
          <button
            onClick={() => onViewDetails(property)}
            className="flex-1 bg-slate-100 text-slate-800 py-2 rounded-lg hover:bg-slate-200 transition-colors font-medium"
          >
            View Details
          </button>
          <button
            onClick={() => onInquire(property)}
            className="flex-1 bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition-colors font-medium flex items-center justify-center gap-2"
          >
            <Phone className="w-4 h-4" />
            Inquire
          </button>
        </div>


      </div>
    </div>
  );
}
