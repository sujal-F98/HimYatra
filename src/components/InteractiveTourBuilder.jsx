import React, { useState } from 'react';
import { 
  Sparkles, 
  MapPin, 
  Calendar, 
  Users, 
  Car, 
  Hotel, 
  Check, 
  ArrowRight, 
  PhoneCall,
  ShieldCheck,
  Send
} from 'lucide-react';
import { COMPANY_INFO } from '../data/travelData';

export default function InteractiveTourBuilder({ onCompleteCustomPlan, currency }) {
  const [selectedState, setSelectedState] = useState('Himachal Pradesh');
  const [selectedDestinations, setSelectedDestinations] = useState(['manali', 'solang']);
  const [durationDays, setDurationDays] = useState(5);
  const [travelerType, setTravelerType] = useState('couple');
  const [adultCount, setAdultCount] = useState(2);
  const [hotelTier, setHotelTier] = useState('deluxe'); // 'homestay', 'deluxe', 'luxury_chalet'
  const [vehicleType, setVehicleType] = useState('innova'); // 'sedan', 'innova', 'tempo'
  const [customerName, setCustomerName] = useState('');
  const [customerPhone, setCustomerPhone] = useState('');
  const [pickupCity, setPickupCity] = useState('Delhi NCR (Airport/ISBT)');
  const [travelMonth, setTravelMonth] = useState('December 2026');

  const himachalPlaces = [
    { id: 'manali', name: 'Manali & Solang' },
    { id: 'atal-tunnel', name: 'Atal Tunnel & Sissu' },
    { id: 'spiti', name: 'Spiti Valley' },
    { id: 'kasol', name: 'Kasol & Parvati' },
    { id: 'jibhi', name: 'Jibhi & Tirthan' },
    { id: 'shimla', name: 'Shimla & Kufri' },
    { id: 'dharamshala', name: 'Dharamshala' }
  ];

  const uttarakhandPlaces = [
    { id: 'rishikesh', name: 'Rishikesh' },
    { id: 'mussoorie', name: 'Mussoorie' },
    { id: 'auli', name: 'Auli & Chopta' },
    { id: 'kedarnath', name: 'Kedarnath Dham' },
    { id: 'badrinath', name: 'Badrinath Dham' },
    { id: 'nainital', name: 'Nainital & Corbett' }
  ];

  const currentAvailablePlaces = selectedState === 'Himachal Pradesh' 
    ? himachalPlaces 
    : selectedState === 'Uttarakhand' 
      ? uttarakhandPlaces 
      : [...himachalPlaces.slice(0, 4), ...uttarakhandPlaces.slice(0, 3)];

  const toggleDestination = (id) => {
    if (selectedDestinations.includes(id)) {
      if (selectedDestinations.length > 1) {
        setSelectedDestinations(selectedDestinations.filter(d => d !== id));
      }
    } else {
      setSelectedDestinations([...selectedDestinations, id]);
    }
  };

  // Base price calculation algorithm
  const calculateEstimatedPrice = () => {
    let baseRatePerDay = 2400; // per person per day

    if (hotelTier === 'homestay') baseRatePerDay = 1900;
    if (hotelTier === 'luxury_chalet') baseRatePerDay = 3800;

    // Vehicle premium factor
    let vehicleCostPerDay = 3200; // sedan
    if (vehicleType === 'innova') vehicleCostPerDay = 4500;
    if (vehicleType === 'tempo') vehicleCostPerDay = 6800;

    const totalDays = durationDays;
    const persons = adultCount;

    const stayCost = baseRatePerDay * totalDays * persons;
    const transportCost = vehicleCostPerDay * totalDays;
    const permitsAndAssistance = 1500 * persons;

    const totalTripEstimate = stayCost + transportCost + permitsAndAssistance;
    const perPersonRate = Math.round(totalTripEstimate / persons);

    return { total: totalTripEstimate, perPerson: perPersonRate };
  };

  const estimate = calculateEstimatedPrice();

  const formatPrice = (inr) => {
    if (currency === 'USD') return `$${Math.round(inr / 84)}`;
    return `₹${inr.toLocaleString('en-IN')}`;
  };

  const handleSubmitPlan = (e) => {
    e.preventDefault();
    if (!customerPhone) {
      alert('Please enter your WhatsApp or Phone number to receive the custom quote.');
      return;
    }

    onCompleteCustomPlan({
      title: `Custom ${selectedState} Expedition (${durationDays} Days / ${durationDays - 1} Nights)`,
      state: selectedState,
      destinations: selectedDestinations,
      days: durationDays,
      travelers: adultCount,
      travelerType,
      hotelTier,
      vehicleType,
      pickupCity,
      travelMonth,
      estimatedTotal: estimate.total,
      estimatedPerPerson: estimate.perPerson,
      customerName: customerName || 'Valued Traveler',
      customerPhone
    });
  };

  return (
    <section id="planner" className="py-24 bg-[#091110] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Title */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-400 text-xs font-semibold uppercase tracking-wider mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Smart Custom Itinerary Engine</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-display font-medium text-white tracking-tight mb-4">
            Design Your Dream <span className="text-emerald-400">Himalayan Journey</span>
          </h2>
          <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
            Customize every leg of your trip with live cost estimates. 
            Choose your places, vehicle, and stay style with 100% verified local Pahadi guidance.
          </p>
        </div>

        {/* Builder Container */}
        <div className="bg-[#12201e] border border-white/10 rounded-3xl p-6 sm:p-10 shadow-glass-card">
          <form onSubmit={handleSubmitPlan} className="grid grid-cols-1 lg:grid-cols-12 gap-10">
            
            {/* Left 8 Columns: Selectors */}
            <div className="lg:col-span-8 space-y-8">
              
              {/* Step 1: Select Region */}
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-300 mb-3 flex items-center gap-2">
                  <span className="w-5 h-5 rounded-full bg-emerald-600 text-white text-[10px] flex items-center justify-center font-bold">1</span>
                  <span>Select State / Region</span>
                </label>
                <div className="grid grid-cols-3 gap-3">
                  {[
                    { id: 'Himachal Pradesh', title: 'Himachal Pradesh', sub: 'Manali, Spiti, Kasol' },
                    { id: 'Uttarakhand', title: 'Uttarakhand', sub: 'Auli, Rishikesh, Chardham' },
                    { id: 'Combined Grand Circuit', title: 'Grand Combined', sub: 'HP + Uttarakhand' },
                  ].map((st) => (
                    <button
                      key={st.id}
                      type="button"
                      onClick={() => {
                        setSelectedState(st.id);
                        setSelectedDestinations(st.id === 'Uttarakhand' ? ['rishikesh', 'auli'] : ['manali', 'atal-tunnel']);
                      }}
                      className={`p-3.5 rounded-2xl border text-left transition-all ${
                        selectedState === st.id
                          ? 'bg-emerald-600/20 border-emerald-500 text-white shadow-md'
                          : 'bg-white/5 border-white/10 text-slate-300 hover:bg-white/10'
                      }`}
                    >
                      <p className="text-xs sm:text-sm font-semibold">{st.title}</p>
                      <p className="text-[11px] text-slate-400 mt-0.5">{st.sub}</p>
                    </button>
                  ))}
                </div>
              </div>

              {/* Step 2: Choose Destinations */}
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-300 mb-3 flex items-center gap-2">
                  <span className="w-5 h-5 rounded-full bg-emerald-600 text-white text-[10px] flex items-center justify-center font-bold">2</span>
                  <span>Select Destinations to Include (Click to toggle)</span>
                </label>
                <div className="flex flex-wrap gap-2">
                  {currentAvailablePlaces.map((place) => {
                    const isSelected = selectedDestinations.includes(place.id);
                    return (
                      <button
                        key={place.id}
                        type="button"
                        onClick={() => toggleDestination(place.id)}
                        className={`px-3.5 py-2 rounded-xl text-xs font-medium border flex items-center gap-1.5 transition-all ${
                          isSelected 
                            ? 'bg-emerald-600 border-emerald-500 text-white shadow-sm'
                            : 'bg-white/5 border-white/10 text-slate-300 hover:border-white/20'
                        }`}
                      >
                        {isSelected && <Check className="w-3 h-3 text-white" />}
                        <span>{place.name}</span>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Step 3: Duration & Group */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-300 mb-2 flex items-center gap-2">
                    <span className="w-5 h-5 rounded-full bg-emerald-600 text-white text-[10px] flex items-center justify-center font-bold">3</span>
                    <span>Trip Duration: <span className="text-emerald-400 font-bold">{durationDays} Days / {durationDays - 1} Nights</span></span>
                  </label>
                  <input
                    type="range"
                    min="3"
                    max="12"
                    value={durationDays}
                    onChange={(e) => setDurationDays(Number(e.target.value))}
                    className="w-full accent-emerald-500 cursor-pointer"
                  />
                  <div className="flex justify-between text-[11px] text-slate-400 mt-1">
                    <span>3 Days (Weekend)</span>
                    <span>6 Days (Standard)</span>
                    <span>12 Days (Grand)</span>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-300 mb-2 flex items-center gap-2">
                    <span className="w-5 h-5 rounded-full bg-emerald-600 text-white text-[10px] flex items-center justify-center font-bold">4</span>
                    <span>Travelers / Guests: <span className="text-emerald-400 font-bold">{adultCount} Adults</span></span>
                  </label>
                  <div className="flex items-center gap-3">
                    <input
                      type="range"
                      min="1"
                      max="14"
                      value={adultCount}
                      onChange={(e) => setAdultCount(Number(e.target.value))}
                      className="w-full accent-emerald-500 cursor-pointer"
                    />
                    <span className="text-sm font-bold text-white bg-white/10 px-3 py-1 rounded-lg">
                      {adultCount}
                    </span>
                  </div>
                </div>
              </div>

              {/* Step 4: Accommodation & Vehicle Choice */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                
                {/* Stay Type */}
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-300 mb-2.5">
                    Stay Preference
                  </label>
                  <div className="space-y-2">
                    {[
                      { id: 'homestay', name: 'Cozy Homestays & Camps', desc: 'Authentic local charm, pocket-friendly' },
                      { id: 'deluxe', name: '3-Star Deluxe Wooden Hotels', desc: 'Great views, heated rooms, buffet meals' },
                      { id: 'luxury_chalet', name: '4/5-Star Boutique Pine Chalets', desc: 'Reference Woodvelly luxury & fireplaces' },
                    ].map((tier) => (
                      <button
                        key={tier.id}
                        type="button"
                        onClick={() => setHotelTier(tier.id)}
                        className={`w-full p-2.5 rounded-xl border text-left text-xs transition ${
                          hotelTier === tier.id 
                            ? 'bg-emerald-600/20 border-emerald-500 text-white' 
                            : 'bg-white/5 border-white/10 text-slate-300 hover:bg-white/10'
                        }`}
                      >
                        <p className="font-semibold">{tier.name}</p>
                        <p className="text-[10px] text-slate-400">{tier.desc}</p>
                      </button>
                    ))}
                  </div>
                </div>

                {/* Vehicle Type */}
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-300 mb-2.5">
                    Private Vehicle Type
                  </label>
                  <div className="space-y-2">
                    {[
                      { id: 'sedan', name: 'AC Sedan (Dzire / Etios)', desc: 'Ideal for 2-3 travelers, smooth hilly ride' },
                      { id: 'innova', name: 'SUV (Innova Crysta / Ertiga)', desc: 'Most comfortable for families & mountain curves' },
                      { id: 'tempo', name: '12-Seater Luxury Tempo Traveller', desc: 'Spacious for groups, pushback leather seats' },
                    ].map((veh) => (
                      <button
                        key={veh.id}
                        type="button"
                        onClick={() => setVehicleType(veh.id)}
                        className={`w-full p-2.5 rounded-xl border text-left text-xs transition ${
                          vehicleType === veh.id 
                            ? 'bg-emerald-600/20 border-emerald-500 text-white' 
                            : 'bg-white/5 border-white/10 text-slate-300 hover:bg-white/10'
                        }`}
                      >
                        <p className="font-semibold">{veh.name}</p>
                        <p className="text-[10px] text-slate-400">{veh.desc}</p>
                      </button>
                    ))}
                  </div>
                </div>

              </div>

              {/* Pickup and Travel Month */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-300 mb-1.5">
                    Pickup Location
                  </label>
                  <select
                    value={pickupCity}
                    onChange={(e) => setPickupCity(e.target.value)}
                    className="w-full bg-black/40 border border-white/10 rounded-xl px-3 py-2 text-xs text-white focus:outline-none focus:border-emerald-400"
                  >
                    {COMPANY_INFO.pickupCities.map(c => (
                      <option key={c} value={c} className="bg-[#12201e]">{c}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-300 mb-1.5">
                    Estimated Travel Month
                  </label>
                  <select
                    value={travelMonth}
                    onChange={(e) => setTravelMonth(e.target.value)}
                    className="w-full bg-black/40 border border-white/10 rounded-xl px-3 py-2 text-xs text-white focus:outline-none focus:border-emerald-400"
                  >
                    <option value="December 2026" className="bg-[#12201e]">December 2026 (Snowfall peak)</option>
                    <option value="January 2027" className="bg-[#12201e]">January 2027 (Winter wonderland)</option>
                    <option value="February 2027" className="bg-[#12201e]">February 2027 (Skiing & Snow)</option>
                    <option value="March 2027" className="bg-[#12201e]">March 2027 (Apple blossoms)</option>
                    <option value="April - June 2027" className="bg-[#12201e]">April - June 2027 (Summer escapes & Chardham)</option>
                    <option value="Later / Flexible" className="bg-[#12201e]">Later / Flexible Dates</option>
                  </select>
                </div>
              </div>

            </div>

            {/* Right 4 Columns: Live Cost Breakdown & Instant Submit Card */}
            <div className="lg:col-span-4 bg-black/40 border border-white/10 rounded-2xl p-6 flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-1.5 text-xs text-emerald-400 font-semibold uppercase tracking-wider mb-2">
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>Real-time Transparent Estimate</span>
                </div>

                <h4 className="text-xl font-display font-medium text-white mb-4">
                  {selectedState} Custom Circuit
                </h4>

                {/* Summary points */}
                <div className="space-y-2 text-xs text-slate-300 pb-5 border-b border-white/10">
                  <div className="flex justify-between">
                    <span className="text-slate-400">Duration:</span>
                    <span className="font-semibold text-white">{durationDays} Days / {durationDays - 1} Nights</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-400">Travelers:</span>
                    <span className="font-semibold text-white">{adultCount} Adults</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-400">Destinations:</span>
                    <span className="font-semibold text-emerald-400">{selectedDestinations.length} Stops Chosen</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-400">Vehicle:</span>
                    <span className="font-semibold text-white">{vehicleType.toUpperCase()}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-400">Meals Included:</span>
                    <span className="font-semibold text-white">Breakfast & Dinner</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-400">Permits & Tolls:</span>
                    <span className="font-semibold text-emerald-400">Included</span>
                  </div>
                </div>

                {/* Cost Display */}
                <div className="py-5">
                  <div className="text-xs text-slate-400 mb-1">Estimated Starting Price:</div>
                  <div className="flex items-baseline gap-2">
                    <span className="text-3xl font-bold text-white font-display">
                      {formatPrice(estimate.perPerson)}
                    </span>
                    <span className="text-xs text-slate-400">/person</span>
                  </div>
                  <p className="text-[11px] text-slate-400 mt-1">
                    Total Estimated Package: <span className="text-white font-semibold">{formatPrice(estimate.total)}</span> for {adultCount} travelers
                  </p>
                </div>

                {/* User contact details */}
                <div className="space-y-3 pt-2">
                  <div>
                    <input
                      type="text"
                      placeholder="Your Full Name"
                      value={customerName}
                      onChange={(e) => setCustomerName(e.target.value)}
                      className="w-full bg-white/5 border border-white/10 rounded-xl px-3 py-2 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-emerald-400"
                    />
                  </div>
                  <div>
                    <input
                      type="tel"
                      required
                      placeholder="WhatsApp / Phone Number *"
                      value={customerPhone}
                      onChange={(e) => setCustomerPhone(e.target.value)}
                      className="w-full bg-white/5 border border-white/10 rounded-xl px-3 py-2 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-emerald-400"
                    />
                  </div>
                </div>

              </div>

              {/* Submit CTA */}
              <div className="pt-6 space-y-2">
                <button
                  type="submit"
                  className="w-full py-3.5 px-4 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-semibold text-xs sm:text-sm transition flex items-center justify-center gap-2 shadow-md cursor-pointer"
                >
                  <Send className="w-4 h-4" />
                  <span>Get Detailed Custom Quote & Plan</span>
                </button>
                <p className="text-[10px] text-center text-slate-400">
                  ⚡ Local Pahadi travel expert will WhatsApp you within 15 mins.
                </p>
              </div>

            </div>

          </form>
        </div>

      </div>
    </section>
  );
}
