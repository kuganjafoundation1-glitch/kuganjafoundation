import { createFileRoute, Link } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";
import { PageHero, SectionHeading } from "@/components/site/PageHero";
import { impactHero, outreachWalk } from "@/lib/images";
import { SITE_URL } from "@/lib/site";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Us — Kuganja Foundation" },
      { name: "description", content: "Learn about Kuganja Foundation, founded in 2018 in Namuwongo, Kampala by Kasheija Martin — our story, vision, mission, and approach." },
      { property: "og:title", content: "About Kuganja Foundation" },
      { property: "og:description", content: "Our story, vision, mission, and holistic approach to community upliftment." },
      { property: "og:type", content: "website" },
      { property: "og:url", content: `${SITE_URL}/about` },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: `${SITE_URL}/about` }],
  }),
  component: About,
});

const VALUES = [
  ["Community Outreach", "Delivering essential resources, relief, and direct support to vulnerable families."],
  ["Spiritual Nourishment & Motivation", "Sharing faith, hope, and motivation to uplift the soul and build strong community foundations."],
  ["Mental Health Awareness & Wellbeing", "Hosting community workshops to combat stigma, teach mindfulness, and promote emotional wellbeing."],
  ["Faith-Based Spiritual Guidance", "Nurturing inner strength and hope by anchoring psychosocial care in a compassionate spiritual foundation."],
];

function About() {
  return (
    <>
      <PageHero eyebrow="About us" title="Healing the mind while equipping the hands" image={impactHero}>
        <p>A Ugandan charity walking alongside vulnerable families since 2018.</p>
      </PageHero>

      <section className="section">
        <div className="container-site grid items-center gap-12 md:grid-cols-2">
          <SectionHeading eyebrow="Overview" title="Who We Are">
            <p>
              Kuganja Foundation is a charity organization in Uganda dedicated to uplifting vulnerable families and individuals
              through holistic care. By bridging spiritual nourishment, creative expression, mental health support, and practical
              knowledge, we walk alongside our communities to break cycles of poverty and build resilient futures.
            </p>
          </SectionHeading>
          <img src={outreachWalk} alt="Kuganja Foundation volunteers carrying donation bags through the community" loading="lazy" width={1070} height={713} className="aspect-[4/3] w-full rounded-lg object-cover shadow-card" />
        </div>
      </section>

      <section className="section bg-muted">
        <div className="container-site grid gap-12 md:grid-cols-[1fr_1.3fr]">
          <SectionHeading eyebrow="History & founder" title="Born from the Streets, Driven by Hope" />
          <div className="space-y-5 text-foreground/85">
            <p>
              Kuganja Foundation was founded in 2018 by Kasheija Martin, a Ugandan fashion designer, community worker, and mental
              health advocate.
            </p>
            <p>
              Growing up in Namuwongo, Kampala, exposed him to severe poverty, systemic neglect, and unaddressed mental health
              challenges. These lived experiences, together with his love for his community, inspired him to establish a foundation
              that helps bridge the gap between vulnerability and self-reliance.
            </p>
            <p>Rooted in Namuwongo, the foundation holds the ambition to expand its work to communities beyond.</p>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container-site">
          <SectionHeading center eyebrow="Why we exist" title="A Holistic Response" />
          <blockquote className="mx-auto mt-10 max-w-3xl border-l-4 border-gold pl-6 font-display text-xl font-semibold leading-relaxed text-primary md:text-2xl">
            “In many underserved communities, survival takes precedence over well-being, mental health struggles are often suffered
            in silence, and poverty traps families in cycles that are difficult to break. We believe that upliftment requires a
            holistic approach – healing the mind while equipping the hands.”
          </blockquote>
        </div>
      </section>

      <section className="section bg-muted">
        <div className="container-site grid gap-6 md:grid-cols-2">
          <div className="card-elevated border-t-4 border-t-gold p-8">
            <p className="eyebrow">Our Vision</p>
            <p className="mt-4 font-display text-xl font-semibold text-primary">A thriving & resilient community where every individual is spiritually fulfilled, mentally supported, and economically empowered.</p>
          </div>
          <div className="card-elevated border-t-4 border-t-gold p-8">
            <p className="eyebrow">Our Mission</p>
            <p className="mt-4 font-display text-xl font-semibold text-primary">To uplift vulnerable families through holistic community outreach, faith-based guidance, mental health advocacy, creative expression, and practical skills training.</p>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container-site">
          <SectionHeading eyebrow="Our approach" title="Core Values and Approach" />
          <div className="mt-12 grid gap-6 sm:grid-cols-2">
            {VALUES.map(([t, d], i) => (
              <div key={t} className="card-elevated flex gap-5 p-7">
                <span className="font-display text-2xl font-extrabold text-gold">0{i + 1}</span>
                <div>
                  <h3 className="text-lg">{t}</h3>
                  <p className="mt-2 text-muted-foreground">{d}</p>
                </div>
              </div>
            ))}
          </div>
          <Button asChild variant="navy" size="lg" className="mt-12"><Link to="/programs">Explore Our Programs</Link></Button>
        </div>
      </section>
    </>
  );
}
