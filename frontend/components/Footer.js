export default function Footer() {
  return (
    <footer style={styles.footer}>
      <div style={styles.topSection}>
        <div style={styles.brand}>
          <h3 style={styles.brandName}>NAVIGATE</h3>
          <div style={styles.navLinks}>
            <a href="#home">HOME</a>
            <a href="#portfolio">PORTFOLIO</a>
            <a href="#about">ABOUT</a>
            <a href="#contact">CONTACT</a>
          </div>
        </div>

        <div style={styles.featured}>
          <div style={styles.featuredImageWrapper}>
            <img
              src="/images/featured-footer.jpg"
              alt="Featured work"
              style={styles.featuredImage}
              onError={(e) => e.target.style.display = 'none'}
            />
          </div>
          <p style={styles.featuredText}>FASHION | EDITORIAL | STYLING IN EMOTION, MOVEMENT + GEL.</p>
          <div style={styles.socialLinks}>
            <a href="#">instagram</a>
            <a href="#">tiktok</a>
          </div>
        </div>
      </div>

      <div style={styles.bottomSection}>
        <p style={styles.copyright}>© 2024 LIVIA BLAKE. All rights reserved.</p>
      </div>
    </footer>
  )
}

const styles = {
  footer: {
    background: '#1a1a1a',
    color: 'white',
    padding: '60px 40px',
  },
  topSection: {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    gap: 60,
    marginBottom: 60,
  },
  brand: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
  },
  brandName: {
    fontSize: 20,
    fontWeight: 400,
    letterSpacing: 2,
    marginBottom: 24,
  },
  navLinks: {
    display: 'flex',
    flexDirection: 'column',
    gap: 12,
  },
  navLinks_a: {
    fontSize: 13,
    letterSpacing: 1,
    textTransform: 'uppercase',
  },
  featured: {
    display: 'flex',
    flexDirection: 'column',
    gap: 16,
  },
  featuredImageWrapper: {
    overflow: 'hidden',
    background: '#333',
    height: 240,
    marginBottom: 16,
  },
  featuredImage: {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
    objectPosition: 'center',
    display: 'block',
  },
  featuredText: {
    fontSize: 12,
    lineHeight: 1.6,
    color: '#999',
  },
  socialLinks: {
    display: 'flex',
    gap: 20,
  },
  socialLinks_a: {
    fontSize: 11,
    letterSpacing: 1,
    textTransform: 'uppercase',
  },
  bottomSection: {
    borderTop: '1px solid #333',
    paddingTop: 24,
  },
  copyright: {
    fontSize: 11,
    color: '#666',
  },
}
