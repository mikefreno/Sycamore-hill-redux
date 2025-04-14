"use client";

import { useEffect, useRef, useState } from "react";

export default function VideoHero() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const [isEnded, setIsEnded] = useState<boolean>(false);
  const [hasStarted, setHasStarted] = useState<boolean>(false);

  useEffect(() => {
    if (isPlaying && !hasStarted) {
      setHasStarted(true);
    }
  }, [isPlaying]);

  useEffect(() => {
    const video = document.getElementById("hero");
    video?.addEventListener("play", function () {
      setIsPlaying(true);
    });
  }, []);

  const handleVideoClick = () => {
    if (hasStarted) {
      if (!videoRef.current) return;
      if (videoRef.current.paused) {
        videoRef.current.play();
      } else {
        videoRef.current.pause();
      }
    }
  };

  const handleRestart = () => {
    if (!videoRef.current) return;
    videoRef.current.play();
    setIsEnded(false);
  };

  return (
    <div className="relative">
      <video
        id={"hero"}
        ref={videoRef}
        src="hero-movie.mp4"
        poster="/video-first-frame.jpg"
        autoPlay
        playsInline
        muted
        controls={false}
        onPlaying={() => setIsPlaying(true)}
        onLoad={() => setIsPlaying(true)}
        onPlay={() => setIsPlaying(true)}
        onPause={() => setIsPlaying(false)}
        onEnded={() => {
          setIsPlaying(false);
          setIsEnded(true);
        }}
        onClick={handleVideoClick}
        style={{
          width: "100%",
          maxHeight: "100svh",
          objectFit: "cover",
          minHeight: "90svh",
        }}
      />

      {!hasStarted && !isPlaying && !isEnded && (
        <div className="absolute inset-0 flex justify-center z-10 pointer-events-none items-center">
          <div className="bg-zinc-100 rounded-full p-4 z-50 transition-opacity duration-500 animate-spin">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
              className="w-12 h-12 fill-lime-600 mirror"
            >
              <path d="M496 256C496 294.266 486.781 332.312 469.312 366.062C465.062 374.312 456.656 379.031 447.969 379.031C444.281 379.031 440.5 378.187 436.969 376.344C425.187 370.25 420.594 355.781 426.687 344C440.844 316.672 448 287.062 448 256C448 150.125 361.875 64 256 64C242.75 64 232 53.25 232 40S242.75 16 256 16C388.344 16 496 123.656 496 256Z" />
            </svg>
          </div>
        </div>
      )}

      {isEnded && (
        <div className="absolute inset-0 flex justify-center items-center">
          <button
            onClick={handleRestart}
            className="bg-white opacity-30 active:opacity-100 hover:opacity-100 cursor-pointer rounded-full p-4 z-50 transition-opacity duration-300"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
              className="w-12 h-12 fill-lime-600"
            >
              <path
                d="M96 256C96 344.219 167.781 416 256 416C290.969 416 324.156 404.938 351.969 384.031C369.562 370.75 394.656 374.313 407.969 391.969C421.25 409.625 417.687 434.688 400.031 447.969C358.25 479.406 308.469 496 256 496C123.656 496 16 388.344 16 256S123.656 16 256 16C323.77 16 387.131 44.781 432 93.297V160H383.943C353.941 120.094 306.754 96 256 96C167.781 96 96 167.781 96 256Z"
                opacity={0.5}
              />
              <path d="M496 47.996V192.004C496 200.844 492.42 208.844 486.631 214.633S472.842 224 464.004 224H319.996C302.326 224 288 209.676 288 192.004C288 174.336 302.324 160.008 319.994 160.008H383.83C383.828 160.008 383.826 160 383.824 160H432V93.297L432.008 93.305V47.992C432.008 30.324 446.332 16 464.002 16C481.674 16 496 30.324 496 47.996Z" />
            </svg>
          </button>
        </div>
      )}
    </div>
  );
}
