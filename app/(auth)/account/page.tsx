"use client";
import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Mail, Lock, User, ArrowRight, TrendingUp, Loader2 } from 'lucide-react';
import { handleSubmit } from '@/app/action/actions';

export default function SignupPage() {
  const [mounted, setMounted] = useState(false);
  const [isPending, setIsPending] = useState(false);
  const [action, setAction] = useState<"sign up" | "log in">("sign up");
  const [infoMessage, setInfoMessage] = useState<string | null>(null);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  useEffect(() => {
    setMounted(true);
  }, []);

  async function clientAction(formData: FormData) {
    setIsPending(true);
    setErrorMessage(null);
    setInfoMessage(null);

    try {
      const result = await handleSubmit(formData);
      
      // If we get a result object, it's a successful Sign Up
      if (result?.success) {
        setAction("log in");
        setInfoMessage(result.message);
      }
    } catch (error: any) {
      // Ignore Next.js redirect "errors"
      if (error.message === 'NEXT_REDIRECT') throw error;
      setErrorMessage(error.message || "An unexpected error occurred.");
    } finally {
      setIsPending(false);
    }
  }

  if (!mounted) return <div className="min-h-screen bg-slate-50" />;

  return (
    <main className='w-full min-h-screen ' suppressHydrationWarning>
      <div className="p-4">
        <Link href="/" className="inline-block">
          <Image src="/logo.png" alt="logo" width={150} height={40} priority />
        </Link>
      </div>

      <section className="flex items-center justify-center py-7 px-4 relative font-sans">
        <div className="w-full max-w-md bg-white/70 backdrop-blur-xl border border-white/50 shadow-2xl rounded-3xl p-8 md:p-10">
          <div className="text-center mb-8">
            <div className="flex justify-center mb-6">
               <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-cyan-500 rounded-xl flex items-center justify-center text-white shadow-lg">
                 <TrendingUp size={28} strokeWidth={2.5} />
               </div>
            </div>

            {action === "sign up" ? (
              <>
                <h1 className="text-2xl font-bold text-slate-900">Create your account</h1>
                <p className="text-slate-500 text-sm mt-2">Start your career journey in Rwanda today.</p>
              </>
            ) : (
              <>
                <h1 className="text-2xl font-bold text-slate-900">Welcome back</h1>
                <p className="text-slate-500 text-sm mt-2">Sign in to continue your career journey.</p>
              </>
            )}
          </div>

          {infoMessage && <div className="mb-6 p-3 bg-green-100 text-green-700 text-sm rounded-xl text-center border border-green-200 font-medium">{infoMessage}</div>}
          {errorMessage && <div className="mb-6 p-3 bg-red-100 text-red-700 text-sm rounded-xl text-center border border-red-200 font-medium">{errorMessage}</div>}

          <form className="space-y-5" action={clientAction}>
            {action === "sign up" && (
              <div className="space-y-1.5">
                <label className="text-sm font-semibold text-slate-700 ml-1">Full Name</label>
                <div className="relative">
                  <User className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={20} />
                  <input type="text" name='fullname' placeholder="e.g. Karangwa" className="w-full pl-11 pr-4 py-3 rounded-xl bg-white border border-slate-200 outline-none focus:ring-2 focus:ring-blue-500 transition" required />
                </div>
              </div>
            )}

            <div className="space-y-1.5">
              <label className="text-sm font-semibold text-slate-700 ml-1">Email Address</label>
              <div className="relative">
                <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={20} />
                <input type="email" name='email' placeholder="name@example.com" className="w-full pl-11 pr-4 py-3 rounded-xl bg-white border border-slate-200 outline-none focus:ring-2 focus:ring-blue-500 transition" required />
              </div>
            </div>

            <div className="space-y-1.5">
              <label className="text-sm font-semibold text-slate-700 ml-1">Password</label>
              <div className="relative">
                <Lock className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={20} />
                <input type="password" name='password' placeholder="••••••••" className="w-full pl-11 pr-4 py-3 rounded-xl bg-white border border-slate-200 outline-none focus:ring-2 focus:ring-blue-500 transition" required />
              </div>
            </div>

            {action === "log in" && (
              <p className="text-right text-sm text-blue-500 hover:text-blue-600 cursor-pointer font-medium">Forgot your password?</p>
            )}

            <button disabled={isPending} type="submit" className="w-full bg-gradient-to-r from-blue-600 to-cyan-500 text-white font-bold py-3.5 rounded-xl shadow-lg hover:scale-[1.02] transition-all flex items-center justify-center gap-2 mt-2 disabled:opacity-70">
              {isPending ? <Loader2 className="animate-spin" size={20} /> : <><span className="capitalize">{action}</span> <ArrowRight size={18} /></>}
            </button>
          </form>

          <div className="relative my-8">
            <div className="absolute inset-0 flex items-center"><div className="w-full border-t border-slate-200"></div></div>
            <div className="relative flex justify-center text-xs uppercase tracking-wider font-bold text-slate-400"><span className="bg-white px-2">Or continue with</span></div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <button className="flex items-center justify-center gap-2 bg-white border border-slate-200 p-3 rounded-xl hover:bg-slate-50 transition font-medium text-slate-700 shadow-sm">
              <svg className="w-5 h-5" viewBox="0 0 24 24">
                <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4" />
                <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853" />
                <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05" />
                <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335" />
              </svg>
              Google
            </button>
            <button className="flex items-center justify-center gap-2 bg-white border border-slate-200 p-3 rounded-xl hover:bg-slate-50 transition font-medium text-slate-700 shadow-sm">
              <svg className="w-5 h-5 text-[#0077b5] fill-current" viewBox="0 0 24 24">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
              </svg>
              LinkedIn
            </button>
          </div>

          <p className="text-center text-sm text-slate-600 mt-8">
            {action === "sign up" ? "Already have an account? " : "Don't have an account? "}
            <button type="button" onClick={() => { setAction(action === "sign up" ? "log in" : "sign up"); setInfoMessage(null); setErrorMessage(null); }} className="text-blue-600 font-bold hover:underline">
              {action === "sign up" ? "Log in" : "Sign up"}
            </button>
          </p>
        </div>
      </section>
    </main>
  );
}