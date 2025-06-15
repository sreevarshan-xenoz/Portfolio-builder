import React from 'react';

interface AboutSectionProps {
  name?: string;
  title?: string;
  bio?: string;
  image?: string;
}

export function AboutSection({ name = 'Your Name', title = 'Your Title', bio = 'Your bio goes here...', image }: AboutSectionProps) {
  return (
    <div className="bg-card border border-border rounded-lg p-6 mb-4">
      <div className="flex flex-col md:flex-row gap-6">
        {image && (
          <div className="w-32 h-32 rounded-full overflow-hidden flex-shrink-0">
            <img src={image} alt={name} className="w-full h-full object-cover" />
          </div>
        )}
        <div>
          <h2 className="text-2xl font-bold mb-2">{name}</h2>
          <h3 className="text-lg text-muted-foreground mb-4">{title}</h3>
          <p className="text-muted-foreground">{bio}</p>
        </div>
      </div>
    </div>
  );
} 