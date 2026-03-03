import { motion } from "framer-motion";
import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Marie Lefèvre",
    role: "Historienne",
    text: "Observer la construction de la Tour Eiffel en personne a changé ma perception de l'histoire. Une expérience absolument transcendante.",
    rating: 5,
    destination: "Paris, 1889",
  },
  {
    name: "Dr. Thomas Berger",
    role: "Paléontologue",
    text: "Voir un T-Rex en vrai... Aucune reconstitution ne peut rivaliser avec ça. J'en ai encore des frissons. ChronoVoyage a dépassé tous mes rêves.",
    rating: 5,
    destination: "Crétacé",
  },
  {
    name: "Sofia Marchetti",
    role: "Artiste",
    text: "L'atelier de Léonard de Vinci était exactement comme je l'imaginais, en mille fois mieux. Les couleurs de Florence, l'odeur de la peinture...",
    rating: 5,
    destination: "Florence, 1504",
  },
];

const Testimonials = () => {
  return (
    <section className="relative px-6 py-32">
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute left-1/2 top-0 h-px w-3/4 -translate-x-1/2 gold-line" />
      </div>

      <div className="mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
          className="mb-20 text-center"
        >
          <span className="mb-4 inline-block text-xs font-medium uppercase tracking-[0.3em] text-primary">
            Témoignages
          </span>
          <h2 className="text-gold-gradient mb-4 text-4xl font-bold md:text-5xl">
            Ils ont voyagé
          </h2>
          <p className="mx-auto max-w-md text-muted-foreground">
            Découvrez les récits de nos voyageurs temporels
          </p>
        </motion.div>

        <div className="grid gap-8 md:grid-cols-3">
          {testimonials.map((t, index) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="glass-card rounded-xl p-6"
            >
              {/* Stars */}
              <div className="mb-4 flex gap-1">
                {Array.from({ length: t.rating }).map((_, i) => (
                  <Star key={i} className="h-3.5 w-3.5 fill-primary text-primary" />
                ))}
              </div>

              <p className="mb-6 text-sm italic leading-relaxed text-foreground/80">
                "{t.text}"
              </p>

              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-semibold text-foreground">{t.name}</p>
                  <p className="text-xs text-muted-foreground">{t.role}</p>
                </div>
                <span className="rounded-full border border-border bg-secondary/50 px-2.5 py-0.5 text-[10px] font-medium text-primary">
                  {t.destination}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
