import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import FeaturedWork from "@/components/FeaturedWork";
import Services from "@/components/Services";
import Process from "@/components/Process";
import EditorialFeed from "@/components/EditorialFeed";
import About from "@/components/About";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <FeaturedWork />
        <Services />
        <Process />
        <EditorialFeed />
        <About />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
