import Head from 'next/head'
import Link from 'next/link'
import { useEffect, useMemo, useState } from 'react'
import Header from '../components/Header'

const packages = [
  {
    id: 1,
    title: 'Signature Portrait Session',
    duration: 2,
    price: '$600',
    summary: 'For founders, creatives, and personal branding.',
  },
  {
    id: 2,
    title: 'Editorial Fashion Story',
    duration: 4,
    price: '$1,200',
    summary: 'A polished editorial shoot with styling direction and premium retouching.',
  },
  {
    id: 3,
    title: 'Luxury Campaign Production',
    duration: 8,
    price: '$2,500',
    summary: 'A full-day commercial production for launch campaigns and brand stories.',
  },
]

const bookingSteps = [
  {
    title: 'Choose a package',
    copy: 'Pick the portrait, fashion, or campaign experience that fits your brief and timeline.',
  },
  {
    title: 'Check availability',
    copy: 'We confirm the calendar first so you only book time that is actually open.',
  },
  {
    title: 'Secure the booking',
    copy: 'A payment validation step confirms the booking and converts the hold into a reserved date.',
  },
]

const packageHighlights = [
  {
    title: 'Signature Portrait Session',
    copy: 'A refined portrait experience for founders, creatives, and personal branding.',
    detail: '2 hours · 20 edited images · Private gallery',
  },
  {
    title: 'Editorial Fashion Story',
    copy: 'A polished editorial shoot with moodboarding, styling direction, and premium retouching.',
    detail: '4 hours · 50+ edited images · Creative direction',
  },
  {
    title: 'Luxury Campaign Production',
    copy: 'A full-day commercial production for launch campaigns, lookbooks, and brand launches.',
    detail: '8 hours · 100+ images · Usage licensing',
  },
]

const footerCards = [
  '/images/fashionframe.jpeg',
  '/images/portraitframe.jpeg',
  '/images/commercialframe.jpeg',
]

export default function BookPage() {
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [email, setEmail] = useState('')
  const [packageId, setPackageId] = useState(packages[0].id)
  const [selectedDate, setSelectedDate] = useState('')
  const [selectedSlot, setSelectedSlot] = useState('')
  const [availability, setAvailability] = useState([])
  const [availabilityMessage, setAvailabilityMessage] = useState('Choose a date to see open slots.')
  const [message, setMessage] = useState('')
  const [status, setStatus] = useState('')
  const [booking, setBooking] = useState(null)
  const [paymentStatus, setPaymentStatus] = useState('')
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isLoadingAvailability, setIsLoadingAvailability] = useState(false)
  const [isValidatingPayment, setIsValidatingPayment] = useState(false)

  const selectedPackage = useMemo(
    () => packages.find((item) => item.id === Number(packageId)) || packages[0],
    [packageId],
  )

  const today = new Date().toISOString().slice(0, 10)

  useEffect(() => {
    async function loadAvailability() {
      if (!selectedDate) return

      setIsLoadingAvailability(true)
      setAvailabilityMessage('Checking availability...')
      setSelectedSlot('')
      setAvailability([])

      try {
        const response = await fetch(
          `http://localhost:4000/bookings/availability?date=${selectedDate}&packageId=${packageId}`,
        )
        const body = await response.json()
        const slots = body?.availability?.slots || []

        setAvailability(slots)
        setAvailabilityMessage(
          slots.some((slot) => slot.available)
            ? 'Available slots are ready below.'
            : 'No open slots for this package on the chosen date.',
        )
      } catch (error) {
        setAvailabilityMessage('Could not load availability right now.')
      } finally {
        setIsLoadingAvailability(false)
      }
    }

    loadAvailability()
  }, [packageId, selectedDate])

  async function handleSubmit(event) {
    event.preventDefault()
    if (!selectedDate || !selectedSlot) {
      setStatus('Please choose an available date and time before submitting.')
      return
    }

    setIsSubmitting(true)
    setStatus('')
    setPaymentStatus('')
    setBooking(null)

    try {
      const response = await fetch('http://localhost:4000/bookings', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: `${firstName} ${lastName}`.trim(),
          email,
          packageId: Number(packageId),
          startAt: selectedSlot,
          notes: `Package: ${selectedPackage.title}\nDate: ${selectedDate}\n\n${message}`,
        }),
      })

      const body = await response.json()
      if (body.error) {
        setStatus(body.error)
        return
      }

      setBooking(body.booking)
      setPaymentStatus('Payment session created. Validate payment to confirm the booking.')
      setStatus(body.message || 'Booking request received.')
      setFirstName('')
      setLastName('')
      setEmail('')
      setPackageId(packages[0].id)
      setSelectedDate('')
      setSelectedSlot('')
      setMessage('')
    } catch (error) {
      setStatus('Unable to send enquiry right now.')
    } finally {
      setIsSubmitting(false)
    }
  }

  async function validatePayment() {
    if (!booking?.id || !booking?.paymentReference) {
      setPaymentStatus('No payment session available to validate.')
      return
    }

    setIsValidatingPayment(true)
    setPaymentStatus('Validating payment...')

    try {
      const response = await fetch(`http://localhost:4000/bookings/${booking.id}/payment/validate`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ reference: booking.paymentReference }),
      })

      const body = await response.json()
      if (body.error) {
        setPaymentStatus(body.error)
        return
      }

      setBooking(body.booking)
      setPaymentStatus(body.message || 'Booking confirmed.')
      setStatus('Your booking is confirmed and added to the calendar hold.')
    } catch (error) {
      setPaymentStatus('Payment validation failed.')
    } finally {
      setIsValidatingPayment(false)
    }
  }

  return (
    <>
      <Head>
        <title>Inquire — Livia Blake Photography</title>
        <meta
          name="description"
          content="High-end photography booking page inspired by a luxury editorial inquiry layout."
        />
      </Head>

      <main style={styles.page}>
        <section className="book-page-hero" style={styles.hero}>
          <Header showBookButton={false} showLogo={false} compact showShell={false} />

          <div className="book-page-visual" style={styles.visualPane} aria-hidden="true">
            <div style={styles.texture} />
            <img src="/images/hero2.jpg" alt="" style={styles.visualImage} />
            <div style={styles.visualShade} />
            <div style={styles.visualFogA} />
            <div style={styles.visualFogB} />
            <Link href="/" style={styles.heroBrand} aria-label="Home">Lb</Link>
          </div>

          <div className="book-page-form" style={styles.formPane}>
            <div className="intro" style={styles.intro}>
              <p style={styles.kicker}>Private booking request</p>
              <h1 className="title" style={styles.title}>RESERVE</h1>
              <p className="lede" style={styles.lede}>
                Tell us about your shoot, pick a calendar slot, and we’ll confirm availability before payment validation.
              </p>
            </div>

            <div className="book-page-steps steps" style={styles.steps}>
              {bookingSteps.map((step, index) => (
                <div className="stepCard" key={step.title} style={styles.stepCard}>
                  <p style={styles.stepIndex}>0{index + 1}</p>
                  <h2 className="stepTitle" style={styles.stepTitle}>{step.title}</h2>
                  <p className="stepCopy" style={styles.stepCopy}>{step.copy}</p>
                </div>
              ))}
            </div>

            <form onSubmit={handleSubmit} style={styles.form}>
              <div className="selectionSummary" style={styles.selectionSummary}>
                <div>
                  <p style={styles.selectionLabel}>PACKAGE</p>
                  <p style={styles.selectionValue}>{selectedPackage.title}</p>
                </div>
                <div>
                  <p style={styles.selectionLabel}>DURATION</p>
                  <p style={styles.selectionValue}>{selectedPackage.duration} HOURS</p>
                </div>
                <div>
                  <p style={styles.selectionLabel}>PRICE</p>
                  <p style={styles.selectionValue}>{selectedPackage.price}</p>
                </div>
              </div>

              <div className="book-page-row" style={styles.row}>
                <label style={styles.field}>
                  <span style={styles.label}>FIRST NAME</span>
                  <input
                    style={styles.inputBase}
                    value={firstName}
                    onChange={(event) => setFirstName(event.target.value)}
                    required
                  />
                </label>

                <label style={styles.field}>
                  <span style={styles.label}>LAST NAME</span>
                  <input
                    style={styles.inputBase}
                    value={lastName}
                    onChange={(event) => setLastName(event.target.value)}
                    required
                  />
                </label>
              </div>

              <label style={styles.field}>
                <span style={styles.label}>EMAIL</span>
                <input
                  style={styles.inputBase}
                  type="email"
                  value={email}
                  onChange={(event) => setEmail(event.target.value)}
                  required
                />
              </label>

              <label style={styles.field}>
                <span style={styles.label}>PACKAGE</span>
                <select style={styles.inputBase} value={packageId} onChange={(event) => setPackageId(Number(event.target.value))}>
                  {packages.map((option) => (
                    <option key={option.id} value={option.id}>
                      {option.title}
                    </option>
                  ))}
                </select>
              </label>

              <div className="calendar-grid" style={styles.calendarGrid}>
                <label style={styles.field}>
                  <span style={styles.label}>PREFERRED DATE</span>
                  <input
                    style={styles.inputBase}
                    type="date"
                    min={today}
                    value={selectedDate}
                    onChange={(event) => setSelectedDate(event.target.value)}
                    required
                  />
                </label>

                <div style={styles.field}>
                  <span style={styles.label}>AVAILABLE SLOTS</span>
                  <div className="slot-grid" style={styles.slotGrid}>
                    {isLoadingAvailability && <p style={styles.availabilityText}>Checking slots…</p>}
                    {!isLoadingAvailability &&
                      availability.map((slot) => (
                        <button
                          key={slot.startAt}
                          type="button"
                          style={{
                            ...styles.slotButton,
                            ...(slot.available ? {} : styles.slotButtonDisabled),
                            ...(selectedSlot === slot.startAt ? styles.slotButtonSelected : {}),
                          }}
                          onClick={() => slot.available && setSelectedSlot(slot.startAt)}
                          disabled={!slot.available}
                        >
                          {slot.label}
                        </button>
                      ))}
                  </div>
                  <p style={styles.availabilityText}>{availabilityMessage}</p>
                </div>
              </div>

              <label style={styles.field}>
                <span style={styles.label}>PROJECT NOTES</span>
                <textarea
                  style={{ ...styles.inputBase, ...styles.textareaBase }}
                  rows={4}
                  value={message}
                  onChange={(event) => setMessage(event.target.value)}
                  placeholder="Tell us about the location, mood, wardrobe, deadlines, and any calendar constraints."
                />
              </label>

              <button type="submit" className="button" style={styles.button} disabled={isSubmitting}>
                {isSubmitting ? 'SENDING...' : 'ENQUIRE NOW'}
              </button>

              {status && <p style={styles.status}>{status}</p>}

              {booking && (
                <div style={styles.paymentCard}>
                  <p style={styles.paymentKicker}>PAYMENT VALIDATION</p>
                  <h3 style={styles.paymentTitle}>Confirm the booking with the gateway</h3>
                  <p style={styles.paymentText}>
                    A secure payment session is ready. Use the generated payment reference to validate and confirm the hold.
                  </p>
                  <div className="paymentRow" style={styles.paymentRow}>
                    <div>
                      <p style={styles.selectionLabel}>REFERENCE</p>
                      <p className="paymentReference" style={styles.paymentReference}>{booking.paymentReference}</p>
                    </div>
                    <button type="button" className="paymentButton" style={styles.paymentButton} onClick={validatePayment} disabled={isValidatingPayment}>
                      {isValidatingPayment ? 'VALIDATING...' : 'VALIDATE PAYMENT'}
                    </button>
                  </div>
                  {paymentStatus && <p className="paymentStatus" style={styles.paymentStatus}>{paymentStatus}</p>}
                </div>
              )}
            </form>
          </div>
        </section>

        <section id="footer" className="book-page-footer" style={styles.footer}>
          <div className="footerColumnLeft" style={styles.footerColumnLeft}>
            <h2 className="footerHeading" style={styles.footerHeading}>PACKAGES</h2>
            <div style={styles.packageList}>
              {packageHighlights.map((item) => (
                <article key={item.title} style={styles.packageItem}>
                  <h3 style={styles.packageTitle}>{item.title}</h3>
                  <p style={styles.packageCopy}>{item.copy}</p>
                  <p style={styles.packageDetail}>{item.detail}</p>
                </article>
              ))}
            </div>
          </div>

          <div style={styles.footerCenter}>
            <div style={styles.cardStack}>
              {footerCards.map((src, index) => (
                <div
                  key={src}
                  style={{
                    ...styles.card,
                    transform: cardTransforms[index],
                    zIndex: footerCards.length - index,
                  }}
                >
                  <img src={src} alt="" style={styles.cardImage} />
                </div>
              ))}
              <div style={styles.cardLogo}>Lb</div>
            </div>
          </div>

          <div className="footerColumnRight" style={styles.footerColumnRight}>
            <p style={styles.footerCopy}>
              Availability is limited and every booking is handled with careful planning, secure payment, and clear communication.
            </p>
            <nav className="footerNav" style={styles.footerNav}>
              <a href="/">HOME</a>
              <a href="/#collections">GALLERY</a>
              <a href="/#about">ABOUT</a>
              <a href="/#portfolio">PORTFOLIO</a>
            </nav>
            <p style={styles.terms}>Stripe checkout, calendar hold, and confirmation email are sent after availability is approved.</p>
            <div style={styles.socials}>
              <a href="#" aria-label="Instagram">◎</a>
              <a href="#" aria-label="Email">✉</a>
              <a href="#" aria-label="Pinterest">◔</a>
            </div>
            <p style={styles.credit}>© Livia Blake Photography</p>
          </div>
        </section>
      </main>

      <style jsx global>{`
        html, body {
          background: #0b0b0b;
        }

        @media (max-width: 980px) {
          .book-page-hero {
            grid-template-columns: 1fr;
          }

          .book-page-visual {
            min-height: 40vh;
          }

          .book-page-footer {
            grid-template-columns: 1fr;
            gap: 28px;
            text-align: center;
          }

          .footer-center {
            display: none;
          }

          .book-page-steps {
            grid-template-columns: 1fr;
            max-width: 100%;
            gap: 14px;
          }

          .book-page-form .book-page-row,
          .book-page-form .calendar-grid {
            grid-template-columns: 1fr;
          }

          .book-page-form .slot-grid {
            grid-template-columns: 1fr 1fr;
          }
        }

        @media (max-width: 1024px) {
          .book-page-form {
            padding: 22px 24px 34px;
          }

          .book-page-form .intro {
            margin-top: 3vh;
          }

          .book-page-visual {
            min-height: 36vh;
          }

          .book-page-form .steps {
            max-width: 100%;
            gap: 14px;
          }

          .book-page-hero {
            min-height: 84vh;
          }

          .heroBrand {
            left: 18px;
            bottom: 18px;
            font-size: 54px;
          }
        }

        @media (max-width: 640px) {
          .book-page-form {
            padding: 20px 18px 32px 18px !important;
          }

          .book-page-form .topBar {
            padding: 0;
            margin-bottom: 4px;
          }

          .book-page-form .title {
            font-size: clamp(48px, 14vw, 68px);
          }

          .book-page-form .lede {
            font-size: 17px;
            line-height: 1.5;
            margin-top: 14px;
          }

          .book-page-form .steps {
            margin-top: 16px;
            gap: 10px;
          }

          .book-page-form .selectionSummary {
            grid-template-columns: 1fr;
            gap: 12px;
            padding-top: 14px;
          }

          .book-page-form .book-page-row,
          .book-page-form .calendar-grid {
            gap: 18px;
          }

          .book-page-form .slot-grid {
            grid-template-columns: 1fr;
          }

          .book-page-form .button,
          .book-page-form .paymentButton {
            width: 100%;
          }

          .book-page-form .paymentRow {
            flex-direction: column;
            align-items: stretch;
          }

          .book-page-form .paymentReference {
            font-size: 13px;
          }

          .book-page-footer {
            gap: 22px;
          }

          .book-page-footer .footerColumnLeft,
          .book-page-footer .footerColumnRight {
            padding: 32px 18px;
          }
        }

        @media (max-width: 480px) {
          .book-page-visual {
            min-height: 38vh;
          }

          .book-page-form .stepCard {
            padding-top: 10px;
          }

          .book-page-form .stepTitle {
            font-size: 16px;
          }

          .book-page-form .stepCopy,
          .book-page-form .availabilityText,
          .book-page-form .paymentText {
            font-size: 12px;
            line-height: 1.65;
          }

          .book-page-footer .footerHeading {
            font-size: 38px;
          }

          .book-page-footer .footerNav {
            grid-template-columns: 1fr 1fr;
            justify-content: center;
          }

          .book-page-form .topBar {
            padding-bottom: 10px;
          }

          .book-page-form .paymentCard {
            padding: 18px 16px;
          }
        }
      `}</style>
    </>
  )
}

const cardTransforms = [
  'rotate(-8deg) translateX(-28px) translateY(16px)',
  'rotate(7deg) translateX(6px) translateY(-8px)',
  'rotate(-4deg) translateX(36px) translateY(10px)',
]

const styles = {
  page: {
    minHeight: '100vh',
    background: '#0b0b0b',
    color: '#f4f0ea',
  },
  hero: {
    position: 'relative',
    display: 'grid',
    gridTemplateColumns: '1.35fr 0.65fr',
    minHeight: '100vh',
    alignItems: 'stretch',
  },
  visualPane: {
    position: 'relative',
    overflow: 'hidden',
    background: '#111',
    minHeight: '100vh',
  },
  heroBrand: {
    position: 'absolute',
    top: '18px',
    left: '18px',
    bottom: 'auto',
    zIndex: 6,
    fontFamily: "'Pinyon Script', cursive",
    fontSize: '68px',
    lineHeight: 0.8,
    color: '#f7f2eb',
    textDecoration: 'none',
    textShadow: '0 3px 12px rgba(0,0,0,0.45)',
  },
  texture: {
    position: 'absolute',
    inset: 0,
    background:
      'linear-gradient(120deg, rgba(255,255,255,0.08) 0%, rgba(255,255,255,0) 30%), repeating-linear-gradient(135deg, rgba(255,255,255,0.05) 0 2px, rgba(0,0,0,0) 2px 18px)',
    opacity: 0.28,
    zIndex: 2,
    mixBlendMode: 'screen',
  },
  visualImage: {
    position: 'absolute',
    inset: 0,
    width: '100%',
    height: '100%',
    display: 'block',
    objectFit: 'cover',
    objectPosition: 'left top',
    filter: 'grayscale(1) contrast(1.05) brightness(0.75)',
  },
  visualShade: {
    position: 'absolute',
    inset: 0,
    background:
      'radial-gradient(circle at 45% 48%, rgba(0,0,0,0.1) 0%, rgba(0,0,0,0.35) 36%, rgba(0,0,0,0.92) 100%)',
  },
  visualFogA: {
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: '-2%',
    height: '22%',
    background: 'radial-gradient(circle at 20% 60%, rgba(255,255,255,0.18), transparent 55%)',
    filter: 'blur(12px)',
    opacity: 0.6,
  },
  visualFogB: {
    position: 'absolute',
    right: '-6%',
    bottom: '10%',
    width: '50%',
    height: '18%',
    background: 'radial-gradient(circle, rgba(255,255,255,0.18), transparent 70%)',
    filter: 'blur(22px)',
    opacity: 0.45,
  },
  formPane: {
    position: 'relative',
    background: '#0b0b0b',
    padding: '16px 72px 40px 72px',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
  topBar: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    gap: 24,
  },
  brand: {
    fontFamily: "'Pinyon Script', cursive",
    fontSize: 86,
    lineHeight: 0.8,
    color: '#f7f2ec',
    textDecoration: 'none',
  },
  explore: {
    display: 'inline-flex',
    alignItems: 'center',
    gap: 10,
    color: '#ece8e0',
    fontSize: 12,
    letterSpacing: 2,
    textTransform: 'uppercase',
    textDecoration: 'none',
  },
  exploreIcon: {
    display: 'inline-flex',
    flexDirection: 'column',
    gap: 3,
  },
  exploreIconBar: {
    width: 16,
    height: 1,
    background: 'currentColor',
    display: 'block',
  },
  intro: {
    maxWidth: 440,
    marginTop: 0,
  },
  steps: {
    display: 'grid',
    gap: 18,
    gridTemplateColumns: 'repeat(3, minmax(0, 1fr))',
    marginTop: 28,
    maxWidth: 560,
  },
  stepCard: {
    borderTop: '1px solid rgba(255,255,255,0.18)',
    paddingTop: 14,
  },
  stepIndex: {
    fontSize: 11,
    letterSpacing: 3,
    color: '#b7ada1',
    marginBottom: 8,
  },
  stepTitle: {
    fontSize: 18,
    fontWeight: 300,
    marginBottom: 10,
  },
  stepCopy: {
    fontSize: 13,
    lineHeight: 1.7,
    color: '#d8d1c8',
  },
  kicker: {
    fontSize: 11,
    letterSpacing: 3,
    textTransform: 'uppercase',
    color: '#bfb7ad',
    marginBottom: 18,
  },
  title: {
    fontSize: 'clamp(72px, 7vw, 110px)',
    lineHeight: 0.9,
    letterSpacing: 2,
    fontWeight: 300,
    margin: 0,
  },
  lede: {
    marginTop: 24,
    fontSize: 22,
    lineHeight: 1.45,
    color: '#e7dfd6',
    maxWidth: 500,
  },
  form: {
    marginTop: 40,
    display: 'grid',
    gap: 28,
    maxWidth: 510,
  },
  selectionSummary: {
    display: 'grid',
    gridTemplateColumns: 'repeat(3, 1fr)',
    gap: 14,
    padding: '18px 0 6px',
    borderTop: '1px solid rgba(255,255,255,0.14)',
    borderBottom: '1px solid rgba(255,255,255,0.14)',
  },
  selectionLabel: {
    fontSize: 10,
    letterSpacing: 2,
    textTransform: 'uppercase',
    color: '#a9a097',
    marginBottom: 6,
  },
  selectionValue: {
    fontSize: 15,
    lineHeight: 1.4,
    color: '#f4f0ea',
  },
  row: {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    gap: 32,
  },
  calendarGrid: {
    display: 'grid',
    gridTemplateColumns: '0.9fr 1.1fr',
    gap: 28,
    alignItems: 'start',
  },
  field: {
    display: 'grid',
    gap: 12,
  },
  inputBase: {
    background: 'transparent',
    border: 'none',
    borderBottom: '1px solid rgba(255,255,255,0.86)',
    borderRadius: 0,
    color: '#f4f0ea',
    padding: '10px 0 16px',
    fontSize: 16,
    letterSpacing: 0.4,
    outline: 'none',
    width: '100%',
  },
  textareaBase: {
    minHeight: 120,
    resize: 'vertical',
  },
  slotGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(2, minmax(0, 1fr))',
    gap: 10,
  },
  slotButton: {
    background: 'transparent',
    color: '#f4f0ea',
    border: '1px solid rgba(255,255,255,0.22)',
    borderRadius: 999,
    padding: '11px 14px',
    fontSize: 12,
    letterSpacing: 1.1,
  },
  slotButtonDisabled: {
    opacity: 0.35,
    cursor: 'not-allowed',
  },
  slotButtonSelected: {
    background: '#f4f0ea',
    color: '#0b0b0b',
  },
  availabilityText: {
    marginTop: 10,
    fontSize: 13,
    color: '#cfc7bc',
  },
  label: {
    fontSize: 13,
    letterSpacing: 0,
    textTransform: 'uppercase',
    color: '#f4f0ea',
    fontWeight: 600,
  },
  button: {
    width: 240,
    marginTop: 10,
    borderRadius: 999,
    padding: '18px 28px',
    background: '#2b2b2b',
    border: '1px solid rgba(255,255,255,0.16)',
    boxShadow: '0 0 0 1px rgba(255,255,255,0.03) inset',
    letterSpacing: 4,
    color: '#fff',
  },
  status: {
    marginTop: -8,
    color: '#d8cdbd',
  },
  paymentCard: {
    marginTop: 10,
    padding: 20,
    border: '1px solid rgba(255,255,255,0.16)',
    borderRadius: 20,
    background: 'rgba(255,255,255,0.03)',
    display: 'grid',
    gap: 14,
  },
  paymentKicker: {
    fontSize: 10,
    letterSpacing: 3,
    textTransform: 'uppercase',
    color: '#b7ada1',
  },
  paymentTitle: {
    fontSize: 24,
    fontWeight: 300,
  },
  paymentText: {
    fontSize: 14,
    lineHeight: 1.7,
    color: '#d8d1c8',
  },
  paymentRow: {
    display: 'flex',
    gap: 18,
    alignItems: 'center',
    justifyContent: 'space-between',
    flexWrap: 'wrap',
  },
  paymentReference: {
    fontSize: 15,
    color: '#f4f0ea',
    wordBreak: 'break-all',
  },
  paymentButton: {
    width: 'auto',
    padding: '16px 22px',
    borderRadius: 999,
    background: '#f4f0ea',
    color: '#0b0b0b',
    letterSpacing: 3,
  },
  paymentStatus: {
    fontSize: 13,
    color: '#d8cdbd',
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
  packageList: {
    display: 'grid',
    gap: 22,
  },
  packageItem: {
    paddingTop: 18,
    borderTop: '1px solid rgba(0,0,0,0.12)',
  },
  packageTitle: {
    fontSize: 22,
    fontWeight: 300,
    marginBottom: 8,
  },
  packageCopy: {
    fontSize: 15,
    lineHeight: 1.7,
    marginBottom: 8,
  },
  packageDetail: {
    fontSize: 13,
    letterSpacing: 1.2,
    textTransform: 'uppercase',
    opacity: 0.78,
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
  card: {
    position: 'absolute',
    width: 220,
    height: 270,
    background: '#111',
    boxShadow: '0 22px 45px rgba(0,0,0,0.22)',
    overflow: 'hidden',
  },
  cardImage: {
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
  footerEmphasis: {
    fontFamily: "'Pinyon Script', cursive",
    fontSize: 24,
    fontStyle: 'normal',
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
