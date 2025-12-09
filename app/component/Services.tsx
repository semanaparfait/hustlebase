"use client";

import {
  IdentificationCard,
  MagicWand,
  DownloadSimple,
} from "@phosphor-icons/react";




export default function Services() {
  return (
<main className="w-full md:h-screen flex flex-col justify-between items-center py-12">
    <div>
        
  <h1 className="text-center font-bold text-4xl">
    Your Path to Get Hired, Easily, Simplified.
  </h1>

  <p className="text-center ">
    From blank page to your professional CV and job application in three easy steps.
  </p>
    </div>

  <section className="flex flex-wrap justify-center items-center gap-6 w-full mt-3">
    <div className="border-3 border-amber-50 rounded-2xl flex flex-col gap-4 px-6 py-6 shadow-lg md:w-1/4 w-[90%]">
    <IdentificationCard size={48} className="text-cyan-400 glow" />
      <p className="text-gray-500 font-semibold">STEP 1</p>
      <h1 className="font-bold text-[22px]">Enter Your Details</h1>
      <p>
        Fill in your personal information, education, work experience, skills,
        and any other relevant details to create a comprehensive profile.
      </p>
    </div>

    <div className="border-3 border-amber-50 rounded-2xl flex flex-col gap-4 px-6 py-3 shadow-lg md:w-1/4 w-[90%]">
     <MagicWand size={48} className="text-emerald-400 glow" />
      <p className="text-gray-500 font-semibold">STEP 2</p>
      <h1 className="font-bold text-[20px]">Generate Your CV</h1>
      <p>
        With a single click, our AI-powered system will analyze your information
        and generate a professional CV tailored to your industry and job
        preferences.
      </p>
    </div>

    <div className="border-3 border-amber-50 rounded-2xl flex flex-col gap-4 px-6 py-3 shadow-lg md:w-1/4 w-[90%]">
    <DownloadSimple size={48} className="text-purple-400 glow" />
      <p className="text-gray-500 font-semibold">STEP 3</p>
      <h1 className="font-bold text-[20px]">Find & Apply for Jobs</h1>
      <p>
        Browse through a curated list of job opportunities that match your
        profile. Let our AI assist you in applying with personalized cover
        letters.
      </p>
    </div>
  </section>
  <p className="text-center">* No hidden fees. start for free, pay only when you're ready to download*</p>
</main>

  );
}