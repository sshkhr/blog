// Source: https://github.com/dlarroder/dalelarroder/blob/main/components/ThemeSwitch.tsx
'use client'

import { AnimatePresence, motion } from 'framer-motion'
import { useTheme } from 'next-themes'
import { useEffect, useState } from 'react'
import { BsMoonFill, BsSunFill } from 'react-icons/bs'

const ThemeSwitch = () => {
  const [mounted, setMounted] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const { theme, setTheme, resolvedTheme } = useTheme()

  useEffect(() => setMounted(true), [])

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const isDark = mounted && (theme === 'dark' || resolvedTheme === 'dark')
  const toggleTheme = () => setTheme(resolvedTheme === 'dark' ? 'light' : 'dark')

  const icon = isDark ? <BsSunFill size={16} /> : <BsMoonFill size={18} />

  return (
    <>
      {/* Inline button in the header — hidden when scrolled */}
      <motion.button
        id="theme-btn"
        aria-label="Toggle Dark Mode"
        type="button"
        className={`ml-1 mr-1 h-8 w-8 rounded p-1 ${scrolled ? 'invisible' : 'visible'}`}
        whileTap={{ scale: 0.7, rotate: 360, transition: { duration: 0.2 } }}
        whileHover={{ scale: 1.2 }}
        onClick={toggleTheme}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="currentColor"
          className="text-gray-900 dark:text-gray-100"
        >
          {icon}
        </svg>
      </motion.button>

      {/* Floating button — appears when scrolled past header */}
      <AnimatePresence>
        {scrolled && (
          <motion.button
            key="floating-theme-btn"
            aria-label="Toggle Dark Mode"
            type="button"
            className="fixed right-8 top-8 z-50 hidden rounded-full bg-gray-200 p-2 text-gray-500 shadow-md transition-colors hover:bg-gray-300 dark:bg-gray-700 dark:text-gray-400 dark:hover:bg-gray-600 md:block"
            initial={{ opacity: 0, scale: 0.6 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.6 }}
            transition={{ duration: 0.2 }}
            onClick={toggleTheme}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              className="h-5 w-5"
            >
              {icon}
            </svg>
          </motion.button>
        )}
      </AnimatePresence>
    </>
  )
}

export default ThemeSwitch
