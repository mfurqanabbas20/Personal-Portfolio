import { Resend } from 'resend'

// Where contact messages are delivered, and which verified sender they come from.
// `onboarding@resend.dev` works without domain verification as long as the
// recipient is the email that owns the Resend account.
const CONTACT_TO = process.env.CONTACT_TO || 'mfurqanabbas20@gmail.com'
const CONTACT_FROM = process.env.CONTACT_FROM || 'Portfolio Contact <onboarding@resend.dev>'

const isEmail = (value) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)

const escapeHtml = (str = '') =>
  String(str)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;')

// Framework-agnostic core. Takes the parsed request body, returns
// { statusCode, body } so it can be reused by the Vercel function and the
// local Vite dev middleware alike.
export async function handleContact(data = {}) {
  const { fullname, email, subject, message } = data

  if (!fullname || !email || !subject || !message) {
    return { statusCode: 400, body: { success: false, error: 'All fields are required.' } }
  }
  if (!isEmail(email)) {
    return { statusCode: 400, body: { success: false, error: 'Please provide a valid email address.' } }
  }

  if (!process.env.RESEND_KEY) {
    console.error('RESEND_KEY is not set in the environment.')
    return { statusCode: 500, body: { success: false, error: 'Email service is not configured.' } }
  }

  const resend = new Resend(process.env.RESEND_KEY)

  try {
    const { data: result, error } = await resend.emails.send({
      from: CONTACT_FROM,
      to: [CONTACT_TO],
      replyTo: email,
      subject: `New portfolio message: ${subject}`,
      html: `
        <div style="font-family: Arial, Helvetica, sans-serif; max-width: 600px; margin: 0 auto; background: #1c1917; color: #ffffff; border-radius: 12px; overflow: hidden;">
          <div style="background: #15803d; padding: 20px 24px;">
            <h2 style="margin: 0; font-size: 18px;">📬 New message from your portfolio</h2>
          </div>
          <div style="padding: 24px;">
            <p style="margin: 0 0 6px; color: #a3a3a3; font-size: 13px;">From</p>
            <p style="margin: 0 0 16px; font-size: 16px; font-weight: bold;">${escapeHtml(fullname)} &lt;${escapeHtml(email)}&gt;</p>
            <p style="margin: 0 0 6px; color: #a3a3a3; font-size: 13px;">Subject</p>
            <p style="margin: 0 0 16px; font-size: 16px;">${escapeHtml(subject)}</p>
            <p style="margin: 0 0 6px; color: #a3a3a3; font-size: 13px;">Message</p>
            <div style="background: #292524; border-radius: 8px; padding: 16px; font-size: 15px; line-height: 1.6; white-space: pre-wrap;">${escapeHtml(message)}</div>
          </div>
          <div style="padding: 12px 24px; background: #292524; color: #737373; font-size: 12px; text-align: center;">
            Reply directly to this email to respond to ${escapeHtml(fullname)}.
          </div>
        </div>
      `,
    })

    if (error) {
      console.error('Resend error:', error)
      return { statusCode: 502, body: { success: false, error: 'Email service failed to send the message.' } }
    }

    return { statusCode: 200, body: { success: true, id: result?.id } }
  } catch (err) {
    console.error('Unexpected error:', err)
    return { statusCode: 500, body: { success: false, error: 'Something went wrong while sending the message.' } }
  }
}
