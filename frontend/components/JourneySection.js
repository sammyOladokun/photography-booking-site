export default function JourneySection() {
  return (
    <section style={styles.section} className="home-journey">
      <div style={styles.container} className="home-journey-grid">
        <div style={styles.imageLeftWrapper} className="home-journey-image home-journey-image-left">
          <img
            src="/images/portfolio/feature-1.jpeg"
            alt="Featured fashion work"
            style={styles.imageContent}
            onError={(e) => e.target.style.display = 'none'}
          />
        </div>
        <div style={styles.center} className="home-journey-center">
          <p style={styles.decor}>Continue the</p>
          <h2 style={{...styles.title, fontFamily: "'Pinyon Script', cursive"}}>journey</h2>
          <div style={styles.links}>
            <a href="#gallery" style={styles.link}>SEE THE GALLERY</a>
            <a href="#investment" style={styles.link}>THE INVESTMENT</a>
            <a href="#book" style={styles.link}>BOOK A SESSION</a>
          </div>
        </div>
        <div style={styles.imageRightWrapper} className="home-journey-image home-journey-image-right">
          <img
            src="/images/portfolio/feature-2.jpeg"
            alt="Featured portrait work"
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
    background: '#1a1a1a',
    color: 'white',
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
    background: '#333',
  },
  imageRightWrapper: {
    overflow: 'hidden',
    background: '#333',
  },
  imageContent: {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
    objectPosition: 'center',
    display: 'block',
  },
  center: {
    textAlign: 'center',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '60px 40px',
  },
  decor: {
    fontSize: 14,
    letterSpacing: 1,
    textTransform: 'uppercase',
    marginBottom: 8,
  },
  title: {
    fontSize: 48,
    fontWeight: 300,
    marginBottom: 40,
  },
  links: {
    display: 'flex',
    flexDirection: 'column',
    gap: 16,
  },
  link: {
    fontSize: 12,
    letterSpacing: 2,
    textTransform: 'uppercase',
    textDecoration: 'underline',
  },
}
