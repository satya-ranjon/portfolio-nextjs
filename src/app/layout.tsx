import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Image from "next/image";
import logoMark from "@/assets/logomark-outline.svg";
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Satya Ranjon | Personal Portfolio",
  description: "Satya Ranjon is a frontend developer",
  icons: { icon: ["./favicon.ico?v=4"] },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="hidden lg:block absolute top-72">
          <Image src={logoMark} height={1000} width={350} alt=" logo mark" />
        </div>
        {children}
      </body>
    </html>
  );
}
