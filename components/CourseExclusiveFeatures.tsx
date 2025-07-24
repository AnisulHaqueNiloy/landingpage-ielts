"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { CheckCircle } from "lucide-react"
import type { CourseSection } from "@/types/course"

interface CourseExclusiveFeaturesProps {
  section?: CourseSection
}

export default function CourseExclusiveFeatures({ section }: CourseExclusiveFeaturesProps) {
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

      <div className="grid md:grid-cols-2 gap-8">
        {section.values.map((feature, index) => (
          <motion.div
            key={feature.id}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: index * 0.2, duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-lg p-6"
          >
            <div className="mb-4">
              <Image
                src={feature.file_url || "/placeholder.svg"}
                alt={feature.title}
                width={300}
                height={200}
                className="w-full h-48 object-cover rounded-lg"
              />
            </div>
            <h3 className="text-xl font-semibold mb-4 text-gray-900">{feature.title}</h3>
            <div className="space-y-2">
              {feature.checklist.map((item, itemIndex) => (
                <div key={itemIndex} className="flex items-start space-x-2">
                  <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" />
                  <span className="text-sm text-gray-600">{item}</span>
                </div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  )
}
