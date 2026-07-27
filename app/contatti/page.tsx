import type { Metadata } from "next";
import { PageStub } from "@/components/page-stub";

export const metadata: Metadata = {
  title: "Contatti — Dr. Roberto Dell'Avanzato",
  description:
    "Studio in Via Andegari 18, 20121 Milano. Telefono +39 02 7202 3474.",
};

export default function Page() {
  return (
    <PageStub
      title="Prenota una visita"
      intro="Pagina in preparazione. Studio in Via Andegari 18, 20121 Milano — tel. +39 02 7202 3474. Orari e indirizzo e-mail da confermare."
    />
  );
}
