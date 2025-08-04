# Portfolio Website

Welcome to the Portfolio Website project! This project is built using Next.js, Tailwind CSS, and TypeScript, featuring a sleek black and orange color scheme and advanced design elements, including glassmorphism effects for buttons.

## Features

- Over 30 tools and features showcased
- Responsive design with a modern aesthetic
- Dynamic routing for tool details
- Glassmorphism effects for buttons
- Easy navigation with a Navbar and Footer
- Customizable components using shadcn/ui

## Getting Started

To get started with the project, follow these steps:

1. **Clone the repository:**
   ```bash
   git clone <repository-url>
   cd portfolio-website
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Run the development server:**
   ```bash
   npm run dev
   ```

4. **Open your browser and navigate to:**
   ```
   http://localhost:3000
   ```

## Project Structure

The project is organized as follows:

```
portfolio-website
├── src
│   ├── app
│   │   ├── layout.tsx        # Main layout of the application
│   │   ├── page.tsx          # Homepage of the portfolio
│   │   └── tools
│   │       ├── index.tsx     # List of tools
│   │       └── [tool].tsx     # Dynamic route for tool details
│   ├── components
│   │   ├── Navbar.tsx        # Navigation component
│   │   ├── Footer.tsx        # Footer component
│   │   ├── GlassButton.tsx    # Button with glassmorphism effect
│   │   ├── ToolCard.tsx      # Component for displaying individual tools
│   │   └── FeatureList.tsx    # Component for showcasing features
│   ├── styles
│   │   └── globals.css       # Global styles
│   └── utils
│       └── index.ts          # Utility functions
├── public
│   └── favicon.ico           # Favicon for the website
├── package.json              # NPM configuration file
├── tailwind.config.js        # Tailwind CSS configuration
├── tsconfig.json             # TypeScript configuration
├── next.config.js            # Next.js configuration
└── README.md                 # Project documentation
```

## Contributing

Contributions are welcome! If you have suggestions for improvements or new features, feel free to open an issue or submit a pull request.

## License

This project is open-source and available under the [MIT License](LICENSE).