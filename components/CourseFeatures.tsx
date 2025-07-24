"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import type { CourseSection } from "@/types/course"

interface CourseFeaturesProps {
  section?: CourseSection
}

export default function CourseFeatures({ section }: CourseFeaturesProps) {
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

      <div className="grid md:grid-cols-2 gap-6">
        {section.values.map((feature, index) => (
          <motion.div
            key={feature.id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1, duration: 0.6 }}
            viewport={{ once: true }}
            className="flex items-start space-x-4 p-4 rounded-lg hover:bg-gray-50 transition-colors duration-300"
          >
            <Image src={feature.icon || "/placeholder.svg"} alt="" width={48} height={48} className="flex-shrink-0" />
            <div>
              <h3 className="font-semibold text-gray-900 mb-2">{feature.title}</h3>
              <p className="text-sm text-gray-600">{feature.subtitle}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  )
}
