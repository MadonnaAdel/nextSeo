import localFont from "next/font/local";
import "./globals.css";
import Navbar from "./components/navBar";
import Footer from "./components/footer";
import Head from "next/head";
import LoadingBar from "./components/LoadingBar";
import { Metadata } from "next";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: {
    default: "Digital Marketing Agency - Welcome to MARKETEER",
    template: "%s  | MARKETEER",
  },
  description:
    "Mary's simple recipe for maple bacon donuts makes a sticky, sweet treat with just a hint of salt that you'll keep coming back for.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <Head>
        <link rel="manifest" href="/manifest.json" />
      </Head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <LoadingBar />
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
