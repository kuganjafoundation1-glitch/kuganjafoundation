import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { Copy, Check, Smartphone, Landmark } from "lucide-react";
import { PageHero } from "@/components/site/PageHero";
import { DONATION } from "@/lib/site";

export const Route = createFileRoute("/donate")({
  head: () => ({
    meta: [
      { title: "Donate — Kuganja Foundation" },
      { name: "description", content: "Support Kuganja Foundation via MTN Mobile Money, Airtel Money, or bank transfer to Centenary Bank." },
      { property: "og:title", content: "Support the Work of Kuganja Foundation" },
      { property: "og:description", content: "Official donation channels: MTN Mobile Money, Airtel Money, and Centenary Bank." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Donate,
});

function CopyRow({ label, value }: { label: string; value: string }) {
  const [copied, setCopied] = useState(false);
  return (
    <div className="flex items-center justify-between gap-3 border-b border-border py-3 last:border-0">
      <div className="min-w-0">
        <p className="text-xs font-bold uppercase tracking-widest text-muted-foreground">{label}</p>
        <p className="mt-0.5 break-all font-display text-lg font-bold text-primary">{value}</p>
      </div>
      <button
        type="button"
        onClick={() => {
          navigator.clipboard?.writeText(value.replace(/\s/g, label.includes("Name") || label === "Bank" ? " " : ""));
          setCopied(true);
          setTimeout(() => setCopied(false), 1800);
        }}
        className="inline-flex shrink-0 items-center gap-1 rounded-md border border-border px-3 py-1.5 text-xs font-semibold text-primary hover:border-gold"
        aria-label={`Copy ${label}`}
      >
        {copied ? <Check className="h-3.5 w-3.5" /> : <Copy className="h-3.5 w-3.5" />} {copied ? "Copied" : "Copy"}
      </button>
    </div>
  );
}

function Donate() {
  return (
    <>
      <PageHero eyebrow="Donate" title="Support the Work of Kuganja Foundation">
        <p>You can support the foundation through the official channels below.</p>
      </PageHero>
      <section className="section">
        <div className="container-site grid gap-6 md:grid-cols-3">
          <div className="card-elevated border-t-4 border-t-gold p-7">
            <Smartphone className="h-6 w-6 text-gold" />
            <h2 className="mt-4 text-xl">MTN Mobile Money</h2>
            <div className="mt-4"><CopyRow label="Number" value={DONATION.mtn} /></div>
          </div>
          <div className="card-elevated border-t-4 border-t-gold p-7">
            <Smartphone className="h-6 w-6 text-gold" />
            <h2 className="mt-4 text-xl">Airtel Money</h2>
            <div className="mt-4"><CopyRow label="Number" value={DONATION.airtel} /></div>
          </div>
          <div className="card-elevated border-t-4 border-t-gold p-7">
            <Landmark className="h-6 w-6 text-gold" />
            <h2 className="mt-4 text-xl">Bank Transfer</h2>
            <div className="mt-4">
              <CopyRow label="Bank" value={DONATION.bank} />
              <CopyRow label="Account Name" value={DONATION.accountName} />
              <CopyRow label="Account Number" value={DONATION.accountNumber} />
            </div>
          </div>
        </div>
        <div className="container-site mt-10">
          <p className="rounded-lg bg-muted p-5 text-sm text-muted-foreground">
            If you have any questions or would like to confirm these payment details before giving, please reach the foundation
            through its official <Link to="/contact" className="font-semibold text-primary underline">contact channels</Link>.
          </p>
        </div>
      </section>
    </>
  );
}
