'use client'

import { useEffect } from 'react'

export const ReportView: React.FC<{ slug: string; draft?: boolean }> = ({ slug, draft }) => {
  useEffect(() => {
    // Don't report views for draft posts
    if (draft) return
    fetch('/api/incr', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ slug }),
    })
  }, [slug, draft])

  return null
}
