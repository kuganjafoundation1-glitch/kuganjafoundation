import { useEffect, useState } from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import { X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { PageHero, SectionHeading } from "@/components/site/PageHero";
import { CHRISTMAS_OUTREACH_YEARS, SITE_URL } from "@/lib/site";
import {
  christmas1,
  christmas2,
  christmas3,
  christmas4,
  christmas2024Meal1,
  christmas2024Meal2,
  christmas2024_1,
  christmas2024_2,
  christmas2024_3,
  christmas2024_4,
  cleaning1,
  cleaning2,
  covid1,
  covid2,
  covid3,
  covid4,
  impactHero,
  literacy1,
  literacy2,
  literacy3,
  literacy4,
  mothers1,
  mothers2,
  mothers3,
  mothers4,
  outreachBooks1,
  outreachBooks2,
  outreachBooks3,
  outreachBooks4,
  outreachFood1,
  outreachFood2,
  outreachFood3,
  outreachFood4,
} from "@/lib/images";

export const Route = createFileRoute("/impact")({
  head: () => ({
    meta: [
      { title: "Our Impact — Kuganja Foundation" },
      { name: "description", content: "How Kuganja Foundation's community-centered approach supports vulnerable families in Namuwongo, Kampala." },
      { property: "og:title", content: "Our Impact — Kuganja Foundation" },
      { property: "og:description", content: "Our community-centered approach, objectives, and documented achievements." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: `${SITE_URL}/impact` }],
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
  { src: outreachBooks1, w: 1070, h: 713, alt: "Women gathered for a skills development session with learning charts on the wall" },
  { src: outreachBooks2, w: 1070, h: 713, alt: "Participants sorting stacks of printed schoolbook pages" },
  { src: outreachBooks3, w: 1070, h: 713, alt: "A woman reviewing schoolbook pages during a skills training session" },
  { src: outreachBooks4, w: 720, h: 960, alt: "A stack of completed schoolbooks produced by the group" },
];

const LITERACY_PHOTOS = [
  { src: literacy1, w: 1070, h: 713, alt: "Women practising reading and writing during an adult literacy class" },
  { src: literacy2, w: 1070, h: 713, alt: "Adult literacy class participants learning together" },
  { src: literacy3, w: 1070, h: 713, alt: "Women taking part in an adult literacy session" },
  { src: literacy4, w: 1070, h: 713, alt: "Participants of the adult literacy program for women" },
];

const MOTHERS_PHOTOS = [
  { src: mothers1, w: 600, h: 900, alt: "A single mother cooking food at her small food-vending business" },
  { src: mothers2, w: 600, h: 900, alt: "A mother preparing food at her roadside stall to earn an income" },
  { src: mothers3, w: 600, h: 900, alt: "A mother sorting charcoal to sell at her small business" },
  { src: mothers4, w: 1070, h: 713, alt: "A mother selling charcoal and green bananas at her market stall" },
];

const COVID_PHOTOS = [
  { src: covid1, w: 1070, h: 803, alt: "A volunteer handing a bag of relief supplies to a young man outside a home" },
  { src: covid2, w: 612, h: 816, alt: "A woman carrying bags of relief food supplies to distribute" },
  { src: covid3, w: 1032, h: 774, alt: "Foundation volunteers handing a food package to a woman in her home" },
  { src: covid4, w: 1032, h: 774, alt: "Packed relief food parcels and supplies prepared for distribution" },
];

const CHRISTMAS_PHOTOS = [
  { src: christmas1, w: 1070, h: 713, alt: "Volunteers in Santa hats handing Christmas hampers to families in a slum alley" },
  { src: christmas2, w: 1024, h: 768, alt: "Children gathered under decorated tarpaulin watching a movie screening at the Christmas celebration" },
  { src: christmas3, w: 1070, h: 713, alt: "A volunteer handing a green Christmas hamper to a family outside their home" },
  { src: christmas4, w: 1070, h: 713, alt: "A woman joyfully carrying a Christmas hamper after receiving it" },
];

const CHRISTMAS2024_PHOTOS = [
  { src: christmas2024Meal1, w: 561, h: 1280, alt: "A volunteer in a Santa hat sharing a meal with children at the 2024 Christmas outreach" },
  { src: christmas2024Meal2, w: 561, h: 1280, alt: "A volunteer and children sharing food during the 2024 Christmas celebration" },
];

const CHRISTMAS2025_PHOTOS = [
  { src: christmas2024_1, w: 1070, h: 803, alt: "A volunteer in a Santa hat standing with a large crowd of children at the Christmas celebration" },
  { src: christmas2024_2, w: 810, h: 1080, alt: "A volunteer in a Santa hat handing a gift bag to a woman in a red dress" },
  { src: christmas2024_3, w: 1070, h: 803, alt: "Children cheering with their hands raised during the Christmas celebration" },
  { src: christmas2024_4, w: 1070, h: 803, alt: "Volunteers in Santa hats posing with families after distributing Christmas gifts" },
];

const CLEANING_PHOTOS = [
  { src: cleaning1, w: 1024, h: 768, alt: "A volunteer standing in front of a sanitation truck during the emptying of a community latrine" },
  { src: cleaning2, w: 1024, h: 768, alt: "Workers emptying a shared community latrine with a hose and sanitation truck as residents watch" },
];

const FOOD_PHOTOS = [
  { src: outreachFood1, w: 1280, h: 853, alt: "Kuganja Foundation volunteers distributing food supplies and clothing to community members" },
  { src: outreachFood2, w: 1280, h: 853, alt: "Volunteers handing out food supplies and clothing during the community outreach" },
  { src: outreachFood3, w: 1280, h: 853, alt: "Volunteers sharing food supplies and clothing with vulnerable community members" },
  { src: outreachFood4, w: 853, h: 1280, alt: "Volunteers distributing food supplies and clothing during the community outreach" },
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
      <PageHero eyebrow="Our impact" title="Change that starts in the community" image={impactHero}>
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

          <article className="mt-12 grid gap-8 lg:grid-cols-2 lg:items-start">
            <div>
              <h3 className="text-2xl text-primary md:text-3xl">Christmas Outreach for Children and Families</h3>
              <p className="mt-3 text-sm font-semibold uppercase tracking-wide text-gold">December {CHRISTMAS_OUTREACH_YEARS.original}</p>
              <span className="gold-rule mt-4 block" />
              <p className="mt-5 text-lg text-foreground/85">
                In December 2023, Kuganja Foundation organised a Christmas celebration for children living in slum communities,
                reaching over 700 children and 50 families. The initiative provided clothes, food, Christmas hampers, gifts, and
                other essential items to bring joy and practical support to vulnerable families during the festive season.
              </p>
              <p className="mt-4 text-lg text-foreground/85">
                The celebration also featured a movie screening for the children, creating an opportunity for them to enjoy a
                memorable Christmas experience filled with fun, care, and togetherness.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-3">
              {CHRISTMAS_PHOTOS.map((p) => (
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
              <h3 className="text-2xl text-primary md:text-3xl">Christmas Outreach for Children and Families</h3>
              <p className="mt-3 text-sm font-semibold uppercase tracking-wide text-gold">{CHRISTMAS_OUTREACH_YEARS.meal}</p>
              <span className="gold-rule mt-4 block" />
              <p className="mt-5 text-lg text-foreground/85">
                In 2024, Kuganja Foundation shared a Christmas meal with children and families, bringing care, joy, and
                togetherness during the festive season.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-3">
              {CHRISTMAS2024_PHOTOS.map((p) => (
                <Button
                  key={p.src}
                  type="button"
                  variant="ghost"
                  onClick={() => setSelected(p)}
                  aria-label={`View photo full size: ${p.alt}`}
                  className="group h-auto cursor-zoom-in overflow-hidden rounded-lg p-0 shadow-card focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold"
                >
                  <img src={p.src} alt={p.alt} loading="lazy" width={p.w} height={p.h} className="h-auto w-full object-contain transition-transform duration-300 group-hover:scale-[1.03]" />
                </Button>
              ))}
            </div>
          </article>

          <article className="mt-12 grid gap-8 lg:grid-cols-2 lg:items-start">
            <div>
              <h3 className="text-2xl text-primary md:text-3xl">Christmas Outreach for Children and Families</h3>
              <p className="mt-3 text-sm font-semibold uppercase tracking-wide text-gold">{CHRISTMAS_OUTREACH_YEARS.celebration}</p>
              <span className="gold-rule mt-4 block" />
              <p className="mt-5 text-lg text-foreground/85">
                Kuganja Foundation organised a Christmas celebration in {CHRISTMAS_OUTREACH_YEARS.celebration} to reach out to children and families living in slum
                communities. The initiative brought festive cheer, care, and encouragement to vulnerable community members,
                creating an opportunity to share the joy of Christmas and strengthen the spirit of community.
              </p>
              <p className="mt-4 text-lg text-foreground/85">
                Through this outreach, the foundation continued its commitment to supporting vulnerable children and families and
                making a positive difference in their lives.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-3">
              {CHRISTMAS2025_PHOTOS.map((p) => (
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

          <article className="mt-12">
            <h3 className="text-2xl text-primary md:text-3xl">Community Cleaning and Sanitation Initiative</h3>
            <span className="gold-rule mt-4 block" />
            <p className="mt-5 max-w-3xl text-lg text-foreground/85">
              Kuganja Foundation, in partnership with another community-focused organisation, participated in community cleaning
              activities and the emptying of shared community latrines in slum communities. This collaborative initiative aimed to
              promote better sanitation, improve hygiene, and create cleaner, healthier living environments for residents.
            </p>
            <p className="mt-4 max-w-3xl text-lg text-foreground/85">
              Through partnerships and community engagement, Kuganja Foundation continues to support efforts that address local
              sanitation challenges and improve community well-being.
            </p>
            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              {CLEANING_PHOTOS.map((p) => (
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

          <article className="mt-12">
            <h3 className="text-2xl text-primary md:text-3xl">Community Outreach: Sharing Food and Clothing</h3>
            <span className="gold-rule mt-4 block" />
            <p className="mt-5 max-w-3xl text-lg text-foreground/85">
              Kuganja Foundation carried out a community outreach initiative to support vulnerable individuals and families by
              distributing food supplies and clothing. This initiative reflects the foundation's commitment to meeting basic needs,
              showing compassion, and extending practical support to community members facing hardship.
            </p>
            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              {FOOD_PHOTOS.map((p) => (
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
