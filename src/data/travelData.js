export const COMPANY_INFO = {
  name: "HimVelly",
  tagline: "Curated Himalayan Journeys & Eco Stays",
  phone: "+91 94798 17027",
  altPhone: "+91 94793 37987",
  email: "sujalghatiya@gmail.com",
  whatsapp: "+919479817027",
  rating: 4.88,
  totalReviews: 2450,
  yearsActive: 9,
  happyTravelers: "38,000+",
  headquarters: "C-153 Rajendra Nagar, Dhanwantri Nagar, Indore (M.P.)",
  branchOffice: "Mandsaur (M.P.) - 458664",
  pickupCities: ["Delhi NCR (Airport/ISBT)", "Chandigarh", "Dehradun", "Ambala", "Kalka", "Haridwar", "Shimla"]
};

export const POPULAR_LOCATIONS = [
  // Himachal Pradesh
  {
    id: "manali",
    name: "Manali & Solang Valley",
    state: "Himachal Pradesh",
    altitude: "2,050 m (6,726 ft)",
    tagline: "Snow peaks, deodar forests & adventure thrills",
    badge: "Most Popular",
    heroImage: "https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?auto=format&fit=crop&w=1200&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1596761224212-349f7b1d9bf5?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80"
    ],
    bestTimeToVisit: "Oct - June (Snow: Dec-Feb)",
    idealDays: "4-6 Days",
    startingPrice: 12999,
    highlights: ["Atal Tunnel & Sissu Waterfall", "Solang Valley Paragliding & Skiing", "Old Manali Cafe Culture", "Hadimba Temple in Pine Woods", "Rohtang Snow Pass"],
    description: "Nestled in the Beas River valley, Manali offers a magical blend of pine-scented mountain air, rushing rivers, thrilling snow adventures, and serene old-world Himalayan villages.",
    category: "Adventure & Romance"
  },
  {
    id: "spiti",
    name: "Spiti Valley & Chandratal",
    state: "Himachal Pradesh",
    altitude: "3,800 m (12,500 ft)",
    tagline: "The Middle Land between India and Tibet",
    badge: "Bucket List Adventure",
    heroImage: "https://images.unsplash.com/photo-1605649487212-47bdab064df8?auto=format&fit=crop&w=1200&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1605649487212-47bdab064df8?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1544735716-392fe2489ffa?auto=format&fit=crop&w=800&q=80"
    ],
    bestTimeToVisit: "May - October (Winter Spiti: Jan-Feb)",
    idealDays: "7-9 Days",
    startingPrice: 24999,
    highlights: ["Crescent-shaped Moon Lake (Chandratal)", "1000-year Key Monastery", "Highest Post Office in Hikkim", "Fossil Village of Langza", "Kunzum Pass (4,551 m)"],
    description: "Raw, mystical, and utterly awe-inspiring. Spiti is a high-altitude cold desert valley flanked by jagged snow peaks, ancient Buddhist monasteries, and crystal-clear star-studded night skies.",
    category: "Expedition & Photography"
  },
  {
    id: "kasol-parvati",
    name: "Kasol, Tosh & Parvati Valley",
    state: "Himachal Pradesh",
    altitude: "1,580 m (5,180 ft)",
    tagline: "Riverside tranquility, hippie cafes & mystical trails",
    badge: "Trending Youth",
    heroImage: "https://images.unsplash.com/photo-1589182373726-e4f658ab50f0?auto=format&fit=crop&w=1200&q=80",
    bestTimeToVisit: "All year round (Mar-June & Sept-Nov peak)",
    idealDays: "3-5 Days",
    startingPrice: 9999,
    highlights: ["Kheerganga Natural Hot Springs Trek", "Scenic Tosh & Chalal Villages", "Riverside Camping by Parvati River", "Authentic Israeli & Pahadi cuisine", "Manikaran Sahib Gurudwara"],
    description: "Flanked by whispering pine groves and the roaring Parvati River, Kasol is a haven for travelers seeking soulful trails, vibrant mountain cafes, and peaceful riverside bliss.",
    category: "Trekking & Leisure"
  },
  {
    id: "shimla-kufri",
    name: "Shimla, Kufri & Mashobra",
    state: "Himachal Pradesh",
    altitude: "2,276 m (7,467 ft)",
    tagline: "Colonial charm, the toy train & snow peaks",
    badge: "Family Classic",
    heroImage: "https://images.unsplash.com/photo-1588668214407-6ea9a6d8c272?auto=format&fit=crop&w=1200&q=80",
    bestTimeToVisit: "Throughout the year (Snow in Dec-Jan)",
    idealDays: "3-5 Days",
    startingPrice: 10999,
    highlights: ["UNESCO Kalka-Shimla Toy Train", "Historic Mall Road & Christ Church", "Kufri Snow World & Horse Riding", "Pine-clad Mashobra Nature Trails", "Jakhoo Hill Hanuman Temple"],
    description: "The summer capital of British India, Shimla exudes timeless colonial grandeur with wood-and-stone architecture, pine-covered slopes, and panoramic Himalayan mountain vistas.",
    category: "Family & Heritage"
  },
  {
    id: "jibhi-tirthan",
    name: "Jibhi & Tirthan Valley",
    state: "Himachal Pradesh",
    altitude: "1,600 m (5,250 ft)",
    tagline: "Handcrafted wooden chalets & untouched deodar forests",
    badge: "Hidden Gem",
    heroImage: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1200&q=80",
    bestTimeToVisit: "March - June & Sept - Nov",
    idealDays: "4-5 Days",
    startingPrice: 11999,
    highlights: ["Wooden Treehouses & Victorian Cottages", "Serolsar Lake Trek via Jalori Pass", "Jibhi Waterfalls & Stone Bridges", "Trout Fishing in Crystal Tirthan River", "Great Himalayan National Park Gateway"],
    description: "An untouched haven where traditional Himachali Kathkuni wood-and-stone cottages sit beside gushing streams. The ultimate antidote to crowded city life.",
    category: "Eco Stays & Offbeat"
  },
  {
    id: "dharamshala",
    name: "Dharamshala & McLeodGanj",
    state: "Himachal Pradesh",
    altitude: "2,082 m (6,831 ft)",
    tagline: "Home of the Dalai Lama & Dhauladhar snow walls",
    badge: "Culture & Treks",
    heroImage: "https://images.unsplash.com/photo-1596761224212-349f7b1d9bf5?auto=format&fit=crop&w=1200&q=80",
    bestTimeToVisit: "March - July & Sept - Dec",
    idealDays: "4-5 Days",
    startingPrice: 12499,
    highlights: ["Triund Ridge Overnight Trek", "Tsuglagkhang Complex (Dalai Lama Temple)", "HPCA Cricket Stadium with Snow Backdrop", "Bhagsunag Waterfall & Shiva Cafe", "Norbulingka Tibetan Institute"],
    description: "Perched beneath the dramatic, snow-draped Dhauladhar range, McLeodGanj combines Tibetan Buddhist monastic peace, colorful prayer flags, and breathtaking ridge walks.",
    category: "Spiritual & Trekking"
  },

  // Uttarakhand
  {
    id: "rishikesh-haridwar",
    name: "Rishikesh & Haridwar",
    state: "Uttarakhand",
    altitude: "372 m (1,220 ft)",
    tagline: "Ganga Aarti, white water rafting & yoga sanctuary",
    badge: "Soul & Adventure",
    heroImage: "https://images.unsplash.com/photo-1600100397608-f010f443b79f?auto=format&fit=crop&w=1200&q=80",
    bestTimeToVisit: "Sept - May (Rafting open Oct-June)",
    idealDays: "3-4 Days",
    startingPrice: 8999,
    highlights: ["Grade III+ Shivpuri White Water Rafting", "Triveni Ghat Evening Ganga Aarti", "Beatles Ashram & Yoga Retreats", "Bungee Jumping & Flying Fox", "Iconic Ram Jhula & Laxman Jhula"],
    description: "Where the holy Ganges leaves the Himalayas and touches the plains. An electric destination where ancient spiritual mantras mingle with adrenaline-pumping river adventures.",
    category: "Adventure & Spiritual"
  },
  {
    id: "mussoorie",
    name: "Mussoorie & Dhanaulti",
    state: "Uttarakhand",
    altitude: "2,005 m (6,578 ft)",
    tagline: "The Queen of the Hills & tranquil deodar woods",
    badge: "Romantic Escapes",
    heroImage: "https://images.unsplash.com/photo-1578328819058-b69f3a3b0f6b?auto=format&fit=crop&w=1200&q=80",
    bestTimeToVisit: "March - June & Sept - Nov",
    idealDays: "3-4 Days",
    startingPrice: 11499,
    highlights: ["George Everest House & Panoramic Sunsets", "Kempty Falls & Company Garden", "Dhanaulti Eco-Park Deodar Strolls", "Surkanda Devi Temple Ropeway", "Camel's Back Road Evening Walk"],
    description: "Famous for its misty mountain ridges, colonial villas, and shimmering night views of the Doon Valley below. Mussoorie is a beloved retreat for couples and families alike.",
    category: "Family & Romance"
  },
  {
    id: "auli-chopta",
    name: "Auli, Chopta & Tungnath",
    state: "Uttarakhand",
    altitude: "3,050 m (10,010 ft)",
    tagline: "India's premier ski slopes & the highest Shiva temple",
    badge: "Winter Snow Wonder",
    heroImage: "https://images.unsplash.com/photo-1570789210967-2cac24afeb00?auto=format&fit=crop&w=1200&q=80",
    bestTimeToVisit: "Dec - March (Skiing) & April - June (Greenery)",
    idealDays: "5-6 Days",
    startingPrice: 16999,
    highlights: ["Asia's Longest Cable Car Ride (Joshimath to Auli)", "Tungnath (Highest Shiva Temple in the world at 3,680m)", "Chandrashila 360° Himalayan Summit", "Auli Artificial Lake & Ski Slopes", "Front Row View of Nanda Devi (7,816m)"],
    description: "Chopta, lovingly called the 'Mini Switzerland of India', leads up to the ancient stone shrine of Tungnath, while nearby Auli dazzles with world-class snow skiing and panoramic views of India's highest peaks.",
    category: "Snow, Skiing & Trekking"
  },
  {
    id: "nainital-jimcorbett",
    name: "Nainital & Jim Corbett",
    state: "Uttarakhand",
    altitude: "2,084 m (6,837 ft)",
    tagline: "Emerald lakes, hill views & Royal Bengal Tiger safaris",
    badge: "Wildlife & Lakes",
    heroImage: "https://images.unsplash.com/photo-1544735716-392fe2489ffa?auto=format&fit=crop&w=1200&q=80",
    bestTimeToVisit: "Oct - June (Safaris fully open Nov-June)",
    idealDays: "5-6 Days",
    startingPrice: 14499,
    highlights: ["Naini Lake Yachting & Boating", "Jim Corbett National Park 4x4 Jeep Safari", "Snow View Point Himalayan Cable Car", "Mukteshwar Apple Orchards & Valley Cliff", "Naina Devi Temple by the Water"],
    description: "Combine the romantic, shimmering lake of Nainital with the thrilling wild jungle roar of Jim Corbett National Park, India's oldest tiger sanctuary.",
    category: "Wildlife & Family"
  },
  {
    id: "chardham-kedarnath",
    name: "Kedarnath & Badrinath",
    state: "Uttarakhand",
    altitude: "3,583 m (11,755 ft)",
    tagline: "The Divine Himalayan Pilgrimage of a Lifetime",
    badge: "Sacred Chardham",
    heroImage: "https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?auto=format&fit=crop&w=1200&q=80",
    bestTimeToVisit: "May - June & Sept - Nov",
    idealDays: "6-8 Days",
    startingPrice: 21999,
    highlights: ["Ancient Kedarnath Jyotirlinga surrounded by snow peaks", "Helicopter / Pony / Trekking assistance options", "Badrinath Temple & Tapt Kund natural hot springs", "Mana - The Last Indian Border Village", "Devprayag Confluence of Alaknanda & Bhagirathi"],
    description: "Perched majestically among Himalayan glaciers, these sacred shrines represent the spiritual pinnacle of India. Experience divine peace with our hassle-free VIP registrations and local mountain guidance.",
    category: "Pilgrimage & Sacred"
  }
];

export const TOUR_PACKAGES = [
  {
    id: "pkg-manali-snow-bliss",
    title: "Manali, Solang & Atal Tunnel Snow Wonderland",
    destinationId: "manali",
    state: "Himachal Pradesh",
    duration: "5 Days / 4 Nights",
    route: "Delhi/Chandigarh → Kullu Valley → Manali → Solang → Sissu (Lahaul) → Delhi",
    price: 13499,
    originalPrice: 17999,
    discountPercentage: 25,
    rating: 4.9,
    reviewCount: 680,
    badge: "Bestseller",
    type: "Romantic & Family",
    heroImage: "https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?auto=format&fit=crop&w=1000&q=80",
    inclusions: ["Private AC Sedan/SUV for entire tour", "3-Star Deluxe Wooden Hotel / Resort", "Daily Buffet Breakfast & Dinner", "Solang Valley & Sissu Snow Permits", "24/7 Dedicated Trip Coordinator"],
    exclusions: ["Airfare / Train tickets to Delhi/Chandigarh", "Personal adventure sports tickets (Paragliding/Skiing)", "Lunch & personal shopping"],
    itinerary: [
      {
        day: 1,
        title: "Departure from Delhi/Chandigarh & Scenic Drive to Manali",
        details: "Board our comfortable private cab or luxury Volvo. Drive alongside the shimmering Beas River, crossing Bilaspur, Sundernagar Lake, and Pandoh Dam. Check into your boutique mountain view hotel in Manali. Evening at leisure with warm welcome tea and dinner."
      },
      {
        day: 2,
        title: "Local Manali Sightseeing & Old Manali Culture",
        details: "Visit the historic wooden Hadimba Devi Temple built in 1553 amid towering cedar trees. Explore Vashisht Hot Sulphur Springs, Manu Temple, and the Tibetan Monastery. Spend your evening strolling down Mall Road and sampling local trout fish or walnut pies at Old Manali cafes."
      },
      {
        day: 3,
        title: "Solang Valley Adventure & Engineering Wonder: Atal Tunnel to Sissu",
        details: "Drive through the world-famous Atal Tunnel (9.02 km at 10,000+ ft) into the snow-clad Lahaul Valley. Marvel at the frozen Sissu waterfall. Return to Solang Valley for thrilling adventures: paragliding, snow tubing, quad biking, and cable car ropeway."
      },
      {
        day: 4,
        title: "Naggar Castle Heritage & Kullu Valley River Rafting",
        details: "Explore the medieval wooden Naggar Castle, former seat of Kullu kings, with jaw-dropping views of the valley. Visit Nicholas Roerich Art Gallery. En route, experience thrilling river rafting on the Beas River and visit genuine Kullu Shawl weaving centers."
      },
      {
        day: 5,
        title: "Souvenirs, Apple Orchards & Return Journey",
        details: "Enjoy a leisurely Himalayan breakfast overlooking snow peaks. Pick fresh local jams, dry fruits, and handcrafted souvenirs. Smooth drop back to Chandigarh/Delhi airport or railway station with unforgettable memories."
      }
    ]
  },
  {
    id: "pkg-spiti-valley-expedition",
    title: "Spiti Valley 4x4 Circuit & Chandratal Lake Safari",
    destinationId: "spiti",
    state: "Himachal Pradesh",
    duration: "8 Days / 7 Nights",
    route: "Shimla → Kalpa → Nako → Tabo → Kaza → Hikkim → Chandratal → Manali",
    price: 24999,
    originalPrice: 32000,
    discountPercentage: 22,
    rating: 4.95,
    reviewCount: 420,
    badge: "Ultimate Bucket List",
    type: "Adventure & Expedition",
    heroImage: "https://images.unsplash.com/photo-1605649487212-47bdab064df8?auto=format&fit=crop&w=1000&q=80",
    inclusions: ["Customized 4x4 SUV (Innova / Scorpio / Fortuner)", "Handpicked Traditional Homestays & Swiss Tents", "All Meals (Breakfast & Dinner with local butter tea)", "Inner Line Permits & Forest Entry fees", "Oxygen cylinder & First Aid safety kit on board"],
    exclusions: ["Personal monument entry & monastery camera fees", "Transit lunches", "Tips to drivers and guides"],
    itinerary: [
      {
        day: 1,
        title: "Chandigarh to Narkanda / Sarahan via Hindustan-Tibet Highway",
        details: "Journey along the cliff-hanging Hindustan-Tibet road. Witness the stunning transition from green Shiwalik hills to cedar forests of Kinnaur."
      },
      {
        day: 2,
        title: "Sarahan to Kalpa with Kinner Kailash Peak View",
        details: "Visit the centuries-old Bhimakali wooden temple in Sarahan. Reach Kalpa village directly facing the sacred Kinner Kailash peak (6,050 m). Catch the majestic golden sunset."
      },
      {
        day: 3,
        title: "Kalpa to Tabo via Nako Lake & Mummy of Gue",
        details: "Enter Spiti Valley. Stop at pristine Nako Lake and pay homage to the 550-year-old naturally preserved meditating Buddhist Monk Mummy at Gue village."
      },
      {
        day: 4,
        title: "Tabo to Kaza via Dhankar Monastery",
        details: "Explore Tabo Monastery, known as the Ajanta of the Himalayas (founded 996 AD). Climb up to the dramatic cliff-perched Dhankar Gompa overlooking the Spiti & Pin river confluence."
      },
      {
        day: 5,
        title: "Kaza & The Highest Himalayan Villages Circuit",
        details: "Send a postcard from Hikkim (world's highest post office at 14,567 ft). Photograph the colossal Buddha statue at Langza against mountain fossils. Visit Komic (highest motorable village)."
      },
      {
        day: 6,
        title: "Key Monastery & The Turquoise Chandratal Lake",
        details: "Morning prayers at the fortified Key Gompa. Cross the windy Kunzum Pass (4,551 m) and trek along the mesmerizing Moon Lake (Chandratal). Luxury glamping under billions of stars with Milky Way views."
      },
      {
        day: 7,
        title: "Chandratal to Manali via Batal & Rohtang/Atal Tunnel",
        details: "Navigate the rugged boulders of Batal and Gramphu. Pass through the Atal Tunnel and return to lush green pine valleys of Manali. Farewell celebration dinner."
      },
      {
        day: 8,
        title: "Manali to Chandigarh / Delhi Drop",
        details: "Comfortable drive down to Chandigarh or Delhi with cameras filled with life-altering mountain moments."
      }
    ]
  },
  {
    id: "pkg-auli-chopta-winter",
    title: "Chopta, Tungnath & Auli Skiing Himalayan Trail",
    destinationId: "auli-chopta",
    state: "Uttarakhand",
    duration: "6 Days / 5 Nights",
    route: "Rishikesh → Devprayag → Chopta → Tungnath/Chandrashila → Joshimath → Auli → Rishikesh",
    price: 16999,
    originalPrice: 21999,
    discountPercentage: 23,
    rating: 4.88,
    reviewCount: 395,
    badge: "Mini Switzerland",
    type: "Snow & Trekking",
    heroImage: "https://images.unsplash.com/photo-1570789210967-2cac24afeb00?auto=format&fit=crop&w=1000&q=80",
    inclusions: ["Comfortable private vehicle throughout trip", "Cozy Alpine dome tents / Wooden cottages in Chopta & Joshimath", "Daily nutritious mountain meals (Breakfast & Dinner)", "Trek leader, crampons & microspikes for snow hike", "Campfire & acoustic music nights"],
    exclusions: ["Auli Cable Car ticket (approx ₹1,000 per person)", "Ski equipment rental & ski instructor", "Expenses caused by unexpected roadblocks due to heavy snow"],
    itinerary: [
      {
        day: 1,
        title: "Rishikesh to Chopta Meadows via Devprayag Confluence",
        details: "Drive alongside the holy Alaknanda river. Stop at Devprayag to witness the sacred confluence where Bhagirathi and Alaknanda unite to become the holy Ganga. Arrive at the dreamy alpine meadows of Chopta."
      },
      {
        day: 2,
        title: "Tungnath (Highest Shiva Temple) & Chandrashila Summit",
        details: "Start the scenic 4.5 km trek through rhododendron forests. Reach Tungnath temple (3,680 m) and continue 1 km to Chandrashila peak (4,000 m) for a 360-degree panorama of Nanda Devi, Trishul, and Chaukhamba peaks."
      },
      {
        day: 3,
        title: "Chopta to Joshimath & Auli Cable Car Ascent",
        details: "Drive past Chamoli to Joshimath. Board India's highest and longest passenger ropeway up to Auli. Check into your cozy pine chalet overlooking the snow slopes."
      },
      {
        day: 4,
        title: "Full Day Auli Snow Skiing & Gorson Bugyal Exploration",
        details: "Learn beginner skiing with certified instructors or embark on a snow-walk to Gorson Bugyal. Capture the golden sunset on the Nanda Devi peak reflected in Auli's artificial lake."
      },
      {
        day: 5,
        title: "Auli to Rishikesh via Rudraprayag",
        details: "Descend from Auli. Drive down through scenic mountain gorges. Arrive in Rishikesh in time for the soul-stirring Triveni Ghat evening Ganga Aarti."
      },
      {
        day: 6,
        title: "Rishikesh Adventure & Return",
        details: "Morning 16 km white water rafting through famous rapids (Three Blind Mice, Roller Coaster). Smooth departure to Dehradun airport or Haridwar railway station."
      }
    ]
  },
  {
    id: "pkg-sacred-chardham-kedarnath",
    title: "Kedarnath & Badrinath Do-Dham Sacred Yatra",
    destinationId: "chardham-kedarnath",
    state: "Uttarakhand",
    duration: "7 Days / 6 Nights",
    route: "Haridwar/Dehradun → Guptkashi → Kedarnath → Chopta → Badrinath → Rishikesh",
    price: 21999,
    originalPrice: 28000,
    discountPercentage: 21,
    rating: 4.96,
    reviewCount: 890,
    badge: "Spiritual Yatra",
    type: "Pilgrimage & Spiritual",
    heroImage: "https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?auto=format&fit=crop&w=1000&q=80",
    inclusions: ["All Mandir Yatra registrations & biometric biopasses", "Dedicated private vehicle with expert hilly route driver", "Sanitized stays at Guptkashi, Kedarnath base & Badrinath", "Satvik vegetarian meals (Breakfast & Dinner)", "Helicopter ticket assistance / Pony guide coordination"],
    exclusions: ["Helicopter ticket actual cost (booked directly on IRCTC)", "Pony / Palki charges on Kedarnath trek", "Personal pooja samagri & dakshina"],
    itinerary: [
      {
        day: 1,
        title: "Haridwar/Rishikesh to Guptkashi",
        details: "Early departure. Drive along the Mandakini river with views of lush Garhwal hills. Check-in and preparation for the holy Kedarnath yatra."
      },
      {
        day: 2,
        title: "Guptkashi / Sonprayag to Sacred Kedarnath Shrine",
        details: "Early transfer to Sonprayag/Gaurikund. Trek, ride pony, or take helicopter up to Kedarnath Dham (3,583 m). Witness the evening aarti amidst chanting and mountain mists. Overnight stay near the temple."
      },
      {
        day: 3,
        title: "Morning Kedarnath Darshan & Trek Down to Guptkashi",
        details: "Early morning VIP Abhishek darshan of Lord Shiva. Trek down to Gaurikund and transfer back to comfortable hotel in Guptkashi for well-deserved rest."
      },
      {
        day: 4,
        title: "Guptkashi to Badrinath via Joshimath",
        details: "Drive past picturesque river valleys and ascend towards Badrinath Dham. Take a holy dip in the natural thermal Tapt Kund before evening darshan of Lord Badri Vishal."
      },
      {
        day: 5,
        title: "Mana Village (Last Village of India) & Saraswati River",
        details: "Explore Mana Village, inhabited by Indo-Tibetan border tribes. Visit Vyas Gufa where Mahabharata was penned, Bhim Pul, and the roaring origin of Saraswati river. Drive to Pipalkoti/Rudraprayag for night stay."
      },
      {
        day: 6,
        title: "Rudraprayag to Rishikesh with Confluences Tour",
        details: "Visit Karanprayag and Nandprayag. Arrive in Rishikesh. Relax with herbal ayurvedic massage and watch the divine Ganga Aarti."
      },
      {
        day: 7,
        title: "Blessings & Drop to Haridwar / Dehradun",
        details: "Conclude the sacred journey with heart full of peace and divine blessings. Timely drop at station or airport."
      }
    ]
  },
  {
    id: "pkg-jibhi-tirthan-treehouse",
    title: "Offbeat Jibhi, Tirthan Valley & Treehouse Eco Escape",
    destinationId: "jibhi-tirthan",
    state: "Himachal Pradesh",
    duration: "5 Days / 4 Nights",
    route: "Delhi/Chandigarh → Mandi → Aut Tunnel → Banjar → Jibhi → Tirthan → Delhi",
    price: 12999,
    originalPrice: 16500,
    discountPercentage: 21,
    rating: 4.92,
    reviewCount: 310,
    badge: "Eco Luxury",
    type: "Peace & Nature",
    heroImage: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1000&q=80",
    inclusions: ["Stay in Handcrafted Wooden Cedar Treehouse & Riverside Cottages", "Dedicated private cab from Delhi/Chandigarh", "Home-cooked Himalayan organic meals", "Guided trek to Serolsar Lake & Jalori Pass", "Nightly bonfire by the gushing river stream"],
    exclusions: ["Forest department entry fees", "Personal cafe visits", "Angling gear rental"],
    itinerary: [
      {
        day: 1,
        title: "Chandigarh to Jibhi Pine Haven",
        details: "Drive through the lush green valleys of Mandi, crossing the famous 3 km Aut tunnel. Enter the peaceful Banjar valley. Check into your cozy cedar wood treehouse with forest balconies."
      },
      {
        day: 2,
        title: "Jibhi Waterfalls & Secret Stone Bridges",
        details: "Walk through deodar forests to the cascading Jibhi waterfalls. Explore Chehni Kothi - a breathtaking 1500-year-old seven-story timber and stone tower temple. Enjoy local Siddu dish at a village cafe."
      },
      {
        day: 3,
        title: "Jalori Pass & Mystical Serolsar Lake Trek",
        details: "Drive up to the windy Jalori Pass (10,800 ft). Embark on an easy, enchanting 5 km hike under oak canopy to the emerald Serolsar Lake, revered home of Budhi Nagin deity."
      },
      {
        day: 4,
        title: "Tirthan Valley River Walk & Trout Safari",
        details: "Spend a tranquil day by the pristine Tirthan River. Try traditional fly fishing, dip feet in chilled mountain waters, and visit the gate of the UNESCO Great Himalayan National Park."
      },
      {
        day: 5,
        title: "Morning Forest Walk & Return Journey",
        details: "Wake up to bird songs and cedar fragrance. Relish a leisurely mountain breakfast before a relaxed drive back to Chandigarh/Delhi."
      }
    ]
  },
  {
    id: "pkg-rishikesh-mussoorie-royal",
    title: "Rishikesh Yoga, Rafting & Mussoorie Colonial Queen",
    destinationId: "rishikesh-haridwar",
    state: "Uttarakhand",
    duration: "5 Days / 4 Nights",
    route: "Delhi → Haridwar → Rishikesh → Dehradun → Mussoorie → Delhi",
    price: 13999,
    originalPrice: 18500,
    discountPercentage: 24,
    rating: 4.87,
    reviewCount: 520,
    badge: "Couple Favorite",
    type: "Romantic & Leisure",
    heroImage: "https://images.unsplash.com/photo-1600100397608-f010f443b79f?auto=format&fit=crop&w=1000&q=80",
    inclusions: ["Private AC Dzire / Ertiga with toll taxes included", "Luxury riverfront resort in Rishikesh & Colonial boutique hotel in Mussoorie", "Breakfast & Candlelight Dinners", "16 km River Rafting with cliff jumping", "Sightseeing at Kempty Falls & George Everest"],
    exclusions: ["Bungee jumping / Giant swing fees", "Meals not specified in inclusions", "Personal shopping on Mussoorie Mall Road"],
    itinerary: [
      {
        day: 1,
        title: "Delhi to Rishikesh & Ganga Aarti at Parmarth Niketan",
        details: "Morning departure from Delhi. Arrive in vibrant Rishikesh. Cross the suspension bridges and immerse yourself in the divine Vedic chants during evening Ganga Aarti."
      },
      {
        day: 2,
        title: "Ganges River Rafting & Cafe Crawling",
        details: "Conquer rapids like Clubhouse, Cashflow, and Return to Sender on a 16 km whitewater raft. In the afternoon, explore the iconic Beatles Ashram and cliffside organic cafes in Tapovan."
      },
      {
        day: 3,
        title: "Rishikesh to Mussoorie via Robber's Cave Dehradun",
        details: "Scenic drive passing Dehradun valley. Walk through the natural subterranean stream of Robber's Cave (Guchhupani). Ascend to Mussoorie and check into your colonial hillside hotel."
      },
      {
        day: 4,
        title: "Mussoorie Highlights: Kempty Falls & George Everest Sunset",
        details: "Cool off at Kempty Falls. Visit the historic estate of Sir George Everest with breathtaking 360-degree views of snow-clad Garhwal peaks and Aglar river valley. Sunset coffee with Doon lights twinkling below."
      },
      {
        day: 5,
        title: "Mall Road Stroll, Tibetan Market & Return to Delhi",
        details: "Sample hot Tibetan momos and handcrafted wooden souvenirs along Mall Road. Enjoy a smooth drive back to Delhi with rich memories."
      }
    ]
  }
];

export const BOUTIQUE_STAYS = [
  {
    id: "stay-novem-natural",
    name: "Novem Natural Eco Resort",
    location: "Tirthan Valley, Himachal Pradesh",
    pricePerNight: 4499,
    originalPrice: 5999,
    rating: 4.9,
    reviews: 1420,
    capacity: "2-5 guests",
    image: "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=1000&q=80",
    badge: "Signature Stay",
    features: ["Riverside Wooden Chalet", "Organic Pahadi Kitchen", "Private Fireplace", "Cedar Decks", "Trout Stream Access"],
    description: "Crafted entirely from local pine and river stone, Novem Natural Eco Resort rests directly beside a tranquil mountain stream. Floor-to-ceiling windows bring the misty deodar forests right into your bedroom."
  },
  {
    id: "stay-woodvelly-chalet",
    name: "Woodvelly Pine Ridge Chalets",
    location: "Old Manali, Himachal Pradesh",
    pricePerNight: 5299,
    originalPrice: 7200,
    rating: 4.95,
    reviews: 890,
    capacity: "2-4 guests",
    image: "https://images.unsplash.com/photo-1510798831971-661eb04b3739?auto=format&fit=crop&w=1000&q=80",
    badge: "Panoramic Views",
    features: ["Heated Wooden Floors", "Apple Orchard View", "Private Balcony", "Himalayan Breakfast", "Bonfire Garden"],
    description: "Perched gracefully above the apple orchards of Old Manali with sweeping views of the snow-capped Pir Panjal range. Combines authentic Nordic-Himalayan aesthetics with modern mountain warmth."
  },
  {
    id: "stay-chopta-pines",
    name: "The Whispering Pines Eco-Lodge",
    location: "Chopta Meadows, Uttarakhand",
    pricePerNight: 3999,
    originalPrice: 5000,
    rating: 4.86,
    reviews: 640,
    capacity: "2-6 guests",
    image: "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?auto=format&fit=crop&w=1000&q=80",
    badge: "High Altitude Haven",
    features: ["Facing Nanda Devi Peak", "Stargazing Telescope", "Solar Heated Tents", "Tungnath Trail Access", "Garhwali Cuisine"],
    description: "Wake up to unobstructed golden sunrises over Chaukhamba and Nanda Devi. Set in the quietest meadow of Chopta with zero light pollution for celestial astrophotography."
  },
  {
    id: "stay-ganga-kinare",
    name: "Ganga Riverside Heritage Retreat",
    location: "Shivpuri, Rishikesh, Uttarakhand",
    pricePerNight: 4899,
    originalPrice: 6500,
    rating: 4.88,
    reviews: 1100,
    capacity: "2-4 guests",
    image: "https://images.unsplash.com/photo-1571896349842-33c89424de2d?auto=format&fit=crop&w=1000&q=80",
    badge: "Private River Beach",
    features: ["Private Sandy Ghat", "Morning Yoga Deck", "Organic Riverview Dining", "Infinity Dip Pool", "Acoustic Bonfires"],
    description: "Tucked along a quiet, emerald bend of the Ganges away from city crowds. Experience the pure soothing rhythm of flowing river water and soothing temple bells."
  }
];

export const TESTIMONIALS = [
  {
    id: "rev-1",
    name: "Vikram & Ananya Sharma",
    city: "New Delhi",
    trip: "Manali & Sissu Snow Tour (5D/4N)",
    rating: 5,
    date: "January 2026",
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80",
    comment: "HimVelly made our anniversary trip unforgettable! Driving through the Atal tunnel into the snow kingdom of Sissu with our local driver Rakesh bhaiya was like a dream. The wooden chalet they booked for us had heated rooms and apple orchard views just like the website photos. 100% recommended for couples!"
  },
  {
    id: "rev-2",
    name: "Rohan & Friends",
    city: "Mumbai",
    trip: "Spiti 4x4 Road Trip Expedition (8D/7N)",
    rating: 5,
    date: "October 2025",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80",
    comment: "Spiti is unpredictable, but having HimVelly's local team in Kaza gave us absolute peace of mind. Our Innova was spotless, oxygen cylinders were ready at Kunzum pass, and camping under the Milky Way at Chandratal lake was the highlight of my entire year. Authentic Pahadi hospitality at its best."
  },
  {
    id: "rev-3",
    name: "The Kulkarni Family (6 Members)",
    city: "Pune",
    trip: "Kedarnath & Badrinath Sacred Circuit",
    rating: 5,
    date: "June 2025",
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=200&q=80",
    comment: "Traveling with elderly parents for Chardham can be stressful, but HimVelly arranged smooth VIP registrations, comfortable clean hotels, and reliable pony bookings. We never felt rushed. The darshan at Kedarnath was spiritually moving and stress-free."
  },
  {
    id: "rev-4",
    name: "Pooja & Sameer Patel",
    city: "Ahmedabad",
    trip: "Jibhi Treehouse & Tirthan Valley Retreat",
    rating: 5,
    date: "November 2025",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=200&q=80",
    comment: "The wooden treehouse in Jibhi was magical! Sitting on the cedar wood balcony drinking hot ginger lemon tea while looking at pine forests was so therapeutic. The Serolsar lake hike was easy and breathtaking. Thank you HimVelly!"
  }
];

export const SEASONS_DATA = [
  {
    id: "winter",
    name: "Winter Wonderland",
    months: "December - February",
    temp: "-4°C to 12°C",
    tagline: "Heavy Snowfall, Skiing & Cozy Fireplaces",
    image: "https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?auto=format&fit=crop&w=1000&q=80",
    topSpots: ["Solang Valley & Sissu (Manali)", "Auli Ski Slopes (Uttarakhand)", "Chopta Snow Trek", "Kufri (Shimla)"],
    experiences: ["Snow skiing and snowboarding", "Chasing live snowfall in wooden chalets", "Stargazing in crystal sub-zero mountain air", "Traditional Himachali siddu & hot kahwa tea by the bonfire"],
    clothingTip: "Heavy down feather jackets, thermal innerwear, waterproof snow boots, woollen caps & gloves."
  },
  {
    id: "spring",
    name: "Spring Blossoms",
    months: "March - April",
    temp: "10°C to 22°C",
    tagline: "Apple Blossoms, Rhododendrons & Pleasant Sun",
    image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1000&q=80",
    topSpots: ["Tirthan Valley & Jibhi", "Rishikesh White Water Rafting", "Dharamshala & McLeodGanj", "Mussoorie Hills"],
    experiences: ["Walking through fragrant pink apple & cherry blossom orchards", "Grade III/IV river rafting in Rishikesh", "Triund ridge hike in clear weather", "Vibrant Tibetan New Year celebrations in Dharamshala"],
    clothingTip: "Light woollens for evenings, comfortable cottons for sunny daytime hikes."
  },
  {
    id: "summer",
    name: "Summer Mountain Escape",
    months: "May - June",
    temp: "15°C to 28°C",
    tagline: "Escape the North Indian heat to cool alpine breezes",
    image: "https://images.unsplash.com/photo-1588668214407-6ea9a6d8c272?auto=format&fit=crop&w=1000&q=80",
    topSpots: ["Shimla & Chail", "Manali & Rohtang Pass", "Chardham Yatra (Kedarnath & Badrinath)", "Nainital Lake District"],
    experiences: ["Snow sports at Rohtang Pass (13,058 ft)", "Boating in emerald lakes of Nainital & Bhimtal", "Spiritual darshan during opening of Chardham gates", "Paragliding in Bir Billing (World's 2nd highest site)"],
    clothingTip: "Regular summer wear with light jackets or windcheaters for morning and late night."
  },
  {
    id: "autumn",
    name: "Golden Autumn & High Passes",
    months: "September - November",
    temp: "5°C to 18°C",
    tagline: "Crisp mountain air, golden foliage & clear peak views",
    image: "https://images.unsplash.com/photo-1605649487212-47bdab064df8?auto=format&fit=crop&w=1000&q=80",
    topSpots: ["Spiti Valley & Chandratal Lake", "Kinnaur & Kalpa Apple Harvest", "Chopta Tungnath Trek", "Jim Corbett Tiger Safari"],
    experiences: ["Road tripping across high passes before winter closure", "Apple harvest festivals in Kinnaur & Kotgarh", "Milky Way photography with zero clouds", "Tiger spotting in Jim Corbett Corbett buffer zones"],
    clothingTip: "Medium to heavy fleece jackets, windproof layers, comfortable hiking footwear."
  }
];

export const FAQS = [
  {
    question: "Why should we book our tour with HimVelly?",
    answer: "With our headquarters in Indore (C-153 Rajendra Nagar) and branch in Mandsaur (M.P.), backed by dedicated on-ground Himalayan operations in Manali and Rishikesh, we combine transparent central booking with 100% verified local Pahadi drivers, direct tie-ups with wooden chalets, and real-time ground intelligence regarding snowfall, roads, and permits. We provide 24x7 instant assistance with zero hidden charges."
  },
  {
    question: "Where will our pickup and drop be arranged?",
    answer: "We offer flexible private pickups and drops according to your preference from Delhi NCR (IGI Airport, New Delhi / Hazrat Nizamuddin Railway Stations, Majnu Ka Tila), Chandigarh Airport & Railway Station, Dehradun Jolly Grant Airport, Haridwar, Kalka, or direct pickup from your hotel in Shimla/Manali."
  },
  {
    question: "Can we customize the tour itinerary and choose our own hotels?",
    answer: "Yes, absolutely! 100% of our packages are completely customizable. You can modify the number of days, add or remove destinations (like adding Sissu, Kasol, or Jim Corbett), upgrade from 3-star deluxe to luxury wooden chalets/treehouses, or request specific activities like river rafting, paragliding, or camping."
  },
  {
    question: "What permits are required for Rohtang Pass, Spiti Valley, and Chardham?",
    answer: "When you book with HimVelly, we handle all necessary state government permits, Rohtang Pass green transit permits, Spiti Inner Line Permits (for foreign and Indian travelers), and mandatory Uttarakhand Chardham Yatra registrations on your behalf without any hassle."
  },
  {
    question: "What is your booking confirmation and cancellation policy?",
    answer: "You can reserve any tour package with an initial nominal token advance of 25%. The remaining balance can be settled upon arrival or in convenient milestones. We offer flexible date rescheduling up to 7 days before departure in case of health emergencies or unforeseen weather closures."
  },
  {
    question: "Is it safe for couples, solo female travelers, and families with kids?",
    answer: "Himachal Pradesh and Uttarakhand are known as some of the safest and most hospitable states in India ('Devbhoomi'). All our cabs are GPS-monitored, our drivers are verified local professionals with extensive mountain experience, and our 24/7 helpline team tracks your journey end-to-end."
  }
];
