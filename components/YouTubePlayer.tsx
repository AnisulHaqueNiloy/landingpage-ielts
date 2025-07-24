"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import Image from "next/image"
import { Play } from "lucide-react"

interface YouTubePlayerProps {
  videoId: string
  thumbnail?: string
}

export default function YouTubePlayer({ videoId, thumbnail }: YouTubePlayerProps) {
  const [isPlaying, setIsPlaying] = useState(false)

  const handlePlay = () => {
    setIsPlaying(true)
  }

  if (isPlaying) {
    return (
      <div className="aspect-video">
        <iframe
          src={`https://www.youtube.com/embed/${videoId}?autoplay=1`}
          title="Course Trailer"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          className="w-full h-full"
        />
      </div>
    )
  }

  return (
    <motion.div
      className="relative aspect-video cursor-pointer group"
      onClick={handlePlay}
      whileHover={{ scale: 1.02 }}
      transition={{ duration: 0.2 }}
    >
      <Image
        src={thumbnail || `/placeholder.svg?height=400&width=600&query=IELTS course trailer`}
        alt="Course Trailer"
        fill
        className="object-cover"
      />
      <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center group-hover:bg-opacity-40 transition-all duration-300">
        <motion.div
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="bg-white bg-opacity-90 rounded-full p-4"
        >
          <Play className="w-8 h-8 text-blue-600 ml-1" fill="currentColor" />
        </motion.div>
      </div>
    </motion.div>
  )
}
