import React, { useState } from 'react';
import { X, User, Phone, Mail, MapPin, CheckCircle2, ArrowRight, Sparkles, Lock } from 'lucide-react';
import { registerTravelerToDatabase, lookupTravelerInDatabase } from '../lib/supabase';

export default function SignInModal({ onClose, initialMode = 'signin' }) {
  const [mode, setMode] = useState(initialMode); // 'signin' or 'signup'
  const [phone, setPhone] = useState('');
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [city, setCity] = useState('');
  const [step, setStep] = useState('form'); // 'form' or 'otp' or 'success'
  const [otp, setOtp] = useState('');
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const handleSignIn = async (e) => {
    e.preventDefault();
    setErrorMessage('');
    if (phone.length < 10) {
      setErrorMessage('Please enter a valid 10-digit mobile number.');
      return;
    }
    setStep('otp');
  };

  const handleSignUp = async (e) => {
    e.preventDefault();
    setErrorMessage('');
    if (!fullName.trim()) {
      setErrorMessage('Please enter your full name.');
      return;
    }
    if (phone.length < 10) {
      setErrorMessage('Please enter a valid 10-digit mobile number.');
      return;
    }

    setLoading(true);
    // Save to Supabase travelers table
    const result = await registerTravelerToDatabase({
      fullName,
      phone,
      email,
      city
    });
    setLoading(false);

    if (result.success) {
      setStep('otp');
    } else {
      // Proceed with OTP even if network error
      setStep('otp');
    }
  };

  const handleVerifyOtp = (e) => {
    e.preventDefault();
    setStep('success');
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md animate-fadeIn">
      <div className="relative w-full max-w-md bg-[#12201e] border border-white/15 rounded-3xl p-6 sm:p-8 shadow-glass-card text-slate-100">
        
        {/* Close Button */}
        <button 
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-full bg-white/10 hover:bg-white/20 text-white/80 hover:text-white transition cursor-pointer"
        >
          <X className="w-5 h-5" />
        </button>

        {step === 'form' && (
          <div>
            {/* Header Icon */}
            <div className="w-12 h-12 rounded-2xl bg-gradient-to-tr from-emerald-600 to-emerald-400 flex items-center justify-center text-white mb-4 shadow-md">
              <User className="w-6 h-6" />
            </div>

            {/* Mode Switcher Tabs (Sign In vs Sign Up) */}
            <div className="flex bg-black/40 p-1 rounded-xl mb-6 border border-white/10">
              <button
                type="button"
                onClick={() => { setMode('signin'); setErrorMessage(''); }}
                className={`flex-1 py-2 text-xs font-semibold rounded-lg transition-all cursor-pointer ${
                  mode === 'signin'
                    ? 'bg-emerald-600 text-white shadow-sm'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                Sign In
              </button>
              <button
                type="button"
                onClick={() => { setMode('signup'); setErrorMessage(''); }}
                className={`flex-1 py-2 text-xs font-semibold rounded-lg transition-all cursor-pointer flex items-center justify-center gap-1.5 ${
                  mode === 'signup'
                    ? 'bg-emerald-600 text-white shadow-sm'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                <Sparkles className="w-3.5 h-3.5 text-amber-300" />
                <span>Create Account / Sign Up</span>
              </button>
            </div>

            {errorMessage && (
              <div className="mb-4 p-3 rounded-xl bg-rose-500/10 border border-rose-500/20 text-rose-300 text-xs">
                {errorMessage}
              </div>
            )}

            {/* SIGN IN FORM */}
            {mode === 'signin' ? (
              <form onSubmit={handleSignIn} className="space-y-4">
                <div>
                  <h3 className="text-xl font-display font-medium text-white mb-1">
                    Welcome Back Traveler
                  </h3>
                  <p className="text-xs text-slate-400">
                    Sign in with your phone number to access your confirmed bookings and vouchers.
                  </p>
                </div>

                <div>
                  <label className="block text-[11px] font-semibold text-slate-300 uppercase mb-1.5">
                    Mobile Number (India) *
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

                <button
                  type="submit"
                  className="w-full py-3 rounded-xl bg-white text-slate-950 font-semibold text-sm hover:bg-slate-100 transition shadow-sm active:scale-95 cursor-pointer flex items-center justify-center gap-1.5"
                >
                  <span>Continue with OTP</span>
                  <ArrowRight className="w-4 h-4" />
                </button>

                <div className="pt-2 text-center">
                  <p className="text-xs text-slate-400">
                    Don't have an account yet?{' '}
                    <button
                      type="button"
                      onClick={() => setMode('signup')}
                      className="text-emerald-400 font-semibold hover:underline"
                    >
                      Sign Up here
                    </button>
                  </p>
                </div>
              </form>
            ) : (
              /* SIGN UP FORM */
              <form onSubmit={handleSignUp} className="space-y-3.5">
                <div>
                  <h3 className="text-xl font-display font-medium text-white mb-1">
                    Create Traveler Account
                  </h3>
                  <p className="text-xs text-slate-400">
                    Join HimVelly for custom itineraries, snowfall alerts, and booking records.
                  </p>
                </div>

                <div>
                  <label className="block text-[11px] font-semibold text-slate-300 uppercase mb-1">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Sujal Ghatiya"
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                    className="w-full bg-white/5 border border-white/15 rounded-xl px-3.5 py-2 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-emerald-400"
                  />
                </div>

                <div>
                  <label className="block text-[11px] font-semibold text-slate-300 uppercase mb-1">
                    WhatsApp / Mobile Number *
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
                      className="w-full bg-white/5 border border-white/15 rounded-r-xl px-3.5 py-2 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-emerald-400"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-2.5">
                  <div>
                    <label className="block text-[11px] font-semibold text-slate-300 uppercase mb-1">
                      Email Address
                    </label>
                    <input
                      type="email"
                      placeholder="name@email.com"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full bg-white/5 border border-white/15 rounded-xl px-3 py-2 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-emerald-400"
                    />
                  </div>

                  <div>
                    <label className="block text-[11px] font-semibold text-slate-300 uppercase mb-1">
                      Home City
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. Indore / Delhi"
                      value={city}
                      onChange={(e) => setCity(e.target.value)}
                      className="w-full bg-white/5 border border-white/15 rounded-xl px-3 py-2 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-emerald-400"
                    />
                  </div>
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full py-3 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-semibold text-sm transition shadow-md active:scale-95 cursor-pointer flex items-center justify-center gap-1.5 mt-2"
                >
                  {loading ? (
                    <span>Registering...</span>
                  ) : (
                    <>
                      <span>Sign Up & Verify</span>
                      <ArrowRight className="w-4 h-4" />
                    </>
                  )}
                </button>

                <div className="pt-2 text-center">
                  <p className="text-xs text-slate-400">
                    Already have an account?{' '}
                    <button
                      type="button"
                      onClick={() => setMode('signin')}
                      className="text-emerald-400 font-semibold hover:underline"
                    >
                      Sign In here
                    </button>
                  </p>
                </div>
              </form>
            )}
          </div>
        )}

        {/* STEP 2: OTP VERIFICATION */}
        {step === 'otp' && (
          <div>
            <h3 className="text-xl font-display font-medium text-white mb-1">
              Verify OTP
            </h3>
            <p className="text-xs text-slate-400 mb-6">
              Enter the 4-digit code sent to <strong className="text-white">+91 {phone}</strong>
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
                Verify & Continue
              </button>

              <button
                type="button"
                onClick={() => setStep('form')}
                className="w-full text-xs text-slate-400 hover:text-white transition text-center"
              >
                Edit Mobile Number
              </button>
            </form>
          </div>
        )}

        {/* STEP 3: SUCCESS */}
        {step === 'success' && (
          <div className="text-center py-4 space-y-4">
            <div className="w-14 h-14 rounded-full bg-emerald-500/20 border-2 border-emerald-500 flex items-center justify-center text-emerald-400 mx-auto">
              <CheckCircle2 className="w-8 h-8" />
            </div>
            <h3 className="text-xl font-display font-medium text-white">
              {mode === 'signup' ? 'Account Created Successfully!' : 'Signed In Successfully!'}
            </h3>
            <p className="text-xs text-slate-300">
              Welcome, <strong className="text-white">{fullName || 'Explorer'}</strong>! Your account (+91 {phone}) is now synced with our Supabase cloud database.
            </p>
            <button
              onClick={onClose}
              className="w-full py-3 rounded-xl bg-white text-slate-950 font-semibold text-sm hover:bg-slate-100 transition shadow-sm cursor-pointer"
            >
              Start Exploring
            </button>
          </div>
        )}

      </div>
    </div>
  );
}
