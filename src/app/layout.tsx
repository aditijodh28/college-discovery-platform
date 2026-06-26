import "./globals.css";

import Navbar from "@/components/layouts/Navbar";
import FloatingButtons from "@/components/FloatingButtons";
import Providers from "./providers";
import Footer from "@/components/Footer";

export const metadata = {
  title: "College Discovery Platform",
  description: "Discover • Compare • Decide",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>

      <body className="bg-slate-100 min-h-screen flex flex-col">

        <Providers>

          <Navbar />

         <main className="flex-1">
         
          {children}

    </main>

     <Footer />
          <FloatingButtons />

        </Providers>

      </body>

    </html>

  );
}