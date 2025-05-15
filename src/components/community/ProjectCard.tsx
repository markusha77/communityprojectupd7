import React from 'react'
import { Heart, MessageSquare, Share2 } from 'lucide-react'

interface ProjectCardProps {
  project: {
    id: string
    title: string
    description: string
    image: string
    author: {
      name: string
      avatar: string
    }
    likes: number
    comments: number
    tags: string[]
  }
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  return (
    <div className="bg-white rounded-xl shadow-sm overflow-hidden border border-gray-200 hover:shadow-md transition-shadow">
      <div className="h-48 overflow-hidden">
        <img 
          src={project.image} 
          alt={project.title}
          className="w-full h-full object-cover"
        />
      </div>
      
      <div className="p-5">
        <div className="flex items-center mb-4">
          <img 
            src={project.author.avatar} 
            alt={project.author.name}
            className="h-8 w-8 rounded-full mr-2"
          />
          <span className="text-sm text-gray-700">{project.author.name}</span>
        </div>
        
        <h3 className="font-bold text-lg mb-2 text-gray-900">{project.title}</h3>
        
        <p className="text-gray-600 text-sm mb-4 line-clamp-2">{project.description}</p>
        
        <div className="flex flex-wrap gap-2 mb-4">
          {project.tags.map((tag) => (
            <span 
              key={tag}
              className="px-2 py-1 bg-gray-100 text-gray-600 rounded-full text-xs"
            >
              {tag}
            </span>
          ))}
        </div>
        
        <div className="flex justify-between items-center pt-3 border-t border-gray-100">
          <div className="flex space-x-4">
            <button className="flex items-center text-gray-500 hover:text-indigo-600">
              <Heart className="h-4 w-4 mr-1" />
              <span className="text-xs">{project.likes}</span>
            </button>
            
            <button className="flex items-center text-gray-500 hover:text-indigo-600">
              <MessageSquare className="h-4 w-4 mr-1" />
              <span className="text-xs">{project.comments}</span>
            </button>
          </div>
          
          <button className="text-gray-500 hover:text-indigo-600">
            <Share2 className="h-4 w-4" />
          </button>
        </div>
      </div>
    </div>
  )
}
