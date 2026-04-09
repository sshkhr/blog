'use client'

import { useTheme } from 'next-themes'
import { useEffect, useRef, useState } from 'react'

type EmbeddedSlideProps = {
  src: string
  height?: number
  title?: string
}

export default function EmbeddedSlide({ src, height = 500, title }: EmbeddedSlideProps) {
  const { resolvedTheme } = useTheme()
  const iframeRef = useRef<HTMLIFrameElement>(null)
  const [mounted, setMounted] = useState(false)
  // Store the initial theme at mount time so the src never changes
  const initialThemeRef = useRef<string | undefined>(undefined)

  useEffect(() => {
    initialThemeRef.current = resolvedTheme || 'dark'
    setMounted(true)
  }, []) // eslint-disable-line react-hooks/exhaustive-deps

  // Compute src ONCE using the initial theme — never changes after mount
  const iframeSrc = (() => {
    if (!mounted) return undefined
    const hashIdx = src.indexOf('#')
    const base = hashIdx >= 0 ? src.slice(0, hashIdx) : src
    const hash = hashIdx >= 0 ? src.slice(hashIdx) : ''
    const sep = base.includes('?') ? '&' : '?'
    return `${base}${sep}theme=${initialThemeRef.current}${hash}`
  })()

  // Send postMessage on subsequent theme changes (not on mount)
  const prevThemeRef = useRef(resolvedTheme)
  useEffect(() => {
    if (!mounted) return
    if (resolvedTheme === prevThemeRef.current) return
    prevThemeRef.current = resolvedTheme
    if (iframeRef.current?.contentWindow) {
      iframeRef.current.contentWindow.postMessage(
        { type: 'theme-change', theme: resolvedTheme },
        window.location.origin
      )
    }
  }, [resolvedTheme, mounted])

  // Send theme when iframe finishes loading (handles race condition)
  const handleLoad = () => {
    if (iframeRef.current?.contentWindow) {
      iframeRef.current.contentWindow.postMessage(
        { type: 'theme-change', theme: resolvedTheme },
        window.location.origin
      )
    }
  }

  return (
    <div className="my-6 flex justify-center">
      <iframe
        ref={iframeRef}
        src={iframeSrc}
        width="100%"
        height={height}
        className="rounded-xl border border-gray-200 dark:border-gray-700"
        title={title || 'Interactive demo'}
        loading="lazy"
        onLoad={handleLoad}
      />
    </div>
  )
}
