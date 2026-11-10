import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Catalogue from "@/components/Catalogue";
import Footer from "@/components/Footer";
import { getPieces } from "@/lib/pieces";

export default async function Home() {
  const pieces = await getPieces();
  return (
    <main>
      <Header />
      <Hero />
      <Catalogue pieces={pieces} />
      <Footer />
    </main>
  );
}
