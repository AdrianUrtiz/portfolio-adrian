import { useI18n } from "@/i18n/useI18n";

export function Footer() {
  const { messages } = useI18n();

  return (
    <footer className="border-t border-border py-8">
      <div className="mx-auto max-w-6xl px-6 flex flex-wrap items-center justify-between gap-3 text-sm text-muted-foreground">
        <p>
          © {new Date().getFullYear()} — Adrián Urtiz — {messages.footer.madeWith}
        </p>
        <p className="font-mono text-xs">v2.0.0</p>
      </div>
    </footer>
  );
}
