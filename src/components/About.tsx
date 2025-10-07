import { Award, Users, Building2, Heart, Phone, Mail, MapPin } from 'lucide-react';

export default function About() {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <img
              src="https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=800"
              alt="Professional Real Estate Agent"
              className="rounded-2xl shadow-2xl"
            />
          </div>

          <div>
            <h2 className="text-4xl font-bold text-slate-800 mb-6">About Us</h2>
            <p className="text-lg text-slate-600 mb-4 leading-relaxed">
              With over 15 years of experience in the real estate industry, we've helped hundreds of families
              find their dream homes and investors discover profitable opportunities.
            </p>
            <p className="text-lg text-slate-600 mb-6 leading-relaxed">
              Our commitment to transparency, professionalism, and client satisfaction has made us one of the
              most trusted names in real estate. We specialize in residential, commercial, and plot sales across
              prime locations.
            </p>

            <div className="grid grid-cols-2 gap-4 mb-8">
              <div className="bg-blue-50 p-4 rounded-lg">
                <Award className="w-8 h-8 text-blue-600 mb-2" />
                <div className="text-2xl font-bold text-slate-800">15+</div>
                <div className="text-sm text-slate-600">Years Experience</div>
              </div>
              <div className="bg-green-50 p-4 rounded-lg">
                <Users className="w-8 h-8 text-green-600 mb-2" />
                <div className="text-2xl font-bold text-slate-800">300+</div>
                <div className="text-sm text-slate-600">Happy Clients</div>
              </div>
              <div className="bg-orange-50 p-4 rounded-lg">
                <Building2 className="w-8 h-8 text-orange-600 mb-2" />
                <div className="text-2xl font-bold text-slate-800">500+</div>
                <div className="text-sm text-slate-600">Properties Sold</div>
              </div>
              <div className="bg-red-50 p-4 rounded-lg">
                <Heart className="w-8 h-8 text-red-600 mb-2" />
                <div className="text-2xl font-bold text-slate-800">100%</div>
                <div className="text-sm text-slate-600">Satisfaction Rate</div>
              </div>
            </div>

            <div className="space-y-3">
              <div className="flex items-center gap-3 text-slate-700">
                <Phone className="w-5 h-5 text-blue-600" />
                <span className="font-medium">+91 98765 43210</span>
              </div>
              <div className="flex items-center gap-3 text-slate-700">
                <Mail className="w-5 h-5 text-blue-600" />
                <span className="font-medium">info@primeestates.com</span>
              </div>
              <div className="flex items-center gap-3 text-slate-700">
                <MapPin className="w-5 h-5 text-blue-600" />
                <span className="font-medium">123 Business Plaza, Main Street, City - 400001</span>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-r from-blue-600 to-blue-800 rounded-2xl p-12 text-white text-center">
          <h3 className="text-3xl font-bold mb-4">Why Choose Us?</h3>
          <div className="grid md:grid-cols-4 gap-8 mt-8">
            <div>
              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="w-8 h-8" />
              </div>
              <h4 className="font-bold mb-2">Expert Guidance</h4>
              <p className="text-blue-100 text-sm">Professional advice at every step</p>
            </div>
            <div>
              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Building2 className="w-8 h-8" />
              </div>
              <h4 className="font-bold mb-2">Premium Properties</h4>
              <p className="text-blue-100 text-sm">Handpicked quality listings</p>
            </div>
            <div>
              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8" />
              </div>
              <h4 className="font-bold mb-2">Client First</h4>
              <p className="text-blue-100 text-sm">Your satisfaction is our priority</p>
            </div>
            <div>
              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Heart className="w-8 h-8" />
              </div>
              <h4 className="font-bold mb-2">Trusted Service</h4>
              <p className="text-blue-100 text-sm">Transparent and honest dealings</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
