import Head from "next/head"
import type { CourseData } from "@/types/course"
import type { Locale } from "@/lib/i18n"

interface SEOHeadProps {
  courseData: CourseData
  locale: Locale
}

export default function SEOHead({ courseData, locale }: SEOHeadProps) {
  const seoData = courseData.seo?.[0] || {}

  const title = locale === "bn" ? courseData.title : `IELTS Course by Munzereen Shahid - Complete Preparation`

  const description =
    locale === "bn"
      ? courseData.description.replace(/<[^>]*>/g, "")
      : `Complete IELTS preparation course for Academic and General Training. Learn from expert instructor Munzereen Shahid with 8.5 IELTS score. Get your desired band score with structured lessons, mock tests, and live support.`

  const keywords =
    locale === "bn"
      ? "IELTS, আইইএলটিএস, ইংরেজি কোর্স, মুনজেরিন শহীদ, টেন মিনিট স্কুল, IELTS প্রস্তুতি, ব্যান্ড স্কোর"
      : "IELTS, English Course, Munzereen Shahid, 10 Minute School, IELTS Preparation, Band Score, Academic IELTS, General Training IELTS"

  const canonicalUrl = `https://10minuteschool.com/${locale}/courses/ielts-course`
  const imageUrl =
    courseData.media.find((m) => m.name === "thumbnail")?.resource_value ||
    "https://cdn.10minuteschool.com/images/thumbnails/IELTS_new_16_9.png"

  return (
    <Head>
      {/* Basic Meta Tags */}
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="author" content="10 Minute School" />
      <meta name="robots" content="index, follow" />
      <meta name="language" content={locale === "bn" ? "Bengali" : "English"} />

      {/* Canonical URL */}
      <link rel="canonical" href={canonicalUrl} />

      {/* Alternate Language URLs */}
      <link rel="alternate" hrefLang="bn" href="https://10minuteschool.com/bn/courses/ielts-course" />
      <link rel="alternate" hrefLang="en" href="https://10minuteschool.com/en/courses/ielts-course" />
      <link rel="alternate" hrefLang="x-default" href="https://10minuteschool.com/courses/ielts-course" />

      {/* Open Graph Meta Tags */}
      <meta property="og:type" content="website" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={imageUrl} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:site_name" content="10 Minute School" />
      <meta property="og:locale" content={locale === "bn" ? "bn_BD" : "en_US"} />

      {/* Twitter Card Meta Tags */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content="@10minuteschool" />
      <meta name="twitter:creator" content="@10minuteschool" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={imageUrl} />

      {/* Course Specific Meta Tags */}
      <meta name="course:instructor" content="Munzereen Shahid" />
      <meta name="course:price" content="1000" />
      <meta name="course:currency" content="BDT" />
      <meta name="course:category" content="Language Learning" />
      <meta name="course:level" content="Beginner to Advanced" />
      <meta name="course:duration" content="50 hours" />

      {/* Schema.org JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Course",
            name: title,
            description: description,
            provider: {
              "@type": "Organization",
              name: "10 Minute School",
              url: "https://10minuteschool.com",
              logo: "https://10minuteschool.com/logo.png",
            },
            instructor: {
              "@type": "Person",
              name: "Munzereen Shahid",
              description: "MSc (English), University of Oxford (UK); IELTS: 8.5",
            },
            offers: {
              "@type": "Offer",
              price: "1000",
              priceCurrency: "BDT",
              availability: "https://schema.org/InStock",
            },
            image: imageUrl,
            url: canonicalUrl,
            courseMode: "online",
            educationalLevel: "beginner to advanced",
            teaches: "IELTS Preparation",
            inLanguage: locale === "bn" ? "bn" : "en",
            aggregateRating: {
              "@type": "AggregateRating",
              ratingValue: "4.8",
              reviewCount: "32995",
            },
          }),
        }}
      />

      {/* Additional SEO Meta Tags */}
      <meta name="theme-color" content="#3B82F6" />
      <meta name="msapplication-TileColor" content="#3B82F6" />
      <meta name="apple-mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-status-bar-style" content="default" />
      <meta name="format-detection" content="telephone=no" />

      {/* Preconnect for Performance */}
      <link rel="preconnect" href="https://cdn.10minuteschool.com" />
      <link rel="preconnect" href="https://www.youtube.com" />
      <link rel="preconnect" href="https://fonts.googleapis.com" />

      {/* Favicon */}
      <link rel="icon" href="/favicon.ico" />
      <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
    </Head>
  )
}
