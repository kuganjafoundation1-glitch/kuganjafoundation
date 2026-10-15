import type { ReactNode } from "react";

export function PageHero({ eyebrow, title, children, image }: { eyebrow: string; title: string; children?: ReactNode; image?: string }) {
  return (
    <section className="relative overflow-hidden bg-primary">
      {image && <img src={image} alt="" aria-hidden className="absolute inset-0 h-full w-full object-cover" />}
      <div className="absolute inset-0 hero-overlay" />
      <div className="container-site relative py-20 md:py-28">
        <p className="eyebrow">{eyebrow}</p>
        <h1 className="mt-3 max-w-3xl text-4xl text-primary-foreground md:text-5xl">{title}</h1>
        {children && <div className="mt-5 max-w-2xl text-lg text-primary-foreground/85">{children}</div>}
      </div>
    </section>
  );
}

export function SectionHeading({ eyebrow, title, children, center = false }: { eyebrow?: string; title: string; children?: ReactNode; center?: boolean }) {
  return (
    <div className={center ? "mx-auto max-w-2xl text-center" : "max-w-2xl"}>
      {eyebrow && <p className="eyebrow">{eyebrow}</p>}
      <h2 className="mt-3 text-3xl md:text-4xl">{title}</h2>
      <span className={`gold-rule mt-5 ${center ? "mx-auto" : ""}`} />
      {children && <div className="mt-5 text-muted-foreground">{children}</div>}
    </div>
  );
}

export function PlaceholderNote({ children }: { children: ReactNode }) {
  return (
    <div className="rounded-lg border-2 border-dashed border-border bg-muted p-8 text-center text-sm text-muted-foreground">
      {children}
    </div>
  );
}
