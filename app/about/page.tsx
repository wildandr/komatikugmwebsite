"use client";
import React, { useState } from "react";
import Image from "next/image";

export default function About() {
  return (
    <main className="px-4 sm:px-12">
      <div className="mt-[10vh] sm:mt-[20vh] rounded-3xl px-3 lg:px-10 py-10 bg-white backdrop-blur-md bg-opacity-20 font-sans">
        <div className="font-sans text-center w-full ">
          <h1 className="font-bold text-white text-3xl min-[450px]:text-[36px] sm:text-[52px] md:text-[64px]">
            Welcome to <span className="text-secondary">Komatik</span>
          </h1>
          <h1 className="font-light text-white mt-4 sm:mt-8 sm:text-[24px]">
            At Komatik, we stand as the cornerstone for students at Gadjah Mada
            University (UGM) who are passionate about technology, information,
            and communication (TIK). As a dynamic community, we serve as a
            nurturing ground for personal and professional development in the
            realm of TIK, fostering a supportive envicronment for UGM students
            to excel in it competitions
          </h1>
        </div>
      </div>
      <div className="mt-[3vh] sm:mt-[10vh] sm:mb-32 rounded-3xl backdrop-blur-none bg-black pb-2 sm:pb-5 font-sans">
        <Image
          src="/fotokomatik.png"
          alt="Komatik"
          width={500}
          height={500}
          className="w-full hidden sm:flex "
        />
        <Image
          src="/fotokomatikmobile.png"
          alt="Komatik"
          width={500}
          height={500}
          className="w-full sm:hidden "
        />
        <h1 className="font-bold text-center leading-none -mt-6 sm:-mt-12 text-white text-2xl min-[450px]:text-[36px] sm:text-[52px] ">
          Your Victory, Our Mission <br /> A Dedication to Your{" "}
          <span className="text-secondary">Success</span>
        </h1>
      </div>
      <div className="mt-[3vh] sm:mt-[10vh] sm:mb-32 rounded-3xl backdrop-blur-none flex flex-col sm:flex-row  font-sans gap-5">
        <Image
          src="/fotokomatik2.png"
          alt="Komatik"
          width={500}
          height={200}
          className="w-1/2 hidden sm:flex"
        />
         <Image
          src="/fotokomatikmobile2.png"
          alt="Komatik"
          width={500}
          height={500}
          className="w-full sm:hidden "
        />
        <div className="w-full sm:w-1/2 mt-4">
          <h1 className="font-bold text-secondary text-3xl min-[450px]:text-[36px] sm:text-[52px] ">
            What is Komatik?
          </h1>
          <h1 className="font-light text-white mt-4 xl:text-[22px]">
            KOMATIK UGM, short for the Information and Communication Technology
            Student Community at Gadjah Mada University (Universitas Gadjah
            Mada), is a pivotal hub for UGM students. Established in 2015 and
            officially sanctioned on March 8, 2018, KOMATIK UGM operates under
            the auspices of the Subdirectorate of Student Creativity at UGM. It
            plays a crucial role as a community dedicated to the development of
            students in the field of Information and Communication Technology
            (ICT), providing a platform for self-improvement and supporting
            their interests in participating in various IT competitions. As a
            competition-oriented community, KOMATIK UGM serves to foster a
            collaborative and competitive spirit among UGM students passionate
            about ICT.
          </h1>
        </div>
      </div>
      <div className="backdrop-blur-none mt-[3vh] sm:mb-32 ">
        <h1 className="font-bold text-white text-3xl min-[450px]:text-[36px] sm:text-[52px] ">
          Our <span className="text-secondary">Vision</span>
        </h1>
        <hr className="w-full h-1 border-none bg-white mt-5 mb-5" />
        <h1 className="font-light lg:text-[20px]">
          Our vision is to be a competition community that shelters UGM students
          with a passion for TIK. Serving as an inspiration for TIK students at
          UGM, Komatik is committed to self-development, embracing creativity,
          and maximizing potential through efficient administration, innovative
          work programs, and external initiatives. Our ultimate goal is to
          achieve overall victory in GEMASTIK and outstanding achievements in
          other prestigious competitions, positioning UGM as a leader in
          technology and communication nationally and internationally.
        </h1>
      </div>
      <div className="backdrop-blur-none mt-[3vh] ">
        <h1 className="font-bold text-white text-3xl min-[450px]:text-[36px] sm:text-[52px] ">
          Our <span className="text-secondary">Mission</span>
        </h1>
        <hr className="w-full h-1 border-none bg-white mt-5 mb-5" />
        <h1 className="font-light lg:text-[20px]">
          1. Empowering Students : Providing a platform for UGM students to develop
          their skills in the field of TIK. <br />
          2. Contributing to UGM’S Success : Supporting UGM contigents in various
          IT competitions to secure victories.
          <br />
          3. Personal Development : Creating an environtment that supports the
          personal development of TIK students through various learning
          activities, training, and mentoring.
          <br />
          4. Embracing Creativity : Cultivating and appreciating students
          creativity by organizing events and creative competitions, providing a
          platform to explore innovative ideas.
          <br />
          5. Nurturing Potential : Offering mentoring programs focused on students
          potential, including enhancing soft skills, leadership, and technical
          abilities.
          <br />
          6. Optimizing Achievements : Maximizing student achievements by improving
          internal administrative structures, refining adaptive work programs,
          and adding relevant external programs.
          <br />
          7. Excellence in GEMASTIK and Other Competitions : A commitment to
          consistenly achieve the overall champion title in GEMASTIK and
          attaining remarkable success in other prestigious technology and
          communication competitions.
        </h1>
      </div>
    </main>
  );
}
