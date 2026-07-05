import "./globals.css";

import Navbar from "@/components/layouts/Navbar";
import Footer from "@/components/layouts/Footer";
import FloatingButtons from "@/components/layouts/FloatingButtons";
import Providers from "./providers";

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

       <body className="bg-white dark:bg-slate-950 text-slate-900 dark:text-white transition-colors duration-300">

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