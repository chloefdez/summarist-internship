"use client";

import { useEffect, useState } from "react";

type RotatingHighlightsProps = {
  lines: string[];
  intervalMs?: number;
  align?: "left" | "right";
};

export default function RotatingHighlights({
  lines,
  intervalMs = 2000,
  align = "left",
}: RotatingHighlightsProps) {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    if (!lines || lines.length === 0) return;

    const id = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % lines.length);
    }, intervalMs);

    return () => clearInterval(id);
  }, [lines, intervalMs]);

  return (
    <div
      className={`space-y-3 ${
        align === "right" ? "text-right items-end" : "text-left"
      }`}
    >
      {lines.map((line, i) => (
        <p
          key={`${line}-${i}`}
          className="text-[32px] leading-[1.25] font-semibold transition-colors duration-500"
          style={{ color: i === activeIndex ? "#2cd97c" : "#6c757b" }}
        >
          {line}
        </p>
      ))}
    </div>
  );
}
