import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";

const HeroSection = () => {
  const scrollToDestinations = () => {
    document.querySelector("#destinations")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="hero" className="relative h-screen w-full overflow-hidden">
      {/* Video Background */}
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 h-full w-full object-cover"
        poster="https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=1920&q=80"
      >
        <source
          src="https://cdn.coverr.co/videos/coverr-a-view-of-the-milky-way-from-a-mountain-7578/1080p.mp4"
          type="video/mp4"
        />
      </video>

      {/* Overlay */}
      <div className="hero-overlay absolute inset-0" />

      {/* Decorative Elements */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 top-1/2 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-primary/5" />
        <div className="absolute left-1/2 top-1/2 h-[400px] w-[400px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-primary/10" />
        <div className="absolute left-1/2 top-1/2 h-[200px] w-[200px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-primary/15" />
      </div>

      {/* Content */}
      <div className="relative z-10 flex h-full flex-col items-center justify-center px-6 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mb-6 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-4 py-1.5"
        >
          <div className="h-1.5 w-1.5 rounded-full bg-primary animate-pulse-gold" />
          <span className="text-xs font-medium uppercase tracking-[0.25em] text-primary">
            Voyages temporels disponibles
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.7 }}
          className="text-gold-gradient mb-6 text-5xl font-bold leading-[1.1] md:text-7xl lg:text-8xl xl:text-9xl"
        >
          ChronoVoyage
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.0 }}
          className="mb-10 max-w-lg text-base font-light leading-relaxed text-muted-foreground md:text-lg"
        >
          Explorez les époques les plus fascinantes de l'histoire humaine.
          Votre aventure temporelle commence ici.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.3 }}
          className="flex flex-col items-center gap-4 sm:flex-row"
        >
          <button
            onClick={scrollToDestinations}
            className="gold-glow rounded-full bg-primary px-8 py-3.5 text-sm font-semibold uppercase tracking-widest text-primary-foreground transition-all duration-300 hover:scale-105 hover:shadow-lg"
          >
            Explorer les destinations
          </button>
          <button
            onClick={scrollToDestinations}
            className="rounded-full border border-border px-8 py-3.5 text-sm font-medium uppercase tracking-widest text-foreground transition-all duration-300 hover:border-primary/40 hover:text-primary"
          >
            En savoir plus
          </button>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <button
          onClick={scrollToDestinations}
          className="animate-float flex flex-col items-center gap-2 text-muted-foreground transition-colors hover:text-primary"
        >
          <span className="text-[10px] uppercase tracking-[0.3em]">Défiler</span>
          <ChevronDown className="h-4 w-4" />
        </button>
      </motion.div>
    </section>
  );
};

export default HeroSection;
