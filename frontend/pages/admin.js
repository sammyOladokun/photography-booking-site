import Head from 'next/head'
import { useEffect, useMemo, useState } from 'react'
import { useRouter } from 'next/router'
import Header from '../components/Header'
import { clearAuthSession, getAuthSession } from '../lib/auth'

const dashboardStats = [
  { label: 'Bookings', value: '18' },
  { label: 'Active clients', value: '29' },
  { label: 'Open invoices', value: '07' },
  { label: 'Portal tasks', value: '04' },
]

const roleRows = [
  { name: 'Sammy Oladokun', role: 'Admin', status: 'Active' },
  { name: 'Studio Lead', role: 'Photographer', status: 'Active' },
  { name: 'Client A', role: 'Client', status: 'Pending delivery' },
  { name: 'Client B', role: 'Client', status: 'Gallery approved' },
]

const bookingRows = [
  { session: 'Portrait Session', client: 'A. Johnson', state: 'Needs approval' },
  { session: 'Editorial Shoot', client: 'M. Turner', state: 'Awaiting payment' },
  { session: 'Campaign Production', client: 'Brand Team', state: 'Confirmed' },
]

const initialPhotographers = [
  { id: 'photo-1', name: 'Studio Lead', email: 'lead@liviablake.com', status: 'Active' },
  { id: 'photo-2', name: 'Editorial Assistant', email: 'editorial@liviablake.com', status: 'Active' },
]

export default function AdminPortalPage() {
  const router = useRouter()
  const [photographers, setPhotographers] = useState(initialPhotographers)
  const [newPhotographer, setNewPhotographer] = useState({ name: '', email: '' })

  useEffect(() => {
    const session = getAuthSession()
    if (!session || session.role !== 'admin') {
      router.replace('/login')
    }
  }, [router])

  const adminStats = useMemo(
    () => [
      ...dashboardStats,
      { label: 'Photographers', value: String(photographers.length) },
    ],
    [photographers.length],
  )

  function createPhotographer(event) {
    event.preventDefault()

    if (!newPhotographer.name.trim() || !newPhotographer.email.trim()) return

    setPhotographers((current) => [
      {
        id: `photo-${Date.now()}`,
        name: newPhotographer.name.trim(),
        email: newPhotographer.email.trim(),
        status: 'Active',
      },
      ...current,
    ])

    setNewPhotographer({ name: '', email: '' })
  }

  function deletePhotographer(photographerId) {
    setPhotographers((current) => current.filter((photographer) => photographer.id !== photographerId))
  }

  function handleSignOut() {
    clearAuthSession()
    router.push('/login')
  }

  return (
    <>
      <Head>
        <title>Admin Portal — Livia Blake Photography</title>
        <meta
          name="description"
          content="Admin portal for managing users, bookings, payments, and studio settings."
        />
      </Head>

      <main style={styles.page}>
        <section style={styles.hero}>
          <Header showBookButton={false} compact />

          <div style={styles.heroContent}>
            <p style={styles.kicker}>Admin portal</p>
            <h1 style={styles.title}>STUDIO CONTROL</h1>
            <p style={styles.lede}>
              Oversee users, bookings, payments, and portal settings from one calm, simple dashboard.
            </p>
            <button type="button" onClick={handleSignOut} style={styles.signOutButton}>
              Sign out
            </button>
          </div>
        </section>

        <section style={styles.section}>
          <div style={styles.sectionHeader}>
            <p style={styles.sectionKicker}>Dashboard</p>
            <h2 style={styles.sectionTitle}>Studio overview</h2>
          </div>

          <div className="admin-stats-grid" style={styles.statsGrid}>
            {adminStats.map((stat) => (
              <article key={stat.label} style={styles.statCard}>
                <p style={styles.statValue}>{stat.value}</p>
                <p style={styles.statLabel}>{stat.label}</p>
              </article>
            ))}
          </div>
        </section>

        <section style={styles.section}>
          <div style={styles.sectionHeader}>
            <p style={styles.sectionKicker}>Bookings</p>
            <h2 style={styles.sectionTitle}>Approval queue</h2>
          </div>

          <div style={styles.queueCard}>
            {bookingRows.map((booking) => (
              <div key={`${booking.session}-${booking.client}`} style={styles.queueRow}>
                <div>
                  <p style={styles.queueLabel}>{booking.session}</p>
                  <p style={styles.queueCopy}>{booking.client}</p>
                </div>
                <span style={styles.queueState}>{booking.state}</span>
              </div>
            ))}
          </div>
        </section>

        <section style={styles.section}>
          <div style={styles.sectionHeader}>
            <p style={styles.sectionKicker}>Photographers</p>
            <h2 style={styles.sectionTitle}>Create or remove access</h2>
          </div>

          <div style={styles.photographerLayout}>
            <form onSubmit={createPhotographer} style={styles.formCard}>
              <label style={styles.field}>
                <span style={styles.fieldLabel}>Name</span>
                <input
                  value={newPhotographer.name}
                  onChange={(event) =>
                    setNewPhotographer((current) => ({ ...current, name: event.target.value }))
                  }
                  style={styles.input}
                  placeholder="New photographer"
                />
              </label>

              <label style={styles.field}>
                <span style={styles.fieldLabel}>Email</span>
                <input
                  value={newPhotographer.email}
                  onChange={(event) =>
                    setNewPhotographer((current) => ({ ...current, email: event.target.value }))
                  }
                  style={styles.input}
                  placeholder="name@studio.com"
                  type="email"
                />
              </label>

              <button type="submit" style={styles.primaryButton}>
                Create photographer
              </button>
            </form>

            <div style={styles.photographerList}>
              {photographers.map((photographer) => (
                <article key={photographer.id} style={styles.photographerRow}>
                  <div>
                    <h3 style={styles.photographerName}>{photographer.name}</h3>
                    <p style={styles.photographerEmail}>{photographer.email}</p>
                  </div>
                  <div style={styles.photographerActions}>
                    <span style={styles.photographerStatus}>{photographer.status}</span>
                    <button type="button" style={styles.secondaryButton}>
                      Disable
                    </button>
                    <button type="button" style={styles.secondaryButton} onClick={() => deletePhotographer(photographer.id)}>
                      Delete
                    </button>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section style={styles.section}>
          <div style={styles.sectionHeader}>
            <p style={styles.sectionKicker}>Users</p>
            <h2 style={styles.sectionTitle}>Roles and access</h2>
          </div>

          <div style={styles.tableCard}>
            <div style={styles.tableHead}>
              <span>Name</span>
              <span>Role</span>
              <span>Status</span>
            </div>
            {roleRows.map((row) => (
              <div key={`${row.name}-${row.role}`} style={styles.tableRow}>
                <span>{row.name}</span>
                <span>{row.role}</span>
                <span>{row.status}</span>
              </div>
            ))}
          </div>
        </section>

        <section style={styles.section}>
          <div style={styles.sectionHeader}>
            <p style={styles.sectionKicker}>Settings</p>
            <h2 style={styles.sectionTitle}>Core controls</h2>
          </div>

          <div className="admin-settings-grid" style={styles.settingsGrid}>
            <article style={styles.settingsCard}>
              <h3 style={styles.settingsTitle}>Branding</h3>
              <p style={styles.settingsCopy}>Logo, theme, gallery presentation, and email style.</p>
            </article>
            <article style={styles.settingsCard}>
              <h3 style={styles.settingsTitle}>Payments</h3>
              <p style={styles.settingsCopy}>Deposits, invoices, refund handling, and payment status.</p>
            </article>
            <article style={styles.settingsCard}>
              <h3 style={styles.settingsTitle}>Media</h3>
              <p style={styles.settingsCopy}>Proof uploads, final gallery delivery, and file access rules.</p>
            </article>
          </div>
        </section>
      </main>

      <style jsx global>{`
        html, body {
          background: #0a0a0a;
        }

        @media (max-width: 900px) {
          .admin-stats-grid,
          .admin-settings-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
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
    minHeight: '68vh',
    padding: '120px 32px 64px',
    background:
      'linear-gradient(180deg, rgba(0,0,0,0.2) 0%, rgba(10,10,10,0.82) 100%), url(/images/about/hero-about.jpeg) center/cover no-repeat',
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
  signOutButton: {
    margin: '28px auto 0',
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 999,
    border: '1px solid rgba(255,255,255,0.14)',
    background: 'transparent',
    color: '#f7f2eb',
    padding: '11px 16px',
    letterSpacing: 2,
    textTransform: 'uppercase',
    fontSize: 11,
  },
  section: {
    padding: '0 32px 56px',
  },
  sectionHeader: {
    maxWidth: 1180,
    margin: '0 auto 24px',
  },
  sectionKicker: {
    fontSize: 11,
    letterSpacing: 3,
    textTransform: 'uppercase',
    color: '#bfb7ad',
    marginBottom: 10,
  },
  sectionTitle: {
    fontSize: 'clamp(32px, 4vw, 54px)',
    fontWeight: 300,
    lineHeight: 1,
  },
  statsGrid: {
    maxWidth: 1180,
    margin: '0 auto',
    display: 'grid',
    gridTemplateColumns: 'repeat(4, minmax(0, 1fr))',
    gap: 16,
  },
  statCard: {
    background: 'transparent',
    borderTop: '1px solid rgba(255,255,255,0.1)',
    padding: '20px 0 0',
  },
  statValue: {
    fontSize: 40,
    lineHeight: 1,
    marginBottom: 10,
  },
  statLabel: {
    fontSize: 12,
    letterSpacing: 1.6,
    textTransform: 'uppercase',
    color: '#b7ada1',
  },
  queueCard: {
    maxWidth: 1180,
    margin: '0 auto',
    display: 'grid',
    gap: 12,
    background: 'transparent',
    borderTop: '1px solid rgba(255,255,255,0.1)',
    padding: '22px 0 0',
  },
  queueRow: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    gap: 18,
    padding: '14px 16px',
    borderRadius: 14,
    background: 'transparent',
    border: '1px solid rgba(255,255,255,0.08)',
  },
  queueLabel: {
    fontSize: 18,
    fontWeight: 300,
    marginBottom: 6,
  },
  queueCopy: {
    fontSize: 13,
    color: '#d8d1c8',
  },
  queueState: {
    fontSize: 11,
    letterSpacing: 1.4,
    textTransform: 'uppercase',
    color: '#f4f0ea',
    border: '1px solid rgba(255,255,255,0.12)',
    padding: '8px 12px',
    borderRadius: 999,
    whiteSpace: 'nowrap',
  },
  tableCard: {
    maxWidth: 1180,
    margin: '0 auto',
    background: 'transparent',
    borderTop: '1px solid rgba(255,255,255,0.1)',
  },
  tableHead: {
    display: 'grid',
    gridTemplateColumns: '1.5fr 1fr 1fr',
    gap: 16,
    padding: '16px 20px',
    fontSize: 11,
    letterSpacing: 1.8,
    textTransform: 'uppercase',
    color: '#b7ada1',
    borderBottom: '1px solid rgba(255,255,255,0.08)',
  },
  tableRow: {
    display: 'grid',
    gridTemplateColumns: '1.5fr 1fr 1fr',
    gap: 16,
    padding: '16px 20px',
    borderBottom: '1px solid rgba(255,255,255,0.06)',
    fontSize: 14,
  },
  settingsGrid: {
    maxWidth: 1180,
    margin: '0 auto',
    display: 'grid',
    gridTemplateColumns: 'repeat(3, minmax(0, 1fr))',
    gap: 16,
  },
  settingsCard: {
    background: 'transparent',
    borderTop: '1px solid rgba(255,255,255,0.1)',
    padding: '20px 0 0',
  },
  settingsTitle: {
    fontSize: 22,
    fontWeight: 300,
    marginBottom: 10,
  },
  settingsCopy: {
    fontSize: 14,
    lineHeight: 1.7,
    color: '#d8d1c8',
  },
  photographerLayout: {
    maxWidth: 1180,
    margin: '0 auto',
    display: 'grid',
    gridTemplateColumns: '0.85fr 1.15fr',
    gap: 18,
    alignItems: 'start',
  },
  formCard: {
    display: 'grid',
    gap: 14,
    padding: '18px 0 0',
    borderTop: '1px solid rgba(255,255,255,0.1)',
  },
  field: {
    display: 'grid',
    gap: 10,
  },
  fieldLabel: {
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
    padding: '10px 0 14px',
    fontSize: 15,
    outline: 'none',
  },
  primaryButton: {
    width: 'fit-content',
    borderRadius: 999,
    border: '1px solid rgba(255,255,255,0.14)',
    background: '#f4f0ea',
    color: '#0a0a0a',
    padding: '12px 16px',
    letterSpacing: 2,
    textTransform: 'uppercase',
    fontSize: 11,
  },
  photographerList: {
    display: 'grid',
    gap: 12,
  },
  photographerRow: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    gap: 16,
    padding: '16px 0',
    borderTop: '1px solid rgba(255,255,255,0.1)',
  },
  photographerName: {
    fontSize: 22,
    fontWeight: 300,
    marginBottom: 6,
  },
  photographerEmail: {
    fontSize: 13,
    color: '#d8d1c8',
  },
  photographerActions: {
    display: 'flex',
    alignItems: 'center',
    gap: 10,
    flexWrap: 'wrap',
    justifyContent: 'flex-end',
  },
  photographerStatus: {
    fontSize: 11,
    letterSpacing: 1.4,
    textTransform: 'uppercase',
    color: '#b7ada1',
    border: '1px solid rgba(255,255,255,0.12)',
    padding: '8px 12px',
    borderRadius: 999,
  },
  secondaryButton: {
    borderRadius: 999,
    border: '1px solid rgba(255,255,255,0.12)',
    background: 'transparent',
    color: '#f7f2eb',
    padding: '10px 14px',
    fontSize: 11,
    letterSpacing: 1.4,
    textTransform: 'uppercase',
  },
}
