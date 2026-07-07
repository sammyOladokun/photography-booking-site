import { useState } from 'react'
import Link from 'next/link'

const defaultMenuItems = [
  { label: 'HOME', href: '/' },
  { label: 'ABOUT', href: '/about' },
  { label: 'PORTFOLIO', href: '/portfolio' },
  { label: 'PACKAGES', href: '/packages' },
  { label: 'BOOKING', href: '/book' },
]

export default function Header({
  showBookButton = true,
  bookHref = '/book',
  logoHref = '/',
  menuItems = defaultMenuItems,
  compact = false,
  showLogo = true,
  showShell = true,
}) {
  const [open, setOpen] = useState(false)

  return (
    <>
      {showShell ? (
        <header
          style={{
            ...styles.header,
            ...(compact ? styles.headerCompact : {}),
          }}
          className="header"
        >
          <div style={compact ? styles.leftSlotCompact : styles.leftSlot} />
          {showLogo ? (
            <Link
              href={logoHref}
              style={{
                ...styles.logo,
                ...(compact ? styles.logoCompact : {}),
              }}
              className="header-logo"
              aria-label="Home"
            >
              Lb
            </Link>
          ) : (
            <div style={compact ? styles.logoCompactSpacer : styles.logoSpacer} />
          )}
          <div style={compact ? styles.rightSlotCompact : styles.rightSlot}>
            {showBookButton && (
              <Link
                href={bookHref}
                style={{
                  ...styles.bookBtn,
                  ...(compact ? styles.bookBtnCompact : {}),
                }}
              >
                Book
              </Link>
            )}
            <button aria-label="Menu" style={styles.menuBtn} onClick={() => setOpen(true)}>
              <svg width="22" height="22" viewBox="0 0 256 256" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="40" y="56" width="176" height="16" rx="8" fill="#fff" />
                <rect x="40" y="120" width="176" height="16" rx="8" fill="#fff" />
                <rect x="40" y="184" width="176" height="16" rx="8" fill="#fff" />
              </svg>
            </button>
          </div>
        </header>
      ) : (
        <div
          style={{
            ...styles.menuOnlyHeader,
            ...(compact ? styles.menuOnlyHeaderCompact : {}),
          }}
          className="header"
        >
          <button aria-label="Menu" style={styles.menuBtn} onClick={() => setOpen(true)}>
            <svg width="22" height="22" viewBox="0 0 256 256" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect x="40" y="56" width="176" height="16" rx="8" fill="#fff" />
              <rect x="40" y="120" width="176" height="16" rx="8" fill="#fff" />
              <rect x="40" y="184" width="176" height="16" rx="8" fill="#fff" />
            </svg>
          </button>
        </div>
      )}

      {open && (
        <div style={styles.menuOverlay} onClick={() => setOpen(false)}>
          <div style={styles.menuContent} onClick={e => e.stopPropagation()} className="menu-content">
            <button style={styles.closeMenu} onClick={() => setOpen(false)}>✕</button>
            <nav style={styles.menuNav} className="menu-nav">
              {menuItems.map((item) => (
                <a key={item.href} href={item.href}>
                  {item.label}
                </a>
              ))}
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
    top: 0,
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
  headerCompact: {
    padding: '14px 20px',
  },
  menuOnlyHeader: {
    position: 'absolute',
    top: 0,
    right: 0,
    zIndex: 120,
    pointerEvents: 'auto',
    background: 'transparent',
    padding: '14px 20px',
  },
  menuOnlyHeaderCompact: {
    padding: '14px 20px',
  },
  leftSlot: { width: 48 },
  leftSlotCompact: { width: 32 },
  rightSlot: { width: 48, display: 'flex', justifyContent: 'flex-end', gap: 8 },
  rightSlotCompact: { width: 32, display: 'flex', justifyContent: 'flex-end', gap: 6 },
  logo: {
    fontFamily: "'Pinyon Script', cursive",
    fontSize: 74,
    fontWeight: 400,
    color: '#fff',
    textAlign: 'center',
    textShadow: '0 1px 0 rgba(0,0,0,0.6)',
    textDecoration: 'none',
    lineHeight: 0.8,
  },
  logoCompact: {
    fontSize: 58,
  },
  logoSpacer: {
    width: 74,
    height: 74,
  },
  logoCompactSpacer: {
    width: 58,
    height: 58,
  },
  bookBtn: {
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    background: 'rgba(255,255,255,0.14)',
    border: '1px solid rgba(255,255,255,0.26)',
    backdropFilter: 'blur(8px)',
    color: '#fff',
  },
  bookBtnCompact: {
    padding: '8px 12px',
    fontSize: 11,
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
