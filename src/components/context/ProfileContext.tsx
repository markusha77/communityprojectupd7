import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { Project } from '../../types';

interface Profile {
  name: string;
  title: string;
  bio: string;
  avatar: string;
  location: string;
  email: string;
  website: string;
  github: string;
  twitter: string;
  linkedin: string;
  skills: string[];
  projects: Project[];
}

interface ProfileContextType {
  profile: Profile | null;
  updateProfile: (profile: Profile) => void;
  addProject: (project: Project) => void;
  updateProject: (project: Project) => void;
  deleteProject: (projectId: string) => void;
}

const STORAGE_KEY = 'portfolio_profile';

// Default empty profile structure
const emptyProfile: Profile = {
  name: '',
  title: '',
  bio: '',
  avatar: '',
  location: '',
  email: '',
  website: '',
  github: '',
  twitter: '',
  linkedin: '',
  skills: [],
  projects: []
};

const ProfileContext = createContext<ProfileContextType | undefined>(undefined);

export const ProfileProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [profile, setProfile] = useState<Profile | null>(null);

  // Load profile from localStorage on initial render
  useEffect(() => {
    const savedProfile = localStorage.getItem(STORAGE_KEY);
    if (savedProfile) {
      try {
        setProfile(JSON.parse(savedProfile));
      } catch (error) {
        console.error('Failed to parse saved profile:', error);
        setProfile(emptyProfile);
      }
    } else {
      setProfile(emptyProfile);
    }
  }, []);

  const updateProfile = (newProfile: Profile) => {
    setProfile(newProfile);
    // Save to localStorage
    localStorage.setItem(STORAGE_KEY, JSON.stringify(newProfile));
  };

  const addProject = (project: Project) => {
    if (!profile) return;
    
    const updatedProfile = {
      ...profile,
      projects: [...profile.projects, project]
    };
    
    setProfile(updatedProfile);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(updatedProfile));
  };

  const updateProject = (updatedProject: Project) => {
    if (!profile) return;
    
    const updatedProjects = profile.projects.map(project => 
      project.id === updatedProject.id ? updatedProject : project
    );
    
    const updatedProfile = {
      ...profile,
      projects: updatedProjects
    };
    
    setProfile(updatedProfile);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(updatedProfile));
  };

  const deleteProject = (projectId: string) => {
    if (!profile) return;
    
    const updatedProjects = profile.projects.filter(project => project.id !== projectId);
    
    const updatedProfile = {
      ...profile,
      projects: updatedProjects
    };
    
    setProfile(updatedProfile);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(updatedProfile));
  };

  return (
    <ProfileContext.Provider value={{ 
      profile, 
      updateProfile,
      addProject,
      updateProject,
      deleteProject
    }}>
      {children}
    </ProfileContext.Provider>
  );
};

export const useProfile = (): ProfileContextType => {
  const context = useContext(ProfileContext);
  if (context === undefined) {
    throw new Error('useProfile must be used within a ProfileProvider');
  }
  return context;
};
