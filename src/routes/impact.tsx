import { createFileRoute, Link } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";
import { PageHero, PlaceholderNote, SectionHeading } from "@/components/site/PageHero";
import hero from "@/assets/hero.jpg";
import outreach1 from "@/assets/outreach-books-1.jpg.asset.json";
import outreach2 from "@/assets/outreach-books-2.jpg.asset.json";
import outreach3 from "@/assets/outreach-books-3.jpg.asset.json";
import outreach4 from "@/assets/outreach-books-4.jpg.asset.json";

export const Route = createFileRoute("/impact")({
  head: () => ({
    meta: [
      { title: "Our Impact — Kuganja Foundation" },
      { name: "description", content: "How Kuganja Foundation's community-centered approach supports vulnerable families in Namuwongo, Kampala." },
      { property: "og:title", content: "Our Impact — Kuganja Foundation" },
      { property: "og:description", content: "Our community-centered approach, objectives, and documented achievements." },
    ],
  }),
  component: Impact,
});

const OBJECTIVES = [
  "Deliver essential resources, relief, and direct support to vulnerable families.",
  "Promote mental health awareness, combat stigma, and encourage emotional wellbeing.",
  "Offer faith-based guidance, hope, and motivation.",
  "Use creative expression and heritage as avenues for healing and livelihoods.",
  "Build financial literacy and practical skills for self-reliance.",
];

function Impact() {
  return (
    <>
      <PageHero eyebrow="Our impact" title="Change that starts in the community" image={hero}>
        <p>We walk alongside our communities — listening, responding, and building resilience together.</p>
      </PageHero>

      <section className="section">
        <div className="container-site grid gap-12 md:grid-cols-2">
          <SectionHeading eyebrow="Our approach" title="Community-Centered by Design">
            <p>
              Our work is shaped by the people we serve. By combining direct outreach with spiritual nourishment, mental health
              awareness, creative expression, and practical knowledge, we aim to break cycles of poverty and build resilient futures.
            </p>
          </SectionHeading>
          <div>
            <h3 className="text-xl">Our Objectives</h3>
            <ul className="mt-5 space-y-3">
              {OBJECTIVES.map((o) => (
                <li key={o} className="flex gap-3 text-foreground/85"><span className="mt-2.5 h-2 w-2 shrink-0 rounded-full bg-gold" />{o}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="section bg-muted">
        <div className="container-site">
          <SectionHeading eyebrow="Achievements" title="Milestones" />
          <div className="mt-10"><PlaceholderNote>Verified achievements will be published here as they are documented.</PlaceholderNote></div>
        </div>
      </section>

      <section className="section">
        <div className="container-site">
          <SectionHeading eyebrow="Community voices" title="Stories of Hope" />
          <div className="mt-10"><PlaceholderNote>Stories from beneficiaries and communities will be shared here, with their consent.</PlaceholderNote></div>
        </div>
      </section>

      <section className="section bg-muted">
        <div className="container-site">
          <SectionHeading eyebrow="Gallery" title="Outreach & Events" />
          <article className="mt-10">
            <h3 className="text-2xl text-primary md:text-3xl">Empowering Women Through Skills Development</h3>
            <span className="gold-rule mt-4 block" />
            <p className="mt-5 max-w-3xl text-lg text-foreground/85">
              Kuganja Foundation equips women with practical skills in schoolbook production, enabling them to produce and sell
              schoolbooks to earn an income, support their families, and build more sustainable livelihoods.
            </p>
            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              {[
                { src: outreach1.url, w: 1070, h: 713, alt: "Women gathered for a skills development session with learning charts on the wall" },
                { src: outreach2.url, w: 1070, h: 713, alt: "Participants sorting stacks of printed schoolbook pages" },
                { src: outreach3.url, w: 1070, h: 713, alt: "A woman reviewing schoolbook pages during a skills training session" },
                { src: outreach4.url, w: 720, h: 960, alt: "A stack of completed schoolbooks produced by the group" },
              ].map((p) => (
                <img key={p.src} src={p.src} alt={p.alt} loading="lazy" width={p.w} height={p.h} className="h-auto w-full rounded-lg object-contain shadow-card" />
              ))}
            </div>
          </article>
          <Button asChild variant="navy" size="lg" className="mt-10"><Link to="/donate">Support Our Work</Link></Button>
        </div>
      </section>
    </>
  );
}
