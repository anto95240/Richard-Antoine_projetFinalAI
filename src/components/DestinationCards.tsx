import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, MapPin, Calendar } from "lucide-react";
import parisImg from "@/assets/paris_1889.png";
import cretaceImg from "@/assets/cretace.png";
import florenceImg from "@/assets/florence_1504.png";

interface Destination {
  title: string;
  year: string;
  location: string;
  description: string;
  image: string;
  era: string;
  highlights: string[];
}

const destinations: Destination[] = [
  {
    title: "La Tour Eiffel",
    year: "1889",
    location: "Paris, France",
    description:
      "Assistez à l'inauguration de la Tour Eiffel lors de l'Exposition Universelle. Plongez dans le Paris de la Belle Époque, entre calèches et grands boulevards.",
    image: parisImg,
    era: "Belle Époque",
    highlights: ["Exposition Universelle", "Gustave Eiffel", "Grands Boulevards"],
  },
  {
    title: "Terre Préhistorique",
    year: "−66M",
    location: "Crétacé Supérieur",
    description:
      "Explorez un monde dominé par les dinosaures. Observez des créatures titanesques dans leur habitat naturel avant la grande extinction.",
    image: cretaceImg,
    era: "Mésozoïque",
    highlights: ["T-Rex", "Triceratops", "Forêts primitives"],
  },
  {
    title: "L'Atelier de Vinci",
    year: "1504",
    location: "Florence, Italie",
    description:
      "Entrez dans l'atelier de Léonard de Vinci et découvrez les secrets de la Renaissance italienne. Admirez le Duomo sous un nouveau jour.",
    image: florenceImg,
    era: "Renaissance",
    highlights: ["Léonard de Vinci", "Michel-Ange", "Les Médicis"],
  },
];

const DestinationCards = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section id="destinations" className="relative z-10 px-6 py-32">
      <div className="mx-auto max-w-7xl">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
          className="mb-20 text-center"
        >
          <span className="mb-4 inline-block text-xs font-medium uppercase tracking-[0.3em] text-primary">
            Nos destinations
          </span>
          <h2 className="text-gold-gradient mb-4 text-4xl font-bold md:text-5xl lg:text-6xl">
            Destinations Temporelles
          </h2>
          <p className="mx-auto max-w-md text-muted-foreground">
            Choisissez votre époque et embarquez pour une aventure inoubliable
            à travers le temps.
          </p>
          <div className="gold-line mx-auto mt-8 w-32" />
        </motion.div>

        {/* Cards Grid */}
        <div className="grid gap-8 md:grid-cols-3">
          {destinations.map((dest, index) => (
            <motion.div
              key={dest.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="group relative cursor-pointer overflow-hidden rounded-xl card-shadow"
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              {/* Image */}
              <div className="relative aspect-[3/4] overflow-hidden">
                <img
                  src={dest.image}
                  alt={dest.title}
                  className="h-full w-full object-cover transition-transform duration-[800ms] group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent opacity-80 transition-opacity duration-500 group-hover:opacity-90" />

                {/* Era Badge */}
                <div className="absolute left-4 top-4">
                  <span className="glass-strong inline-flex items-center gap-1.5 rounded-full px-3 py-1.5 text-[10px] font-semibold uppercase tracking-wider text-primary">
                    <Calendar className="h-3 w-3" />
                    {dest.era}
                  </span>
                </div>
              </div>

              {/* Content Overlay */}
              <div className="absolute inset-x-0 bottom-0 p-6">
                <div className="flex items-center gap-2 mb-2 text-xs text-primary">
                  <MapPin className="h-3 w-3" />
                  <span>{dest.location}</span>
                  <span className="text-muted-foreground">·</span>
                  <span className="font-mono font-medium">{dest.year}</span>
                </div>

                <h3 className="mb-2 font-display text-2xl font-bold text-foreground lg:text-3xl">
                  {dest.title}
                </h3>

                {/* Expandable content */}
                <div
                  className="overflow-hidden transition-all duration-600 ease-out"
                  style={{
                    maxHeight: hoveredIndex === index ? "200px" : "0",
                    opacity: hoveredIndex === index ? 1 : 0,
                  }}
                >
                  <p className="mb-4 text-sm leading-relaxed text-muted-foreground">
                    {dest.description}
                  </p>

                  {/* Highlights */}
                  <div className="mb-4 flex flex-wrap gap-2">
                    {dest.highlights.map((h) => (
                      <span
                        key={h}
                        className="rounded-full border border-border bg-secondary/50 px-2.5 py-0.5 text-[10px] text-muted-foreground"
                      >
                        {h}
                      </span>
                    ))}
                  </div>

                  <button className="inline-flex items-center gap-2 text-sm font-medium text-primary transition-all hover:gap-3">
                    Réserver ce voyage
                    <ArrowRight className="h-4 w-4" />
                  </button>
                </div>
              </div>

              {/* Hover border */}
              <div className="pointer-events-none absolute inset-0 rounded-xl border border-transparent transition-all duration-500 group-hover:border-primary/20 group-hover:gold-glow" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DestinationCards;
