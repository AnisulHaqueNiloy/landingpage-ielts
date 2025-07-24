export interface CourseData {
  slug: string
  id: number
  title: string
  description: string
  platform: string
  type: string
  modality: string
  media: MediaItem[]
  checklist: ChecklistItem[]
  cta_text: {
    name: string
    value: string
  }
  sections: CourseSection[]
}

export interface MediaItem {
  name: string
  resource_type: string
  resource_value: string
  thumbnail_url?: string
}

export interface ChecklistItem {
  color: string
  icon: string
  id: string
  list_page_visibility: boolean
  text: string
}

export interface CourseSection {
  type: string
  name: string
  description: string
  bg_color: string
  order_idx: number
  values: any[] | Testimonial[] | FAQItem[]
}

export interface Instructor {
  description: string
  has_instructor_page: boolean
  image: string
  name: string
  short_description: string
  slug: string
}

export interface Feature {
  icon: string
  id: string
  subtitle: string
  title: string
}

export interface Pointer {
  color: string
  icon: string
  id: string
  text: string
}

export interface ExclusiveFeature {
  checklist: string[]
  file_type: string
  file_url: string
  id: string
  title: string
  video_thumbnail: string
}

export interface AboutItem {
  description: string
  icon: string
  id: string
  title: string
}

export interface Testimonial {
  id: string
  name: string
  description: string
  testimonial: string
  profile_image: string
  video_url?: string
  thumb?: string
  video_type?: string
}

export interface FAQItem {
  id: string
  question: string
  answer: string
}
