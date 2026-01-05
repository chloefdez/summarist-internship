"use client";

import Image from "next/image";
import { useUser } from "@clerk/nextjs";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import RotatingHighlights from "./components/RotatingHighlights";
import Testimonials from "./components/Testimonials";
import Reviews from "./components/Reviews";
import Footer from "./components/Footer";
import {
  faBookOpen,
  faLightbulb,
  faMicrophone,
} from "@fortawesome/free-solid-svg-icons";
import LoginButton from "./components/LoginButton";
import AuthButton from "./components/AuthButton";

export default function HomePage() {
    
  const { isSignedIn, user } = useUser();

  return (
    <main className="min-h-screen bg-white text-slate-900">
      {/* NAVBAR */}
      <header>
        <div className="max-w-5xl mx-auto flex items-center justify-between px-6 py-4">
          <div className="flex items-center space-x-3">
            <div className="flex items-center space-x-2">
              {
                <Image
                  src="/logo.png"
                  alt="Summarist logo"
                  width={200}
                  height={200}
                />
              }
            </div>
          </div>

          {/* Right: Nav links */}
          <nav className="flex items-center space-x-8 text-[16px] font-medium text-slate-800">
            <AuthButton />
            <button className="hover:text-[#27c96f]">About</button>
            <button className="hover:text-[#27c96f]">Contact</button>
            <button className="hover:text-[#27c96f]">Help</button>
          </nav>
        </div>
      </header>

      {/* HERO SECTION */}
      <section className="max-w-5xl mx-auto px-6 py-10 grid gap-12 md:grid-cols-2 items-center">
        {/* Left: Text + button */}
        <div className="max-w-[420px]">
          <h1 className="text-3xl md:text-4xl font-semibold tracking-tight leading-[1.15] text-slate-950">
            Gain more knowledge <br /> in less time
          </h1>

          <p className="mt-4 text-lg text-slate-700 leading-relaxed">
            Great summaries for busy people, individuals who barely have time to
            read, and even people who don&apos;t like to read.
          </p>

          <LoginButton
            className="
              mt-6
              bg-[#2cd97c]
              text-slate
              px-36
              py-3
              rounded-md
              font-medium
              transition
              hover:bg-[#27c96f]
              hover:shadow-md"
          >
            Login
          </LoginButton>
        </div>

        {/* Right: Illustration */}
        <div className="flex justify-center">
          {
            <Image
              src="/landing.png"
              alt="Person reading summary on screen"
              width={420}
              height={320}
              className="w-auto h-auto"
              priority
            />
          }
          <div />
        </div>
      </section>

      {/* UNDERSTAND SECTION */}
      <section className="max-w-5xl mx-auto px-6 py-16 text-center">
        <h2 className="text-2xl md:text-3xl font-semibold text-slate-900">
          Understand books in few minutes
        </h2>

        <div className="mt-10 grid gap-12 md:grid-cols-3">
          <div className="flex flex-col items-center">
            <FontAwesomeIcon
              icon={faBookOpen}
              style={{ width: 48, height: 48 }}
              className="text-slate-800 mb-4"
            />
            <h3 className="mt-4 text-lg font-semibold">Read or listen</h3>
            <p className="mt-2 text-slate-600 max-w-[240px]">
              Save time by getting the core ideas from the best books.
            </p>
          </div>

          <div className="flex flex-col items-center">
            <FontAwesomeIcon
              icon={faLightbulb}
              style={{ width: 48, height: 48 }}
              className="text-slate-800 mb-4"
            />
            <h3 className="mt-4 text-lg font-semibold">Find your next read</h3>
            <p className="mt-2 text-slate-600 max-w-[260px]">
              Explore book lists and personalized recommendations.
            </p>
          </div>

          <div className="flex flex-col items-center">
            <FontAwesomeIcon
              icon={faMicrophone}
              style={{ width: 48, height: 48 }}
              className="text-slate-800 mb-4"
            />
            <h3 className="mt-4 text-lg font-semibold">Briefcasts</h3>
            <p className="mt-2 text-slate-600 max-w-[240px]">
              Gain valuable insights from briefcasts.
            </p>
          </div>
        </div>
      </section>

      {/* STATS + ROTATING HIGHLIGHTS SECTION TOP */}
      <section className="max-w-6xl mx-auto px-8 py-16">
        <div className="grid gap-12 md:grid-cols-[1fr_1fr] items-start">
          {/* Left: rotating highlight lines */}
          <RotatingHighlights
            lines={[
              "Enhance your knowledge",
              "Achieve greater success",
              "Improve your health",
              "Develop better parenting skills",
              "Increase happiness",
              "Be the best version of yourself!",
            ]}
          />

          {/* Right: stats card */}
          {/* Right: stats card */}
          <div className="bg-[#f1f6f4] px-16 py-12 md:px-20 md:py-14 rounded-lg w-full max-w-none min-h-[280px] flex items-center">
            <div className="space-y-10 text-[15px] leading-relaxed w-full">
              <div className="flex gap-5 items-start">
                <span className="text-blue-600 font-bold text-lg">93%</span>
                <p className="text-slate-700 text-[15px] leading-relaxed">
                  of Summarist members{" "}
                  <span className="font-semibold">significantly</span> increase
                  reading frequency.
                </p>
              </div>

              <div className="flex gap-5 items-start">
                <span className="text-blue-600 font-bold text-lg">96%</span>
                <p className="text-slate-700">
                  of Summarist members{" "}
                  <span className="font-semibold">establish</span> better
                  habits.
                </p>
              </div>

              <div className="flex gap-5 items-start">
                <span className="text-blue-600 font-bold text-lg">90%</span>
                <p className="text-slate-700">
                  have made significant positive change to their lives.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* STATS + ROTATING HIGHLIGHTS SECTION BOTTOM */}
      <section className="max-w-6xl mx-auto px-8 py-16">
        <div className="grid gap-12 md:grid-cols-[1fr_1fr] items-start">
          {/* Left: stats card */}
          {/* Left: stats card */}
          <div className="bg-[#f1f6f4] px-16 py-12 md:px-20 md:py-14 rounded-lg w-full max-w-none min-h-[280px] flex items-center">
            <div className="space-y-10 text-[15px] leading-relaxed w-full">
              <div className="flex gap-5 items-start">
                <span className="text-blue-600 font-bold text-lg">91%</span>
                <p className="text-slate-700 text-[15px] leading-relaxed">
                  of Summarist members{" "}
                  <span className="font-semibold">report</span> feeling more
                  productive after incorporating the service into their daily
                  routine.
                </p>
              </div>

              <div className="flex gap-5 items-start">
                <span className="text-blue-600 font-bold text-lg">94%</span>
                <p className="text-slate-700">
                  of Summarist members have{" "}
                  <span className="font-semibold">noticed</span> an improvement
                  in their overall comprehension and retention of information.
                </p>
              </div>

              <div className="flex gap-5 items-start">
                <span className="text-blue-600 font-bold text-lg">88%</span>
                <p className="text-slate-700">
                  of Summarist members{" "}
                  <span className="font-semibold">feel</span> more informed
                  about current events and industry trends since using the
                  platform.
                </p>
              </div>
            </div>
          </div>

          {/* Right: rotating highlight lines */}
          <RotatingHighlights
            align="right"
            lines={[
              "Expand your learning",
              "Accomplish your goals",
              "Strengthen your vitality",
              "Become a better caregiver",
              "Improve your mood",
              "Maximize your abilities",
            ]}
          />
        </div>
      </section>
      <Testimonials />
      <Reviews />
      <Footer />
    </main>
  );
}