import React from "react";

const Giving = () => (
  <aside className="fixed top-20 right-2 z-40 w-[calc(100vw-1rem)] max-w-[16rem] rounded-xl border border-amber-200 bg-white p-3 shadow-2xl sm:top-24 sm:right-4">
    <p className="text-xs font-semibold uppercase tracking-widest text-amber-700">Give faithfully</p>
    <h2 className="mt-1 text-sm font-bold text-slate-900 sm:text-base">Donation, Tithe &amp; Offering</h2>
    <p className="mt-1 text-[11px] text-slate-600">Use the account below when giving to Powerbase Ministry International.</p>
    <dl className="mt-2 space-y-1 border-t border-slate-100 pt-2 text-[11px] sm:text-xs">
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
        <dd className="font-mono text-xs font-bold tracking-wider text-purple-900 sm:text-sm">003642798</dd>
      </div>
    </dl>
    <p className="mt-2 rounded-lg bg-amber-100 px-2 py-1 text-[10px] text-amber-900">Use donation, tithe, or offering as the narration.</p>
  </aside>
);

export default Giving;