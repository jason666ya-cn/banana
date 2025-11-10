import Header from "@/components/header"
import Hero from "@/components/hero"
import Features from "@/components/features"
import CaseStudies from "@/components/case-studies"
import Testimonials from "@/components/testimonials"
import FAQ from "@/components/faq"
import Footer from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      <Hero />
      <Features />
      <CaseStudies />
      <Testimonials />
      <FAQ />
      <Footer />
    </main>
  )
}
