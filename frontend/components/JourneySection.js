export default function JourneySection() {
  return (
    <section style={styles.section} className="home-journey">
      <div style={styles.container} className="home-journey-grid">
        <div style={styles.sideColumn} className="home-journey-left">
          <div style={styles.imageLeftWrapper} className="home-journey-image home-journey-image-left">
            <img
              src="/images/portfolio/grid-2.jpeg"
              alt="Featured fashion work"
              style={styles.imageContent}
              onError={(e) => e.target.style.display = 'none'}
            />
          </div>
          <p style={styles.scriptNote}>high-end visuals for you</p>
        </div>

        <div style={styles.center} className="home-journey-center">
          <p style={styles.kicker}>gallery highlights</p>
          <h2 style={styles.title}>THE THINGS I CHERISH</h2>
          <div style={styles.centerImageWrapper}>
            <img
              src="/images/packages/package-branding.jpeg"
              alt="Featured portrait work"
              style={styles.centerImage}
              onError={(e) => e.target.style.display = 'none'}
            />
          </div>
          <p style={styles.centerCopy}>
            A refined portrait-led approach for creatives, founders, and brands who want imagery that feels elegant and alive.
          </p>
        </div>

        <div style={styles.sideColumn} className="home-journey-right">
          <p style={{ ...styles.scriptNote, ...styles.scriptNoteRight }}>as are fleeting for all</p>
          <div style={styles.imageRightWrapper} className="home-journey-image home-journey-image-right">
          <img
              src="/images/portfolio/feature-1.jpeg"
              alt="Featured portrait work"
              style={styles.imageContent}
              onError={(e) => e.target.style.display = 'none'}
            />
          </div>
        </div>
      </div>
    </section>
  )
}

const styles = {
  section: {
    background: '#f4f1ea',
    color: '#1a1a1a',
    padding: '84px 0',
  },
  container: {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr 1fr',
    gap: 26,
    alignItems: 'start',
    maxWidth: 1280,
    margin: '0 auto',
  },
  sideColumn: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    minHeight: 500,
    gap: 18,
  },
  imageLeftWrapper: {
    overflow: 'hidden',
    background: '#ddd',
    minHeight: 180,
  },
  imageRightWrapper: {
    overflow: 'hidden',
    background: '#ddd',
    minHeight: 200,
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
    padding: '8px 12px',
    minHeight: 500,
  },
  kicker: {
    fontSize: 11,
    letterSpacing: 3,
    textTransform: 'uppercase',
    color: '#8d8479',
    marginBottom: 14,
  },
  title: {
    fontSize: 'clamp(34px, 3.4vw, 54px)',
    fontWeight: 300,
    lineHeight: 1,
    marginBottom: 26,
  },
  centerImageWrapper: {
    width: '78%',
    maxWidth: 360,
    minHeight: 280,
    overflow: 'hidden',
    background: '#ddd',
    marginBottom: 18,
  },
  centerImage: {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
    objectPosition: 'center',
    display: 'block',
  },
  centerCopy: {
    maxWidth: 360,
    fontSize: 14,
    lineHeight: 1.7,
    color: '#4f473f',
  },
  scriptNote: {
    fontFamily: "'Pinyon Script', cursive",
    fontSize: 28,
    lineHeight: 1,
    color: '#6c6259',
    textAlign: 'left',
    marginTop: 6,
  },
  scriptNoteRight: {
    textAlign: 'right',
    alignSelf: 'flex-end',
  },
}
