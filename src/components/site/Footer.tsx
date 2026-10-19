import { Link } from "@tanstack/react-router";
import { Brand } from "./Header";
import { CONTACT, NAV } from "@/lib/site";
import { SocialLinks } from "./SocialLinks";

export function Footer() {
  return (
    <footer className="bg-navy-deep text-primary-foreground/80">
      <div className="container-site grid gap-10 py-16 md:grid-cols-[1.4fr_1fr_1.2fr]">
        <div>
          <Brand className="h-20 sm:h-24" />
          <p className="mt-5 max-w-sm text-sm">
            A charity organization in Namuwongo, Kampala, uplifting vulnerable families and individuals through holistic care,
            spiritual nourishment, mental health advocacy, creative expression, and practical skills.
          </p>
          <Link to="/donate" className="mt-5 inline-block text-sm font-semibold text-gold hover:underline">
            How to donate →
          </Link>
        </div>
        <div>
          <h2 className="text-sm font-bold uppercase tracking-widest text-primary-foreground">Explore</h2>
          <ul className="mt-4 space-y-2 text-sm">
            {NAV.map((n) => (
              <li key={n.to}><Link to={n.to} className="hover:text-gold">{n.label}</Link></li>
            ))}
            <li><Link to="/donate" className="hover:text-gold">Donate</Link></li>
          </ul>
        </div>
        <div>
          <h2 className="text-sm font-bold uppercase tracking-widest text-primary-foreground">Contact</h2>
          <ul className="mt-4 space-y-2 text-sm">
            <li>Tel: <a href={CONTACT.phoneHref} className="hover:text-gold">{CONTACT.phone}</a></li>
            <li>WhatsApp: <a href={CONTACT.whatsappHref} target="_blank" rel="noopener noreferrer" className="hover:text-gold">{CONTACT.whatsapp}</a></li>
            <li><a href={CONTACT.emailHref} className="break-all hover:text-gold">{CONTACT.email}</a></li>
            <li>{CONTACT.location}</li>
            <li className="pt-1"><SocialLinks className="-ml-1.5" /></li>
          </ul>
        </div>
      </div>
      <div className="border-t border-primary-foreground/10">
        <div className="container-site py-6 text-xs text-primary-foreground/60">
          © {new Date().getFullYear()} Kuganja Foundation. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
