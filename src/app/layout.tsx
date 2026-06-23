import "./globals.css";

import Navbar from "@/components/Navbar";

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

    <html lang="en">

      <body className="bg-slate-100">

        <Navbar />

        {children}

      </body>

    </html>

  );
}