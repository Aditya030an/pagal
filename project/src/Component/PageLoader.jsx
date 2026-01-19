import React, { useEffect, useRef } from "react";
import gsap from "gsap";

const PageLoader = ({ onComplete }) => {
  const loaderRef = useRef(null);
  const lettersRef = useRef([]);

  useEffect(() => {
    const tl = gsap.timeline({
      onComplete: () => {
        onComplete && onComplete();
      },
    });

    tl.fromTo(
      lettersRef.current,
      { y: 120, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        stagger: 0.08,
        ease: "power4.out",
        duration: 1.2,
      }
    )
      .to(".loader-bar-fill", {
        width: "100%",
        duration: 1.4,
        ease: "power2.inOut",
      })
      .to(loaderRef.current, {
        y: "-100%",
        duration: 1.2,
        ease: "power4.inOut",
      });
  }, []);

  const text = "Pegal Agency";

  return (
    <div
      ref={loaderRef}
      className="fixed inset-0 z-[9999] bg-black flex flex-col justify-center items-center overflow-hidden"
    >
      {/* Agency Name */}
      <div className="flex overflow-hidden">
        {text.split("").map((char, i) => (
          <span
            key={i}
            ref={(el) => (lettersRef.current[i] = el)}
            className="text-white text-5xl md:text-7xl font-semibold tracking-widest"
          >
            {char}
          </span>
        ))}
      </div>

      {/* Loader Bar */}
      <div className="w-64 h-[2px] bg-white/20 mt-10 overflow-hidden">
        <div className="loader-bar-fill h-full w-0 bg-white" />
      </div>

      {/* Tagline */}
      <p className="text-white/50 text-sm tracking-widest mt-6">
        DIGITAL CREATIVE AGENCY
      </p>
    </div>
  );
};

export default PageLoader;
