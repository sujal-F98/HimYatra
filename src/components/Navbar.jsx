import React, { useState, useEffect } from 'react';
import { ArrowUpRight, User, Menu, X, LogOut, CheckCircle } from 'lucide-react';
import { COMPANY_INFO } from '../data/travelData';

export default function Navbar({ 
  onOpenTripBuilder, 
  onOpenContact, 
  onOpenSignIn, 
  currentUser, 
  onSignOut,
  onSelectDestinationFilter 
}) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [userDropdownOpen, setUserDropdownOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id) => {
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      const yOffset = -70;
      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  const navLinks = [
    { label: 'Home', id: 'hero' },
    { label: 'Tour', id: 'packages' },
    { label: 'Destinations', id: 'destinations' },
    { label: 'About Us', id: 'about' },
    { label: 'Reviews', id: 'reviews' },
    { label: 'Contact Us', id: 'contact' },
  ];

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-[#0c1514]/90 backdrop-blur-md py-3.5 border-b border-white/10 shadow-lg' 
          : 'bg-gradient-to-b from-black/85 via-black/40 to-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Brand Logo & Name (Original First Design) */}
          <button 
            onClick={() => scrollToSection('hero')}
            className="flex items-center gap-2.5 text-left cursor-pointer group shrink-0"
          >
            <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-himachal-600 to-himachal-400 flex items-center justify-center text-white shadow-md shadow-himachal-900/50 group-hover:scale-105 transition-transform">
              <svg className="w-5 h-5 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                <path d="m8 3 4 8 5-5 5 15H2L8 3z"/>
              </svg>
            </div>
            <div className="flex flex-col">
              <span className="text-xl sm:text-2xl font-bold tracking-tight text-white flex items-center font-display leading-tight">
                Him<span className="text-emerald-400">Velly</span>
              </span>
              <span className="text-[10px] tracking-widest uppercase text-slate-400 -mt-0.5 font-medium">
                Himachal & Uttarakhand
              </span>
            </div>
          </button>

          {/* Center Navigation Links: Home, Tour, Destinations, About Us, Reviews, Contact Us (from reference screenshot) */}
          <div className="hidden md:flex items-center gap-5 lg:gap-7 xl:gap-8">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => scrollToSection(link.id)}
                className="text-xs lg:text-sm font-normal text-white/80 hover:text-white transition-colors cursor-pointer"
              >
                {link.label}
              </button>
            ))}
          </div>

          {/* Right Action Buttons: [Plan Custom Trip ↗] and [ 👤 Sign In ] */}
          <div className="hidden md:flex items-center gap-2.5 lg:gap-3 shrink-0">
            {/* Frosted Pill Button: Plan Custom Trip ↗ */}
            <button
              onClick={() => {
                scrollToSection('planner');
                if (onOpenTripBuilder) onOpenTripBuilder();
              }}
              className="px-3.5 lg:px-4 py-2 rounded-full bg-white/10 hover:bg-white/20 border border-white/20 text-white text-xs lg:text-sm font-medium transition backdrop-blur-md flex items-center gap-1.5 cursor-pointer"
            >
              <span>Plan Custom Trip</span>
              <ArrowUpRight className="w-3.5 h-3.5 text-slate-300" />
            </button>

            {/* User Profile or Sign In / Sign Up Button */}
            {currentUser ? (
              <div className="relative">
                <button
                  onClick={() => setUserDropdownOpen(!userDropdownOpen)}
                  className="px-3.5 lg:px-4 py-2 rounded-full bg-emerald-600/30 hover:bg-emerald-600/40 border border-emerald-500/40 text-emerald-300 font-semibold text-xs lg:text-sm transition flex items-center gap-2 cursor-pointer shadow-sm"
                >
                  <div className="w-5 h-5 rounded-full bg-emerald-500 text-white flex items-center justify-center text-[10px] font-bold">
                    {currentUser.fullName.charAt(0).toUpperCase()}
                  </div>
                  <span>{currentUser.fullName.split(' ')[0]}</span>
                </button>

                {userDropdownOpen && (
                  <div 
                    onMouseLeave={() => setUserDropdownOpen(false)}
                    className="absolute right-0 top-full mt-2 w-52 bg-[#12201d] border border-white/15 rounded-2xl shadow-glass-card p-3 backdrop-blur-xl z-50 animate-fadeIn"
                  >
                    <div className="p-2 border-b border-white/10 mb-2">
                      <p className="text-xs font-bold text-white truncate">{currentUser.fullName}</p>
                      <p className="text-[10px] text-slate-400 mt-0.5">+91 {currentUser.phone}</p>
                    </div>

                    <button
                      onClick={() => {
                        setUserDropdownOpen(false);
                        onSignOut();
                      }}
                      className="w-full text-left px-3 py-2 text-xs text-rose-300 hover:bg-rose-500/10 rounded-xl transition flex items-center gap-2 cursor-pointer"
                    >
                      <LogOut className="w-3.5 h-3.5" />
                      <span>Sign Out</span>
                    </button>
                  </div>
                )}
              </div>
            ) : (
              <button
                onClick={onOpenSignIn}
                className="px-4 lg:px-4.5 py-2 rounded-full bg-white text-slate-950 hover:bg-slate-100 font-semibold text-xs lg:text-sm transition flex items-center gap-1.5 shadow-sm active:scale-95 cursor-pointer"
              >
                <User className="w-4 h-4 text-slate-900" />
                <span>Sign In / Sign Up</span>
              </button>
            )}
          </div>

          {/* Mobile Hamburger Menu Toggle (Only on phones < 768px) */}
          <div className="flex items-center gap-2 md:hidden">
            {currentUser ? (
              <button
                onClick={onSignOut}
                className="px-2.5 py-1.5 rounded-full bg-emerald-600/30 border border-emerald-500/30 text-emerald-300 font-semibold text-xs flex items-center gap-1"
                title="Click to sign out"
              >
                <User className="w-3 h-3" />
                <span className="truncate max-w-[70px]">{currentUser.fullName.split(' ')[0]}</span>
              </button>
            ) : (
              <button
                onClick={onOpenSignIn}
                className="px-3 py-1.5 rounded-full bg-white text-slate-950 font-semibold text-xs flex items-center gap-1"
              >
                <User className="w-3.5 h-3.5" />
                <span>Sign In / Up</span>
              </button>
            )}

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-1.5 text-white/80 hover:text-white cursor-pointer ml-1"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#0c1514]/98 border-b border-white/10 px-6 py-6 mt-3 backdrop-blur-2xl animate-fadeIn space-y-3.5">
          {navLinks.map((link) => (
            <button
              key={link.id}
              onClick={() => scrollToSection(link.id)}
              className="block w-full text-left py-2 text-base font-normal text-white/85 hover:text-white"
            >
              {link.label}
            </button>
          ))}

          <div className="pt-3 border-t border-white/10 flex flex-col gap-2.5">
            <button
              onClick={() => {
                scrollToSection('planner');
                setMobileMenuOpen(false);
              }}
              className="w-full py-2.5 rounded-full bg-white/10 border border-white/20 text-white text-sm font-medium flex items-center justify-center gap-1.5"
            >
              <span>Plan Custom Trip</span>
              <ArrowUpRight className="w-4 h-4 text-slate-300" />
            </button>

            {currentUser ? (
              <div className="p-3 bg-white/5 border border-white/10 rounded-2xl flex items-center justify-between">
                <div>
                  <p className="text-xs font-bold text-white">{currentUser.fullName}</p>
                  <p className="text-[10px] text-slate-400">+91 {currentUser.phone}</p>
                </div>
                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onSignOut();
                  }}
                  className="px-3 py-1.5 rounded-xl bg-rose-500/20 text-rose-300 border border-rose-500/30 text-xs font-semibold"
                >
                  Sign Out
                </button>
              </div>
            ) : (
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenSignIn();
                }}
                className="w-full py-2.5 rounded-full bg-white text-slate-950 font-semibold text-sm flex items-center justify-center gap-1.5 shadow-sm"
              >
                <User className="w-4 h-4 text-slate-900" />
                <span>Sign In / Sign Up</span>
              </button>
            )}
          </div>
        </div>
      )}
    </nav>
  );
}
