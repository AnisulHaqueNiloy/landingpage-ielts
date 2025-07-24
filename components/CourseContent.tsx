"use client"

import { motion } from "framer-motion"
import type { CourseData } from "@/types/course"
import CourseFeatures from "./CourseFeatures"
import CoursePointers from "./CoursePointers"
import CourseExclusiveFeatures from "./CourseExclusiveFeatures"
import CourseAbout from "./CourseAbout"
import TestimonialsSection from "./TestimonialsSection"
import FAQSection from "./FAQSection"
import type { Locale } from "@/lib/i18n" // Corrected import path

interface CourseContentProps {
  data: CourseData
  locale: Locale
}

export default function CourseContent({ data, locale }: CourseContentProps) {
  return (
    <div className="container mx-auto px-4 py-12 space-y-16">
      {/* How the course is laid out */}
      <motion.section
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <CourseFeatures section={data.sections.find((s) => s.type === "features")} locale={locale} />
      </motion.section>

      {/* What you will learn */}
      <motion.section
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <CoursePointers section={data.sections.find((s) => s.type === "pointers")} locale={locale} />
      </motion.section>

      {/* Course Exclusive Features */}
      <motion.section
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <CourseExclusiveFeatures
          section={data.sections.find((s) => s.type === "feature_explanations")}
          locale={locale}
        />
      </motion.section>

      {/* Course Details */}
      <motion.section
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <CourseAbout section={data.sections.find((s) => s.type === "about")} locale={locale} />
      </motion.section>

      {/* Testimonials */}
      <motion.section
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <TestimonialsSection section={data.sections.find((s) => s.type === "testimonials")} locale={locale} />
      </motion.section>

      {/* FAQ */}
      <motion.section
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <FAQSection section={data.sections.find((s) => s.type === "faq")} locale={locale} />
      </motion.section>
    </div>
  )
}
