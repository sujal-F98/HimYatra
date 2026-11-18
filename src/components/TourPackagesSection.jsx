import React, { useState } from 'react';
import { 
  Clock, 
  MapPin, 
  Star, 
  Check, 
  ArrowRight, 
  Car, 
  Utensils, 
  Hotel, 
  ShieldCheck,
  Sparkles
} from 'lucide-react';
import { TOUR_PACKAGES } from '../data/travelData';

export default function TourPackagesSection({ onSelectPackage, onQuickBook, currency }) {
  const [selectedState, setSelectedState] = useState('All');

  const formatPrice = (inr) => {
    if (currency === 'USD') return `$${Math.round(inr / 84)}`;
    return `₹${inr.toLocaleString('en-IN')}`;
  };

  const filteredPackages = TOUR_PACKAGES.filter(pkg => {
    if (selectedState === 'All') return true;
    return pkg.state === selectedState;
  });

  return (
    <section id="packages" className="py-24 bg-[#0a1211] relative overflow-hidden">
      
      {/* Decorative ambient lighting */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-emerald-600/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-amber-600/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-semibold uppercase tracking-wider mb-3">
              <Sparkles className="w-3.5 h-3.5 text-amber-400" />
              <span>Handcrafted All-Inclusive Circuits</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-display font-medium text-white tracking-tight">
              Featured Tour <span className="text-emerald-400">Packages</span>
            </h2>
            <p className="text-slate-400 text-sm sm:text-base mt-2 max-w-xl">
              Includes private hill-certified cabs, handpicked mountain chalets, daily breakfast & dinner, and seamless government permits.
            </p>
          </div>

          {/* State Filter Buttons */}
          <div className="flex items-center bg-black/40 p-1.5 rounded-2xl border border-white/10 self-start md:self-auto">
            {['All', 'Himachal Pradesh', 'Uttarakhand'].map((state) => (
              <button
                key={state}
                onClick={() => setSelectedState(state)}
                className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all ${
                  selectedState === state
                    ? 'bg-emerald-600 text-white shadow-md'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                {state === 'All' ? 'All Packages' : state}
              </button>
            ))}
          </div>
        </div>

        {/* Packages Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredPackages.map((pkg) => (
            <div 
              key={pkg.id}
              className="rounded-3xl bg-[#12201e] border border-white/10 hover:border-emerald-500/30 overflow-hidden flex flex-col justify-between transition-all duration-300 hover:-translate-y-1 hover:shadow-glass-card group"
            >
              {/* Image & Quick Overlays */}
              <div className="relative h-60 overflow-hidden">
                <img 
                  src={pkg.heroImage} 
                  alt={pkg.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#12201e] via-black/20 to-transparent" />

                {/* Duration Badge */}
                <div className="absolute top-4 left-4 flex items-center gap-1.5 px-3 py-1 rounded-full bg-black/60 backdrop-blur-md border border-white/15 text-xs text-white">
                  <Clock className="w-3.5 h-3.5 text-emerald-400" />
                  <span className="font-semibold">{pkg.duration}</span>
                </div>

                {/* Discount Tag */}
                <div className="absolute top-4 right-4 px-2.5 py-1 rounded-full bg-emerald-500 text-white text-xs font-bold shadow-md">
                  {pkg.discountPercentage}% OFF
                </div>

                {/* Category Pill */}
                <div className="absolute bottom-3 left-4">
                  <span className="text-[11px] font-semibold text-amber-300 bg-amber-500/20 backdrop-blur-md px-2.5 py-1 rounded-lg border border-amber-500/30">
                    {pkg.badge}
                  </span>
                </div>
              </div>

              {/* Package Content */}
              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  
                  {/* Rating & State */}
                  <div className="flex items-center justify-between text-xs text-slate-400 mb-2">
                    <span className="flex items-center gap-1 text-amber-400 font-semibold">
                      <Star className="w-3.5 h-3.5 fill-amber-400" />
                      <span>{pkg.rating}</span>
                      <span className="text-slate-500">({pkg.reviewCount} reviews)</span>
                    </span>
                    <span className="text-emerald-400 font-medium">{pkg.state}</span>
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-display font-medium text-white group-hover:text-emerald-300 transition-colors mb-2 leading-snug">
                    {pkg.title}
                  </h3>

                  {/* Route Summary */}
                  <div className="bg-white/5 rounded-xl p-2.5 mb-4 border border-white/5">
                    <span className="text-[10px] uppercase font-bold text-slate-400 tracking-wider block mb-1">
                      Scenic Circuit Route:
                    </span>
                    <p className="text-xs text-slate-300 line-clamp-2 leading-relaxed">
                      {pkg.route}
                    </p>
                  </div>

                  {/* Inclusions Micro List */}
                  <div className="space-y-1.5 mb-6">
                    <span className="text-[10px] uppercase font-bold text-slate-400 tracking-wider block">
                      Package Includes:
                    </span>
                    <ul className="text-xs text-slate-300 space-y-1">
                      {pkg.inclusions.slice(0, 3).map((inc, i) => (
                        <li key={i} className="flex items-center gap-1.5">
                          <Check className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                          <span className="truncate">{inc}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                </div>

                {/* Pricing & Action Buttons */}
                <div className="pt-4 border-t border-white/10 space-y-4">
                  
                  <div className="flex items-baseline justify-between">
                    <div>
                      <div className="flex items-baseline gap-1.5">
                        <span className="text-2xl font-bold text-white font-display">
                          {formatPrice(pkg.price)}
                        </span>
                        <span className="text-xs text-slate-400">/person</span>
                      </div>
                      <span className="text-xs text-slate-500 line-through">
                        {formatPrice(pkg.originalPrice)}
                      </span>
                    </div>

                    <span className="text-[11px] text-emerald-400 font-medium">
                      ✓ Zero Hidden Charges
                    </span>
                  </div>

                  <div className="grid grid-cols-2 gap-2">
                    <button
                      onClick={() => onSelectPackage(pkg)}
                      className="py-2.5 px-3 rounded-xl bg-white/10 hover:bg-white/15 text-white text-xs font-semibold text-center border border-white/10 transition"
                    >
                      View Itinerary
                    </button>
                    
                    <button
                      onClick={() => onQuickBook(pkg)}
                      className="py-2.5 px-3 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-semibold text-center transition flex items-center justify-center gap-1 shadow-md"
                    >
                      <span>Book Package</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  </div>

                </div>

              </div>

            </div>
          ))}
        </div>

        {/* Custom package banner */}
        <div className="mt-14 rounded-3xl p-8 bg-gradient-to-r from-[#142321] via-[#1b3430] to-[#142321] border border-emerald-500/30 flex flex-col md:flex-row items-center justify-between gap-6 shadow-glass-card">
          <div className="space-y-1.5 text-center md:text-left">
            <span className="text-xs font-bold text-emerald-400 uppercase tracking-wider">Need A Custom Himachal or Uttarakhand Plan?</span>
            <h3 className="text-2xl font-display font-medium text-white">We create customized 100% private family & couple circuits</h3>
            <p className="text-xs sm:text-sm text-slate-300">Choose your start dates, pickup city, preferred chalets, and vehicle type.</p>
          </div>
          <a
            href="#planner"
            className="px-6 py-3.5 rounded-full bg-white text-slate-900 font-semibold text-sm hover:bg-slate-100 hover:shadow-glow transition shrink-0"
          >
            Design Custom Itinerary
          </a>
        </div>

      </div>
    </section>
  );
}
