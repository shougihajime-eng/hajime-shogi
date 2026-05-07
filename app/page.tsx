import Hero from "@/components/Hero";
import About from "@/components/About";
import Schedule from "@/components/Schedule";
import Instructor from "@/components/Instructor";
import Access from "@/components/Access";
import Apply from "@/components/Apply";
import SocialLinks from "@/components/SocialLinks";
import Footer from "@/components/Footer";
import NextSessionBanner from "@/components/NextSessionBanner";
import NewsBanner from "@/components/NewsBanner";

export const revalidate = 0;

export default function Home() {
  return (
    <>
      <NextSessionBanner />
      <main className="flex-1">
        <Hero />
        <NewsBanner />
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
