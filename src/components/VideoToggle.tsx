"use client";
import { useEffect, useState } from "react";

// Pause/play control for the looping hero video (WCAG 2.2.2). Starts paused under reduced motion.
export function VideoToggle() {
  const [playing, setPlaying] = useState(true);
  useEffect(() => {
    const v = document.querySelector<HTMLVideoElement>(".hero-video");
    if (!v) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      v.pause();
      setPlaying(false);
    }
  }, []);
  const toggle = () => {
    const v = document.querySelector<HTMLVideoElement>(".hero-video");
    if (!v) return;
    if (v.paused) {
      v.play();
      setPlaying(true);
    } else {
      v.pause();
      setPlaying(false);
    }
  };
  return (
    <button type="button" className="vid-toggle" onClick={toggle} aria-label={playing ? "Pause background video" : "Play background video"}>
      {playing ? (
        <svg viewBox="0 0 24 24" width="14" height="14" aria-hidden="true"><path d="M7 5h3v14H7zM14 5h3v14h-3z" fill="currentColor" /></svg>
      ) : (
        <svg viewBox="0 0 24 24" width="14" height="14" aria-hidden="true"><path d="M8 5v14l11-7z" fill="currentColor" /></svg>
      )}
    </button>
  );
}
