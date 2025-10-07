import { Star, Quote } from 'lucide-react';
import { testimonials } from '../data/mockData';

export default function Testimonials() {
  return (
    <section className="py-16 bg-slate-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-slate-800 mb-4">What Our Clients Say</h2>
          <p className="text-slate-600 text-lg">Don't just take our word for it</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className="bg-white rounded-xl shadow-lg p-6 hover:shadow-2xl transition-shadow">
              <Quote className="w-10 h-10 text-blue-600 mb-4 opacity-50" />

              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                ))}
              </div>

              <p className="text-slate-600 mb-6 leading-relaxed">"{testimonial.review}"</p>

              <div className="flex items-center gap-4">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div>
                  <div className="font-bold text-slate-800">{testimonial.name}</div>
                  <div className="text-sm text-slate-500">{testimonial.date}</div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="bg-white rounded-xl shadow-lg p-8">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-slate-800 mb-2">Trusted on Google Reviews</h3>
            <div className="flex items-center justify-center gap-2 mb-4">
              <div className="flex gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-6 h-6 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <span className="text-2xl font-bold text-slate-800">4.9/5</span>
            </div>
            <p className="text-slate-600">Based on 150+ verified reviews</p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 text-center">
            <div className="p-4 bg-blue-50 rounded-lg">
              <div className="text-3xl font-bold text-blue-600 mb-2">98%</div>
              <div className="text-sm text-slate-600">Customer Satisfaction</div>
            </div>
            <div className="p-4 bg-green-50 rounded-lg">
              <div className="text-3xl font-bold text-green-600 mb-2">95%</div>
              <div className="text-sm text-slate-600">Repeat Customers</div>
            </div>
            <div className="p-4 bg-orange-50 rounded-lg">
              <div className="text-3xl font-bold text-orange-600 mb-2">150+</div>
              <div className="text-sm text-slate-600">5-Star Reviews</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
