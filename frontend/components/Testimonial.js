export default function Testimonial({ quote, author }) {
  return (
    <section style={styles.section} className="home-testimonial">
      <div style={styles.container} className="home-testimonial-grid">
        <div style={styles.imageLeftWrapper} className="home-testimonial-image">
          <img
            src="/images/about/bio-2.jpeg"
            alt="Testimonial image"
            style={styles.imageLeft}
            onError={(e) => e.target.style.display = 'none'}
          />
        </div>
        <div style={styles.content} className="home-testimonial-content">
          <p style={styles.kicker}>Client words</p>
          <p style={styles.quote}>"{quote}"</p>
          <p style={styles.author}>{author}</p>
        </div>
      </div>
    </section>
  )
}

const styles = {
  section: {
    background: '#1a1a1a',
    color: 'white',
    padding: '72px 0',
  },
  container: {
    display: 'grid',
    gridTemplateColumns: '1.15fr 0.85fr',
    gap: 0,
    alignItems: 'stretch',
    maxWidth: 1280,
    margin: '0 auto',
  },
  imageLeftWrapper: {
    overflow: 'hidden',
    background: '#333',
    minHeight: 420,
  },
  imageLeft: {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
    objectPosition: 'center',
    display: 'block',
  },
  content: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    padding: '56px 60px',
    alignItems: 'flex-start',
  },
  kicker: {
    fontSize: 11,
    letterSpacing: 3,
    textTransform: 'uppercase',
    color: '#b9aea3',
    marginBottom: 18,
  },
  quote: {
    fontSize: 24,
    fontStyle: 'italic',
    lineHeight: 1.7,
    marginBottom: 22,
    maxWidth: 440,
  },
  author: {
    fontSize: 12,
    letterSpacing: 2.4,
    textTransform: 'uppercase',
    color: '#d7cdc2',
  },
}
