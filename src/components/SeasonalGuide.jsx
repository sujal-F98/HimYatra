import React, { useState } from 'react';
import { 
  Snowflake, 
  Sun, 
  CloudRain, 
  Leaf, 
  Thermometer, 
  Compass,
  Sparkles,
  Shirt
} from 'lucide-react';
import { SEASONS_DATA } from '../data/travelData';

export default function SeasonalGuide({ onSelectDestination }) {
  const [selectedSeason, setSelectedSeason] = useState('winter');

  const activeSeason = SEASONS_DATA.find(s => s.id === selectedSeason) || SEASONS_DATA[0];

  return (
    <section id="seasons" className="py-24 bg-[#0a1211] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-semibold uppercase tracking-wider mb-3">
            <Thermometer className="w-3.5 h-3.5" />
            <span>Himalayan Weather & Season Advisory</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-display font-medium text-white tracking-tight mb-4">
            When Is The Best Time To <span className="text-emerald-400">Visit?</span>
          </h2>
          <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
            Every season in Devbhoomi paints a completely distinct mood. 
            Choose your preferred weather and let us guide you to the perfect spots.
          </p>
        </div>

        {/* Season Selector Tabs */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 max-w-4xl mx-auto mb-10">
          {[
            { id: 'winter', label: '❄️ Winter Snow', sub: 'Dec - Feb' },
            { id: 'spring', label: '🌸 Spring Blossoms', sub: 'Mar - Apr' },
            { id: 'summer', label: '☀️ Summer Escape', sub: 'May - Jun' },
            { id: 'autumn', label: '🍁 Golden Autumn', sub: 'Sep - Nov' },
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setSelectedSeason(tab.id)}
              className={`p-4 rounded-2xl border text-center transition-all ${
                selectedSeason === tab.id
                  ? 'bg-emerald-600 border-emerald-500 text-white shadow-lg'
                  : 'bg-white/5 border-white/10 text-slate-300 hover:bg-white/10'
              }`}
            >
              <p className="font-semibold text-sm sm:text-base">{tab.label}</p>
              <p className={`text-xs mt-0.5 ${selectedSeason === tab.id ? 'text-emerald-100' : 'text-slate-400'}`}>
                {tab.sub}
              </p>
            </button>
          ))}
        </div>

        {/* Active Season Detail Showcase */}
        <div className="bg-[#12201e] border border-white/10 rounded-3xl overflow-hidden shadow-glass-card grid grid-cols-1 lg:grid-cols-12">
          
          {/* Image col */}
          <div className="lg:col-span-5 relative min-h-[300px] lg:min-h-full">
            <img 
              src={activeSeason.image} 
              alt={activeSeason.name}
              className="w-full h-full object-cover" 
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#12201e] via-transparent to-black/30" />
            <div className="absolute bottom-6 left-6 right-6">
              <span className="text-xs uppercase font-bold text-amber-400 tracking-wider block mb-1">
                Typical Temperatures:
              </span>
              <div className="text-3xl font-display font-bold text-white">
                {activeSeason.temp}
              </div>
              <p className="text-xs text-slate-200 mt-1">{activeSeason.months}</p>
            </div>
          </div>

          {/* Details col */}
          <div className="lg:col-span-7 p-6 sm:p-10 space-y-6">
            <div>
              <span className="text-xs font-bold text-emerald-400 uppercase tracking-wider block mb-1">
                Season Profile
              </span>
              <h3 className="text-2xl sm:text-3xl font-display font-medium text-white">
                {activeSeason.name}
              </h3>
              <p className="text-sm text-slate-300 font-serif italic mt-1">
                "{activeSeason.tagline}"
              </p>
            </div>

            {/* Top Destinations for this season */}
            <div>
              <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-2 flex items-center gap-1.5">
                <Compass className="w-3.5 h-3.5 text-emerald-400" />
                <span>Recommended Spots To Visit:</span>
              </h4>
              <div className="flex flex-wrap gap-2">
                {activeSeason.topSpots.map((spot, i) => (
                  <span key={i} className="px-3 py-1.5 rounded-xl bg-white/5 border border-white/10 text-xs text-white font-medium">
                    📍 {spot}
                  </span>
                ))}
              </div>
            </div>

            {/* Key Experiences */}
            <div>
              <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-2 flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5 text-amber-400" />
                <span>Prime Experiences:</span>
              </h4>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-slate-300">
                {activeSeason.experiences.map((exp, i) => (
                  <li key={i} className="flex items-start gap-1.5 bg-black/20 p-2 rounded-lg border border-white/5">
                    <span className="text-emerald-400">✓</span>
                    <span>{exp}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Clothing Advice */}
            <div className="bg-white/5 border border-white/10 rounded-2xl p-4 flex items-start gap-3">
              <Shirt className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
              <div>
                <h5 className="text-xs font-bold uppercase tracking-wider text-white">What To Pack:</h5>
                <p className="text-xs text-slate-300 mt-0.5">{activeSeason.clothingTip}</p>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
