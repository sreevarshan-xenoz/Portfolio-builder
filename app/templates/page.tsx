import React from 'react';

export default function TemplatesPage() {
  return (
    <div className="container mx-auto py-12 px-4">
      <h1 className="text-4xl font-bold mb-8 text-center">Portfolio Templates</h1>
      <p className="text-xl text-muted-foreground mb-12 text-center max-w-3xl mx-auto">
        Choose from our professionally designed templates to showcase your work in style.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {/* Dev CV Theme */}
        <div className="bg-card border border-border rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow">
          <div className="h-48 bg-gradient-to-r from-blue-500 to-purple-600 flex items-center justify-center">
            <span className="text-white text-2xl font-bold">Dev CV</span>
          </div>
          <div className="p-6">
            <h3 className="text-xl font-semibold mb-2">Dev CV Theme</h3>
            <p className="text-muted-foreground mb-4">
              Perfect for developers and software engineers. Clean, professional, and focused on your technical skills.
            </p>
            <button className="w-full py-2 bg-primary text-primary-foreground rounded-md hover:bg-primary/90 transition-colors">
              Use Template
            </button>
          </div>
        </div>

        {/* Designer Minimalist Grid */}
        <div className="bg-card border border-border rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow">
          <div className="h-48 bg-gradient-to-r from-pink-500 to-orange-500 flex items-center justify-center">
            <span className="text-white text-2xl font-bold">Minimalist Grid</span>
          </div>
          <div className="p-6">
            <h3 className="text-xl font-semibold mb-2">Designer Minimalist Grid</h3>
            <p className="text-muted-foreground mb-4">
              Ideal for designers and creatives. Showcase your work in a clean, grid-based layout with plenty of whitespace.
            </p>
            <button className="w-full py-2 bg-primary text-primary-foreground rounded-md hover:bg-primary/90 transition-colors">
              Use Template
            </button>
          </div>
        </div>

        {/* Hacker Terminal Style */}
        <div className="bg-card border border-border rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow">
          <div className="h-48 bg-gradient-to-r from-green-500 to-emerald-700 flex items-center justify-center">
            <span className="text-white text-2xl font-bold">Terminal Style</span>
          </div>
          <div className="p-6">
            <h3 className="text-xl font-semibold mb-2">Hacker Terminal Style</h3>
            <p className="text-muted-foreground mb-4">
              For the tech-savvy and security enthusiasts. A unique terminal-inspired design that stands out from the crowd.
            </p>
            <button className="w-full py-2 bg-primary text-primary-foreground rounded-md hover:bg-primary/90 transition-colors">
              Use Template
            </button>
          </div>
        </div>
      </div>

      <div className="mt-16 text-center">
        <h2 className="text-2xl font-semibold mb-4">Customize Your Template</h2>
        <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
          All templates are fully customizable. Change colors, fonts, layouts, and more to match your personal brand.
        </p>
        <button className="px-6 py-3 bg-primary text-primary-foreground rounded-md hover:bg-primary/90 transition-colors">
          Start Building Your Portfolio
        </button>
      </div>
    </div>
  );
} 