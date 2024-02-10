"use client";
import React, { useState } from "react";
import Spline from "@splinetool/react-spline";
import MenuNavbar from "../components/menuNavbar";
import { ImageOne } from "../components/imageOne";
import { KomatikLogo } from "@/components/komatikLogo";
import { Division } from "@/components/division";
import { Instagram, Facebook, Line, Mail } from "@/components/icons";
import Link from "next/link";

export default function Home() {
  const scrolltoHash = function (element_id: string) {
    const element = document.getElementById(element_id)
    element?.scrollIntoView({ behavior: "smooth", block: "end", inline: "nearest" });
  }
  return (
    <main className="">
      <div className="absolute top-0 left-0 h-[100vh] z-10 w-full mt-20 ">
        <div className="flex-col relative ">
          <div className="font-sans text-center w-full mt-24 sm:mt-36 md:mt-52 flex justify-center gap-5 text-3xl min-[450px]:text-[36px] sm:text-[52px] md:text-[64px] lg:text-[74px] xl:text-[86px]">
            <h1 className="font-bold text-white">
              Tech Dreams Begin <span className="text-secondary">Here</span>
            </h1>
          </div>
          <div className="text-center px-5 text-[10px] sm:text-[12px] lg:px-58 xl:px-64 items-center justify-center mt-2 sm:mt-10 lg:text-[18px] flex-grow">
            <h1 className="text-white">
              Embark on a tech mastery journey in a UGM community, boosting
              skills and igniting passion.
              <br className="hidden sm:flex" />
              Contribute to UGM's IT triumphs, where dreams become collective
              tech innovation reality!
            </h1>
            <div className="inline-flex justify-end ml-14 items-end gap-2">
              <div
                className="bg-secondary text-black font-sans  px-4 py-2 mt-5 hvr-sweep-to-right"
                onClick={() => scrolltoHash('first-section')}>
              
                Get Started
              </div>
              <ImageOne />
            </div>
          </div>
        </div>
        <div id="first-section">
        <div className="flex justify-center mt-36 lg:mt-[50vh]">
        <div className="mb-10">
          <h1 className="font-bold font-sans text-3xl min-[450px]:text-[36px] sm:text-[52px] md:text-[64px] lg:text-[74px] xl:text-[86px]">
            Our Division
          </h1>
        </div>
        </div>
      </div>
          <Division />
      
        {/* footer */}
        <footer id="footer" className="second-section mt-[10vh] sm:mt-[30vh] px-5 lg:px-10 py-12 bg-white backdrop-blur-md bg-opacity-20 font-sans ">
          <h1 className=" font-bold text-3xl min-[480px]:text-[36px] sm:text-[42px] md:text-[48px] md:leading-tight lg:text-[54px] xl:text-[64px] xl:leading-none">
            Komunitas Mahasiswa TIK <br /> Universitas Gadjah Mada
          </h1>
          <p className="sm:w-2/3 sm:mt-4 min-[480px]:w-2/3 lg:w-1/3 text-left font-light md:text-[24px]">
            Bulaksumur F11, Caturtunggal, Depok, Sleman, Daerah Istimewa
            Yogyakarta 555281
          </p>
          <div className="wrap inline-flex gap-10 mt-6">
            <a className="hover-fx flex items-center p-2">
              <Instagram />
            </a>
            <a className="hover-fx flex items-center p-2">
              <Mail />
            </a>
            <a className="hover-fx flex items-center p-2">
              <Line />
            </a>
            <a className="hover-fx flex items-center p-2">
              <Facebook />
            </a>
          </div>
        </footer>
      </div>
    </main>
  );
}
