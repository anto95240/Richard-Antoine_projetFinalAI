import { Clock, Mail, MapPin } from "lucide-react";

const Footer = () => {
  const scrollTo = (href: string) => {
    const el = document.querySelector(href);
    el?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer id="contact" className="relative border-t border-border px-6 py-16">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-12 md:grid-cols-4">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="mb-4 flex items-center gap-2">
              <Clock className="h-5 w-5 text-primary" />
              <span className="font-display text-lg font-semibold text-foreground">
                Chrono<span className="text-primary">Voyage</span>
              </span>
            </div>
            <p className="mb-6 max-w-sm text-sm leading-relaxed text-muted-foreground">
              Pionniers du voyage temporel depuis 2145. Nous rendons l'histoire
              accessible, vivante et inoubliable.
            </p>
            <div className="flex flex-col gap-2 text-xs text-muted-foreground">
              <span className="flex items-center gap-2">
                <Mail className="h-3.5 w-3.5 text-primary" />
                contact@chronovoyage.temp
              </span>
              <span className="flex items-center gap-2">
                <MapPin className="h-3.5 w-3.5 text-primary" />
                Station Temporelle Alpha, Secteur 7
              </span>
            </div>
          </div>

          {/* Links */}
          <div>
            <h4 className="mb-4 text-xs font-semibold uppercase tracking-wider text-foreground">
              Navigation
            </h4>
            <div className="flex flex-col gap-2">
              {[
                { label: "Accueil", href: "#hero" },
                { label: "Destinations", href: "#destinations" },
                { label: "Comment ça marche", href: "#how-it-works" },
              ].map((link) => (
                <button
                  key={link.label}
                  onClick={() => scrollTo(link.href)}
                  className="text-left text-sm text-muted-foreground transition-colors hover:text-primary"
                >
                  {link.label}
                </button>
              ))}
            </div>
          </div>

          {/* Legal */}
          <div>
            <h4 className="mb-4 text-xs font-semibold uppercase tracking-wider text-foreground">
              Légal
            </h4>
            <div className="flex flex-col gap-2 text-sm text-muted-foreground">
              <span className="cursor-pointer transition-colors hover:text-primary">Mentions légales</span>
              <span className="cursor-pointer transition-colors hover:text-primary">Politique temporelle</span>
              <span className="cursor-pointer transition-colors hover:text-primary">Paradoxes & CGU</span>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-border pt-8 md:flex-row">
          <p className="text-xs text-muted-foreground">
            © 2145 ChronoVoyage. Tous droits réservés à travers le continuum espace-temps.
          </p>
          <p className="text-[10px] text-muted-foreground/50">
            Licence temporelle n°CVT-2145-ALPHA
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
