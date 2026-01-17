import React, { useState, useEffect } from 'react';
import { Sparkles, X, MessageSquare, ChevronRight, CheckCircle2 } from 'lucide-react';

const NexusAssistant = ({ progress, destination, weather }) => {
    const [isOpen, setIsOpen] = useState(false);
    const [message, setMessage] = useState('');
    const [isVisible, setIsVisible] = useState(false);

    const getRecommendation = (prog) => {
        if (prog === 0) return `Welcome! I'm Nexus. Let's start by checking your items for ${destination}.`;
        if (prog < 30) return `Good start! Don't forget to check the local laws in ${destination} - I've listed them in the Tips tab.`;
        if (prog < 60) return `You're halfway there! It's currently ${weather} in ${destination}, make sure to pack accordingly.`;
        if (prog < 90) return `Almost ready! You've completed most of your preparations. Just a few more things!`;
        if (prog === 100) return `Perfect! You're 100% prepared for your trip. Have an amazing journey! ✈️`;
        return "I'm here to help with your travel planning!";
    };

    useEffect(() => {
        setMessage(getRecommendation(progress));

        // Show assistant after a short delay
        const timer = setTimeout(() => setIsVisible(true), 1000);
        return () => clearTimeout(timer);
    }, [progress, destination, weather]);

    if (!isVisible) return null;

    return (
        <div className="fixed bottom-8 right-8 z-[100] flex flex-col items-end">
            {/* Chat Bubble */}
            {isOpen && (
                <div className="mb-4 w-72 md:w-80 glass-card animate-fade-in overflow-hidden shadow-2xl border-indigo-500/30">
                    <div className="bg-gradient-to-r from-indigo-500 to-purple-600 p-4 flex items-center justify-between">
                        <div className="flex items-center gap-2 text-white">
                            <Sparkles className="w-5 h-5 animate-pulse" />
                            <span className="font-semibold text-sm">Nexus Assistant</span>
                        </div>
                        <button
                            onClick={() => setIsOpen(false)}
                            className="text-white/80 hover:text-white transition-colors"
                        >
                            <X className="w-4 h-4" />
                        </button>
                    </div>
                    <div className="p-5">
                        <p className="text-slate-200 text-sm leading-relaxed mb-4">
                            {message}
                        </p>

                        <div className="space-y-3">
                            <div className="flex items-center justify-between text-xs text-slate-400">
                                <span>Preparation Progress</span>
                                <span>{progress}%</span>
                            </div>
                            <div className="h-1.5 w-full bg-slate-700/50 rounded-full overflow-hidden">
                                <div
                                    className="h-full bg-gradient-to-r from-indigo-500 to-teal-400 transition-all duration-1000 ease-out"
                                    style={{ width: `${progress}%` }}
                                />
                            </div>
                        </div>

                        <button
                            className="mt-6 w-full py-2.5 rounded-lg bg-slate-700/50 text-indigo-300 text-xs font-medium hover:bg-slate-700 transition-all flex items-center justify-center gap-2 group"
                            onClick={() => setIsOpen(false)}
                        >
                            Got it, thanks!
                            <ChevronRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
                        </button>
                    </div>
                </div>
            )}

            {/* Float Button */}
            <button
                onClick={() => setIsOpen(!isOpen)}
                className={`relative flex items-center justify-center w-14 h-14 md:w-16 md:h-16 rounded-full bg-gradient-to-br from-indigo-500 to-purple-600 text-white shadow-xl shadow-indigo-500/30 hover:scale-110 active:scale-95 transition-all duration-300 group ${isOpen ? 'rotate-90' : ''}`}
            >
                {isOpen ? (
                    <X className="w-6 h-6 md:w-8 md:h-8" />
                ) : (
                    <div className="relative">
                        <MessageSquare className="w-6 h-6 md:w-8 md:h-8" />
                        {progress < 100 && (
                            <span className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full border-2 border-slate-900" />
                        )}
                        {progress === 100 && (
                            <div className="absolute -top-1 -right-1 bg-green-500 rounded-full p-0.5 border-2 border-slate-900">
                                <CheckCircle2 className="w-2.5 h-2.5" />
                            </div>
                        )}
                    </div>
                )}

                {/* Visual Glow */}
                <div className="absolute inset-0 rounded-full bg-indigo-500 animate-ping opacity-20 group-hover:opacity-40" />
            </button>
        </div>
    );
};

export default NexusAssistant;
