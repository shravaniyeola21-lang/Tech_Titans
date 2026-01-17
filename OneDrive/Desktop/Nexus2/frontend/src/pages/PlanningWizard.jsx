import { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import {
    MapPin,
    Calendar,
    Users,
    Wallet,
    Heart,
    Building,
    Plane,
    Train,
    Bus,
    Car,
    Ship,
    Sparkles,
    ChevronLeft,
    ChevronRight,
    Check,
    Compass
} from 'lucide-react';

const PlanningWizard = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const [currentStep, setCurrentStep] = useState(1);
    const [animating, setAnimating] = useState(false);

    const [formData, setFormData] = useState({
        from: location.state?.initialOrigin || '',
        to: location.state?.initialDestination || '',
        startDate: '',
        endDate: '',
        budget: 'medium',
        exactBudget: '',
        travelers: 2,
        preferences: [],
        stayType: '3-star',
        transport: [],
        flightClass: 'economy'
    });

    const totalSteps = 7;

    const preferences = [
        { id: 'adventure', label: 'Adventure', icon: '🏔️' },
        { id: 'relaxation', label: 'Relaxation', icon: '🧘' },
        { id: 'shopping', label: 'Shopping', icon: '🛍️' },
        { id: 'food', label: 'Food', icon: '🍽️' },
        { id: 'culture', label: 'Culture', icon: '🏛️' },
    ];

    const stayTypes = [
        { id: 'budget', label: 'Budget Hotel', icon: '🏠', desc: 'Clean & affordable' },
        { id: '3-star', label: '3-Star Hotel', icon: '🏨', desc: 'Comfort & value' },
        { id: '5-star', label: '5-Star Hotel', icon: '🏰', desc: 'Luxury experience' },
    ];

    const transportModes = [
        { id: 'flight', label: 'Flight', icon: Plane },
        { id: 'train', label: 'Train', icon: Train },
        { id: 'bus', label: 'Bus', icon: Bus },
        { id: 'car', label: 'Car Rental', icon: Car },
        { id: 'ferry', label: 'Ferry', icon: Ship },
        { id: 'best-mix', label: 'Best Mix', icon: Sparkles },
    ];

    const budgetOptions = [
        { id: 'low', label: 'Low', desc: 'Budget-friendly', range: '₹20K - ₹50K' },
        { id: 'medium', label: 'Medium', desc: 'Balanced', range: '₹50K - ₹1.5L' },
        { id: 'luxury', label: 'Luxury', desc: 'Premium', range: '₹1.5L+' },
        { id: 'exact', label: 'Set Amount', desc: 'Custom budget', range: 'You decide' },
    ];

    const handleNext = () => {
        if (currentStep < totalSteps) {
            setAnimating(true);
            setTimeout(() => {
                setCurrentStep(currentStep + 1);
                setAnimating(false);
            }, 200);
        }
    };

    const handleBack = () => {
        if (currentStep > 1) {
            setAnimating(true);
            setTimeout(() => {
                setCurrentStep(currentStep - 1);
                setAnimating(false);
            }, 200);
        }
    };

    const handleSubmit = () => {
        navigate('/travel-plan', { state: { userInputs: formData } });
    };

    const togglePreference = (pref) => {
        setFormData(prev => ({
            ...prev,
            preferences: prev.preferences.includes(pref)
                ? prev.preferences.filter(p => p !== pref)
                : [...prev.preferences, pref]
        }));
    };

    const toggleTransport = (mode) => {
        setFormData(prev => ({
            ...prev,
            transport: prev.transport.includes(mode)
                ? prev.transport.filter(m => m !== mode)
                : [...prev.transport, mode]
        }));
    };

    const calculateDays = () => {
        if (formData.startDate && formData.endDate) {
            const start = new Date(formData.startDate);
            const end = new Date(formData.endDate);
            const days = Math.ceil((end - start) / (1000 * 60 * 60 * 24)) + 1;
            return days > 0 ? days : 0;
        }
        return 0;
    };

    const renderStep = () => {
        switch (currentStep) {
            case 1:
                return (
                    <div className="space-y-8">
                        <div className="text-center mb-10">
                            <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-indigo-500 to-purple-600 text-white mb-4 shadow-lg shadow-indigo-500/30">
                                <MapPin className="w-8 h-8" />
                            </div>
                            <h2 className="text-2xl font-bold text-white">Where to?</h2>
                            <p className="text-slate-400 mt-2">Let's start with your destination</p>
                        </div>

                        <div className="space-y-5">
                            <div>
                                <label className="block text-sm font-medium text-slate-300 mb-3">
                                    Traveling from
                                </label>
                                <input
                                    type="text"
                                    value={formData.from}
                                    onChange={(e) => setFormData({ ...formData, from: e.target.value })}
                                    placeholder="Your city (e.g., Mumbai, India)"
                                    className="w-full px-4 py-4 bg-slate-800/80 border border-slate-600 rounded-xl text-white placeholder:text-slate-500 focus:outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/20"
                                />
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-slate-300 mb-3">
                                    Destination
                                </label>
                                <input
                                    type="text"
                                    value={formData.to}
                                    onChange={(e) => setFormData({ ...formData, to: e.target.value })}
                                    placeholder="Where do you want to go?"
                                    className="w-full px-4 py-4 bg-slate-800/80 border border-slate-600 rounded-xl text-white placeholder:text-slate-500 focus:outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/20"
                                />
                            </div>
                        </div>
                    </div>
                );

            case 2:
                return (
                    <div className="space-y-8">
                        <div className="text-center mb-10">
                            <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-pink-500 to-rose-600 text-white mb-4 shadow-lg shadow-pink-500/30">
                                <Calendar className="w-8 h-8" />
                            </div>
                            <h2 className="text-2xl font-bold text-white">When?</h2>
                            <p className="text-slate-400 mt-2">Select your travel dates</p>
                        </div>

                        <div className="grid grid-cols-2 gap-5">
                            <div>
                                <label className="block text-sm font-medium text-slate-300 mb-3">
                                    Start Date
                                </label>
                                <input
                                    type="date"
                                    value={formData.startDate}
                                    onChange={(e) => setFormData({ ...formData, startDate: e.target.value })}
                                    className="w-full px-4 py-4 bg-slate-800/80 border border-slate-600 rounded-xl text-white focus:outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/20"
                                />
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-slate-300 mb-3">
                                    End Date
                                </label>
                                <input
                                    type="date"
                                    value={formData.endDate}
                                    onChange={(e) => setFormData({ ...formData, endDate: e.target.value })}
                                    className="w-full px-4 py-4 bg-slate-800/80 border border-slate-600 rounded-xl text-white focus:outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/20"
                                />
                            </div>
                        </div>

                        {calculateDays() > 0 && (
                            <div className="text-center p-5 rounded-xl bg-indigo-500/20 border border-indigo-500/30">
                                <span className="text-3xl font-bold text-indigo-400">{calculateDays()}</span>
                                <span className="text-slate-300 ml-2">days trip</span>
                            </div>
                        )}
                    </div>
                );

            case 3:
                return (
                    <div className="space-y-8">
                        <div className="text-center mb-10">
                            <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-emerald-500 to-teal-600 text-white mb-4 shadow-lg shadow-emerald-500/30">
                                <Wallet className="w-8 h-8" />
                            </div>
                            <h2 className="text-2xl font-bold text-white">Budget & Group</h2>
                            <p className="text-slate-400 mt-2">How many travelers and what's your budget?</p>
                        </div>

                        <div className="mb-8">
                            <label className="block text-sm font-medium text-slate-300 mb-4">
                                Number of Travelers
                            </label>
                            <div className="flex items-center justify-center gap-5">
                                <button
                                    onClick={() => setFormData({ ...formData, travelers: Math.max(1, formData.travelers - 1) })}
                                    className="w-12 h-12 rounded-xl bg-slate-700 hover:bg-slate-600 text-white text-xl font-bold transition-colors"
                                >
                                    -
                                </button>
                                <div className="flex items-center gap-3 px-8 py-4 rounded-xl bg-slate-800 border border-slate-600">
                                    <Users className="w-5 h-5 text-indigo-400" />
                                    <span className="text-2xl font-bold text-white">{formData.travelers}</span>
                                </div>
                                <button
                                    onClick={() => setFormData({ ...formData, travelers: formData.travelers + 1 })}
                                    className="w-12 h-12 rounded-xl bg-slate-700 hover:bg-slate-600 text-white text-xl font-bold transition-colors"
                                >
                                    +
                                </button>
                            </div>
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-slate-300 mb-4">
                                Budget Range
                            </label>
                            <div className="grid grid-cols-2 gap-4">
                                {budgetOptions.map((option) => (
                                    <button
                                        key={option.id}
                                        onClick={() => setFormData({ ...formData, budget: option.id })}
                                        className={`p-5 rounded-xl border-2 text-left transition-all ${formData.budget === option.id
                                            ? 'border-indigo-500 bg-indigo-500/20'
                                            : 'border-slate-600 bg-slate-800/50 hover:border-slate-500'
                                            }`}
                                    >
                                        <div className="font-semibold text-white">{option.label}</div>
                                        <div className="text-sm text-slate-400 mt-1">{option.desc}</div>
                                        <div className="text-xs text-indigo-400 mt-2">{option.range}</div>
                                    </button>
                                ))}
                            </div>
                        </div>

                        {formData.budget === 'exact' && (
                            <div className="animate-fade-in">
                                <label className="block text-sm font-medium text-slate-300 mb-3">
                                    Enter your budget
                                </label>
                                <input
                                    type="text"
                                    value={formData.exactBudget}
                                    onChange={(e) => setFormData({ ...formData, exactBudget: e.target.value })}
                                    placeholder="e.g., ₹75,000"
                                    className="w-full px-4 py-4 bg-slate-800/80 border border-slate-600 rounded-xl text-white placeholder:text-slate-500 focus:outline-none focus:border-indigo-500"
                                />
                            </div>
                        )}
                    </div>
                );

            case 4:
                return (
                    <div className="space-y-8">
                        <div className="text-center mb-10">
                            <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-amber-500 to-orange-600 text-white mb-4 shadow-lg shadow-amber-500/30">
                                <Heart className="w-8 h-8" />
                            </div>
                            <h2 className="text-2xl font-bold text-white">Your Interests</h2>
                            <p className="text-slate-400 mt-2">What kind of experiences do you enjoy?</p>
                        </div>

                        <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                            {preferences.map((pref) => (
                                <button
                                    key={pref.id}
                                    onClick={() => togglePreference(pref.id)}
                                    className={`p-5 rounded-xl border-2 text-center transition-all ${formData.preferences.includes(pref.id)
                                        ? 'border-indigo-500 bg-indigo-500/20'
                                        : 'border-slate-600 bg-slate-800/50 hover:border-slate-500'
                                        }`}
                                >
                                    <div className="text-4xl mb-3">{pref.icon}</div>
                                    <div className="font-medium text-white">{pref.label}</div>
                                    {formData.preferences.includes(pref.id) && (
                                        <Check className="w-5 h-5 text-indigo-400 mx-auto mt-3" />
                                    )}
                                </button>
                            ))}
                        </div>
                    </div>
                );

            case 5:
                return (
                    <div className="space-y-8">
                        <div className="text-center mb-10">
                            <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-500 to-cyan-600 text-white mb-4 shadow-lg shadow-blue-500/30">
                                <Building className="w-8 h-8" />
                            </div>
                            <h2 className="text-2xl font-bold text-white">Stay Preference</h2>
                            <p className="text-slate-400 mt-2">What type of accommodation suits you?</p>
                        </div>

                        <div className="space-y-4">
                            {stayTypes.map((type) => (
                                <button
                                    key={type.id}
                                    onClick={() => setFormData({ ...formData, stayType: type.id })}
                                    className={`w-full p-5 rounded-xl border-2 text-left transition-all flex items-center gap-5 ${formData.stayType === type.id
                                        ? 'border-indigo-500 bg-indigo-500/20'
                                        : 'border-slate-600 bg-slate-800/50 hover:border-slate-500'
                                        }`}
                                >
                                    <div className="text-4xl">{type.icon}</div>
                                    <div className="flex-1">
                                        <div className="font-semibold text-white text-lg">{type.label}</div>
                                        <div className="text-sm text-slate-400">{type.desc}</div>
                                    </div>
                                    {formData.stayType === type.id && (
                                        <Check className="w-6 h-6 text-indigo-400" />
                                    )}
                                </button>
                            ))}
                        </div>
                    </div>
                );

            case 6:
                return (
                    <div className="space-y-8">
                        <div className="text-center mb-10">
                            <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-violet-500 to-purple-600 text-white mb-4 shadow-lg shadow-violet-500/30">
                                <Plane className="w-8 h-8" />
                            </div>
                            <h2 className="text-2xl font-bold text-white">Transport</h2>
                            <p className="text-slate-400 mt-2">How would you like to travel?</p>
                        </div>

                        <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                            {transportModes.map((mode) => {
                                const Icon = mode.icon;
                                return (
                                    <button
                                        key={mode.id}
                                        onClick={() => toggleTransport(mode.id)}
                                        className={`p-5 rounded-xl border-2 text-center transition-all ${formData.transport.includes(mode.id)
                                            ? 'border-indigo-500 bg-indigo-500/20'
                                            : 'border-slate-600 bg-slate-800/50 hover:border-slate-500'
                                            }`}
                                    >
                                        <Icon className={`w-8 h-8 mx-auto mb-3 ${formData.transport.includes(mode.id) ? 'text-indigo-400' : 'text-slate-400'
                                            }`} />
                                        <div className="font-medium text-white">{mode.label}</div>
                                        {formData.transport.includes(mode.id) && (
                                            <Check className="w-5 h-5 text-indigo-400 mx-auto mt-3" />
                                        )}
                                    </button>
                                );
                            })}
                        </div>

                        {formData.transport.includes('flight') && (
                            <div className="animate-fade-in mt-8">
                                <label className="block text-sm font-medium text-slate-300 mb-4">
                                    Flight Class
                                </label>
                                <div className="flex gap-4">
                                    {['economy', 'business'].map((cls) => (
                                        <button
                                            key={cls}
                                            onClick={() => setFormData({ ...formData, flightClass: cls })}
                                            className={`flex-1 p-4 rounded-xl border-2 capitalize font-medium transition-all ${formData.flightClass === cls
                                                ? 'border-indigo-500 bg-indigo-500/20 text-white'
                                                : 'border-slate-600 bg-slate-800/50 text-slate-300 hover:border-slate-500'
                                                }`}
                                        >
                                            {cls}
                                        </button>
                                    ))}
                                </div>
                            </div>
                        )}
                    </div>
                );

            case 7:
                return (
                    <div className="space-y-8">
                        <div className="text-center mb-10">
                            <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-green-500 to-emerald-600 text-white mb-4 shadow-lg shadow-green-500/30">
                                <Check className="w-8 h-8" />
                            </div>
                            <h2 className="text-2xl font-bold text-white">Confirm Your Trip</h2>
                            <p className="text-slate-400 mt-2">Review your choices before we create your plan</p>
                        </div>

                        <div className="space-y-4">
                            <div className="p-5 rounded-xl bg-slate-800/80 border border-slate-600">
                                <div className="text-sm text-slate-400 mb-2">Route</div>
                                <div className="font-semibold text-white text-lg">
                                    {formData.from || 'Your City'} → {formData.to || 'Destination'}
                                </div>
                            </div>

                            <div className="grid grid-cols-2 gap-4">
                                <div className="p-5 rounded-xl bg-slate-800/80 border border-slate-600">
                                    <div className="text-sm text-slate-400 mb-2">Dates</div>
                                    <div className="font-semibold text-white">{calculateDays()} days</div>
                                </div>
                                <div className="p-5 rounded-xl bg-slate-800/80 border border-slate-600">
                                    <div className="text-sm text-slate-400 mb-2">Travelers</div>
                                    <div className="font-semibold text-white">
                                        {formData.travelers} {formData.travelers === 1 ? 'person' : 'people'}
                                    </div>
                                </div>
                            </div>

                            <div className="p-5 rounded-xl bg-slate-800/80 border border-slate-600">
                                <div className="text-sm text-slate-400 mb-2">Budget</div>
                                <div className="font-semibold text-white capitalize">
                                    {formData.budget === 'exact' ? formData.exactBudget || 'Custom' : formData.budget}
                                </div>
                            </div>

                            <div className="p-5 rounded-xl bg-slate-800/80 border border-slate-600">
                                <div className="text-sm text-slate-400 mb-3">Interests</div>
                                <div className="flex flex-wrap gap-2">
                                    {formData.preferences.length > 0 ? (
                                        formData.preferences.map((pref) => (
                                            <span key={pref} className="px-3 py-1.5 rounded-full bg-indigo-500/20 text-indigo-300 border border-indigo-500/30 text-sm capitalize">
                                                {pref}
                                            </span>
                                        ))
                                    ) : (
                                        <span className="text-slate-500">No specific preferences</span>
                                    )}
                                </div>
                            </div>

                            <div className="grid grid-cols-2 gap-4">
                                <div className="p-5 rounded-xl bg-slate-800/80 border border-slate-600">
                                    <div className="text-sm text-slate-400 mb-2">Stay</div>
                                    <div className="font-semibold text-white capitalize">{formData.stayType} Hotel</div>
                                </div>
                                <div className="p-5 rounded-xl bg-slate-800/80 border border-slate-600">
                                    <div className="text-sm text-slate-400 mb-2">Transport</div>
                                    <div className="font-semibold text-white capitalize">
                                        {formData.transport.length > 0 ? formData.transport.join(', ') : 'Best mix'}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                );

            default:
                return null;
        }
    };

    return (
        <div className="min-h-screen gradient-bg">
            {/* Header */}
            <header className="sticky top-0 z-50 bg-slate-900/90 backdrop-blur-md border-b border-slate-700/50">
                <div className="max-w-2xl mx-auto px-6 py-5 flex items-center justify-between">
                    <button
                        onClick={() => navigate('/')}
                        className="flex items-center gap-3 text-slate-400 hover:text-white transition-colors group"
                    >
                        <img src="/logo.png" alt="Nexus" className="w-10 h-10 object-cover mix-blend-screen scale-125" />
                        <span className="font-semibold text-lg">Nexus</span>
                    </button>

                    {/* Progress */}
                    <div className="flex items-center gap-3">
                        <span className="text-sm text-slate-400">Step {currentStep} of {totalSteps}</span>
                        <div className="flex gap-1.5">
                            {[...Array(totalSteps)].map((_, i) => (
                                <div
                                    key={i}
                                    className={`w-2.5 h-2.5 rounded-full transition-all ${i + 1 <= currentStep ? 'bg-indigo-500' : 'bg-slate-600'
                                        }`}
                                />
                            ))}
                        </div>
                    </div>
                </div>
            </header>

            {/* Content */}
            <main className="max-w-2xl mx-auto px-6 py-10">
                <div className={`bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-3xl p-8 shadow-xl transition-all duration-300 ${animating ? 'opacity-50 translate-x-4' : 'opacity-100 translate-x-0'
                    }`}>
                    {renderStep()}
                </div>

                {/* Navigation */}
                <div className="flex items-center justify-between mt-10">
                    <button
                        onClick={handleBack}
                        disabled={currentStep === 1}
                        className={`flex items-center gap-2 px-6 py-3 rounded-xl border border-slate-600 text-slate-300 font-medium transition-all ${currentStep === 1 ? 'opacity-50 cursor-not-allowed' : 'hover:bg-slate-800 hover:border-slate-500'
                            }`}
                    >
                        <ChevronLeft className="w-5 h-5" />
                        Back
                    </button>

                    {currentStep < totalSteps ? (
                        <button
                            onClick={handleNext}
                            className="flex items-center gap-2 px-8 py-3 rounded-xl bg-gradient-to-r from-indigo-500 to-purple-600 text-white font-medium shadow-lg shadow-indigo-500/30 hover:shadow-indigo-500/50 transition-all"
                        >
                            Continue
                            <ChevronRight className="w-5 h-5" />
                        </button>
                    ) : (
                        <button
                            onClick={handleSubmit}
                            className="flex items-center gap-2 px-8 py-3 rounded-xl bg-gradient-to-r from-indigo-500 to-purple-600 text-white font-medium shadow-lg shadow-indigo-500/30 hover:shadow-indigo-500/50 transition-all"
                        >
                            <Sparkles className="w-5 h-5" />
                            Generate My Trip
                        </button>
                    )}
                </div>
            </main>
        </div>
    );
};

export default PlanningWizard;
