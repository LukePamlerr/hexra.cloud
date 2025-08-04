import React from 'react';

interface ToolCardProps {
    title: string;
    description: string;
    link: string;
}

const ToolCard: React.FC<ToolCardProps> = ({ title, description, link }) => {
    return (
        <div className="bg-black bg-opacity-50 rounded-lg p-4 shadow-lg transition-transform transform hover:scale-105">
            <h3 className="text-orange-500 text-xl font-bold">{title}</h3>
            <p className="text-white mt-2">{description}</p>
            <a href={link} className="mt-4 inline-block text-orange-500 hover:underline">
                Learn More
            </a>
        </div>
    );
};

export default ToolCard;