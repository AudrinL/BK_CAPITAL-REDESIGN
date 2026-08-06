"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import gsap from "gsap";

export default function Loader() {
  const [visible, setVisible] = useState(true);
  const [skip, setSkip] = useState(false);
  const barRef = useRef<HTMLDivElement>(null);
  const rootRef = useRef<HTMLDivElement>(null);
  const markRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const seen = sessionStorage.getItem("bkc-loaded");
    if (seen) {
      // sessionStorage only exists client-side, so this can't be read during
      // render (SSR) — an effect is the earliest point it's known, and firing
      // once on mount here (not in response to a subscription) is intentional.
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setSkip(true);
      setVisible(false);
      return;
    }
    sessionStorage.setItem("bkc-loaded", "1");

    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduced) {
      setVisible(false);
      return;
    }

    const tl = gsap.timeline({ onComplete: () => setVisible(false) });
    tl.set(barRef.current, { scaleX: 0, transformOrigin: "left" });
    tl.fromTo(
      markRef.current,
      { opacity: 0, y: 12 },
      { opacity: 1, y: 0, duration: 0.5, ease: "power2.out" }
    );
    tl.to(barRef.current, { scaleX: 1, duration: 1.0, ease: "power2.inOut" }, "-=0.1");
    tl.to(markRef.current, { opacity: 0, duration: 0.3 }, "+=0.1");
    tl.to(rootRef.current, { yPercent: -100, duration: 0.7, ease: "power4.inOut" }, "-=0.05");

    return () => {
      tl.kill();
    };
  }, []);

  if (!visible || skip) return null;

  return (
    <div
      ref={rootRef}
      className="fixed inset-0 z-[100] flex flex-col items-center justify-center gap-8 bg-[image:var(--gradient-primary)]"
      aria-hidden="true"
    >
      <div ref={markRef} className="px-6 opacity-0">
        <Image
          src="/logos/bk-capital.svg"
          alt=""
          width={200}
          height={48}
          priority
          className="h-auto w-[min(50vw,220px)] brightness-0 invert"
        />
      </div>
      <div className="h-px w-40 overflow-hidden bg-white/20">
        <div ref={barRef} className="h-full w-full bg-accent" />
      </div>
    </div>
  );
}
