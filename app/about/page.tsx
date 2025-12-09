import type { Metadata } from "next";
import Navbar from "../component/Navbar";
export const metadata: Metadata = {
  title: "About Us - EasyApply Rwanda",
  description: "Learn more about EasyApply, our mission, and how we are simplifying the job application process in Rwanda using AI technology.",
};
export default function AboutPage() {
  return (
    <main className="w-full  ">  
    <Navbar />
    <section className="h- screen flex flex-col justify-center items-center px-4">
        <h1 className="text-4xl font-bold text-center mt-20">About Us</h1>
        <p className="text-center mt-4 mx-10 md:mx-40">
        At EasyApply, we are dedicated to simplifying the job application process for candidates in Rwanda. Our mission is to empower job seekers by providing them with an easy-to-use platform that leverages AI technology to create professional CVs and assist in finding and applying for job opportunities.
        </p>
    </section>
    

    </main>
  );
}