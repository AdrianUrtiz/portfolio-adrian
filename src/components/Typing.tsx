import { useEffect, useState } from "react";
import { useI18n } from "@/i18n/I18nProvider";

export function Typing() {
  const { messages } = useI18n();
  const roles = messages.hero.roles;
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayed, setDisplayed] = useState("");
  const [typing, setTyping] = useState(true);
  const [waiting, setWaiting] = useState(false);

  useEffect(() => {
    const current = roles[roleIndex];
    let timeout: ReturnType<typeof setTimeout>;

    if (waiting) return;

    if (typing) {
      if (displayed.length < current.length) {
        const char = current[displayed.length];
        const delay = char === " " ? 50 : 70 + Math.random() * 40;
        timeout = setTimeout(
          () => setDisplayed(current.slice(0, displayed.length + 1)),
          delay,
        );
      } else {
        timeout = setTimeout(() => setWaiting(true), 2000);
      }
    } else {
      if (displayed.length > 0) {
        timeout = setTimeout(() => setDisplayed(displayed.slice(0, -1)), 40);
      } else {
        timeout = setTimeout(() => {
          setRoleIndex((i) => (i + 1) % roles.length);
          setTyping(true);
        }, 10);
      }
    }

    return () => clearTimeout(timeout);
  }, [displayed, roleIndex, roles, typing, waiting]);

  useEffect(() => {
    if (waiting) {
      const timeout = setTimeout(() => {
        setWaiting(false);
        setTyping(false);
      }, 500);
      return () => clearTimeout(timeout);
    }
  }, [waiting]);

  return (
    <div className="text-xl md:text-2xl font-medium text-foreground my-3 h-10 flex items-center justify-start gap-2">
      <span>{displayed}</span>
      <span
        className={`inline-block w-0.5 h-7 bg-primary transition-opacity duration-300 ${
          waiting ? "opacity-30" : "opacity-100"
        }`}
      />
    </div>
  );
}
