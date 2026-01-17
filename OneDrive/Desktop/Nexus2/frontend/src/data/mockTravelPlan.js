// Mock Travel Plan Data for Nexus TravelBuddy
// This simulates what would come from OpenAI API

export const generateMockTravelPlan = (userInputs) => {
    const { from, to, startDate, endDate, budget, travelers, preferences, stayType, transport } = userInputs;

    // Calculate number of days
    const start = new Date(startDate);
    const end = new Date(endDate);
    const days = Math.ceil((end - start) / (1000 * 60 * 60 * 24)) + 1;

    return {
        overview: {
            destination: to || "Dubai, UAE",
            origin: from || "Mumbai, India",
            country: "United Arab Emirates",
            state: "Dubai",
            city: "Dubai",
            currency: "AED (UAE Dirham)",
            exchangeRate: "1 USD = 3.67 AED",
            timezone: "GMT+4 (Gulf Standard Time)",
            bestTimeToVisit: "November to March",
            currentWeather: "Sunny, 28°C",
            tripDuration: `${days} days`,
            travelers: travelers || 2,
            budget: budget || "Medium"
        },

        transport: [
            {
                id: 1,
                type: "Flight",
                operator: "Emirates",
                class: "Economy",
                departure: {
                    time: "06:30 AM",
                    airport: "Mumbai (BOM)"
                },
                arrival: {
                    time: "08:45 AM",
                    airport: "Dubai (DXB)"
                },
                duration: "3h 15m",
                price: "₹25,500",
                image: "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=400",
                bookingLink: "https://www.emirates.com",
                selected: false
            },
            {
                id: 2,
                type: "Flight",
                operator: "Air India",
                class: "Economy",
                departure: {
                    time: "10:00 AM",
                    airport: "Mumbai (BOM)"
                },
                arrival: {
                    time: "12:30 PM",
                    airport: "Dubai (DXB)"
                },
                duration: "3h 30m",
                price: "₹18,200",
                image: "https://images.unsplash.com/photo-1569629743817-70d8db6c323b?w=400",
                bookingLink: "https://www.airindia.com",
                selected: false
            },
            {
                id: 3,
                type: "Flight",
                operator: "IndiGo",
                class: "Economy",
                departure: {
                    time: "02:15 PM",
                    airport: "Mumbai (BOM)"
                },
                arrival: {
                    time: "04:45 PM",
                    airport: "Dubai (DXB)"
                },
                duration: "3h 30m",
                price: "₹15,800",
                image: "https://images.unsplash.com/photo-1556388158-158ea5ccacbd?w=400",
                bookingLink: "https://www.goindigo.in",
                selected: false
            }
        ],

        hotels: [
            {
                id: 1,
                name: "Atlantis The Palm",
                rating: 5,
                pricePerNight: "₹28,000",
                location: "Palm Jumeirah, Dubai",
                amenities: ["Pool", "Spa", "Beach Access", "Aquarium", "Fine Dining"],
                image: "https://images.unsplash.com/photo-1582719508461-905c673771fd?w=400",
                mapLink: "https://maps.google.com/?q=Atlantis+The+Palm+Dubai",
                bookingLink: "https://www.booking.com/hotel/ae/atlantis-the-palm.html",
                selected: false
            },
            {
                id: 2,
                name: "JW Marriott Marquis",
                rating: 5,
                pricePerNight: "₹15,500",
                location: "Business Bay, Dubai",
                amenities: ["Infinity Pool", "Gym", "Multiple Restaurants", "Spa"],
                image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=400",
                mapLink: "https://maps.google.com/?q=JW+Marriott+Marquis+Dubai",
                bookingLink: "https://www.marriott.com",
                selected: false
            },
            {
                id: 3,
                name: "Rove Downtown",
                rating: 4,
                pricePerNight: "₹6,500",
                location: "Downtown Dubai",
                amenities: ["Rooftop Pool", "Gym", "Café", "Free WiFi"],
                image: "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?w=400",
                mapLink: "https://maps.google.com/?q=Rove+Downtown+Dubai",
                bookingLink: "https://www.rovehotels.com",
                selected: false
            }
        ],

        itinerary: [
            {
                day: 1,
                title: "Arrival & City Exploration",
                date: startDate,
                activities: [
                    { time: "08:45 AM", activity: "Arrive at Dubai International Airport", duration: "1h", completed: false },
                    { time: "10:00 AM", activity: "Hotel check-in & freshen up", duration: "1.5h", completed: false },
                    { time: "12:00 PM", activity: "Lunch at Al Baik (local favorite)", duration: "1h", completed: false },
                    { time: "02:00 PM", activity: "Visit Dubai Mall", duration: "3h", completed: false },
                    { time: "05:30 PM", activity: "Dubai Fountain Show", duration: "30m", completed: false },
                    { time: "06:30 PM", activity: "Burj Khalifa - At The Top observation deck", duration: "2h", completed: false },
                    { time: "09:00 PM", activity: "Dinner at Social House", duration: "1.5h", completed: false }
                ]
            },
            {
                day: 2,
                title: "Desert Safari Adventure",
                date: new Date(new Date(startDate).getTime() + 86400000).toISOString().split('T')[0],
                activities: [
                    { time: "08:00 AM", activity: "Breakfast at hotel", duration: "1h", completed: false },
                    { time: "09:30 AM", activity: "Visit Dubai Frame", duration: "2h", completed: false },
                    { time: "12:00 PM", activity: "Lunch at Jumeirah Beach", duration: "1.5h", completed: false },
                    { time: "02:00 PM", activity: "Rest & pool time", duration: "2h", completed: false },
                    { time: "04:00 PM", activity: "Desert Safari pickup", duration: "30m", completed: false },
                    { time: "05:00 PM", activity: "Dune bashing & camel ride", duration: "2h", completed: false },
                    { time: "07:30 PM", activity: "BBQ dinner with belly dance show", duration: "3h", completed: false }
                ]
            },
            {
                day: 3,
                title: "Palm Jumeirah & Marina",
                date: new Date(new Date(startDate).getTime() + 172800000).toISOString().split('T')[0],
                activities: [
                    { time: "09:00 AM", activity: "Late breakfast at hotel", duration: "1h", completed: false },
                    { time: "10:30 AM", activity: "Palm Jumeirah Monorail & Atlantis visit", duration: "3h", completed: false },
                    { time: "02:00 PM", activity: "Lunch at Nobu Atlantis", duration: "1.5h", completed: false },
                    { time: "04:00 PM", activity: "Dubai Marina walk & yacht cruise", duration: "3h", completed: false },
                    { time: "07:30 PM", activity: "JBR Beach sunset", duration: "1h", completed: false },
                    { time: "09:00 PM", activity: "Dinner at Pier 7", duration: "2h", completed: false }
                ]
            },
            {
                day: 4,
                title: "Old Dubai & Shopping",
                date: new Date(new Date(startDate).getTime() + 259200000).toISOString().split('T')[0],
                activities: [
                    { time: "08:30 AM", activity: "Breakfast at Arabian Tea House", duration: "1h", completed: false },
                    { time: "10:00 AM", activity: "Al Fahidi Historical District walking tour", duration: "2h", completed: false },
                    { time: "12:30 PM", activity: "Abra ride across Dubai Creek", duration: "30m", completed: false },
                    { time: "01:00 PM", activity: "Gold Souk & Spice Souk exploration", duration: "2h", completed: false },
                    { time: "03:30 PM", activity: "Lunch at local Emirati restaurant", duration: "1h", completed: false },
                    { time: "05:00 PM", activity: "Mall of the Emirates & Ski Dubai", duration: "3h", completed: false },
                    { time: "08:30 PM", activity: "Farewell dinner at Atmosphere (Burj Khalifa)", duration: "2h", completed: false },
                    { time: "11:00 PM", activity: "Pack & prepare for departure", duration: "1h", completed: false }
                ]
            }
        ],

        attractions: [
            {
                id: 1,
                name: "Burj Khalifa",
                description: "World's tallest building at 828m. Visit At The Top for stunning city views.",
                category: "Landmark",
                image: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=400",
                mapLink: "https://maps.google.com/?q=Burj+Khalifa+Dubai",
                entryFee: "₹3,500",
                added: false
            },
            {
                id: 2,
                name: "Dubai Miracle Garden",
                description: "World's largest natural flower garden with 150 million flowers.",
                category: "Nature",
                image: "https://images.unsplash.com/photo-1585232350744-e3acb5e6dd95?w=400",
                mapLink: "https://maps.google.com/?q=Dubai+Miracle+Garden",
                entryFee: "₹500",
                added: false
            },
            {
                id: 3,
                name: "Dubai Museum",
                description: "Housed in Al Fahidi Fort, showcasing Dubai's history and heritage.",
                category: "Culture",
                image: "https://images.unsplash.com/photo-1548092372-0d1bd40894a3?w=400",
                mapLink: "https://maps.google.com/?q=Dubai+Museum",
                entryFee: "₹150",
                added: false
            },
            {
                id: 4,
                name: "Palm Jumeirah",
                description: "Iconic artificial archipelago shaped like a palm tree.",
                category: "Landmark",
                image: "https://images.unsplash.com/photo-1512632578888-169bbbc64f33?w=400",
                mapLink: "https://maps.google.com/?q=Palm+Jumeirah+Dubai",
                entryFee: "Free",
                added: false
            }
        ],

        restaurants: [
            {
                id: 1,
                name: "At.mosphere",
                cuisine: "Fine Dining",
                location: "Burj Khalifa, Level 122",
                priceRange: "₹₹₹₹",
                rating: 4.8,
                specialty: "European cuisine with world's highest views",
                image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=400",
                mapLink: "https://maps.google.com/?q=Atmosphere+Dubai",
                added: false
            },
            {
                id: 2,
                name: "Al Baik",
                cuisine: "Fast Food",
                location: "Multiple Locations",
                priceRange: "₹",
                rating: 4.5,
                specialty: "Famous Middle Eastern fried chicken",
                image: "https://images.unsplash.com/photo-1626645738196-c2a72c19c6e7?w=400",
                mapLink: "https://maps.google.com/?q=Al+Baik+Dubai",
                added: false
            },
            {
                id: 3,
                name: "Pierchic",
                cuisine: "Seafood",
                location: "Al Qasr, Madinat Jumeirah",
                priceRange: "₹₹₹",
                rating: 4.7,
                specialty: "Fresh seafood on a pier overlooking Arabian Gulf",
                image: "https://images.unsplash.com/photo-1559339352-11d035aa65de?w=400",
                mapLink: "https://maps.google.com/?q=Pierchic+Dubai",
                added: false
            }
        ],

        shopping: [
            {
                id: 1,
                name: "Dubai Mall",
                type: "Mall",
                description: "World's largest shopping mall with 1,200+ stores",
                highlights: ["Fashion Avenue", "Dubai Aquarium", "Ice Rink"],
                mapLink: "https://maps.google.com/?q=Dubai+Mall",
                added: false
            },
            {
                id: 2,
                name: "Gold Souk",
                type: "Market",
                description: "Traditional market with 300+ gold retailers",
                highlights: ["Gold jewelry", "Bargaining", "Traditional experience"],
                mapLink: "https://maps.google.com/?q=Gold+Souk+Dubai",
                added: false
            },
            {
                id: 3,
                name: "Mall of the Emirates",
                type: "Mall",
                description: "Premier shopping destination with Ski Dubai",
                highlights: ["Ski Dubai", "Luxury brands", "Entertainment"],
                mapLink: "https://maps.google.com/?q=Mall+of+the+Emirates",
                added: false
            }
        ],

        packingList: {
            clothes: [
                { item: "Light cotton shirts/tops (4-5)", packed: false },
                { item: "Comfortable pants/shorts", packed: false },
                { item: "Formal outfit for fine dining", packed: false },
                { item: "Swimwear", packed: false },
                { item: "Light jacket (for AC)", packed: false },
                { item: "Comfortable walking shoes", packed: false },
                { item: "Sandals/flip-flops", packed: false },
                { item: "Sunglasses & hat", packed: false }
            ],
            documents: [
                { item: "Passport (valid 6+ months)", packed: false },
                { item: "UAE Visa (if required)", packed: false },
                { item: "Flight tickets", packed: false },
                { item: "Hotel confirmation", packed: false },
                { item: "Travel insurance", packed: false },
                { item: "Copies of important documents", packed: false }
            ],
            essentials: [
                { item: "Sunscreen SPF 50+", packed: false },
                { item: "Toiletries", packed: false },
                { item: "Medications (if any)", packed: false },
                { item: "First aid kit", packed: false },
                { item: "Hand sanitizer", packed: false }
            ],
            tech: [
                { item: "Phone charger", packed: false },
                { item: "Power bank", packed: false },
                { item: "Universal adapter (Type G)", packed: false },
                { item: "Camera", packed: false },
                { item: "Headphones", packed: false }
            ]
        },

        budget: {
            currency: "INR",
            breakdown: [
                { category: "Flights", amount: 35000, icon: "✈️" },
                { category: "Accommodation", amount: 52000, icon: "🏨" },
                { category: "Food & Dining", amount: 25000, icon: "🍽️" },
                { category: "Local Transport", amount: 8000, icon: "🚗" },
                { category: "Activities", amount: 15000, icon: "🎡" },
                { category: "Shopping", amount: 20000, icon: "🛍️" },
                { category: "Emergency Buffer", amount: 10000, icon: "🆘" }
            ],
            total: 165000
        },

        tips: [
            {
                category: "Local Laws",
                tips: [
                    "Public displays of affection are frowned upon",
                    "Alcohol consumption only allowed in licensed venues",
                    "Dress modestly in public areas (cover shoulders and knees)",
                    "Photography of government buildings is prohibited"
                ]
            },
            {
                category: "Cultural Etiquette",
                tips: [
                    "Friday is the holy day - some places may be closed until afternoon",
                    "Use right hand for greetings and eating",
                    "Respect prayer times",
                    "Ask permission before photographing locals"
                ]
            },
            {
                category: "Currency & Payments",
                tips: [
                    "AED (Dirham) is the local currency",
                    "Credit cards widely accepted",
                    "Tipping 10-15% is customary",
                    "ATMs are readily available"
                ]
            },
            {
                category: "Emergency Numbers",
                tips: [
                    "Police: 999",
                    "Ambulance: 998",
                    "Fire: 997",
                    "Tourism Police: 800 2626"
                ]
            }
        ]
    };
};

export default generateMockTravelPlan;
