"use client";

import { useEffect, useRef } from "react";
import type { MouseEvent, ReactNode } from "react";

type Props = { title: string; children: ReactNode };

// Native <details> keeps keyboard support and works even before JavaScript loads.
export default function AnimatedDetails({ title, children }: Props) {
  const detailsRef = useRef<HTMLDetailsElement>(null);
  const summaryRef = useRef<HTMLElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const heightAnimation = useRef<Animation | null>(null);
  const contentAnimation = useRef<Animation | null>(null);
  const targetOpen = useRef(false);

  useEffect(
    () => () => {
      heightAnimation.current?.cancel();
      contentAnimation.current?.cancel();
    },
    [],
  );

  function handleClick(event: MouseEvent<HTMLElement>) {
    const details = detailsRef.current;
    const summary = summaryRef.current;
    const content = contentRef.current;
    if (!details || !summary || !content) return;
    if (
      window.matchMedia("(prefers-reduced-motion: reduce)").matches ||
      !details.animate
    )
      return;

    event.preventDefault();
    const startHeight = details.getBoundingClientRect().height;
    const startOpacity = getComputedStyle(content).opacity;
    targetOpen.current = heightAnimation.current
      ? !targetOpen.current
      : !details.open;
    heightAnimation.current?.cancel();
    contentAnimation.current?.cancel();

    details.style.overflow = "hidden";
    details.open = true;
    details.classList.toggle("is-closing", !targetOpen.current);
    const endHeight = targetOpen.current
      ? details.getBoundingClientRect().height
      : summary.getBoundingClientRect().bottom -
        details.getBoundingClientRect().top;

    heightAnimation.current = details.animate(
      [{ height: `${startHeight}px` }, { height: `${endHeight}px` }],
      { duration: 280, easing: "cubic-bezier(.22,1,.36,1)" },
    );
    contentAnimation.current = content.animate(
      [
        {
          opacity: targetOpen.current ? 0 : startOpacity,
          transform: targetOpen.current ? "translateY(-6px)" : "translateY(0)",
        },
        {
          opacity: targetOpen.current ? 1 : 0,
          transform: targetOpen.current ? "translateY(0)" : "translateY(-6px)",
        },
      ],
      { duration: 220, easing: "ease-out", fill: "both" },
    );
    heightAnimation.current.onfinish = () => {
      details.open = targetOpen.current;
      details.style.overflow = "";
      details.classList.remove("is-closing");
      heightAnimation.current = null;
      contentAnimation.current?.cancel();
      contentAnimation.current = null;
    };
  }

  return (
    <details ref={detailsRef}>
      <summary ref={summaryRef} onClick={handleClick}>
        {title}
      </summary>
      <div ref={contentRef} className="detail-content">
        {children}
      </div>
    </details>
  );
}
