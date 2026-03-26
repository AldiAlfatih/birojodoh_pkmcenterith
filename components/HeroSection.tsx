export default function HeroSection() {
  return (
    <section className="border-b border-border bg-background py-16 sm:py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 text-center sm:px-8 lg:px-10 flex flex-col items-center">
        <h1 className="text-4xl font-bold text-primary sm:text-5xl lg:text-6xl">
          Biro Jodoh PKM 2026
        </h1>
        <p className="mt-6 text-lg text-muted-foreground sm:text-xl max-w-2xl text-center">
          Temukan rekan kolaborasi terbaik dari berbagai disiplin ilmu di Institut
          Teknologi Bacharuddin Jusuf Habibie.
        </p>
        
        <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center items-center">
          <a
            href="https://docs.google.com/forms/d/e/1FAIpQLSfPPOq49ijonEmZsoQqy9M-0SMNmUyic9HG_M3NnwEsc-DZJw/viewform"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center rounded-lg bg-primary px-8 py-3.5 text-base font-semibold text-primary-foreground shadow-sm transition-all hover:bg-primary/90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary active:scale-95"
          >
            Daftar Biro Jodoh Sekarang
          </a>
        </div>
        <p className="mt-4 text-sm text-muted-foreground">
          Masih mencari anggota atau mencari tim? Yuk daftarkan dirimu segera!
        </p>
      </div>
    </section>
  );
}
