import { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import {
    Plane,
    MapPin,
    Mic,
    MicOff,
    Compass,
    Search,
    ChevronRight,
    Sparkles,
    Calendar,
    Shield,
    Zap,
    ChevronDown,
    X
} from 'lucide-react';
import { searchDestinations, getAllCountries, getStatesForCountry } from '../data/destinations';

const LandingPage = () => {
    const navigate = useNavigate();
    const [destination, setDestination] = useState('');
    const [originCity, setOriginCity] = useState('');
    const [isListening, setIsListening] = useState(false);
    const [mounted, setMounted] = useState(false);
    const [showDestinationDropdown, setShowDestinationDropdown] = useState(false);
    const [showOriginDropdown, setShowOriginDropdown] = useState(false);
    const [searchResults, setSearchResults] = useState([]);
    const [originResults, setOriginResults] = useState([]);
    const [selectedCountry, setSelectedCountry] = useState(null);
    const [showCountryPicker, setShowCountryPicker] = useState(false);

    const destinationRef = useRef(null);
    const originRef = useRef(null);

    useEffect(() => {
        setMounted(true);
    }, []);

    // Handle destination search
    useEffect(() => {
        if (destination.length >= 2) {
            const results = searchDestinations(destination);
            setSearchResults(results);
            setShowDestinationDropdown(results.length > 0);
        } else {
            setSearchResults([]);
            setShowDestinationDropdown(false);
        }
    }, [destination]);

    // Handle origin search
    useEffect(() => {
        if (originCity.length >= 2) {
            const results = searchDestinations(originCity);
            setOriginResults(results);
            setShowOriginDropdown(results.length > 0);
        } else {
            setOriginResults([]);
            setShowOriginDropdown(false);
        }
    }, [originCity]);

    // Close dropdowns on outside click
    useEffect(() => {
        const handleClickOutside = (e) => {
            if (destinationRef.current && !destinationRef.current.contains(e.target)) {
                setShowDestinationDropdown(false);
            }
            if (originRef.current && !originRef.current.contains(e.target)) {
                setShowOriginDropdown(false);
            }
        };
        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);

    // Voice recognition
    const handleVoiceSearch = () => {
        if ('webkitSpeechRecognition' in window || 'SpeechRecognition' in window) {
            const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
            const recognition = new SpeechRecognition();

            recognition.lang = 'en-US';
            recognition.continuous = false;
            recognition.interimResults = false;

            recognition.onstart = () => setIsListening(true);
            recognition.onend = () => setIsListening(false);

            recognition.onresult = (event) => {
                const transcript = event.results[0][0].transcript;
                setDestination(transcript);
            };

            recognition.onerror = () => setIsListening(false);

            recognition.start();
        } else {
            alert('Voice recognition is not supported in your browser.');
        }
    };

    const handleStartPlanning = () => {
        navigate('/plan', {
            state: {
                initialDestination: destination,
                initialOrigin: originCity
            }
        });
    };

    const selectDestination = (result) => {
        setDestination(result.fullName);
        setShowDestinationDropdown(false);
    };

    const selectOrigin = (result) => {
        setOriginCity(result.fullName);
        setShowOriginDropdown(false);
    };

    const countries = getAllCountries();

    // Featured destinations - mix of international and domestic
    const featuredDestinations = [
        { name: 'Dubai', country: 'UAE', flag: '🇦🇪', tag: 'Luxury', type: 'international' },
        { name: 'Goa', country: 'India', flag: '🇮🇳', tag: 'Beaches', type: 'domestic' },
        { name: 'Paris', country: 'France', flag: '🇫🇷', tag: 'Romance', type: 'international' },
        { name: 'Jaipur', country: 'India', flag: '🇮🇳', tag: 'Heritage', type: 'domestic' },
        { name: 'Bali', country: 'Indonesia', flag: '🇮🇩', tag: 'Paradise', type: 'international' },
        { name: 'Kerala', country: 'India', flag: '🇮🇳', tag: 'Backwaters', type: 'domestic' },
    ];

    const features = [
        {
            icon: <Calendar className="w-6 h-6" />,
            title: 'Smart Itineraries',
            description: 'Day-by-day plans with realistic timing and local recommendations.'
        },
        {
            icon: <Shield className="w-6 h-6" />,
            title: 'Global Coverage',
            description: '30+ countries with states, cities, and domestic travel options.'
        },
        {
            icon: <Zap className="w-6 h-6" />,
            title: 'Instant Planning',
            description: 'Get complete travel plans in seconds with smart recommendations.'
        }
    ];

    return (
        <div className="min-h-screen gradient-bg relative overflow-hidden">
            {/* Animated Background Elements */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-br from-indigo-500/20 to-purple-600/10 rounded-full blur-3xl animate-float" />
                <div className="absolute bottom-40 right-10 w-96 h-96 bg-gradient-to-tr from-teal-500/15 to-cyan-500/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '1.5s' }} />
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-r from-indigo-500/5 to-teal-500/5 rounded-full blur-3xl" />
            </div>

            {/* Content */}
            <div className="relative z-10">
                {/* Navigation */}
                <nav className="flex items-center justify-between px-8 py-6 md:px-16 lg:px-24">
                    <div className="flex items-center gap-3">
                        <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-indigo-500/10 to-purple-600/10 flex items-center justify-center animate-glow border border-white/10 overflow-hidden">
                            <img src="/logo.png" alt="Nexus Logo" className="w-10 h-10 object-cover mix-blend-screen scale-125" />
                        </div>
                        <span className="text-2xl font-bold bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">
                            Nexus
                        </span>
                    </div>
                    <div className="hidden md:flex items-center gap-8 text-sm text-slate-400">
                        <button
                            onClick={() => setShowCountryPicker(true)}
                            className="hover:text-white transition-colors flex items-center gap-1"
                        >
                            Browse Countries
                            <ChevronDown className="w-4 h-4" />
                        </button>
                        <a href="#" className="hover:text-white transition-colors">About</a>
                    </div>
                </nav>

                {/* Hero Section */}
                <main className="px-8 md:px-16 lg:px-24 pt-12 md:pt-20 pb-20">
                    <div className={`max-w-5xl mx-auto text-center transition-all duration-1000 ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>

                        {/* Badge */}
                        <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-indigo-500/10 border border-indigo-500/20 mb-8">
                            <Sparkles className="w-4 h-4 text-indigo-400" />
                            <span className="text-sm text-indigo-300 font-medium">30+ Countries • Domestic & International</span>
                        </div>

                        {/* Headline */}
                        <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight tracking-tight">
                            Plan Smarter.
                            <br />
                            <span className="bg-gradient-to-r from-indigo-400 via-purple-400 to-teal-400 bg-clip-text text-transparent">
                                Travel Better.
                            </span>
                        </h1>

                        {/* Tagline */}
                        <p className="text-xl md:text-2xl text-slate-400 mb-12 max-w-3xl mx-auto leading-relaxed">
                            The central connecting point for all your travel needs
                        </p>

                        {/* Search Box */}
                        <div className="glass-card p-4 max-w-3xl mx-auto mb-8">
                            <div className="grid md:grid-cols-2 gap-4 mb-4">
                                {/* Origin Input */}
                                <div ref={originRef} className="relative">
                                    <div className="flex items-center gap-3 px-4 py-3 bg-slate-800/50 rounded-xl border border-slate-700/50">
                                        <Plane className="w-5 h-5 text-teal-400 rotate-45" />
                                        <input
                                            type="text"
                                            value={originCity}
                                            onChange={(e) => setOriginCity(e.target.value)}
                                            placeholder="Traveling from..."
                                            className="flex-1 bg-transparent outline-none text-white placeholder:text-slate-500"
                                        />
                                        {originCity && (
                                            <button onClick={() => setOriginCity('')} className="text-slate-500 hover:text-white">
                                                <X className="w-4 h-4" />
                                            </button>
                                        )}
                                    </div>

                                    {/* Origin Dropdown */}
                                    {showOriginDropdown && (
                                        <div className="absolute top-full left-0 right-0 mt-2 bg-slate-800 border border-slate-700 rounded-xl shadow-xl z-50 max-h-64 overflow-y-auto">
                                            {originResults.map((result, idx) => (
                                                <button
                                                    key={idx}
                                                    onClick={() => selectOrigin(result)}
                                                    className="w-full px-4 py-3 flex items-center gap-3 hover:bg-slate-700/50 text-left transition-colors"
                                                >
                                                    <span className="text-xl">{result.flag}</span>
                                                    <div>
                                                        <div className="text-white font-medium">{result.city}</div>
                                                        <div className="text-sm text-slate-400">{result.state}, {result.country}</div>
                                                    </div>
                                                    <span className="ml-auto text-xs text-indigo-400">{result.tag}</span>
                                                </button>
                                            ))}
                                        </div>
                                    )}
                                </div>

                                {/* Destination Input */}
                                <div ref={destinationRef} className="relative">
                                    <div className="flex items-center gap-3 px-4 py-3 bg-slate-800/50 rounded-xl border border-slate-700/50">
                                        <MapPin className="w-5 h-5 text-indigo-400" />
                                        <input
                                            type="text"
                                            value={destination}
                                            onChange={(e) => setDestination(e.target.value)}
                                            placeholder="Going to..."
                                            className="flex-1 bg-transparent outline-none text-white placeholder:text-slate-500"
                                        />
                                        {destination && (
                                            <button onClick={() => setDestination('')} className="text-slate-500 hover:text-white">
                                                <X className="w-4 h-4" />
                                            </button>
                                        )}
                                    </div>

                                    {/* Destination Dropdown */}
                                    {showDestinationDropdown && (
                                        <div className="absolute top-full left-0 right-0 mt-2 bg-slate-800 border border-slate-700 rounded-xl shadow-xl z-50 max-h-64 overflow-y-auto">
                                            {searchResults.map((result, idx) => (
                                                <button
                                                    key={idx}
                                                    onClick={() => selectDestination(result)}
                                                    className="w-full px-4 py-3 flex items-center gap-3 hover:bg-slate-700/50 text-left transition-colors"
                                                >
                                                    <span className="text-xl">{result.flag}</span>
                                                    <div>
                                                        <div className="text-white font-medium">{result.city}</div>
                                                        <div className="text-sm text-slate-400">{result.state}, {result.country}</div>
                                                    </div>
                                                    <span className="ml-auto text-xs text-indigo-400">{result.tag}</span>
                                                </button>
                                            ))}
                                        </div>
                                    )}
                                </div>
                            </div>

                            {/* Action Buttons */}
                            <div className="flex items-center gap-3">
                                <button
                                    onClick={handleVoiceSearch}
                                    className={`btn btn-icon ${isListening ? 'bg-red-500/20 text-red-400 border border-red-500/30' : 'bg-slate-700/50 text-slate-400 hover:text-white hover:bg-slate-600/50'}`}
                                    title="Voice search"
                                >
                                    {isListening ? <MicOff className="w-5 h-5" /> : <Mic className="w-5 h-5" />}
                                </button>
                                <button
                                    onClick={handleStartPlanning}
                                    className="btn btn-primary flex-1 text-base"
                                >
                                    <Search className="w-5 h-5" />
                                    Start Planning
                                </button>
                            </div>
                        </div>

                        {/* Featured Destinations */}
                        <div className={`transition-all duration-1000 delay-300 ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                            <div className="flex items-center justify-center gap-4 mb-6">
                                <span className="text-sm text-slate-500 uppercase tracking-wider">Popular</span>
                                <div className="flex gap-2">
                                    <span className="text-xs px-2 py-1 rounded-full bg-indigo-500/20 text-indigo-300 border border-indigo-500/30">International</span>
                                    <span className="text-xs px-2 py-1 rounded-full bg-teal-500/20 text-teal-300 border border-teal-500/30">Domestic</span>
                                </div>
                            </div>
                            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3 max-w-5xl mx-auto">
                                {featuredDestinations.map((dest, index) => (
                                    <button
                                        key={dest.name}
                                        onClick={() => {
                                            setDestination(`${dest.name}, ${dest.country}`);
                                        }}
                                        className={`group p-4 rounded-2xl border transition-all duration-300 hover:-translate-y-1 ${dest.type === 'domestic'
                                            ? 'bg-teal-500/5 border-teal-500/20 hover:border-teal-500/50 hover:bg-teal-500/10'
                                            : 'bg-slate-800/30 border-slate-700/50 hover:border-indigo-500/50 hover:bg-slate-800/50'
                                            }`}
                                        style={{ animationDelay: `${index * 100}ms` }}
                                    >
                                        <div className="text-2xl mb-2">{dest.flag}</div>
                                        <div className="text-sm font-medium text-white group-hover:text-indigo-300 transition-colors">
                                            {dest.name}
                                        </div>
                                        <div className="text-xs text-slate-500 mt-1">{dest.tag}</div>
                                    </button>
                                ))}
                            </div>
                        </div>
                    </div>
                </main>

                {/* Features Section */}
                <section className={`px-8 md:px-16 lg:px-24 py-24 transition-all duration-1000 delay-500 ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                    <div className="max-w-6xl mx-auto">
                        <div className="text-center mb-16">
                            <h2 className="text-4xl font-bold text-white mb-6">
                                Everything You Need
                            </h2>
                            <p className="text-slate-400 max-w-xl mx-auto text-lg">
                                Travel anywhere — across countries or within your own.
                            </p>
                        </div>

                        <div className="grid md:grid-cols-3 gap-8">
                            {features.map((feature, index) => (
                                <div
                                    key={feature.title}
                                    className="group p-8 rounded-3xl bg-slate-800/20 border border-slate-700/50 hover:border-indigo-500/30 hover:bg-slate-800/40 transition-all duration-300"
                                >
                                    <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-indigo-500 to-purple-600 text-white flex items-center justify-center mb-6 group-hover:scale-110 transition-transform shadow-lg shadow-indigo-500/25">
                                        {feature.icon}
                                    </div>
                                    <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
                                    <p className="text-slate-400 leading-relaxed">{feature.description}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* CTA Section */}
                <section className="px-8 md:px-16 lg:px-24 py-20">
                    <div className="max-w-4xl mx-auto">
                        <div className="glass-card p-12 md:p-16 text-center relative overflow-hidden">
                            <div className="absolute inset-0 bg-gradient-to-r from-indigo-500/10 to-teal-500/10" />
                            <div className="relative z-10">
                                <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                                    Ready to Start Your Journey?
                                </h2>
                                <p className="text-slate-400 mb-10 max-w-lg mx-auto text-lg">
                                    Whether it's a weekend getaway or an international adventure.
                                </p>
                                <button
                                    onClick={handleStartPlanning}
                                    className="btn btn-primary text-lg px-10 py-5"
                                >
                                    Start Planning Now
                                    <ChevronRight className="w-5 h-5" />
                                </button>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Footer */}
                <footer className="px-8 md:px-16 lg:px-24 py-10 border-t border-slate-800">
                    <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
                        <div className="flex items-center gap-3">
                            <Compass className="w-6 h-6 text-indigo-400" />
                            <span className="text-slate-400">Nexus TravelBuddy</span>
                        </div>
                        <p className="text-sm text-slate-500">
                            © 2026 Nexus. Your calm travel companion.
                        </p>
                    </div>
                </footer>
            </div>

            {/* Country Picker Modal */}
            {showCountryPicker && (
                <div className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4">
                    <div className="bg-slate-800 border border-slate-700 rounded-2xl max-w-4xl w-full max-h-[80vh] overflow-hidden">
                        <div className="p-6 border-b border-slate-700 flex items-center justify-between">
                            <h3 className="text-xl font-semibold text-white">Browse All Countries</h3>
                            <button
                                onClick={() => setShowCountryPicker(false)}
                                className="text-slate-400 hover:text-white"
                            >
                                <X className="w-6 h-6" />
                            </button>
                        </div>
                        <div className="p-6 overflow-y-auto max-h-[60vh]">
                            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
                                {countries.map((country) => (
                                    <button
                                        key={country.code}
                                        onClick={() => {
                                            setShowCountryPicker(false);
                                            setDestination(country.name);
                                        }}
                                        className="p-4 rounded-xl bg-slate-700/50 border border-slate-600/50 hover:border-indigo-500/50 hover:bg-slate-700 transition-all text-left"
                                    >
                                        <div className="text-2xl mb-2">{country.flag}</div>
                                        <div className="text-sm font-medium text-white">{country.name}</div>
                                        <div className="text-xs text-slate-400 mt-1">{country.currency}</div>
                                    </button>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default LandingPage;
