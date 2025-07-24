"use client"

import { motion } from "framer-motion"
import { useState, useEffect } from "react"
import { Clock } from "lucide-react"
import type { CourseSection } from "@/types/course"

interface OfferBannerProps {
  section?: CourseSection
}

interface Offer {
  id: string
  text: string
  background_color: string
  end_at: string
  start_at: string
  template: string
}

export default function OfferBanner({ section }: OfferBannerProps) {
  const [timeLeft, setTimeLeft] = useState<{
    days: number
    hours: number
    minutes: number
    seconds: number
  } | null>(null)

  const [offer, setOffer] = useState<Offer | null>(null)
  const [isActive, setIsActive] = useState<boolean>(false)
  const [endDate, setEndDate] = useState<Date | null>(null)

  useEffect(() => {
    if (!section || !section.values || section.values.length === 0) {
      setOffer(null)
      setIsActive(false)
      setEndDate(null)
      return
    }

    const offerData = section.values[0] as Offer
    const endDateData = new Date(offerData.end_at)
    const isActiveData = new Date() < endDateData

    setOffer(offerData)
    setIsActive(isActiveData)
    setEndDate(endDateData)
  }, [section])

  useEffect(() => {
    if (!isActive || !endDate) return

    const timer = setInterval(() => {
      const now = new Date().getTime()
      const distance = endDate.getTime() - now

      if (distance > 0) {
        setTimeLeft({
          days: Math.floor(distance / (1000 * 60 * 60 * 24)),
          hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((distance % (1000 * 60)) / 1000),
        })
      } else {
        setTimeLeft(null)
      }
    }, 1000)

    return () => clearInterval(timer)
  }, [endDate, isActive])

  if (!isActive || !timeLeft || !offer) return null

  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="bg-red-600 text-white py-3 px-4 text-center"
      style={{ backgroundColor: offer.background_color }}
    >
      <div className="container mx-auto flex items-center justify-center space-x-4">
        <Clock className="w-5 h-5" />
        <span className="font-medium">{offer.text}</span>
        <div className="flex items-center space-x-2 font-mono">
          <span className="bg-white bg-opacity-20 px-2 py-1 rounded">{timeLeft.days.toString().padStart(2, "0")}d</span>
          <span className="bg-white bg-opacity-20 px-2 py-1 rounded">
            {timeLeft.hours.toString().padStart(2, "0")}h
          </span>
          <span className="bg-white bg-opacity-20 px-2 py-1 rounded">
            {timeLeft.minutes.toString().padStart(2, "0")}m
          </span>
          <span className="bg-white bg-opacity-20 px-2 py-1 rounded">
            {timeLeft.seconds.toString().padStart(2, "0")}s
          </span>
        </div>
      </div>
    </motion.div>
  )
}
