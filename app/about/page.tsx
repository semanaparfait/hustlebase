import type { Metadata } from "next";
import Image from 'next/image'
import Navbar from "../component/Navbar";
import { Target, Users, Zap, Heart, TrendingUp, Award } from 'lucide-react';
export const metadata: Metadata = {
  title: "About Us - EasyApply Rwanda",
  description: "Learn more about EasyApply, our mission, and how we are simplifying the job application process in Rwanda using AI technology.",
};
export default function AboutPage() {
  return (
    <main className=" h-full ">  
    <Navbar />

    <div className="min-h-screen bg-gradient-to-br from-cyan-50 via-teal-50 to-blue-50">
      <div className="max-w-7xl  ">
        <section className="pt-20 pb-16 relative overflow-hidden">
          {/* <div className="absolute top-0 left-0 w-96 h-96 bg-teal-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob"></div> */}
          {/* <div className="absolute top-0 right-0 w-96 h-96 bg-cyan-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-2000"></div> */}
          {/* <div className="absolute -bottom-8 left-20 w-96 h-96 bg-blue-900 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-4000"></div> */}
          <div
            className="relative h-[50vh] flex items-center justify-center"
            style={{
              backgroundImage:
                "url('https://i.pinimg.com/736x/15/f2/e7/15f2e75dd7d4b637981d09f1d80367ed.jpg')",
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            {/* Overlay (optional for readability) */}
            <div className="absolute inset-0 bg-black/40"></div>

            {/* Content */}
            <div className="relative z-10 text-center px-4">
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 animate-fade-in-up">
                About us
              </h1>
              <p className="text-xl md:text-2xl text-gray-200 max-w-3xl mx-auto animate-fade-in-up animation-delay-200">
                Transforming career opportunities in Rwanda through AI-powered innovation
              </p>
            </div>
          </div>

        </section>

        <section className="sm:px-6 lg:px-8 p-2 mb-10">
          <div className="bg-white rounded-3xl shadow-2xl overflow-hidden">
            <div className="grid md:grid-cols-2 gap-0">
              <div className="p-12 bg-[#0c4242] text-white flex flex-col justify-center">
                <h2 className="text-4xl font-bold mb-6">Our Story</h2>
                <p className="text-lg leading-relaxed mb-4 text-cyan-50">
                  AkaziFlow was born from a simple yet powerful vision: to bridge the gap between talented professionals in Rwanda and their dream careers.
                </p>
                <p className="text-lg leading-relaxed text-cyan-50">
                  We recognized that job seekers needed more than just a platform—they needed an intelligent partner that could help them stand out, connect with opportunities, and navigate their career journey with confidence.
                </p>
              </div>
              <div className="p-12 flex items-center justify-center bg-gradient-to-br from-teal-50 to-cyan-50">
                <div className="grid grid-cols-2 gap-8">
                  <div className="text-center transform hover:scale-110 transition-transform duration-300">
                    <div className="text-5xl font-bold text-transparent bg-clip-text bg-[#0c4242]">10K+</div>
                    <div className="text-gray-600 mt-2">CVs Created</div>
                  </div>
                  <div className="text-center transform hover:scale-110 transition-transform duration-300">
                    <div className="text-5xl font-bold text-transparent bg-clip-text bg-[#0c4242]">5K+</div>
                    <div className="text-gray-600 mt-2">Jobs Matched</div>
                  </div>
                  <div className="text-center transform hover:scale-110 transition-transform duration-300">
                    <div className="text-5xl font-bold text-transparent bg-clip-text bg-[#0c4242]">98%</div>
                    <div className="text-gray-600 mt-2">Satisfaction</div>
                  </div>
                  <div className="text-center transform hover:scale-110 transition-transform duration-300">
                    <div className="text-5xl font-bold text-transparent bg-clip-text bg-[#0c4242]">50+</div>
                    <div className="text-gray-600 mt-2">Partners</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="sm:px-6 lg:px-8 p-2 mb-10">
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white rounded-3xl p-10 shadow-xl hover:shadow-2xl transition-shadow duration-300 border-t-4 border-cyan-500">
              <div className="w-16 h-16 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-2xl flex items-center justify-center mb-6 transform hover:rotate-12 transition-transform duration-300">
                <Target className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-3xl font-bold text-gray-900 mb-4">Our Mission</h3>
              <p className="text-gray-600 text-lg leading-relaxed">
                To empower every job seeker in Rwanda with AI-driven tools that simplify CV creation,
                match them with the right opportunities, and accelerate their career growth through
                intelligent automation and personalized guidance.
              </p>
            </div>

            <div className="bg-white rounded-3xl p-10 shadow-xl hover:shadow-2xl transition-shadow duration-300 border-t-4 border-teal-500">
              <div className="w-16 h-16 bg-gradient-to-br from-teal-500 to-cyan-600 rounded-2xl flex items-center justify-center mb-6 transform hover:rotate-12 transition-transform duration-300">
                <TrendingUp className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-3xl font-bold text-gray-900 mb-4">Our Vision</h3>
              <p className="text-gray-600 text-lg leading-relaxed">
                To become the leading career acceleration platform in East Africa, where every
                professional has access to intelligent tools that unlock their full potential and
                connect them with opportunities that transform their lives.
              </p>
            </div>
          </div>
        </section>

        <section className="sm:px-6 lg:px-8 p-2 mb-10">
          <div className="text-center mb-12">
            <h2 className="text-5xl font-bold text-gray-900 mb-4">Our Core Values</h2>
            <p className="text-xl text-gray-600">The principles that guide everything we do</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="group relative bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-cyan-200 to-blue-200 rounded-full -mr-16 -mt-16 opacity-50 group-hover:scale-150 transition-transform duration-500"></div>
              <div className="relative z-10">
                <div className="w-14 h-14 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  <Zap className="w-7 h-7 text-white" />
                </div>
                <h4 className="text-2xl font-bold text-gray-900 mb-3">Innovation</h4>
                <p className="text-gray-600">
                  We continuously push boundaries with AI technology to deliver cutting-edge solutions
                  that make a real difference in people's careers.
                </p>
              </div>
            </div>

            <div className="group relative bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-teal-200 to-cyan-200 rounded-full -mr-16 -mt-16 opacity-50 group-hover:scale-150 transition-transform duration-500"></div>
              <div className="relative z-10">
                <div className="w-14 h-14 bg-gradient-to-br from-teal-500 to-cyan-600 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  <Heart className="w-7 h-7 text-white" />
                </div>
                <h4 className="text-2xl font-bold text-gray-900 mb-3">Empathy</h4>
                <p className="text-gray-600">
                  We understand the challenges of job seeking and build our platform with genuine
                  care for every user's success and aspirations.
                </p>
              </div>
            </div>

            <div className="group relative bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-blue-200 to-cyan-200 rounded-full -mr-16 -mt-16 opacity-50 group-hover:scale-150 transition-transform duration-500"></div>
              <div className="relative z-10">
                <div className="w-14 h-14 bg-gradient-to-br from-blue-500 to-cyan-600 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  <Award className="w-7 h-7 text-white" />
                </div>
                <h4 className="text-2xl font-bold text-gray-900 mb-3">Excellence</h4>
                <p className="text-gray-600">
                  We strive for excellence in every feature, ensuring our platform delivers
                  professional-grade results that users can be proud of.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="mb-10 sm:px-6 lg:px-8 p-2">
          <div className="text-center mb-12">
            <h2 className="text-5xl font-bold text-gray-900 mb-4">Our Team</h2>
            <p className="text-xl text-gray-600">Passionate individuals driving change in Rwanda</p>
          </div>

          <div className="bg-[#0c4242] rounded-3xl p-12 text-white text-center shadow-2xl">
            <Users className="w-20 h-20 mx-auto mb-6 opacity-90" />
            <h3 className="text-3xl font-bold mb-4">Built by Innovators, For Innovators</h3>
            <p className="text-xl text-cyan-50 max-w-3xl mx-auto leading-relaxed">
              Our diverse team combines expertise in AI, software engineering, human resources,
              and career development. Together, we're united by a single goal: making career
              success accessible to everyone in Rwanda.
            </p>
          </div>
        </section>

        <section className="mb-10 sm:px-6 lg:px-8 p-2">
          <div className="bg-white rounded-3xl p-12 shadow-2xl text-center relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-cyan-500 via-teal-500 to-blue-600"></div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Ready to Unlock Your Career?
            </h2>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              Join thousands of professionals who have transformed their careers with AkaziFlow
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <button className="px-8 py-4 bg-[#0c4242] text-white font-semibold rounded-xl hover:shadow-lg transform hover:-translate-y-1 transition-all duration-300 text-lg">
                Get Started Today
              </button>
              <button className="px-8 py-4 border-2 border-cyan-500 text-cyan-600 font-semibold rounded-xl hover:bg-cyan-50 transition-all duration-300 text-lg">
                Contact Us
              </button>
            </div>
          </div>
        </section>
      </div>
    </div>
    

    </main>
  );
}