import Head from 'next/head'
import Link from 'next/link'
import Header from '../components/Header'

const packageCards = [
  {
    title: 'Signature Portrait Session',
    price: '$600',
    summary:
      'A refined portrait experience designed to capture natural expression and a timeless character.',
    includes: [
      'Pre-session consultation',
      '60-minute portrait session',
      '1-2 curated locations',
      'Professional posing and direction',
      'High-resolution, professionally edited images',
      'Online private gallery for viewing and downloads',
    ],
    image: '/images/packages/package-portrait.jpeg',
    tone: '#ece9e1',
  },
  {
    title: 'Editorial Fashion Story',
    price: '$1,200',
    summary:
      'A style-led editorial package with visual direction, concept shaping, and polished delivery.',
    includes: [
      'Creative direction call',
      'Moodboard alignment',
      '4-hour editorial shoot',
      'Location scouting support',
      '50+ edited images',
      'Private gallery and usage-ready exports',
    ],
    image: '/images/packages/package-branding.jpeg',
    tone: '#d7d2c8',
  },
  {
    title: 'Luxury Campaign Production',
    price: '$2,500',
    summary:
      'A full-day commercial production for launches, lookbooks, and campaign storytelling.',
    includes: [
      'Campaign planning session',
      '8-hour production day',
      'Shot list and creative direction',
      'Professional editing and color grading',
      '100+ final images',
      'Calendar hold and usage licensing overview',
    ],
    image: '/images/packages/additional-2.jpeg',
    tone: '#7d7469',
  },
]

const addOns = [
  'Retouch images from $20 per image',
  'Extended shooting time at $150 per hour',
  'Location scouting from $100',
  'Styling / makeup services from $200',
]

const footerCards = [
  '/images/packages/additional-3.jpeg',
  '/images/packages/hero-closeup.jpeg',
  '/images/packages/footer-feature.jpeg',
]

export default function PackagesPage() {
  return (
    <>
      <Head>
        <title>Packages — Livia Blake Photography</title>
        <meta
          name="description"
          content="Luxury photography packages for portraits, editorial fashion stories, and commercial campaigns."
        />
      </Head>

      <main style={styles.page}>
        <section className="packages-hero" style={styles.hero}>
          <Header showBookButton={false} showLogo={false} compact />

          <div style={styles.heroImageWrap}>
            <img src="/images/packages/hero-closeup.jpeg" alt="Editorial close-up portrait" style={styles.heroImage} />
            <div style={styles.heroOverlay} />
            <Link href="/" style={styles.heroBrand} aria-label="Home">
              Lb
            </Link>
          </div>

          <div className="heroContent" style={styles.heroContent}>
            <p style={styles.heroKicker}>Packages &amp; Investment</p>
            <h1 className="heroTitle" style={styles.heroTitle}>INVESTMENT</h1>
            <p className="heroLead" style={styles.heroLead}>
              Choose a package built around intention, strong direction, and a polished finish.
            </p>
          </div>
        </section>

        <section className="offerSection" style={styles.offerSection}>
          <div style={styles.offerBackdrop} />
          <div style={styles.offerTitleWrap}>
            <p className="offerEyebrow" style={styles.offerEyebrow}>WHAT I OFFER</p>
          </div>
          <div className="offer-cards" style={styles.offerCards}>
            {packageCards.map((item, index) => (
              <article
                className="package-card"
                key={item.title}
                style={{
                  ...styles.packageCard,
                  background: item.tone,
                  transform: cardTransforms[index],
                }}
              >
                <div style={styles.packageCardLeft}>
                  <h2 style={styles.packageTitle}>{item.title}</h2>
                  <p className="packagePrice" style={styles.packagePrice}>starting from {item.price}</p>
                </div>

                <div style={styles.packageCardRight}>
                  <p className="packageSummary" style={styles.packageSummary}>{item.summary}</p>
                  <div style={styles.includesBlock}>
                    <h3 style={styles.includesTitle}>What’s Included</h3>
                    <ul style={styles.includesList}>
                      {item.includes.map((line) => (
                        <li key={line}>{line}</li>
                      ))}
                    </ul>
                  </div>
                </div>
                <img src={item.image} alt="" aria-hidden="true" style={styles.packageImage} />
              </article>
            ))}
          </div>
        </section>

        <section className="additional-investments addOnSection" style={styles.addOnSection}>
          <div className="add-on-layout" style={styles.addOnLayout}>
            <div style={styles.addOnVisualLeft}>
              <img src="/images/packages/additional-1.jpeg" alt="Additional investment image one" style={styles.addOnImageLeft} />
            </div>
            <div style={styles.addOnContent}>
              <p style={styles.addOnEyebrow}>ADDITIONAL INVESTMENTS <em style={styles.script}>to consider</em></p>
              <p className="addOnText" style={styles.addOnText}>
                Enhance your session with curated add-ons designed to elevate the creative process and the final imagery.
              </p>
              <ul style={styles.addOnList}>
                {addOns.map((line) => (
                  <li key={line}>{line}</li>
                ))}
              </ul>
            </div>
            <div style={styles.addOnVisualRight}>
              <img src="/images/packages/additional-2.jpeg" alt="Additional investment image two" style={styles.addOnImageRight} />
            </div>
          </div>
        </section>

        <section className="ctaSection" style={styles.ctaSection}>
          <img src="/images/packages/additional-3.jpeg" alt="" aria-hidden="true" style={styles.ctaImage} />
          <div style={styles.ctaOverlay} />
          <div style={styles.ctaContent}>
            <p style={styles.ctaKicker}>Let’s talk</p>
            <h2 className="ctaTitle" style={styles.ctaTitle}>Book Your Session</h2>
            <p className="ctaLead" style={styles.ctaLead}>Fill up the form and I’ll reply with availability, timing, and the best package match.</p>
            <a href="/book" style={styles.ctaButton}>BOOK YOUR SESSION</a>
          </div>
        </section>

        <footer id="footer" className="packages-footer" style={styles.footer}>
          <div className="footerColumnLeft" style={styles.footerColumnLeft}>
            <h2 className="footerHeading" style={styles.footerHeading}>NAVIGATE</h2>
            <nav className="footerNav" style={styles.footerNav}>
              <a href="/">HOME</a>
              <a href="/packages">PACKAGES</a>
              <a href="/book">BOOKING</a>
              <a href="/portfolio">PORTFOLIO</a>
            </nav>
            <p style={styles.terms}>Terms &amp; Conditions</p>
          </div>

          <div className="footer-center" style={styles.footerCenter}>
            <div style={styles.cardStack}>
              {footerCards.map((src, index) => (
                <div
                  key={src}
                  style={{
                    ...styles.footerCard,
                    transform: footerTransforms[index],
                    zIndex: footerCards.length - index,
                  }}
                >
                  <img src={src} alt="" style={styles.footerCardImage} />
                </div>
              ))}
              <div style={styles.cardLogo}>Lb</div>
            </div>
          </div>

          <div className="footerColumnRight" style={styles.footerColumnRight}>
            <p style={styles.footerCopy}>
              Fashion imagery rooted in emotion, movement, and modern aesthetics.
            </p>
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
          .packages-hero {
            min-height: auto;
          }

          .heroContent {
            padding: 0 20px 34px;
          }

          .offerSection,
          .addOnSection {
            padding-left: 20px;
            padding-right: 20px;
          }

          .package-card {
            padding: 30px 24px;
            min-height: auto;
          }

          .offer-cards {
            gap: 18px;
          }

          .add-on-layout {
            grid-template-columns: 1fr;
            gap: 18px;
            min-height: auto;
          }

          .ctaSection {
            min-height: 320px;
          }

          .footerColumnLeft,
          .footerColumnRight {
            padding: 36px 20px;
          }

          .packages-footer {
            grid-template-columns: 1fr;
            text-align: center;
            gap: 28px;
            display: flex !important;
            flex-direction: column !important;
          }

          .footerColumnLeft,
          .footerColumnRight {
            width: 100%;
            border-left: 0;
            border-right: 0;
          }

          .footerColumnLeft {
            border-bottom: 1px solid rgba(0, 0, 0, 0.18);
          }

          .footerNav {
            display: flex;
            flex-direction: column;
            align-items: center;
            gap: 12px;
          }

          .footer-center {
            display: none;
          }
        }

        @media (max-width: 1024px) {
          .packages-hero {
            grid-template-columns: 1fr;
          }

          .heroContent {
            padding: 0 20px 34px;
          }

          .offerSection,
          .addOnSection {
            padding-left: 20px;
            padding-right: 20px;
          }

          .offerSection {
            padding-top: 48px;
            padding-bottom: 64px;
          }

          .addOnSection {
            padding-top: 56px;
            padding-bottom: 64px;
          }

          .offer-cards {
            gap: 18px;
          }

          .package-card {
            grid-template-columns: 1fr;
            padding: 28px 22px;
          }

          .add-on-layout {
            grid-template-columns: 1fr;
            gap: 18px;
          }
        }

        @media (max-width: 780px) {
          .package-card,
          .add-on-layout {
            grid-template-columns: 1fr;
          }

          .offer-cards {
            gap: 24px;
          }

          .heroTitle {
            font-size: clamp(52px, 15vw, 88px);
          }

          .heroLead {
            font-size: 18px;
            line-height: 1.5;
          }
        }

        @media (max-width: 640px) {
          .packages-hero {
            min-height: 82vh;
          }

          .heroContent {
            position: absolute !important;
            left: 18px;
            right: 18px;
            bottom: 18px;
            padding: 0;
            max-width: 78vw;
            z-index: 4;
            align-self: auto;
          }

          .packages-footer .footer-center {
            min-height: 280px;
          }

          .topBar {
            padding: 16px 18px;
          }

          .brand {
            font-size: 56px;
          }

          .offerEyebrow {
            font-size: clamp(38px, 16vw, 72px);
          }

          .package-card {
            grid-template-columns: 1fr;
            padding: 22px 18px;
          }

          .packagePrice {
            margin-top: 8px;
            font-size: 26px;
          }

          .packageSummary,
          .addOnText,
          .ctaLead {
            font-size: 13px;
            line-height: 1.7;
          }

          .footerNav {
            justify-content: center;
          }

          .addOnSection {
            padding-top: 44px;
            padding-bottom: 56px;
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

const cardTransforms = [
  'translateY(0px)',
  'translateY(22px)',
  'translateY(44px)',
]

const footerTransforms = [
  'rotate(-8deg) translateX(-28px) translateY(16px)',
  'rotate(7deg) translateX(6px) translateY(-8px)',
  'rotate(-4deg) translateX(36px) translateY(10px)',
]

const styles = {
  page: {
    background: '#0a0a0a',
    color: '#f7f2eb',
    minHeight: '100vh',
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
  heroImage: {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
    objectPosition: 'center center',
    filter: 'grayscale(0.15) contrast(1.04) brightness(0.72)',
  },
  heroOverlay: {
    position: 'absolute',
    inset: 0,
    background:
      'linear-gradient(180deg, rgba(0,0,0,0.42) 0%, rgba(0,0,0,0.2) 30%, rgba(0,0,0,0.55) 100%)',
  },
  heroBrand: {
    position: 'absolute',
    top: '24px',
    left: '24px',
    bottom: 'auto',
    zIndex: 6,
    fontFamily: "'Pinyon Script', cursive",
    fontSize: '68px',
    lineHeight: 1,
    color: '#f8f3ec',
    textDecoration: 'none',
    textShadow: '0 8px 20px rgba(0, 0, 0, 0.38)',
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
  heroKicker: {
    fontSize: 12,
    letterSpacing: 3,
    textTransform: 'uppercase',
    color: '#e4ddd2',
    marginBottom: 12,
  },
  heroTitle: {
    fontSize: 'clamp(58px, 8vw, 128px)',
    lineHeight: 0.88,
    fontWeight: 300,
    letterSpacing: 2,
    margin: 0,
  },
  heroLead: {
    maxWidth: 540,
    marginTop: 24,
    fontSize: 22,
    lineHeight: 1.45,
    color: '#f1e9de',
  },
  offerSection: {
    position: 'relative',
    background: '#f0ede6',
    color: '#2d2a28',
    padding: '56px 36px 72px',
    overflow: 'hidden',
  },
  offerBackdrop: {
    position: 'absolute',
    inset: 0,
    background:
      'radial-gradient(circle at 15% 24%, rgba(0,0,0,0.55), transparent 24%), radial-gradient(circle at 84% 30%, rgba(0,0,0,0.28), transparent 22%), linear-gradient(180deg, rgba(0,0,0,0.02), rgba(0,0,0,0.08))',
    opacity: 0.3,
  },
  offerTitleWrap: {
    position: 'relative',
    zIndex: 2,
    marginBottom: 20,
  },
  offerEyebrow: {
    fontSize: 'clamp(48px, 7vw, 112px)',
    lineHeight: 0.84,
    letterSpacing: 2,
    color: 'rgba(255,255,255,0.78)',
    mixBlendMode: 'soft-light',
  },
  offerCards: {
    position: 'relative',
    zIndex: 2,
    display: 'grid',
    gap: 30,
  },
  packageCard: {
    position: 'relative',
    display: 'grid',
    gridTemplateColumns: '0.95fr 1.05fr',
    gap: 28,
    minHeight: 320,
    padding: '44px 48px',
    borderRadius: 2,
    boxShadow: '0 14px 40px rgba(0,0,0,0.18)',
    overflow: 'hidden',
  },
  packageCardLeft: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    minWidth: 0,
  },
  packageTitle: {
    fontSize: 'clamp(28px, 3vw, 52px)',
    lineHeight: 1,
    fontWeight: 300,
  },
  packagePrice: {
    fontFamily: "'Pinyon Script', cursive",
    fontSize: 34,
    marginTop: 18,
  },
  packageCardRight: {
    display: 'grid',
    gap: 22,
    alignContent: 'start',
    position: 'relative',
    zIndex: 2,
  },
  packageSummary: {
    fontSize: 15,
    lineHeight: 1.75,
    maxWidth: 420,
  },
  includesBlock: {
    display: 'grid',
    gap: 8,
  },
  includesTitle: {
    fontSize: 18,
    fontWeight: 400,
  },
  includesList: {
    listStyle: 'none',
    display: 'grid',
    gap: 6,
    fontSize: 13,
    lineHeight: 1.6,
  },
  packageImage: {
    position: 'absolute',
    right: -10,
    bottom: -20,
    width: '38%',
    maxWidth: 280,
    opacity: 0.16,
    filter: 'grayscale(1) contrast(1.12)',
    pointerEvents: 'none',
  },
  addOnSection: {
    background: '#eeebe4',
    color: '#2a2826',
    padding: '74px 36px',
  },
  addOnLayout: {
    display: 'grid',
    gridTemplateColumns: '0.8fr 1.2fr 0.8fr',
    gap: 24,
    alignItems: 'center',
    minHeight: 360,
  },
  addOnVisualLeft: {
    display: 'flex',
    justifyContent: 'center',
  },
  addOnImageLeft: {
    width: 220,
    transform: 'rotate(-8deg)',
    boxShadow: '0 16px 30px rgba(0,0,0,0.18)',
  },
  addOnContent: {
    display: 'grid',
    gap: 18,
    justifyItems: 'start',
    padding: '0 20px',
  },
  addOnEyebrow: {
    fontSize: 28,
    lineHeight: 1.35,
    textTransform: 'uppercase',
    color: '#31302d',
  },
  addOnText: {
    maxWidth: 420,
    fontSize: 14,
    lineHeight: 1.8,
    color: '#4f4a45',
  },
  addOnList: {
    listStyle: 'none',
    display: 'grid',
    gap: 10,
    fontSize: 14,
    lineHeight: 1.55,
    textTransform: 'uppercase',
    letterSpacing: 1,
  },
  addOnVisualRight: {
    display: 'flex',
    justifyContent: 'center',
  },
  addOnImageRight: {
    width: 230,
    transform: 'rotate(6deg)',
    boxShadow: '0 16px 30px rgba(0,0,0,0.2)',
  },
  script: {
    fontFamily: "'Pinyon Script', cursive",
    fontSize: 24,
    textTransform: 'none',
    marginLeft: 8,
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
