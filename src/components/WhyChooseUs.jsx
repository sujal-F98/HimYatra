import React from 'react';
import { 
  ShieldCheck, 
  MapPin, 
  Clock, 
  Award, 
  Headphones, 
  HeartHandshake,
  FileCheck,
  Compass
} from 'lucide-react';
import { COMPANY_INFO } from '../data/travelData';

export default function WhyChooseUs() {
  const features = [
    {
      icon: MapPin,
      title: "100% Local Pahadi Drivers",
      desc: "Our drivers were born and raised navigating high Himalayan mountain passes like Atal Tunnel, Jalori Pass, and Rohtang. Safe, courteous, and polite."
    },
    {
      icon: Headphones,
      title: "24/7 On-Ground Support",
      desc: "Unlike distant booking portals, we provide round-the-clock dedicated helpline support and on-ground local team coordination throughout your journey."
    },
    {
      icon: FileCheck,
      title: "Hassle-Free Government Permits",
      desc: "We take care of green vehicle permits for Rohtang Pass, Inner Line Permits for Spiti Valley, and biometric Chardham Yatra registrations."
    },
    {
      icon: Award,
      title: "Handpicked Wooden Chalets",
      desc: "We personally inspect every eco-resort and boutique timber stay to ensure cozy wooden aesthetics, clean linens, hot water, and delicious pahadi food."
    },
    {
      icon: HeartHandshake,
      title: "Zero Hidden Charges",
      desc: "Our quotes include fuel, toll taxes, driver night allowances, parking, and state border permits. What we quote is strictly what you pay."
    },
    {
      icon: ShieldCheck,
      title: "Flexible Rescheduling Guarantee",
      desc: "Mountains can be unpredictable. If weather closes a pass or roads, we assist you with alternative circuits without penalizing cancellation fees."
    }
  ];

  return (
    <section id="about" className="py-24 bg-[#0c1514] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-semibold uppercase tracking-wider mb-3">
            <Award className="w-3.5 h-3.5" />
            <span>The HimVelly Advantage</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-display font-medium text-white tracking-tight mb-4">
            Why Indian Travelers Trust <span className="text-emerald-400">HimVelly</span>
          </h2>
          <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
            Planning a trip to the Himalayas should feel exciting, not stressful. 
            Experience true Himalayan warmth with our locally rooted team.
          </p>
        </div>

        {/* Feature Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
          {features.map((feat, i) => {
            const Icon = feat.icon;
            return (
              <div 
                key={i}
                className="bg-[#142321] border border-white/10 rounded-3xl p-7 hover:border-emerald-500/40 transition-all duration-300 hover:-translate-y-1 hover:shadow-glass-card group"
              >
                <div className="w-12 h-12 rounded-2xl bg-emerald-600/20 border border-emerald-500/30 flex items-center justify-center text-emerald-400 mb-5 group-hover:scale-110 group-hover:bg-emerald-600 group-hover:text-white transition-all">
                  <Icon className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-display font-medium text-white mb-2 group-hover:text-emerald-300 transition-colors">
                  {feat.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  {feat.desc}
                </p>
              </div>
            );
          })}
        </div>

        {/* Stats counter strip */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6 bg-[#12201e] border border-white/10 rounded-3xl p-8 text-center shadow-glass">
          <div>
            <div className="text-3xl sm:text-4xl font-display font-bold text-white mb-1">
              {COMPANY_INFO.happyTravelers}
            </div>
            <div className="text-xs text-slate-400">Happy Travelers Across India</div>
          </div>
          <div>
            <div className="text-3xl sm:text-4xl font-display font-bold text-emerald-400 mb-1">
              4.9 / 5.0
            </div>
            <div className="text-xs text-slate-400">Google & TripAdvisor Rating</div>
          </div>
          <div>
            <div className="text-3xl sm:text-4xl font-display font-bold text-white mb-1">
              9+ Years
            </div>
            <div className="text-xs text-slate-400">Himalayan Route Expertise</div>
          </div>
          <div>
            <div className="text-3xl sm:text-4xl font-display font-bold text-amber-400 mb-1">
              100%
            </div>
            <div className="text-xs text-slate-400">Pahadi Ground Coordination</div>
          </div>
        </div>

      </div>
    </section>
  );
}
