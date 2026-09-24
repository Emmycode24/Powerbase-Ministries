import React from "react";

const Giving = () => (
  <section className="giving-band">
    <div>
      <p className="eyebrow">05 · Support the work</p>
      <h2>Your giving reaches purpose.</h2>
      <p>Every contribution helps Powerbase nurture faith and shape destinies.</p>
      <a href={`${process.env.PUBLIC_URL}/#/giving`} className="giving-link">Donation <span>↗</span></a>
    </div>
    <dl className="giving-details">
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
  </section>
);

export const GivingPage = () => (
  <section className="donation-page">
    <div className="donation-heading">
      <p className="eyebrow text-[var(--royal-blue)]">05 · Support the work</p>
      <h1>Your gift reaches purpose.</h1>
      <p>Every contribution fuels worship, outreach, and the relentless pursuit of destinies shaped by God.</p>
    </div>

    <div className="donation-layout">
      <article className="donation-card">
        <p className="eyebrow text-[var(--royal-blue)]">Bank transfer</p>
        <h2>Donate securely through your bank.</h2>
        <dl className="donation-details">
          <div><dt>Account name</dt><dd>Powerbase Ministry Int&apos;l</dd></div>
          <div><dt>Bank</dt><dd>Access Bank</dd></div>
          <div><dt>Account number</dt><dd>003642798</dd></div>
        </dl>
      </article>
      <article className="donation-note">
        <p className="eyebrow text-[var(--royal-blue)]">Why we give</p>
        <h2>Generosity becomes ministry in action.</h2>
        <p>Your giving supports the gatherings, outreach, prayer, and practical work through which Powerbase serves people and strengthens the Kingdom.</p>
        <a href={`${process.env.PUBLIC_URL}/#/contact`} className="button button-gold">Ask about giving <span>↗</span></a>
      </article>
    </div>
  </section>
);

export default Giving;