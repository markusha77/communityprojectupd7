import React from 'react'
import { ProjectCard } from './ProjectCard'

export const ProjectFeed: React.FC = () => {
  // Sample project data
  const projects = [
    {
      id: '1',
      title: 'AI-Powered Task Manager',
      description: 'A task management app that uses AI to prioritize and suggest tasks based on your work patterns and deadlines.',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
      author: {
        name: 'Alex Johnson',
        avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
      },
      likes: 124,
      comments: 18,
      tags: ['AI', 'Productivity', 'React']
    },
    {
      id: '2',
      title: 'Virtual Reality Meditation Space',
      description: 'A VR application that creates immersive meditation environments with guided sessions and biofeedback integration.',
      image: 'https://images.unsplash.com/photo-1518002171953-a080ee817e1f?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
      author: {
        name: 'Maya Patel',
        avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
      },
      likes: 89,
      comments: 7,
      tags: ['VR', 'Wellness', 'Unity']
    },
    {
      id: '3',
      title: 'Sustainable Food Delivery Platform',
      description: 'An eco-friendly food delivery service that connects users with local restaurants using zero-waste packaging.',
      image: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
      author: {
        name: 'Carlos Rodriguez',
        avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
      },
      likes: 56,
      comments: 12,
      tags: ['Sustainability', 'Food', 'Mobile App']
    },
    {
      id: '4',
      title: 'Collaborative Music Creation Tool',
      description: 'A web platform that allows musicians to collaborate remotely on tracks with real-time editing and mixing capabilities.',
      image: 'https://images.unsplash.com/photo-1511379938547-c1f69419868d?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
      author: {
        name: 'Jamie Lee',
        avatar: 'https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
      },
      likes: 210,
      comments: 34,
      tags: ['Music', 'Collaboration', 'Web Audio']
    },
    {
      id: '5',
      title: 'Smart Home Energy Monitor',
      description: 'An IoT device and companion app that tracks and optimizes home energy usage with AI-powered recommendations.',
      image: 'https://images.unsplash.com/photo-1558449028-b53a39d100fc?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
      author: {
        name: 'Sarah Kim',
        avatar: 'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
      },
      likes: 76,
      comments: 9,
      tags: ['IoT', 'Energy', 'Sustainability']
    },
    {
      id: '6',
      title: 'Augmented Reality Language Learning',
      description: 'An AR app that helps users learn new languages by overlaying translations and pronunciation guides on real-world objects.',
      image: 'https://images.unsplash.com/photo-1546777701-8ef25158125a?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
      author: {
        name: 'David Chen',
        avatar: 'https://images.unsplash.com/photo-1519345182560-3f2917c472ef?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
      },
      likes: 143,
      comments: 21,
      tags: ['AR', 'Education', 'Mobile App']
    }
  ]

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {projects.map((project) => (
        <ProjectCard key={project.id} project={project} />
      ))}
    </div>
  )
}
