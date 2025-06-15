"use client";

import React, { createContext, useContext, useState, useEffect } from 'react';

// Define the types for our portfolio data
interface AboutData {
  name: string;
  title: string;
  bio: string;
  image?: string;
}

interface Project {
  id: string;
  title: string;
  description: string;
  image?: string;
  link?: string;
  technologies?: string[];
}

interface Skill {
  id: string;
  name: string;
  level?: number;
  category?: string;
}

interface ContactInfo {
  id: string;
  type: 'email' | 'phone' | 'location' | 'website' | 'social';
  value: string;
  label?: string;
  icon?: string;
}

interface PortfolioData {
  about: AboutData;
  projects: Project[];
  skills: Skill[];
  contactInfo: ContactInfo[];
  sections: string[]; // Order of sections
  theme: 'light' | 'dark';
  template: string;
}

// Default portfolio data
const defaultPortfolioData: PortfolioData = {
  about: {
    name: 'Your Name',
    title: 'Your Title',
    bio: 'Your bio goes here...',
  },
  projects: [],
  skills: [],
  contactInfo: [],
  sections: ['about', 'projects', 'skills', 'contact'],
  theme: 'light',
  template: 'default',
};

interface PortfolioContextType {
  portfolioData: PortfolioData;
  updateAbout: (data: Partial<AboutData>) => void;
  addProject: (project: Omit<Project, 'id'>) => void;
  updateProject: (id: string, data: Partial<Project>) => void;
  removeProject: (id: string) => void;
  addSkill: (skill: Omit<Skill, 'id'>) => void;
  updateSkill: (id: string, data: Partial<Skill>) => void;
  removeSkill: (id: string) => void;
  addContactInfo: (contact: Omit<ContactInfo, 'id'>) => void;
  updateContactInfo: (id: string, data: Partial<ContactInfo>) => void;
  removeContactInfo: (id: string) => void;
  reorderSections: (newOrder: string[]) => void;
  setTheme: (theme: 'light' | 'dark') => void;
  setTemplate: (template: string) => void;
  savePortfolio: () => void;
  loadPortfolio: () => void;
}

const PortfolioContext = createContext<PortfolioContextType | undefined>(undefined);

export function PortfolioProvider({ children }: { children: React.ReactNode }) {
  const [portfolioData, setPortfolioData] = useState<PortfolioData>(defaultPortfolioData);

  // Load portfolio data from localStorage on initial render
  useEffect(() => {
    const savedData = localStorage.getItem('portfolioData');
    if (savedData) {
      try {
        setPortfolioData(JSON.parse(savedData));
      } catch (error) {
        console.error('Failed to parse saved portfolio data:', error);
      }
    }
  }, []);

  // Save portfolio data to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem('portfolioData', JSON.stringify(portfolioData));
  }, [portfolioData]);

  const updateAbout = (data: Partial<AboutData>) => {
    setPortfolioData(prev => ({
      ...prev,
      about: { ...prev.about, ...data },
    }));
  };

  const addProject = (project: Omit<Project, 'id'>) => {
    const newProject = {
      ...project,
      id: `project-${Date.now()}`,
    };
    setPortfolioData(prev => ({
      ...prev,
      projects: [...prev.projects, newProject],
    }));
  };

  const updateProject = (id: string, data: Partial<Project>) => {
    setPortfolioData(prev => ({
      ...prev,
      projects: prev.projects.map(project => 
        project.id === id ? { ...project, ...data } : project
      ),
    }));
  };

  const removeProject = (id: string) => {
    setPortfolioData(prev => ({
      ...prev,
      projects: prev.projects.filter(project => project.id !== id),
    }));
  };

  const addSkill = (skill: Omit<Skill, 'id'>) => {
    const newSkill = {
      ...skill,
      id: `skill-${Date.now()}`,
    };
    setPortfolioData(prev => ({
      ...prev,
      skills: [...prev.skills, newSkill],
    }));
  };

  const updateSkill = (id: string, data: Partial<Skill>) => {
    setPortfolioData(prev => ({
      ...prev,
      skills: prev.skills.map(skill => 
        skill.id === id ? { ...skill, ...data } : skill
      ),
    }));
  };

  const removeSkill = (id: string) => {
    setPortfolioData(prev => ({
      ...prev,
      skills: prev.skills.filter(skill => skill.id !== id),
    }));
  };

  const addContactInfo = (contact: Omit<ContactInfo, 'id'>) => {
    const newContact = {
      ...contact,
      id: `contact-${Date.now()}`,
    };
    setPortfolioData(prev => ({
      ...prev,
      contactInfo: [...prev.contactInfo, newContact],
    }));
  };

  const updateContactInfo = (id: string, data: Partial<ContactInfo>) => {
    setPortfolioData(prev => ({
      ...prev,
      contactInfo: prev.contactInfo.map(contact => 
        contact.id === id ? { ...contact, ...data } : contact
      ),
    }));
  };

  const removeContactInfo = (id: string) => {
    setPortfolioData(prev => ({
      ...prev,
      contactInfo: prev.contactInfo.filter(contact => contact.id !== id),
    }));
  };

  const reorderSections = (newOrder: string[]) => {
    setPortfolioData(prev => ({
      ...prev,
      sections: newOrder,
    }));
  };

  const setTheme = (theme: 'light' | 'dark') => {
    setPortfolioData(prev => ({
      ...prev,
      theme,
    }));
  };

  const setTemplate = (template: string) => {
    setPortfolioData(prev => ({
      ...prev,
      template,
    }));
  };

  const savePortfolio = () => {
    localStorage.setItem('portfolioData', JSON.stringify(portfolioData));
  };

  const loadPortfolio = () => {
    const savedData = localStorage.getItem('portfolioData');
    if (savedData) {
      try {
        setPortfolioData(JSON.parse(savedData));
      } catch (error) {
        console.error('Failed to parse saved portfolio data:', error);
      }
    }
  };

  return (
    <PortfolioContext.Provider
      value={{
        portfolioData,
        updateAbout,
        addProject,
        updateProject,
        removeProject,
        addSkill,
        updateSkill,
        removeSkill,
        addContactInfo,
        updateContactInfo,
        removeContactInfo,
        reorderSections,
        setTheme,
        setTemplate,
        savePortfolio,
        loadPortfolio,
      }}
    >
      {children}
    </PortfolioContext.Provider>
  );
}

export function usePortfolio() {
  const context = useContext(PortfolioContext);
  if (context === undefined) {
    throw new Error('usePortfolio must be used within a PortfolioProvider');
  }
  return context;
} 