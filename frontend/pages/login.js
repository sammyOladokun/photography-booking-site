import Head from 'next/head'
import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import Header from '../components/Header'

const roleCredentials = {
  admin: {
    label: 'Admin',
    username: 'admin@liviablake.com',
    password: 'Admin2026!',
    redirectTo: '/admin',
  },
  photographer: {
    label: 'Photographer',
    username: 'photographer@liviablake.com',
    password: 'Photo2026!',
    redirectTo: '/photographer',
  },
  client: {
    label: 'Client',
    username: 'client@liviablake.com',
    password: 'Client2026!',
    redirectTo: '/client',
  },
}

export default function LoginPage() {
  const router = useRouter()
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [message, setMessage] = useState('')
  const [hydrated, setHydrated] = useState(false)

  useEffect(() => {
    setHydrated(true)
    const savedRole = window.localStorage.getItem('lb-role')
    const savedToken = window.localStorage.getItem('lb-token')
    if (savedRole && savedToken) {
      const destination = roleCredentials[savedRole]?.redirectTo
      if (destination) router.replace(destination)
    }
  }, [router])

  function handleSubmit(event) {
    event.preventDefault()

    const normalizedUsername = username.trim().toLowerCase()
    const matchedRole = Object.entries(roleCredentials).find(
      ([, credentials]) => credentials.username.toLowerCase() === normalizedUsername,
    )

    if (!matchedRole) {
      setMessage('That email is not registered.')
      return
    }

    const [role, credentials] = matchedRole

    if (password !== credentials.password) {
      setMessage('That password is not correct.')
      return
    }

    window.localStorage.setItem('lb-role', role)
    window.localStorage.setItem('lb-token', `${role}:${Date.now()}`)
    window.localStorage.setItem('lb-username', username.trim())
    router.push(credentials.redirectTo)
  }

  return (
    <>
      <Head>
        <title>Login — Livia Blake Photography</title>
        <meta name="description" content="Role-based login for client, photographer, and admin portals." />
      </Head>

      <main style={styles.page}>
        <section style={styles.hero}>
          <Header showBookButton={false} compact />
          <div style={styles.heroContent}>
            <p style={styles.kicker}>Secure login</p>
            <h1 style={styles.title}>ACCESS YOUR PORTAL</h1>
            <p style={styles.lede}>
              Sign in with your email and password. The system will route you to the correct portal automatically.
            </p>
          </div>
        </section>

        <section style={styles.formSection}>
          <form onSubmit={handleSubmit} style={styles.card}>
            <label style={styles.field}>
              <span style={styles.label}>Username / Email</span>
              <input
                value={username}
                onChange={(event) => setUsername(event.target.value)}
                style={styles.input}
                placeholder="name@liviablake.com"
                autoComplete="username"
              />
            </label>

            <label style={styles.field}>
              <span style={styles.label}>Password</span>
              <input
                value={password}
                onChange={(event) => setPassword(event.target.value)}
                style={styles.input}
                type="password"
                placeholder="Enter your password"
                autoComplete="current-password"
              />
            </label>

            <div style={styles.note}>
              <p style={styles.noteTitle}>Demo credentials</p>
              <p style={styles.noteCopy}>Use the listed credentials below each role to enter the matching portal.</p>
            </div>

            {message ? <p style={styles.error}>{message}</p> : null}

            <button type="submit" style={styles.button}>
              Sign in
            </button>

            {hydrated ? (
              <div style={styles.credentialList}>
                {Object.entries(roleCredentials).map(([key, credentials]) => (
                  <div key={key} style={styles.credentialItem}>
                    <span style={styles.credentialRole}>{credentials.label}</span>
                    <span style={styles.credentialText}>{credentials.username}</span>
                    <span style={styles.credentialText}>{credentials.password}</span>
                  </div>
                ))}
              </div>
            ) : null}
          </form>
        </section>
      </main>
    </>
  )
}

const styles = {
  page: {
    minHeight: '100vh',
    background: '#0a0a0a',
    color: '#f7f2eb',
  },
  hero: {
    minHeight: '54vh',
    padding: '120px 32px 60px',
    background:
      'linear-gradient(180deg, rgba(0,0,0,0.2) 0%, rgba(10,10,10,0.82) 100%), url(/images/packages/hero-closeup.jpeg) center/cover no-repeat',
  },
  heroContent: {
    maxWidth: 760,
    margin: '0 auto',
    textAlign: 'center',
  },
  kicker: {
    fontSize: 11,
    letterSpacing: 3,
    textTransform: 'uppercase',
    color: '#d0c5b8',
    marginBottom: 18,
  },
  title: {
    fontSize: 'clamp(52px, 7vw, 92px)',
    lineHeight: 0.92,
    margin: 0,
  },
  lede: {
    margin: '20px auto 0',
    maxWidth: 620,
    fontSize: 20,
    lineHeight: 1.6,
    color: '#e7dfd6',
  },
  formSection: {
    padding: '0 32px 64px',
  },
  card: {
    maxWidth: 640,
    margin: '0 auto',
    padding: '24px 0 0',
    borderTop: '1px solid rgba(255,255,255,0.1)',
    display: 'grid',
    gap: 16,
  },
  field: {
    display: 'grid',
    gap: 10,
  },
  label: {
    fontSize: 11,
    letterSpacing: 2,
    textTransform: 'uppercase',
    color: '#b7ada1',
  },
  input: {
    width: '100%',
    background: 'transparent',
    border: 'none',
    borderBottom: '1px solid rgba(255,255,255,0.2)',
    color: '#f7f2eb',
    padding: '12px 0 14px',
    fontSize: 15,
    outline: 'none',
  },
  note: {
    border: '1px solid rgba(255,255,255,0.08)',
    borderRadius: 18,
    padding: 18,
    background: 'rgba(255,255,255,0.03)',
  },
  noteTitle: {
    fontSize: 12,
    letterSpacing: 2,
    textTransform: 'uppercase',
    marginBottom: 8,
    color: '#d8d1c8',
  },
  noteCopy: {
    fontSize: 14,
    lineHeight: 1.6,
    color: '#cfc5ba',
  },
  error: {
    color: '#f0b6b6',
    fontSize: 14,
  },
  button: {
    width: 'fit-content',
    borderRadius: 999,
    border: '1px solid rgba(255,255,255,0.14)',
    background: '#f4f0ea',
    color: '#0a0a0a',
    padding: '12px 18px',
    letterSpacing: 2,
    textTransform: 'uppercase',
    fontSize: 11,
  },
  credentialList: {
    display: 'grid',
    gap: 12,
    marginTop: 8,
  },
  credentialItem: {
    display: 'grid',
    gap: 4,
    padding: '14px 0',
    borderTop: '1px solid rgba(255,255,255,0.08)',
  },
  credentialRole: {
    fontSize: 11,
    letterSpacing: 2,
    textTransform: 'uppercase',
    color: '#d0c5b8',
  },
  credentialText: {
    fontSize: 14,
    color: '#efe8df',
  },
}
