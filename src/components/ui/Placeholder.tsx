import { LucideIcon, ImageIcon } from "lucide-react";

/**
 * Elegant stand-in for imagery that hasn't been supplied yet.
 * Drop the real file at `assetPath` (see public/ASSETS.md) and swap the
 * component that renders this for an <Image src={assetPath} /> — no
 * layout changes required, since this fills its parent exactly.
 */
export default function Placeholder({
  assetPath,
  icon: Icon = ImageIcon,
  tone = "primary",
  className = "",
}: {
  assetPath: string;
  icon?: LucideIcon;
  tone?: "primary" | "dark" | "gold";
  className?: string;
}) {
  const tones: Record<string, string> = {
    primary: "bg-[image:var(--gradient-primary)]",
    dark: "bg-[image:var(--gradient-dark)]",
    gold: "bg-[image:var(--gradient-gold)]",
  };

  return (
    <div
      className={`relative isolate flex h-full w-full items-center justify-center overflow-hidden ${tones[tone]} ${className}`}
    >
      <div
        className="absolute inset-0 opacity-[0.15]"
        style={{
          backgroundImage:
            "repeating-linear-gradient(45deg, #fff 0, #fff 1px, transparent 1px, transparent 14px)",
        }}
      />
      <Icon className="h-8 w-8 text-white/40" strokeWidth={1.25} />
      <span className="absolute bottom-2 left-2 rounded-full bg-black/30 px-2.5 py-1 text-[10px] font-medium tracking-wide text-white/80 backdrop-blur-sm">
        {assetPath}
      </span>
    </div>
  );
}
