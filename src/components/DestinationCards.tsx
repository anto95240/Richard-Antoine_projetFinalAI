import { useState } from "react";

interface Destination {
  title: string;
  year: string;
  location: string;
  description: string;
  image: string;
  era: string;
}

const destinations: Destination[] = [
  {
    title: "La Tour Eiffel",
    year: "1889",
    location: "Paris, France",
    description:
      "Assistez à l'inauguration de la Tour Eiffel lors de l'Exposition Universelle. Plongez dans le Paris de la Belle Époque.",
    image:
      "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=800&q=80",
    era: "Belle Époque",
  },
  {
    title: "Terre Préhistorique",
    year: "−66M",
    location: "Crétacé Supérieur",
    description:
      "Explorez un monde dominé par les dinosaures. Observez des créatures titanesques dans leur habitat naturel.",
    image:
      "https://images.unsplash.com/photo-1519880772-0d47ba5ae13d?w=800&q=80",
    era: "Mésozoïque",
  },
  {
    title: "L'Atelier de Vinci",
    year: "1504",
    location: "Florence, Italie",
    description:
      "Entrez dans l'atelier de Léonard de Vinci et découvrez les secrets de la Renaissance italienne.",
    image:
      "https://images.unsplash.com/photo-1541370976299-4d24ebbc9077?w=800&q=80",
    era: "Renaissance",
  },
];

const DestinationCards = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section className="relative z-10 -mt-32 px-6 pb-32">
      <div className="mx-auto max-w-6xl">
        <div className="mb-16 text-center">
          <h2 className="text-gold-gradient mb-3 text-3xl font-semibold md:text-4xl">
            Destinations Temporelles
          </h2>
          <p className="text-muted-foreground">
            Choisissez votre époque, embarquez pour l'aventure
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          {destinations.map((dest, index) => (
            <div
              key={dest.title}
              className="group relative cursor-pointer overflow-hidden rounded-lg transition-all duration-500"
              style={{
                animationDelay: `${index * 0.2}s`,
              }}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              {/* Image */}
              <div className="relative aspect-[3/4] overflow-hidden">
                <img
                  src={dest.image}
                  alt={dest.title}
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent" />
              </div>

              {/* Content */}
              <div className="absolute inset-x-0 bottom-0 p-6">
                <span className="mb-2 inline-block rounded-full border border-primary/30 bg-primary/10 px-3 py-1 text-xs font-medium uppercase tracking-wider text-primary">
                  {dest.era}
                </span>
                <h3 className="mb-1 font-display text-2xl font-semibold text-foreground">
                  {dest.title}
                </h3>
                <p className="mb-3 flex items-center gap-2 text-sm text-muted-foreground">
                  <span className="text-primary">{dest.year}</span>
                  <span>·</span>
                  <span>{dest.location}</span>
                </p>
                <p
                  className="text-sm leading-relaxed text-muted-foreground transition-all duration-500"
                  style={{
                    maxHeight: hoveredIndex === index ? "100px" : "0",
                    opacity: hoveredIndex === index ? 1 : 0,
                  }}
                >
                  {dest.description}
                </p>
                <div
                  className="mt-4 overflow-hidden transition-all duration-500"
                  style={{
                    maxHeight: hoveredIndex === index ? "50px" : "0",
                    opacity: hoveredIndex === index ? 1 : 0,
                  }}
                >
                  <span className="inline-flex items-center gap-2 text-sm font-medium text-primary transition-colors hover:text-gold-light">
                    Voyager →
                  </span>
                </div>
              </div>

              {/* Gold border on hover */}
              <div className="pointer-events-none absolute inset-0 rounded-lg border border-transparent transition-colors duration-500 group-hover:border-primary/30" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DestinationCards;
