import { useState } from 'react'

export default function Header({ onBookClick }) {
  const [open, setOpen] = useState(false)

  return (
    <>
      <header style={styles.header} className="header">
        <div style={styles.leftSlot} />
        <div style={styles.logo} className="header-logo">Lb</div>
        <div style={styles.rightSlot}>
          <button style={styles.bookBtn} onClick={onBookClick}>Book</button>
          <button aria-label="Menu" style={styles.menuBtn} onClick={() => setOpen(true)}>
            <svg width="22" height="22" viewBox="0 0 256 256" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect x="40" y="56" width="176" height="16" rx="8" fill="#fff" />
              <rect x="40" y="120" width="176" height="16" rx="8" fill="#fff" />
              <rect x="40" y="184" width="176" height="16" rx="8" fill="#fff" />
            </svg>
          </button>
        </div>
      </header>

      {open && (
        <div style={styles.menuOverlay} onClick={() => setOpen(false)}>
          <div style={styles.menuContent} onClick={e => e.stopPropagation()} className="menu-content">
            <button style={styles.closeMenu} onClick={() => setOpen(false)}>✕</button>
            <nav style={styles.menuNav} className="menu-nav">
              <a href="#home">HOME</a>
              <a href="#portfolio">PORTFOLIO</a>
              <a href="#about">ABOUT</a>
              <a href="#contact">CONTACT</a>
            </nav>
          </div>
        </div>
      )}
    </>
  )
}

const styles = {
  header: {
    position: 'absolute',
    top: 10,
    left: 0,
    right: 0,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: '18px 28px',
    zIndex: 120,
    pointerEvents: 'auto',
    background: 'transparent',
  },
  leftSlot: { width: 48 },
  rightSlot: { width: 48, display: 'flex', justifyContent: 'flex-end', gap: 8 },
  logo: {
    fontSize: 20,
    fontWeight: 400,
    letterSpacing: 4,
    textTransform: 'uppercase',
    color: '#fff',
    textAlign: 'center',
    textShadow: '0 1px 0 rgba(0,0,0,0.6)'
  },
  bookBtn: {
    background: 'rgba(255,255,255,0.14)',
    border: '1px solid rgba(255,255,255,0.26)',
    backdropFilter: 'blur(8px)',
  },
  menuBtn: {
    background: 'transparent',
    border: 'none',
    padding: 6,
    cursor: 'pointer',
  },
  menuOverlay: {
    position: 'fixed',
    inset: 0,
    background: 'rgba(0,0,0,0.6)',
    zIndex: 200,
    display: 'flex',
    alignItems: 'flex-start',
    justifyContent: 'flex-end',
  },
  menuContent: {
    width: 320,
    background: '#111',
    color: '#fff',
    padding: 28,
    height: '100%',
  },
  closeMenu: {
    background: 'transparent',
    color: '#fff',
    border: 'none',
    fontSize: 20,
    position: 'absolute',
    right: 18,
    top: 18,
    cursor: 'pointer',
  },
  menuNav: {
    display: 'flex',
    flexDirection: 'column',
    gap: 18,
    marginTop: 48,
    fontSize: 18,
    textTransform: 'uppercase',
    letterSpacing: 2,
  }
}
