import Link from 'next/link'

export default function CTA({ onBookClick }) {
  return (
    <section style={styles.section}>
      <div style={styles.container}>
        <div style={styles.imageLeftWrapper}>
          <img
            src="/images/cta-left.jpg"
            alt="Campaign visuals left"
            style={styles.imageContent}
            onError={(e) => e.target.style.display = 'none'}
          />
        </div>
        <div style={styles.content}>
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
        <div style={styles.imageRightWrapper}>
          <img
            src="/images/cta-right.jpg"
            alt="Campaign visuals right"
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
    padding: '80px 0',
  },
  container: {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr 1fr',
    gap: 0,
    alignItems: 'stretch',
  },
  imageLeftWrapper: {
    overflow: 'hidden',
    background: '#ddd',
  },
  imageRightWrapper: {
    overflow: 'hidden',
    background: '#ddd',
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
    padding: '60px 40px',
  },
  decor: {
    fontFamily: "'Pinyon Script', cursive",
    fontSize: 28,
    display: 'block',
    marginBottom: 16,
  },
  title: {
    fontSize: 32,
    fontWeight: 400,
    lineHeight: 1.6,
    marginBottom: 32,
  },
  button: {
    background: '#b8956a',
    display: 'inline-block',
  },
}
