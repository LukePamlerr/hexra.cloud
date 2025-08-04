import React from 'react';

const GlassButton: React.FC<React.ButtonHTMLAttributes<HTMLButtonElement>> = ({ children, className, ...props }) => {
    return (
        <button
            className={`bg-black bg-opacity-30 backdrop-blur-lg border border-orange-500 text-white py-2 px-4 rounded-lg shadow-lg transition duration-300 ease-in-out hover:bg-opacity-50 ${className}`}
            {...props}
        >
            {children}
        </button>
    );
};

export default GlassButton;