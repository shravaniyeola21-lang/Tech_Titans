// Comprehensive destination data for Nexus TravelBuddy
// Includes international countries and domestic travel within countries

export const destinations = {
    // ASIA
    india: {
        name: "India",
        flag: "🇮🇳",
        currency: "INR",
        timezone: "GMT+5:30",
        states: [
            { name: "Delhi", city: "New Delhi", tag: "Capital", popular: true },
            { name: "Maharashtra", city: "Mumbai", tag: "Business Hub", popular: true },
            { name: "Karnataka", city: "Bangalore", tag: "Tech City", popular: true },
            { name: "Tamil Nadu", city: "Chennai", tag: "Cultural", popular: true },
            { name: "Rajasthan", city: "Jaipur", tag: "Heritage", popular: true },
            { name: "Kerala", city: "Kochi", tag: "Backwaters", popular: true },
            { name: "Goa", city: "Panaji", tag: "Beaches", popular: true },
            { name: "West Bengal", city: "Kolkata", tag: "Cultural", popular: false },
            { name: "Uttar Pradesh", city: "Agra", tag: "Taj Mahal", popular: true },
            { name: "Himachal Pradesh", city: "Shimla", tag: "Hills", popular: true },
            { name: "Uttarakhand", city: "Dehradun", tag: "Mountains", popular: false },
            { name: "Punjab", city: "Amritsar", tag: "Spiritual", popular: true },
            { name: "Gujarat", city: "Ahmedabad", tag: "Heritage", popular: false },
            { name: "Andhra Pradesh", city: "Hyderabad", tag: "Tech & Heritage", popular: true },
            { name: "Jammu & Kashmir", city: "Srinagar", tag: "Paradise", popular: true },
        ]
    },
    uae: {
        name: "United Arab Emirates",
        flag: "🇦🇪",
        currency: "AED",
        timezone: "GMT+4",
        states: [
            { name: "Dubai", city: "Dubai", tag: "Luxury", popular: true },
            { name: "Abu Dhabi", city: "Abu Dhabi", tag: "Capital", popular: true },
            { name: "Sharjah", city: "Sharjah", tag: "Cultural", popular: false },
            { name: "Ras Al Khaimah", city: "RAK", tag: "Adventure", popular: false },
        ]
    },
    japan: {
        name: "Japan",
        flag: "🇯🇵",
        currency: "JPY",
        timezone: "GMT+9",
        states: [
            { name: "Tokyo", city: "Tokyo", tag: "Capital", popular: true },
            { name: "Osaka", city: "Osaka", tag: "Food Haven", popular: true },
            { name: "Kyoto", city: "Kyoto", tag: "Traditional", popular: true },
            { name: "Hokkaido", city: "Sapporo", tag: "Nature", popular: false },
            { name: "Okinawa", city: "Naha", tag: "Beaches", popular: false },
        ]
    },
    singapore: {
        name: "Singapore",
        flag: "🇸🇬",
        currency: "SGD",
        timezone: "GMT+8",
        states: [
            { name: "Singapore", city: "Singapore", tag: "City-State", popular: true },
        ]
    },
    thailand: {
        name: "Thailand",
        flag: "🇹🇭",
        currency: "THB",
        timezone: "GMT+7",
        states: [
            { name: "Bangkok", city: "Bangkok", tag: "Capital", popular: true },
            { name: "Phuket", city: "Phuket", tag: "Beaches", popular: true },
            { name: "Chiang Mai", city: "Chiang Mai", tag: "Culture", popular: true },
            { name: "Pattaya", city: "Pattaya", tag: "Nightlife", popular: false },
            { name: "Krabi", city: "Krabi", tag: "Islands", popular: true },
        ]
    },
    indonesia: {
        name: "Indonesia",
        flag: "🇮🇩",
        currency: "IDR",
        timezone: "GMT+7/+8/+9",
        states: [
            { name: "Bali", city: "Denpasar", tag: "Paradise", popular: true },
            { name: "Jakarta", city: "Jakarta", tag: "Capital", popular: false },
            { name: "Yogyakarta", city: "Yogyakarta", tag: "Cultural", popular: false },
            { name: "Lombok", city: "Mataram", tag: "Beaches", popular: true },
        ]
    },
    malaysia: {
        name: "Malaysia",
        flag: "🇲🇾",
        currency: "MYR",
        timezone: "GMT+8",
        states: [
            { name: "Kuala Lumpur", city: "Kuala Lumpur", tag: "Capital", popular: true },
            { name: "Penang", city: "George Town", tag: "Heritage", popular: true },
            { name: "Langkawi", city: "Langkawi", tag: "Island", popular: true },
            { name: "Sabah", city: "Kota Kinabalu", tag: "Nature", popular: false },
        ]
    },
    maldives: {
        name: "Maldives",
        flag: "🇲🇻",
        currency: "MVR",
        timezone: "GMT+5",
        states: [
            { name: "Malé", city: "Malé", tag: "Capital", popular: true },
            { name: "North Malé Atoll", city: "Resort Islands", tag: "Luxury", popular: true },
            { name: "South Malé Atoll", city: "Resort Islands", tag: "Paradise", popular: true },
        ]
    },
    china: {
        name: "China",
        flag: "🇨🇳",
        currency: "CNY",
        timezone: "GMT+8",
        states: [
            { name: "Beijing", city: "Beijing", tag: "Capital", popular: true },
            { name: "Shanghai", city: "Shanghai", tag: "Modern", popular: true },
            { name: "Guangdong", city: "Guangzhou", tag: "Business", popular: false },
            { name: "Hong Kong SAR", city: "Hong Kong", tag: "Shopping", popular: true },
            { name: "Sichuan", city: "Chengdu", tag: "Pandas", popular: false },
        ]
    },
    vietnam: {
        name: "Vietnam",
        flag: "🇻🇳",
        currency: "VND",
        timezone: "GMT+7",
        states: [
            { name: "Ho Chi Minh City", city: "Ho Chi Minh City", tag: "Vibrant", popular: true },
            { name: "Hanoi", city: "Hanoi", tag: "Capital", popular: true },
            { name: "Da Nang", city: "Da Nang", tag: "Beaches", popular: true },
            { name: "Ha Long", city: "Ha Long Bay", tag: "UNESCO", popular: true },
        ]
    },
    southKorea: {
        name: "South Korea",
        flag: "🇰🇷",
        currency: "KRW",
        timezone: "GMT+9",
        states: [
            { name: "Seoul", city: "Seoul", tag: "Capital", popular: true },
            { name: "Busan", city: "Busan", tag: "Coastal", popular: true },
            { name: "Jeju", city: "Jeju Island", tag: "Nature", popular: true },
        ]
    },

    // EUROPE
    france: {
        name: "France",
        flag: "🇫🇷",
        currency: "EUR",
        timezone: "GMT+1",
        states: [
            { name: "Île-de-France", city: "Paris", tag: "Romance", popular: true },
            { name: "Provence", city: "Nice", tag: "Riviera", popular: true },
            { name: "Auvergne-Rhône-Alpes", city: "Lyon", tag: "Gastronomy", popular: false },
            { name: "Normandy", city: "Rouen", tag: "History", popular: false },
        ]
    },
    italy: {
        name: "Italy",
        flag: "🇮🇹",
        currency: "EUR",
        timezone: "GMT+1",
        states: [
            { name: "Lazio", city: "Rome", tag: "History", popular: true },
            { name: "Tuscany", city: "Florence", tag: "Art", popular: true },
            { name: "Veneto", city: "Venice", tag: "Canals", popular: true },
            { name: "Lombardy", city: "Milan", tag: "Fashion", popular: true },
            { name: "Campania", city: "Naples", tag: "Pizza", popular: false },
        ]
    },
    spain: {
        name: "Spain",
        flag: "🇪🇸",
        currency: "EUR",
        timezone: "GMT+1",
        states: [
            { name: "Madrid", city: "Madrid", tag: "Capital", popular: true },
            { name: "Catalonia", city: "Barcelona", tag: "Art", popular: true },
            { name: "Andalusia", city: "Seville", tag: "Flamenco", popular: true },
            { name: "Balearic Islands", city: "Ibiza", tag: "Nightlife", popular: true },
        ]
    },
    uk: {
        name: "United Kingdom",
        flag: "🇬🇧",
        currency: "GBP",
        timezone: "GMT+0",
        states: [
            { name: "England", city: "London", tag: "Capital", popular: true },
            { name: "Scotland", city: "Edinburgh", tag: "Historic", popular: true },
            { name: "Wales", city: "Cardiff", tag: "Castles", popular: false },
            { name: "Northern Ireland", city: "Belfast", tag: "Culture", popular: false },
        ]
    },
    germany: {
        name: "Germany",
        flag: "🇩🇪",
        currency: "EUR",
        timezone: "GMT+1",
        states: [
            { name: "Berlin", city: "Berlin", tag: "Capital", popular: true },
            { name: "Bavaria", city: "Munich", tag: "Culture", popular: true },
            { name: "Hamburg", city: "Hamburg", tag: "Port City", popular: false },
            { name: "Hesse", city: "Frankfurt", tag: "Business", popular: false },
        ]
    },
    switzerland: {
        name: "Switzerland",
        flag: "🇨🇭",
        currency: "CHF",
        timezone: "GMT+1",
        states: [
            { name: "Zurich", city: "Zurich", tag: "Finance", popular: true },
            { name: "Geneva", city: "Geneva", tag: "Scenic", popular: true },
            { name: "Lucerne", city: "Lucerne", tag: "Alps", popular: true },
            { name: "Interlaken", city: "Interlaken", tag: "Adventure", popular: true },
        ]
    },
    netherlands: {
        name: "Netherlands",
        flag: "🇳🇱",
        currency: "EUR",
        timezone: "GMT+1",
        states: [
            { name: "North Holland", city: "Amsterdam", tag: "Canals", popular: true },
            { name: "South Holland", city: "Rotterdam", tag: "Modern", popular: false },
        ]
    },
    greece: {
        name: "Greece",
        flag: "🇬🇷",
        currency: "EUR",
        timezone: "GMT+2",
        states: [
            { name: "Attica", city: "Athens", tag: "Ancient", popular: true },
            { name: "South Aegean", city: "Santorini", tag: "Islands", popular: true },
            { name: "Crete", city: "Heraklion", tag: "Beaches", popular: true },
            { name: "Mykonos", city: "Mykonos", tag: "Nightlife", popular: true },
        ]
    },
    turkey: {
        name: "Turkey",
        flag: "🇹🇷",
        currency: "TRY",
        timezone: "GMT+3",
        states: [
            { name: "Istanbul", city: "Istanbul", tag: "Historic", popular: true },
            { name: "Antalya", city: "Antalya", tag: "Riviera", popular: true },
            { name: "Cappadocia", city: "Göreme", tag: "Balloons", popular: true },
        ]
    },

    // AMERICAS
    usa: {
        name: "United States",
        flag: "🇺🇸",
        currency: "USD",
        timezone: "GMT-5 to -10",
        states: [
            { name: "New York", city: "New York City", tag: "Urban", popular: true },
            { name: "California", city: "Los Angeles", tag: "Entertainment", popular: true },
            { name: "California", city: "San Francisco", tag: "Tech", popular: true },
            { name: "Nevada", city: "Las Vegas", tag: "Entertainment", popular: true },
            { name: "Florida", city: "Miami", tag: "Beaches", popular: true },
            { name: "Florida", city: "Orlando", tag: "Theme Parks", popular: true },
            { name: "Hawaii", city: "Honolulu", tag: "Paradise", popular: true },
            { name: "Illinois", city: "Chicago", tag: "Architecture", popular: false },
            { name: "Texas", city: "Austin", tag: "Music", popular: false },
            { name: "Washington", city: "Seattle", tag: "Coffee", popular: false },
        ]
    },
    canada: {
        name: "Canada",
        flag: "🇨🇦",
        currency: "CAD",
        timezone: "GMT-3.5 to -8",
        states: [
            { name: "Ontario", city: "Toronto", tag: "Urban", popular: true },
            { name: "British Columbia", city: "Vancouver", tag: "Nature", popular: true },
            { name: "Quebec", city: "Montreal", tag: "French Culture", popular: true },
            { name: "Alberta", city: "Banff", tag: "Mountains", popular: true },
        ]
    },
    mexico: {
        name: "Mexico",
        flag: "🇲🇽",
        currency: "MXN",
        timezone: "GMT-6",
        states: [
            { name: "Quintana Roo", city: "Cancun", tag: "Beaches", popular: true },
            { name: "Mexico City", city: "Mexico City", tag: "Capital", popular: true },
            { name: "Jalisco", city: "Puerto Vallarta", tag: "Resort", popular: true },
        ]
    },
    brazil: {
        name: "Brazil",
        flag: "🇧🇷",
        currency: "BRL",
        timezone: "GMT-3",
        states: [
            { name: "Rio de Janeiro", city: "Rio de Janeiro", tag: "Carnival", popular: true },
            { name: "São Paulo", city: "São Paulo", tag: "Business", popular: false },
        ]
    },

    // AFRICA & MIDDLE EAST
    egypt: {
        name: "Egypt",
        flag: "🇪🇬",
        currency: "EGP",
        timezone: "GMT+2",
        states: [
            { name: "Cairo", city: "Cairo", tag: "Pyramids", popular: true },
            { name: "Red Sea", city: "Hurghada", tag: "Diving", popular: true },
            { name: "Luxor", city: "Luxor", tag: "Temples", popular: true },
        ]
    },
    southAfrica: {
        name: "South Africa",
        flag: "🇿🇦",
        currency: "ZAR",
        timezone: "GMT+2",
        states: [
            { name: "Western Cape", city: "Cape Town", tag: "Scenic", popular: true },
            { name: "Gauteng", city: "Johannesburg", tag: "Urban", popular: false },
            { name: "KwaZulu-Natal", city: "Durban", tag: "Beaches", popular: false },
        ]
    },
    kenya: {
        name: "Kenya",
        flag: "🇰🇪",
        currency: "KES",
        timezone: "GMT+3",
        states: [
            { name: "Nairobi", city: "Nairobi", tag: "Safari Gateway", popular: true },
            { name: "Coast", city: "Mombasa", tag: "Beaches", popular: true },
            { name: "Maasai Mara", city: "Maasai Mara", tag: "Safari", popular: true },
        ]
    },
    morocco: {
        name: "Morocco",
        flag: "🇲🇦",
        currency: "MAD",
        timezone: "GMT+1",
        states: [
            { name: "Marrakech-Safi", city: "Marrakech", tag: "Exotic", popular: true },
            { name: "Casablanca-Settat", city: "Casablanca", tag: "Urban", popular: false },
            { name: "Fès-Meknès", city: "Fez", tag: "Historic", popular: true },
        ]
    },
    saudiArabia: {
        name: "Saudi Arabia",
        flag: "🇸🇦",
        currency: "SAR",
        timezone: "GMT+3",
        states: [
            { name: "Riyadh", city: "Riyadh", tag: "Capital", popular: true },
            { name: "Makkah", city: "Jeddah", tag: "Coastal", popular: true },
            { name: "AlUla", city: "AlUla", tag: "Heritage", popular: true },
        ]
    },
    qatar: {
        name: "Qatar",
        flag: "🇶🇦",
        currency: "QAR",
        timezone: "GMT+3",
        states: [
            { name: "Doha", city: "Doha", tag: "Modern", popular: true },
        ]
    },

    // OCEANIA
    australia: {
        name: "Australia",
        flag: "🇦🇺",
        currency: "AUD",
        timezone: "GMT+8 to +11",
        states: [
            { name: "New South Wales", city: "Sydney", tag: "Iconic", popular: true },
            { name: "Victoria", city: "Melbourne", tag: "Cultural", popular: true },
            { name: "Queensland", city: "Brisbane", tag: "Sunshine", popular: false },
            { name: "Queensland", city: "Gold Coast", tag: "Beaches", popular: true },
            { name: "Western Australia", city: "Perth", tag: "Remote", popular: false },
        ]
    },
    newZealand: {
        name: "New Zealand",
        flag: "🇳🇿",
        currency: "NZD",
        timezone: "GMT+12",
        states: [
            { name: "Auckland", city: "Auckland", tag: "Urban", popular: true },
            { name: "Canterbury", city: "Christchurch", tag: "Adventure", popular: false },
            { name: "Otago", city: "Queenstown", tag: "Adventure", popular: true },
        ]
    },
    fiji: {
        name: "Fiji",
        flag: "🇫🇯",
        currency: "FJD",
        timezone: "GMT+12",
        states: [
            { name: "Viti Levu", city: "Suva", tag: "Capital", popular: false },
            { name: "Mamanuca Islands", city: "Resort Islands", tag: "Paradise", popular: true },
        ]
    },
};

// Get all popular destinations for quick display
export const getPopularDestinations = () => {
    const popular = [];
    Object.entries(destinations).forEach(([countryCode, country]) => {
        country.states
            .filter(state => state.popular)
            .slice(0, 2) // Max 2 per country for variety
            .forEach(state => {
                popular.push({
                    country: country.name,
                    countryCode,
                    flag: country.flag,
                    state: state.name,
                    city: state.city,
                    tag: state.tag,
                    fullName: `${state.city}, ${country.name}`,
                });
            });
    });
    return popular;
};

// Get all countries for dropdown
export const getAllCountries = () => {
    return Object.entries(destinations).map(([code, country]) => ({
        code,
        name: country.name,
        flag: country.flag,
        currency: country.currency,
        timezone: country.timezone,
    }));
};

// Get states/cities for a specific country
export const getStatesForCountry = (countryCode) => {
    const country = destinations[countryCode];
    if (!country) return [];
    return country.states.map(state => ({
        ...state,
        fullName: `${state.city}, ${state.name}`,
    }));
};

// Search destinations
export const searchDestinations = (query) => {
    const results = [];
    const lowerQuery = query.toLowerCase();

    Object.entries(destinations).forEach(([countryCode, country]) => {
        // Match country name
        if (country.name.toLowerCase().includes(lowerQuery)) {
            country.states.forEach(state => {
                results.push({
                    country: country.name,
                    countryCode,
                    flag: country.flag,
                    state: state.name,
                    city: state.city,
                    tag: state.tag,
                    fullName: `${state.city}, ${country.name}`,
                });
            });
        } else {
            // Match state/city
            country.states.forEach(state => {
                if (
                    state.name.toLowerCase().includes(lowerQuery) ||
                    state.city.toLowerCase().includes(lowerQuery)
                ) {
                    results.push({
                        country: country.name,
                        countryCode,
                        flag: country.flag,
                        state: state.name,
                        city: state.city,
                        tag: state.tag,
                        fullName: `${state.city}, ${country.name}`,
                    });
                }
            });
        }
    });

    return results.slice(0, 10); // Limit results
};

export default destinations;
