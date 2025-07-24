"use client"

import { motion } from "framer-motion"
import { useState } from "react"
import { ChevronDown, ChevronUp } from "lucide-react"
import type { CourseSection } from "@/types/course"

interface FAQSectionProps {
  section?: CourseSection
}

interface FAQItem {
  id: string
  question: string
  answer: string
}

export default function FAQSection({ section }: FAQSectionProps) {
  const [openItems, setOpenItems] = useState<Set<string>>(new Set())

  if (!section || !section.values) return null

  const faqItems = section.values as FAQItem[]

  const toggleItem = (id: string) => {
    const newOpenItems = new Set(openItems)
    if (newOpenItems.has(id)) {
      newOpenItems.delete(id)
    } else {
      newOpenItems.add(id)
    }
    setOpenItems(newOpenItems)
  }

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

      <div className="space-y-4">
        {faqItems.map((item, index) => {
          const isOpen = openItems.has(item.id)

          return (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              viewport={{ once: true }}
              className="border border-gray-200 rounded-lg overflow-hidden"
            >
              <button
                onClick={() => toggleItem(item.id)}
                className="w-full px-6 py-4 text-left bg-gray-50 hover:bg-gray-100 transition-colors duration-200 flex items-center justify-between"
              >
                <span className="font-medium text-gray-900 pr-4">{item.question}</span>
                {isOpen ? (
                  <ChevronUp className="w-5 h-5 text-gray-500 flex-shrink-0" />
                ) : (
                  <ChevronDown className="w-5 h-5 text-gray-500 flex-shrink-0" />
                )}
              </button>

              <motion.div
                initial={false}
                animate={{
                  height: isOpen ? "auto" : 0,
                  opacity: isOpen ? 1 : 0,
                }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
                className="overflow-hidden"
              >
                <div className="px-6 py-4 bg-white">
                  <div
                    className="prose prose-sm max-w-none text-gray-600"
                    dangerouslySetInnerHTML={{ __html: item.answer }}
                  />
                </div>
              </motion.div>
            </motion.div>
          )
        })}
      </div>
    </div>
  )
}
