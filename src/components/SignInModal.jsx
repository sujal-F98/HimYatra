import React, { useState } from 'react';
import { X, User, Phone, CheckCircle2, ShieldCheck, ArrowRight } from 'lucide-react';
import { COMPANY_INFO } from '../data/travelData';

export default function SignInModal({ onClose }) {
  const [phone, setPhone] = useState('');
  const [step, setStep] = useState('phone'); // 'phone' or 'otp' or 'success'
  const [otp, setOtp] = useState('');
  const [userName, setUserName] = useState('');

  const handleSendOtp = (e) => {
    e.preventDefault();
    if (phone.length < 10) {
      alert('Please enter a valid 10-digit mobile number');
      return;
    }
    setStep('otp');
  };

  const handleVerifyOtp = (e) => {
    e.preventDefault();
    setStep('success');
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-fadeIn">
      <div className="relative w-full max-w-md bg-[#12201e] border border-white/15 rounded-3xl p-6 sm:p-8 shadow-glass-card text-slate-100">
        
        {/* Close Button */}
        <button 
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-full bg-white/10 hover:bg-white/20 text-white/80 hover:text-white transition"
        >
          <X className="w-5 h-5" />
        </button>

        {step === 'phone' && (
          <div>
            <div className="w-12 h-12 rounded-2xl bg-white/10 border border-white/15 flex items-center justify-center text-white mb-4">
              <User className="w-6 h-6" />
            </div>

            <h3 className="text-2xl font-display font-medium text-white mb-1">
              Traveler Sign In
            </h3>
            <p className="text-xs text-slate-400 mb-6">
              Sign in to manage your Himalayan tour bookings, track driver details, and access official vouchers.
            </p>

            <form onSubmit={handleSendOtp} className="space-y-4">
              <div>
                <label className="block text-[11px] font-semibold text-slate-300 uppercase mb-1.5">
                  Mobile Number (India)
                </label>
                <div className="flex">
                  <span className="inline-flex items-center px-3 rounded-l-xl border border-r-0 border-white/15 bg-white/5 text-xs text-slate-300 font-medium">
                    +91
                  </span>
                  <input
                    type="tel"
                    required
                    placeholder="94798 17027"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value.replace(/\D/g, '').slice(0, 10))}
                    className="w-full bg-white/5 border border-white/15 rounded-r-xl px-3.5 py-2.5 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-emerald-400"
                  />
                </div>
              </div>

              <div>
                <label className="block text-[11px] font-semibold text-slate-300 uppercase mb-1.5">
                  Your Name (Optional)
                </label>
                <input
                  type="text"
                  placeholder="e.g. Sujal Ghatiya"
                  value={userName}
                  onChange={(e) => setUserName(e.target.value)}
                  className="w-full bg-white/5 border border-white/15 rounded-xl px-3.5 py-2.5 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-emerald-400"
                />
              </div>

              <button
                type="submit"
                className="w-full py-3 rounded-xl bg-white text-slate-950 font-semibold text-sm hover:bg-slate-100 transition shadow-sm active:scale-95 cursor-pointer flex items-center justify-center gap-1.5"
              >
                <span>Continue with OTP</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <div className="pt-2 text-center">
                <span className="text-[11px] text-slate-400">
                  By signing in, you agree to HimVelly's terms and travel privacy policy.
                </span>
              </div>
            </form>
          </div>
        )}

        {step === 'otp' && (
          <div>
            <h3 className="text-xl font-display font-medium text-white mb-1">
              Verify OTP
            </h3>
            <p className="text-xs text-slate-400 mb-6">
              Enter the 4-digit verification code sent to <strong className="text-white">+91 {phone}</strong>
            </p>

            <form onSubmit={handleVerifyOtp} className="space-y-4">
              <input
                type="text"
                required
                maxLength={4}
                placeholder="• • • •"
                value={otp}
                onChange={(e) => setOtp(e.target.value)}
                className="w-full text-center tracking-[1em] font-mono text-2xl bg-white/5 border border-white/15 rounded-xl py-3 text-white focus:outline-none focus:border-emerald-400"
              />

              <button
                type="submit"
                className="w-full py-3 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-semibold text-sm transition shadow-sm cursor-pointer"
              >
                Verify & Enter
              </button>

              <button
                type="button"
                onClick={() => setStep('phone')}
                className="w-full text-xs text-slate-400 hover:text-white transition text-center"
              >
                Edit Mobile Number
              </button>
            </form>
          </div>
        )}

        {step === 'success' && (
          <div className="text-center py-4 space-y-4">
            <div className="w-14 h-14 rounded-full bg-emerald-500/20 border-2 border-emerald-500 flex items-center justify-center text-emerald-400 mx-auto">
              <CheckCircle2 className="w-8 h-8" />
            </div>
            <h3 className="text-xl font-display font-medium text-white">
              Welcome, {userName || 'Explorer'}!
            </h3>
            <p className="text-xs text-slate-300">
              You are signed in as <strong className="text-white">+91 {phone}</strong>. Your customized itineraries and confirmed bookings will be synced here.
            </p>
            <button
              onClick={onClose}
              className="w-full py-3 rounded-xl bg-white text-slate-950 font-semibold text-sm hover:bg-slate-100 transition shadow-sm cursor-pointer"
            >
              Continue to Website
            </button>
          </div>
        )}

      </div>
    </div>
  );
}
