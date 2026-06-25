import { useEffect, useState } from "react";

type ScrollMotion = {
  scrollY: number;
  progress: number;
  reducedMotion: boolean;
};

export function useScrollMotion(): ScrollMotion {
  const [state, setState] = useState<ScrollMotion>({
    scrollY: 0,
    progress: 0,
    reducedMotion: false,
  });

  useEffect(() => {
    const media = window.matchMedia("(prefers-reduced-motion: reduce)");
    let frame = 0;

    const update = () => {
      const maxScroll = Math.max(document.body.scrollHeight - window.innerHeight, 1);
      const nextScrollY = window.scrollY;

      setState({
        scrollY: nextScrollY,
        progress: Math.min(nextScrollY / maxScroll, 1),
        reducedMotion: media.matches,
      });
      frame = 0;
    };

    const handleScroll = () => {
      if (frame) {
        return;
      }
      frame = window.requestAnimationFrame(update);
    };

    const handlePreferenceChange = () => {
      update();
    };

    update();
    window.addEventListener("scroll", handleScroll, { passive: true });
    media.addEventListener("change", handlePreferenceChange);

    return () => {
      if (frame) {
        window.cancelAnimationFrame(frame);
      }
      window.removeEventListener("scroll", handleScroll);
      media.removeEventListener("change", handlePreferenceChange);
    };
  }, []);

  return state;
}
