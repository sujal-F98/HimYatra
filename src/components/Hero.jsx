import React, { useState } from 'react';
import { 
  Calendar, 
  Users, 
  MapPin, 
  Star, 
  ArrowRight, 
  ChevronDown, 
  CheckCircle2, 
  Shield, 
  Sparkles,
  Compass
} from 'lucide-react';
import { COMPANY_INFO, POPULAR_LOCATIONS, TOUR_PACKAGES, BOUTIQUE_STAYS } from '../data/travelData';

export default function Hero({ onOpenBooking, onOpenCustomPlanner, currency }) {
  // Booking Card State
  const [bookingType, setBookingType] = useState('package'); // 'package' or 'stay'
  const [selectedDestination, setSelectedDestination] = useState('manali');
  const [selectedStay, setSelectedStay] = useState('stay-novem-natural');
  const [checkInDate, setCheckInDate] = useState('2026-12-15');
  const [checkOutDate, setCheckOutDate] = useState('2026-12-20');
  const [guestCount, setGuestCount] = useState('2');
  const [pickupCity, setPickupCity] = useState('Delhi NCR (Airport/ISBT)');

  // Selected item calculation
  const currentPackage = TOUR_PACKAGES.find(p => p.destinationId === selectedDestination) || TOUR_PACKAGES[0];
  const currentStay = BOUTIQUE_STAYS.find(s => s.id === selectedStay) || BOUTIQUE_STAYS[0];

  const formatPrice = (inr) => {
    if (currency === 'USD') {
      return `$${Math.round(inr / 84)}`;
    }
    return `₹${inr.toLocaleString('en-IN')}`;
  };

  const handleHeroReserve = () => {
    if (bookingType === 'package') {
      onOpenBooking({
        type: 'package',
        item: currentPackage,
        dates: { checkIn: checkInDate, checkOut: checkOutDate },
        guests: guestCount,
        pickup: pickupCity
      });
    } else {
      onOpenBooking({
        type: 'stay',
        item: currentStay,
        dates: { checkIn: checkInDate, checkOut: checkOutDate },
        guests: guestCount,
        pickup: pickupCity
      });
    }
  };

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center pt-24 pb-16 lg:pt-28 lg:pb-24 overflow-hidden">
      
      {/* Background Image & Atmospheric Gradients matching the reference image */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=2400&q=85" 
          alt="Misty Himalayan Pine Valley & Lakeside Eco Wooden Chalet" 
          className="w-full h-full object-cover object-center scale-105 transform motion-safe:animate-pulse transition-transform duration-1000"
          style={{ animationDuration: '12s' }}
        />
        {/* Layered cinematic overlays for mood & legibility */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#0c1514] via-[#0c1514]/40 to-black/60" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0c1514]/80 via-transparent to-black/70" />
        {/* Subtle radial fog glow */}
        <div className="absolute top-1/4 left-1/3 w-[500px] h-[500px] bg-emerald-500/10 rounded-full blur-[140px] pointer-events-none" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        
        {/* Top Floating Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/15 text-xs sm:text-sm text-slate-200 mb-6 animate-fadeIn">
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
          <span className="font-medium text-emerald-300">Himachal & Uttarakhand Specialists</span>
          <span className="text-white/40">•</span>
          <span className="text-slate-300">Winter Snow & Spring Bookings Open</span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Hero Title & Description (Direct match to reference typography) */}
          <div className="lg:col-span-7 space-y-6 sm:space-y-8 text-left">
            
            <div className="space-y-1">
              <h1 className="text-4xl sm:text-6xl xl:text-7xl font-light tracking-tight text-white leading-[1.1] font-display">
                <span className="block font-light text-slate-100">Explore</span>
                <span className="block font-serif italic text-white/95 font-semibold">Nature's</span>
                <span className="block font-bold text-white tracking-tight">Secret Paths</span>
              </h1>
            </div>

            <p className="max-w-xl text-base sm:text-lg text-slate-300 font-normal leading-relaxed">
              Discover curated Himalayan wilderness tours & boutique wooden stays crafted for pure comfort. 
              Disconnect from the noise, relax deeply, and reconnect with the majestic peaks of 
              <span className="text-white font-medium"> Himachal</span> and <span className="text-white font-medium">Uttarakhand</span>.
            </p>

            {/* Social Proof Rating Badge - Faithful match to reference "★ 4.8 from 1,200+ stays" */}
            <div className="flex flex-wrap items-center gap-6 pt-2">
              <div className="flex items-center gap-2.5 bg-black/40 backdrop-blur-md px-4 py-2 rounded-2xl border border-white/10">
                <div className="flex items-center text-amber-400">
                  <Star className="w-5 h-5 fill-amber-400 text-amber-400" />
                </div>
                <div className="flex flex-col">
                  <span className="text-lg font-bold text-white leading-none">4.9</span>
                  <span className="text-xs text-slate-400">from 2,450+ verified trips</span>
                </div>
              </div>

              <div className="flex items-center gap-2 text-xs sm:text-sm text-slate-300">
                <Shield className="w-4 h-4 text-emerald-400" />
                <span>100% Local Pahadi Drivers & Verified Eco-Chalets</span>
              </div>
            </div>

            {/* Popular quick tags */}
            <div className="pt-2 flex flex-wrap items-center gap-2 text-xs">
              <span className="text-slate-400 font-medium">Popular:</span>
              <a href="#packages" className="px-3 py-1 rounded-full bg-white/5 hover:bg-white/15 border border-white/10 text-slate-200 transition">
                ❄️ Manali & Solang Snow
              </a>
              <a href="#packages" className="px-3 py-1 rounded-full bg-white/5 hover:bg-white/15 border border-white/10 text-slate-200 transition">
                🚙 Spiti 4x4 Circuit
              </a>
              <a href="#packages" className="px-3 py-1 rounded-full bg-white/5 hover:bg-white/15 border border-white/10 text-slate-200 transition">
                🕉️ Kedarnath Yatra
              </a>
              <a href="#stays" className="px-3 py-1 rounded-full bg-white/5 hover:bg-white/15 border border-white/10 text-slate-200 transition">
                🏡 Tirthan Eco Resort
              </a>
            </div>

          </div>

          {/* Right Column: Floating Frosted Glass Reservation Card (Faithful Tribute to Reference Card) */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            
            <div className="w-full max-w-md rounded-3xl p-6 sm:p-7 bg-[#12201e]/85 backdrop-blur-2xl border border-white/15 shadow-glass-card text-white relative overflow-hidden transition-all duration-300 hover:border-white/25">
              
              {/* Subtle accent glow */}
              <div className="absolute top-0 right-0 w-44 h-44 bg-emerald-500/15 rounded-full blur-3xl pointer-events-none" />

              {/* Mode Toggle: Tour Package vs Eco Stay */}
              <div className="flex items-center bg-black/40 p-1 rounded-xl mb-5 border border-white/10">
                <button
                  type="button"
                  onClick={() => setBookingType('package')}
                  className={`flex-1 py-1.5 text-xs font-semibold rounded-lg transition-all ${
                    bookingType === 'package' 
                      ? 'bg-emerald-600 text-white shadow-sm' 
                      : 'text-slate-400 hover:text-white'
                  }`}
                >
                  All-Inclusive Tour Package
                </button>
                <button
                  type="button"
                  onClick={() => setBookingType('stay')}
                  className={`flex-1 py-1.5 text-xs font-semibold rounded-lg transition-all ${
                    bookingType === 'stay' 
                      ? 'bg-emerald-600 text-white shadow-sm' 
                      : 'text-slate-400 hover:text-white'
                  }`}
                >
                  Eco Resort & Chalet
                </button>
              </div>

              {/* Card Title - Styled directly like "Novem Natural Eco Resort" in reference */}
              <div className="mb-5">
                <p className="text-xs uppercase tracking-wider text-emerald-400 font-semibold mb-1">
                  {bookingType === 'package' ? 'Selected Himalayan Tour' : 'Featured Wilderness Stay'}
                </p>
                <h3 className="text-2xl sm:text-3xl font-display font-medium text-white tracking-tight">
                  {bookingType === 'package' ? currentPackage.title.split(' ')[0] + ' ' + currentPackage.title.split(' ')[1] : currentStay.name}
                </h3>
                <p className="text-xs text-slate-300 mt-1 flex items-center gap-1">
                  <MapPin className="w-3.5 h-3.5 text-emerald-400" />
                  <span>{bookingType === 'package' ? currentPackage.route.split('→')[1] || currentPackage.state : currentStay.location}</span>
                </p>
              </div>

              {/* Select destination / stay dropdown */}
              <div className="mb-4">
                <label className="block text-[11px] font-semibold text-slate-300 uppercase tracking-wider mb-1.5">
                  {bookingType === 'package' ? 'Select Destination Route' : 'Select Wooden Chalet / Resort'}
                </label>
                <div className="relative">
                  {bookingType === 'package' ? (
                    <select
                      value={selectedDestination}
                      onChange={(e) => setSelectedDestination(e.target.value)}
                      className="w-full bg-black/40 border border-white/15 rounded-xl px-3 py-2.5 text-sm text-white focus:outline-none focus:border-emerald-400 appearance-none cursor-pointer"
                    >
                      {TOUR_PACKAGES.map(pkg => (
                        <option key={pkg.id} value={pkg.destinationId} className="bg-[#12201e] text-white">
                          {pkg.state}: {pkg.title} ({pkg.duration})
                        </option>
                      ))}
                    </select>
                  ) : (
                    <select
                      value={selectedStay}
                      onChange={(e) => setSelectedStay(e.target.value)}
                      className="w-full bg-black/40 border border-white/15 rounded-xl px-3 py-2.5 text-sm text-white focus:outline-none focus:border-emerald-400 appearance-none cursor-pointer"
                    >
                      {BOUTIQUE_STAYS.map(stay => (
                        <option key={stay.id} value={stay.id} className="bg-[#12201e] text-white">
                          {stay.name} - {stay.location}
                        </option>
                      ))}
                    </select>
                  )}
                  <ChevronDown className="w-4 h-4 text-slate-400 absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none" />
                </div>
              </div>

              {/* Date Selectors (Exact visual pattern from reference card: "Jan 11" | "Jan 15" with icons) */}
              <div className="grid grid-cols-2 gap-3 mb-4">
                <div className="bg-black/40 border border-white/15 rounded-xl p-3 hover:border-white/30 transition">
                  <div className="flex items-center justify-between text-xs text-slate-400 mb-1">
                    <span className="flex items-center gap-1">
                      <Calendar className="w-3.5 h-3.5 text-emerald-400" />
                      <span>{bookingType === 'package' ? 'Start Date' : 'Check-in'}</span>
                    </span>
                    <ChevronDown className="w-3.5 h-3.5 text-slate-400" />
                  </div>
                  <input 
                    type="date"
                    value={checkInDate}
                    onChange={(e) => setCheckInDate(e.target.value)}
                    className="w-full bg-transparent text-sm font-semibold text-white focus:outline-none cursor-pointer"
                  />
                  <span className="text-[10px] text-slate-400 block mt-0.5">
                    {bookingType === 'package' ? 'Morning departure' : 'After 2:00 PM'}
                  </span>
                </div>

                <div className="bg-black/40 border border-white/15 rounded-xl p-3 hover:border-white/30 transition">
                  <div className="flex items-center justify-between text-xs text-slate-400 mb-1">
                    <span className="flex items-center gap-1">
                      <Calendar className="w-3.5 h-3.5 text-emerald-400" />
                      <span>{bookingType === 'package' ? 'End Date' : 'Check-out'}</span>
                    </span>
                    <ChevronDown className="w-3.5 h-3.5 text-slate-400" />
                  </div>
                  <input 
                    type="date"
                    value={checkOutDate}
                    onChange={(e) => setCheckOutDate(e.target.value)}
                    className="w-full bg-transparent text-sm font-semibold text-white focus:outline-none cursor-pointer"
                  />
                  <span className="text-[10px] text-slate-400 block mt-0.5">
                    {bookingType === 'package' ? 'Drop-off evening' : 'Until 12:00 PM'}
                  </span>
                </div>
              </div>

              {/* Guests and Pickup City */}
              <div className="grid grid-cols-2 gap-3 mb-5">
                <div className="bg-black/40 border border-white/15 rounded-xl p-2.5">
                  <label className="text-[10px] uppercase font-semibold text-slate-400 block mb-1">Travelers / Guests</label>
                  <div className="flex items-center gap-1.5">
                    <Users className="w-3.5 h-3.5 text-emerald-400" />
                    <select
                      value={guestCount}
                      onChange={(e) => setGuestCount(e.target.value)}
                      className="w-full bg-transparent text-xs font-medium text-white focus:outline-none cursor-pointer"
                    >
                      <option value="1" className="bg-[#12201e]">1 Solo Explorer</option>
                      <option value="2" className="bg-[#12201e]">2 Guests (Couple)</option>
                      <option value="3" className="bg-[#12201e]">3 Guests (Small Group)</option>
                      <option value="4" className="bg-[#12201e]">4 Guests (Family)</option>
                      <option value="6" className="bg-[#12201e]">6+ Guests (SUV/Group)</option>
                    </select>
                  </div>
                </div>

                <div className="bg-black/40 border border-white/15 rounded-xl p-2.5">
                  <label className="text-[10px] uppercase font-semibold text-slate-400 block mb-1">Pickup City</label>
                  <div className="flex items-center gap-1.5">
                    <MapPin className="w-3.5 h-3.5 text-emerald-400" />
                    <select
                      value={pickupCity}
                      onChange={(e) => setPickupCity(e.target.value)}
                      className="w-full bg-transparent text-xs font-medium text-white focus:outline-none cursor-pointer"
                    >
                      {COMPANY_INFO.pickupCities.map((c) => (
                        <option key={c} value={c} className="bg-[#12201e]">{c.split('(')[0]}</option>
                      ))}
                    </select>
                  </div>
                </div>
              </div>

              {/* Price Row (Matching Reference: "$55.00/night   2-5 guests") */}
              <div className="flex items-baseline justify-between pt-2 pb-5 border-t border-white/10">
                <div>
                  <div className="flex items-baseline gap-1.5">
                    <span className="text-2xl sm:text-3xl font-bold text-white tracking-tight font-display">
                      {bookingType === 'package' ? formatPrice(currentPackage.price) : formatPrice(currentStay.pricePerNight)}
                    </span>
                    <span className="text-xs text-slate-400">
                      {bookingType === 'package' ? '/person all-inc' : '/night'}
                    </span>
                  </div>
                  {bookingType === 'package' && (
                    <span className="text-[11px] text-emerald-400 line-through opacity-75 mr-2">
                      {formatPrice(currentPackage.originalPrice)}
                    </span>
                  )}
                  {bookingType === 'package' && (
                    <span className="text-[11px] bg-emerald-500/20 text-emerald-300 px-1.5 py-0.5 rounded font-medium">
                      {currentPackage.discountPercentage}% OFF
                    </span>
                  )}
                </div>
                <div className="text-right">
                  <span className="text-xs text-slate-400 block">
                    {bookingType === 'package' ? currentPackage.duration : currentStay.capacity}
                  </span>
                  <span className="text-[11px] text-emerald-300">★ 4.9 Rating</span>
                </div>
              </div>

              {/* Reserve Button - Clean white pill button matching the reference */}
              <button
                type="button"
                onClick={handleHeroReserve}
                className="w-full py-3.5 px-6 rounded-2xl bg-white text-slate-900 font-semibold text-sm hover:bg-slate-100 hover:shadow-glow transition-all active:scale-[0.98] flex items-center justify-center gap-2 group cursor-pointer"
              >
                <span>{bookingType === 'package' ? 'Reserve This Tour Package' : 'Reserve Eco Stay'}</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>

              {/* Micro guarantee badge */}
              <div className="flex items-center justify-center gap-4 mt-3 text-[11px] text-slate-400">
                <span className="flex items-center gap-1">
                  <CheckCircle2 className="w-3 h-3 text-emerald-400" /> Free Rescheduling
                </span>
                <span className="flex items-center gap-1">
                  <CheckCircle2 className="w-3 h-3 text-emerald-400" /> 25% Token to Reserve
                </span>
              </div>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
}
