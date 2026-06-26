import Link from "next/link";

export default function ForgotPasswordPage() {
  return (
    <main className="min-h-screen bg-[linear-gradient(135deg,_#f8fbff_0%,_#eef5ff_45%,_#f9fbff_100%)] px-4 py-12 text-slate-900 sm:px-6 lg:px-8">
      <div className="mx-auto flex max-w-6xl items-center justify-center">
        <div className="w-full max-w-md overflow-hidden rounded-[2rem] border border-slate-200 bg-white shadow-2xl shadow-sky-100">
          <div className="bg-slate-950 px-8 py-8 text-center text-white">
            <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-2xl bg-sky-500/20 text-xl font-semibold text-sky-300">
              NS
            </div>
            <h1 className="mt-4 text-2xl font-semibold">Reset your password</h1>
            <p className="mt-2 text-sm text-slate-400">We’ll help you get back into your account</p>
          </div>

          <div className="px-8 py-8 sm:px-10">
            <label htmlFor="email" className="mb-2 block text-sm font-medium text-slate-700">
              Email address
            </label>
            <input
              id="email"
              type="email"
              placeholder="you@company.com"
              className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-900 outline-none transition focus:border-sky-400 focus:bg-white"
            />

            <button
              type="button"
              className="mt-6 w-full rounded-2xl bg-sky-600 px-4 py-3 text-sm font-semibold text-white transition hover:bg-sky-700"
            >
              Send Reset Link
            </button>

            <p className="mt-8 text-center text-sm text-slate-600">
              <Link href="/login" className="font-semibold text-sky-700 transition hover:text-sky-800">
                Back to Login
              </Link>
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}
