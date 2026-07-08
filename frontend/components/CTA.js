import Link from 'next/link'

export default function CTA({ onBookClick }) {
  return (
    <section style={styles.section} className="home-cta">
      <div style={styles.container} className="home-cta-grid">
        <div style={styles.imageLeftWrapper} className="home-cta-image home-cta-image-left">
          <img
            src="/images/packages/package-portrait.jpeg"
            alt="Portrait package visual"
            style={styles.imageContent}
            onError={(e) => e.target.style.display = 'none'}
          />
        </div>
        <div style={styles.content} className="home-cta-content">
          <p style={styles.decor}>the</p>
          <h2 style={styles.title}>
            YOUR <em style={{fontStyle: 'italic'}}>next</em>
            <br />
            CAMPAIGN DESERVES
            <br />
            <em style={{fontStyle: 'italic', fontFamily: "'Pinyon Script', cursive", fontSize: 32, fontWeight: 400}}>high-end</em> VISUALS
          </h2>
          <Link href="/book" style={styles.button}>RESERVE YOUR SPOT</Link>
        </div>
        <div style={styles.imageRightWrapper} className="home-cta-image home-cta-image-right">
          <img
            src="/images/packages/package-branding.jpeg"
            alt="Branding package visual"
            style={styles.imageContent}
            onError={(e) => e.target.style.display = 'none'}
          />
        </div>
      </div>
    </section>
  )
}

const styles = {
  section: {
    background: '#f9f8f6',
    padding: '72px 0',
  },
  container: {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr 1fr',
    gap: 0,
    alignItems: 'stretch',
    maxWidth: 1280,
    margin: '0 auto',
  },
  imageLeftWrapper: {
    overflow: 'hidden',
    background: '#ddd',
    minHeight: 360,
  },
  imageRightWrapper: {
    overflow: 'hidden',
    background: '#ddd',
    minHeight: 360,
  },
  imageContent: {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
    objectPosition: 'center',
    display: 'block',
  },
  content: {
    textAlign: 'center',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '52px 38px',
    maxWidth: 360,
    margin: '0 auto',
  },
  decor: {
    fontFamily: "'Pinyon Script', cursive",
    fontSize: 30,
    display: 'block',
    marginBottom: 12,
  },
  title: {
    fontSize: 30,
    fontWeight: 400,
    lineHeight: 1.45,
    marginBottom: 24,
  },
  button: {
    background: '#b8956a',
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 999,
    padding: '12px 24px',
    letterSpacing: 2,
  },
}
