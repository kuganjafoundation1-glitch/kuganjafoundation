import { useEffect, useState } from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import { X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { PageHero, PlaceholderNote, SectionHeading } from "@/components/site/PageHero";
import hero from "@/assets/hero.jpg";
import outreach1 from "@/assets/outreach-books-1.jpg.asset.json";
import outreach2 from "@/assets/outreach-books-2.jpg.asset.json";
import outreach3 from "@/assets/outreach-books-3.jpg.asset.json";
import outreach4 from "@/assets/outreach-books-4.jpg.asset.json";
import literacy1 from "@/assets/literacy-1.jpg.asset.json";
import literacy2 from "@/assets/literacy-2.jpg.asset.json";
import literacy3 from "@/assets/literacy-3.jpg.asset.json";
import literacy4 from "@/assets/literacy-4.jpg.asset.json";
import mothers1 from "@/assets/mothers-1.jpg.asset.json";
import mothers2 from "@/assets/mothers-2.jpg.asset.json";
import mothers3 from "@/assets/mothers-3.jpg.asset.json";
import mothers4 from "@/assets/mothers-4.jpg.asset.json";
import covid1 from "@/assets/covid-1.jpg.asset.json";
import covid2 from "@/assets/covid-2.jpg.asset.json";
import covid3 from "@/assets/covid-3.jpg.asset.json";
import covid4 from "@/assets/covid-4.jpg.asset.json";
import christmas1 from "@/assets/christmas-1.jpg.asset.json";
import christmas2 from "@/assets/christmas-2.jpg.asset.json";
import christmas3 from "@/assets/christmas-3.jpg.asset.json";
import christmas4 from "@/assets/christmas-4.jpg.asset.json";

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

const OUTREACH_PHOTOS = [
  { src: outreach1.url, w: 1070, h: 713, alt: "Women gathered for a skills development session with learning charts on the wall" },
  { src: outreach2.url, w: 1070, h: 713, alt: "Participants sorting stacks of printed schoolbook pages" },
  { src: outreach3.url, w: 1070, h: 713, alt: "A woman reviewing schoolbook pages during a skills training session" },
  { src: outreach4.url, w: 720, h: 960, alt: "A stack of completed schoolbooks produced by the group" },
];

const LITERACY_PHOTOS = [
  { src: literacy1.url, w: 1070, h: 713, alt: "Women practising reading and writing during an adult literacy class" },
  { src: literacy2.url, w: 1070, h: 713, alt: "Adult literacy class participants learning together" },
  { src: literacy3.url, w: 1070, h: 713, alt: "Women taking part in an adult literacy session" },
  { src: literacy4.url, w: 1070, h: 713, alt: "Participants of the adult literacy program for women" },
];

const MOTHERS_PHOTOS = [
  { src: mothers1.url, w: 600, h: 900, alt: "A single mother cooking food at her small food-vending business" },
  { src: mothers2.url, w: 600, h: 900, alt: "A mother preparing food at her roadside stall to earn an income" },
  { src: mothers3.url, w: 600, h: 900, alt: "A mother sorting charcoal to sell at her small business" },
  { src: mothers4.url, w: 1070, h: 713, alt: "A mother selling charcoal and green bananas at her market stall" },
];

const COVID_PHOTOS = [
  { src: covid1.url, w: 1070, h: 803, alt: "A volunteer handing a bag of relief supplies to a young man outside a home" },
  { src: covid2.url, w: 612, h: 816, alt: "A woman carrying bags of relief food supplies to distribute" },
  { src: covid3.url, w: 1032, h: 774, alt: "Foundation volunteers handing a food package to a woman in her home" },
  { src: covid4.url, w: 1032, h: 774, alt: "Packed relief food parcels and supplies prepared for distribution" },
];

const CHRISTMAS_PHOTOS = [
  { src: christmas1.url, w: 1070, h: 713, alt: "Volunteers in Santa hats handing Christmas hampers to families in a slum alley" },
  { src: christmas2.url, w: 1024, h: 768, alt: "Children gathered under decorated tarpaulin watching a movie screening at the Christmas celebration" },
  { src: christmas3.url, w: 1070, h: 713, alt: "A volunteer handing a green Christmas hamper to a family outside their home" },
  { src: christmas4.url, w: 1070, h: 713, alt: "A woman joyfully carrying a Christmas hamper after receiving it" },
];

type Photo = (typeof OUTREACH_PHOTOS)[number];

function Impact() {
  const [selected, setSelected] = useState<Photo | null>(null);

  useEffect(() => {
    if (selected === null) return;
    const onKey = (e: KeyboardEvent) => { if (e.key === "Escape") setSelected(null); };
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    return () => { document.body.style.overflow = ""; window.removeEventListener("keydown", onKey); };
  }, [selected]);

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
          <article className="mt-10 grid gap-8 lg:grid-cols-2 lg:items-start">
            <div>
              <h3 className="text-2xl text-primary md:text-3xl">Adult Literacy Education for Women</h3>
              <span className="gold-rule mt-4 block" />
              <p className="mt-5 text-lg text-foreground/85">
                Kuganja Foundation provided free adult literacy education to over 300 women who had never had the opportunity to
                attend school. The program helped participants develop literacy and communication skills, improving their ability
                to seek employment and earn an income to support their families.
              </p>
              <p className="mt-4 text-lg text-foreground/85">
                Building on this impact, the foundation seeks support to revive the program and extend these opportunities to more
                women in need.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-3">
              {LITERACY_PHOTOS.map((p) => (
                <button
                  key={p.src}
                  type="button"
                  onClick={() => setSelected(p)}
                  aria-label={`View photo full size: ${p.alt}`}
                  className="group aspect-[3/2] cursor-zoom-in overflow-hidden rounded-lg shadow-card focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold"
                >
                  <img src={p.src} alt={p.alt} loading="lazy" width={p.w} height={p.h} className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-[1.03]" />
                </button>
              ))}
            </div>
          </article>

          <article className="mt-12 grid gap-8 lg:grid-cols-2 lg:items-start">
            <div>
              <h3 className="text-2xl text-primary md:text-3xl">Empowering Single Mothers Through Business Support</h3>
              <span className="gold-rule mt-4 block" />
              <p className="mt-5 text-lg text-foreground/85">
                Kuganja Foundation has empowered 20 single mothers living in slum communities by providing them with capital to
                start or run small-scale businesses. This initiative helps mothers create income-generating opportunities and
                provide for their families.
              </p>
              <p className="mt-4 text-lg text-foreground/85">
                However, many more mothers still need support to build sustainable livelihoods and improve their families'
                well-being. Kuganja Foundation seeks partners and well-wishers to help extend this initiative to more vulnerable
                mothers.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-3">
              {MOTHERS_PHOTOS.map((p) => (
                <button
                  key={p.src}
                  type="button"
                  onClick={() => setSelected(p)}
                  aria-label={`View photo full size: ${p.alt}`}
                  className="group aspect-square cursor-zoom-in overflow-hidden rounded-lg shadow-card focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold"
                >
                  <img src={p.src} alt={p.alt} loading="lazy" width={p.w} height={p.h} className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-[1.03]" />
                </button>
              ))}
            </div>
          </article>

          <article className="mt-12 grid gap-8 lg:grid-cols-2 lg:items-start">
            <div>
              <h3 className="text-2xl text-primary md:text-3xl">COVID-19 Relief Support for Vulnerable Families</h3>
              <span className="gold-rule mt-4 block" />
              <p className="mt-5 text-lg text-foreground/85">
                During the COVID-19 pandemic, Kuganja Foundation reached out to over 500 families and individuals, providing food
                and essential daily necessities to help them navigate a challenging period. This initiative offered practical
                support to vulnerable community members and helped address some of their basic needs during the crisis.
              </p>
              <p className="mt-4 text-lg text-foreground/85">
                The foundation remains committed to supporting vulnerable communities and seeks continued partnerships and
                resources to expand its community outreach efforts.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-3">
              {COVID_PHOTOS.map((p) => (
                <button
                  key={p.src}
                  type="button"
                  onClick={() => setSelected(p)}
                  aria-label={`View photo full size: ${p.alt}`}
                  className="group aspect-square cursor-zoom-in overflow-hidden rounded-lg shadow-card focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold"
                >
                  <img src={p.src} alt={p.alt} loading="lazy" width={p.w} height={p.h} className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-[1.03]" />
                </button>
              ))}
            </div>
          </article>
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
              {OUTREACH_PHOTOS.map((p) => (
                <button
                  key={p.src}
                  type="button"
                  onClick={() => setSelected(p)}
                  aria-label={`View photo full size: ${p.alt}`}
                  className="group cursor-zoom-in overflow-hidden rounded-lg focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold"
                >
                  <img
                    src={p.src}
                    alt={p.alt}
                    loading="lazy"
                    width={p.w}
                    height={p.h}
                    className="h-auto w-full object-contain shadow-card transition-transform duration-300 group-hover:scale-[1.02]"
                  />
                </button>
              ))}
            </div>
          </article>
          <Button asChild variant="navy" size="lg" className="mt-10"><Link to="/donate">Support Our Work</Link></Button>
        </div>
      </section>

      {(() => {
        const selectedPhoto = selected;
        return selectedPhoto && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={selectedPhoto.alt}
          onClick={() => setSelected(null)}
          className="fixed inset-0 z-50 flex items-center justify-center bg-foreground/90 p-4 md:p-12"
        >
          <button
            type="button"
            onClick={() => setSelected(null)}
            aria-label="Close photo"
            className="absolute right-4 top-4 flex h-11 w-11 items-center justify-center rounded-full bg-card text-foreground shadow-card transition-colors hover:bg-gold-soft hover:text-primary md:right-8 md:top-8"
          >
            <X className="h-5 w-5" />
          </button>
          <img
            src={selectedPhoto.src}
            alt={selectedPhoto.alt}
            onClick={(e) => e.stopPropagation()}
            className="max-h-[88vh] max-w-full rounded-lg object-contain shadow-card"
          />
        </div>
        );
      })()}
    </>
  );
}
