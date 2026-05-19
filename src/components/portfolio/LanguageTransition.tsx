type LanguageTransitionProps = {
  isChanging: boolean;
};

export function LanguageTransition({
  isChanging,
}: LanguageTransitionProps) {
  return (
    <div
      aria-hidden="true"
      className={`language-transition ${isChanging ? "is-active" : ""}`}
    />
  );
}
