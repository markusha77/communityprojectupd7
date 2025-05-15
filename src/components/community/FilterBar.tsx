import React, { useState } from 'react'
import { Filter, ChevronDown } from 'lucide-react'

export const FilterBar: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState('all')
  
  return (
    <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-8 space-y-4 sm:space-y-0">
      <div>
        <h2 className="text-2xl font-bold text-gray-900" id="projects">Community Projects</h2>
        <p className="text-gray-600">Discover what others are building</p>
      </div>
      
      <div className="flex flex-wrap gap-2">
        <button 
          className={`px-4 py-2 rounded-full text-sm font-medium ${
            activeFilter === 'all' 
              ? 'bg-indigo-100 text-indigo-800' 
              : 'bg-gray-100 text-gray-800 hover:bg-gray-200'
          }`}
          onClick={() => setActiveFilter('all')}
        >
          All Projects
        </button>
        
        <button 
          className={`px-4 py-2 rounded-full text-sm font-medium ${
            activeFilter === 'trending' 
              ? 'bg-indigo-100 text-indigo-800' 
              : 'bg-gray-100 text-gray-800 hover:bg-gray-200'
          }`}
          onClick={() => setActiveFilter('trending')}
        >
          Trending
        </button>
        
        <button 
          className={`px-4 py-2 rounded-full text-sm font-medium ${
            activeFilter === 'new' 
              ? 'bg-indigo-100 text-indigo-800' 
              : 'bg-gray-100 text-gray-800 hover:bg-gray-200'
          }`}
          onClick={() => setActiveFilter('new')}
        >
          Newest
        </button>
        
        <div className="relative inline-block text-left">
          <button 
            className="px-4 py-2 rounded-full text-sm font-medium bg-gray-100 text-gray-800 hover:bg-gray-200 flex items-center"
          >
            <Filter className="h-4 w-4 mr-1" />
            More Filters
            <ChevronDown className="h-4 w-4 ml-1" />
          </button>
        </div>
      </div>
    </div>
  )
}
