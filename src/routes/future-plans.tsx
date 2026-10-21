import { createFileRoute } from "@tanstack/react-router";
import { HeartPulse, Clapperboard, Globe } from "lucide-react";
import { PageHero } from "@/components/site/PageHero";
import { christmas2024_3 } from "@/lib/images";
import { SITE_URL } from "@/lib/site";
import { buildSchemaGraph, jsonLdScript } from "@/lib/schema";

export const Route = createFileRoute("/future-plans")({
  head: () => ({
    meta: [
      { title: "Future Plans — Kuganja Foundation" },
      { name: "description", content: "Proposed initiatives of Kuganja Foundation: a wellness clinic, mobile outreach, family retreats, mobile cinema, a healing arts studio, and a digital platform." },
      { property: "og:title", content: "Future Plans — Kuganja Foundation" },
      { property: "og:description", content: "The foundation's proposed initiatives for holistic wellness, culture, and digital empowerment." },
      { property: "og:type", content: "website" },
      { property: "og:url", content: `${SITE_URL}/future-plans` },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    scripts: [jsonLdScript(buildSchemaGraph({
      path: "/future-plans",
      type: "WebPage",
      name: "Future Plans — Kuganja Foundation",
      description: "Proposed initiatives of Kuganja Foundation: a wellness clinic, mobile outreach, family retreats, mobile cinema, a healing arts studio, and a digital platform.",
    }))],
    links: [{ rel: "canonical", href: `${SITE_URL}/future-plans` }],
  }),
  component: Future,
});

const GROUPS = [
  {
    icon: HeartPulse,
    title: "Holistic Wellness & Family Support",
    items: [
      ["Community Counseling & Wellness Clinic", "A planned permanent space for faith-based and clinical mental health counseling."],
      ["Mobile Outreach & Support Units", "A planned service to bring support, essential supplies, and crisis intervention to remote or highly vulnerable families."],
      ["Family Restoration Retreats", "Proposed weekend retreats focused on family restoration through faith, counseling, and community."],
    ],
  },
  {
    icon: Clapperboard,
    title: "Media, Culture & Spiritual Inspiration",
    items: [
      ["Inspirational Mobile Cinema & Festivals", "A proposed expansion of inspirational film screenings to reach more communities."],
      ["Healing Arts Creative Studio", "A planned creative hub where youth and vulnerable individuals can explore painting, music, drama, and fashion as tools for trauma recovery and cultural expression."],
    ],
  },
  {
    icon: Globe,
    title: "Digital & Global Empowerment",
    items: [
      ["Online Platform & Mobile App", "A future digital platform for faith-based mental health resources, inspirational media, and remote skills-building opportunities."],
    ],
  },
];

function Future() {
  return (
    <>
      <PageHero eyebrow="Future plans" title="Where we hope to go next" image={christmas2024_3}>
        <p>The initiatives below are proposed future plans. They are not yet operational.</p>
      </PageHero>
      {GROUPS.map(({ icon: Icon, title, items }, i) => (
        <section key={title} className={`section ${i % 2 ? "bg-muted" : ""}`}>
          <div className="container-site">
            <div className="flex items-center gap-4">
              <span className="flex h-12 w-12 items-center justify-center rounded-full bg-gold-soft text-primary"><Icon className="h-6 w-6" /></span>
              <h2 className="text-2xl md:text-3xl">{title}</h2>
            </div>
            <div className="mt-10 grid gap-6 md:grid-cols-3">
              {items.map(([t, d]) => (
                <article key={t} className="card-elevated p-7">
                  <span className="rounded bg-gold-soft px-2 py-0.5 text-[0.65rem] font-bold uppercase tracking-wider text-primary">Future plan</span>
                  <h3 className="mt-4 text-lg">{t}</h3>
                  <p className="mt-2 text-[0.95rem] text-muted-foreground">{d}</p>
                </article>
              ))}
            </div>
          </div>
        </section>
      ))}
    </>
  );
}
