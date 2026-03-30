import type { Metadata } from "next";
import { Manrope, Quicksand, Source_Sans_3, EB_Garamond } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ReduxProvider from "./lib/redux/provider";

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
});

const quicksand = Quicksand({
  variable: "--font-quicksand",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const sourceSans = Source_Sans_3({
  variable: "--font-source-sans",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const ebGaramond = EB_Garamond({
  variable: "--font-eb-garamond",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  metadataBase: new URL('https://abujainternationalhotels.com'),
  title: {
    default: "Abuja International Hotels - Luxury & Comfort in the Capital",
    template: "%s | Abuja International Hotels"
  },
  description: "Abuja International Hotels offers unparalleled luxury and comfort in the heart of Abuja. Experience our premier destination for business and leisure.",
  keywords: ["Hotel", "Abuja", "Federal Capital Territory", "Luxury", "Accommodation", "Conference", "Event Center", "Nigeria"],
  authors: [{ name: "Abuja International Hotels" }],
  creator: "Abuja International Hotels",
  openGraph: {
    type: "website",
    locale: "en_NG",
    url: "https://abujainternationalhotels.com",
    title: "Abuja International Hotels - Luxury & Comfort",
    description: "A premier destination for business and leisure, set against the spectacular backdrop of Aso Rock.",
    siteName: "Abuja International Hotels",
    images: [
      {
        url: "/og-image.png", // Keep existing or update if provided later
        width: 1200,
        height: 630,
        alt: "Abuja International Hotels Luxury",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Abuja International Hotels",
    description: "Experience unparalleled luxury in the heart of Abuja.",
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${manrope.variable} ${quicksand.variable} ${sourceSans.variable} ${ebGaramond.variable} font-sans antialiased`}
      >
        <ReduxProvider>
          <Navbar />
          {children}
          <Footer />
        </ReduxProvider>
      </body>
    </html>
  );
}
