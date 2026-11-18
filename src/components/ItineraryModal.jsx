import React, { useState } from 'react';
import { 
  X, 
  Clock, 
  MapPin, 
  Calendar, 
  Users, 
  Check, 
  XCircle, 
  Star, 
  ArrowRight,
  ShieldCheck,
  Send,
  Sparkles
} from 'lucide-react';
import { COMPANY_INFO } from '../data/travelData';

export default function ItineraryModal({ packageData, onClose, onBookPackage, currency }) {
  if (!packageData) return null;

  const [activeDay, setActiveDay] = useState(1);
  const [adults, setAdults] = useState(2);
  const [travelDate, setTravelDate] = useState('2026-12-20');
  const [pickupCity, setPickupCity] = useState('Delhi NCR (Airport/ISBT)');
  const [hotelUpgrade, setHotelUpgrade] = useState('deluxe'); // 'deluxe', 'chalet'
  const [fullName, setFullName] = useState('');
  const [phone, setPhone] = useState('');

  const formatPrice = (inr) => {
    if (currency === 'USD') return `$${Math.round(inr / 84)}`;
    return `₹${inr.toLocaleString('en-IN')}`;
  };

  // Calculate live price
  const basePricePerPerson = packageData.price;
  const upgradeCostPerPerson = hotelUpgrade === 'chalet' ? 3500 : 0;
  const finalPricePerPerson = basePricePerPerson + upgradeCostPerPerson;
  const totalAmount = finalPricePerPerson * adults;

  const handleBookingSubmit = (e) => {
    e.preventDefault();
    if (!phone) {
      alert('Please provide your phone/WhatsApp number');
      return;
    }

    onBookPackage({
      packageId: packageData.id,
      title: packageData.title,
      state: packageData.state,
      duration: packageData.duration,
      adults,
      travelDate,
      pickupCity,
      hotelUpgrade,
      pricePerPerson: finalPricePerPerson,
      totalAmount,
      fullName: fullName || 'Himalayan Explorer',
      phone
    });
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-5 overflow-y-auto bg-black/85 backdrop-blur-md animate-fadeIn">
      
      {/* Modal Card */}
      <div className="relative w-full max-w-4xl bg-[#12201e] border border-white/15 rounded-3xl overflow-hidden shadow-glass-card my-auto max-h-[92vh] flex flex-col text-slate-100">
        
        {/* Header Bar */}
        <div className="relative h-48 sm:h-56 shrink-0 overflow-hidden">
          <img 
            src={packageData.heroImage} 
            alt={packageData.title}
            className="w-full h-full object-cover" 
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#12201e] via-[#12201e]/60 to-black/40" />

          {/* Close button */}
          <button 
            onClick={onClose}
            className="absolute top-4 right-4 p-2 rounded-full bg-black/60 hover:bg-black/90 text-white/80 hover:text-white border border-white/20 transition"
          >
            <X className="w-5 h-5" />
          </button>

          {/* Title and metadata in header */}
          <div className="absolute bottom-4 left-6 right-6">
            <div className="flex flex-wrap items-center gap-2 mb-1.5">
              <span className="px-2.5 py-0.5 rounded-full bg-emerald-500/20 border border-emerald-500/30 text-emerald-300 text-xs font-semibold">
                {packageData.state}
              </span>
              <span className="px-2.5 py-0.5 rounded-full bg-black/60 border border-white/10 text-slate-200 text-xs flex items-center gap-1">
                <Clock className="w-3 h-3 text-emerald-400" />
                {packageData.duration}
              </span>
              <span className="text-amber-400 text-xs flex items-center gap-1 font-bold">
                <Star className="w-3.5 h-3.5 fill-amber-400" />
                {packageData.rating} ({packageData.reviewCount} reviews)
              </span>
            </div>

            <h2 className="text-2xl sm:text-3xl font-display font-medium text-white leading-tight">
              {packageData.title}
            </h2>
            <p className="text-xs text-slate-300 line-clamp-1 mt-1">
              Route: {packageData.route}
            </p>
          </div>
        </div>

        {/* Scrollable Content Body */}
        <div className="overflow-y-auto p-6 sm:p-8 space-y-8 flex-1">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            
            {/* Left 7 cols: Day by Day Itinerary & Inclusions */}
            <div className="lg:col-span-7 space-y-6">
              
              {/* Day by Day Header */}
              <div>
                <h3 className="text-lg font-display font-semibold text-white mb-3 flex items-center gap-2">
                  <Calendar className="w-4 h-4 text-emerald-400" />
                  <span>Day-by-Day Detailed Itinerary</span>
                </h3>

                {/* Day selector tabs */}
                <div className="flex items-center gap-1.5 overflow-x-auto pb-2 mb-3">
                  {packageData.itinerary.map((item) => (
                    <button
                      key={item.day}
                      onClick={() => setActiveDay(item.day)}
                      className={`px-3 py-1.5 rounded-xl text-xs font-semibold shrink-0 transition ${
                        activeDay === item.day
                          ? 'bg-emerald-600 text-white shadow-sm'
                          : 'bg-white/5 text-slate-400 hover:text-white hover:bg-white/10'
                      }`}
                    >
                      Day {item.day}
                    </button>
                  ))}
                </div>

                {/* Active day detailed card */}
                {packageData.itinerary
                  .filter(item => item.day === activeDay)
                  .map(item => (
                    <div key={item.day} className="bg-white/5 border border-white/10 rounded-2xl p-4 animate-fadeIn">
                      <div className="flex items-center gap-2 mb-2">
                        <span className="w-6 h-6 rounded-lg bg-emerald-600/30 text-emerald-400 font-bold text-xs flex items-center justify-center">
                          {item.day}
                        </span>
                        <h4 className="text-sm font-semibold text-white">
                          {item.title}
                        </h4>
                      </div>
                      <p className="text-xs text-slate-300 leading-relaxed pl-8">
                        {item.details}
                      </p>
                    </div>
                  ))}
              </div>

              {/* Inclusions & Exclusions */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                <div className="bg-emerald-950/20 border border-emerald-500/20 rounded-2xl p-4">
                  <h4 className="text-xs font-bold text-emerald-400 uppercase tracking-wider mb-2.5 flex items-center gap-1.5">
                    <Check className="w-4 h-4" />
                    <span>What's Included</span>
                  </h4>
                  <ul className="text-xs text-slate-300 space-y-1.5">
                    {packageData.inclusions.map((inc, i) => (
                      <li key={i} className="flex items-start gap-1.5">
                        <Check className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                        <span>{inc}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="bg-rose-950/15 border border-rose-500/20 rounded-2xl p-4">
                  <h4 className="text-xs font-bold text-rose-400 uppercase tracking-wider mb-2.5 flex items-center gap-1.5">
                    <XCircle className="w-4 h-4" />
                    <span>What's Excluded</span>
                  </h4>
                  <ul className="text-xs text-slate-300 space-y-1.5">
                    {packageData.exclusions.map((exc, i) => (
                      <li key={i} className="flex items-start gap-1.5">
                        <span className="text-rose-400 shrink-0">•</span>
                        <span>{exc}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

            </div>

            {/* Right 5 cols: Live Price Calculator & Instant Reservation Form */}
            <div className="lg:col-span-5 bg-black/40 border border-white/10 rounded-2xl p-5 flex flex-col justify-between">
              
              <form onSubmit={handleBookingSubmit} className="space-y-4">
                <div className="border-b border-white/10 pb-3">
                  <span className="text-[10px] uppercase font-bold text-emerald-400 tracking-wider block">Reserve Your Slots</span>
                  <div className="flex items-baseline justify-between mt-1">
                    <div className="flex items-baseline gap-1.5">
                      <span className="text-2xl font-bold text-white font-display">
                        {formatPrice(finalPricePerPerson)}
                      </span>
                      <span className="text-xs text-slate-400">/person</span>
                    </div>
                    <span className="text-xs text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded">
                      {packageData.discountPercentage}% OFF
                    </span>
                  </div>
                </div>

                {/* Number of adults */}
                <div>
                  <label className="block text-[11px] font-semibold text-slate-300 uppercase mb-1">
                    Number of Travelers
                  </label>
                  <div className="flex items-center gap-2">
                    <Users className="w-4 h-4 text-emerald-400" />
                    <select
                      value={adults}
                      onChange={(e) => setAdults(Number(e.target.value))}
                      className="w-full bg-white/5 border border-white/15 rounded-xl px-3 py-2 text-xs text-white focus:outline-none focus:border-emerald-400 cursor-pointer"
                    >
                      {[1, 2, 3, 4, 5, 6, 8, 10, 12].map(n => (
                        <option key={n} value={n} className="bg-[#12201e]">{n} Traveler{n > 1 ? 's' : ''}</option>
                      ))}
                    </select>
                  </div>
                </div>

                {/* Departure date */}
                <div>
                  <label className="block text-[11px] font-semibold text-slate-300 uppercase mb-1">
                    Departure Date
                  </label>
                  <div className="flex items-center gap-2">
                    <Calendar className="w-4 h-4 text-emerald-400" />
                    <input
                      type="date"
                      value={travelDate}
                      onChange={(e) => setTravelDate(e.target.value)}
                      className="w-full bg-white/5 border border-white/15 rounded-xl px-3 py-2 text-xs text-white focus:outline-none focus:border-emerald-400 cursor-pointer"
                    />
                  </div>
                </div>

                {/* Pickup City */}
                <div>
                  <label className="block text-[11px] font-semibold text-slate-300 uppercase mb-1">
                    Pickup Location
                  </label>
                  <div className="flex items-center gap-2">
                    <MapPin className="w-4 h-4 text-emerald-400" />
                    <select
                      value={pickupCity}
                      onChange={(e) => setPickupCity(e.target.value)}
                      className="w-full bg-white/5 border border-white/15 rounded-xl px-3 py-2 text-xs text-white focus:outline-none focus:border-emerald-400 cursor-pointer"
                    >
                      {COMPANY_INFO.pickupCities.map(c => (
                        <option key={c} value={c} className="bg-[#12201e]">{c}</option>
                      ))}
                    </select>
                  </div>
                </div>

                {/* Hotel category upgrade */}
                <div>
                  <label className="block text-[11px] font-semibold text-slate-300 uppercase mb-1">
                    Accommodation Tier
                  </label>
                  <div className="grid grid-cols-2 gap-2 text-xs">
                    <button
                      type="button"
                      onClick={() => setHotelUpgrade('deluxe')}
                      className={`p-2 rounded-xl border text-left transition ${
                        hotelUpgrade === 'deluxe' 
                          ? 'bg-emerald-600/20 border-emerald-500 text-white font-medium' 
                          : 'bg-white/5 border-white/10 text-slate-400'
                      }`}
                    >
                      <span>3-Star Deluxe</span>
                      <span className="block text-[10px] text-slate-400">Included</span>
                    </button>
                    <button
                      type="button"
                      onClick={() => setHotelUpgrade('chalet')}
                      className={`p-2 rounded-xl border text-left transition ${
                        hotelUpgrade === 'chalet' 
                          ? 'bg-emerald-600/20 border-emerald-500 text-white font-medium' 
                          : 'bg-white/5 border-white/10 text-slate-400'
                      }`}
                    >
                      <span>Luxury Pine Chalet</span>
                      <span className="block text-[10px] text-emerald-400">+{formatPrice(3500)}/p</span>
                    </button>
                  </div>
                </div>

                {/* Contact info inputs */}
                <div className="space-y-2 pt-2 border-t border-white/10">
                  <input
                    type="text"
                    placeholder="Your Full Name"
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-3 py-2 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-emerald-400"
                  />
                  <input
                    type="tel"
                    required
                    placeholder="WhatsApp / Phone Number *"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-3 py-2 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-emerald-400"
                  />
                </div>

                {/* Total amount summary */}
                <div className="bg-emerald-500/10 border border-emerald-500/20 rounded-xl p-3 flex justify-between items-center">
                  <div>
                    <span className="text-[10px] uppercase font-bold text-slate-400 block">Total for {adults} Travelers:</span>
                    <span className="text-xl font-bold text-white font-display">{formatPrice(totalAmount)}</span>
                  </div>
                  <span className="text-[11px] text-emerald-400 font-semibold">25% Advance to Lock</span>
                </div>

                {/* Submit button */}
                <button
                  type="submit"
                  className="w-full py-3 px-4 rounded-xl bg-white text-slate-900 font-bold text-xs sm:text-sm hover:bg-slate-100 hover:shadow-glow transition active:scale-[0.98] flex items-center justify-center gap-1.5 cursor-pointer"
                >
                  <Send className="w-4 h-4 text-emerald-700" />
                  <span>Reserve This Package Now</span>
                </button>

                <p className="text-[10px] text-center text-slate-400">
                  🔒 Zero booking fees. Full refund on cancellation up to 7 days prior.
                </p>

              </form>

            </div>

          </div>

        </div>

      </div>

    </div>
  );
}
