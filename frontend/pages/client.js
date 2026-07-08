import Head from 'next/head'
import { useEffect, useMemo, useState } from 'react'
import { useRouter } from 'next/router'
import Header from '../components/Header'
import { clearAuthSession, getAuthSession } from '../lib/auth'

const initialProofs = [
  {
    id: 'proof-1',
    title: 'Studio Light 01',
    image: '/images/portfolio/grid-1.jpeg',
    status: 'pending',
    comment: '',
  },
  {
    id: 'proof-2',
    title: 'Editorial Frame 02',
    image: '/images/portfolio/grid-2.jpeg',
    status: 'pending',
    comment: '',
  },
  {
    id: 'proof-3',
    title: 'Location Detail 03',
    image: '/images/portfolio/grid-3.jpeg',
    status: 'pending',
    comment: '',
  },
  {
    id: 'proof-4',
    title: 'Portrait Select 04',
    image: '/images/about/bio-1.jpeg',
    status: 'pending',
    comment: '',
  },
  {
    id: 'proof-5',
    title: 'Portrait Select 05',
    image: '/images/about/bio-2.jpeg',
    status: 'pending',
    comment: '',
  },
  {
    id: 'proof-6',
    title: 'Final Direction 06',
    image: '/images/packages/hero-closeup.jpeg',
    status: 'pending',
    comment: '',
  },
]

const sessionStages = [
  'Inquiry received',
  'Booking confirmed',
  'Proofing gallery open',
  'Editing in progress',
  'Final gallery ready',
]

const finalGallery = [
  {
    id: 'final-1',
    title: 'Final Portrait 01',
    image: '/images/about/bio-1.jpeg',
  },
  {
    id: 'final-2',
    title: 'Final Portrait 02',
    image: '/images/portfolio/grid-4.jpeg',
  },
  {
    id: 'final-3',
    title: 'Final Editorial 03',
    image: '/images/packages/hero-closeup.jpeg',
  },
]

export default function ClientPortalPage() {
  const router = useRouter()
  const [proofs, setProofs] = useState(initialProofs)

  useEffect(() => {
    const session = getAuthSession()
    if (!session || session.role !== 'client') {
      router.replace('/login')
    }
  }, [router])

  const dashboardStats = useMemo(() => {
    const favorites = proofs.filter((proof) => proof.status === 'favorite').length
    const approved = proofs.filter((proof) => proof.status === 'approved').length
    const rejected = proofs.filter((proof) => proof.status === 'rejected').length
    const needsReview = proofs.filter((proof) => proof.status === 'pending').length

    return [
      { label: 'Proofs', value: String(proofs.length) },
      { label: 'Favorites', value: String(favorites) },
      { label: 'Approved', value: String(approved) },
      { label: 'Needs review', value: String(needsReview + rejected) },
    ]
  }, [proofs])

  function updateProofStatus(proofId, nextStatus) {
    setProofs((currentProofs) =>
      currentProofs.map((proof) =>
        proof.id === proofId ? { ...proof, status: nextStatus } : proof,
      ),
    )
  }

  function updateComment(proofId, nextComment) {
    setProofs((currentProofs) =>
      currentProofs.map((proof) =>
        proof.id === proofId ? { ...proof, comment: nextComment } : proof,
      ),
    )
  }

  function handleSignOut() {
    clearAuthSession()
    router.push('/login')
  }

  return (
    <>
      <Head>
        <title>Client Portal — Livia Blake Photography</title>
        <meta
          name="description"
          content="Private client portal with dashboard, proofing gallery, selections, comments, and final downloads."
        />
      </Head>

      <main style={styles.page}>
        <section style={styles.hero}>
          <Header showBookButton={false} compact />

          <div style={styles.heroContent}>
            <p style={styles.kicker}>Private client portal</p>
            <h1 style={styles.title}>YOUR STUDIO SPACE</h1>
            <p style={styles.lede}>
              Track your session, review unedited proofs, mark favorites, leave comments, and download final edits.
            </p>
            <button type="button" onClick={handleSignOut} style={styles.signOutButton}>
              Sign out
            </button>
          </div>
        </section>

        <section style={styles.dashboardSection}>
          <div style={styles.sectionHeader}>
            <p style={styles.sectionKicker}>Dashboard</p>
            <h2 style={styles.sectionTitle}>Session overview</h2>
          </div>

          <div className="client-dashboard-grid" style={styles.statsGrid}>
            {dashboardStats.map((stat) => (
              <article key={stat.label} style={styles.statCard}>
                <p style={styles.statValue}>{stat.value}</p>
                <p style={styles.statLabel}>{stat.label}</p>
              </article>
            ))}
          </div>

          <div className="client-status-card" style={styles.statusCard}>
            <div>
              <p style={styles.statusLabel}>Current status</p>
              <h3 style={styles.statusTitle}>Proofing gallery open</h3>
              <p style={styles.statusCopy}>
                Your unedited selects are ready for review. Mark favorites, approve the ones you want edited, or reject any you do not want to keep.
              </p>
            </div>

            <div style={styles.stageList}>
              {sessionStages.map((stage, index) => (
                <div
                  key={stage}
                  style={{
                    ...styles.stageItem,
                    ...(index === 2 ? styles.stageItemActive : {}),
                  }}
                >
                  <span style={styles.stageIndex}>0{index + 1}</span>
                  <span style={styles.stageText}>{stage}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section style={styles.proofingSection}>
          <div style={styles.sectionHeader}>
            <p style={styles.sectionKicker}>Proofing Gallery</p>
            <h2 style={styles.sectionTitle}>Unedited selects</h2>
          </div>

          <div className="client-proof-grid" style={styles.proofGrid}>
            {proofs.map((proof) => (
              <article key={proof.id} style={styles.proofCard}>
                <div style={styles.proofImageWrap}>
                  <img src={proof.image} alt={proof.title} style={styles.proofImage} />
                  <span
                    style={{
                      ...styles.statusPill,
                      ...(proof.status === 'favorite'
                        ? styles.statusFavorite
                        : proof.status === 'approved'
                          ? styles.statusApproved
                          : proof.status === 'rejected'
                            ? styles.statusRejected
                            : styles.statusPending),
                    }}
                  >
                    {proof.status}
                  </span>
                </div>

                <div style={styles.proofBody}>
                  <div>
                    <h3 style={styles.proofTitle}>{proof.title}</h3>
                    <p style={styles.proofCopy}>Choose how you want this image handled in retouching.</p>
                  </div>

                  <div style={styles.actionRow}>
                    <button type="button" style={styles.actionButton} onClick={() => updateProofStatus(proof.id, 'favorite')}>
                      Favorite
                    </button>
                    <button type="button" style={styles.actionButton} onClick={() => updateProofStatus(proof.id, 'approved')}>
                      Approve
                    </button>
                    <button type="button" style={styles.actionButton} onClick={() => updateProofStatus(proof.id, 'rejected')}>
                      Reject
                    </button>
                  </div>

                  <label style={styles.commentField}>
                    <span style={styles.commentLabel}>Comment</span>
                    <textarea
                      rows={3}
                      value={proof.comment}
                      onChange={(event) => updateComment(proof.id, event.target.value)}
                      placeholder="Add a note for this image..."
                      style={styles.commentInput}
                    />
                  </label>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section style={styles.finalSection}>
          <div style={styles.sectionHeader}>
            <p style={styles.sectionKicker}>Final Gallery</p>
            <h2 style={styles.sectionTitle}>Edited images ready for download</h2>
          </div>

          <div className="client-final-grid" style={styles.finalGrid}>
            {finalGallery.map((item) => (
              <article key={item.id} style={styles.finalCard}>
                <img src={item.image} alt={item.title} style={styles.finalImage} />
                <div style={styles.finalBody}>
                  <div>
                    <h3 style={styles.finalTitle}>{item.title}</h3>
                    <p style={styles.finalCopy}>High-resolution final edit, ready for download and sharing.</p>
                  </div>
                  <a href={item.image} download style={styles.downloadButton}>
                    Download
                  </a>
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
          .client-dashboard-grid,
          .client-proof-grid,
          .client-final-grid,
          .client-status-card {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </>
  )
}

const styles = {
  page: {
    background: '#0a0a0a',
    color: '#f7f2eb',
    minHeight: '100vh',
  },
  hero: {
    position: 'relative',
    minHeight: '72vh',
    padding: '120px 32px 64px',
    background:
      'linear-gradient(180deg, rgba(0,0,0,0.25) 0%, rgba(10,10,10,0.74) 100%), url(/images/portfolio/feature-1.jpeg) center/cover no-repeat',
    overflow: 'hidden',
  },
  heroContent: {
    position: 'relative',
    zIndex: 2,
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
    letterSpacing: 1,
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
  dashboardSection: {
    padding: '56px 32px',
  },
  proofingSection: {
    padding: '0 32px 56px',
  },
  finalSection: {
    padding: '0 32px 80px',
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
  statusCard: {
    maxWidth: 1180,
    margin: '18px auto 0',
    display: 'grid',
    gridTemplateColumns: '1.1fr 0.9fr',
    gap: 24,
    background: 'transparent',
    borderTop: '1px solid rgba(255,255,255,0.1)',
    padding: '22px 0 0',
  },
  statusLabel: {
    fontSize: 11,
    letterSpacing: 3,
    textTransform: 'uppercase',
    color: '#b7ada1',
    marginBottom: 12,
  },
  statusTitle: {
    fontSize: 30,
    fontWeight: 300,
    marginBottom: 12,
  },
  statusCopy: {
    fontSize: 15,
    lineHeight: 1.75,
    color: '#d8d1c8',
    maxWidth: 560,
  },
  stageList: {
    display: 'grid',
    gap: 12,
    alignContent: 'start',
  },
  stageItem: {
    display: 'flex',
    alignItems: 'center',
    gap: 12,
    padding: '12px 14px',
    borderRadius: 14,
    border: '1px solid rgba(255,255,255,0.08)',
    background: 'transparent',
  },
  stageItemActive: {
    borderColor: 'rgba(244,240,234,0.25)',
    background: 'rgba(244,240,234,0.03)',
  },
  stageIndex: {
    fontSize: 11,
    letterSpacing: 2,
    color: '#b7ada1',
    minWidth: 28,
  },
  stageText: {
    fontSize: 13,
    letterSpacing: 0.8,
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
  proofImageWrap: {
    position: 'relative',
    aspectRatio: '4 / 5',
  },
  proofImage: {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
    display: 'block',
  },
  statusPill: {
    position: 'absolute',
    top: 14,
    left: 14,
    padding: '7px 11px',
    borderRadius: 999,
    fontSize: 10,
    letterSpacing: 1.2,
    textTransform: 'uppercase',
    background: 'rgba(0,0,0,0.45)',
    border: '1px solid rgba(255,255,255,0.18)',
  },
  statusPending: {
    color: '#f4f0ea',
  },
  statusFavorite: {
    color: '#f0c27b',
  },
  statusApproved: {
    color: '#9ed9b6',
  },
  statusRejected: {
    color: '#f09b9b',
  },
  proofBody: {
    display: 'grid',
    gap: 16,
    padding: '18px 0 0',
  },
  proofTitle: {
    fontSize: 22,
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
  commentField: {
    display: 'grid',
    gap: 10,
  },
  commentLabel: {
    fontSize: 11,
    letterSpacing: 2,
    textTransform: 'uppercase',
    color: '#b7ada1',
  },
  commentInput: {
    width: '100%',
    minHeight: 90,
    resize: 'vertical',
    borderRadius: 16,
    border: '1px solid rgba(255,255,255,0.12)',
    background: 'rgba(255,255,255,0.03)',
    color: '#f7f2eb',
    padding: 14,
    fontSize: 14,
    outline: 'none',
  },
  finalGrid: {
    maxWidth: 1180,
    margin: '0 auto',
    display: 'grid',
    gridTemplateColumns: 'repeat(3, minmax(0, 1fr))',
    gap: 18,
  },
  finalCard: {
    background: 'transparent',
    borderTop: '1px solid rgba(255,255,255,0.1)',
    paddingTop: 16,
  },
  finalImage: {
    width: '100%',
    aspectRatio: '4 / 5',
    objectFit: 'cover',
    display: 'block',
  },
  finalBody: {
    padding: '18px 0 0',
    display: 'grid',
    gap: 16,
  },
  finalTitle: {
    fontSize: 20,
    fontWeight: 300,
    marginBottom: 8,
  },
  finalCopy: {
    fontSize: 14,
    lineHeight: 1.6,
    color: '#d8d1c8',
  },
  downloadButton: {
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 999,
    border: '1px solid rgba(255,255,255,0.16)',
    background: '#f4f0ea',
    color: '#0b0b0b',
    padding: '12px 16px',
    letterSpacing: 2,
    textTransform: 'uppercase',
    fontSize: 11,
  },
}
