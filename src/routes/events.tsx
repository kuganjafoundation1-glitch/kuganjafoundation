import { createFileRoute, Link } from "@tanstack/react-router";
import { CalendarDays } from "lucide-react";
import { Button } from "@/components/ui/button";
import { PageHero } from "@/components/site/PageHero";
import { SITE_URL } from "@/lib/site";

export const Route = createFileRoute("/events")({
  head: () => ({
    meta: [
      { title: "Upcoming Events — Kuganja Foundation" },
      { name: "description", content: "Upcoming Kuganja Foundation events: Year-End Community Outreach, the slum Christmas Party, the Moving Mobile Cinema launch, and the Mental Health and Emotional Wellbeing Initiative." },
      { property: "og:title", content: "Upcoming Events — Kuganja Foundation" },
      { property: "og:description", content: "Program details and schedules for Kuganja Foundation's upcoming community events and initiatives." },
      { property: "og:type", content: "website" },
      { property: "og:url", content: `${SITE_URL}/events` },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: `${SITE_URL}/events` }],
  }),
  component: EventsPage,
});

type Item = { t?: string; d: string };
const EVENTS: { date: string; title: string; tagline?: string; body: string[]; listTitle: string; items: Item[] }[] = [
  {
    date: "4th November 2026",
    title: "Year End Community Outreach",
    body: [
      "As the year comes to a close, we are stepping out to share warmth, relief, and joy with the families, children, and individuals who need it most in our community.",
      "No one should feel forgotten during the festive season. Through our Year-End Community Outreach, we are mobilizing resources, time, and compassion to deliver essential support to our most vulnerable neighbours.",
    ],
    listTitle: "What we are providing",
    items: [{ d: "Nutritious food" }, { d: "Clothing and footwear" }, { d: "Daily life necessities" }, { d: "Basic medical care" }, { d: "School items" }],
  },
  {
    date: "12th December 2026",
    title: "Christmas Party — Bringing Christmas Joy to Children in the Slums",
    tagline: "A day of love, laughter, and new beginnings.",
    body: [
      "While the holiday season is a time of abundance for many, children growing up in our local slums often experience the festive season feeling overlooked and forgotten. For a child living through daily poverty, a warm meal, a new outfit, or a simple toy can feel like a distant dream!",
      "Our annual slum Christmas party changes that. We believe every child deserves to feel seen, valued, and deeply loved — especially at Christmas.",
      "What the day looks like: When the child arrives, the heavy weight of everyday hardship is replaced with music, games, and laughter. Thanks to the generosity of our supporters, we provide fun and fellowship.",
    ],
    listTitle: "We provide",
    items: [{ d: "A festive meal" }, { d: "Gifts and new clothes" }, { d: "A Christmas inspired movie" }, { d: "Fun and fellowship" }, { d: "A message of hope" }],
  },
  {
    date: "9th January 2027",
    title: "The Moving Mobile Cinema Is Officially Rolling Out!",
    body: [
      "We are thrilled to announce the official launch of our inspirational moving mobile cinema — a theater-on-wheels dedicated to driving mindset change, mental health awareness, healing, hope and love, and deep community connection.",
    ],
    listTitle: "What to expect",
    items: [
      { t: "Inspiring Screenings", d: "Uplifting films, powerful documentaries, and real-life testimonies designed to spark deep reflection." },
      { t: "Community Dialogues", d: "Guided open conversations after a film to safely share stories, process feelings, and support one another." },
      { t: "Healing Resources", d: "Free mental health self-care tools, professional contact information, and local wellness resources for anyone seeking extra guidance." },
    ],
  },
  {
    date: "2nd May 2027",
    title: "Mental Health and Emotional Wellbeing Initiative",
    body: [
      "We will be launching a new initiative and expanding the mission to address mental health and emotional wellbeing. We have always committed ourselves to supporting our community's core needs.",
      "Our program aims to dismantle the stigma surrounding mental health illness, provide accessible community-based resources, and offer a safe, supportive environment for anyone navigating mental health challenges.",
    ],
    listTitle: "Key elements of the program",
    items: [
      { t: "Community education and workshops", d: "Interactive sessions to promote mental health literacy and coping strategies." },
      { t: "Support and resources", d: "Accessible tools and guidance tailored to individuals and families." },
      { t: "Stigma reduction campaign", d: "Community-wide outreach to break silences and normalize mental health discussions." },
      { t: "Strategic partnerships", d: "Collaborating with health professionals and local organizations for holistic care." },
    ],
  },
];

function EventsPage() {
  return (
    <>
      <PageHero eyebrow="Upcoming events and community initiatives" title="Upcoming Events">
        <p>Program details, schedules, and key pillars of what's coming next at Kuganja Foundation.</p>
      </PageHero>

      <section className="section">
        <div className="container-site space-y-8 md:space-y-10">
          {EVENTS.map((e) => (
            <article key={e.title} className="card-elevated overflow-hidden">
              <div className="p-6 md:p-9">
                <p className="flex items-center gap-2 text-sm font-bold uppercase tracking-widest text-gold">
                  <CalendarDays className="h-4 w-4" /> {e.date}
                </p>
                <h2 className="mt-3 text-2xl md:text-3xl">{e.title}</h2>
                {e.tagline && <p className="mt-2 font-semibold text-primary">{e.tagline}</p>}
                <span className="gold-rule mt-4" />
                <div className="mt-4 space-y-3 text-foreground/85">
                  {e.body.map((p) => <p key={p}>{p}</p>)}
                </div>
                <h3 className="mt-6 text-sm font-bold uppercase tracking-widest text-primary">{e.listTitle}</h3>
                <ol className="mt-3 grid gap-2 sm:grid-cols-2">
                  {e.items.map((it, i) => (
                    <li key={it.d} className={`flex gap-3 rounded-md bg-muted p-3 text-[0.95rem] ${it.t ? "sm:col-span-2" : ""}`}>
                      <span className="font-display font-bold text-gold">{i + 1}.</span>
                      <span>{it.t && <strong className="text-primary">{it.t}: </strong>}{it.d}</span>
                    </li>
                  ))}
                </ol>
              </div>
            </article>
          ))}
          <div className="text-center">
            <Button asChild variant="gold" size="lg"><Link to="/donate" data-umami-event="donate-click" data-umami-event-location="events-cta">Support Our Events</Link></Button>
          </div>
        </div>
      </section>
    </>
  );
}
