import type { Metadata } from "next";
import { Inter, Playfair_Display, Cinzel, Marcellus, Plus_Jakarta_Sans, Amiri } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

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
  title: "Mujeres de Arena | A journey created from the heart",
  description: "An intimate Sahara desert expedition in Morocco reserved exclusively for 12 women. Discover Marrakech, the High Atlas, and the dunes of Erg Chebbi.",
  keywords: ["Mujeres de Arena", "Morocco Retreat", "Women Sahara Trip", "Erg Chebbi", "Marrakech Retreat"],
  icons: {
    icon: "/logos/logo_3.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${playfair.variable} ${cinzel.variable} ${marcellus.variable} ${jakarta.variable} ${amiri.variable}`}
    >
      <body className="font-sans bg-[#FAF7F2] text-[#1B1108] min-h-screen flex flex-col selection:bg-[#8B4513] selection:text-white antialiased">
        {children}
      </body>
    </html>
  );
}
