import { Navbar } from "@/components/navbar";
import { Hero } from "@/components/hero";
import { Features } from "@/components/features";
import { Projects } from "@/components/projects";
import { SocialProof } from "@/components/social-proof";
import { Certifications } from "@/components/certifications";
import { Availability } from "@/components/availability";
import { Faq } from "@/components/faq";
import { Footer } from "@/components/footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Features />
        <Projects />
        <SocialProof />
        <Certifications />
        <Availability />
        <Faq />
      </main>
      <Footer />
    </>
  );
}
