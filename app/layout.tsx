"use client";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import MenuNavbar from "@/components/menuNavbar";
import Spline from "@splinetool/react-spline";
import {NextUIProvider} from "@nextui-org/react";
const inter = Inter({ subsets: ["latin"] });



export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
    
      <link rel="preconnect" href="https://fonts.googleapis.com"/>
<link rel="preconnect" href="https://fonts.gstatic.com"/>
<link href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@300..700&display=swap" rel="stylesheet"/>
      </head>
      <body className={inter.className}>
        <NextUIProvider>
        <div className="w-full fixed top-0 flex z-50">
        <MenuNavbar />
      </div>
          <div className="fixed top-0 left-0 h-[100vh] w-full">
        <Spline
          className=""
          scene="https://prod.spline.design/BtnIEjZ62RKxnIEq/scene.splinecode"
        />
         
      </div>
 
        {children}
       
        </NextUIProvider>
        <script src="./gsap.min.js"></script>
		<script src="./ScrollTrigger.min.js"></script>
		<script src="./lenis.min.js"></script>
		<script src="./imagesloaded.pkgd.min.js"></script>
		<script type="module" src="./index.js"></script></body>
    </html>
  );
}
