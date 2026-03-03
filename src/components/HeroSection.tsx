const HeroSection = () => {
  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* Video Background */}
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 h-full w-full object-cover"
      >
        <source
          src="https://cdn.coverr.co/videos/coverr-a-view-of-the-milky-way-from-a-mountain-7578/1080p.mp4"
          type="video/mp4"
        />
      </video>

      {/* Overlay */}
      <div className="hero-overlay absolute inset-0" />

      {/* Content */}
      <div className="relative z-10 flex h-full flex-col items-center justify-center px-6 text-center">
        <p
          className="mb-4 text-sm font-medium uppercase tracking-[0.35em] text-primary opacity-0 animate-fade-in"
          style={{ animationDelay: "0.3s" }}
        >
          Voyagez à travers le temps
        </p>
        <h1
          className="text-gold-gradient mb-6 text-5xl font-bold leading-tight opacity-0 animate-fade-in-up md:text-7xl lg:text-8xl"
          style={{ animationDelay: "0.5s" }}
        >
          ChronoVoyage
        </h1>
        <p
          className="mb-10 max-w-xl text-lg font-light text-muted-foreground opacity-0 animate-fade-in-up md:text-xl"
          style={{ animationDelay: "0.8s" }}
        >
          Explorez les époques les plus fascinantes de l'histoire humaine.
          Votre aventure temporelle commence ici.
        </p>
        <button
          className="gold-glow rounded-full border border-primary bg-primary/10 px-8 py-3 text-sm font-medium uppercase tracking-widest text-primary opacity-0 animate-fade-in-up transition-all duration-300 hover:bg-primary hover:text-primary-foreground"
          style={{ animationDelay: "1.1s" }}
        >
          Commencer le voyage
        </button>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 opacity-0 animate-fade-in" style={{ animationDelay: "1.5s" }}>
        <div className="animate-float flex flex-col items-center gap-2 text-muted-foreground">
          <span className="text-xs uppercase tracking-widest">Défiler</span>
          <div className="h-10 w-px bg-gradient-to-b from-primary/60 to-transparent" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
