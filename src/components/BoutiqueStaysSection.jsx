import React from 'react';
import { 
  Home, 
  MapPin, 
  Star, 
  Users, 
  Sparkles, 
  ArrowRight,
  Flame,
  CheckCircle2,
  Coffee
} from 'lucide-react';
import { BOUTIQUE_STAYS } from '../data/travelData';

export default function BoutiqueStaysSection({ onReserveStay, currency }) {
  const formatPrice = (inr) => {
    if (currency === 'USD') return `$${Math.round(inr / 84)}`;
    return `₹${inr.toLocaleString('en-IN')}`;
  };

  return (
    <section id="stays" className="py-24 bg-[#0c1514] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-semibold uppercase tracking-wider mb-3">
            <Home className="w-3.5 h-3.5" />
            <span>The Woodvelly Collection</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-display font-medium text-white tracking-tight mb-4">
            Handcrafted <span className="text-emerald-400">Wooden Chalets</span> & Eco Resorts
          </h2>
          <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
            Directly inspired by pure Himalayan deodar timber and alpine architecture. 
            Immerse yourself in forest whispers, warm crackling fireplaces, and misty river bends.
          </p>
        </div>

        {/* Stays Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {BOUTIQUE_STAYS.map((stay) => (
            <div 
              key={stay.id}
              className="rounded-3xl bg-[#142321] border border-white/10 hover:border-emerald-500/40 overflow-hidden flex flex-col lg:flex-row transition-all duration-300 hover:shadow-glass-card group"
            >
              {/* Left/Top Image */}
              <div className="lg:w-1/2 relative min-h-[260px] overflow-hidden">
                <img 
                  src={stay.image} 
                  alt={stay.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/20" />

                {/* Badge */}
                <div className="absolute top-4 left-4 px-3 py-1 rounded-full bg-black/60 backdrop-blur-md border border-white/15 text-xs font-semibold text-emerald-300">
                  {stay.badge}
                </div>

                {/* Rating */}
                <div className="absolute bottom-4 left-4 flex items-center gap-1.5 px-3 py-1 rounded-full bg-black/70 backdrop-blur-md text-xs text-white">
                  <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                  <span className="font-bold">{stay.rating}</span>
                  <span className="text-slate-400 text-[11px]">({stay.reviews} reviews)</span>
                </div>
              </div>

              {/* Right Content */}
              <div className="lg:w-1/2 p-6 flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-1.5 text-xs text-emerald-400 mb-1">
                    <MapPin className="w-3.5 h-3.5" />
                    <span>{stay.location}</span>
                  </div>

                  <h3 className="text-xl font-display font-medium text-white group-hover:text-emerald-300 transition-colors mb-2">
                    {stay.name}
                  </h3>

                  <p className="text-xs text-slate-300 line-clamp-3 mb-4 leading-relaxed">
                    {stay.description}
                  </p>

                  {/* Amenities features */}
                  <div className="flex flex-wrap gap-1.5 mb-5">
                    {stay.features.map((feat, i) => (
                      <span key={i} className="text-[11px] px-2 py-0.5 rounded-md bg-white/5 text-slate-300 border border-white/5 flex items-center gap-1">
                        <CheckCircle2 className="w-2.5 h-2.5 text-emerald-400" />
                        {feat}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Price and CTA */}
                <div className="pt-4 border-t border-white/10 flex items-center justify-between">
                  <div>
                    <div className="flex items-baseline gap-1">
                      <span className="text-xl sm:text-2xl font-bold text-white font-display">
                        {formatPrice(stay.pricePerNight)}
                      </span>
                      <span className="text-xs text-slate-400">/night</span>
                    </div>
                    <span className="text-[11px] text-slate-500 flex items-center gap-1 mt-0.5">
                      <Users className="w-3 h-3 text-slate-400" /> {stay.capacity}
                    </span>
                  </div>

                  <button
                    onClick={() => onReserveStay(stay)}
                    className="px-5 py-2.5 rounded-xl bg-white text-slate-900 font-semibold text-xs hover:bg-slate-100 transition-all flex items-center gap-1.5 active:scale-95 shadow-sm"
                  >
                    <span>Reserve</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>

              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
