import { Building2, Phone, Mail, Facebook, Instagram } from 'lucide-react';

interface HeaderProps {
  onNavigate: (section: string) => void;
}

export default function Header({ onNavigate }: HeaderProps) {
  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="bg-slate-800 text-white py-2">
        <div className="container mx-auto px-4 flex justify-between items-center text-sm">
          <div className="flex gap-4">
            <a href="tel:+919876543210" className="flex items-center gap-1 hover:text-blue-300">
              <Phone className="w-4 h-4" />
              <span>+91 98765 43210</span>
            </a>
            <a href="mailto:info@realestate.com" className="flex items-center gap-1 hover:text-blue-300">
              <Mail className="w-4 h-4" />
              <span>info@realestate.com</span>
            </a>
          </div>
          <div className="flex gap-3">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-300">
              <Facebook className="w-4 h-4" />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-300">
              <Instagram className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-2 cursor-pointer" onClick={() => onNavigate('home')}>
            <Building2 className="w-8 h-8 text-blue-600" />
            <div>
              <h1 className="text-2xl font-bold text-slate-800">PrimeEstates</h1>
              <p className="text-xs text-slate-600">Your Dream Property Partner</p>
            </div>
          </div>

          <nav className="hidden md:flex gap-6">
            <button onClick={() => onNavigate('home')} className="text-slate-700 hover:text-blue-600 font-medium">
              Home
            </button>
            <button onClick={() => onNavigate('properties')} className="text-slate-700 hover:text-blue-600 font-medium">
              Properties
            </button>
            <button onClick={() => onNavigate('about')} className="text-slate-700 hover:text-blue-600 font-medium">
              About
            </button>
            <button onClick={() => onNavigate('testimonials')} className="text-slate-700 hover:text-blue-600 font-medium">
              Testimonials
            </button>
            <button onClick={() => onNavigate('contact')} className="text-slate-700 hover:text-blue-600 font-medium">
              Contact
            </button>
          </nav>

          <button
            onClick={() => onNavigate('contact')}
            className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors font-medium"
          >
            Get Started
          </button>
        </div>
      </div>
    </header>
  );
}
