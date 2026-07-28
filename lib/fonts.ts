import { Archivo, Hanken_Grotesk } from "next/font/google";

/**
 * Archivo è variabile sull'asse di larghezza: è l'identità tipografica del sito
 * (sans espanso, in corpo piccolo). next/font self-hosta i file al build, quindi
 * a runtime non parte nessuna richiesta verso Google.
 *
 * Sta in un modulo suo perché i root layout sono due, uno per lingua: chiamando
 * next/font una volta sola i due layout condividono gli stessi file, invece di
 * generarne due copie.
 */
const archivo = Archivo({
  subsets: ["latin"],
  axes: ["wdth"],
  variable: "--font-archivo",
  display: "swap",
});

const hanken = Hanken_Grotesk({
  subsets: ["latin"],
  weight: ["300", "400"],
  variable: "--font-hanken",
  display: "swap",
});

export const fontVariables = `${archivo.variable} ${hanken.variable}`;
