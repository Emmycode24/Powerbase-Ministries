import React from "react";

const Giving = () => (
  <aside className="pointer-events-none fixed top-20 right-2 z-40 w-auto max-w-[13rem] rounded-lg border border-amber-200 bg-white/95 p-2 shadow-lg sm:top-24 sm:right-4">
    <p className="text-[10px] font-semibold uppercase tracking-wider text-amber-700">Donation | Tithe | Offering</p>
    <dl className="mt-1 space-y-0.5 border-t border-slate-100 pt-1 text-[10px] sm:text-[11px]">
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
        <dd className="font-mono text-xs font-bold tracking-wider text-[var(--royal-blue-dark)] sm:text-sm">003642798</dd>
      </div>
    </dl>
  </aside>
);

export default Giving;