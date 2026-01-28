import React from 'react';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
    label: string;
    required?: boolean;
}

export default function Input({ label, required = false, className = '', ...props }: InputProps) {
    return (
        <div className="w-full">
            <label className="block text-xs font-bold uppercase tracking-wider text-white mb-2">
                {label} {required && <span className="text-red-500">*</span>}
            </label>
            <input
                className={`w-full bg-gray-50 text-black rounded-sm p-3 text-sm focus:outline-none focus:ring-2 focus:ring-green-500 border border-gray-200 ${className}`}
                {...props}
            />
        </div>
    );
}
