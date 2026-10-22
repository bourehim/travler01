import type { Metadata } from "next";
import { Cinzel, Marcellus, Plus_Jakarta_Sans, Amiri } from "next/font/google";
import "./globals.css";

const cinzel = Cinzel({
  subsets: ["latin"],
  variable: "--font-cinzel",
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
});

const marcellus = Marcellus({
  subsets: ["latin"],
  variable: "--font-marcellus",
  weight: ["400"],
  display: "swap",
});

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-jakarta",
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

const amiri = Amiri({
  subsets: ["arabic", "latin"],
  variable: "--font-amiri",
  weight: ["400", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Mujeres de Arena | Una travesía creada desde el corazón",
  description: "Una experiencia íntima en el desierto del Sahara reservada exclusivamente para 12 mujeres. Descubre Marrakech, el Alto Atlas y las dunas de Erg Chebbi.",
  keywords: ["Mujeres de Arena", "Retiro Marruecos", "Viaje mujeres Sahara", "Erg Chebbi", "Marrakech retiro"],
  icons: {
    icon: "/logos/logo_1.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="es"
      className={`${cinzel.variable} ${marcellus.variable} ${jakarta.variable} ${amiri.variable}`}
    >
      <body className="font-body bg-[#FAF7F2] text-[#1D252C] min-h-screen flex flex-col selection:bg-[#C46849] selection:text-white">
        {children}
      </body>
    </html>
  );
}
