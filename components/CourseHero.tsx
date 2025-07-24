"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import YouTubePlayer from "./YouTubePlayer"
import CheckList from "./CheckList"
import type { CourseData } from "@/types/course"
import OfferBanner from "./OfferBanner"
import { useTranslation, type Locale } from "@/lib/i18n" // Corrected import path

interface CourseHeroProps {
  data: CourseData
  locale: Locale
}

export default function CourseHero({ data, locale }: CourseHeroProps) {
  const { t } = useTranslation(locale)
  const trailerVideo = data.media.find((item) => item.name === "preview_gallery" && item.resource_type === "video")

  return (
    <>
      <OfferBanner section={data.sections.find((s) => s.type === "offers")} />
      <section className="bg-gradient-to-br from-blue-50 to-indigo-100 py-12">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-8 items-start">
            {/* Left Column - Course Info */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="space-y-6"
            >
              {/* Title */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.6 }}
              >
                <Badge variant="secondary" className="mb-4">
                  {data.platform.toUpperCase()} Course
                </Badge>
                <h1 className="text-3xl md:text-4xl font-bold text-gray-900 leading-tight">{data.title}</h1>
              </motion.div>

              {/* Description */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.6 }}
                className="prose prose-gray max-w-none"
                dangerouslySetInnerHTML={{ __html: data.description }}
              />

              {/* Instructor */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, duration: 0.6 }}
                className="bg-white rounded-lg p-6 shadow-sm"
              >
                <h3 className="text-lg font-semibold mb-4">{t("course.instructor")}</h3>
                {data.sections
                  .find((section) => section.type === "instructors")
                  ?.values.map((instructor, index) => (
                    <div key={index} className="flex items-center space-x-4">
                      <Image
                        src={instructor.image || "/placeholder.svg"}
                        alt={instructor.name}
                        width={60}
                        height={60}
                        className="rounded-full"
                      />
                      <div>
                        <h4 className="font-semibold text-gray-900">{instructor.name}</h4>
                        <p className="text-sm text-gray-600">{instructor.short_description}</p>
                        <div
                          className="text-xs text-gray-500 mt-1"
                          dangerouslySetInnerHTML={{
                            __html: instructor.description,
                          }}
                        />
                      </div>
                    </div>
                  ))}
              </motion.div>
            </motion.div>

            {/* Right Column - Video & CTA */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="space-y-6"
            >
              {/* Video Trailer */}
              <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                {trailerVideo && (
                  <YouTubePlayer videoId={trailerVideo.resource_value} thumbnail={trailerVideo.thumbnail_url} />
                )}
              </div>

              {/* CTA Button */}
              <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }} className="w-full">
                <Button
                  size="lg"
                  className="w-full bg-green-600 hover:bg-green-700 text-white font-semibold py-4 text-lg"
                >
                  {t("course.enroll")} - {t("course.price")}
                </Button>
              </motion.div>

              {/* Check List */}
              <CheckList items={data.checklist} locale={locale} />
            </motion.div>
          </div>
        </div>
      </section>
    </>
  )
}
