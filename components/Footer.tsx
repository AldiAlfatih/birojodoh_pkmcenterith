export default function Footer() {
  return (
    <footer className="border-t border-border bg-background">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-6 py-8 sm:flex-row sm:px-8 lg:px-10">
        <p className="text-sm text-muted-foreground">
          © 2026 PKM CENTER ITH. Semua hak dilindungi.
        </p>
        <div className="flex items-center gap-6 text-sm text-muted-foreground">
          <a href="mailto:pkmcenterith@gmail.com" className="hover:text-foreground transition-colors">
            pkmcenterith@gmail.com
          </a>
          <a 
            href="https://www.instagram.com/pkmcenter.ith?igsh=bTY2ZnhqbXFiem83" 
            target="_blank" 
            rel="noopener noreferrer"
            className="hover:text-foreground transition-colors"
          >
            Instagram: @pkmcenter.ith
          </a>
        </div>
      </div>
    </footer>
  );
}
