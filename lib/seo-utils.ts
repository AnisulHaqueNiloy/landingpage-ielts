import type { CourseData } from "@/types/course"
import type { Locale } from "@/lib/i18n"

export function generateSEOMetadata(courseData: CourseData, locale: Locale) {
  const baseUrl = "https://10minuteschool.com"

  const title = locale === "bn" ? courseData.title : `IELTS Course by Munzereen Shahid - Complete Preparation`

  const description =
    locale === "bn"
      ? courseData.description.replace(/<[^>]*>/g, "").substring(0, 160)
      : `Complete IELTS preparation course for Academic and General Training. Learn from expert instructor Munzereen Shahid with 8.5 IELTS score.`

  const keywords =
    locale === "bn"
      ? ["IELTS", "আইইএলটিএস", "ইংরেজি কোর্স", "মুনজেরিন শহীদ", "টেন মিনিট স্কুল"]
      : ["IELTS", "English Course", "Munzereen Shahid", "10 Minute School", "IELTS Preparation"]

  const canonicalUrl = `${baseUrl}/${locale}/courses/ielts-course`
  const imageUrl =
    courseData.media.find((m) => m.name === "thumbnail")?.resource_value ||
    "https://cdn.10minuteschool.com/images/thumbnails/IELTS_new_16_9.png"

  return {
    title,
    description,
    keywords: keywords.join(", "),
    canonical: canonicalUrl,
    image: imageUrl,
    locale: locale === "bn" ? "bn_BD" : "en_US",
    alternateLocales: {
      "bn-BD": `${baseUrl}/bn/courses/ielts-course`,
      "en-US": `${baseUrl}/en/courses/ielts-course`,
    },
  }
}

export function generateStructuredData(courseData: CourseData, locale: Locale) {
  const { title, description, canonical, image } = generateSEOMetadata(courseData, locale)

  return {
    "@context": "https://schema.org",
    "@type": "Course",
    name: title,
    description: description,
    provider: {
      "@type": "Organization",
      name: "10 Minute School",
      url: "https://10minuteschool.com",
      logo: "https://10minuteschool.com/logo.png",
      sameAs: [
        "https://www.facebook.com/10minuteschool",
        "https://www.youtube.com/c/10MinuteSchool",
        "https://www.instagram.com/10minuteschool/",
      ],
    },
    instructor: {
      "@type": "Person",
      name: "Munzereen Shahid",
      description: "MSc (English), University of Oxford (UK); IELTS: 8.5",
      alumniOf: "University of Oxford",
    },
    offers: {
      "@type": "Offer",
      price: "1000",
      priceCurrency: "BDT",
      availability: "https://schema.org/InStock",
      validFrom: new Date().toISOString(),
    },
    image: image,
    url: canonical,
    courseMode: "online",
    educationalLevel: "beginner to advanced",
    teaches: "IELTS Preparation",
    inLanguage: locale === "bn" ? "bn" : "en",
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.8",
      reviewCount: courseData.checklist.find((item) => item.text.includes("করছেন"))?.text.match(/\d+/)?.[0] || "32995",
      bestRating: "5",
      worstRating: "1",
    },
    review: courseData.sections
      .find((s) => s.type === "testimonials")
      ?.values.slice(0, 3)
      .map((testimonial: any) => ({
        "@type": "Review",
        reviewRating: {
          "@type": "Rating",
          ratingValue: testimonial.description.match(/[\d.]+/)?.[0] || "5",
          bestRating: "9",
        },
        author: {
          "@type": "Person",
          name: testimonial.name,
        },
        reviewBody: testimonial.testimonial.substring(0, 200),
      })),
  }
}
