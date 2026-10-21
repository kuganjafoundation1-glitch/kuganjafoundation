import { createFileRoute, Link } from "@tanstack/react-router";
import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { PageHero } from "@/components/site/PageHero";
import { PROGRAMS, SITE_URL } from "@/lib/site";
import { christmas2, classWriting, impactHero, outreachBooks3 } from "@/lib/images";

export const Route = createFileRoute("/programs")({
  head: () => ({
    meta: [
      { title: "Our Programs — Kuganja Foundation" },
      { name: "description", content: "Kuganja Foundation's five program areas: mental health and faith-based wellbeing, family support, arts and heritage, micro-empowerment, and skills development." },
      { property: "og:title", content: "Our Programs — Kuganja Foundation" },
      { property: "og:description", content: "Five program areas working together to heal the mind and equip the hands." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: `${SITE_URL}/programs` }],
  }),
  component: Programs,
});

const IMAGES: Record<string, { src: string; alt: string }> = {
  "mental-health": { src: classWriting, alt: "A woman taking notes during a community education class" },
  "family-support": { src: impactHero, alt: "Families and volunteers with outreach supplies" },
  "arts-culture": { src: outreachBooks3, alt: "Women working with schoolbook pages during a skills development session" },
};

function Programs() {
  return (
    <>
      <PageHero eyebrow="Our programs" title="Five areas of holistic care" image={outreachBooks3}>
        <p>From emotional healing to economic empowerment, each program serves vulnerable families and individuals.</p>
      </PageHero>

      {PROGRAMS.map((p, i) => {
        const img = IMAGES[p.id];
        return (
          <section key={p.id} id={p.id} className={`section scroll-mt-20 ${i % 2 ? "bg-muted" : ""}`}>
            <div className={`container-site grid items-start gap-12 ${img ? "md:grid-cols-2" : ""}`}>
              <div className={img && i % 2 ? "md:order-2" : ""}>
                <p className="eyebrow">Program 0{i + 1}</p>
                <h2 className="mt-3 text-3xl">{p.title}</h2>
                <span className="gold-rule mt-5" />
                <p className="mt-6 text-lg text-foreground/85">{p.description}</p>
                {p.items.length > 0 && (
                  <ul className="mt-8 space-y-5">
                    {p.items.map((it) => (
                      <li key={it.t} className="flex gap-4">
                        <span className="mt-1 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-gold-soft text-primary"><Check className="h-4 w-4" /></span>
                        <div>
                          <h3 className="text-base">{it.t}</h3>
                          <p className="mt-1 text-[0.95rem] text-muted-foreground">{it.d}</p>
                        </div>
                      </li>
                    ))}
                  </ul>
                )}
                {p.id === "skills" && (
                  <p className="mt-6 text-muted-foreground">Further details about this program will be shared as activities are documented.</p>
                )}
              </div>
              {img && (
                <img src={img.src} alt={img.alt} loading="lazy" width={1070} height={713} className="aspect-[4/3] w-full rounded-lg object-cover shadow-card" />
              )}
            </div>
            {p.id === "mental-health" && (
              <div className="container-site mt-14">
                <div className="relative overflow-hidden rounded-lg bg-navy-deep">
                  <img src={christmas2} alt="Children watching a film at the Christmas community celebration" loading="lazy" width={1024} height={768} className="absolute inset-0 h-full w-full object-cover opacity-35" />
                  <div className="relative p-8 md:p-12">
                    <p className="eyebrow">Highlighted initiative</p>
                    <h3 className="mt-3 text-2xl text-primary-foreground md:text-3xl">Inspirational Cinema Ministry</h3>
                    <p className="mt-4 max-w-xl text-primary-foreground/85">
                      We use curated faith-centered and motivational movie screenings as tools for community reflection, hope, and moral inspiration.
                    </p>
                  </div>
                </div>
              </div>
            )}
          </section>
        );
      })}

      <section className="section bg-primary">
        <div className="container-site text-center">
          <h2 className="text-3xl text-primary-foreground">Help sustain these programs</h2>
          <Button asChild variant="gold" size="lg" className="mt-8"><Link to="/donate" data-umami-event="donate-click" data-umami-event-location="programs-cta">How to Donate</Link></Button>
        </div>
      </section>
    </>
  );
}
