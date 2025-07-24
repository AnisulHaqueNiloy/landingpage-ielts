"use client"

import { motion } from "framer-motion"
import { useState } from "react"
import Image from "next/image"
import { Play, Star } from "lucide-react"
import { Button } from "@/components/ui/button"
import type { CourseSection } from "@/types/course"

interface TestimonialsSectionProps {
  section?: CourseSection
}

interface Testimonial {
  id: string
  name: string
  description: string
  testimonial: string
  profile_image: string
  video_url?: string
  thumb?: string
}

export default function TestimonialsSection({ section }: TestimonialsSectionProps) {
  const [selectedVideo, setSelectedVideo] = useState<string | null>(null)

  if (!section || !section.values) return null

  const testimonials = section.values as Testimonial[]

  const getScoreFromDescription = (description: string) => {
    const match = description.match(/IELTS Score: ([\d.]+)/)
    return match ? match[1] : null
  }

  return (
    <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-lg p-8">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-2xl font-bold text-center mb-8 text-gray-900"
      >
        {section.name}
      </motion.h2>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {testimonials.slice(0, 9).map((testimonial, index) => {
          const score = getScoreFromDescription(testimonial.description)

          return (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              viewport={{ once: true }}
              className="bg-white rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow duration-300"
            >
              {/* Header with profile and score */}
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center space-x-3">
                  <Image
                    src={testimonial.profile_image || "/placeholder.svg"}
                    alt={testimonial.name}
                    width={48}
                    height={48}
                    className="rounded-full"
                  />
                  <div>
                    <h4 className="font-semibold text-gray-900">{testimonial.name}</h4>
                    {score && (
                      <div className="flex items-center space-x-1">
                        <Star className="w-4 h-4 text-yellow-500 fill-current" />
                        <span className="text-sm font-medium text-green-600">IELTS {score}</span>
                      </div>
                    )}
                  </div>
                </div>

                {testimonial.video_url && (
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => setSelectedVideo(testimonial.video_url!)}
                    className="text-blue-600 hover:text-blue-700"
                  >
                    <Play className="w-4 h-4" />
                  </Button>
                )}
              </div>

              {/* Testimonial text */}
              <p className="text-sm text-gray-600 line-clamp-4">{testimonial.testimonial}</p>
            </motion.div>
          )
        })}
      </div>

      {/* Video Modal */}
      {selectedVideo && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4"
          onClick={() => setSelectedVideo(null)}
        >
          <motion.div
            initial={{ scale: 0.8 }}
            animate={{ scale: 1 }}
            exit={{ scale: 0.8 }}
            className="bg-white rounded-lg overflow-hidden max-w-4xl w-full aspect-video"
            onClick={(e) => e.stopPropagation()}
          >
            <iframe
              src={`https://www.youtube.com/embed/${selectedVideo}?autoplay=1`}
              title="Student Testimonial"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="w-full h-full"
            />
          </motion.div>
        </motion.div>
      )}
    </div>
  )
}
