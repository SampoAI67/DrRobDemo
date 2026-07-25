import type { ReactNode } from "react";
import { RootShell } from "@/components/root-shell";

/**
 * Root layout della versione inglese. Esiste in doppia copia (route group)
 * perché ogni lingua possa dichiarare il proprio lang nell'HTML statico.
 */
export default function Layout({ children }: { children: ReactNode }) {
  return <RootShell locale="en">{children}</RootShell>;
}
