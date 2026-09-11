import React from "react";

const Giving = () => (
  <aside className="fixed top-20 right-2 z-40 w-[calc(100vw-1rem)] max-w-[19rem] rounded-xl border border-amber-200 bg-white p-3 shadow-2xl sm:top-24 sm:right-4 sm:p-5">
    <p className="text-xs font-semibold uppercase tracking-widest text-amber-700">Give faithfully</p>
    <h2 className="mt-1 text-base font-bold text-slate-900 sm:text-lg">Donation, Tithe &amp; Offering</h2>
    <p className="mt-1 text-xs text-slate-600 sm:mt-2 sm:text-sm">Use the account below when giving to Powerbase Ministry International.</p>
    <dl className="mt-3 space-y-1 border-t border-slate-100 pt-3 text-xs sm:mt-4 sm:space-y-2 sm:pt-4 sm:text-sm">
      <div className="flex justify-between gap-4">
        <dt className="text-slate-500">Account name</dt>
        <dd className="text-right font-semibold text-slate-900">Powerbase Ministry Int&apos;l</dd>
      </div>
      <div className="flex justify-between gap-4">
        <dt className="text-slate-500">Bank</dt>
        <dd className="font-semibold text-slate-900">Access Bank</dd>
      </div>
      <div className="flex justify-between gap-4">
        <dt className="text-slate-500">Account no.</dt>
        <dd className="font-mono text-sm font-bold tracking-wider text-purple-900 sm:text-base">003642798</dd>
      </div>
    </dl>
    <p className="mt-3 rounded-lg bg-amber-100 px-2 py-1.5 text-[11px] text-amber-900 sm:mt-4 sm:px-3 sm:py-2 sm:text-xs">Use donation, tithe, or offering as the transfer narration.</p>
  </aside>
);

export default Giving;