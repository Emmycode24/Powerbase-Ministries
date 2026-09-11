import React from "react";

const Giving = () => (
  <aside className="fixed top-24 right-4 z-40 w-[min(19rem,calc(100vw-2rem))] rounded-xl border border-amber-200 bg-white p-5 shadow-2xl">
    <p className="text-xs font-semibold uppercase tracking-widest text-amber-700">Give faithfully</p>
    <h2 className="mt-1 text-lg font-bold text-slate-900">Donation, Tithe &amp; Offering</h2>
    <p className="mt-2 text-sm text-slate-600">Use the account below when giving to Powerbase Ministry International.</p>
    <dl className="mt-4 space-y-2 border-t border-slate-100 pt-4 text-sm">
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
        <dd className="font-mono font-bold tracking-wider text-purple-900">003642798</dd>
      </div>
    </dl>
    <p className="mt-4 rounded-lg bg-amber-100 px-3 py-2 text-xs text-amber-900">Use donation, tithe, or offering as the transfer narration.</p>
  </aside>
);

export default Giving;