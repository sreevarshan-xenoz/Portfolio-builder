import React from 'react';

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-4">
      <div className="max-w-4xl w-full space-y-8">
        <div className="text-center">
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
            <span className="block">Flexfolio</span>
            <span className="block text-primary mt-2">Drag & Drop Portfolio Builder</span>
          </h1>
          <p className="mt-3 text-base text-muted-foreground sm:mt-5 sm:text-lg md:mt-5 md:text-xl">
            Create beautiful portfolios in minutes with our drag-and-drop builder.
            No coding required.
          </p>
          <div className="mt-8 flex justify-center">
            <div className="inline-flex rounded-md shadow">
              <a
                href="/builder"
                className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-primary hover:bg-primary/90"
              >
                Get Started
              </a>
            </div>
            <div className="ml-3 inline-flex">
              <a
                href="/templates"
                className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-primary bg-secondary hover:bg-secondary/90"
              >
                View Templates
              </a>
            </div>
          </div>
        </div>

        <div className="mt-16">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            <div className="flex flex-col items-center p-6 bg-card rounded-lg shadow-sm">
              <div className="p-3 rounded-full bg-primary/10 text-primary">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z" />
                </svg>
              </div>
              <h3 className="mt-4 text-lg font-medium">Drag & Drop</h3>
              <p className="mt-2 text-sm text-muted-foreground text-center">
                Easily arrange your portfolio sections with our intuitive drag-and-drop interface.
              </p>
            </div>

            <div className="flex flex-col items-center p-6 bg-card rounded-lg shadow-sm">
              <div className="p-3 rounded-full bg-primary/10 text-primary">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
                </svg>
              </div>
              <h3 className="mt-4 text-lg font-medium">Beautiful Templates</h3>
              <p className="mt-2 text-sm text-muted-foreground text-center">
                Choose from a variety of professionally designed templates to showcase your work.
              </p>
            </div>

            <div className="flex flex-col items-center p-6 bg-card rounded-lg shadow-sm">
              <div className="p-3 rounded-full bg-primary/10 text-primary">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="mt-4 text-lg font-medium">One-Click Deploy</h3>
              <p className="mt-2 text-sm text-muted-foreground text-center">
                Publish your portfolio to the web with a single click using Vercel.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 