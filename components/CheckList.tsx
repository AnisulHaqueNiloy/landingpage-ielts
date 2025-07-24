"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import type { ChecklistItem } from "@/types/course"
import { useTranslation, type Locale } from "@/lib/i18n" // Corrected import path

interface CheckListProps {
  items: ChecklistItem[]
  locale: Locale
}

export default function CheckList({ items, locale }: CheckListProps) {
  const { t } = useTranslation(locale)
  const visibleItems = items.filter((item) => item.list_page_visibility)

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.8, duration: 0.6 }}
      className="bg-white rounded-lg p-6 shadow-sm"
    >
      <h3 className="text-lg font-semibold mb-4 text-gray-900">{t("course.info")}</h3>
      <div className="space-y-3">
        {visibleItems.map((item, index) => (
          <motion.div
            key={item.id}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.9 + index * 0.1, duration: 0.4 }}
            className="flex items-center space-x-3"
          >
            <Image src={item.icon || "/placeholder.svg"} alt="" width={20} height={20} className="flex-shrink-0" />
            <span className="text-sm text-gray-700">{item.text}</span>
          </motion.div>
        ))}
      </div>
    </motion.div>
  )
}
