import React, { useState } from 'react';
import { 
  MapPin, 
  Phone, 
  Mail, 
  ShieldCheck, 
  Heart, 
  Compass, 
  Send,
  CheckCircle2
} from 'lucide-react';
import { COMPANY_INFO } from '../data/travelData';
import { subscribeNewsletterToDatabase } from '../lib/supabase';

export default function Footer({ onOpenContact, onSelectDestinationFilter }) {
  const [newsletterEmail, setNewsletterEmail] = useState('');
  const [subscribedMessage, setSubscribedMessage] = useState('');

  const handleSubscribe = async (e) => {
    e.preventDefault();
    if (!newsletterEmail || !newsletterEmail.includes('@')) {
      alert('Please enter a valid email address');
      return;
    }
    await subscribeNewsletterToDatabase(newsletterEmail);
    setSubscribedMessage('Subscribed to Himalayan alerts!');
    setNewsletterEmail('');
    setTimeout(() => setSubscribedMessage(''), 4000);
  };
  return (
    <footer id="contact" className="bg-[#080e0d] text-slate-300 pt-16 pb-12 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-white/10">
          
          {/* Brand Info (2 cols) */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-2.5">
              <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-himachal-600 to-himachal-400 flex items-center justify-center text-white shadow-md">
                <svg className="w-5 h-5 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="m8 3 4 8 5-5 5 15H2L8 3z"/>
                </svg>
              </div>
              <span className="text-2xl font-bold tracking-tight text-white font-display">
                Him<span className="text-emerald-400">Velly</span>
              </span>
            </div>

            <p className="text-xs sm:text-sm text-slate-400 leading-relaxed max-w-sm">
              HimVelly is a premier Himachal-based travel and eco-hospitality company dedicated to offering authentic, safe, and luxurious mountain journeys across Himachal Pradesh and Uttarakhand.
            </p>

            <div className="space-y-2 text-xs text-slate-400">
              <p className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <span><strong>Headquarters:</strong> {COMPANY_INFO.headquarters}</span>
              </p>
              <p className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <span><strong>Branch Office:</strong> {COMPANY_INFO.branchOffice}</span>
              </p>
              <p className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>{COMPANY_INFO.phone} / {COMPANY_INFO.altPhone}</span>
              </p>
              <p className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>{COMPANY_INFO.email}</span>
              </p>
            </div>
          </div>

          {/* Himachal Tours */}
          <div className="space-y-3">
            <h4 className="text-sm font-semibold text-white uppercase tracking-wider font-display">
              Himachal Pradesh
            </h4>
            <ul className="text-xs space-y-2 text-slate-400">
              <li>
                <a href="#destinations" onClick={() => onSelectDestinationFilter('Himachal Pradesh')} className="hover:text-emerald-400 transition">
                  Manali & Solang Snow Tour
                </a>
              </li>
              <li>
                <a href="#destinations" onClick={() => onSelectDestinationFilter('Himachal Pradesh')} className="hover:text-emerald-400 transition">
                  Spiti Valley 4x4 Circuit
                </a>
              </li>
              <li>
                <a href="#destinations" onClick={() => onSelectDestinationFilter('Himachal Pradesh')} className="hover:text-emerald-400 transition">
                  Kasol & Parvati Valley
                </a>
              </li>
              <li>
                <a href="#destinations" onClick={() => onSelectDestinationFilter('Himachal Pradesh')} className="hover:text-emerald-400 transition">
                  Jibhi & Tirthan Treehouses
                </a>
              </li>
              <li>
                <a href="#destinations" onClick={() => onSelectDestinationFilter('Himachal Pradesh')} className="hover:text-emerald-400 transition">
                  Shimla Colonial Heritage
                </a>
              </li>
              <li>
                <a href="#destinations" onClick={() => onSelectDestinationFilter('Himachal Pradesh')} className="hover:text-emerald-400 transition">
                  Dharamshala & McLeodGanj
                </a>
              </li>
            </ul>
          </div>

          {/* Uttarakhand Tours */}
          <div className="space-y-3">
            <h4 className="text-sm font-semibold text-white uppercase tracking-wider font-display">
              Uttarakhand
            </h4>
            <ul className="text-xs space-y-2 text-slate-400">
              <li>
                <a href="#destinations" onClick={() => onSelectDestinationFilter('Uttarakhand')} className="hover:text-emerald-400 transition">
                  Auli Skiing & Chopta Trek
                </a>
              </li>
              <li>
                <a href="#destinations" onClick={() => onSelectDestinationFilter('Uttarakhand')} className="hover:text-emerald-400 transition">
                  Kedarnath & Badrinath Yatra
                </a>
              </li>
              <li>
                <a href="#destinations" onClick={() => onSelectDestinationFilter('Uttarakhand')} className="hover:text-emerald-400 transition">
                  Rishikesh River Rafting
                </a>
              </li>
              <li>
                <a href="#destinations" onClick={() => onSelectDestinationFilter('Uttarakhand')} className="hover:text-emerald-400 transition">
                  Mussoorie Queen of the Hills
                </a>
              </li>
              <li>
                <a href="#destinations" onClick={() => onSelectDestinationFilter('Uttarakhand')} className="hover:text-emerald-400 transition">
                  Nainital & Jim Corbett Safari
                </a>
              </li>
            </ul>
          </div>

          {/* Newsletter / Quick Call */}
          <div className="space-y-3">
            <h4 className="text-sm font-semibold text-white uppercase tracking-wider font-display">
              Himalayan Bulletin
            </h4>
            <p className="text-xs text-slate-400">
              Get secret season updates, snowfall alerts, and exclusive group discounts.
            </p>
            <form onSubmit={handleSubscribe} className="space-y-1.5">
              <div className="flex items-center gap-1.5">
                <input
                  type="email"
                  required
                  placeholder="Enter email address"
                  value={newsletterEmail}
                  onChange={(e) => setNewsletterEmail(e.target.value)}
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-3 py-2 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-emerald-400"
                />
                <button 
                  type="submit"
                  className="p-2 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white transition cursor-pointer"
                  title="Subscribe"
                >
                  <Send className="w-4 h-4" />
                </button>
              </div>
              {subscribedMessage && (
                <p className="text-[11px] text-emerald-400 flex items-center gap-1 animate-fadeIn">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  <span>{subscribedMessage}</span>
                </p>
              )}
            </form>
            
            <div className="pt-2">
              <span className="text-[11px] text-emerald-400 font-semibold block mb-1">Government Registered:</span>
              <p className="text-[10px] text-slate-500">HP Department of Tourism & Civil Aviation Reg. No: HP-TO-2017-9842</p>
            </div>
          </div>

        </div>

        {/* Bottom Bar: Copyright & Payment Badges */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <div>
            © {new Date().getFullYear()} HimVelly Journeys Pvt Ltd. Crafted with passion for the Himalayas.
          </div>

          {/* Accepted payment modes */}
          <div className="flex items-center gap-2">
            <span className="text-[11px] text-slate-400">Payment Modes:</span>
            <span className="px-2 py-0.5 rounded bg-white/5 border border-white/10 text-[10px] text-slate-300">UPI / GPay / PhonePe</span>
            <span className="px-2 py-0.5 rounded bg-white/5 border border-white/10 text-[10px] text-slate-300">Netbanking</span>
            <span className="px-2 py-0.5 rounded bg-white/5 border border-white/10 text-[10px] text-slate-300">Cards</span>
          </div>
        </div>

      </div>
    </footer>
  );
}
