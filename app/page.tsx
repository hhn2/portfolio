import AboutSection from "@/components/AboutSection"
import HeroSection from "@/components/HeroSection"
import ProjectsSection from "@/components/ProjectsSection"
import Footer from "@/components/Footer"

export default function Home() {
  return (
    <main className="mx-auto max-w-5xl px-5 sm:px-6">
      <HeroSection />
      <AboutSection />
      <ProjectsSection />
      <Footer />
    </main>
  )
}
