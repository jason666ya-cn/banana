import { createClient } from '@/lib/supabase/server'
import { NextResponse } from 'next/server'

export async function POST(request: Request) {
  const { origin } = new URL(request.url)
  const supabase = await createClient()

  const { error } = await supabase.auth.signOut()

  if (error) {
    console.error('Sign out error:', error)
    return NextResponse.json({ error: error.message }, { status: 400 })
  }

  return NextResponse.redirect(`${origin}/`)
}