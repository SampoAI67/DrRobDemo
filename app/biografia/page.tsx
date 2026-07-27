import type { Metadata } from "next";
import { PageStub } from "@/components/page-stub";

export const metadata: Metadata = {
  title: "Biografia — Dr. Roberto Dell'Avanzato",
  description:
    "Percorso professionale del dott. Roberto Dell'Avanzato, medico chirurgo, specialista in Chirurgia.",
};

export default function Page() {
  return (
    <PageStub
      title="Biografia"
      intro="Pagina in preparazione. Raccoglierà il percorso professionale, la formazione e l'attività di insegnamento."
    />
  );
}
