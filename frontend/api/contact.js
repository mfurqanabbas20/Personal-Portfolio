import { handleContact } from './_handler.js'

// Vercel serverless function — deployed automatically at /api/contact.
// Runs server-side, so process.env.RESEND_KEY is never shipped to the browser.
export default async function handler(req, res) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST')
    res.status(405).json({ success: false, error: 'Method not allowed' })
    return
  }

  // Vercel parses JSON bodies automatically, but guard against a raw string.
  let body = req.body
  if (typeof body === 'string') {
    try {
      body = JSON.parse(body)
    } catch {
      body = {}
    }
  }

  const { statusCode, body: payload } = await handleContact(body || {})
  res.status(statusCode).json(payload)
}
