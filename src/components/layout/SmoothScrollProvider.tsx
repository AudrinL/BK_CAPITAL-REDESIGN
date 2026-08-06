"use client";

import { ReactNode } from "react";
import { useSmoothScroll } from "@/lib/motion";

export default function SmoothScrollProvider({ children }: { children: ReactNode }) {
  useSmoothScroll();
  return <>{children}</>;
}
