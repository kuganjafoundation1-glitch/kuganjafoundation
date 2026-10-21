import { createFileRoute, Link } from "@tanstack/react-router";
import { HandHeart, Sparkles, Brain, Church, Phone, Mail, MapPin, MessageCircle, ArrowRight, Film } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SectionHeading } from "@/components/site/PageHero";
import { HomeTeam } from "@/components/site/HomeTeam";
import { CONTACT, PROGRAMS, SITE_URL } from "@/lib/site";
import cinema from "@/assets/cinema.jpg";
import { donationsGroup, homeArts, homeHero } from "@/lib/images";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Kuganja Foundation — Building Hope in Namuwongo, Kampala" },
      { name: "description", content: "Kuganja Foundation uplifts vulnerable families in Uganda through holistic care, spiritual nourishment, mental health advocacy, creative expression, and skills development." },
      { property: "og:title", content: "Kuganja Foundation — Building Hope, Empowering Communities" },
      { property: "og:description", content: "Holistic care for vulnerable families in Namuwongo, Kampala, Uganda." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: SITE_URL }],
  }),
  component: Index,
});

const VALUES = [
  { icon: HandHeart, t: "Community Outreach", d: "Delivering essential resources, relief, and direct support to vulnerable families." },
  { icon: Sparkles, t: "Spiritual Nourishment & Motivation", d: "Sharing faith, hope, and motivation to uplift the soul and build strong community foundations." },
  { icon: Brain, t: "Mental Health Awareness & Wellbeing", d: "Hosting community workshops to combat stigma, teach mindfulness, and promote emotional wellbeing." },
  { icon: Church, t: "Faith-Based Spiritual Guidance", d: "Nurturing inner strength and hope by anchoring psychosocial care in a compassionate spiritual foundation." },
];

const FUTURE = [
  "Community Counseling & Wellness Clinic",
  "Mobile Outreach & Support Units",
  "Family Restoration Retreats",
  "Inspirational Mobile Cinema & Festivals",
  "The Healing Arts Creative Studio",
  "Online Platform & Mobile App",
];

function Index() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-primary">
        <img src={homeHero} alt="Kuganja Foundation volunteers carrying food supplies through the streets of Namuwongo, Kampala" width={1280} height={853} className="absolute inset-0 h-full w-full object-cover" />
        <div className="absolute inset-0 hero-overlay" />
        <div className="container-site relative py-24 md:py-36">
          <p className="eyebrow">Namuwongo · Kampala · Uganda</p>
          <h1 className="mt-4 max-w-3xl text-4xl text-primary-foreground md:text-6xl">
            Building Hope. Empowering Communities. Transforming Lives.
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-primary-foreground/85">
            Kuganja Foundation walks alongside vulnerable families and individuals through holistic care, spiritual nourishment,
            mental health advocacy, creative expression, and practical skills development.
          </p>
          <div className="mt-9 flex flex-wrap gap-3">
            <Button asChild variant="gold" size="lg"><Link to="/programs">Explore Our Programs</Link></Button>
            <Button asChild variant="heroOutline" size="lg"><Link to="/donate" data-umami-event="donate-click" data-umami-event-location="home-hero">Support Our Mission</Link></Button>
          </div>
        </div>
      </section>

      {/* Intro */}
      <section className="section">
        <div className="container-site grid items-center gap-12 md:grid-cols-2">
          <div>
            <SectionHeading eyebrow="Who we are" title="A Community Where Everyone Can Thrive">
              <p>
                Kuganja Foundation is a charity organization in Uganda dedicated to uplifting vulnerable families and individuals
                through holistic care. By bridging spiritual nourishment, creative expression, mental health support, and practical
                knowledge, we walk alongside our communities to break cycles of poverty and build resilient futures.
              </p>
            </SectionHeading>
            <Button asChild variant="navy" size="lg" className="mt-8"><Link to="/about">About Us <ArrowRight /></Link></Button>
          </div>
          <img src={donationsGroup} alt="Kuganja Foundation volunteers standing with collected donations of clothes, bedding and bags" loading="lazy" width={1070} height={713} className="aspect-[4/3] w-full rounded-lg object-cover shadow-card" />
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="section bg-muted">
        <div className="container-site grid gap-6 md:grid-cols-2">
          {[
            { k: "Our Vision", v: "A thriving & resilient community where every individual is spiritually fulfilled, mentally supported, and economically empowered." },
            { k: "Our Mission", v: "To uplift vulnerable families through holistic community outreach, faith-based guidance, mental health advocacy, creative expression, and practical skills training." },
          ].map((c) => (
            <div key={c.k} className="card-elevated border-t-4 border-t-gold p-8 md:p-10">
              <p className="eyebrow">{c.k}</p>
              <p className="mt-4 font-display text-xl font-semibold leading-snug text-primary md:text-2xl">{c.v}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Values */}
      <section className="section">
        <div className="container-site">
          <SectionHeading center eyebrow="Our approach" title="Core Values and Approach" />
          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {VALUES.map(({ icon: Icon, t, d }) => (
              <div key={t} className="card-elevated p-7 hover:-translate-y-1">
                <span className="flex h-12 w-12 items-center justify-center rounded-full bg-gold-soft text-primary"><Icon className="h-6 w-6" /></span>
                <h3 className="mt-5 text-lg">{t}</h3>
                <p className="mt-2 text-[0.95rem] text-muted-foreground">{d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Programs */}
      <section className="section bg-muted">
        <div className="container-site">
          <SectionHeading eyebrow="What we do" title="Our Programs">
            <p>Five program areas working together to heal the mind and equip the hands.</p>
          </SectionHeading>
          <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {PROGRAMS.map((p, i) => (
              <article key={p.id} className="card-elevated flex flex-col p-7 hover:-translate-y-1">
                <span className="font-display text-sm font-bold text-gold">0{i + 1}</span>
                <h3 className="mt-3 text-xl">{p.title}</h3>
                <p className="mt-3 flex-1 text-[0.95rem] text-muted-foreground">{p.short}</p>
                <Link to="/programs" hash={p.id} className="mt-6 inline-flex items-center gap-1 text-sm font-semibold text-primary hover:text-gold">
                  Learn More <ArrowRight className="h-4 w-4" />
                </Link>
              </article>
            ))}
            <div className="relative overflow-hidden rounded-lg">
              <img src={homeArts} alt="Women writing notes during a community education session" loading="lazy" width={1070} height={713} className="h-full min-h-64 w-full object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* Cinema */}
      <section className="relative overflow-hidden bg-navy-deep">
        <img src={cinema} alt="An outdoor community film screening at dusk" loading="lazy" width={1600} height={1008} className="absolute inset-0 h-full w-full object-cover opacity-40" />
        <div className="container-site relative grid items-center gap-10 py-24 md:grid-cols-2">
          <div>
            <p className="eyebrow flex items-center gap-2"><Film className="h-4 w-4" /> Featured initiative · Inspirational Cinema Ministry</p>
            <h2 className="mt-4 text-3xl text-primary-foreground md:text-4xl">Inspiring Hope Through the Power of Story</h2>
            <span className="gold-rule mt-5" />
            <p className="mt-6 text-lg text-primary-foreground/85">
              We use curated faith-centered and motivational movie screenings as tools for community reflection, hope, and moral inspiration.
            </p>
            <Button asChild variant="heroOutline" size="lg" className="mt-8"><Link to="/programs" hash="mental-health">Learn More</Link></Button>
          </div>
        </div>
      </section>

      {/* Story */}
      <section className="section">
        <div className="container-site grid gap-12 md:grid-cols-[1fr_1.3fr]">
          <SectionHeading eyebrow="Our story" title="Born from the Streets, Driven by Hope" />
          <div className="space-y-5 text-foreground/85">
            <p>
              Kuganja Foundation was founded in 2018 by Kasheija Martin, a Ugandan fashion designer, community worker, and mental
              health advocate.
            </p>
            <p>
              Growing up in Namuwongo, he witnessed firsthand the effects of severe poverty, systemic neglect, and unaddressed mental
              health challenges. His lived experience and deep love for his community inspired him to establish a foundation that
              helps bridge the gap between vulnerability and self-reliance — with the ambition to expand its reach beyond Namuwongo.
            </p>
            <Link to="/about" className="inline-flex items-center gap-1 font-semibold text-primary hover:text-gold">Read our full story <ArrowRight className="h-4 w-4" /></Link>
          </div>
        </div>
      </section>

      <HomeTeam />

      {/* Future */}
      <section className="section bg-muted">
        <div className="container-site">
          <SectionHeading eyebrow="Proposed initiatives" title="Our Future Vision">
            <p>These are future plans the foundation hopes to realize. They are not yet operational.</p>
          </SectionHeading>
          <ul className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {FUTURE.map((f) => (
              <li key={f} className="flex items-start gap-3 rounded-lg border border-border bg-card p-5">
                <span className="mt-0.5 rounded bg-gold-soft px-2 py-0.5 text-[0.65rem] font-bold uppercase tracking-wider text-primary">Planned</span>
                <span className="font-semibold text-primary">{f}</span>
              </li>
            ))}
          </ul>
          <div className="mt-10 flex flex-wrap gap-3">
            <Button asChild variant="navy" size="lg"><Link to="/future-plans">View Future Plans</Link></Button>
            <Button asChild variant="gold" size="lg"><Link to="/events">See Upcoming Events</Link></Button>
          </div>
        </div>
      </section>

      {/* Donate */}
      <section className="section bg-primary">
        <div className="container-site text-center">
          <p className="eyebrow">Support our mission</p>
          <h2 className="mt-3 text-3xl text-primary-foreground md:text-4xl">Be Part of the Change</h2>
          <p className="mx-auto mt-5 max-w-2xl text-lg text-primary-foreground/85">
            Your support can help Kuganja Foundation continue its commitment to uplifting vulnerable families and individuals and
            building resilient communities.
          </p>
          <Button asChild variant="gold" size="lg" className="mt-8"><Link to="/donate" data-umami-event="donate-click" data-umami-event-location="home-donate-section">How to Donate</Link></Button>
        </div>
      </section>

      {/* Contact preview */}
      <section className="section">
        <div className="container-site">
          <SectionHeading eyebrow="Get in touch" title="Contact Kuganja Foundation" />
          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { icon: Phone, k: "Telephone", v: CONTACT.phone, href: CONTACT.phoneHref },
              { icon: MessageCircle, k: "WhatsApp", v: CONTACT.whatsapp, href: CONTACT.whatsappHref },
              { icon: Mail, k: "Email", v: CONTACT.email, href: CONTACT.emailHref },
              { icon: MapPin, k: "Location", v: CONTACT.location },
            ].map(({ icon: Icon, k, v, href }) => (
              <div key={k} className="card-elevated p-6">
                <Icon className="h-5 w-5 text-gold" />
                <p className="mt-3 text-xs font-bold uppercase tracking-widest text-muted-foreground">{k}</p>
                {href ? (
                  <a href={href} target={href.startsWith("http") ? "_blank" : undefined} rel="noopener noreferrer" className="mt-1 block break-all font-semibold text-primary hover:text-gold" data-umami-event="contact-link" data-umami-event-type={k === "Telephone" ? "phone" : k === "WhatsApp" ? "whatsapp" : "email"}>{v}</a>
                ) : (
                  <p className="mt-1 font-semibold text-primary">{v}</p>
                )}
              </div>
            ))}
          </div>
          <Button asChild variant="navy" size="lg" className="mt-10"><Link to="/contact">Contact Us</Link></Button>
        </div>
      </section>
    </>
  );
}
