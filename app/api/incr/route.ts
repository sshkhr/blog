import { Redis } from '@upstash/redis'
import { NextRequest, NextResponse } from 'next/server'
import { allBlogs } from 'contentlayer/generated'

const redis = Redis.fromEnv()

export const runtime = 'edge' // optional for edge

// POST /api/incr
export async function POST(req: NextRequest) {
  if (req.headers.get('Content-Type') !== 'application/json') {
    return new NextResponse('must be json', { status: 400 })
  }

  const body = await req.json()
  const slug = body?.slug
  if (!slug) {
    return new NextResponse('Slug not found', { status: 400 })
  }

  // Check if the post is a draft
  const post = allBlogs.find((p) => p.slug === slug)
  if (post?.draft) {
    // Don't increment view count for draft posts
    return new NextResponse(null, { status: 202 })
  }

  const ip = req.ip
  if (ip) {
    // Hash the IP in order to not store it directly in your db.
    const buf = await crypto.subtle.digest('SHA-256', new TextEncoder().encode(ip))
    const hash = Array.from(new Uint8Array(buf))
      .map((b) => b.toString(16).padStart(2, '0'))
      .join('')

    // deduplicate the ip for each slug
    const isNew = await redis.set(['deduplicate', hash, slug].join(':'), true, {
      nx: true,
      ex: 24 * 60 * 60,
    })
    if (!isNew) {
      return new NextResponse(null, { status: 202 })
    }
  }

  await redis.incr(['pageviews', 'projects', slug].join(':'))
  return new NextResponse(null, { status: 202 })
}
