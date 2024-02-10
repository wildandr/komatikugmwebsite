"use client";
import React, { useState } from "react";
import Image from "next/image";
export const Division = () => {
  const [isBouncing, setIsBouncing] = useState(false);
  return (
    <>
    
      <div className="wrap font-sans mb-20">
        <div className="content content--sticky content--card bg-black backdrop-blur-md bg-opacity-30">
          <div className="flex sm:flex-row flex-col items-center justify-center gap-5 ">
            <Image
              src="/logohumas.png"
              alt="Humas"
              width={200}
              height={200}
              layout=""
              className="w-[55%] min-[480px]:w-1/3 sm:w-1/3  md:w-full md:h-2/3  xl:w-1/3   "
            />

            <div className="xl:w-1/2">
              <h1 className="font-bold text-left sm:mb-4  text-secondary text-3xl min-[450px]:text-[36px] sm:text-[52px] lg:text-[74px] ">
                HumPub
              </h1>
              <p className="text-justify text-[12px] min-[380px]:text-[14px] sm:text-sm md:text-base lg:text-lg xl:mt-10 ">
                The Public Relations and Publications Division, also known as
                HumPub, is one of the managerial divisions at KOMATIK UGM.
                HumPub is responsible for publications and maintaining good
                relations between KOMATIK UGM and both internal and external
                parties.
              </p>
            </div>
          </div>
          <div className="inline-flex gap-3 w-full  items-center justify-end">
            <div className="">
              <div className={`round ${isBouncing ? "bounceAlpha" : ""}`}>
                <a className="mt-[0.65rem] sm:mt-[0.6rem] -ml-[4rem] sm:-ml-20 text-[14px] sm:text-[17px] hover:text-gray-300">
                  Learn More
                </a>
                <div id="cta">
                  <span className="arrow primera next "></span>
                  <span className="arrow segunda next "></span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="content content--sticky content--card bg-white backdrop-blur-md bg-opacity-30">
          <div className="flex sm:flex-row flex-col items-center justify-center gap-5 ">
            <Image
              src="/logomedinfo.png"
              alt="Medinfo"
              width={200}
              height={200}
              layout=""
              className="w-[55%] min-[480px]:w-1/3 sm:w-1/3  md:w-full md:h-2/3  xl:w-1/3   "
            />

            <div className="xl:w-1/2">
              <h1 className="font-bold text-left sm:mb-4  text-secondary text-3xl min-[450px]:text-[36px] sm:text-[52px]  lg:text-[74px] ">
                Medinfo
              </h1>
              <p className="text-justify text-[12px] min-[380px]:text-[14px] sm:text-sm md:text-base lg:text-lg ">
                The Medinfo Division is one of the managerial divisions at
                KOMATIK UGM, responsible for documenting all activities of
                KOMATIK UGM and managing all social media of KOMATIK UGM.
              </p>
            </div>
          </div>
          <div className="inline-flex gap-3 w-full  items-center justify-end">
            <div className="">
              <div className={`round ${isBouncing ? "bounceAlpha" : ""}`}>
                <a className="mt-[0.65rem] sm:mt-[0.6rem] -ml-[4rem] sm:-ml-20 text-[14px] sm:text-[17px] hover:text-gray-300">
                  Learn More
                </a>
                <div id="cta">
                  <span className="arrow primera next "></span>
                  <span className="arrow segunda next "></span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="content content--sticky content--card bg-black backdrop-blur-md bg-opacity-30">
          <div className="flex sm:flex-row flex-col items-center justify-center gap-5 ">
            <Image
              src="/logoksk.png"
              alt="KSK"
              width={200}
              height={200}
              layout=""
              className="w-[55%] min-[480px]:w-1/3 sm:w-1/3  md:w-1/3 md:h-2/3  xl:w-1/3   "
            />

            <div className="xl:w-1/2">
              <h1 className="font-bold text-left sm:mb-4  text-secondary text-3xl min-[450px]:text-[36px] sm:text-[52px]  lg:text-[74px] ">
                KSK
              </h1>
              <p className="text-justify text-[12px] min-[380px]:text-[14px] sm:text-sm md:text-base lg:text-lg  ">
                The Secretariat Division of KOMATIK UGM, or KSK Division, is a
                managerial part of KOMATIK UGM that focuses on secretarial
                functions. This division acts as a companion without having a
                fixed work program, collaborates with KOMATIK UGM and Technical
                Division in secretarial matters.
              </p>
            </div>
          </div>
          <div className="inline-flex gap-3 w-full  items-center justify-end">
            <div className="">
              <div className={`round ${isBouncing ? "bounceAlpha" : ""}`}>
                <a className="mt-[0.65rem] sm:mt-[0.6rem] -ml-[4rem] sm:-ml-20 text-[14px] sm:text-[17px] hover:text-gray-300">
                  Learn More
                </a>
                <div id="cta">
                  <span className="arrow primera next "></span>
                  <span className="arrow segunda next "></span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="content content--sticky content--card bg-white backdrop-blur-md bg-opacity-30">
          <div className="flex sm:flex-row flex-col items-center justify-center gap-5 ">
            <Image
              src="/logocp.png"
              alt="CP"
              width={200}
              height={200}
              layout=""
              className="w-[55%] min-[480px]:w-1/3 sm:w-1/3  md:w-full md:h-2/3  xl:w-1/3   "
            />

            <div className="xl:w-1/2">
              <h1 className="font-bold text-left sm:mb-4  text-secondary text-3xl min-[450px]:text-[36px] sm:text-[52px]  lg:text-[74px] ">
                CP
              </h1>
              <p className="text-justify text-[12px] min-[380px]:text-[14px] sm:text-sm md:text-base lg:text-lg ">
                The Competitive Programming Division of KOMATIK focuses on
                developing programming skills through competitions. It is a
                "brain sport" where participants solve programming problems in a
                short time.     
              </p>
            </div>
          </div>
          <div className="inline-flex gap-3 w-full  items-center justify-end">
            <div className="">
              <div className={`round ${isBouncing ? "bounceAlpha" : ""}`}>
                <a className="mt-[0.65rem] sm:mt-[0.6rem] -ml-[4rem] sm:-ml-20 text-[14px] sm:text-[17px] hover:text-gray-300">
                  Learn More
                </a>
                <div id="cta">
                  <span className="arrow primera next "></span>
                  <span className="arrow segunda next "></span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="content content--sticky content--card bg-black backdrop-blur-md bg-opacity-30">
          <div className="flex sm:flex-row flex-col items-center justify-center gap-5 ">
            <Image
              src="/logocp.png"
              alt="ASGama"
              width={200}
              height={200}
              layout=""
              className="w-[55%] min-[480px]:w-1/3 sm:w-1/3  md:w-full md:h-2/3  xl:w-1/3   "
            />

            <div className="xl:w-1/2">
              <h1 className="font-bold text-left sm:mb-4  text-secondary text-3xl min-[450px]:text-[36px] sm:text-[52px]  lg:text-[74px] ">
                AS Gama
              </h1>
              <p className="text-justify text-[12px] min-[380px]:text-[14px] sm:text-sm lg:text-lg">
                The Gadjah Mada Cyber Alliance (ASGama) is a division under the
                auspices of the UGM Information Technology Student Community,
                consisting of two main focuses: Capture The Flag (CTF) and
                Networking.
              </p>
            </div>
          </div>
          <div className="inline-flex gap-3 w-full  items-center justify-end">
            <div className="">
              <div className={`round ${isBouncing ? "bounceAlpha" : ""}`}>
                <a className="mt-[0.65rem] sm:mt-[0.6rem] -ml-[4rem] sm:-ml-20 text-[14px] sm:text-[17px] hover:text-gray-300">
                  Learn More
                </a>
                <div id="cta">
                  <span className="arrow primera next "></span>
                  <span className="arrow segunda next "></span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="content content--sticky content--card bg-white backdrop-blur-md bg-opacity-30">
          <div className="flex sm:flex-row flex-col items-center justify-center gap-5 ">
            <Image
              src="/logosrd.png"
              alt="SRD"
              width={200}
              height={200}
              layout=""
              className="w-[55%] min-[480px]:w-1/3 sm:w-1/3  md:w-1/3   xl:w-1/3   "
            />

            <div className="xl:w-1/2">
              <h1 className="font-bold text-left sm:mb-4  text-secondary text-3xl min-[450px]:text-[36px] sm:text-[52px]  lg:text-[74px] ">
                SRD
              </h1>
              <p className="text-justify text-[12px] min-[380px]:text-[14px] sm:text-sm md:text-base lg:text-lg ">
                Software Research Development is a division that accommodates
                UGM students in software research, specifically in the form of
                website/mobile platforms. SRD also organizes workshops/training
                activities related to software product development.
              </p>
            </div>
          </div>
          <div className="inline-flex gap-3 w-full  items-center justify-end">
            <div className="">
              <div className={`round ${isBouncing ? "bounceAlpha" : ""}`}>
                <a className="mt-[0.65rem] sm:mt-[0.6rem] -ml-[4rem] sm:-ml-20 text-[14px] sm:text-[17px] hover:text-gray-300">
                  Learn More
                </a>
                <div id="cta">
                  <span className="arrow primera next "></span>
                  <span className="arrow segunda next "></span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="content content--sticky content--card bg-black backdrop-blur-md bg-opacity-30">
          <div className="flex sm:flex-row flex-col items-center justify-center gap-5 ">
            <Image
              src="/logoiot.png"
              alt="IOT"
              width={200}
              height={200}
              layout=""
              className="w-[55%] min-[480px]:w-1/3 sm:w-1/3  md:w-1/3 xl:w-1/3   "
            />

            <div className="xl:w-1/2">
              <h1 className="font-bold text-left sm:mb-4  text-secondary text-3xl min-[450px]:text-[36px] sm:text-[52px]  lg:text-[74px] ">
                IOT Gama
              </h1>
              <p className="text-justify text-[12px] min-[380px]:text-[14px] sm:text-sm lg:text-lg">
                IOT GAMA is one of the divisions in KOMATIK UGM that
                accommodates students with an interest in research and
                competitions in the field of Internet of Things (IoT). In
                addition, it also organizes workshops and collaborative projects
                with external parties to enhance the capabilities of the IoT
                GAMA committee.
              </p>
            </div>
          </div>
          <div className="inline-flex gap-3 w-full  items-center justify-end">
            <div className="">
              <div className={`round ${isBouncing ? "bounceAlpha" : ""}`}>
                <a className="mt-[0.65rem] sm:mt-[0.6rem] -ml-[4rem] sm:-ml-20 text-[14px] sm:text-[17px] hover:text-gray-300">
                  Learn More
                </a>
                <div id="cta">
                  <span className="arrow primera next "></span>
                  <span className="arrow segunda next "></span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="content content--sticky content--card bg-white backdrop-blur-md bg-opacity-30">
          <div className="flex sm:flex-row flex-col items-center justify-center gap-5 ">
            <Image
              src="/logogamelab.png"
              alt="gamelab"
              width={200}
              height={200}
              layout=""
              className="w-[55%] min-[480px]:w-1/3 sm:w-1/3  md:1/3 xl:w-1/3   "
            />

            <div className="xl:w-1/2">
              <h1 className="font-bold text-left sm:mb-4  text-secondary text-3xl min-[450px]:text-[36px] sm:text-[52px]  lg:text-[74px] ">
                GaM-Lab
              </h1>
              <p className="text-justify text-[12px] min-[380px]:text-[14px] sm:text-sm lg:text-lg">
                GaM-Lab is one of the divisions under the umbrella of the
                Information and Communication Technology Student Community
                (KOMATIK) at UGM, providing a space for students interested in
                delving into the field of game development, both in terms of art
                style and technical aspects. 
              </p>
            </div>
          </div>
          <div className="inline-flex gap-3 w-full  items-center justify-end">
            <div className="">
              <div className={`round ${isBouncing ? "bounceAlpha" : ""}`}>
                <a className="mt-[0.65rem] sm:mt-[0.6rem] -ml-[4rem] sm:-ml-20 text-[14px] sm:text-[17px] hover:text-gray-300">
                  Learn More
                </a>
                <div id="cta">
                  <span className="arrow primera next "></span>
                  <span className="arrow segunda next "></span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="content content--sticky content--card bg-black backdrop-blur-md bg-opacity-30">
          <div className="flex sm:flex-row flex-col items-center justify-center gap-5 ">
            <Image
              src="/logouxgama.png"
              alt="gamelab"
              width={200}
              height={200}
              layout=""
              className="w-[55%] min-[480px]:w-1/3 sm:w-1/3  md:w-full md:h-2/3  xl:w-1/3   "
            />

            <div className="xl:w-1/2">
              <h1 className="font-bold text-left sm:mb-4  text-secondary text-3xl min-[450px]:text-[36px] sm:text-[52px]  lg:text-[74px] ">
                UX Gama
              </h1>
              <p className="text-justify text-[12px] min-[380px]:text-[14px] sm:text-sm lg:text-lg">
                UXGama is a UI/UX community open to all UGM students under the
                umbrella of the Information Technology Student Community
                (KOMATIK) at Gadjah Mada University.
              </p>
            </div>
          </div>
          <div className="inline-flex gap-3 w-full  items-center justify-end">
            <div className="">
              <div className={`round ${isBouncing ? "bounceAlpha" : ""}`}>
                <a className="mt-[0.65rem] sm:mt-[0.6rem] -ml-[4rem] sm:-ml-20 text-[14px] sm:text-[17px] hover:text-gray-300">
                  Learn More
                </a>
                <div id="cta">
                  <span className="arrow primera next "></span>
                  <span className="arrow segunda next "></span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="content content--sticky content--card bg-white backdrop-blur-md bg-opacity-30">
          <div className="flex sm:flex-row flex-col items-center justify-center gap-5 ">
            <Image
              src="/logodmai.png"
              alt="gamelab"
              width={200}
              height={200}
              layout=""
              className="w-[55%] min-[480px]:w-1/3 sm:w-1/3  md:w-full md:h-2/3  xl:w-1/3   "
            />

            <div className="xl:w-1/2">
              <h1 className="font-bold text-left sm:mb-4  text-secondary text-3xl min-[450px]:text-[36px] sm:text-[52px]  lg:text-[74px] ">
                DMAI
              </h1>
              <p className="text-justify text-[12px] min-[380px]:text-[14px] sm:text-sm lg:text-lg">
                Data Mining & AI is one of the divisions under Komatik UGM that
                accommodates UGM students with an interest in the field of Data,
                including data analytics, data science, and Artificial
                Intelligence, as well as machine learning development.
                
              </p>
            </div>
          </div>
          <div className="inline-flex gap-3 w-full  items-center justify-end">
            <div className="">
              <div className={`round ${isBouncing ? "bounceAlpha" : ""}`}>
                <a className="mt-[0.65rem] sm:mt-[0.6rem] -ml-[4rem] sm:-ml-20 text-[14px] sm:text-[17px] hover:text-gray-300">
                  Learn More
                </a>
                <div id="cta">
                  <span className="arrow primera next "></span>
                  <span className="arrow segunda next "></span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="content content--sticky content--card bg-black backdrop-blur-md bg-opacity-30">
          <div className="flex sm:flex-row flex-col items-center justify-center gap-5 ">
            <Image
              src="/logoanimasi.png"
              alt="gamelab"
              width={200}
              height={200}
              layout=""
              className="w-[55%] min-[480px]:w-1/3 sm:w-1/3  md:1/3  xl:w-1/3   "
            />

            <div className="xl:w-1/2">
              <h1 className="font-bold text-left sm:mb-4  text-secondary text-3xl min-[450px]:text-[36px] sm:text-[52px]  lg:text-[74px] ">
                Animasi
              </h1>
              <p className=" text-justify text-[12px] min-[380px]:text-[14px] sm:text-sm lg:text-lg">
                The Animation Division of Komatik is a 2D and 3D animation
                community open to all UGM students under the umbrella of the
                Information Technology Student Community at Gadjah Mada
                University.
              </p>
            </div>
          </div>
          <div className="inline-flex gap-3 w-full  items-center justify-end">
            <div className="">
              <div className={`round ${isBouncing ? "bounceAlpha" : ""}`}>
                <a className="mt-[0.65rem] sm:mt-[0.6rem] -ml-[4rem] sm:-ml-20 text-[14px] sm:text-[17px] hover:text-gray-300">
                  Learn More
                </a>
                <div id="cta">
                  <span className="arrow primera next "></span>
                  <span className="arrow segunda next "></span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
