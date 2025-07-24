export const locales = ["bn", "en"] as const
export type Locale = (typeof locales)[number]

export const defaultLocale: Locale = "bn"

export const translations = {
  bn: {
    // Navigation
    "nav.home": "হোম",
    "nav.courses": "কোর্স",
    "nav.about": "আমাদের সম্পর্কে",
    "nav.contact": "যোগাযোগ",
    "nav.login": "লগইন",
    "nav.signup": "সাইন আপ",

    // Common
    "common.loading": "লোড হচ্ছে...",
    "common.error": "কিছু সমস্যা হয়েছে",
    "common.retry": "আবার চেষ্টা করুন",
    "common.close": "বন্ধ করুন",
    "common.play": "প্লে করুন",

    // Course
    "course.instructor": "কোর্স ইন্সট্রাক্টর",
    "course.info": "কোর্স তথ্য",
    "course.price": "৳১,০০০",
    "course.enroll": "কোর্সটি কিনুন",
    "course.students": "শিক্ষার্থী",
    "course.videos": "ভিডিও",
    "course.duration": "সময়কাল",
    "course.certificate": "সার্টিফিকেট",

    // Sections
    "section.features": "কোর্সটি যেভাবে সাজানো হয়েছে",
    "section.learning": "কোর্সটি করে যা শিখবেন",
    "section.exclusive": "কোর্স এক্সক্লুসিভ ফিচার",
    "section.about": "কোর্স সম্পর্কে বিস্তারিত",
    "section.testimonials": "শিক্ষার্থীরা যা বলছে",
    "section.faq": "সচরাচর জিজ্ঞাসা",

    // Testimonials
    "testimonial.score": "IELTS স্কোর",
    "testimonial.watch": "ভিডিও দেখুন",

    // Offer
    "offer.ending": "স্পেশাল অফার শেষ হতে আর বাকি",
    "offer.days": "দিন",
    "offer.hours": "ঘন্টা",
    "offer.minutes": "মিনিট",
    "offer.seconds": "সেকেন্ড",
  },
  en: {
    // Navigation
    "nav.home": "Home",
    "nav.courses": "Courses",
    "nav.about": "About Us",
    "nav.contact": "Contact",
    "nav.login": "Login",
    "nav.signup": "Sign Up",

    // Common
    "common.loading": "Loading...",
    "common.error": "Something went wrong",
    "common.retry": "Try Again",
    "common.close": "Close",
    "common.play": "Play",

    // Course
    "course.instructor": "Course Instructor",
    "course.info": "Course Information",
    "course.price": "৳1,000",
    "course.enroll": "Enroll Now",
    "course.students": "Students",
    "course.videos": "Videos",
    "course.duration": "Duration",
    "course.certificate": "Certificate",

    // Sections
    "section.features": "How the Course is Structured",
    "section.learning": "What You Will Learn",
    "section.exclusive": "Course Exclusive Features",
    "section.about": "Course Details",
    "section.testimonials": "Student Reviews",
    "section.faq": "Frequently Asked Questions",

    // Testimonials
    "testimonial.score": "IELTS Score",
    "testimonial.watch": "Watch Video",

    // Offer
    "offer.ending": "Special Offer Ends In",
    "offer.days": "Days",
    "offer.hours": "Hours",
    "offer.minutes": "Minutes",
    "offer.seconds": "Seconds",
  },
} as const

export function useTranslation(locale: Locale = defaultLocale) {
  return {
    t: (key: keyof typeof translations.bn) => {
      return translations[locale][key] || translations[defaultLocale][key] || key
    },
    locale,
  }
}
