import { useRef, useState } from "react";
import { Play } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SectionHeading } from "@/components/site/PageHero";
import { discoverKuganjaVideo, discoverPoster, kasheijaMartin, muwongeAshiraf, nakayembaMargaret, tuyizereCollin } from "@/lib/images";

const members = [
  { name: "Muwonge Ashiraf", role: "Administrator", image: muwongeAshiraf },
  { name: "Nakayemba Margaret", role: "Program Manager", image: nakayembaMargaret },
  { name: "Tuyizere Collin", role: "Finance Administrator", image: tuyizereCollin },
];

export function HomeTeam() {
  const player = useRef<HTMLVideoElement>(null);
  const [started, setStarted] = useState(false);
  const [playError, setPlayError] = useState(false);

  async function playVideo() {
    if (!player.current) return;
    try {
      await player.current.play();
      setStarted(true);
      setPlayError(false);
    } catch {
      setPlayError(true);
    }
  }

  return (
    <>
      <section className="section" aria-labelledby="team-heading">
        <div className="container-site">
          <div id="team-heading"><SectionHeading eyebrow="Our people" title="Meet Our Team" /></div>
          <article className="mt-10 grid items-center gap-7 md:grid-cols-[280px_1fr] md:gap-12">
            <img
              src={kasheijaMartin || "/kasheija-martin.jpg"}
              onError={(e) => {
                const target = e.currentTarget;
                if (!target.src.endsWith("/kasheija-martin.jpg") && !target.src.includes("lovable.app")) {
                  target.src = "/kasheija-martin.jpg";
                } else if (target.src.endsWith("/kasheija-martin.jpg")) {
                  target.src = "https://kuganjafoundation.lovable.app/__l5e/assets-v1/7c6535cb-4885-4f5a-8078-4b82dfaffc1a/kasheija-martin.jpg";
                }
              }}
              alt="Kasheija Martin, Founder and Director"
              width={594}
              height={594}
              loading="lazy"
              className="mx-auto aspect-square w-56 rounded-full object-cover object-top ring-2 ring-gold/40 md:w-full"
            />
            <div>
              <h3 className="text-2xl">Kasheija Martin</h3>
              <p className="mt-2 font-semibold text-muted-foreground">Founder / Director</p>
              <div className="mt-5 max-w-2xl space-y-4 text-muted-foreground">
                <p>A Ugandan fashion designer, community worker, and mental health advocate, Martin founded Kuganja Foundation in 2018 out of a deep love for his community and a desire to create lasting change.</p>
                <p>Growing up in Namuwongo, he witnessed the challenges of severe poverty, systemic neglect, and unaddressed mental health needs. Inspired by his lived experiences, he founded the foundation to help transform vulnerability into self-reliance and create opportunities for individuals and families to thrive.</p>
              </div>
            </div>
          </article>
          <div className="mt-10 grid gap-4 sm:grid-cols-3 md:gap-6">
            {members.map((member) => (
              <article key={member.name} className="flex items-center gap-5 rounded-lg border border-border bg-card p-5 sm:flex-col sm:gap-0 sm:text-center md:p-6">
                <img src={member.image} alt={member.name} width={394} height={394} loading="lazy" className="aspect-square w-24 shrink-0 rounded-full object-cover sm:w-36 lg:w-44" />
                <div className="min-w-0 sm:mt-5">
                  <h3 className="text-lg">{member.name}</h3>
                  <p className="mt-1 text-sm text-muted-foreground">{member.role}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
      <section className="section bg-muted" aria-labelledby="discover-heading">
        <div className="container-site">
          <div id="discover-heading"><SectionHeading eyebrow="Our foundation" title="Discover Kuganja Foundation">
            <p>A closer look at Kuganja Foundation and our commitment to the community.</p>
          </SectionHeading></div>
          <div className="relative mx-auto mt-9 aspect-video w-full max-w-4xl overflow-hidden rounded-lg bg-navy-deep shadow-card">
            <video ref={player} poster={discoverPoster} controls playsInline preload="metadata" width={640} height={360} onPlay={() => setStarted(true)} onError={() => setPlayError(true)} className="h-full w-full object-contain" aria-label="Discover Kuganja Foundation video">
              <source src={discoverKuganjaVideo} type="video/mp4" />
            </video>
            {!started && <Button onClick={playVideo} variant="gold" size="icon" className="absolute left-1/2 top-1/2 h-16 w-16 -translate-x-1/2 -translate-y-1/2 rounded-full shadow-card [&_svg]:size-7" aria-label="Play Discover Kuganja Foundation video"><Play fill="currentColor" /></Button>}
          </div>
            {playError && <p role="alert" className="mt-4 text-center text-muted-foreground">The video could not play. Please try the player controls or <a className="font-semibold underline" href={discoverKuganjaVideo}>open the video</a>.</p>}
        </div>
      </section>
    </>
  );
}
