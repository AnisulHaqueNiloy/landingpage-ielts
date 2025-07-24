"use client"

import { motion } from "framer-motion"
import { CheckCircle } from "lucide-react"
import type { CourseSection } from "@/types/course"

interface CoursePointersProps {
  section?: CourseSection
}

export default function CoursePointers({ section }: CoursePointersProps) {
  if (!section || !section.values) return null

  return (
    <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-lg p-8">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-2xl font-bold text-center mb-8 text-gray-900"
      >
        {section.name}
      </motion.h2>

      <div className="space-y-4">
        {section.values.map((pointer, index) => (
          <motion.div
            key={pointer.id}
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.1, duration: 0.6 }}
            viewport={{ once: true }}
            className="flex items-start space-x-3 p-4 bg-white rounded-lg shadow-sm"
          >
            <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0 mt-0.5" />
            <p className="text-gray-700">{pointer.text}</p>
          </motion.div>
        ))}
      </div>
    </div>
  )
}
