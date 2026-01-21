import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";


const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "OneMed Tutor | Online Medical Tutors for Medical Students",
  description: "Expert MBBS and medical subject tutor with 5+ years experience. Teaching Physiology, Anatomy, Pathology, Biochemistry, Microbiology and more.",
  keywords: [
    "onemed tutor",
    "Onemedtutor",
    "onemedtutor.com",
    "OneMed Tutor",
    "Online Medical Tutor",
    "MBBS Online Classes",
    "Medical Coaching",
    "Anatomy Tutor",
    "Physiology Tutor",
    "Pathology Tutor",
    "Biochemistry Tutor",
    "Microbiology Tutor",
    "Pharmacology Tutor",
  ],
  openGraph: {
    title: "OneMed Tutor",
    description: "Join OneMed Tutor for high-quality online medical education. Personalized tutoring for Medical students covering all major medical subjects by experienced doctors and educators.",
    url: "https://onemedtutor.com",
    siteName: "OneMed Tutor",
    images: [
      {
        url: "/favicon.ico",
        width: 1200,
        height: 630,
        alt: "One Med Tutor img",
      },
    ],
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
