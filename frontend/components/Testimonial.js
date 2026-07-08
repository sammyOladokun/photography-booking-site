export default function Testimonial({ quote, author }) {
  return (
    <section style={styles.section} className="home-testimonial">
      <div style={styles.container} className="home-testimonial-grid">
        <div style={styles.imageLeftWrapper} className="home-testimonial-image">
          <img
            src="/images/testimonial.jpg"
            alt="Testimonial image"
            style={styles.imageLeft}
            onError={(e) => e.target.style.display = 'none'}
          />
        </div>
        <div style={styles.content} className="home-testimonial-content">
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
    padding: '80px 0',
  },
  container: {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    gap: 0,
    alignItems: 'center',
  },
  imageLeftWrapper: {
    overflow: 'hidden',
    background: '#333',
    height: 400,
  },
  imageLeft: {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
    objectPosition: 'center',
    display: 'block',
  },
  content: {
    padding: '60px 80px',
  },
  quote: {
    fontSize: 18,
    fontStyle: 'italic',
    lineHeight: 1.8,
    marginBottom: 24,
  },
  author: {
    fontSize: 13,
    letterSpacing: 2,
    textTransform: 'uppercase',
  },
}
