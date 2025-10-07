import { X, MapPin, Bed, Bath, Maximize, CheckCircle } from 'lucide-react';
import { Property } from '../types';
import { useState } from 'react';

interface PropertyModalProps {
  property: Property;
  onClose: () => void;
  onInquire: (property: Property) => void;
}

export default function PropertyModal({ property, onClose, onInquire }: PropertyModalProps) {
  const [currentImage, setCurrentImage] = useState(0);

  return (
    <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50 p-4 overflow-y-auto">
      <div className="bg-white rounded-xl max-w-5xl w-full max-h-[90vh] overflow-y-auto">
        <div className="sticky top-0 bg-white border-b border-slate-200 px-6 py-4 flex justify-between items-center z-10">
          <h2 className="text-2xl font-bold text-slate-800">{property.title}</h2>
          <button
            onClick={onClose}
            className="p-2 hover:bg-slate-100 rounded-full transition-colors"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        <div className="p-6">
          <div className="mb-6">
            <div className="relative h-96 rounded-xl overflow-hidden mb-4">
              <img
                src={property.images[currentImage]}
                alt={property.title}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="grid grid-cols-4 gap-4">
              {property.images.map((img, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrentImage(idx)}
                  className={`relative h-24 rounded-lg overflow-hidden ${
                    currentImage === idx ? 'ring-4 ring-blue-500' : 'opacity-70 hover:opacity-100'
                  }`}
                >
                  <img src={img} alt={`View ${idx + 1}`} className="w-full h-full object-cover" />
                </button>
              ))}
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mb-6">
            <div className="md:col-span-2">
              <div className="mb-6">
                <div className="flex items-center gap-4 mb-4">
                  <span className="inline-block bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-semibold uppercase">
                    {property.type}
                  </span>
                  <div className="flex items-center text-slate-600">
                    <MapPin className="w-5 h-5 mr-2" />
                    <span className="text-lg">{property.location}</span>
                  </div>
                </div>

                <div className="flex gap-6 mb-6">
                  {property.bedrooms && (
                    <div className="flex items-center gap-2 text-slate-700">
                      <Bed className="w-5 h-5" />
                      <span className="font-medium">{property.bedrooms} Bedrooms</span>
                    </div>
                  )}
                  {property.bathrooms && (
                    <div className="flex items-center gap-2 text-slate-700">
                      <Bath className="w-5 h-5" />
                      <span className="font-medium">{property.bathrooms} Bathrooms</span>
                    </div>
                  )}
                  <div className="flex items-center gap-2 text-slate-700">
                    <Maximize className="w-5 h-5" />
                    <span className="font-medium">{property.area} sqft</span>
                  </div>
                </div>

                <div className="mb-6">
                  <h3 className="text-xl font-bold text-slate-800 mb-3">Description</h3>
                  <p className="text-slate-600 leading-relaxed">{property.description}</p>
                </div>

                

                <div className="mb-6">
                  <h3 className="text-xl font-bold text-slate-800 mb-3">Features & Amenities</h3>
                  <div className="grid grid-cols-2 gap-3">
                    {property.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center gap-2 text-slate-700">
                        <CheckCircle className="w-5 h-5 text-green-600" />
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            <div className="md:col-span-1">
              <div className="bg-slate-50 rounded-xl p-6 sticky top-24">
                <div className="text-3xl font-bold text-blue-600 mb-6">
                  ₹{(property.price / 100000).toFixed(1)}L
                </div>
                <button
                  onClick={() => onInquire(property)}
                  className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition-colors font-medium mb-4"
                >
                  Send Inquiry
                </button>
                <a
                  href={`https://wa.me/919702490987?text=Hi, I'm interested in ${property.title}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full bg-green-600 text-white py-3 rounded-lg hover:bg-green-700 transition-colors font-medium text-center"
                >
                  WhatsApp Now
                </a>
              </div>
            </div>
          </div>

          <div className="mb-6">
            <h3 className="text-xl font-bold text-slate-800 mb-3">Location</h3>
            <div className="rounded-xl overflow-hidden h-96">
              <iframe
                src={property.mapUrl}
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
