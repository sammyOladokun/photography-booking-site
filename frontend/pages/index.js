import { useState } from 'react'
import Header from '../components/Header'
import Hero from '../components/Hero'
import AuthenticitySection from '../components/AuthenticitySection'
import Collections from '../components/Collections'
import Testimonial from '../components/Testimonial'
import CTA from '../components/CTA'
import JourneySection from '../components/JourneySection'
import Footer from '../components/Footer'

export default function Home() {
  const [showBookingModal, setShowBookingModal] = useState(false)

  return (
    <>
      <Header onBookClick={() => setShowBookingModal(true)} />
      <Hero photographer={"LIVIA BLAKE"} />
      <AuthenticitySection />
      <Collections />
      <Testimonial quote="I'd like a full session to complete Instagram photos and never interrupting the moment. best photographer best friend." author="CHLOE SMITH" />
      <CTA onBookClick={() => setShowBookingModal(true)} />
      <JourneySection />
      <Footer />
      {showBookingModal && <BookingModal onClose={() => setShowBookingModal(false)} />}
    </>
  )
}

function BookingModal({ onClose }) {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [date, setDate] = useState('')
  const [msg, setMsg] = useState(null)

  async function submit(e) {
    e.preventDefault()
    try {
      const res = await fetch('http://localhost:4000/bookings', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, email, date })
      })
      const body = await res.json()
      setMsg(body.message || 'Booking received')
      setTimeout(onClose, 1500)
    } catch (err) {
      setMsg('Error: ' + err.message)
    }
  }

  return (
    <div style={styles.modal}>
      <div style={styles.modalContent}>
        <button style={styles.closeBtn} onClick={onClose}>✕</button>
        <h2 style={{marginBottom: 24}}>Request a Session</h2>
        <form onSubmit={submit} style={styles.form}>
          <input placeholder="Name" value={name} onChange={e=>setName(e.target.value)} required />
          <input placeholder="Email" type="email" value={email} onChange={e=>setEmail(e.target.value)} required />
          <input placeholder="Preferred Date" type="datetime-local" value={date} onChange={e=>setDate(e.target.value)} required />
          <button type="submit">Submit Request</button>
        </form>
        {msg && <p style={{marginTop: 16, textAlign: 'center'}}>{msg}</p>}
      </div>
    </div>
  )
}

const styles = {
  modal: {
    position: 'fixed',
    inset: 0,
    background: 'rgba(0,0,0,0.6)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: 1000,
  },
  modalContent: {
    background: 'white',
    padding: '48px 32px',
    borderRadius: 0,
    maxWidth: 400,
    position: 'relative',
  },
  closeBtn: {
    position: 'absolute',
    top: 16,
    right: 16,
    background: 'transparent',
    color: '#1a1a1a',
    fontSize: 24,
    padding: 0,
  },
  form: {
    display: 'grid',
    gap: 16,
  }
}
