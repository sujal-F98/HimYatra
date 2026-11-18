import React from 'react';
import { 
  CheckCircle2, 
  X, 
  Calendar, 
  MapPin, 
  Users, 
  Phone, 
  MessageSquare, 
  Download, 
  Share2,
  Sparkles,
  ShieldCheck
} from 'lucide-react';
import { COMPANY_INFO } from '../data/travelData';

export default function BookingConfirmationModal({ bookingData, onClose, currency }) {
  if (!bookingData) return null;

  const refCode = bookingData.refCode || `HIM-${Math.floor(10000 + Math.random() * 90000)}-EXP`;

  const formatPrice = (inr) => {
    if (currency === 'USD') return `$${Math.round(inr / 84)}`;
    return `₹${inr.toLocaleString('en-IN')}`;
  };

  const bookingTitle = bookingData.title || bookingData.item?.title || bookingData.item?.name || 'Himalayan Tour Package';
  const travelDate = bookingData.travelDate || bookingData.dates?.checkIn || 'To Be Confirmed';
  const returnDate = bookingData.dates?.checkOut || '';
  const guestCount = bookingData.adults || bookingData.guests || bookingData.travelers || 2;
  const pickup = bookingData.pickupCity || bookingData.pickup || 'Delhi NCR';
  const totalAmount = bookingData.totalAmount || bookingData.estimatedTotal || (bookingData.item?.price ? bookingData.item.price * guestCount : 26998);

  const whatsappMessage = encodeURIComponent(
    `Hello HimVelly Team! I just submitted a reservation on your website.\n\n` +
    `• Reference ID: ${refCode}\n` +
    `• Package/Stay: ${bookingTitle}\n` +
    `• Dates: ${travelDate}${returnDate ? ' to ' + returnDate : ''}\n` +
    `• Travelers: ${guestCount} Guests\n` +
    `• Pickup: ${pickup}\n` +
    `• Estimated Total: ${formatPrice(totalAmount)}\n\n` +
    `Please share the detailed itinerary and next steps.`
  );

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-5 overflow-y-auto bg-black/85 backdrop-blur-md animate-fadeIn">
      <div className="relative w-full max-w-xl bg-[#12201e] border border-emerald-500/40 rounded-3xl overflow-hidden shadow-glass-card my-auto text-slate-100 p-6 sm:p-8">
        
        {/* Close Button */}
        <button 
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-full bg-white/10 hover:bg-white/20 text-white/80 hover:text-white transition"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Celebration Header */}
        <div className="text-center mb-6">
          <div className="w-16 h-16 rounded-full bg-emerald-500/20 border-2 border-emerald-500 flex items-center justify-center text-emerald-400 mx-auto mb-3 shadow-lg shadow-emerald-500/20">
            <CheckCircle2 className="w-9 h-9" />
          </div>
          <span className="text-xs font-bold uppercase tracking-wider text-emerald-400 bg-emerald-500/10 px-3 py-1 rounded-full border border-emerald-500/20">
            Reservation Request Received
          </span>
          <h2 className="text-2xl sm:text-3xl font-display font-medium text-white mt-2">
            Pack Your Bags for the <span className="text-emerald-400">Himalayas!</span>
          </h2>
          <p className="text-xs text-slate-400 mt-1">
            Booking Reference: <span className="font-mono font-bold text-white tracking-wider">{refCode}</span>
          </p>
        </div>

        {/* Booking Summary Box */}
        <div className="bg-black/40 border border-white/10 rounded-2xl p-5 space-y-3 mb-6 text-xs text-slate-300">
          <div className="flex justify-between pb-2 border-b border-white/10">
            <span className="text-slate-400 font-medium">Selected Experience:</span>
            <span className="font-semibold text-white text-right max-w-[240px] truncate">{bookingTitle}</span>
          </div>

          <div className="flex justify-between">
            <span className="text-slate-400 font-medium">Travel Dates:</span>
            <span className="font-semibold text-white">
              {travelDate} {returnDate ? `— ${returnDate}` : ''}
            </span>
          </div>

          <div className="flex justify-between">
            <span className="text-slate-400 font-medium">Guests / Travelers:</span>
            <span className="font-semibold text-white">{guestCount} Travelers</span>
          </div>

          <div className="flex justify-between">
            <span className="text-slate-400 font-medium">Pickup City:</span>
            <span className="font-semibold text-white">{pickup}</span>
          </div>

          <div className="flex justify-between pt-2 border-t border-white/10 text-sm">
            <span className="text-slate-300 font-semibold">Total Estimated Amount:</span>
            <span className="font-bold text-emerald-400 text-base font-display">
              {formatPrice(totalAmount)}
            </span>
          </div>
        </div>

        {/* What Happens Next Steps */}
        <div className="bg-white/5 border border-white/10 rounded-2xl p-4 mb-6">
          <h4 className="text-xs font-bold uppercase tracking-wider text-slate-300 mb-2 flex items-center gap-1.5">
            <Sparkles className="w-3.5 h-3.5 text-amber-400" />
            <span>Next Steps:</span>
          </h4>
          <ul className="text-xs text-slate-300 space-y-1.5">
            <li className="flex items-start gap-1.5">
              <span className="text-emerald-400 font-bold">1.</span>
              <span>Our dedicated travel team will review room & cab availability.</span>
            </li>
            <li className="flex items-start gap-1.5">
              <span className="text-emerald-400 font-bold">2.</span>
              <span>You will receive an official PDF voucher and permit breakdown via WhatsApp & Email within 15 minutes.</span>
            </li>
            <li className="flex items-start gap-1.5">
              <span className="text-emerald-400 font-bold">3.</span>
              <span>You can lock your slots with a simple 25% token advance.</span>
            </li>
          </ul>
        </div>

        {/* Action Buttons */}
        <div className="space-y-3">
          <a
            href={`https://wa.me/${COMPANY_INFO.whatsapp}?text=${whatsappMessage}`}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full py-3.5 px-4 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-semibold text-sm transition flex items-center justify-center gap-2 shadow-lg shadow-emerald-900/40"
          >
            <MessageSquare className="w-4 h-4" />
            <span>Chat on WhatsApp for Instant Confirmation</span>
          </a>

          <div className="grid grid-cols-2 gap-3">
            <button
              onClick={handlePrint}
              className="py-2.5 px-3 rounded-xl bg-white/10 hover:bg-white/15 text-white text-xs font-medium transition flex items-center justify-center gap-1.5 border border-white/10"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Print / Save Voucher</span>
            </button>
            <button
              onClick={onClose}
              className="py-2.5 px-3 rounded-xl bg-white/10 hover:bg-white/15 text-slate-300 hover:text-white text-xs font-medium transition text-center"
            >
              Back to Website
            </button>
          </div>
        </div>

      </div>
    </div>
  );
}
