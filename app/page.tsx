"use client"

import { Suspense, useState, useEffect } from "react"
import CourseHero from "@/components/CourseHero"
import CourseContent from "@/components/CourseContent"
import Header from "@/components/Header"
import LoadingSpinner from "@/components/LoadingSpinner"
import ErrorBoundary from "@/components/ErrorBoundary"
import SEOHead from "@/components/SEOHead"
import { getCourseData } from "@/lib/api"
import { useTranslation, type Locale, defaultLocale } from "@/lib/i18n"
import type { CourseData } from "@/types/course"

function CoursePageContent({ locale, courseData }: { locale: Locale; courseData: CourseData }) {
  const { t } = useTranslation(locale)

  return (
    <>
      <SEOHead courseData={courseData} locale={locale} />
      <CourseHero data={courseData} locale={locale} />
      <CourseContent data={courseData} locale={locale} />
    </>
  )
}

export default function HomePage() {
  const [locale, setLocale] = useState<Locale>(defaultLocale)
  const [courseData, setCourseData] = useState<CourseData | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    // Get locale from localStorage or browser
    const savedLocale = localStorage.getItem("locale") as Locale
    if (savedLocale && ["bn", "en"].includes(savedLocale)) {
      setLocale(savedLocale)
    } else {
      // Detect browser language
      const browserLang = navigator.language.toLowerCase()
      if (browserLang.includes("bn") || browserLang.includes("bangla")) {
        setLocale("bn")
      } else {
        setLocale("en")
      }
    }
  }, [])

  useEffect(() => {
    async function fetchData() {
      try {
        setLoading(true)
        const data = await getCourseData()
        setCourseData(data)
      } catch (err) {
        setError(err instanceof Error ? err.message : "Failed to load course data")
      } finally {
        setLoading(false)
      }
    }

    fetchData()
  }, [])

  const handleLocaleChange = (newLocale: Locale) => {
    setLocale(newLocale)
    localStorage.setItem("locale", newLocale)

    // Update document language
    document.documentElement.lang = newLocale

    // Update page title based on locale
    document.title =
      newLocale === "bn"
        ? "IELTS Course by Munzereen Shahid - টেন মিনিট স্কুল"
        : "IELTS Course by Munzereen Shahid - 10 Minute School"
  }

  if (loading) {
    return <LoadingSpinner />
  }

  if (error || !courseData) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-xl font-bold text-gray-900 mb-2">
            {locale === "bn" ? "কিছু সমস্যা হয়েছে" : "Something went wrong"}
          </h2>
          <p className="text-gray-600 mb-4">{error}</p>
          <button
            onClick={() => window.location.reload()}
            className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
          >
            {locale === "bn" ? "আবার চেষ্টা করুন" : "Try Again"}
          </button>
        </div>
      </div>
    )
  }

  return (
    <ErrorBoundary>
      <div className="min-h-screen bg-gray-50">
        <Header locale={locale} onLocaleChange={handleLocaleChange} />
        <main>
          <Suspense fallback={<LoadingSpinner />}>
            <CoursePageContent locale={locale} courseData={courseData} />
          </Suspense>
        </main>
      </div>
    </ErrorBoundary>
  )
}
