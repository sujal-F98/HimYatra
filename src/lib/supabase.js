import { createClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL || 'https://ueojgkifvxrkfugwlotm.supabase.co';
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY || 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InVlb2pna2lmdnhya2Z1Z3dsb3RtIiwicm9sZSI6ImFub24iLCJpYXQiOjE3OTUwMjMxNzgsImV4cCI6MjExMDU5OTE3OH0.D4Agpe_5jhAo89DgfhMLMq9DjUquywylojIGSxwHOzQ';

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

/**
 * Save a new booking (tour package or stay) to Supabase
 */
export async function saveBookingToDatabase(booking) {
  try {
    const payload = {
      reference_code: booking.refCode || `HIM-${Math.floor(10000 + Math.random() * 90000)}-EXP`,
      booking_type: booking.type || 'package',
      package_or_stay_title: booking.title || booking.item?.title || booking.item?.name || 'Himalayan Tour',
      destination_or_location: booking.destination || booking.state || booking.item?.location || 'Himachal/Uttarakhand',
      customer_name: booking.customerName || booking.fullName || 'Valued Traveler',
      customer_phone: booking.customerPhone || booking.phone || '',
      customer_email: booking.email || null,
      travel_date: booking.travelDate || booking.dates?.checkIn || null,
      return_date: booking.returnDate || booking.dates?.checkOut || null,
      guests_count: Number(booking.adults || booking.guests || booking.travelers || 2),
      pickup_city: booking.pickupCity || booking.pickup || 'Delhi NCR',
      hotel_tier: booking.hotelUpgrade || booking.hotelTier || 'deluxe',
      price_per_person: booking.pricePerPerson || null,
      total_amount: Number(booking.totalAmount || booking.estimatedTotal || 0),
      notes: booking.notes || null,
      status: 'pending'
    };

    const { data, error } = await supabase
      .from('bookings')
      .insert([payload])
      .select()
      .single();

    if (error) {
      console.warn('Supabase booking insert notice:', error.message);
      return { success: false, error: error.message, fallbackPayload: payload };
    }

    return { success: true, data };
  } catch (err) {
    console.error('Error saving booking to Supabase:', err);
    return { success: false, error: err.message };
  }
}

/**
 * Save a custom trip plan from the Custom Tour Builder
 */
export async function saveCustomTripToDatabase(tripPlan) {
  try {
    const payload = {
      customer_name: tripPlan.customerName || 'Valued Traveler',
      customer_phone: tripPlan.customerPhone || '',
      customer_email: tripPlan.customerEmail || null,
      state: tripPlan.state || 'Himachal Pradesh',
      destinations: tripPlan.destinations || [],
      duration_days: Number(tripPlan.days || 5),
      travelers_count: Number(tripPlan.travelers || 2),
      traveler_type: tripPlan.travelerType || 'couple',
      hotel_tier: tripPlan.hotelTier || 'deluxe',
      vehicle_type: tripPlan.vehicleType || 'innova',
      pickup_city: tripPlan.pickupCity || 'Delhi NCR',
      travel_month: tripPlan.travelMonth || 'Flexible',
      estimated_total: Number(tripPlan.estimatedTotal || 0),
      estimated_per_person: Number(tripPlan.estimatedPerPerson || 0),
      status: 'new'
    };

    const { data, error } = await supabase
      .from('custom_trips')
      .insert([payload])
      .select()
      .single();

    if (error) {
      console.warn('Supabase custom trip insert notice:', error.message);
      return { success: false, error: error.message, fallbackPayload: payload };
    }

    return { success: true, data };
  } catch (err) {
    console.error('Error saving custom trip to Supabase:', err);
    return { success: false, error: err.message };
  }
}

/**
 * Save general inquiries from Contact modal or Quick Call
 */
export async function saveInquiryToDatabase(inquiry) {
  try {
    const payload = {
      customer_name: inquiry.customerName || 'Traveler',
      customer_phone: inquiry.customerPhone || '',
      customer_email: inquiry.email || null,
      destination: inquiry.destination || null,
      travel_month: inquiry.travelDate || null,
      guests_count: String(inquiry.adults || inquiry.guests || '2'),
      notes: inquiry.notes || null,
      status: 'unread'
    };

    const { data, error } = await supabase
      .from('inquiries')
      .insert([payload])
      .select()
      .single();

    if (error) {
      console.warn('Supabase inquiry insert notice:', error.message);
      return { success: false, error: error.message, fallbackPayload: payload };
    }

    return { success: true, data };
  } catch (err) {
    console.error('Error saving inquiry to Supabase:', err);
    return { success: false, error: err.message };
  }
}

/**
 * Subscribe newsletter email
 */
export async function subscribeNewsletterToDatabase(email) {
  try {
    const { data, error } = await supabase
      .from('newsletter_subscribers')
      .insert([{ email }])
      .select()
      .single();

    if (error) {
      if (error.code === '23505') {
        return { success: true, message: 'Already subscribed!' };
      }
      return { success: false, error: error.message };
    }

    return { success: true, data };
  } catch (err) {
    return { success: false, error: err.message };
  }
}

/**
 * Register / Sign Up a new traveler account
 */
export async function registerTravelerToDatabase({ fullName, phone, email, city }) {
  try {
    const { data, error } = await supabase
      .from('travelers')
      .upsert(
        [{ full_name: fullName, phone, email: email || null, city: city || null }],
        { onConflict: 'phone' }
      )
      .select()
      .single();

    if (error) {
      return { success: false, error: error.message };
    }
    return { success: true, data };
  } catch (err) {
    return { success: false, error: err.message };
  }
}

/**
 * Look up existing traveler account by phone
 */
export async function lookupTravelerInDatabase(phone) {
  try {
    const { data, error } = await supabase
      .from('travelers')
      .select('*')
      .eq('phone', phone)
      .maybeSingle();

    if (error) {
      return { success: false, error: error.message };
    }
    return { success: true, data };
  } catch (err) {
    return { success: false, error: err.message };
  }
}
