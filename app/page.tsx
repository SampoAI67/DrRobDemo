import { Hero } from "@/components/sections/hero";
import { Statement } from "@/components/sections/statement";
import { Treatments } from "@/components/sections/treatments";
import { Concerns } from "@/components/sections/concerns";
import { Endolift } from "@/components/sections/endolift";
import { Method } from "@/components/sections/method";
import { Proof } from "@/components/sections/proof";

export default function Home() {
  return (
    <main id="contenuto">
      <Hero />
      <Statement />
      <Treatments />
      <Concerns />
      <Endolift />
      <Method />
      <Proof />
    </main>
  );
}
