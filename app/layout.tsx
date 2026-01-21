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
  icons: {
    icon: '/favicon.ico',
  },
  keywords: [
    "Onemed Tutor",
    "Onemedtutor",
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
        url: "https://instagram.fdel27-4.fna.fbcdn.net/v/t51.2885-19/617571898_17842998843680880_4911607489163474744_n.jpg?efg=eyJ2ZW5jb2RlX3RhZyI6InByb2ZpbGVfcGljLmRqYW5nby4xMDI0LmMyIn0&_nc_ht=instagram.fdel27-4.fna.fbcdn.net&_nc_cat=100&_nc_oc=Q6cZ2QHEvy7IQCjwKb2uqhLNwdDpsUJ9GePzNBSCjRRS8zyZ49LiilLiUS_rjf56P3Cqmi1O1uV5-C0dgT5kq8VB9cnL&_nc_ohc=keGHsisFjRcQ7kNvwGsmQwh&_nc_gid=7CN88PelqwFj3mXhMpWk9A&edm=AP4sbd4BAAAA&ccb=7-5&oh=00_Afoz6dT_082Px_fdLn0pkrnEdY7UhnYCzBHFK9CoNd-kGg&oe=69757807&_nc_sid=7a9f4b",
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
