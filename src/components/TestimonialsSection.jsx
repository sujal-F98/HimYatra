import React from 'react';
import { 
  Star, 
  Quote, 
  MapPin, 
  CheckCircle,
  ThumbsUp
} from 'lucide-react';
import { TESTIMONIALS } from '../data/travelData';

export default function TestimonialsSection() {
  return (
    <section id="reviews" className="py-24 bg-[#091110] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-semibold uppercase tracking-wider mb-3">
            <ThumbsUp className="w-3.5 h-3.5" />
            <span>Stories From Fellow Travelers</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-display font-medium text-white tracking-tight mb-4">
            Loved By Over <span className="text-emerald-400">38,000+ Indian Explorers</span>
          </h2>
          <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
            From honeymooners chasing fresh snowfall to families completing their sacred Chardham yatra. Here is what they have to say.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {TESTIMONIALS.map((rev) => (
            <div 
              key={rev.id}
              className="bg-[#12201e] border border-white/10 rounded-3xl p-7 relative flex flex-col justify-between hover:border-emerald-500/40 transition-all duration-300 shadow-glass"
            >
              <div>
                {/* Quote Icon */}
                <Quote className="w-8 h-8 text-emerald-500/30 mb-4" />

                {/* Rating */}
                <div className="flex items-center gap-1 mb-3">
                  {[...Array(rev.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                  ))}
                  <span className="text-xs text-slate-400 ml-1.5 font-medium">5.0 Star Experience</span>
                </div>

                {/* Comment */}
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed italic mb-6">
                  "{rev.comment}"
                </p>
              </div>

              {/* User Metadata */}
              <div className="pt-4 border-t border-white/10 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <img 
                    src={rev.avatar} 
                    alt={rev.name}
                    className="w-11 h-11 rounded-full object-cover border border-emerald-500/40" 
                  />
                  <div>
                    <h4 className="text-sm font-semibold text-white flex items-center gap-1.5">
                      <span>{rev.name}</span>
                      <CheckCircle className="w-3.5 h-3.5 text-emerald-400 fill-emerald-400/20" title="Verified Traveler" />
                    </h4>
                    <p className="text-xs text-slate-400 flex items-center gap-1">
                      <MapPin className="w-3 h-3 text-emerald-400" />
                      <span>{rev.city}</span>
                      <span>•</span>
                      <span>{rev.date}</span>
                    </p>
                  </div>
                </div>

                <div className="text-right hidden sm:block">
                  <span className="text-[11px] text-emerald-300 font-medium bg-emerald-500/10 px-2 py-1 rounded-md border border-emerald-500/20 block">
                    {rev.trip.split('(')[0]}
                  </span>
                </div>
              </div>

            </div>
          ))}
        </div>

        {/* External review badges strip */}
        <div className="mt-14 flex flex-wrap items-center justify-center gap-8 text-slate-400 text-xs">
          <div className="flex items-center gap-2">
            <span className="text-white font-bold text-base">Google Reviews</span>
            <span className="text-amber-400 font-bold">4.9 ★★★★★</span>
            <span>(1,820+ reviews)</span>
          </div>
          <div className="w-1.5 h-1.5 rounded-full bg-white/20 hidden sm:block" />
          <div className="flex items-center gap-2">
            <span className="text-white font-bold text-base">TripAdvisor</span>
            <span className="text-emerald-400 font-bold">4.9 ★★★★★</span>
            <span>(630+ reviews)</span>
          </div>
          <div className="w-1.5 h-1.5 rounded-full bg-white/20 hidden sm:block" />
          <div className="flex items-center gap-2">
            <span className="text-emerald-300 font-medium">✓ Himachal Tourism Registered</span>
          </div>
        </div>

      </div>
    </section>
  );
}
