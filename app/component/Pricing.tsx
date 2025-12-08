import { Check, X } from 'lucide-react';
import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Pricing - HustleBase Rwanda',
  description: 'Simple, transparent pricing for CV building and job automation.',
};

export default function PricingPage() {
  return (
    <main className="w-full min-h-screen py-24 flex flex-col justify-center items-center font-sans relative z-10">
      
      {/* Header Section */}
      <div className="text-center mb-16 px-6 animate-fade-in-up">
        <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-6 tracking-tight">
          Simple, Transparent <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-800 to-cyan-500">Pricing</span>
        </h1>
        <p className="text-lg text-slate-800 max-w-2xl mx-auto leading-relaxed">
          Start for free and upgrade only when you are ready to download your CV. No hidden subscriptions.
        </p>
      </div>

      {/* Cards Container */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 px-6 max-w-7xl mx-auto items-stretch">
        
        {/* --- Card 1: Basic (Free) --- */}
        <div className="bg-white/60 backdrop-blur-xl border border-white/50 rounded-3xl p-8 shadow-xl hover:-translate-y-2 transition-transform duration-300 flex flex-col">
          <h2 className="text-xl font-bold text-slate-900 mb-2">Basic Plan</h2>
          <p className="text-sm text-slate-500 mb-6">Perfect for testing the waters.</p>
          
          <div className="text-4xl font-extrabold text-slate-900 mb-6">0 RWF</div>
          
          <ul className="space-y-4 mb-8 text-sm text-slate-800 flex-1">
            <li className="flex items-center gap-3"><Check size={18} className="text-green-500 shrink-0" /> 1 Basic Template</li>
            <li className="flex items-center gap-3"><Check size={18} className="text-green-500 shrink-0" /> AI CV Builder Drafts</li>
            <li className="flex items-center gap-3 text-slate-400"><X size={18} /> No PDF Downloads</li>
            <li className="flex items-center gap-3 text-slate-400"><X size={18} /> No Job Auto-Apply</li>
          </ul>
          
          <Link 
            href="/builder" 
            className="block w-full py-3 rounded-xl font-bold text-center text-slate-800 border border-slate-300 hover:bg-slate-50 transition"
          >
            Get Started Free
          </Link>
        </div>

        {/* --- Card 2: Pay-As-You-Go (Most Popular) --- */}
        <div className="relative bg-white/80 backdrop-blur-xl border-2 border-green-800 rounded-3xl p-8 shadow-2xl shadow-green-500/20 transform md:scale-110 z-10 flex flex-col">
          <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-gradient-to-r from-green-800 to-cyan-500 text-white text-xs font-bold px-4 py-1 rounded-full uppercase tracking-wider">
            Most Popular
          </div>
          
          <h2 className="text-xl font-bold text-slate-900 mb-2">Pay-As-You-Go</h2>
          <p className="text-sm text-slate-500 mb-6">Pay only when you download.</p>
          
          <div className="text-4xl font-extrabold text-green-800 mb-1">500 RWF</div>
          <p className="text-xs text-slate-400 mb-6 font-medium uppercase tracking-wide">Per CV Download</p>
          
          <ul className="space-y-4 mb-8 text-sm text-slate-700 font-medium flex-1">
            <li className="flex items-center gap-3"><Check size={18} className="text-green-500 shrink-0" /> Unlock Premium Templates</li>
            <li className="flex items-center gap-3"><Check size={18} className="text-green-500 shrink-0" /> Download PDF instantly</li>
            <li className="flex items-center gap-3"><Check size={18} className="text-green-500 shrink-0" /> Send to WhatsApp</li>
            <li className="flex items-center gap-3"><Check size={18} className="text-green-500 shrink-0" /> AI Cover Letter Writer</li>
          </ul>
          
          <Link 
            href="/builder" 
            className="block w-full py-4 rounded-xl font-bold text-center text-white bg-gradient-to-r from-green-800 to-cyan-500 shadow-lg shadow-green-500/30 hover:shadow-green-500/50 hover:scale-[1.02] transition-all"
          >
            Start Building Now
          </Link>
        </div>

        {/* --- Card 3: Pro Monthly --- */}
        <div className="bg-white/60 backdrop-blur-xl border border-white/50 rounded-3xl p-8 shadow-xl hover:-translate-y-2 transition-transform duration-300 flex flex-col">
          <h2 className="text-xl font-bold text-slate-900 mb-2">Pro Monthly</h2>
          <p className="text-sm text-slate-500 mb-6">For heavy job seekers.</p>
          
          <div className="text-4xl font-extrabold text-slate-900 mb-1">5,000 RWF</div>
          <p className="text-xs text-slate-400 mb-6 font-medium uppercase tracking-wide">Per Month</p>
          
          <ul className="space-y-4 mb-8 text-sm text-slate-800 flex-1">
            <li className="flex items-center gap-3"><Check size={18} className="text-green-500 shrink-0" /> Unlimited PDF Downloads</li>
            <li className="flex items-center gap-3"><Check size={18} className="text-green-500 shrink-0" /> Auto-Apply to Jobs</li>
            <li className="flex items-center gap-3"><Check size={18} className="text-green-500 shrink-0" /> Priority Support</li>
            <li className="flex items-center gap-3"><Check size={18} className="text-green-500 shrink-0" /> Career Coaching Tips</li>
          </ul>
          
          <Link 
            href="/signup?plan=pro" 
            className="block w-full py-3 rounded-xl font-bold text-center text-green-800 border border-green-200 hover:bg-green-50 transition"
          >
            Subscribe Monthly
          </Link>
        </div>

      </div>
    </main>
  );
}