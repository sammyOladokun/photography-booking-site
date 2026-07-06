export default function Collections() {
  const collections = [
    { name: 'Fashion', image: '/images/fashionframe.jpeg', galleryLink: 'VIEW GALLERY' },
    { name: 'Commercial', image: '/images/commercialframe.jpeg', galleryLink: 'VIEW GALLERY' },
    { name: 'Portraits', image: '/images/portraitframe.jpeg', galleryLink: 'VIEW GALLERY' },
  ]

  return (
    <section style={styles.section}>
      <div style={styles.sectionTitle}>
        <p style={styles.decor}>the</p>
        <h2 style={styles.title} className="collections-title">COLLECTIONS</h2>
        <p style={styles.subtitle} className="collections-subtitle">explore our curated series of timeless imagery</p>
      </div>

      <div style={styles.grid} className="collections-grid">
        {collections.map((col, i) => (
          <div key={i} style={styles.card}>
            <div style={styles.cardImageWrapper}>
              <img 
                src={col.image} 
                alt={col.name}
                style={styles.cardImage}
                className="collections-card-image"
                onError={(e) => e.target.src = 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="400" height="280"%3E%3Crect fill="%23ddd" width="400" height="280"/%3E%3Ctext x="50%" y="50%" font-size="18" fill="%23999" text-anchor="middle" dominant-baseline="middle"%3EImage not found%3C/text%3E%3C/svg%3E'}
              />
            </div>
            <h3 style={styles.cardTitle} className="collections-card-title">{col.name}</h3>
            <a href="#" style={styles.cardLink}>{col.galleryLink}</a>
          </div>
        ))}
      </div>
    </section>
  )
}

const styles = {
  section: {
    background: '#f9f8f6',
    padding: '80px 40px',
  },
  sectionTitle: {
    textAlign: 'center',
    marginBottom: 60,
  },
  decor: {
    fontFamily: "'Pinyon Script', cursive",
    fontSize: 28,
    marginBottom: 8,
  },
  title: {
    fontSize: 48,
    fontWeight: 300,
    letterSpacing: 3,
    marginBottom: 16,
  },
  subtitle: {
    fontSize: 13,
    letterSpacing: 1,
    color: '#666',
  },
  grid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(3, 1fr)',
    gap: 40,
  },
  card: {
    textAlign: 'center',
  },
  cardImageWrapper: {
    overflow: 'hidden',
    background: '#f0f0f0',
    height: 280,
    marginBottom: 24,
  },
  cardImage: {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
    objectPosition: 'center',
    display: 'block',
  },
  cardTitle: {
    fontSize: 20,
    fontWeight: 400,
    marginBottom: 12,
  },
  cardLink: {
    fontSize: 11,
    letterSpacing: 1,
    textTransform: 'uppercase',
    color: '#b8956a',
  },
}
