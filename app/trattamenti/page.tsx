import type { Metadata } from "next";
import { PageStub } from "@/components/page-stub";

export const metadata: Metadata = {
  title: "Trattamenti — Dr. Roberto Dell'Avanzato",
  description:
    "Elenco dei trattamenti di chirurgia e medicina estetica eseguiti nello studio di Via Andegari 18, Milano.",
};

export default function Page() {
  return (
    <PageStub
      title="Trattamenti"
      intro="Pagina in preparazione. Ogni trattamento avrà una scheda informativa dedicata."
    />
  );
}
