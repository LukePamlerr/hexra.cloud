import React from 'react';

const Footer: React.FC = () => {
    return (
        <footer className="bg-black text-orange-500 py-4">
            <div className="container mx-auto text-center">
                <p>&copy; {new Date().getFullYear()} Your Name. All rights reserved.</p>
                <div className="mt-2">
                    <a href="/privacy" className="hover:underline">Privacy Policy</a>
                    <span className="mx-2">|</span>
                    <a href="/terms" className="hover:underline">Terms of Service</a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;