import React from 'react';

const features = [
  { id: 1, title: 'Responsive Design', description: 'The website adapts to various screen sizes seamlessly.' },
  { id: 2, title: 'Dark Mode', description: 'A sleek dark mode for a modern look.' },
  { id: 3, title: 'Glassmorphism Buttons', description: 'Stylish buttons with glassmorphism effects.' },
  { id: 4, title: 'Dynamic Tool Pages', description: 'Each tool has its own detailed page.' },
  { id: 5, title: 'SEO Optimized', description: 'Built with SEO best practices in mind.' },
  { id: 6, title: 'Fast Loading Times', description: 'Optimized for speed and performance.' },
  { id: 7, title: 'Accessibility Features', description: 'Designed to be accessible for all users.' },
  { id: 8, title: 'Custom Animations', description: 'Smooth animations for a better user experience.' },
  { id: 9, title: 'Multi-language Support', description: 'Supports multiple languages for wider reach.' },
  { id: 10, title: 'Contact Form', description: 'Easy to use contact form for inquiries.' },
  { id: 11, title: 'Blog Section', description: 'A section for sharing articles and updates.' },
  { id: 12, title: 'Portfolio Showcase', description: 'Displays projects and tools effectively.' },
  { id: 13, title: 'User Authentication', description: 'Secure login and registration system.' },
  { id: 14, title: 'Social Media Integration', description: 'Links to social media profiles.' },
  { id: 15, title: 'Newsletter Subscription', description: 'Option to subscribe for updates.' },
  { id: 16, title: 'Search Functionality', description: 'Easily search through tools and features.' },
  { id: 17, title: 'Testimonials', description: 'Showcase user feedback and testimonials.' },
  { id: 18, title: 'Analytics Integration', description: 'Track user interactions and performance.' },
  { id: 19, title: 'Image Gallery', description: 'A gallery to showcase images and projects.' },
  { id: 20, title: 'Video Embedding', description: 'Embed videos for tutorials and demos.' },
  { id: 21, title: 'Custom Icons', description: 'Unique icons for a personalized touch.' },
  { id: 22, title: 'Event Calendar', description: 'Display upcoming events and workshops.' },
  { id: 23, title: 'FAQ Section', description: 'Frequently asked questions for user assistance.' },
  { id: 24, title: 'API Integration', description: 'Connect with external APIs for enhanced features.' },
  { id: 25, title: 'Code Snippets', description: 'Share useful code snippets with users.' },
  { id: 26, title: 'Downloadable Resources', description: 'Provide resources for users to download.' },
  { id: 27, title: 'Custom 404 Page', description: 'A user-friendly 404 error page.' },
  { id: 28, title: 'Lightweight Framework', description: 'Built with performance in mind using Next.js.' },
  { id: 29, title: 'Tailwind CSS Styling', description: 'Utilizes Tailwind CSS for modern styling.' },
  { id: 30, title: 'Open Source', description: 'The project is open-sourced for community contributions.' },
];

const FeatureList: React.FC = () => {
  return (
    <div className="bg-black text-orange-500 p-6 rounded-lg shadow-lg">
      <h2 className="text-2xl font-bold mb-4">Features</h2>
      <ul className="space-y-4">
        {features.map(feature => (
          <li key={feature.id} className="p-4 bg-opacity-30 backdrop-blur-md rounded-lg">
            <h3 className="text-xl font-semibold">{feature.title}</h3>
            <p>{feature.description}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FeatureList;