export default function AuthenticitySection() {
  return (
    <section style={styles.section} className="authenticity-section">
      <div style={styles.wrapper} className="authenticity-wrapper">
        <div style={styles.leftImage} className="authenticity-left-image">
          <img
            src="/images/wherestylemeetsauthenticity1.jpeg"
            alt="Where style meets authenticity left"
            style={styles.image}
          />
        </div>

        <div style={styles.centerCopy} className="authenticity-center-copy">
          <p style={styles.subtle}>WHERE STYLE MEETS</p>
          <p style={styles.title}>Authenticity</p>
        </div>

        <div style={styles.rightColumn} className="authenticity-right-column">
          <div style={styles.topRightImage} className="authenticity-top-image">
            <img
              src="/images/wherestylemeetsauthenticity2.jpeg"
              alt="Where style meets authenticity top right"
              style={styles.image}
            />
          </div>
          <div style={styles.bottomBlock} className="authenticity-bottom-block">
            <p style={styles.bodyText} className="authenticity-body-text">A fashion & lifestyle photographer based in Amsterdam. I photograph real moments with a contemporary, refined style.</p>
            <div style={styles.bottomImage} className="authenticity-bottom-image">
              <img
                src="/images/new_wherestylemeetsauthenticity3.jpeg"
                alt="Where style meets authenticity bottom"
                style={styles.image}
              />
              <a href="#more" style={styles.link} className="authenticity-link">TELL ME MORE →</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

const styles = {
  section: {
    background: '#111',
    color: 'white',
    padding: '16px 0',
  },
  wrapper: {
    display: 'grid',
    gridTemplateColumns: '1.3fr 0.9fr 1fr',
    gap: 0,
    maxWidth: 1280,
    margin: '0 auto',
    minHeight: 240,
  },
  leftImage: {
    overflow: 'hidden',
    minHeight: 240,
  },
  image: {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
    objectPosition: 'center',
    display: 'block',
  },
  centerCopy: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '0 24px',
    textAlign: 'center',
  },
  subtle: {
    fontSize: 18,
    letterSpacing: 4,
    textTransform: 'uppercase',
    marginBottom: 16,
    color: '#ddd',
  },
  title: {
    fontFamily: "'Pinyon Script', cursive",
    fontSize: 72,
    margin: 0,
    lineHeight: 0.9,
    letterSpacing: 0,
  },
  rightColumn: {
    display: 'grid',
    gridTemplateRows: '1fr auto',
    gap: 0,
  },
  topRightImage: {
    overflow: 'hidden',
    minHeight: 120,
  },
  bottomBlock: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    padding: '24px 22px',
    background: '#111',
  },
  bodyText: {
    color: '#ddd',
    lineHeight: 1.8,
    marginBottom: 24,
    fontSize: 14,
  },
  bottomImage: {
    overflow: 'visible',
    minHeight: 80,
    marginBottom: 16,
    width: '160%',
    marginLeft: '-60%',
    position: 'relative',
    display: 'flex',
    flexDirection: 'column',
  },
  link: {
    fontSize: 11,
    letterSpacing: 2,
    textTransform: 'uppercase',
    textDecoration: 'underline',
    color: '#fff',
    alignSelf: 'flex-start',
  },
}
