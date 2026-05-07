import Hero from "@/components/Hero";
import About from "@/components/About";
import Schedule from "@/components/Schedule";
import Instructor from "@/components/Instructor";
import Access from "@/components/Access";
import Apply from "@/components/Apply";
import SocialLinks from "@/components/SocialLinks";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <main className="flex-1">
        <Hero />
        <About />
        <Schedule />
        <Instructor />
        <Access />
        <Apply />
        <SocialLinks />
      </main>
      <Footer />
    </>
  );
}
