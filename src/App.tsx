import React, { useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import { OnboardingFlow } from './components/signin/OnboardingFlow'
import { Header } from './components/Header'
import { ProjectFeed } from './components/community/ProjectFeed'
import { HeroSection } from './components/community/HeroSection'
import { Navbar } from './components/community/Navbar'
import { FilterBar } from './components/community/FilterBar'
import { BottomCTA } from './components/community/BottomCTA'
import ProfileForm from './components/profile/ProfileForm'
import Welcome from './components/profile/Welcome'
import ProjectList from './components/profile/ProjectList'
import ProjectForm from './components/profile/ProjectForm'
import ProfilePreview from './components/profile/ProfilePreview'

function App() {
  const [showOnboarding, setShowOnboarding] = useState(true)
  const [isLoggedIn, setIsLoggedIn] = useState(false)

  const handleOnboardingComplete = () => {
    setShowOnboarding(false)
    setIsLoggedIn(true)
    console.log('Onboarding completed!')
  }

  const handleOnboardingCancel = () => {
    setShowOnboarding(false)
    console.log('Onboarding cancelled!')
  }

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <Routes>
        <Route path="/profile" element={
          <>
            <Header />
            <main className="flex-1 py-8">
              <ProfileForm />
            </main>
          </>
        } />
        
        <Route path="/builder" element={
          <>
            <Header />
            <main className="flex-1 py-8">
              <Welcome />
            </main>
          </>
        } />
        
        {/* Project routes */}
        <Route path="/projects" element={
          <>
            <Header />
            <main className="flex-1 py-8">
              <ProjectList />
            </main>
          </>
        } />
        
        <Route path="/projects/new" element={
          <>
            <Header />
            <main className="flex-1 py-8">
              <ProjectForm />
            </main>
          </>
        } />
        
        <Route path="/projects/edit/:projectId" element={
          <>
            <Header />
            <main className="flex-1 py-8">
              <ProjectForm />
            </main>
          </>
        } />
        
        <Route path="/preview" element={
          <>
            <Header />
            <main className="flex-1 py-8">
              <ProfilePreview />
            </main>
          </>
        } />
        
        <Route path="/" element={
          isLoggedIn ? (
            <>
              <Navbar />
              <main className="flex-1">
                <HeroSection />
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                  <FilterBar />
                  <ProjectFeed />
                </div>
                <BottomCTA />
              </main>
            </>
          ) : (
            <>
              <Header />
              <main className="flex-1 flex items-center justify-center p-4">
                {showOnboarding ? (
                  <OnboardingFlow 
                    onComplete={handleOnboardingComplete} 
                    onCancel={handleOnboardingCancel} 
                  />
                ) : (
                  <div className="text-center">
                    <h2 className="text-2xl font-bold text-gray-900 mb-4">Welcome to ChatAndBuild Community Spaces!</h2>
                    <p className="text-gray-600 mb-6 max-w-md mx-auto">
                      Join our community to connect with other builders, share your projects, and get feedback.
                    </p>
                    <button
                      onClick={() => setShowOnboarding(true)}
                      className="mt-6 px-6 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors"
                    >
                      Let's get started
                    </button>
                  </div>
                )}
              </main>
            </>
          )
        } />
      </Routes>
    </div>
  )
}

export default App
