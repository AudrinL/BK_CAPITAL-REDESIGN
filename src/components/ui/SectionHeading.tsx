export default function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  light = false,
}: {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  light?: boolean;
}) {
  return (
    <div
      className={`max-w-2xl ${align === "center" ? "mx-auto text-center" : ""}`}
    >
      {eyebrow && (
        <span
          className={`reveal-item mb-3 inline-block text-xs font-semibold uppercase tracking-wideish ${
            light ? "text-accent" : "text-primary"
          }`}
        >
          {eyebrow}
        </span>
      )}
      <h2
        className={`reveal-item text-fluid-h2 font-display font-semibold leading-[1.05] tracking-tightest ${
          light ? "text-white" : "text-foreground"
        }`}
      >
        {title}
      </h2>
      {description && (
        <p
          className={`reveal-item mt-4 text-fluid-body leading-relaxed ${
            light ? "text-white/70" : "text-muted"
          }`}
        >
          {description}
        </p>
      )}
    </div>
  );
}
