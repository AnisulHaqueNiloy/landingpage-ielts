"use client"

import { motion } from "framer-motion"
import type { CourseSection } from "@/types/course"

interface CourseAboutProps {
  section?: CourseSection
}

export default function CourseAbout({ section }: CourseAboutProps) {
  if (!section || !section.values) return null

  return (
    <div className="bg-white rounded-lg p-8 shadow-sm">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-2xl font-bold text-center mb-8 text-gray-900"
      >
        {section.name}
      </motion.h2>

      <div className="space-y-8">
        {section.values.map((about, index) => (
          <motion.div
            key={about.id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.2, duration: 0.6 }}
            viewport={{ once: true }}
            className="border-l-4 border-blue-500 pl-6"
          >
            <div className="prose prose-gray max-w-none mb-4" dangerouslySetInnerHTML={{ __html: about.title }} />
            <div
              className="prose prose-gray max-w-none text-gray-600"
              dangerouslySetInnerHTML={{ __html: about.description }}
            />
          </motion.div>
        ))}
      </div>
    </div>
  )
}
