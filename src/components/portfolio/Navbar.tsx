import { useEffect, useState } from "react";
import { Code2, Languages } from "lucide-react";
import { useI18n } from "@/i18n/I18nProvider";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const { messages, toggleLocale } = useI18n();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled
          ? "backdrop-blur-xl bg-background/70 border-b border-border"
          : "bg-transparent"
      }`}
    >
      <nav className="mx-auto max-w-6xl flex items-center justify-between px-6 py-4">
        <a
          href="#inicio"
          className="flex items-center gap-2 font-display font-bold text-lg"
        >
          <span className="grid place-items-center size-8 rounded-md bg-primary text-primary-foreground shadow-glow">
            <Code2 className="size-4" />
          </span>
          <span>{messages.navbar.brand}</span>
        </a>
        <ul className="hidden md:flex items-center gap-1 text-sm">
          {messages.navbar.links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="px-3 py-2 rounded-md text-muted-foreground hover:text-foreground hover:bg-secondary/60 transition-colors"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>
        <button
          type="button"
          onClick={toggleLocale}
          aria-label={messages.navbar.switchAriaLabel}
          className="text-sm hover:text-primary flex gap-x-1 items-center cursor-pointer bg-gray-800 hover:bg-secondary/60 px-3 py-2 rounded-lg shadow-lg text-muted-foreground transition-colors"
        >
          <Languages className="size-4" />
          {messages.navbar.switchLabel}
        </button>
      </nav>
    </header>
  );
}
