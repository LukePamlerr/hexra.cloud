import React from 'react';
import Link from 'next/link';

const Navbar: React.FC = () => {
    return (
        <nav className="bg-black text-orange-500 p-4 shadow-lg">
            <div className="container mx-auto flex justify-between items-center">
                <div className="text-lg font-bold">
                    <Link href="/">My Portfolio</Link>
                </div>
                <ul className="flex space-x-4">
                    <li>
                        <Link href="/tools">Tools</Link>
                    </li>
                    <li>
                        <Link href="/features">Features</Link>
                    </li>
                    <li>
                        <Link href="/about">About</Link>
                    </li>
                    <li>
                        <Link href="/contact">Contact</Link>
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;