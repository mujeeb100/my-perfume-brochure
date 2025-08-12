// import './globals.css'
// import Header from './components/Header'
// import Footer from './components/Footer'

// export const metadata = {
//   title: 'FridayCharm | Luxury Perfumes',
// }

// import { ReactNode } from 'react';

// export default function RootLayout({ children }: { children: ReactNode }) {
//   return (
//     <html lang="en">
//       <body className="font-sans">
//         <Header />
//         <main>{children}</main>
//         <Footer />
//       </body>
//     </html>
//   )
// }
"use client";

import { SessionProvider } from "next-auth/react";
import Footer from "./components/Footer"; // adjust path if needed
import "./globals.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="flex flex-col min-h-screen">
        <SessionProvider>{children}</SessionProvider>
        <Footer />
      </body>
    </html>
  );
}



