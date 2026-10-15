import { Link } from "@tanstack/react-router";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { NAV } from "@/lib/site";
import logo from "@/assets/kuganja-logo.png";

export function Brand({ className = "h-14 sm:h-16" }: { className?: string }) {
  return (
    <Link to="/" className="flex shrink-0 items-center" aria-label="Kuganja Foundation home">
      <img
        src={logo}
        alt="Kuganja Foundation"
        width={672}
        height={787}
        className={`${className} w-auto`}
      />
    </Link>
  );
}

export function Header() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/95 backdrop-blur">
      <div className="container-site flex h-20 items-center justify-between gap-6">
        <Brand />
        <nav aria-label="Main" className="hidden items-center gap-1 lg:flex">
          {NAV.map((n) => (
            <Link
              key={n.to}
              to={n.to}
              activeOptions={{ exact: n.to === "/" }}
              className="rounded-md px-3 py-2 text-[0.95rem] font-semibold text-foreground/80 transition-colors hover:text-primary data-[status=active]:text-primary data-[status=active]:underline data-[status=active]:decoration-gold data-[status=active]:decoration-2 data-[status=active]:underline-offset-8"
            >
              {n.label}
            </Link>
          ))}
        </nav>
        <div className="flex items-center gap-2">
          <Button asChild variant="gold" className="hidden sm:inline-flex">
            <Link to="/donate">Donate</Link>
          </Button>
          <button
            className="inline-flex h-10 w-10 items-center justify-center rounded-md text-primary lg:hidden"
            onClick={() => setOpen((o) => !o)}
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
          >
            {open ? <X /> : <Menu />}
          </button>
        </div>
      </div>
      {open && (
        <nav aria-label="Mobile" className="border-t border-border bg-background lg:hidden">
          <div className="container-site flex flex-col py-3">
            {NAV.map((n) => (
              <Link
                key={n.to}
                to={n.to}
                onClick={() => setOpen(false)}
                activeOptions={{ exact: n.to === "/" }}
                className="rounded-md px-2 py-3 font-semibold text-foreground/80 data-[status=active]:text-primary"
              >
                {n.label}
              </Link>
            ))}
            <Button asChild variant="gold" className="mt-2">
              <Link to="/donate" onClick={() => setOpen(false)}>Donate</Link>
            </Button>
          </div>
        </nav>
      )}
    </header>
  );
}
