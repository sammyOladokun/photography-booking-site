import Header from '../components/Header'
import Hero from '../components/Hero'
import AuthenticitySection from '../components/AuthenticitySection'
import Collections from '../components/Collections'
import Testimonial from '../components/Testimonial'
import CTA from '../components/CTA'
import JourneySection from '../components/JourneySection'
import Footer from '../components/Footer'

export default function Home() {
  return (
    <>
      <Header />
      <Hero photographer={"LIVIA BLAKE"} />
      <AuthenticitySection />
      <Collections />
      <Testimonial quote="I'd like a full session to complete Instagram photos and never interrupting the moment. best photographer best friend." author="CHLOE SMITH" />
      <CTA />
      <JourneySection />
      <Footer />
    </>
  )
}
