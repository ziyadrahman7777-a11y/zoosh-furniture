import { Navbar } from './components/layout/Navbar'
import { Footer } from './components/layout/Footer'
import { Hero } from './components/sections/Hero'
import { WhyChoose } from './components/sections/WhyChoose'
import { FeaturedCategories } from './components/sections/FeaturedCategories'
import { ProcessTimeline } from './components/sections/ProcessTimeline'
import { ProjectsShowcase } from './components/sections/ProjectsShowcase'
import { Testimonials } from './components/sections/Testimonials'
import { CtaSection } from './components/sections/CtaSection'

function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <WhyChoose />
        <FeaturedCategories />
        <ProcessTimeline />
        <ProjectsShowcase />
        <Testimonials />
        <CtaSection />
      </main>
      <Footer />
    </>
  )
}

export default App
