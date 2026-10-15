import { createFileRoute } from "@tanstack/react-router";
import { Phone, MessageCircle, Mail, MapPin, Users } from "lucide-react";
import { PageHero } from "@/components/site/PageHero";
import { CONTACT } from "@/lib/site";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Kuganja Foundation" },
      { name: "description", content: "Contact Kuganja Foundation in Namuwongo, Kampala: +256 781 500 800, WhatsApp +256 703 264 035, Kuganjafoundation1@gmail.com." },
      { property: "og:title", content: "Contact Kuganja Foundation" },
      { property: "og:description", content: "Reach us by phone, WhatsApp, or email in Namuwongo, Kampala, Uganda." },
    ],
  }),
  component: Contact,
});

function Contact() {
  const rows = [
    { icon: Phone, k: "Telephone", v: CONTACT.phone, href: CONTACT.phoneHref },
    { icon: MessageCircle, k: "WhatsApp", v: CONTACT.whatsapp, href: CONTACT.whatsappHref },
    { icon: Mail, k: "Email", v: CONTACT.email, href: CONTACT.emailHref },
    { icon: MapPin, k: "Physical Location", v: CONTACT.location },
    { icon: Users, k: "Social Media", v: CONTACT.social },
  ];
  return (
    <>
      <PageHero eyebrow="Contact" title="We'd love to hear from you">
        <p>Reach Kuganja Foundation through any of our official channels.</p>
      </PageHero>
      <section className="section">
        <div className="container-site grid gap-10 md:grid-cols-[1fr_1.3fr]">
          <div>
            <h2 className="text-2xl">Kuganja Foundation</h2>
            <span className="gold-rule mt-4" />
            <ul className="mt-8 space-y-6">
              {rows.map(({ icon: Icon, k, v, href }) => (
                <li key={k} className="flex gap-4">
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-gold-soft text-primary"><Icon className="h-5 w-5" /></span>
                  <div className="min-w-0">
                    <p className="text-xs font-bold uppercase tracking-widest text-muted-foreground">{k}</p>
                    {href ? (
                      <a href={href} target={href.startsWith("http") ? "_blank" : undefined} rel="noopener noreferrer" className="break-all font-semibold text-primary hover:text-gold">{v}</a>
                    ) : (
                      <p className="font-semibold text-primary">{v}</p>
                    )}
                  </div>
                </li>
              ))}
            </ul>
          </div>
          <div className="overflow-hidden rounded-lg border border-border shadow-card">
            <iframe
              title="Map of Namuwongo, Kampala, Uganda"
              src="https://www.google.com/maps?q=Namuwongo,+Kampala,+Uganda&output=embed"
              className="h-[420px] w-full"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </section>
    </>
  );
}
