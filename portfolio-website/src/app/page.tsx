import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import FeatureList from '../components/FeatureList';
import Tools from './tools';

const HomePage: React.FC = () => {
    return (
        <div className="bg-black text-orange-500 min-h-screen flex flex-col">
            <Navbar />
            <main className="flex-grow p-4">
                <h1 className="text-4xl font-bold mb-6">Welcome to My Portfolio</h1>
                <p className="mb-4">Here are some of the tools and features I've worked with:</p>
                <Tools />
                <FeatureList />
            </main>
            <Footer />
        </div>
    );
};

export default HomePage;