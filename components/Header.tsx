"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { Menu, X, Globe, ChevronDown } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useTranslation, type Locale } from "@/lib/i18n"

interface HeaderProps {
  locale: Locale
  onLocaleChange: (locale: Locale) => void
}

export default function Header({ locale, onLocaleChange }: HeaderProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isLangOpen, setIsLangOpen] = useState(false)
  const { t } = useTranslation(locale)

  const navItems = [
    { key: "nav.home", href: "/" },
    { key: "nav.courses", href: "/courses" },
    { key: "nav.about", href: "/about" },
    { key: "nav.contact", href: "/contact" },
  ]

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <Image
              src="/placeholder.svg?height=40&width=40"
              alt="10 Minute School"
              width={40}
              height={40}
              className="rounded"
            />
            <span className="text-xl font-bold text-gray-900">10 Minute School</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.key}
                href={item.href}
                className="text-gray-700 hover:text-blue-600 transition-colors duration-200"
              >
                {t(item.key as keyof typeof import("@/lib/i18n").translations.bn)}
              </Link>
            ))}
          </nav>

          {/* Right Side Actions */}
          <div className="hidden md:flex items-center space-x-4">
            {/* Language Switcher */}
            <div className="relative">
              <button
                onClick={() => setIsLangOpen(!isLangOpen)}
                className="flex items-center space-x-1 text-gray-700 hover:text-blue-600 transition-colors duration-200"
              >
                <Globe className="w-4 h-4" />
                <span className="text-sm font-medium">{locale === "bn" ? "বাংলা" : "English"}</span>
                <ChevronDown className="w-3 h-3" />
              </button>

              {isLangOpen && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className="absolute right-0 mt-2 w-32 bg-white rounded-lg shadow-lg border border-gray-200 py-1"
                >
                  <button
                    onClick={() => {
                      onLocaleChange("bn")
                      setIsLangOpen(false)
                    }}
                    className={`w-full px-4 py-2 text-left text-sm hover:bg-gray-50 ${
                      locale === "bn" ? "text-blue-600 font-medium" : "text-gray-700"
                    }`}
                  >
                    বাংলা
                  </button>
                  <button
                    onClick={() => {
                      onLocaleChange("en")
                      setIsLangOpen(false)
                    }}
                    className={`w-full px-4 py-2 text-left text-sm hover:bg-gray-50 ${
                      locale === "en" ? "text-blue-600 font-medium" : "text-gray-700"
                    }`}
                  >
                    English
                  </button>
                </motion.div>
              )}
            </div>

            <Button variant="outline" size="sm">
              {t("nav.login")}
            </Button>
            <Button size="sm" className="bg-green-600 hover:bg-green-700">
              {t("nav.signup")}
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 text-gray-700 hover:text-blue-600"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden border-t border-gray-200 py-4"
          >
            <nav className="flex flex-col space-y-4">
              {navItems.map((item) => (
                <Link
                  key={item.key}
                  href={item.href}
                  className="text-gray-700 hover:text-blue-600 transition-colors duration-200"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {t(item.key as keyof typeof import("@/lib/i18n").translations.bn)}
                </Link>
              ))}

              <div className="flex items-center justify-between pt-4 border-t border-gray-200">
                <div className="flex items-center space-x-2">
                  <Globe className="w-4 h-4 text-gray-500" />
                  <span className="text-sm text-gray-700">Language:</span>
                </div>
                <div className="flex space-x-2">
                  <button
                    onClick={() => onLocaleChange("bn")}
                    className={`px-3 py-1 text-xs rounded ${
                      locale === "bn" ? "bg-blue-600 text-white" : "bg-gray-100 text-gray-700"
                    }`}
                  >
                    বাংলা
                  </button>
                  <button
                    onClick={() => onLocaleChange("en")}
                    className={`px-3 py-1 text-xs rounded ${
                      locale === "en" ? "bg-blue-600 text-white" : "bg-gray-100 text-gray-700"
                    }`}
                  >
                    English
                  </button>
                </div>
              </div>

              <div className="flex flex-col space-y-2 pt-4">
                <Button variant="outline" size="sm">
                  {t("nav.login")}
                </Button>
                <Button size="sm" className="bg-green-600 hover:bg-green-700">
                  {t("nav.signup")}
                </Button>
              </div>
            </nav>
          </motion.div>
        )}
      </div>
    </header>
  )
}
