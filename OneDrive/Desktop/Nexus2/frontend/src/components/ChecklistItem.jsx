import React from 'react';
import { Check } from 'lucide-react';

const ChecklistItem = ({ label, isChecked, onToggle, className = "" }) => {
    return (
        <label
            className={`flex items-center gap-4 p-4 rounded-2xl cursor-pointer transition-all duration-300 group relative overflow-hidden boarder border-transparent hover:border-indigo-500/20 hover:bg-slate-800/50 ${className}`}
        >
            {/* Custom Checkbox */}
            <div className="relative flex items-center justify-center shrink-0">
                <input
                    type="checkbox"
                    checked={isChecked}
                    onChange={onToggle}
                    className="peer appearance-none w-7 h-7 rounded-xl border-2 border-slate-600 bg-slate-800/80 checked:bg-gradient-to-br checked:from-indigo-500 checked:to-purple-600 checked:border-transparent transition-all duration-300 ease-out shadow-sm checked:shadow-[0_0_15px_rgba(99,102,241,0.5)]"
                />

                {/* Checked Icon */}
                <Check
                    className={`absolute w-4 h-4 text-white stroke-[3] pointer-events-none transition-all duration-300 ease-out ${isChecked
                            ? 'scale-100 opacity-100 rotate-0'
                            : 'scale-0 opacity-0 -rotate-90'
                        }`}
                />
            </div>

            <div className="flex-1 relative overflow-hidden">
                {/* Text Content */}
                <span
                    className={`text-lg transition-all duration-500 block ${isChecked
                            ? 'text-slate-500 font-medium'
                            : 'text-white font-semibold group-hover:text-indigo-200'
                        }`}
                >
                    {label}
                </span>

                {/* Animated Strike-through line */}
                <div
                    className={`absolute left-0 top-1/2 -translate-y-1/2 h-[2px] bg-gradient-to-r from-slate-500 to-slate-600 transition-all duration-500 ease-in-out pointer-events-none rounded-full ${isChecked ? 'w-full opacity-100' : 'w-0 opacity-0'
                        }`}
                />
            </div>

            {/* Subtle glow effect on the whole item when checked */}
            <div
                className={`absolute inset-0 bg-indigo-500/5 pointer-events-none transition-opacity duration-500 ${isChecked ? 'opacity-100' : 'opacity-0'
                    }`}
            />
        </label>
    );
};

export default ChecklistItem;
