import { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import {
    Compass,
    MapPin,
    Clock,
    Users,
    Wallet,
    Cloud,
    Plane,
    Hotel,
    Calendar,
    Map,
    UtensilsCrossed,
    ShoppingBag,
    Luggage,
    Lightbulb,
    Check,
    Plus,
    Download,
    ChevronDown,
    ChevronUp,
    ExternalLink,
    Star,
    Globe,
    Sparkles
} from 'lucide-react';
import { generateMockTravelPlan } from '../data/mockTravelPlan';
import ChecklistItem from '../components/ChecklistItem';
import NexusAssistant from '../components/NexusAssistant';

const TravelPlan = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const [plan, setPlan] = useState(null);
    const [loading, setLoading] = useState(true);
    const [activeTab, setActiveTab] = useState('overview');
    const [expandedDay, setExpandedDay] = useState(1);
    const [totalProgress, setTotalProgress] = useState(0);

    const calculateOverallProgress = (p) => {
        if (!p) return 0;

        let totalItems = 0;
        let completedItems = 0;

        // Count itinerary activities
        p.itinerary.forEach(day => {
            day.activities.forEach(activity => {
                totalItems++;
                if (activity.completed) completedItems++;
            });
        });

        // Count packing list items
        Object.values(p.packingList).forEach(categoryItems => {
            categoryItems.forEach(item => {
                totalItems++;
                if (item.packed) completedItems++;
            });
        });

        return totalItems > 0 ? Math.round((completedItems / totalItems) * 100) : 0;
    };

    useEffect(() => {
        if (plan) {
            setTotalProgress(calculateOverallProgress(plan));
        }
    }, [plan]);

    useEffect(() => {
        const timer = setTimeout(() => {
            const state = location.state || {};
            const userInputs = state.userInputs || {
                to: state.initialDestination,
                from: state.initialOrigin,
                startDate: new Date().toISOString().split('T')[0],
                endDate: new Date(Date.now() + 5 * 86400000).toISOString().split('T')[0]
            };
            const generatedPlan = generateMockTravelPlan(userInputs);
            setPlan(generatedPlan);
            setLoading(false);
        }, 100);

        return () => clearTimeout(timer);
    }, [location.state]);

    const tabs = [
        { id: 'overview', label: 'Overview', icon: Globe },
        { id: 'transport', label: 'Transport', icon: Plane },
        { id: 'hotels', label: 'Hotels', icon: Hotel },
        { id: 'itinerary', label: 'Itinerary', icon: Calendar },
        { id: 'attractions', label: 'Attractions', icon: Map },
        { id: 'food', label: 'Food', icon: UtensilsCrossed },
        { id: 'shopping', label: 'Shopping', icon: ShoppingBag },
        { id: 'packing', label: 'Packing', icon: Luggage },
        { id: 'budget', label: 'Budget', icon: Wallet },
        { id: 'tips', label: 'Tips', icon: Lightbulb },
    ];

    const toggleActivity = (dayIndex, activityIndex) => {
        setPlan(prev => {
            const newPlan = { ...prev };
            newPlan.itinerary = [...prev.itinerary];
            newPlan.itinerary[dayIndex] = { ...prev.itinerary[dayIndex] };
            newPlan.itinerary[dayIndex].activities = [...prev.itinerary[dayIndex].activities];
            newPlan.itinerary[dayIndex].activities[activityIndex] = {
                ...prev.itinerary[dayIndex].activities[activityIndex],
                completed: !prev.itinerary[dayIndex].activities[activityIndex].completed
            };
            return newPlan;
        });
    };

    const togglePackingItem = (category, index) => {
        setPlan(prev => {
            const newPlan = { ...prev };
            newPlan.packingList = { ...prev.packingList };
            newPlan.packingList[category] = [...prev.packingList[category]];
            newPlan.packingList[category][index] = {
                ...prev.packingList[category][index],
                packed: !prev.packingList[category][index].packed
            };
            return newPlan;
        });
    };

    const handleDownloadPDF = () => {
        window.print();
    };

    if (loading) {
        return (
            <div className="min-h-screen flex items-center justify-center gradient-bg">
                <div className="text-center">
                    <div className="relative">
                        <div className="w-20 h-20 rounded-full border-4 border-indigo-500/30 animate-pulse" />
                        <div className="absolute inset-0 flex items-center justify-center">
                            <Sparkles className="w-8 h-8 text-indigo-400 animate-bounce" />
                        </div>
                    </div>
                    <h2 className="text-xl font-semibold text-white mt-6">Creating your perfect trip...</h2>
                    <p className="text-slate-400 mt-2">This will just take a moment</p>
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-screen gradient-bg">
            {/* Header */}
            <header className="sticky top-0 z-50 bg-slate-900/90 backdrop-blur-md border-b border-slate-700/50">
                <div className="max-w-7xl mx-auto px-6 py-4">
                    <div className="flex items-center justify-between">
                        <button
                            onClick={() => navigate('/')}
                            className="flex items-center gap-3 text-slate-400 hover:text-white transition-colors group"
                        >
                            <img src="/logo.png" alt="Nexus" className="w-10 h-10 object-cover mix-blend-screen scale-125" />
                            <span className="font-semibold text-lg">Nexus</span>
                        </button>

                        <div className="flex items-center gap-3">
                            <button
                                onClick={handleDownloadPDF}
                                className="flex items-center gap-2 px-4 py-2 rounded-xl border border-slate-600 text-slate-300 hover:bg-slate-800 transition-colors"
                            >
                                <Download className="w-4 h-4" />
                                <span className="hidden sm:inline">Download PDF</span>
                            </button>
                            <button
                                onClick={() => navigate('/plan')}
                                className="flex items-center gap-2 px-4 py-2 rounded-xl bg-gradient-to-r from-indigo-500 to-purple-600 text-white shadow-lg shadow-indigo-500/30"
                            >
                                <Plus className="w-4 h-4" />
                                New Trip
                            </button>
                        </div>
                    </div>
                </div>
            </header>

            {/* Hero Section */}
            <div className="relative bg-gradient-to-r from-indigo-600 to-purple-700 text-white py-12 px-6 overflow-hidden">
                <div className="absolute inset-0 overflow-hidden">
                    <div className="absolute -top-20 -right-20 w-64 h-64 bg-white/10 rounded-full blur-3xl" />
                    <div className="absolute -bottom-20 -left-20 w-64 h-64 bg-white/10 rounded-full blur-3xl" />
                </div>
                <div className="max-w-7xl mx-auto relative z-10">
                    <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
                        <div>
                            <div className="flex items-center gap-2 text-indigo-200 text-sm mb-2">
                                <MapPin className="w-4 h-4" />
                                <span>{plan.overview.origin} → {plan.overview.destination}</span>
                            </div>
                            <h1 className="text-3xl md:text-4xl font-bold mb-4">
                                Your Trip to {plan.overview.city}
                            </h1>
                            <div className="flex flex-wrap gap-4 text-sm">
                                <div className="flex items-center gap-2 bg-white/10 px-4 py-2 rounded-lg">
                                    <Calendar className="w-4 h-4" />
                                    <span>{plan.overview.tripDuration}</span>
                                </div>
                                <div className="flex items-center gap-2 bg-white/10 px-4 py-2 rounded-lg">
                                    <Users className="w-4 h-4" />
                                    <span>{plan.overview.travelers} travelers</span>
                                </div>
                                <div className="flex items-center gap-2 bg-white/10 px-4 py-2 rounded-lg">
                                    <Cloud className="w-4 h-4" />
                                    <span>{plan.overview.currentWeather}</span>
                                </div>
                            </div>
                        </div>
                        <div className="flex flex-col items-end">
                            <div className="text-sm text-indigo-200 mb-1">Estimated Budget</div>
                            <div className="text-3xl font-bold">₹{plan.budget.total.toLocaleString()}</div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Tabs Navigation */}
            <div className="sticky top-[73px] z-40 bg-slate-900/95 backdrop-blur-md border-b border-slate-700/50">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="flex overflow-x-auto scrollbar-hide -mb-px">
                        {tabs.map((tab) => {
                            const Icon = tab.icon;
                            return (
                                <button
                                    key={tab.id}
                                    onClick={() => setActiveTab(tab.id)}
                                    className={`flex items-center gap-2 px-5 py-4 text-sm font-medium border-b-2 whitespace-nowrap transition-colors ${activeTab === tab.id
                                        ? 'border-indigo-500 text-indigo-400'
                                        : 'border-transparent text-slate-400 hover:text-slate-200'
                                        }`}
                                >
                                    <Icon className="w-4 h-4" />
                                    {tab.label}
                                </button>
                            );
                        })}
                    </div>
                </div>
            </div>

            {/* Progress Bar Section (Only visible on screen) */}
            <div className="max-w-7xl mx-auto px-6 pt-8 print:hidden">
                <div className="bg-slate-800/40 border border-slate-700/50 rounded-2xl p-6 flex flex-col md:flex-row items-center gap-6">
                    <div className="flex-1 w-full">
                        <div className="flex justify-between items-end mb-2">
                            <div>
                                <h3 className="text-lg font-semibold text-white mb-1">Trip Readiness</h3>
                                <p className="text-sm text-slate-400">Complete your itinerary and packing checklists</p>
                            </div>
                            <span className="text-2xl font-bold text-indigo-400">{totalProgress}%</span>
                        </div>
                        <div className="h-3 w-full bg-slate-700/50 rounded-full overflow-hidden">
                            <div
                                className="h-full bg-gradient-to-r from-indigo-500 via-purple-500 to-teal-400 transition-all duration-1000 ease-out shadow-[0_0_15px_rgba(99,102,241,0.5)]"
                                style={{ width: `${totalProgress}%` }}
                            />
                        </div>
                    </div>
                </div>
            </div>

            {/* Main Content */}
            <main className="max-w-7xl mx-auto px-6 py-10">
                {/* Overview Tab */}
                {activeTab === 'overview' && (
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 animate-fade-in">
                        <div className="bg-slate-800/50 border border-slate-700/50 rounded-2xl p-6">
                            <h3 className="font-semibold text-white mb-4 flex items-center gap-2">
                                <Globe className="w-5 h-5 text-indigo-400" />
                                Destination Info
                            </h3>
                            <div className="space-y-3 text-sm">
                                <div className="flex justify-between">
                                    <span className="text-slate-400">Country</span>
                                    <span className="font-medium text-white">{plan.overview.country}</span>
                                </div>
                                <div className="flex justify-between">
                                    <span className="text-slate-400">State</span>
                                    <span className="font-medium text-white">{plan.overview.state}</span>
                                </div>
                                <div className="flex justify-between">
                                    <span className="text-slate-400">City</span>
                                    <span className="font-medium text-white">{plan.overview.city}</span>
                                </div>
                            </div>
                        </div>

                        <div className="bg-slate-800/50 border border-slate-700/50 rounded-2xl p-6">
                            <h3 className="font-semibold text-white mb-4 flex items-center gap-2">
                                <Wallet className="w-5 h-5 text-indigo-400" />
                                Currency & Time
                            </h3>
                            <div className="space-y-3 text-sm">
                                <div className="flex justify-between">
                                    <span className="text-slate-400">Currency</span>
                                    <span className="font-medium text-white">{plan.overview.currency}</span>
                                </div>
                                <div className="flex justify-between">
                                    <span className="text-slate-400">Exchange</span>
                                    <span className="font-medium text-white">{plan.overview.exchangeRate}</span>
                                </div>
                                <div className="flex justify-between">
                                    <span className="text-slate-400">Timezone</span>
                                    <span className="font-medium text-white">{plan.overview.timezone}</span>
                                </div>
                            </div>
                        </div>

                        <div className="bg-slate-800/50 border border-slate-700/50 rounded-2xl p-6">
                            <h3 className="font-semibold text-white mb-4 flex items-center gap-2">
                                <Cloud className="w-5 h-5 text-indigo-400" />
                                Weather
                            </h3>
                            <div className="space-y-3 text-sm">
                                <div className="flex justify-between">
                                    <span className="text-slate-400">Current</span>
                                    <span className="font-medium text-white">{plan.overview.currentWeather}</span>
                                </div>
                                <div className="flex justify-between">
                                    <span className="text-slate-400">Best Time</span>
                                    <span className="font-medium text-white">{plan.overview.bestTimeToVisit}</span>
                                </div>
                            </div>
                        </div>

                        {/* Google Maps Embed */}
                        <div className="md:col-span-2 lg:col-span-3 bg-slate-800/50 border border-slate-700/50 rounded-2xl p-6 h-[400px] overflow-hidden">
                            <h3 className="font-semibold text-white mb-4 flex items-center gap-2">
                                <MapPin className="w-5 h-5 text-indigo-400" />
                                Explore {plan.overview.destination}
                            </h3>
                            <iframe
                                title="Google Map"
                                width="100%"
                                height="100%"
                                style={{ border: 0, borderRadius: '0.75rem', filter: 'invert(90%) hue-rotate(180deg)' }}
                                loading="lazy"
                                allowFullScreen
                                src={`https://maps.google.com/maps?q=${encodeURIComponent(plan.overview.destination)}&output=embed`}
                            ></iframe>
                        </div>
                    </div>
                )}

                {/* Transport Tab */}
                {activeTab === 'transport' && (
                    <div className="space-y-6 animate-fade-in">
                        <h2 className="text-xl font-semibold text-white mb-6">Transport Options</h2>
                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {plan.transport.map((option) => (
                                <div key={option.id} className="bg-slate-800/50 border border-slate-700/50 rounded-2xl overflow-hidden">
                                    <img src={option.image} alt={option.operator} className="w-full h-40 object-cover" />
                                    <div className="p-5">
                                        <div className="flex items-center justify-between mb-3">
                                            <span className="px-3 py-1 rounded-full bg-indigo-500/20 text-indigo-300 text-xs border border-indigo-500/30">{option.type}</span>
                                            <span className="text-lg font-bold text-indigo-400">{option.price}</span>
                                        </div>
                                        <h3 className="font-semibold text-white mb-3">{option.operator}</h3>
                                        <div className="space-y-2 text-sm text-slate-400 mb-4">
                                            <div className="flex justify-between">
                                                <span>Departure</span>
                                                <span className="text-white">{option.departure.time} · {option.departure.airport}</span>
                                            </div>
                                            <div className="flex justify-between">
                                                <span>Arrival</span>
                                                <span className="text-white">{option.arrival.time} · {option.arrival.airport}</span>
                                            </div>
                                            <div className="flex justify-between">
                                                <span>Duration</span>
                                                <span className="text-white">{option.duration}</span>
                                            </div>
                                        </div>
                                        <a
                                            href={option.bookingLink}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="w-full flex items-center justify-center gap-2 px-4 py-3 rounded-xl bg-gradient-to-r from-indigo-500 to-purple-600 text-white font-medium"
                                        >
                                            Book Now
                                            <ExternalLink className="w-4 h-4" />
                                        </a>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                )}

                {/* Hotels Tab */}
                {activeTab === 'hotels' && (
                    <div className="space-y-6 animate-fade-in">
                        <h2 className="text-xl font-semibold text-white mb-6">Recommended Hotels</h2>
                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {plan.hotels.map((hotel) => (
                                <div key={hotel.id} className="bg-slate-800/50 border border-slate-700/50 rounded-2xl overflow-hidden">
                                    <img src={hotel.image} alt={hotel.name} className="w-full h-48 object-cover" />
                                    <div className="p-5">
                                        <div className="flex items-center gap-1 mb-2">
                                            {[...Array(hotel.rating)].map((_, i) => (
                                                <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                                            ))}
                                        </div>
                                        <h3 className="font-semibold text-white mb-1">{hotel.name}</h3>
                                        <div className="text-sm text-slate-400 mb-2 flex items-center gap-1">
                                            <MapPin className="w-3 h-3" />
                                            {hotel.location}
                                        </div>
                                        <div className="text-lg font-bold text-indigo-400 mb-3">
                                            {hotel.pricePerNight}
                                            <span className="text-sm font-normal text-slate-500"> /night</span>
                                        </div>
                                        <div className="flex flex-wrap gap-1 mb-4">
                                            {hotel.amenities.slice(0, 3).map((amenity) => (
                                                <span key={amenity} className="text-xs px-2 py-1 bg-slate-700/50 rounded-full text-slate-300">
                                                    {amenity}
                                                </span>
                                            ))}
                                        </div>
                                        <div className="flex gap-2">
                                            <a
                                                href={hotel.mapLink}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="flex-1 flex items-center justify-center gap-2 px-3 py-2.5 rounded-xl border border-slate-600 text-slate-300 hover:bg-slate-700 transition-colors"
                                            >
                                                <Map className="w-4 h-4" />
                                                Map
                                            </a>
                                            <a
                                                href={hotel.bookingLink}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="flex-1 flex items-center justify-center gap-2 px-3 py-2.5 rounded-xl bg-indigo-500 text-white"
                                            >
                                                Book
                                                <ExternalLink className="w-4 h-4" />
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                )}

                {/* Itinerary Tab */}
                {activeTab === 'itinerary' && (
                    <div className="space-y-6 animate-fade-in">
                        <h2 className="text-xl font-semibold text-white mb-6">Day-by-Day Itinerary</h2>
                        <div className="space-y-4">
                            {plan.itinerary.map((day, dayIndex) => (
                                <div key={day.day} className="bg-slate-800/50 border border-slate-700/50 rounded-2xl overflow-hidden">
                                    <button
                                        onClick={() => setExpandedDay(expandedDay === day.day ? null : day.day)}
                                        className="w-full p-5 flex items-center justify-between bg-slate-800/80 hover:bg-slate-700/50 transition-colors"
                                    >
                                        <div className="flex items-center gap-4">
                                            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-indigo-500 to-purple-600 text-white flex items-center justify-center font-bold shadow-lg shadow-indigo-500/30">
                                                {day.day}
                                            </div>
                                            <div className="text-left">
                                                <h3 className="font-semibold text-white">{day.title}</h3>
                                                <p className="text-sm text-slate-400">{day.activities.length} activities</p>
                                            </div>
                                        </div>
                                        {expandedDay === day.day ? (
                                            <ChevronUp className="w-5 h-5 text-slate-400" />
                                        ) : (
                                            <ChevronDown className="w-5 h-5 text-slate-400" />
                                        )}
                                    </button>

                                    {expandedDay === day.day && (
                                        <div className="p-5 border-t border-slate-700/50 animate-fade-in">
                                            <div className="space-y-4 pl-4 border-l-2 border-indigo-500/30">
                                                {day.activities.map((activity, actIndex) => (
                                                    <div key={actIndex} className="relative pl-6">
                                                        <div className="absolute left-[-9px] top-1 w-4 h-4 rounded-full bg-indigo-500 border-2 border-slate-800" />
                                                        <div
                                                            className="cursor-pointer group"
                                                            onClick={() => toggleActivity(dayIndex, actIndex)}
                                                        >
                                                            <div className="flex items-center gap-3 mb-1">
                                                                <span className="text-sm font-medium text-indigo-400">{activity.time}</span>
                                                                <span className="text-xs text-slate-500">• {activity.duration}</span>
                                                            </div>
                                                            <ChecklistItem
                                                                label={activity.activity}
                                                                isChecked={activity.completed}
                                                                onToggle={() => toggleActivity(dayIndex, actIndex)}
                                                            />
                                                        </div>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                    )}
                                </div>
                            ))}
                        </div>
                    </div>
                )}

                {/* Attractions Tab */}
                {activeTab === 'attractions' && (
                    <div className="space-y-6 animate-fade-in">
                        <h2 className="text-xl font-semibold text-white mb-6">Must-Visit Attractions</h2>
                        <div className="grid md:grid-cols-2 gap-6">
                            {plan.attractions.map((attraction) => (
                                <div key={attraction.id} className="bg-slate-800/50 border border-slate-700/50 rounded-2xl flex overflow-hidden">
                                    <img src={attraction.image} alt={attraction.name} className="w-32 h-auto object-cover" />
                                    <div className="flex-1 p-5">
                                        <span className="px-2 py-1 rounded-full bg-indigo-500/20 text-indigo-300 text-xs border border-indigo-500/30 mb-2 inline-block">{attraction.category}</span>
                                        <h3 className="font-semibold text-white mb-1">{attraction.name}</h3>
                                        <p className="text-sm text-slate-400 mb-3 line-clamp-2">{attraction.description}</p>
                                        <div className="flex items-center justify-between">
                                            <span className="text-sm font-medium text-indigo-400">{attraction.entryFee}</span>
                                            <a
                                                href={attraction.mapLink}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="text-sm text-indigo-400 hover:underline flex items-center gap-1"
                                            >
                                                <Map className="w-4 h-4" />
                                                View Map
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                )}

                {/* Food Tab */}
                {activeTab === 'food' && (
                    <div className="space-y-6 animate-fade-in">
                        <h2 className="text-xl font-semibold text-white mb-6">Where to Eat</h2>
                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {plan.restaurants.map((restaurant) => (
                                <div key={restaurant.id} className="bg-slate-800/50 border border-slate-700/50 rounded-2xl overflow-hidden">
                                    <img src={restaurant.image} alt={restaurant.name} className="w-full h-40 object-cover" />
                                    <div className="p-5">
                                        <div className="flex items-center justify-between mb-2">
                                            <span className="px-2 py-1 rounded-full bg-indigo-500/20 text-indigo-300 text-xs border border-indigo-500/30">{restaurant.cuisine}</span>
                                            <div className="flex items-center gap-1">
                                                <Star className="w-4 h-4 fill-amber-400 text-amber-400" />
                                                <span className="text-sm font-medium text-white">{restaurant.rating}</span>
                                            </div>
                                        </div>
                                        <h3 className="font-semibold text-white mb-1">{restaurant.name}</h3>
                                        <p className="text-sm text-slate-400 mb-2">{restaurant.specialty}</p>
                                        <div className="flex items-center justify-between">
                                            <span className="text-indigo-400 font-medium">{restaurant.priceRange}</span>
                                            <a
                                                href={restaurant.mapLink}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="text-sm text-indigo-400 hover:underline flex items-center gap-1"
                                            >
                                                <Map className="w-4 h-4" />
                                                Map
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                )}

                {/* Shopping Tab */}
                {activeTab === 'shopping' && (
                    <div className="space-y-6 animate-fade-in">
                        <h2 className="text-xl font-semibold text-white mb-6">Shopping Spots</h2>
                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {plan.shopping.map((shop) => (
                                <div key={shop.id} className="bg-slate-800/50 border border-slate-700/50 rounded-2xl p-6">
                                    <span className="px-2 py-1 rounded-full bg-indigo-500/20 text-indigo-300 text-xs border border-indigo-500/30 mb-3 inline-block">{shop.type}</span>
                                    <h3 className="font-semibold text-white mb-2">{shop.name}</h3>
                                    <p className="text-sm text-slate-400 mb-4">{shop.description}</p>
                                    <div className="flex flex-wrap gap-1 mb-4">
                                        {shop.highlights.map((h) => (
                                            <span key={h} className="text-xs px-2 py-1 bg-slate-700/50 text-slate-300 rounded-full">
                                                {h}
                                            </span>
                                        ))}
                                    </div>
                                    <a
                                        href={shop.mapLink}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="w-full flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl border border-slate-600 text-slate-300 hover:bg-slate-700 transition-colors"
                                    >
                                        <Map className="w-4 h-4" />
                                        View on Map
                                    </a>
                                </div>
                            ))}
                        </div>
                    </div>
                )}

                {/* Packing Tab */}
                {activeTab === 'packing' && (
                    <div className="space-y-6 animate-fade-in">
                        <h2 className="text-xl font-semibold text-white mb-6">Packing Checklist</h2>
                        <div className="grid md:grid-cols-2 gap-6">
                            {Object.entries(plan.packingList).map(([category, items]) => (
                                <div key={category} className="bg-slate-800/50 border border-slate-700/50 rounded-2xl p-6">
                                    <h3 className="font-semibold text-white mb-4 capitalize flex items-center gap-2">
                                        {category === 'clothes' && '👕'}
                                        {category === 'documents' && '📄'}
                                        {category === 'essentials' && '🎒'}
                                        {category === 'tech' && '📱'}
                                        {category}
                                    </h3>
                                    <div className="space-y-2">
                                        {items.map((item, index) => (
                                            <ChecklistItem
                                                key={index}
                                                label={item.item}
                                                isChecked={item.packed}
                                                onToggle={() => togglePackingItem(category, index)}
                                            />
                                        ))}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                )}

                {/* Budget Tab */}
                {activeTab === 'budget' && (
                    <div className="space-y-6 animate-fade-in">
                        <h2 className="text-xl font-semibold text-white mb-6">Budget Breakdown</h2>
                        <div className="bg-slate-800/50 border border-slate-700/50 rounded-2xl p-6">
                            <div className="space-y-4">
                                {plan.budget.breakdown.map((item, index) => (
                                    <div key={index} className="flex items-center justify-between py-3 border-b border-slate-700/50 last:border-0">
                                        <div className="flex items-center gap-3">
                                            <span className="text-2xl">{item.icon}</span>
                                            <span className="font-medium text-slate-300">{item.category}</span>
                                        </div>
                                        <span className="font-semibold text-white">
                                            ₹{item.amount.toLocaleString()}
                                        </span>
                                    </div>
                                ))}
                            </div>
                            <div className="mt-6 pt-4 border-t-2 border-indigo-500/30 flex items-center justify-between">
                                <span className="text-lg font-semibold text-white">Total Estimated</span>
                                <span className="text-2xl font-bold text-indigo-400">
                                    ₹{plan.budget.total.toLocaleString()}
                                </span>
                            </div>
                        </div>
                    </div>
                )}

                {/* Tips Tab */}
                {activeTab === 'tips' && (
                    <div className="space-y-6 animate-fade-in">
                        <h2 className="text-xl font-semibold text-white mb-6">Travel Tips</h2>
                        <div className="grid md:grid-cols-2 gap-6">
                            {plan.tips.map((section, index) => (
                                <div key={index} className="bg-slate-800/50 border border-slate-700/50 rounded-2xl p-6">
                                    <h3 className="font-semibold text-white mb-4 flex items-center gap-2">
                                        {section.category === 'Local Laws' && '⚖️'}
                                        {section.category === 'Cultural Etiquette' && '🙏'}
                                        {section.category === 'Currency & Payments' && '💳'}
                                        {section.category === 'Emergency Numbers' && '🚨'}
                                        {section.category}
                                    </h3>
                                    <ul className="space-y-2">
                                        {section.tips.map((tip, tipIndex) => (
                                            <li key={tipIndex} className="flex items-start gap-2 text-sm text-slate-400">
                                                <Check className="w-4 h-4 text-green-400 mt-0.5 flex-shrink-0" />
                                                {tip}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            ))}
                        </div>
                    </div>
                )}
            </main>

            {/* Footer */}
            <footer className="border-t border-slate-700/50 mt-12 py-8 px-6">
                <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-slate-400">
                    <div className="flex items-center gap-2">
                        <Compass className="w-5 h-5 text-indigo-400" />
                        <span>Nexus TravelBuddy</span>
                    </div>
                    <p>Your calm travel companion. Safe travels! ✈️</p>
                </div>
            </footer>

            {/* AI Assistant */}
            <NexusAssistant
                progress={totalProgress}
                destination={plan.overview.city}
                weather={plan.overview.currentWeather}
            />
        </div>
    );
};

export default TravelPlan;
