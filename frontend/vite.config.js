import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import { handleContact } from './api/_handler.js'

// In production the `api/contact.js` serverless function handles /api/contact.
// Vite's dev server doesn't run serverless functions, so this plugin wires the
// same handler into the dev server so `npm run dev` behaves like production.
function devApiPlugin() {
  return {
    name: 'dev-contact-api',
    configureServer(server) {
      server.middlewares.use('/api/contact', (req, res, next) => {
        if (req.method !== 'POST') return next()
        let raw = ''
        req.on('data', (chunk) => {
          raw += chunk
        })
        req.on('end', async () => {
          let body = {}
          try {
            body = raw ? JSON.parse(raw) : {}
          } catch {
            body = {}
          }
          const { statusCode, body: payload } = await handleContact(body)
          res.statusCode = statusCode
          res.setHeader('Content-Type', 'application/json')
          res.end(JSON.stringify(payload))
        })
      })
    },
  }
}

// https://vite.dev/config/
export default defineConfig(({ mode }) => {
  // Load every var from .env (not just VITE_*) so the server-only RESEND_KEY is
  // available to the dev middleware. It is read via process.env on the server
  // and is NEVER inlined into the client bundle (only VITE_* vars are exposed).
  const env = loadEnv(mode, process.cwd(), '')
  for (const key of ['RESEND_KEY', 'CONTACT_TO', 'CONTACT_FROM']) {
    if (env[key]) process.env[key] = env[key]
  }

  return {
    plugins: [react(), tailwindcss(), devApiPlugin()],
  }
})
