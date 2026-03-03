import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Clock, Menu, X } from "lucide-react";

const navItems = [
  { label: "Accueil", href: "#hero" },
  { label: "Destinations", href: "#destinations" },
  { label: "Comment ça marche", href: "#how-it-works" },
  { label: "Contact", href: "#contact" },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollTo = (href: string) => {
    setMobileOpen(false);
    const el = document.querySelector(href);
    el?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, delay: 0.2 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? "nav-blur border-b border-border" : ""
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        {/* Logo */}
        <button onClick={() => scrollTo("#hero")} className="flex items-center gap-2">
          <Clock className="h-5 w-5 text-primary" />
          <span className="font-display text-lg font-semibold text-foreground">
            Chrono<span className="text-primary">Voyage</span>
          </span>
        </button>

        {/* Desktop Nav */}
        <div className="hidden items-center gap-8 md:flex">
          {navItems.map((item) => (
            <button
              key={item.label}
              onClick={() => scrollTo(item.href)}
              className="text-sm text-muted-foreground transition-colors hover:text-primary"
            >
              {item.label}
            </button>
          ))}
          <button
            onClick={() => scrollTo("#destinations")}
            className="rounded-full border border-primary/30 bg-primary/10 px-5 py-2 text-xs font-medium uppercase tracking-wider text-primary transition-all hover:bg-primary hover:text-primary-foreground"
          >
            Réserver
          </button>
        </div>

        {/* Mobile toggle */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="text-foreground md:hidden"
        >
          {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="nav-blur border-b border-border md:hidden"
          >
            <div className="flex flex-col gap-4 px-6 py-6">
              {navItems.map((item) => (
                <button
                  key={item.label}
                  onClick={() => scrollTo(item.href)}
                  className="text-left text-sm text-muted-foreground transition-colors hover:text-primary"
                >
                  {item.label}
                </button>
              ))}
              <button
                onClick={() => scrollTo("#destinations")}
                className="mt-2 rounded-full border border-primary/30 bg-primary/10 px-5 py-2 text-xs font-medium uppercase tracking-wider text-primary"
              >
                Réserver
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;
