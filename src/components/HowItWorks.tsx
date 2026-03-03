import { motion } from "framer-motion";
import { Compass, Shield, Clock, Sparkles } from "lucide-react";

const steps = [
  {
    icon: Compass,
    title: "Choisissez votre époque",
    description: "Parcourez notre catalogue de destinations temporelles et sélectionnez l'époque qui vous fascine.",
    number: "01",
  },
  {
    icon: Shield,
    title: "Préparez votre voyage",
    description: "Notre équipe vous briefe sur les coutumes, la langue et les dangers potentiels de votre destination.",
    number: "02",
  },
  {
    icon: Clock,
    title: "Embarquez dans le temps",
    description: "Installez-vous dans notre capsule temporelle et laissez-vous transporter vers l'époque choisie.",
    number: "03",
  },
  {
    icon: Sparkles,
    title: "Vivez l'aventure",
    description: "Explorez, découvrez et créez des souvenirs intemporels avant votre retour sécurisé.",
    number: "04",
  },
];

const HowItWorks = () => {
  return (
    <section id="how-it-works" className="relative px-6 py-32">
      {/* Background decoration */}
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
            Le processus
          </span>
          <h2 className="text-gold-gradient mb-4 text-4xl font-bold md:text-5xl">
            Comment ça marche
          </h2>
          <p className="mx-auto max-w-md text-muted-foreground">
            Quatre étapes simples pour voyager dans le temps en toute sécurité
          </p>
        </motion.div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {steps.map((step, index) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.12 }}
              className="group relative rounded-xl border border-border bg-card/50 p-6 transition-all duration-500 hover:border-primary/20 hover:bg-card"
            >
              {/* Number */}
              <span className="absolute -top-3 right-4 font-mono text-5xl font-bold text-muted/50 transition-colors group-hover:text-primary/15">
                {step.number}
              </span>

              <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-lg border border-border bg-secondary transition-all group-hover:border-primary/30 group-hover:bg-primary/10">
                <step.icon className="h-5 w-5 text-muted-foreground transition-colors group-hover:text-primary" />
              </div>

              <h3 className="mb-2 font-display text-lg font-semibold text-foreground">
                {step.title}
              </h3>
              <p className="text-sm leading-relaxed text-muted-foreground">
                {step.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
