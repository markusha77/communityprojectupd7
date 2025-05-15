import React from 'react'

export const HeroSection: React.FC = () => {
  return (
    <div className="bg-indigo-700 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-20">
        <div className="text-center">
          <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl">
            ChatAndBuild Community
          </h1>
          <p className="mt-6 max-w-2xl mx-auto text-xl">
            Discover amazing projects, connect with fellow builders, and showcase your work.
          </p>
          <div className="mt-10 flex justify-center">
            <div className="inline-flex rounded-md shadow">
              <a
                href="#projects"
                className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-indigo-700 bg-white hover:bg-gray-50"
              >
                Explore Projects
              </a>
            </div>
            <div className="ml-3 inline-flex">
              <a
                href="#create"
                className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700"
              >
                Share Your Project
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
