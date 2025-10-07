import { Building2 } from 'lucide-react';

interface HeaderProps {
  onNavigate: (section: string) => void;
}

export default function Header({ onNavigate }: HeaderProps) {
  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
   

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
