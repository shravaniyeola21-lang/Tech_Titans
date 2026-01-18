// Mock Travel Plan Data for Nexus TravelBuddy
// This simulates what would come from OpenAI API

export const generateMockTravelPlan = (userInputs) => {
    const { from, to, startDate, endDate, budget, travelers, preferences, stayType } = userInputs;

    // Default values if inputs are missing
    const destination = to || "Paris, France";
    const origin = from || "New York, USA";
    const destName = destination.split(',')[0].trim();

    // Calculate number of days
    const start = new Date(startDate || new Date());
    const end = new Date(endDate || new Date(Date.now() + 5 * 24 * 60 * 60 * 1000));
    const days = Math.ceil((end - start) / (1000 * 60 * 60 * 24)) + 1;
    const tripDuration = days > 0 ? days : 5;

    // Helper to generate Google Maps Link
    const getMapLink = (query) => `https://maps.google.com/?q=${encodeURIComponent(query)}`;

    // Helper to generate Unsplash Image
    const getImage = (query) => `https://source.unsplash.com/400x300/?${encodeURIComponent(query)}`;

    // Generate dynamic itinerary
    const itinerary = [];
    for (let i = 1; i <= tripDuration; i++) {
        const currentDate = new Date(start);
        currentDate.setDate(start.getDate() + (i - 1));

        let activities = [];
        if (i === 1) {
            activities = [
                { time: "10:00 AM", activity: `Arrive at ${destName} Airport`, duration: "1h", completed: false },
                { time: "11:30 AM", activity: "Hotel Check-in & Relax", duration: "1.5h", completed: false },
                { time: "01:30 PM", activity: `Lunch at a local ${destName} cafe`, duration: "1.5h", completed: false },
                { time: "04:00 PM", activity: `Walk around ${destName} City Center`, duration: "2h", completed: false },
                { time: "07:30 PM", activity: "Welcome Dinner", duration: "2h", completed: false }
            ];
        } else if (i === tripDuration) {
            activities = [
                { time: "09:00 AM", activity: "Souvenir Shopping", duration: "2h", completed: false },
                { time: "12:00 PM", activity: "Final Lunch", duration: "1.5h", completed: false },
                { time: "02:00 PM", activity: "Head to Airport", duration: "1h", completed: false },
                { time: "05:00 PM", activity: "Departure", duration: "0h", completed: false }
            ];
        } else {
            activities = [
                { time: "09:30 AM", activity: `Visit major ${destName} landmark`, duration: "2.5h", completed: false },
                { time: "01:00 PM", activity: "Lunch Break", duration: "1h", completed: false },
                { time: "03:00 PM", activity: `Explore ${destName} ${i % 2 === 0 ? 'Museum' : 'Park'}`, duration: "2h", completed: false },
                { time: "06:00 PM", activity: "Evening Stroll / Sunset", duration: "1.5h", completed: false },
                { time: "08:00 PM", activity: "Dinner at popular spot", duration: "2h", completed: false }
            ];
        }

        itinerary.push({
            day: i,
            title: `Day ${i}: ${i === 1 ? 'Arrival' : i === tripDuration ? 'Departure' : 'Explore ' + destName}`,
            date: currentDate.toISOString().split('T')[0],
            activities: activities
        });
    }

    return {
        overview: {
            destination: destination,
            origin: origin,
            country: destination.includes(',') ? destination.split(',')[1].trim() : "International",
            state: destName,
            city: destName,
            currency: "Local Currency",
            exchangeRate: "Check current rates",
            timezone: "Local Time",
            bestTimeToVisit: "Year-round",
            currentWeather: "Pleasant",
            tripDuration: `${tripDuration} days`,
            travelers: travelers || 2,
            budget: budget || "Medium"
        },

        transport: [
            {
                id: 1,
                type: "Flight",
                operator: "Premium Air",
                class: "Economy",
                departure: { time: "08:00 AM", airport: `${origin} Arpt` },
                arrival: { time: "12:00 PM", airport: `${destName} Arpt` },
                duration: "4h 00m",
                price: "₹25,000",
                image: "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=400",
                bookingLink: "https://www.google.com/flights",
                selected: false
            },
            {
                id: 2,
                type: "Flight",
                operator: "Budget Fly",
                class: "Economy",
                departure: { time: "10:00 AM", airport: `${origin} Arpt` },
                arrival: { time: "02:00 PM", airport: `${destName} Arpt` },
                duration: "4h 00m",
                price: "₹18,000",
                image: "https://images.unsplash.com/photo-1569629743817-70d8db6c323b?w=400",
                bookingLink: "https://www.google.com/flights",
                selected: false
            }
        ],

        hotels: [
            {
                id: 1,
                name: `Grand ${destName} Hotel`,
                rating: 5,
                pricePerNight: "₹15,000",
                location: `City Center, ${destName}`,
                amenities: ["Pool", "Spa", "WiFi", "Gym"],
                image: getImage(`hotel ${destName}`),
                mapLink: getMapLink(`Grand Hotel ${destName}`),
                bookingLink: "https://www.booking.com",
                selected: false
            },
            {
                id: 2,
                name: `${destName} City Stay`,
                rating: 4,
                pricePerNight: "₹8,000",
                location: `Downtown, ${destName}`,
                amenities: ["WiFi", "Breakfast", "AC"],
                image: getImage(`luxury room ${destName}`),
                mapLink: getMapLink(`Hotel ${destName}`),
                bookingLink: "https://www.booking.com",
                selected: false
            },
            {
                id: 3,
                name: `Backpacker's ${destName}`,
                rating: 3,
                pricePerNight: "₹3,500",
                location: `Near Station, ${destName}`,
                amenities: ["WiFi", "Lounge", "Lockers"],
                image: getImage(`hostel ${destName}`),
                mapLink: getMapLink(`Hostel ${destName}`),
                bookingLink: "https://www.booking.com",
                selected: false
            }
        ],

        itinerary: itinerary,

        attractions: [
            {
                id: 1,
                name: `Famous ${destName} Museum`,
                description: `A must-visit museum showcasing the history and culture of ${destName}.`,
                category: "Culture",
                image: getImage(`museum ${destName}`),
                mapLink: getMapLink(`${destName} Museum`),
                entryFee: "₹1,200",
                added: false
            },
            {
                id: 2,
                name: `${destName} Central Park`,
                description: "Beautiful green space in the heart of the city.",
                category: "Nature",
                image: getImage(`park ${destName}`),
                mapLink: getMapLink(`${destName} Park`),
                entryFee: "Free",
                added: false
            },
            {
                id: 3,
                name: `${destName} Tower`,
                description: "Iconic landmark with panoramic views.",
                category: "Landmark",
                image: getImage(`landmark ${destName}`),
                mapLink: getMapLink(`${destName} Landmark`),
                entryFee: "₹800",
                added: false
            }
        ],

        restaurants: [
            {
                id: 1,
                name: `The ${destName} Kitchen`,
                cuisine: "Local",
                location: "Main Street",
                priceRange: "₹₹₹",
                rating: 4.8,
                specialty: "Traditional dishes",
                image: getImage(`food ${destName}`),
                mapLink: getMapLink(`Restaurant ${destName}`),
                added: false
            },
            {
                id: 2,
                name: "City Bistro",
                cuisine: "International",
                location: "Downtown",
                priceRange: "₹₹",
                rating: 4.5,
                specialty: "Fusion cuisine",
                image: getImage(`cafe ${destName}`),
                mapLink: getMapLink(`Cafe ${destName}`),
                added: false
            }
        ],

        shopping: [
            {
                id: 1,
                name: `${destName} Mall`,
                type: "Mall",
                description: "Premier shopping destination.",
                highlights: ["Fashion", "Electronics", "Food Court"],
                mapLink: getMapLink(`${destName} Mall`),
                added: false
            },
            {
                id: 2,
                name: "Old Market",
                type: "Market",
                description: "Local handicrafts and souvenirs.",
                highlights: ["Handicrafts", "Spices", "Souvenirs"],
                mapLink: getMapLink(`${destName} Market`),
                added: false
            }
        ],

        packingList: {
            clothes: [
                { item: "Comfortable walking shoes", packed: false },
                { item: "Casual day wear (4-5 sets)", packed: false },
                { item: "Evening outfit", packed: false },
                { item: "Light jacket/layer", packed: false },
                { item: "Undergarments & socks", packed: false }
            ],
            documents: [
                { item: "Passport/ID", packed: false },
                { item: "Tickets & Booking info", packed: false },
                { item: "Travel Insurance", packed: false }
            ],
            essentials: [
                { item: "Toiletries", packed: false },
                { item: "Medications", packed: false },
                { item: "Phone charger & Power bank", packed: false },
                { item: "Universal Adapter", packed: false },
                { item: "Sunscreen", packed: false }
            ],
            tech: [
                { item: "Camera", packed: false },
                { item: "Headphones", packed: false }
            ]
        },

        budget: {
            currency: "INR",
            breakdown: [
                { category: "Flights", amount: 25000, icon: "✈️" },
                { category: "Accommodation", amount: 35000, icon: "🏨" },
                { category: "Food & Dining", amount: 15000, icon: "🍽️" },
                { category: "Local Transport", amount: 5000, icon: "🚗" },
                { category: "Activities", amount: 10000, icon: "🎡" },
                { category: "Shopping", amount: 10000, icon: "🛍️" },
                { category: "Buffer", amount: 5000, icon: "🆘" }
            ],
            total: 105000
        },

        tips: [
            {
                category: "General",
                tips: [
                    `Respect local ${destName} customs and traditions`,
                    "Keep emergency numbers handy",
                    "Stay hydrated during tours"
                ]
            },
            {
                category: "Safety",
                tips: [
                    "Keep valuables secure",
                    "Avoid unlit areas at night",
                    "Use official taxis or rideshare apps"
                ]
            }
        ]
    };
};

export default generateMockTravelPlan;

