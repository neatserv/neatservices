"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import type { FormEvent } from "react";

export default function LoginPage() {
  const router = useRouter();

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    router.push("/dashboard");
  };

  return (
    <main className="min-h-screen bg-[linear-gradient(135deg,_#f8fbff_0%,_#eef5ff_45%,_#f9fbff_100%)] px-4 py-12 text-slate-900 sm:px-6 lg:px-8">
      <div className="mx-auto flex max-w-6xl items-center justify-center">
        <div className="w-full max-w-md overflow-hidden rounded-[2rem] border border-slate-200 bg-white shadow-2xl shadow-sky-100">
          <div className="bg-slate-950 px-8 py-8 text-center text-white">
            <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-2xl bg-sky-500/20 text-xl font-semibold text-sky-300">
              NS
            </div>
            <h1 className="mt-4 text-2xl font-semibold">Welcome Back</h1>
            <p className="mt-2 text-sm text-slate-400">Sign in to your account</p>
          </div>

          <div className="px-8 py-8 sm:px-10">
            <form className="space-y-5" onSubmit={handleSubmit}>
              <div>
                <label htmlFor="email" className="mb-2 block text-sm font-medium text-slate-700">
                  Email
                </label>
                <input
                  id="email"
                  type="email"
                  placeholder="you@company.com"
                  className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-900 outline-none transition focus:border-sky-400 focus:bg-white"
                />
              </div>

              <div>
                <label htmlFor="password" className="mb-2 block text-sm font-medium text-slate-700">
                  Password
                </label>
                <input
                  id="password"
                  type="password"
                  placeholder="Enter your password"
                  className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-900 outline-none transition focus:border-sky-400 focus:bg-white"
                />
              </div>

              <div className="flex items-center justify-between text-sm">
                <label className="flex items-center gap-2 text-slate-600">
                  <input type="checkbox" className="h-4 w-4 rounded border-slate-300 text-sky-600 focus:ring-sky-500" />
                  Remember me
                </label>
                <Link href="/forgot-password" className="font-medium text-sky-700 transition hover:text-sky-800">
                  Forgot Password?
                </Link>
              </div>

              <button
                type="submit"
                className="w-full rounded-2xl bg-sky-600 px-4 py-3 text-sm font-semibold text-white transition hover:bg-sky-700"
              >
                Sign In
              </button>
            </form>

            <div className="my-6 flex items-center gap-3">
              <div className="h-px flex-1 bg-slate-200" />
              <span className="text-sm text-slate-500">OR</span>
              <div className="h-px flex-1 bg-slate-200" />
            </div>

            <button
              type="button"
              className="flex w-full items-center justify-center gap-3 rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm font-semibold text-slate-700 transition hover:border-slate-300 hover:bg-slate-50"
            >
              <svg className="h-5 w-5" viewBox="0 0 24 24" aria-hidden="true">
                <path
                  fill="#4285F4"
                  d="M21.805 10.023H12.2v3.955h5.35a4.57 4.57 0 0 1-4.57 3.43c-2.77 0-5.02-2.24-5.02-5.01s2.25-5.01 5.02-5.01c1.25 0 2.39.46 3.25 1.23l2.8-2.8A9.57 9.57 0 0 0 12.2 2.1C6.98 2.1 2.8 6.28 2.8 11.5c0 5.22 4.18 9.4 9.4 9.4 5.42 0 9.01-3.8 9.01-9.15 0-.61-.06-1.08-.14-1.56Z"
                />
              </svg>
              Coming Soon - Google Login will be available after authentication integration.
            </button>

            <p className="mt-8 text-center text-sm text-slate-600">
              Don&apos;t have an account?{' '}
              <Link href="/signup" className="font-semibold text-sky-700 transition hover:text-sky-800">
                Sign Up
              </Link>
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}
