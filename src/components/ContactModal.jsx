import React, { useState } from 'react';
import { 
  X, 
  Phone, 
  Mail, 
  MapPin, 
  Calendar, 
  Users, 
  Send, 
  MessageSquare,
  Sparkles,
  ShieldCheck
} from 'lucide-react';
import { COMPANY_INFO, POPULAR_LOCATIONS } from '../data/travelData';

export default function ContactModal({ onClose, onSubmitEnquiry }) {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [destination, setDestination] = useState('Manali & Solang Snow');
  const [travelMonth, setTravelMonth] = useState('Dec 2026');
  const [guests, setGuests] = useState('2');
  const [notes, setNotes] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!phone) {
      alert('Please enter your WhatsApp/Phone number');
      return;
    }

    onSubmitEnquiry({
      title: `Tour Inquiry: ${destination}`,
      customerName: name || 'Traveler',
      customerPhone: phone,
      email,
      destination,
      travelDate: travelMonth,
      adults: guests,
      notes,
      totalAmount: 18999
    });
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-5 overflow-y-auto bg-black/85 backdrop-blur-md animate-fadeIn">
      <div className="relative w-full max-w-2xl bg-[#12201e] border border-white/15 rounded-3xl overflow-hidden shadow-glass-card my-auto text-slate-100 p-6 sm:p-8">
        
        {/* Close Button */}
        <button 
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-full bg-white/10 hover:bg-white/20 text-white/80 hover:text-white transition"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Header */}
        <div className="mb-6">
          <span className="text-xs font-bold uppercase tracking-wider text-emerald-400 bg-emerald-500/10 px-3 py-1 rounded-full border border-emerald-500/20">
            Himalayan Travel Desk
          </span>
          <h2 className="text-2xl sm:text-3xl font-display font-medium text-white mt-2">
            Speak With A <span className="text-emerald-400">Local Travel Expert</span>
          </h2>
          <p className="text-xs sm:text-sm text-slate-400 mt-1">
            Fill in your details below and our team will share customized itineraries & pricing on WhatsApp within 15 mins.
          </p>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-4">
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-[11px] font-semibold text-slate-300 uppercase mb-1">
                Your Full Name *
              </label>
              <input
                type="text"
                required
                placeholder="e.g. Rahul Sharma"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full bg-white/5 border border-white/10 rounded-xl px-3.5 py-2.5 text-xs sm:text-sm text-white placeholder-slate-500 focus:outline-none focus:border-emerald-400"
              />
            </div>

            <div>
              <label className="block text-[11px] font-semibold text-slate-300 uppercase mb-1">
                WhatsApp / Phone Number *
              </label>
              <input
                type="tel"
                required
                placeholder="+91 98765 43210"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                className="w-full bg-white/5 border border-white/10 rounded-xl px-3.5 py-2.5 text-xs sm:text-sm text-white placeholder-slate-500 focus:outline-none focus:border-emerald-400"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div>
              <label className="block text-[11px] font-semibold text-slate-300 uppercase mb-1">
                Destination
              </label>
              <select
                value={destination}
                onChange={(e) => setDestination(e.target.value)}
                className="w-full bg-black/40 border border-white/10 rounded-xl px-3 py-2.5 text-xs text-white focus:outline-none focus:border-emerald-400 cursor-pointer"
              >
                <option value="Manali & Solang Valley" className="bg-[#12201e]">Manali & Solang (HP)</option>
                <option value="Spiti Valley Circuit" className="bg-[#12201e]">Spiti Valley 4x4 (HP)</option>
                <option value="Jibhi & Tirthan Valley" className="bg-[#12201e]">Jibhi & Tirthan (HP)</option>
                <option value="Shimla & Kufri" className="bg-[#12201e]">Shimla & Kufri (HP)</option>
                <option value="Dharamshala & Dalhousie" className="bg-[#12201e]">Dharamshala (HP)</option>
                <option value="Auli & Chopta Winter" className="bg-[#12201e]">Auli & Chopta (UK)</option>
                <option value="Kedarnath & Badrinath" className="bg-[#12201e]">Kedarnath Chardham (UK)</option>
                <option value="Rishikesh & Mussoorie" className="bg-[#12201e]">Rishikesh & Mussoorie (UK)</option>
                <option value="Nainital & Jim Corbett" className="bg-[#12201e]">Nainital & Corbett (UK)</option>
              </select>
            </div>

            <div>
              <label className="block text-[11px] font-semibold text-slate-300 uppercase mb-1">
                Travel Month
              </label>
              <select
                value={travelMonth}
                onChange={(e) => setTravelMonth(e.target.value)}
                className="w-full bg-black/40 border border-white/10 rounded-xl px-3 py-2.5 text-xs text-white focus:outline-none focus:border-emerald-400 cursor-pointer"
              >
                <option value="Dec 2026" className="bg-[#12201e]">December 2026</option>
                <option value="Jan 2027" className="bg-[#12201e]">January 2027</option>
                <option value="Feb 2027" className="bg-[#12201e]">February 2027</option>
                <option value="Mar 2027" className="bg-[#12201e]">March 2027</option>
                <option value="April - June 2027" className="bg-[#12201e]">April - June 2027</option>
                <option value="Flexible Dates" className="bg-[#12201e]">Flexible Dates</option>
              </select>
            </div>

            <div>
              <label className="block text-[11px] font-semibold text-slate-300 uppercase mb-1">
                Guests
              </label>
              <select
                value={guests}
                onChange={(e) => setGuests(e.target.value)}
                className="w-full bg-black/40 border border-white/10 rounded-xl px-3 py-2.5 text-xs text-white focus:outline-none focus:border-emerald-400 cursor-pointer"
              >
                <option value="1" className="bg-[#12201e]">1 Solo</option>
                <option value="2" className="bg-[#12201e]">2 (Couple)</option>
                <option value="3-4" className="bg-[#12201e]">3-4 (Family)</option>
                <option value="5-8" className="bg-[#12201e]">5-8 (Group)</option>
                <option value="9+" className="bg-[#12201e]">9+ (Large Group)</option>
              </select>
            </div>
          </div>

          <div>
            <label className="block text-[11px] font-semibold text-slate-300 uppercase mb-1">
              Special Requests or Preferences (Optional)
            </label>
            <textarea
              rows="3"
              placeholder="e.g. Need hotel with heater, honeymoon candle-light dinner, pickup from Chandigarh airport, elderly parent assistance..."
              value={notes}
              onChange={(e) => setNotes(e.target.value)}
              className="w-full bg-white/5 border border-white/10 rounded-xl px-3.5 py-2.5 text-xs sm:text-sm text-white placeholder-slate-500 focus:outline-none focus:border-emerald-400 resize-none"
            />
          </div>

          <button
            type="submit"
            className="w-full py-3.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-semibold text-sm transition flex items-center justify-center gap-2 shadow-md cursor-pointer"
          >
            <Send className="w-4 h-4" />
            <span>Request Free Itinerary & WhatsApp Quote</span>
          </button>

        </form>

        {/* Direct Contacts Bar */}
        <div className="mt-6 pt-5 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-slate-400">
          <div className="flex items-center gap-2">
            <Phone className="w-4 h-4 text-emerald-400" />
            <span>Direct Call: <strong className="text-white">{COMPANY_INFO.phone}</strong></span>
          </div>
          <div className="flex items-center gap-2">
            <Mail className="w-4 h-4 text-emerald-400" />
            <span>{COMPANY_INFO.email}</span>
          </div>
        </div>

      </div>
    </div>
  );
}
