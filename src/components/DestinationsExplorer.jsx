import React, { useState } from 'react';
import { 
  MapPin, 
  Search, 
  Calendar, 
  Mountain, 
  Sparkles, 
  ArrowRight,
  Compass,
  CheckCircle2
} from 'lucide-react';
import { POPULAR_LOCATIONS, TOUR_PACKAGES } from '../data/travelData';

export default function DestinationsExplorer({ onSelectDestination, activeFilter, setActiveFilter, currency }) {
  const [searchQuery, setSearchQuery] = useState('');

  const formatPrice = (inr) => {
    if (currency === 'USD') return `$${Math.round(inr / 84)}`;
    return `₹${inr.toLocaleString('en-IN')}`;
  };

  const filterTabs = [
    { label: 'All Destinations', value: 'All' },
    { label: '🏔️ Himachal Pradesh', value: 'Himachal Pradesh' },
    { label: '🌲 Uttarakhand', value: 'Uttarakhand' },
    { label: '❄️ Snow & High Altitude', value: 'Snow' },
    { label: '🕉️ Sacred & Spiritual', value: 'Spiritual' },
  ];

  const filteredLocations = POPULAR_LOCATIONS.filter(loc => {
    // Filter by tab
    if (activeFilter === 'Himachal Pradesh' && loc.state !== 'Himachal Pradesh') return false;
    if (activeFilter === 'Uttarakhand' && loc.state !== 'Uttarakhand') return false;
    if (activeFilter === 'Snow' && !loc.highlights.some(h => h.toLowerCase().includes('snow') || h.toLowerCase().includes('lake') || loc.altitude.includes('3,'))) return false;
    if (activeFilter === 'Spiritual' && !loc.category.includes('Spiritual') && !loc.highlights.some(h => h.toLowerCase().includes('temple') || h.toLowerCase().includes('aarti') || h.toLowerCase().includes('monastery'))) return false;

    // Filter by search query
    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase();
      const matchName = loc.name.toLowerCase().includes(q);
      const matchState = loc.state.toLowerCase().includes(q);
      const matchTag = loc.tagline.toLowerCase().includes(q);
      const matchHighlights = loc.highlights.some(h => h.toLowerCase().includes(q));
      return matchName || matchState || matchTag || matchHighlights;
    }
    return true;
  });

  return (
    <section id="destinations" className="py-20 bg-[#0c1514] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-semibold uppercase tracking-wider mb-3">
            <Compass className="w-3.5 h-3.5" />
            <span>Discover The Sacred Valleys</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-display font-medium text-white tracking-tight mb-4">
            Popular Destinations in <span className="text-emerald-400">Himachal</span> & <span className="text-emerald-400">Uttarakhand</span>
          </h2>
          <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
            From the snow-clad passes of Spiti and Rohtang to the holy banks of Rishikesh and the alpine meadows of Auli & Chopta. Explore hand-curated circuits for Indian travelers.
          </p>
        </div>

        {/* Filter Controls & Search Bar */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-10">
          
          {/* Tab buttons */}
          <div className="flex flex-wrap items-center gap-2 w-full md:w-auto">
            {filterTabs.map((tab) => (
              <button
                key={tab.value}
                onClick={() => setActiveFilter(tab.value)}
                className={`px-4 py-2 rounded-full text-xs sm:text-sm font-medium transition-all ${
                  activeFilter === tab.value
                    ? 'bg-emerald-600 text-white shadow-md'
                    : 'bg-white/5 text-slate-300 hover:bg-white/10 hover:text-white border border-white/5'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {/* Search Input */}
          <div className="relative w-full md:w-72">
            <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search Manali, Spiti, Kedarnath..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-white/5 border border-white/10 rounded-full pl-10 pr-4 py-2 text-xs sm:text-sm text-white placeholder-slate-500 focus:outline-none focus:border-emerald-400"
            />
            {searchQuery && (
              <button 
                onClick={() => setSearchQuery('')}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-slate-400 hover:text-white"
              >
                Clear
              </button>
            )}
          </div>

        </div>

        {/* Destinations Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
          {filteredLocations.map((loc) => {
            const relatedPackage = TOUR_PACKAGES.find(p => p.destinationId === loc.id);
            return (
              <div 
                key={loc.id}
                className="group relative rounded-3xl overflow-hidden bg-[#142321] border border-white/10 hover:border-emerald-500/40 transition-all duration-300 flex flex-col hover:-translate-y-1 hover:shadow-glass-card"
              >
                {/* Image & Badges */}
                <div className="relative h-64 overflow-hidden">
                  <img 
                    src={loc.heroImage} 
                    alt={loc.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" 
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#142321] via-black/20 to-transparent" />
                  
                  {/* State Badge */}
                  <div className="absolute top-4 left-4 flex items-center gap-1.5 px-3 py-1 rounded-full bg-black/60 backdrop-blur-md border border-white/15 text-xs text-white">
                    <MapPin className="w-3 h-3 text-emerald-400" />
                    <span>{loc.state}</span>
                  </div>

                  {/* Altitude Badge */}
                  <div className="absolute top-4 right-4 px-2.5 py-1 rounded-full bg-black/60 backdrop-blur-md border border-white/15 text-[11px] text-slate-300 flex items-center gap-1">
                    <Mountain className="w-3 h-3 text-amber-400" />
                    <span>{loc.altitude}</span>
                  </div>

                  {/* Feature Pill */}
                  <div className="absolute bottom-3 left-4">
                    <span className="px-2.5 py-1 rounded-lg bg-emerald-500/20 backdrop-blur-md border border-emerald-400/30 text-[11px] font-semibold text-emerald-300">
                      {loc.badge}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="text-xl font-display font-medium text-white group-hover:text-emerald-300 transition-colors">
                      {loc.name}
                    </h3>
                    <p className="text-xs text-slate-400 italic mt-0.5 mb-3 font-serif">
                      "{loc.tagline}"
                    </p>
                    <p className="text-xs text-slate-300 line-clamp-2 mb-4 leading-relaxed">
                      {loc.description}
                    </p>

                    {/* Highlights chips */}
                    <div className="space-y-1.5 mb-5">
                      <p className="text-[11px] uppercase font-semibold text-slate-400 tracking-wider">Top Experiences:</p>
                      <div className="flex flex-wrap gap-1.5">
                        {loc.highlights.slice(0, 3).map((h, i) => (
                          <span key={i} className="text-[11px] px-2 py-0.5 rounded-md bg-white/5 text-slate-300 border border-white/5">
                            • {h}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Card Footer: Duration & Price */}
                  <div className="pt-4 border-t border-white/10 flex items-center justify-between">
                    <div>
                      <span className="text-[11px] text-slate-400 block">Starting from</span>
                      <div className="flex items-baseline gap-1">
                        <span className="text-lg font-bold text-white font-display">
                          {formatPrice(loc.startingPrice)}
                        </span>
                        <span className="text-[11px] text-slate-400">/person</span>
                      </div>
                    </div>

                    <button
                      onClick={() => onSelectDestination(loc.id)}
                      className="px-4 py-2 rounded-xl bg-white/10 hover:bg-emerald-600 text-white text-xs font-semibold transition-all flex items-center gap-1.5 group-hover:bg-emerald-600"
                    >
                      <span>Explore Tours</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  </div>

                </div>

              </div>
            );
          })}
        </div>

        {/* Empty state if search finds nothing */}
        {filteredLocations.length === 0 && (
          <div className="text-center py-16 bg-white/5 rounded-3xl border border-white/10">
            <Compass className="w-10 h-10 text-emerald-400 mx-auto mb-3 opacity-60" />
            <h3 className="text-lg font-medium text-white mb-1">No destinations match "{searchQuery}"</h3>
            <p className="text-xs text-slate-400 mb-4">Try searching for Manali, Spiti, Auli, Kedarnath, or Rishikesh</p>
            <button 
              onClick={() => { setSearchQuery(''); setActiveFilter('All'); }}
              className="px-4 py-2 rounded-full bg-emerald-600 text-white text-xs font-semibold"
            >
              Reset Filters
            </button>
          </div>
        )}

      </div>
    </section>
  );
}
