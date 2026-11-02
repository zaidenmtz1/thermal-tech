import { About } from '@/components/site/about'
import { CtaBand } from '@/components/site/cta-band'
import { Footer } from '@/components/site/footer'
import { Header } from '@/components/site/header'
import { Hero } from '@/components/site/hero'
import { Projects } from '@/components/site/projects'
import { Scope } from '@/components/site/scope'
import { Services } from '@/components/site/services'
import { Videos } from '@/components/site/videos'

export default function HomePage() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Services />
        <About />
        <Scope />
        <Projects />
        <Videos />
        <CtaBand />
      </main>
      <Footer />
    </>
  )
}
