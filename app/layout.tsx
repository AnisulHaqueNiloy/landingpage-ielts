import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  metadataBase: new URL("https://10minuteschool.com"),
  title: {
    default: "IELTS Course by Munzereen Shahid - 10 Minute School",
    template: "%s | 10 Minute School",
  },
  description:
    "Academic IELTS এবং General Training IELTS- এর কমপ্লিট প্রিপারেশন নিন একটি কোর্সেই! দেশসেরা IELTS Instructor এর গাইডলাইনে আপনার কাঙ্ক্ষিত ব্যান্ড স্কোরটি অর্জন করতে আজই জয়েন করুন।",
  keywords: ["IELTS", "English Course", "Munzereen Shahid", "10 Minute School", "IELTS Preparation", "Band Score"],
  authors: [{ name: "10 Minute School" }],
  creator: "10 Minute School",
  publisher: "10 Minute School",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "bn_BD",
    alternateLocale: ["en_US"],
    url: "https://10minuteschool.com",
    siteName: "10 Minute School",
    title: "IELTS Course by Munzereen Shahid - Complete IELTS Preparation",
    description:
      "Complete IELTS preparation course for Academic and General Training. Expert instruction, mock tests, and live support.",
    images: [
      {
        url: "https://cdn.10minuteschool.com/images/thumbnails/IELTS_new_16_9.png",
        width: 1200,
        height: 630,
        alt: "IELTS Course by Munzereen Shahid",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@10minuteschool",
    creator: "@10minuteschool",
  },
  verification: {
    google: "your-google-verification-code",
    yandex: "your-yandex-verification-code",
  },
  alternates: {
    canonical: "https://10minuteschool.com/courses/ielts-course",
    languages: {
      "bn-BD": "https://10minuteschool.com/bn/courses/ielts-course",
      "en-US": "https://10minuteschool.com/en/courses/ielts-course",
    },
  },
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="bn">
      <head>
        <link rel="preconnect" href="https://cdn.10minuteschool.com" />
        <link rel="preconnect" href="https://www.youtube.com" />
        <link rel="dns-prefetch" href="https://api.10minuteschool.com" />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  )
}
