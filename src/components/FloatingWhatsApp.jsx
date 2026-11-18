import React from 'react';
import { MessageSquare, Phone } from 'lucide-react';
import { COMPANY_INFO } from '../data/travelData';

export default function FloatingWhatsApp({ onOpenContact }) {
  const whatsappUrl = `https://wa.me/${COMPANY_INFO.whatsapp}?text=${encodeURIComponent("Hello HimVelly team! I'm planning a trip to Himachal / Uttarakhand. Please share current available tour packages and rates.")}`;

  return (
    <div className="fixed bottom-5 right-5 z-40 flex flex-col items-end gap-2.5">
      {/* WhatsApp Action Pill */}
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-2.5 px-4 py-3 rounded-full bg-[#25D366] hover:bg-[#20ba59] text-white shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-300 font-semibold text-xs sm:text-sm group"
        aria-label="Chat on WhatsApp"
      >
        <div className="w-2 h-2 rounded-full bg-white animate-ping" />
        <span className="hidden sm:inline">Chat with Local Expert</span>
        <span className="sm:hidden">WhatsApp</span>
        <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
          <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.582 2.128 2.182-.573c.978.58 1.911.928 3.145.929 3.178 0 5.767-2.587 5.768-5.766.001-3.187-2.575-5.77-5.764-5.771zm3.392 8.244c-.144.405-.837.774-1.17.824-.299.045-.677.063-1.092-.069-.252-.08-.575-.187-.988-.365-1.739-.751-2.874-2.502-2.961-2.617-.087-.116-.708-.94-.708-1.793s.448-1.273.607-1.446c.159-.173.346-.217.462-.217l.332.006c.106.005.249-.04.39.298.144.347.491 1.2.534 1.287.043.087.072.188.014.304-.058.116-.087.188-.173.289l-.26.304c-.087.086-.177.18-.076.354.101.174.449.741.964 1.201.662.591 1.221.774 1.394.86.173.086.275.071.376-.044.101-.116.433-.506.549-.68.116-.173.231-.145.39-.087s1.011.477 1.184.564.289.13.332.202c.045.072.045.419-.099.824z"/>
        </svg>
      </a>
    </div>
  );
}
