import React from 'react';
import { MotionDiv } from './components/ui/MotionDiv';
import { MotionA } from './components/ui/MotionA';
import { MotionImg } from './components/ui/MotionImg';

const testimonials = [
  {
    name: 'Alex Johnson',
    role: 'Designer',
    text: 'Flexfolio made building my portfolio effortless and fun. The drag-and-drop builder is a game changer!',
    avatar: 'https://randomuser.me/api/portraits/men/32.jpg',
  },
  {
    name: 'Maria Lee',
    role: 'Developer',
    text: 'I launched my portfolio in minutes. The templates are stunning and easy to customize.',
    avatar: 'https://randomuser.me/api/portraits/women/44.jpg',
  },
  {
    name: 'Chris Evans',
    role: 'Photographer',
    text: 'The one-click deploy feature is amazing. My work is online instantly!',
    avatar: 'https://randomuser.me/api/portraits/men/65.jpg',
  },
];

const logos = [
  '/logo1.svg',
  '/logo2.svg',
  '/logo3.svg',
  '/logo4.svg',
];

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-background">
      {/* Hero Section */}
      <section className="flex flex-col items-center justify-center flex-1 px-4 pt-16 pb-8 bg-gradient-to-b from-background to-muted">
        <MotionDiv
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="max-w-4xl w-full text-center space-y-6"
        >
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight">
            <span className="block">Flexfolio</span>
            <span className="block text-primary mt-2">Drag & Drop Portfolio Builder</span>
          </h1>
          <p className="mt-3 text-base text-muted-foreground sm:text-lg md:text-xl">
            Create beautiful portfolios in minutes with our drag-and-drop builder. No coding required.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row justify-center gap-4">
            <MotionA
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.97 }}
              href="/builder"
              className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-primary hover:bg-primary/90 shadow-lg transition-all"
            >
              Get Started
            </MotionA>
            <MotionA
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.97 }}
              href="/templates"
              className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-primary bg-secondary hover:bg-secondary/90 shadow-lg transition-all"
            >
              View Templates
            </MotionA>
          </div>
        </MotionDiv>
        {/* Portfolio Preview Mockup */}
        <MotionDiv
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.3, duration: 0.7 }}
          className="mt-12 w-full flex justify-center"
        >
          <div className="relative w-full max-w-2xl h-64 bg-card rounded-xl shadow-2xl overflow-hidden border border-border flex items-center justify-center">
            {/* Replace this with a real animated preview later */}
            <span className="text-muted-foreground text-lg">[ Portfolio Preview Animation Here ]</span>
          </div>
        </MotionDiv>
      </section>

      {/* Trusted By Section */}
      <section className="py-8 bg-background">
        <div className="max-w-4xl mx-auto flex flex-col items-center">
          <span className="uppercase text-xs text-muted-foreground tracking-widest mb-4">Trusted by creators at</span>
          <div className="flex flex-wrap justify-center gap-8">
            {logos.map((logo, i) => (
              <MotionImg
                key={i}
                src={logo}
                alt="Logo"
                className="h-8 w-auto grayscale hover:grayscale-0 transition-all duration-300"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 * i, duration: 0.5 }}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-muted">
        <div className="max-w-5xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Feature 1 */}
            <MotionDiv
              whileHover={{ y: -8, scale: 1.03, boxShadow: '0 8px 32px rgba(0,0,0,0.08)' }}
              className="flex flex-col items-center p-8 bg-card rounded-lg shadow-sm transition-all cursor-pointer"
            >
              <div className="p-3 rounded-full bg-primary/10 text-primary mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z" />
                </svg>
              </div>
              <h3 className="mt-2 text-lg font-semibold">Drag & Drop</h3>
              <p className="mt-2 text-sm text-muted-foreground text-center">
                Easily arrange your portfolio sections with our intuitive drag-and-drop interface.
              </p>
            </MotionDiv>
            {/* Feature 2 */}
            <MotionDiv
              whileHover={{ y: -8, scale: 1.03, boxShadow: '0 8px 32px rgba(0,0,0,0.08)' }}
              className="flex flex-col items-center p-8 bg-card rounded-lg shadow-sm transition-all cursor-pointer"
            >
              <div className="p-3 rounded-full bg-primary/10 text-primary mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
                </svg>
              </div>
              <h3 className="mt-2 text-lg font-semibold">Beautiful Templates</h3>
              <p className="mt-2 text-sm text-muted-foreground text-center">
                Choose from a variety of professionally designed templates to showcase your work.
              </p>
            </MotionDiv>
            {/* Feature 3 */}
            <MotionDiv
              whileHover={{ y: -8, scale: 1.03, boxShadow: '0 8px 32px rgba(0,0,0,0.08)' }}
              className="flex flex-col items-center p-8 bg-card rounded-lg shadow-sm transition-all cursor-pointer"
            >
              <div className="p-3 rounded-full bg-primary/10 text-primary mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="mt-2 text-lg font-semibold">One-Click Deploy</h3>
              <p className="mt-2 text-sm text-muted-foreground text-center">
                Publish your portfolio to the web with a single click using Vercel.
              </p>
            </MotionDiv>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 bg-background">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-2xl font-bold text-center mb-10">What our users say</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((t, i) => (
              <MotionDiv
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 * i, duration: 0.6 }}
                className="bg-card rounded-lg p-6 shadow-md flex flex-col items-center hover:shadow-xl transition-all"
              >
                <img src={t.avatar} alt={t.name} className="w-14 h-14 rounded-full mb-4 border-2 border-primary" />
                <p className="text-muted-foreground text-center mb-3">"{t.text}"</p>
                <span className="font-semibold text-foreground">{t.name}</span>
                <span className="text-xs text-muted-foreground">{t.role}</span>
              </MotionDiv>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
} 