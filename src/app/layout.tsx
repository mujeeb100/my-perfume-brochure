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

// import Navbar from "./components/Navbar"; // aapke folder ke hisaab se sahi path likho
import "./globals.css";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        {/* <Navbar /> */}
        <main>{children}</main>
      </body>
    </html>
  );
}
