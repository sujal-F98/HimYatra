import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import DestinationsExplorer from './components/DestinationsExplorer';
import TourPackagesSection from './components/TourPackagesSection';
import BoutiqueStaysSection from './components/BoutiqueStaysSection';
import InteractiveTourBuilder from './components/InteractiveTourBuilder';
import SeasonalGuide from './components/SeasonalGuide';
import WhyChooseUs from './components/WhyChooseUs';
import TestimonialsSection from './components/TestimonialsSection';
import FAQSection from './components/FAQSection';
import Footer from './components/Footer';
import FloatingWhatsApp from './components/FloatingWhatsApp';
import ItineraryModal from './components/ItineraryModal';
import BookingConfirmationModal from './components/BookingConfirmationModal';
import ContactModal from './components/ContactModal';
import SignInModal from './components/SignInModal';
import { TOUR_PACKAGES } from './data/travelData';
import { 
  saveBookingToDatabase, 
  saveCustomTripToDatabase, 
  saveInquiryToDatabase 
} from './lib/supabase';

export default function App() {
  const [currency, setCurrency] = useState('INR');
  const [activeDestinationFilter, setActiveDestinationFilter] = useState('All');
  const [selectedPackageForModal, setSelectedPackageForModal] = useState(null);
  const [bookingConfirmationData, setBookingConfirmationData] = useState(null);
  const [contactModalOpen, setContactModalOpen] = useState(false);
  const [signInModalOpen, setSignInModalOpen] = useState(false);
  const [currentUser, setCurrentUser] = useState(() => {
    try {
      const saved = localStorage.getItem('himvelly_user');
      return saved ? JSON.parse(saved) : null;
    } catch (e) {
      return null;
    }
  });

  const handleSignOut = () => {
    localStorage.removeItem('himvelly_user');
    setCurrentUser(null);
  };

  // Handlers with direct Supabase real-time storage
  const handleHeroBooking = async (bookingData) => {
    // Generate ref code
    const refCode = `HIM-${Math.floor(10000 + Math.random() * 90000)}-EXP`;
    const enriched = { ...bookingData, refCode };
    setBookingConfirmationData(enriched);
    
    // Asynchronously save to Supabase database
    await saveBookingToDatabase(enriched);
  };

  const handleSelectDestination = (destId) => {
    const matchedPackage = TOUR_PACKAGES.find(p => p.destinationId === destId);
    if (matchedPackage) {
      setSelectedPackageForModal(matchedPackage);
    } else {
      const el = document.getElementById('packages');
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleOpenTripBuilder = () => {
    const el = document.getElementById('planner');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  const handleSelectPackage = (pkg) => {
    setSelectedPackageForModal(pkg);
  };

  const handleQuickBook = (pkg) => {
    setSelectedPackageForModal(pkg);
  };

  const handleReserveStay = async (stay) => {
    const refCode = `HIM-${Math.floor(10000 + Math.random() * 90000)}-EXP`;
    const stayBooking = {
      type: 'stay',
      title: stay.name,
      item: stay,
      refCode,
      travelDate: '2026-12-24',
      adults: 2,
      pickupCity: 'Delhi NCR (Airport/ISBT)',
      totalAmount: stay.pricePerNight * 3 // 3 nights default
    };
    setBookingConfirmationData(stayBooking);
    await saveBookingToDatabase(stayBooking);
  };

  const handleCompleteCustomPlan = async (customPlan) => {
    const refCode = `HIM-${Math.floor(10000 + Math.random() * 90000)}-EXP`;
    const enriched = { ...customPlan, refCode };
    setBookingConfirmationData(enriched);
    await saveCustomTripToDatabase(enriched);
  };

  const handleContactSubmit = async (enquiry) => {
    setContactModalOpen(false);
    const refCode = `HIM-${Math.floor(10000 + Math.random() * 90000)}-EXP`;
    const enriched = { ...enquiry, refCode };
    setBookingConfirmationData(enriched);
    await saveInquiryToDatabase(enriched);
  };

  const handleBookFromItinerary = async (bookingPayload) => {
    setSelectedPackageForModal(null);
    const refCode = `HIM-${Math.floor(10000 + Math.random() * 90000)}-EXP`;
    const enriched = { ...bookingPayload, refCode };
    setBookingConfirmationData(enriched);
    await saveBookingToDatabase(enriched);
  };

  return (
    <div className="min-h-screen bg-[#0c1514] text-slate-100 flex flex-col font-sans">
      
      {/* Sticky Navigation Bar */}
      <Navbar 
        onOpenTripBuilder={handleOpenTripBuilder}
        onOpenContact={() => setContactModalOpen(true)}
        onOpenSignIn={() => setSignInModalOpen(true)}
        currentUser={currentUser}
        onSignOut={handleSignOut}
        onSelectDestinationFilter={(state) => {
          setActiveDestinationFilter(state);
          const el = document.getElementById('destinations');
          if (el) el.scrollIntoView({ behavior: 'smooth' });
        }}
        currency={currency}
        setCurrency={setCurrency}
      />

      <main className="flex-1">
        
        {/* Hero Section matching the user's reference image */}
        <Hero 
          onOpenBooking={handleHeroBooking}
          onOpenCustomPlanner={handleOpenTripBuilder}
          currency={currency}
        />

        {/* Popular Locations & Circuits Explorer */}
        <DestinationsExplorer 
          onSelectDestination={handleSelectDestination}
          activeFilter={activeDestinationFilter}
          setActiveFilter={setActiveDestinationFilter}
          currency={currency}
        />

        {/* Featured Tour Packages */}
        <TourPackagesSection 
          onSelectPackage={handleSelectPackage}
          onQuickBook={handleQuickBook}
          currency={currency}
        />

        {/* Boutique Mountain Stays & Eco Chalets (Woodvelly reference collection) */}
        <BoutiqueStaysSection 
          onReserveStay={handleReserveStay}
          currency={currency}
        />

        {/* Interactive Custom Tour Builder */}
        <InteractiveTourBuilder 
          onCompleteCustomPlan={handleCompleteCustomPlan}
          currency={currency}
        />

        {/* Season & Weather Guide (Winter snow, spring, summer, autumn) */}
        <SeasonalGuide 
          onSelectDestination={handleSelectDestination}
        />

        {/* Why Choose Us (Himachal-based local business advantage) */}
        <WhyChooseUs />

        {/* Verified Traveler Reviews */}
        <TestimonialsSection />

        {/* FAQs */}
        <FAQSection 
          onOpenContact={() => setContactModalOpen(true)}
        />

      </main>

      {/* Footer */}
      <Footer 
        onOpenContact={() => setContactModalOpen(true)}
        onSelectDestinationFilter={(state) => {
          setActiveDestinationFilter(state);
          const el = document.getElementById('destinations');
          if (el) el.scrollIntoView({ behavior: 'smooth' });
        }}
      />

      {/* Floating WhatsApp Action Pill */}
      <FloatingWhatsApp 
        onOpenContact={() => setContactModalOpen(true)}
      />

      {/* Modals */}
      {selectedPackageForModal && (
        <ItineraryModal 
          packageData={selectedPackageForModal}
          onClose={() => setSelectedPackageForModal(null)}
          onBookPackage={handleBookFromItinerary}
          currency={currency}
        />
      )}

      {bookingConfirmationData && (
        <BookingConfirmationModal 
          bookingData={bookingConfirmationData}
          onClose={() => setBookingConfirmationData(null)}
          currency={currency}
        />
      )}

      {contactModalOpen && (
        <ContactModal 
          onClose={() => setContactModalOpen(false)}
          onSubmitEnquiry={handleContactSubmit}
        />
      )}

      {signInModalOpen && (
        <SignInModal 
          onClose={() => setSignInModalOpen(false)}
          onLoginSuccess={(user) => {
            setCurrentUser(user);
            setSignInModalOpen(false);
          }}
        />
      )}

    </div>
  );
}
