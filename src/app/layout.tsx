import type { Metadata } from "next";
import { Hanken_Grotesk } from "next/font/google";
import "./globals.css";
import MainHeader from "@/components/global/main-header";
import MainFooter from "@/components/global/main-footer";
import { Toaster } from "@/components/ui/toaster";

const font = Hanken_Grotesk({
  subsets: ["latin"],
  weight: ["400", "500", "600", "900"],
});

export const metadata: Metadata = {
  title: "Relax Petroleum Company",
  description:
    "Our No Excuses; approach has definedus as a premier transport services provider for decades. We deliver on our promises, even if it means going the extra mile to ensure timely delivery, so our customers don't have to bear the burden. We firmly believe that our customers'; success is paramount, and we prioritize their business outcomes above all else.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <main>
          <MainHeader />
          {children}
          <MainFooter />
          <Toaster />
        </main>
      </body>
    </html>
  );
}
