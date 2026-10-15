import { createFileRoute, Link } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";
import { PageHero, PlaceholderNote, SectionHeading } from "@/components/site/PageHero";
import hero from "@/assets/hero.jpg";

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
          <div className="mt-10"><PlaceholderNote>Approved photographs of outreach activities and events will appear here.</PlaceholderNote></div>
          <Button asChild variant="navy" size="lg" className="mt-10"><Link to="/donate">Support Our Work</Link></Button>
        </div>
      </section>
    </>
  );
}
