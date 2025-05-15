import React, { useMemo } from 'react'
import { ArrowRight, ArrowLeft, Users, Plus, Check, X } from 'lucide-react'

interface SpaceSelectionStepProps {
  selectedSpaces: string[]
  updateSpaces: (spaces: string[]) => void
  onNext: () => void
  onBack: () => void
  onCancel: () => void
}

export const SpaceSelectionStep: React.FC<SpaceSelectionStepProps> = ({ 
  selectedSpaces, 
  updateSpaces, 
  onNext, 
  onBack,
  onCancel
}) => {
  // Sample spaces data - in a real app, this would come from an API
  const allSpaces = [
    {
      id: '1',
      name: 'Frontend Developers',
      description: 'Discuss modern frontend frameworks, CSS, and UI/UX best practices',
      members: 2453,
      tags: ['Web Development', 'UI/UX Design'],
      image: 'https://images.unsplash.com/photo-1517180102446-f3ece451e9d8?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&h=300&q=80'
    },
    {
      id: '2',
      name: 'Mobile App Builders',
      description: 'Share tips and tricks for building mobile applications across platforms',
      members: 1872,
      tags: ['Mobile Apps', 'UI/UX Design'],
      image: 'https://images.unsplash.com/photo-1551650975-87deedd944c3?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&h=300&q=80'
    },
    {
      id: '3',
      name: 'AI & ML Enthusiasts',
      description: 'Explore the latest in artificial intelligence and machine learning',
      members: 3241,
      tags: ['AI & Machine Learning'],
      image: 'https://images.unsplash.com/photo-1535378917042-10a22c95931a?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&h=300&q=80'
    },
    {
      id: '4',
      name: 'Startup Founders',
      description: 'Connect with other founders to share experiences and advice',
      members: 1563,
      tags: ['Startups', 'Entrepreneurship'],
      image: 'https://images.unsplash.com/photo-1559136555-9303baea8ebd?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&h=300&q=80'
    },
    {
      id: '5',
      name: 'Content Creators',
      description: 'Tips and resources for creating engaging content across platforms',
      members: 2187,
      tags: ['Writing', 'Video Production', 'Social Media'],
      image: 'https://images.unsplash.com/photo-1533750516457-a7f992034fec?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&h=300&q=80'
    },
    {
      id: '6',
      name: 'Game Developers',
      description: 'Share your game development journey and get feedback',
      members: 1932,
      tags: ['Game Development'],
      image: 'https://images.unsplash.com/photo-1511512578047-dfb367046420?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&h=300&q=80'
    }
  ]

  const toggleSpace = (spaceId: string) => {
    const newSpaces = selectedSpaces.includes(spaceId)
      ? selectedSpaces.filter(id => id !== spaceId)
      : [...selectedSpaces, spaceId]
    
    updateSpaces(newSpaces)
  }

  return (
    <div>
      <div className="absolute top-4 right-4">
        <button 
          onClick={onCancel}
          className="text-gray-400 hover:text-gray-600 transition-colors"
          aria-label="Cancel"
        >
          <X className="h-6 w-6" />
        </button>
      </div>
      
      <h2 className="text-2xl font-bold text-gray-900 mb-2">Join Community Spaces</h2>
      <p className="text-gray-600 mb-6">
        Based on your interests, we've recommended some spaces you might enjoy. Join spaces to connect with like-minded people.
      </p>
      
      <div className="overflow-y-auto max-h-[400px] pr-2 mb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {allSpaces.map((space) => {
            const isSelected = selectedSpaces.includes(space.id)
            
            return (
              <div 
                key={space.id}
                className={`border rounded-lg overflow-hidden transition-all ${
                  isSelected ? 'border-indigo-300 ring-2 ring-indigo-100' : 'border-gray-200 hover:border-gray-300'
                }`}
              >
                <div className="h-32 overflow-hidden">
                  <img 
                    src={space.image} 
                    alt={space.name} 
                    className="w-full h-full object-cover"
                  />
                </div>
                
                <div className="p-4">
                  <h3 className="font-semibold text-gray-900 mb-1">{space.name}</h3>
                  <p className="text-gray-600 text-sm mb-3 line-clamp-2">{space.description}</p>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex items-center text-gray-500 text-sm">
                      <Users className="h-4 w-4 mr-1" />
                      <span>{space.members.toLocaleString()} members</span>
                    </div>
                    
                    <button
                      type="button"
                      onClick={() => toggleSpace(space.id)}
                      className={`flex items-center px-3 py-1 rounded-full text-sm font-medium ${
                        isSelected 
                          ? 'bg-indigo-100 text-indigo-700' 
                          : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                      }`}
                    >
                      {isSelected ? (
                        <>
                          <Check className="h-4 w-4 mr-1" />
                          Joined
                        </>
                      ) : (
                        <>
                          <Plus className="h-4 w-4 mr-1" />
                          Join
                        </>
                      )}
                    </button>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
      
      <div className="flex justify-between">
        <div className="flex space-x-2">
          <button
            type="button"
            onClick={onBack}
            className="flex items-center text-gray-600 hover:text-gray-900 font-medium py-2 px-4"
          >
            <ArrowLeft className="mr-2 h-5 w-5" />
            Back
          </button>
          
          <button
            type="button"
            onClick={onCancel}
            className="text-gray-500 hover:text-gray-700 font-medium py-2 px-4 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors"
          >
            Cancel
          </button>
        </div>
        
        <button
          type="button"
          onClick={onNext}
          className="flex items-center bg-indigo-600 hover:bg-indigo-700 text-white font-medium py-2 px-6 rounded-lg transition-colors"
        >
          Continue
          <ArrowRight className="ml-2 h-5 w-5" />
        </button>
      </div>
    </div>
  )
}
