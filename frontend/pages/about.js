import Head from 'next/head'
import Link from 'next/link'
import Header from '../components/Header'

const experienceSteps = [
  {
    number: '01.',
    title: 'SAY HELLO',
    copy: 'Tell me your story and what you’re hoping to capture.',
  },
  {
    number: '02.',
    title: 'PREPARE',
    copy: 'We align the mood, styling, and location before the session.',
  },
  {
    number: '03.',
    title: 'SHOOT DAY',
    copy: 'A calm, natural experience focused on genuine moments.',
  },
  {
    number: '04.',
    title: 'YOUR GALLERY',
    copy: 'Beautifully edited images delivered digitally.',
  },
]

const cherishItems = [
  {
    title: 'THE THINGS I CHERISH',
    copy: 'A commercial & fashion photographer based in Amsterdam. I photograph real moments with a contemporary, refined style.',
    image: '/images/about/authentic.jpeg',
    align: 'center',
  },
  {
    title: 'high-end visuals for you',
    copy: 'I’m Mikaela Sloane, a fashion photographer creating refined, editorial imagery with a modern edge.',
    image: '/images/about/bio-1.jpeg',
    align: 'left',
  },
  {
    title: 'as are fleeting for all',
    copy: 'My work blends clean composition with expressive storytelling and natural light.',
    image: '/images/about/bio-2.jpeg',
    align: 'right',
  },
]

export default function AboutPage() {
  return (
    <>
      <Head>
        <title>About — Livia Blake Photography</title>
        <meta
          name="description"
          content="About page mirroring a high-end editorial biography layout for Livia Blake Photography."
        />
      </Head>

      <main style={styles.page}>
        <section className="about-hero" style={styles.hero}>
          <Header showBookButton={false} showLogo={false} compact />

          <div style={styles.heroImageWrap}>
            <img src="/images/about/hero-about.jpeg" alt="About hero portrait" style={styles.heroImage} />
            <div style={styles.heroOverlay} />
            <Link href="/" style={styles.heroBrand} aria-label="Home">Lb</Link>
          </div>

          <div className="heroContent" style={styles.heroContent}>
            <h1 style={styles.heroTitle}>ABOUT ME</h1>
          </div>
        </section>

        <section className="bioSection" style={styles.bioSection}>
          <div className="bioIntro" style={styles.bioIntro}>
            <p style={styles.bioKicker}>MY BIOGRAPHY</p>
            <p style={styles.bioLead}>I’m Livia Blake</p>
            <h2 className="bioTitle" style={styles.bioTitle}>
              FASHION &amp; <em style={styles.accent}>LIFESTYLE</em>
              <br />
              PHOTOGRAPHER
            </h2>
            <p style={styles.bioCopy}>
              I create refined, editorial imagery with a modern edge. My work blends clean composition with expressive
              storytelling, capturing fashion in a way that feels elevated and effortless.
            </p>
          </div>

          <div className="bioImages" style={styles.bioImages}>
            <img src="/images/about/bio-1.jpeg" alt="Photography portrait one" style={styles.bioImageLeft} />
            <img src="/images/about/bio-2.jpeg" alt="Photography portrait two" style={styles.bioImageRight} />
          </div>
        </section>

        <section className="authenticSection" style={styles.authenticSection}>
          <div className="authenticInner" style={styles.authenticInner}>
            <p style={styles.authenticScript}>high-end visuals for you</p>
            <h2 style={styles.authenticTitle}>AUTHENTIC</h2>
            <p style={styles.authenticCopy}>{cherishItems[0].copy}</p>
            <img src="/images/about/authentic.jpeg" alt="Authentic portrait" style={styles.authenticImageLeft} />
          </div>
        </section>

        <section className="experienceSection" style={styles.experienceSection}>
          <div className="experienceIntro" style={styles.experienceIntro}>
            <p style={styles.experienceKicker}>WHAT TO EXPECT</p>
            <h2 className="experienceTitle" style={styles.experienceTitle}>THE EXPERIENCE</h2>
          </div>

          <div className="experience-grid" style={styles.experienceGrid}>
            {experienceSteps.map((step) => (
              <article className="experienceCard" key={step.title} style={styles.experienceCard}>
                <div className="experienceImageWrap" style={styles.experienceImageWrap}>
                  <img
                    src={
                      step.number === '01.'
                        ? '/images/about/bio-1.jpeg'
                        : step.number === '02.'
                          ? '/images/about/authentic.jpeg'
                          : step.number === '03.'
                            ? '/images/about/bio-2.jpeg'
                            : '/images/about/hero-about.jpeg'
                    }
                    alt={step.title}
                    style={styles.experienceImage}
                  />
                </div>
                <p style={styles.experienceNumber}>{step.number}</p>
                <h3 style={styles.experienceCardTitle}>{step.title}</h3>
                <p style={styles.experienceCardCopy}>{step.copy}</p>
              </article>
            ))}
          </div>

          <div style={styles.experienceButtonWrap}>
            <Link href="/book" className="experienceButton" style={styles.experienceButton}>SEE MY WORKS</Link>
          </div>
        </section>

        <section className="cherishSection" style={styles.cherishSection}>
          <div style={styles.cherishLeft}>
            <img src="/images/about/bio-2.jpeg" alt="" aria-hidden="true" style={styles.cherishImageSmall} />
            <p style={styles.cherishScript}>high-end visuals for you</p>
          </div>

          <div style={styles.cherishCenter}>
            <h2 className="cherishTitle" style={styles.cherishTitle}>THE THINGS I CHERISH</h2>
            <img src="/images/about/authentic.jpeg" alt="Cherish portrait" style={styles.cherishMainImage} />
            <p style={styles.cherishMainCopy}>
              I’m Mikaela Sloane, a fashion photographer creating refined, editorial imagery with a modern edge.
            </p>
          </div>

          <div style={styles.cherishRight}>
            <p style={styles.cherishSideScript}>as are fleeting for all</p>
            <img src="/images/about/bio-1.jpeg" alt="" aria-hidden="true" style={styles.cherishSideImage} />
          </div>
        </section>

        <section className="ctaSection" style={styles.ctaSection}>
          <img src="/images/about/hero-about.jpeg" alt="" aria-hidden="true" style={styles.ctaImage} />
          <div style={styles.ctaOverlay} />
          <div style={styles.ctaContent}>
            <p style={styles.ctaKicker}>Let’s talk</p>
            <h2 className="ctaTitle" style={styles.ctaTitle}>Book Your Session</h2>
            <p style={styles.ctaLead}>Fill up the form and I’ll reply with availability and the best next step.</p>
            <Link href="/book" style={styles.ctaButton}>FILL UP THE FORM</Link>
          </div>
        </section>

        <footer className="about-footer" style={styles.footer}>
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
              <div style={{ ...styles.footerCard, transform: 'rotate(-8deg) translateX(-28px) translateY(16px)' }}>
                <img src="/images/about/bio-1.jpeg" alt="" style={styles.footerCardImage} />
              </div>
              <div style={{ ...styles.footerCard, transform: 'rotate(7deg) translateX(6px) translateY(-8px)' }}>
                <img src="/images/about/hero-about.jpeg" alt="" style={styles.footerCardImage} />
              </div>
              <div style={{ ...styles.footerCard, transform: 'rotate(-4deg) translateX(36px) translateY(10px)' }}>
                <img src="/images/about/bio-2.jpeg" alt="" style={styles.footerCardImage} />
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
          .about-hero {
            min-height: auto;
          }

          .bioSection,
          .authenticSection,
          .experienceSection,
          .cherishSection {
            padding-left: 24px;
            padding-right: 24px;
          }

          .bioSection {
            grid-template-columns: 1fr;
            gap: 28px;
          }

          .bioImages {
            grid-template-columns: 1fr 1fr;
          }

          .experience-grid,
          .cherishSection,
          .about-footer {
            grid-template-columns: 1fr;
            gap: 36px;
            text-align: center;
          }

          .footer-center {
            display: none;
          }

          .cherishSection img {
            margin: 0 auto;
          }
        }

        @media (max-width: 1024px) {
          .about-hero,
          .bioSection,
          .cherishSection {
            grid-template-columns: 1fr;
          }

          .heroContent {
            padding: 0 20px 34px;
          }

          .bioSection,
          .authenticSection,
          .experienceSection,
          .cherishSection {
            padding-left: 20px;
            padding-right: 20px;
          }

          .bioSection {
            gap: 22px;
            padding-top: 68px;
            padding-bottom: 68px;
          }

          .experience-grid {
            gap: 16px;
          }

          .cherishSection {
            gap: 20px;
            padding-top: 72px;
            padding-bottom: 72px;
          }
        }

        @media (max-width: 640px) {
          .about-hero {
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

          .bioTitle {
            font-size: clamp(32px, 11vw, 54px);
          }

          .bioImages {
            grid-template-columns: 1fr;
          }

          .bioSection {
            padding-top: 58px;
            padding-bottom: 56px;
          }

          .experienceCard {
            padding: 0 0 18px;
          }

          .experienceSection {
            padding: 72px 18px;
          }

          .experienceButton {
            width: 100%;
          }

          .cherishSection {
            gap: 18px;
            padding: 64px 18px;
          }

          .cherishLeft,
          .cherishRight {
            display: none;
          }

          .ctaSection {
            min-height: 280px;
          }

          .footerColumnLeft,
          .footerColumnRight {
            padding: 36px 18px;
          }

          .about-footer {
            gap: 24px;
          }

          .about-footer {
            grid-template-columns: 1fr;
          }

          .authenticCopy {
            margin-top: -84px;
            font-size: 16px;
            line-height: 1.65;
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
    filter: 'grayscale(0.15) contrast(1.05) brightness(0.72)',
  },
  heroOverlay: {
    position: 'absolute',
    inset: 0,
    background: 'linear-gradient(180deg, rgba(0,0,0,0.48), rgba(0,0,0,0.56))',
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
    lineHeight: 0.88,
    fontWeight: 300,
    letterSpacing: 2,
    margin: 0,
  },
  bioSection: {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    gap: 36,
    background: '#0d0d0d',
    color: '#f4f0ea',
    padding: '84px 36px',
    alignItems: 'center',
  },
  bioIntro: {
    maxWidth: 520,
    margin: '0 auto',
  },
  bioKicker: {
    writingMode: 'vertical-rl',
    transform: 'rotate(180deg)',
    float: 'left',
    marginRight: 16,
    fontSize: 11,
    letterSpacing: 3,
    textTransform: 'uppercase',
    color: '#ac9e8f',
  },
  bioLead: {
    fontFamily: "'Pinyon Script', cursive",
    fontSize: 36,
    marginBottom: 8,
  },
  bioTitle: {
    fontSize: 'clamp(34px, 4vw, 68px)',
    lineHeight: 1.1,
    fontWeight: 300,
    marginBottom: 18,
  },
  accent: {
    color: '#c9a87c',
    fontStyle: 'normal',
  },
  bioCopy: {
    maxWidth: 420,
    fontSize: 13,
    lineHeight: 1.8,
    color: '#e2dbd2',
  },
  bioImages: {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    gap: 18,
    justifyItems: 'center',
  },
  bioImageLeft: {
    width: '100%',
    maxWidth: 260,
    transform: 'rotate(-4deg)',
    boxShadow: '0 16px 30px rgba(0,0,0,0.2)',
  },
  bioImageRight: {
    width: '100%',
    maxWidth: 280,
    transform: 'rotate(6deg)',
    boxShadow: '0 16px 30px rgba(0,0,0,0.2)',
  },
  authenticSection: {
    background: '#f0ede6',
    color: '#2d2a28',
    padding: '96px 36px',
  },
  authenticInner: {
    position: 'relative',
    maxWidth: 980,
    margin: '0 auto',
    minHeight: 300,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
  },
  authenticScript: {
    fontFamily: "'Pinyon Script', cursive",
    fontSize: 28,
    marginBottom: 14,
  },
  authenticTitle: {
    fontSize: 'clamp(58px, 9vw, 130px)',
    lineHeight: 0.9,
    fontWeight: 300,
    color: 'rgba(255,255,255,0.92)',
    mixBlendMode: 'soft-light',
    marginTop: 18,
  },
  authenticCopy: {
    maxWidth: 560,
    fontSize: 20,
    lineHeight: 1.6,
    marginTop: -140,
    zIndex: 2,
    position: 'relative',
  },
  authenticImageLeft: {
    position: 'absolute',
    left: 64,
    top: 96,
    width: 82,
    boxShadow: '0 10px 20px rgba(0,0,0,0.18)',
  },
  experienceSection: {
    background: '#0d0d0d',
    color: '#f4f0ea',
    padding: '100px 36px',
  },
  experienceIntro: {
    textAlign: 'center',
    marginBottom: 44,
  },
  experienceKicker: {
    letterSpacing: 4,
    textTransform: 'uppercase',
    color: '#a88f69',
    fontSize: 12,
    marginBottom: 8,
  },
  experienceTitle: {
    fontSize: 'clamp(34px, 5vw, 58px)',
    fontWeight: 300,
  },
  experienceGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(4, 1fr)',
    gap: 24,
  },
  experienceCard: {
    display: 'grid',
    gap: 10,
  },
  experienceImageWrap: {
    overflow: 'hidden',
    background: '#222',
    height: 240,
  },
  experienceImage: {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
    objectPosition: 'center',
  },
  experienceNumber: {
    color: '#a88f69',
    fontSize: 12,
    letterSpacing: 2,
  },
  experienceCardTitle: {
    fontSize: 18,
    fontWeight: 400,
  },
  experienceCardCopy: {
    fontSize: 13,
    lineHeight: 1.7,
    color: '#d0c7bc',
  },
  experienceButtonWrap: {
    display: 'flex',
    justifyContent: 'center',
    marginTop: 40,
  },
  experienceButton: {
    display: 'inline-block',
    borderRadius: 999,
    padding: '18px 30px',
    background: '#c6a27a',
    color: '#f6f1ea',
    textDecoration: 'none',
    letterSpacing: 3,
    fontSize: 12,
  },
  cherishSection: {
    display: 'grid',
    gridTemplateColumns: '0.9fr 1.2fr 0.9fr',
    gap: 36,
    alignItems: 'center',
    padding: '88px 36px',
    background: '#f0ede6',
    color: '#2d2a28',
  },
  cherishLeft: {
    display: 'grid',
    gap: 18,
    justifyItems: 'start',
  },
  cherishImageSmall: {
    width: 140,
    boxShadow: '0 14px 26px rgba(0,0,0,0.12)',
  },
  cherishScript: {
    fontFamily: "'Pinyon Script', cursive",
    fontSize: 28,
    color: '#3b3631',
  },
  cherishCenter: {
    textAlign: 'center',
    display: 'grid',
    gap: 16,
    justifyItems: 'center',
  },
  cherishTitle: {
    fontSize: 'clamp(30px, 4vw, 52px)',
    fontWeight: 300,
  },
  cherishMainImage: {
    width: 240,
    boxShadow: '0 16px 30px rgba(0,0,0,0.18)',
  },
  cherishMainCopy: {
    maxWidth: 340,
    fontSize: 13,
    lineHeight: 1.8,
  },
  cherishRight: {
    display: 'grid',
    gap: 18,
    justifyItems: 'end',
  },
  cherishSideScript: {
    fontFamily: "'Pinyon Script', cursive",
    fontSize: 26,
    color: '#3b3631',
  },
  cherishSideImage: {
    width: 190,
    boxShadow: '0 14px 26px rgba(0,0,0,0.12)',
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
