export default function Hero({ photographer }) {
  return (
    <section style={styles.section} className="home-hero">
      <div style={styles.heroImages} className="home-hero-images">
        <div style={styles.heroImageWrapperLeft}>
          <img src="/images/her01.jpg" alt="Portrait 1" style={styles.heroImageLeft} />
        </div>
        <div style={styles.heroImageWrapperRight}>
          <img src="/images/hero2.jpg" alt="Portrait 2" style={styles.heroImageRight} />
        </div>
        <div style={styles.imageOverlay} />
      </div>

      <h1 style={styles.heroTitle} className="hero-title">{photographer}</h1>
    </section>
  )
}

const styles = {
  section: {
    position: 'relative',
    height: '100vh',
    minHeight: 640,
    overflow: 'hidden',
    display: 'block',
    padding: 0,
  },
  heroImages: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    gap: 0,
    height: '100%',
    width: '100%',
  },
  heroImageWrapperLeft: {
    overflow: 'hidden',
    height: '100%',
  },
  heroImageWrapperRight: {
    overflow: 'hidden',
    height: '100%',
  },
  heroImageLeft: {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
    objectPosition: 'center 22%',
    display: 'block',
    filter: 'saturate(0.9) contrast(0.96)',
  },
  heroImageRight: {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
    objectPosition: 'center 44%',
    display: 'block',
    filter: 'saturate(0.9) contrast(0.96)',
  },
  imageOverlay: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    zIndex: 4,
    background: 'rgba(0,0,0,0.06)'
  },
  heroTitle: {
    position: 'absolute',
    left: '50%',
    top: '62%',
    transform: 'translate(-50%, -50%)',
    margin: 0,
    zIndex: 10,
    color: '#ffffff',
    fontFamily: "'Instrument Serif', serif",
    fontSize: 'clamp(56px, 9vw, 140px)',
    letterSpacing: '10px',
    fontWeight: 300,
    textTransform: 'uppercase',
    textAlign: 'center',
    lineHeight: 0.85,
    textShadow: '0 3px 0 rgba(0,0,0,0.5)',
  },
}
