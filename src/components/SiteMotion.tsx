"use client";
import { useEffect } from "react";

// Scroll reveals + 3-depth parallax. Everything is off under prefers-reduced-motion.
export function SiteMotion() {
  useEffect(() => {
    const root = document.documentElement;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    root.classList.add("js");
    const bar = document.querySelector<HTMLElement>(".bar");
    const onBar = () => bar?.classList.toggle("scrolled", window.scrollY > 40);
    onBar();
    window.addEventListener("scroll", onBar, { passive: true });
    const reveals = document.querySelectorAll<HTMLElement>("[data-reveal]");
    if (reduce) {
      reveals.forEach((el) => el.classList.add("in"));
      return;
    }
    const io = new IntersectionObserver(
      (entries) =>
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("in");
            io.unobserve(e.target);
          }
        }),
      { rootMargin: "0px 0px -12% 0px", threshold: 0.05 }
    );
    reveals.forEach((el) => io.observe(el));

    const layers = Array.from(document.querySelectorAll<HTMLElement>("[data-depth]"));
    let raf = 0;
    const tick = () => {
      raf = 0;
      const vh = window.innerHeight;
      for (const el of layers) {
        const r = el.parentElement!.getBoundingClientRect();
        if (r.bottom < -100 || r.top > vh + 100) continue;
        const depth = Number(el.dataset.depth);
        const progress = (r.top + r.height / 2 - vh / 2) / vh; // -1..1 around center
        el.style.transform = `translate3d(0, ${(-progress * depth * 100).toFixed(1)}px, 0)`;
      }
    };
    const onScroll = () => {
      if (!raf) raf = requestAnimationFrame(tick);
    };
    tick();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      io.disconnect();
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      cancelAnimationFrame(raf);
    };
  }, []);
  return null;
}
