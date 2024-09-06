import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navigation/Navbar";
import { ThemeProvider } from "@/provider/theme-provider";
import Sidebar from "@/components/navigation/Sidebar";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "700"],
  style: ["normal", "italic"],
});

export const metadata: Metadata = {
  title: "NextJS Dashboard",
  description: "E-Commerce Dashboard",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        <ThemeProvider attribute="class" defaultTheme="system">
          <Navbar />
          <main className="flex">
            <Sidebar />
            <section className="min-h-screen flex-1">

            {children}
            </section>
          </main>
        </ThemeProvider>
      </body>
    </html>
  );
}
