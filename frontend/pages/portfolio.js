import Head from 'next/head'
import Link from 'next/link'
import Header from '../components/Header'

const featuredTiles = [
  '/images/portfolio/feature-1.jpeg',
  '/images/portfolio/feature-2.jpeg',
]

const galleryImages = [
  '/images/portfolio/grid-1.jpeg',
  '/images/portfolio/grid-2.jpeg',
  '/images/portfolio/grid-3.jpeg',
  '/images/portfolio/grid-4.jpeg',
  '/images/portfolio/grid-1.jpeg',
  '/images/portfolio/grid-2.jpeg',
  '/images/portfolio/grid-3.jpeg',
  '/images/portfolio/grid-4.jpeg',
  '/images/portfolio/grid-1.jpeg',
  '/images/portfolio/grid-2.jpeg',
  '/images/portfolio/grid-3.jpeg',
  '/images/portfolio/grid-4.jpeg',
]

export default function PortfolioPage() {
  return (
    <>
      <Head>
        <title>Portfolio — Livia Blake Photography</title>
        <meta
          name="description"
          content="Editorial photography portfolio featuring fashion, portrait, and lifestyle imagery."
        />
      </Head>

      <main style={styles.page}>
        <section className="portfolio-hero" style={styles.hero}>
          <Header showBookButton={false} showLogo={false} compact />

          <div style={styles.heroImageWrap}>
            <img src="/images/portfolio/feature-1.jpeg" alt="Portfolio hero portrait" style={styles.heroImage} />
            <div style={styles.heroOverlay} />
            <Link href="/" style={styles.heroBrand} aria-label="Home">Lb</Link>
          </div>

          <div className="heroContent" style={styles.heroContent}>
            <h1 className="heroTitle" style={styles.heroTitle}>PORTFOLIO</h1>
          </div>
        </section>

        <section className="portfolioIntro" style={styles.introSection}>
          <div style={styles.introRule} />
          <p className="introScript" style={styles.introScript}>Timeless aesthetic</p>
          <p className="introCopy" style={styles.introCopy}>
            I’m Mikaela Sloane, a fashion photographer creating refined, editorial imagery with a modern edge.
            My work blends clean composition with expressive storytelling.
          </p>
          <div className="featuredRow" style={styles.featuredRow}>
            <img src={featuredTiles[0]} alt="Featured editorial portrait" style={styles.featuredSmallLeft} />
            <img src="/images/portfolio/feature-2.jpeg" alt="Featured editorial fashion image" style={styles.featuredCenter} />
            <img src={featuredTiles[1]} alt="Featured seaside portrait" style={styles.featuredSmallRight} />
          </div>
        </section>

        <section className="portfolioGridSection" style={styles.gridSection}>
          <div style={styles.gridIntro}>
            <p style={styles.gridKicker}>HIGHLIGHTED WORKS</p>
            <div className="categoryRow" style={styles.categoryRow}>
              <span>LIFESTYLE</span>
              <span>FASHION</span>
              <span>PEOPLE</span>
            </div>
          </div>

          <div className="portfolio-grid" style={styles.grid}>
            {galleryImages.map((src, index) => (
              <article key={`${src}-${index}`} style={styles.gridItem}>
                <img src={src} alt="" aria-hidden="true" style={styles.gridImage} />
              </article>
            ))}
          </div>
        </section>

        <section className="portfolioCta" style={styles.ctaSection}>
          <img src="/images/portfolio/feature-2.jpeg" alt="" aria-hidden="true" style={styles.ctaImage} />
          <div style={styles.ctaOverlay} />
          <div style={styles.ctaContent}>
            <p style={styles.ctaKicker}>Let’s talk</p>
            <h2 className="ctaTitle" style={styles.ctaTitle}>Book Your Session</h2>
            <p className="ctaLead" style={styles.ctaLead}>Choose a direction, send your brief, and we’ll shape the session together.</p>
            <Link href="/book" style={styles.ctaButton}>FILL UP THE FORM</Link>
          </div>
        </section>

        <footer className="portfolio-footer" style={styles.footer}>
          <div className="footerColumnLeft" style={styles.footerColumnLeft}>
            <h2 className="footerHeading" style={styles.footerHeading}>NAVIGATE</h2>
            <nav className="footerNav" style={styles.footerNav}>
              <a href="/">HOME</a>
              <a href="/packages">PACKAGES</a>
              <a href="/book">BOOKING</a>
              <a href="/about">ABOUT</a>
            </nav>
            <p style={styles.terms}>Terms &amp; Conditions</p>
          </div>

          <div className="footer-center" style={styles.footerCenter}>
            <div style={styles.cardStack}>
              <div style={{ ...styles.footerCard, transform: 'rotate(-8deg) translateX(-28px) translateY(16px)' }}>
                <img src="/images/portfolio/grid-1.jpeg" alt="" style={styles.footerCardImage} />
              </div>
              <div style={{ ...styles.footerCard, transform: 'rotate(7deg) translateX(6px) translateY(-8px)' }}>
                <img src="/images/portfolio/feature-1.jpeg" alt="" style={styles.footerCardImage} />
              </div>
              <div style={{ ...styles.footerCard, transform: 'rotate(-4deg) translateX(36px) translateY(10px)' }}>
                <img src="/images/portfolio/grid-4.jpeg" alt="" style={styles.footerCardImage} />
              </div>
              <div style={styles.cardLogo}>Lb</div>
            </div>
          </div>

          <div className="footerColumnRight" style={styles.footerColumnRight}>
            <p style={styles.footerCopy}>Fashion imagery rooted in emotion, movement, and modern aesthetics.</p>
            <div style={styles.socials}>
              <a href="#" aria-label="Instagram">◎</a>
              <a href="#" aria-label="Email">✉</a>
              <a href="#" aria-label="Pinterest">◔</a>
            </div>
            <p style={styles.credit}>© Livia Blake Photography</p>
          </div>
        </footer>
      </main>

      <style jsx global>{`
        html, body {
          background: #0a0a0a;
        }

        @media (max-width: 960px) {
          .portfolio-hero {
            min-height: auto;
          }

          .portfolioIntro,
          .portfolioGridSection {
            padding-left: 24px;
            padding-right: 24px;
          }

          .featuredRow {
            grid-template-columns: 1fr;
            gap: 20px;
          }

          .portfolio-grid {
            grid-template-columns: repeat(2, minmax(0, 1fr));
          }

          .portfolio-footer {
            grid-template-columns: 1fr;
            gap: 36px;
            text-align: center;
          }

          .footer-center {
            display: none;
          }
        }

        @media (max-width: 1024px) {
          .portfolio-hero {
            grid-template-columns: 1fr;
          }

          .heroContent {
            padding: 0 20px 34px;
          }

          .portfolioIntro,
          .portfolioGridSection {
            padding-left: 20px;
            padding-right: 20px;
          }

          .portfolioIntro {
            padding-top: 42px;
            padding-bottom: 72px;
          }

          .portfolioGridSection {
            padding-top: 44px;
            padding-bottom: 76px;
          }

          .featuredRow {
            grid-template-columns: 1fr;
            gap: 18px;
          }

          .portfolio-grid {
            gap: 14px;
            grid-template-columns: repeat(2, minmax(0, 1fr));
          }

          .introCopy {
            max-width: 620px;
          }
        }

        @media (max-width: 640px) {
          .portfolio-hero {
            min-height: 82vh;
          }

          .heroContent {
            position: absolute !important;
            left: 18px;
            right: 18px;
            bottom: 18px;
            padding: 0;
            max-width: 72vw;
            z-index: 4;
            align-self: auto;
          }

          .heroContent {
            padding: 0;
          }

          .heroTitle {
            font-size: clamp(42px, 12vw, 74px);
            line-height: 0.92;
          }

          .introCopy {
            font-size: 16px;
            line-height: 1.7;
          }

          .categoryRow {
            gap: 14px;
            flex-wrap: wrap;
          }

          .portfolio-grid {
            grid-template-columns: 1fr;
            gap: 16px;
          }

          .footerColumnLeft,
          .footerColumnRight {
            padding: 36px 18px;
          }

          .portfolioIntro {
            padding-top: 34px;
            padding-bottom: 56px;
          }

          .gridSection {
            padding-top: 24px;
            padding-bottom: 64px;
          }

          .portfolioGridSection {
            padding-top: 30px;
            padding-bottom: 64px;
          }

          .heroBrand {
            top: 18px;
            left: 18px;
            font-size: 46px;
          }
        }
      `}</style>
    </>
  )
}

const styles = {
  page: {
    minHeight: '100vh',
    background: '#0a0a0a',
    color: '#f7f2eb',
  },
  hero: {
    position: 'relative',
    minHeight: '100vh',
    overflow: 'hidden',
    display: 'grid',
    gridTemplateRows: '88px 1fr',
    alignItems: 'start',
  },
  topBar: {
    position: 'relative',
    zIndex: 4,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: '24px 36px',
  },
  brand: {
    fontFamily: "'Pinyon Script', cursive",
    fontSize: 84,
    lineHeight: 0.8,
    color: '#f7f2eb',
    textDecoration: 'none',
  },
  explore: {
    display: 'inline-flex',
    alignItems: 'center',
    gap: 10,
    fontSize: 12,
    letterSpacing: 2,
    textTransform: 'uppercase',
    color: '#f3eee7',
    textDecoration: 'none',
  },
  exploreIcon: {
    display: 'inline-flex',
    flexDirection: 'column',
    gap: 3,
  },
  exploreBar: {
    width: 14,
    height: 1,
    background: 'currentColor',
    display: 'block',
  },
  heroImageWrap: {
    position: 'absolute',
    inset: 0,
  },
  heroBrand: {
    position: 'absolute',
    top: '24px',
    left: '24px',
    bottom: 'auto',
    zIndex: 6,
    fontFamily: "'Pinyon Script', cursive",
    fontSize: '68px',
    lineHeight: 0.8,
    color: '#f7f2eb',
    textDecoration: 'none',
    textShadow: '0 3px 12px rgba(0,0,0,0.45)',
  },
  heroImage: {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
    objectPosition: 'center center',
    filter: 'grayscale(0.1) contrast(1.05) brightness(0.72)',
  },
  heroOverlay: {
    position: 'absolute',
    inset: 0,
    background: 'linear-gradient(180deg, rgba(0,0,0,0.36), rgba(0,0,0,0.56))',
  },
  heroContent: {
    position: 'absolute',
    left: '36px',
    right: '36px',
    bottom: '48px',
    zIndex: 3,
    padding: 0,
    maxWidth: 760,
  },
  heroTitle: {
    fontSize: 'clamp(58px, 8vw, 128px)',
    lineHeight: 0.9,
    fontWeight: 300,
    letterSpacing: 2,
    margin: 0,
  },
  introSection: {
    background: '#efebe3',
    color: '#2d2a28',
    padding: '48px 36px 76px',
  },
  introRule: {
    height: 1,
    background: 'rgba(0,0,0,0.35)',
    maxWidth: 740,
    margin: '0 auto 18px',
  },
  introScript: {
    fontFamily: "'Pinyon Script', cursive",
    fontSize: 28,
    textAlign: 'right',
    maxWidth: 1080,
    margin: '0 auto 18px',
  },
  introCopy: {
    maxWidth: 520,
    margin: '0 auto 34px',
    textAlign: 'center',
    fontSize: 18,
    lineHeight: 1.65,
  },
  featuredRow: {
    display: 'grid',
    gridTemplateColumns: '0.7fr 1.5fr 0.7fr',
    gap: 28,
    alignItems: 'center',
    maxWidth: 1080,
    margin: '0 auto',
  },
  featuredSmallLeft: {
    width: '100%',
    maxWidth: 180,
    justifySelf: 'start',
  },
  featuredCenter: {
    width: '100%',
    boxShadow: '0 20px 40px rgba(0,0,0,0.16)',
  },
  featuredSmallRight: {
    width: '100%',
    maxWidth: 180,
    justifySelf: 'end',
  },
  gridSection: {
    background: '#efebe3',
    color: '#2d2a28',
    padding: '48px 36px 90px',
  },
  gridIntro: {
    textAlign: 'center',
    marginBottom: 34,
  },
  gridKicker: {
    fontSize: 13,
    letterSpacing: 3,
    color: '#a88f69',
    marginBottom: 18,
  },
  categoryRow: {
    display: 'flex',
    justifyContent: 'center',
    gap: 24,
    fontSize: 15,
    letterSpacing: 1.4,
  },
  grid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(3, minmax(0, 1fr))',
    gap: 18,
    maxWidth: 960,
    margin: '0 auto',
  },
  gridItem: {
    aspectRatio: '4 / 5',
    overflow: 'hidden',
    background: '#d9d2c8',
  },
  gridImage: {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
  },
  ctaSection: {
    position: 'relative',
    minHeight: 460,
    overflow: 'hidden',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    background: '#0b0b0b',
  },
  ctaImage: {
    position: 'absolute',
    inset: 0,
    width: '100%',
    height: '100%',
    objectFit: 'cover',
    objectPosition: 'center center',
    filter: 'grayscale(1) contrast(1.08) brightness(0.62)',
  },
  ctaOverlay: {
    position: 'absolute',
    inset: 0,
    background: 'linear-gradient(180deg, rgba(0,0,0,0.5), rgba(0,0,0,0.74))',
  },
  ctaContent: {
    position: 'relative',
    zIndex: 2,
    textAlign: 'center',
    color: '#f7f2eb',
    padding: 24,
  },
  ctaKicker: {
    fontSize: 14,
    marginBottom: 10,
  },
  ctaTitle: {
    fontSize: 'clamp(42px, 6vw, 76px)',
    lineHeight: 0.95,
    fontWeight: 300,
    marginBottom: 16,
  },
  ctaLead: {
    maxWidth: 420,
    margin: '0 auto 28px',
    fontSize: 16,
    lineHeight: 1.8,
    color: '#ece6dc',
  },
  ctaButton: {
    display: 'inline-block',
    borderRadius: 999,
    padding: '18px 30px',
    background: '#e5d9c7',
    color: '#1d1a18',
    letterSpacing: 3,
    textDecoration: 'none',
    fontSize: 12,
  },
  footer: {
    display: 'grid',
    gridTemplateColumns: '0.88fr 1.24fr 0.88fr',
    gap: 0,
    background: '#ece8df',
    color: '#2c2a28',
    borderTop: '1px solid rgba(0,0,0,0.15)',
  },
  footerColumnLeft: {
    padding: '96px 72px',
    borderRight: '1px solid rgba(0,0,0,0.45)',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    minHeight: 360,
  },
  footerColumnRight: {
    padding: '96px 72px',
    borderLeft: '1px solid rgba(0,0,0,0.45)',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    minHeight: 360,
  },
  footerHeading: {
    fontSize: 'clamp(48px, 4vw, 64px)',
    lineHeight: 0.9,
    marginBottom: 24,
    fontWeight: 300,
  },
  footerNav: {
    display: 'grid',
    gridTemplateColumns: 'repeat(2, max-content)',
    gap: '18px 38px',
    fontSize: 15,
    letterSpacing: 1.2,
  },
  terms: {
    marginTop: 46,
    fontSize: 13,
    fontStyle: 'italic',
  },
  footerCenter: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    minHeight: 360,
    overflow: 'hidden',
  },
  cardStack: {
    position: 'relative',
    width: '100%',
    maxWidth: 430,
    height: 300,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  footerCard: {
    position: 'absolute',
    width: 220,
    height: 270,
    background: '#111',
    boxShadow: '0 22px 45px rgba(0,0,0,0.22)',
    overflow: 'hidden',
  },
  footerCardImage: {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
    filter: 'saturate(0.95) contrast(1.02)',
  },
  cardLogo: {
    position: 'relative',
    zIndex: 10,
    fontFamily: "'Pinyon Script', cursive",
    fontSize: 78,
    color: '#f9f4ed',
    textShadow: '0 4px 12px rgba(0,0,0,0.4)',
  },
  footerCopy: {
    fontSize: 26,
    lineHeight: 1.55,
    maxWidth: 320,
    fontWeight: 300,
    marginBottom: 26,
  },
  socials: {
    display: 'flex',
    gap: 18,
    fontSize: 22,
    marginBottom: 36,
  },
  credit: {
    fontSize: 13,
    opacity: 0.8,
  },
}
