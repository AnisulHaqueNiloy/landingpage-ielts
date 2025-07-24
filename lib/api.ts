import type { CourseData } from "@/types/course"

export async function getCourseData(): Promise<CourseData> {
  try {
    const response = await fetch("https://api.10minuteschool.com/discovery-service/api/v1/products/ielts-course", {
      headers: {
        "X-TENMS-SOURCE-PLATFORM": "web",
        "Content-Type": "application/json",
      },
      // Enable ISR with revalidation every hour
      next: { revalidate: 3600 },
    })

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`)
    }

    const result = await response.json()
    return result.data
  } catch (error) {
    console.error("Failed to fetch course data:", error)
    // Fallback to mock data if API fails
    return getMockCourseData()
  }
}

// Fallback mock data
function getMockCourseData(): CourseData {
  return {
    slug: "ielts-course",
    id: 153,
    title: "IELTS Course by Munzereen Shahid",
    description:
      '<p class="tenms__paragraph" dir="ltr"><span style="white-space: pre-wrap;">Academic IELTS এবং General Training IELTS- এর কমপ্লিট প্রিপারেশন নিন একটি কোর্সেই! দেশসেরা IELTS Instructor এর গাইডলাইনে আপনার কাঙ্ক্ষিত ব্যান্ড স্কোরটি অর্জন করতে আজই জয়েন করুন আমাদের IELTS Course-এ। </span></p>',
    platform: "skills",
    type: "regular",
    modality: "recorded",
    media: [
      {
        name: "preview_gallery",
        resource_type: "video",
        resource_value: "zrlYnaZftEQ",
        thumbnail_url: "https://cdn.10minuteschool.com/images/thumbnails/IELTS_new_16_9.png",
      },
    ],
    checklist: [
      {
        color: "black",
        icon: "https://cdn.10minuteschool.com/images/PDP/course-fact-icons/course_participants.png",
        id: "meta3gpFEyRTlx1719741712652",
        list_page_visibility: true,
        text: "কোর্সটি করছেন ৩২৯৯৫ জন",
      },
      {
        color: "black",
        icon: "https://cdn.10minuteschool.com/images/PDP/course-fact-icons/video.png",
        id: "metaYomaaEg9di1719741712652",
        list_page_visibility: true,
        text: "৫৪টি ভিডিও",
      },
    ],
    cta_text: {
      name: "কোর্সটি কিনুন",
      value: "enroll",
    },
    sections: [],
  }
}
