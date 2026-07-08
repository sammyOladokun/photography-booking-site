export default function Footer() {
  return (
    <footer style={styles.footer} className="home-footer">
      <div style={styles.topSection} className="home-footer-grid">
        <div style={styles.brand} className="home-footer-brand">
          <h3 style={styles.brandName}>NAVIGATE</h3>
          <div style={styles.navLinks}>
            <a href="/">HOME</a>
            <a href="/portfolio">PORTFOLIO</a>
            <a href="/about">ABOUT</a>
            <a href="/book">CONTACT</a>
          </div>
        </div>

        <div style={styles.featured} className="home-footer-featured">
          <div style={styles.featuredStack} aria-hidden="true">
            <img src="/images/packages/package-portrait.jpeg" alt="" style={styles.featuredStackBack} />
            <img src="/images/packages/footer-feature.jpeg" alt="" style={styles.featuredStackFront} />
            <span style={styles.featuredLogo}>Lb</span>
          </div>
        </div>

        <div style={styles.rightColumn} className="home-footer-right">
          <p style={styles.featuredText}>FASHION IMAGERY ROOTED IN EMOTION, MOVEMENT, AND MODERN ELEGANCE.</p>
          <div style={styles.socialLinks}>
            <a href="#">instagram</a>
            <a href="#">email</a>
            <a href="#">pinterest</a>
          </div>
          <p style={styles.rightCredit}>© White Castle Design</p>
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
    padding: '72px 40px 54px',
  },
  topSection: {
    display: 'grid',
    gridTemplateColumns: '1fr 1.1fr 1fr',
    gap: 36,
    marginBottom: 48,
    alignItems: 'center',
  },
  brand: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    paddingRight: 8,
  },
  brandName: {
    fontSize: 52,
    fontWeight: 300,
    letterSpacing: 1,
    lineHeight: 0.9,
    marginBottom: 18,
  },
  navLinks: {
    display: 'flex',
    flexDirection: 'column',
    gap: 14,
    marginTop: 4,
  },
  navLinks_a: {
    fontSize: 12,
    letterSpacing: 2,
    textTransform: 'uppercase',
  },
  featured: {
    display: 'flex',
    flexDirection: 'column',
    gap: 14,
    alignItems: 'center',
  },
  featuredStack: {
    position: 'relative',
    width: 220,
    height: 250,
    marginTop: 6,
    marginBottom: 2,
  },
  featuredStackBack: {
    position: 'absolute',
    left: '50%',
    top: 10,
    width: 170,
    height: 220,
    objectFit: 'cover',
    transform: 'translateX(-55%) rotate(-4deg)',
    filter: 'brightness(0.84)',
    boxShadow: '0 14px 28px rgba(0,0,0,0.28)',
  },
  featuredStackFront: {
    position: 'absolute',
    left: '50%',
    top: 0,
    width: 190,
    height: 240,
    objectFit: 'cover',
    transform: 'translateX(-50%) rotate(6deg)',
    boxShadow: '0 18px 32px rgba(0,0,0,0.32)',
  },
  featuredLogo: {
    position: 'absolute',
    left: '50%',
    top: '52%',
    transform: 'translate(-50%, -50%)',
    fontFamily: "'Pinyon Script', cursive",
    fontSize: 72,
    lineHeight: 1,
    color: '#f6f0e8',
    textShadow: '0 2px 10px rgba(0,0,0,0.35)',
    zIndex: 2,
  },
  rightColumn: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    gap: 18,
    paddingLeft: 12,
  },
  featuredText: {
    maxWidth: 260,
    fontSize: 12,
    lineHeight: 1.7,
    letterSpacing: 0.4,
    color: '#c1b7ab',
  },
  socialLinks: {
    display: 'flex',
    gap: 18,
    flexWrap: 'wrap',
    justifyContent: 'flex-start',
  },
  socialLinks_a: {
    fontSize: 11,
    letterSpacing: 2,
    textTransform: 'uppercase',
  },
  bottomSection: {
    borderTop: '1px solid rgba(255,255,255,0.12)',
    paddingTop: 18,
  },
  copyright: {
    fontSize: 11,
    color: '#887d71',
    textAlign: 'center',
  },
  rightCredit: {
    fontSize: 11,
    color: '#887d71',
    letterSpacing: 0.5,
  },
}
