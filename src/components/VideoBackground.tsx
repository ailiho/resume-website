import { useEffect, useRef } from "react";

interface VideoBackgroundProps {
  src: string;
}

export default function VideoBackground({ src }: VideoBackgroundProps) {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    let prevX = 0;
    let targetTime = 0;
    let raf = 0;

    const handleMouseMove = (e: MouseEvent) => {
      if (window.innerWidth < 1024) return;
      if (!isFinite(video.duration) || video.duration <= 0) return;

      const delta = e.clientX - prevX;
      prevX = e.clientX;

      targetTime += (delta / window.innerWidth) * 0.8 * video.duration;
      targetTime = Math.max(0, Math.min(targetTime, video.duration));
      if (isFinite(targetTime)) {
        video.currentTime = targetTime;
      }
    };

    const handleSeeked = () => {
      // Smooth tracking frame to frame
    };

    const handleResize = () => {
      if (window.innerWidth < 1024) {
        video.autoplay = true;
        video.play().catch(() => {});
      }
    };

    // Initial setup
    if (window.innerWidth < 1024) {
      video.autoplay = true;
      video.play().catch(() => {});
    }

    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    video.addEventListener("seeked", handleSeeked);
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      video.removeEventListener("seeked", handleSeeked);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="order-last lg:order-none relative lg:absolute lg:inset-0 lg:z-0 overflow-hidden pointer-events-none w-full aspect-square md:aspect-video lg:aspect-auto lg:h-full bg-neutral-50 lg:bg-transparent">
      <video
        ref={videoRef}
        src={src}
        muted
        playsInline
        preload="auto"
        loop
        className="w-full h-full object-cover object-right lg:object-right-bottom"
      />
      {/* Overlay gradient to soften video */}
      <div className="absolute inset-0 bg-gradient-to-b from-white/40 via-white/20 to-white/90 lg:from-white/30 lg:via-transparent lg:to-white/95 pointer-events-none" />
    </div>
  );
}
