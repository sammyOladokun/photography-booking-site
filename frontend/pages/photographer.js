import Head from 'next/head'
import { useEffect } from 'react'
import { useRouter } from 'next/router'
import Header from '../components/Header'
import { clearAuthSession, getAuthSession } from '../lib/auth'

const dashboardStats = [
  { label: 'Upcoming shoots', value: '06' },
  { label: 'Proof batches', value: '12' },
  { label: 'Edits queued', value: '08' },
  { label: 'Delivered', value: '24' },
]

const workflowSteps = [
  'Confirm availability',
  'Upload unedited proofs',
  'Review client selections',
  'Edit and deliver finals',
]

const bookings = [
  {
    time: '09:00',
    title: 'Signature Portrait Session',
    client: 'A. Johnson',
    status: 'Confirmed',
  },
  {
    time: '13:30',
    title: 'Editorial Fashion Story',
    client: 'M. Turner',
    status: 'Awaiting proof upload',
  },
  {
    time: '16:00',
    title: 'Luxury Campaign Production',
    client: 'Studio brief',
    status: 'Editing in progress',
  },
]

const proofBatches = [
  {
    title: 'Downtown set',
    image: '/images/portfolio/feature-1.jpeg',
    status: 'Ready for client review',
  },
  {
    title: 'Studio portrait set',
    image: '/images/about/bio-1.jpeg',
    status: 'Marked for editing',
  },
  {
    title: 'Editorial location set',
    image: '/images/packages/hero-closeup.jpeg',
    status: 'Waiting on selection',
  },
]

export default function PhotographerPortalPage() {
  const router = useRouter()

  useEffect(() => {
    const session = getAuthSession()
    if (!session || session.role !== 'photographer') {
      router.replace('/login')
    }
  }, [router])

  function handleSignOut() {
    clearAuthSession()
    router.push('/login')
  }

  return (
    <>
      <Head>
        <title>Photographer Portal — Livia Blake Photography</title>
        <meta
          name="description"
          content="Photographer portal with bookings, proof uploads, client selections, and editing workflow."
        />
      </Head>

      <main style={styles.page}>
        <section style={styles.hero}>
          <Header showBookButton={false} compact />

          <div style={styles.heroContent}>
            <p style={styles.kicker}>Photographer portal</p>
            <h1 style={styles.title}>STUDIO CONTROL</h1>
            <p style={styles.lede}>
              Keep shoots, proofs, edits, and deliveries moving in one simple workspace.
            </p>
            <button type="button" onClick={handleSignOut} style={styles.signOutButton}>
              Sign out
            </button>
          </div>
        </section>

        <section style={styles.section}>
          <div style={styles.sectionHeader}>
            <p style={styles.sectionKicker}>Dashboard</p>
            <h2 style={styles.sectionTitle}>Daily overview</h2>
          </div>

          <div className="portal-stats-grid" style={styles.statsGrid}>
            {dashboardStats.map((stat) => (
              <article key={stat.label} style={styles.statCard}>
                <p style={styles.statValue}>{stat.value}</p>
                <p style={styles.statLabel}>{stat.label}</p>
              </article>
            ))}
          </div>
        </section>

        <section style={styles.section}>
          <div style={styles.sectionHeader}>
            <p style={styles.sectionKicker}>Workflow</p>
            <h2 style={styles.sectionTitle}>Session pipeline</h2>
          </div>

          <div style={styles.workflowCard}>
            {workflowSteps.map((step, index) => (
              <div key={step} style={styles.workflowStep}>
                <span style={styles.workflowIndex}>0{index + 1}</span>
                <span style={styles.workflowText}>{step}</span>
              </div>
            ))}
          </div>
        </section>

        <section style={styles.section}>
          <div style={styles.sectionHeader}>
            <p style={styles.sectionKicker}>Bookings</p>
            <h2 style={styles.sectionTitle}>Today’s sessions</h2>
          </div>

          <div className="portal-booking-grid" style={styles.bookingGrid}>
            {bookings.map((booking) => (
              <article key={`${booking.time}-${booking.title}`} style={styles.bookingCard}>
                <p style={styles.bookingTime}>{booking.time}</p>
                <h3 style={styles.bookingTitle}>{booking.title}</h3>
                <p style={styles.bookingClient}>{booking.client}</p>
                <span style={styles.bookingStatus}>{booking.status}</span>
              </article>
            ))}
          </div>
        </section>

        <section style={styles.section}>
          <div style={styles.sectionHeader}>
            <p style={styles.sectionKicker}>Proof Uploads</p>
            <h2 style={styles.sectionTitle}>Unedited selects for client review</h2>
          </div>

          <div className="portal-proof-grid" style={styles.proofGrid}>
            {proofBatches.map((batch) => (
              <article key={batch.title} style={styles.proofCard}>
                <img src={batch.image} alt={batch.title} style={styles.proofImage} />
                <div style={styles.proofBody}>
                  <div>
                    <h3 style={styles.proofTitle}>{batch.title}</h3>
                    <p style={styles.proofCopy}>{batch.status}</p>
                  </div>
                  <div style={styles.actionRow}>
                    <button type="button" style={styles.actionButton}>Upload</button>
                    <button type="button" style={styles.actionButton}>Send</button>
                    <button type="button" style={styles.actionButton}>Archive</button>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>
      </main>

      <style jsx global>{`
        html, body {
          background: #0a0a0a;
        }

        @media (max-width: 900px) {
          .portal-stats-grid,
          .portal-booking-grid,
          .portal-proof-grid {
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
      'linear-gradient(180deg, rgba(0,0,0,0.22) 0%, rgba(10,10,10,0.8) 100%), url(/images/portfolio/feature-2.jpeg) center/cover no-repeat',
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
  workflowCard: {
    maxWidth: 1180,
    margin: '0 auto',
    display: 'grid',
    gap: 12,
    background: 'transparent',
    borderTop: '1px solid rgba(255,255,255,0.1)',
    padding: '22px 0 0',
  },
  workflowStep: {
    display: 'flex',
    alignItems: 'center',
    gap: 14,
    padding: '14px 16px',
    borderRadius: 14,
    background: 'transparent',
    border: '1px solid rgba(255,255,255,0.08)',
  },
  workflowIndex: {
    fontSize: 11,
    letterSpacing: 2,
    color: '#b7ada1',
    minWidth: 28,
  },
  workflowText: {
    fontSize: 14,
    letterSpacing: 0.8,
    textTransform: 'uppercase',
  },
  bookingGrid: {
    maxWidth: 1180,
    margin: '0 auto',
    display: 'grid',
    gridTemplateColumns: 'repeat(3, minmax(0, 1fr))',
    gap: 16,
  },
  bookingCard: {
    background: 'transparent',
    borderTop: '1px solid rgba(255,255,255,0.1)',
    padding: 22,
  },
  bookingTime: {
    fontSize: 12,
    letterSpacing: 2,
    textTransform: 'uppercase',
    color: '#b7ada1',
    marginBottom: 12,
  },
  bookingTitle: {
    fontSize: 22,
    fontWeight: 300,
    marginBottom: 8,
  },
  bookingClient: {
    fontSize: 14,
    color: '#d8d1c8',
    marginBottom: 16,
  },
  bookingStatus: {
    display: 'inline-flex',
    alignItems: 'center',
    padding: '8px 12px',
    borderRadius: 999,
    background: 'rgba(244,240,234,0.08)',
    border: '1px solid rgba(255,255,255,0.08)',
    fontSize: 11,
    letterSpacing: 1.2,
    textTransform: 'uppercase',
  },
  proofGrid: {
    maxWidth: 1180,
    margin: '0 auto',
    display: 'grid',
    gridTemplateColumns: 'repeat(3, minmax(0, 1fr))',
    gap: 18,
  },
  proofCard: {
    background: 'transparent',
    borderTop: '1px solid rgba(255,255,255,0.1)',
    paddingTop: 16,
  },
  proofImage: {
    width: '100%',
    aspectRatio: '4 / 5',
    objectFit: 'cover',
    display: 'block',
  },
  proofBody: {
    padding: '18px 0 0',
    display: 'grid',
    gap: 16,
  },
  proofTitle: {
    fontSize: 20,
    fontWeight: 300,
    marginBottom: 8,
  },
  proofCopy: {
    fontSize: 14,
    lineHeight: 1.6,
    color: '#d8d1c8',
  },
  actionRow: {
    display: 'flex',
    flexWrap: 'wrap',
    gap: 10,
  },
  actionButton: {
    border: '1px solid rgba(255,255,255,0.14)',
    background: 'rgba(255,255,255,0.03)',
    color: '#f7f2eb',
    borderRadius: 999,
    padding: '10px 14px',
    fontSize: 12,
    letterSpacing: 1.1,
  },
}
