// import React, { useEffect, useRef } from "react";
// import gsap from "gsap";

// const PageLoader = ({ onComplete }) => {
//   const loaderRef = useRef(null);
//   const lettersRef = useRef([]);

//   useEffect(() => {
//     const tl = gsap.timeline({
//       onComplete: () => {
//         onComplete && onComplete();
//       },
//     });

//     tl.fromTo(
//       lettersRef.current,
//       { y: 120, opacity: 0 },
//       {
//         y: 0,
//         opacity: 1,
//         stagger: 0.08,
//         ease: "power4.out",
//         duration: 1.2,
//       }
//     )
//       .to(".loader-bar-fill", {
//         width: "100%",
//         duration: 1.4,
//         ease: "power2.inOut",
//       })
//       .to(loaderRef.current, {
//         y: "-100%",
//         duration: 1.2,
//         ease: "power4.inOut",
//       });
//   }, []);

//   const text = "Pegal Agency";

//   return (
//     <div
//       ref={loaderRef}
//       className="fixed inset-0 z-[9999] bg-black flex flex-col justify-center items-center overflow-hidden"
//     >
//       {/* Agency Name */}
//       <div className="flex overflow-hidden">
//         {text.split("").map((char, i) => (
//           <span
//             key={i}
//             ref={(el) => (lettersRef.current[i] = el)}
//             className="text-white text-5xl md:text-7xl font-semibold tracking-widest"
//           >
//             {char}
//           </span>
//         ))}
//       </div>

//       {/* Loader Bar */}
//       <div className="w-64 h-[2px] bg-white/20 mt-10 overflow-hidden">
//         <div className="loader-bar-fill h-full w-0 bg-white" />
//       </div>

//       {/* Tagline */}
//       <p className="text-white/50 text-sm tracking-widest mt-6">
//         DIGITAL CREATIVE AGENCY
//       </p>
//     </div>
//   );
// };

// export default PageLoader;


import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import logo from "./photos/pegal123.png";

const LightAggressiveIntro = ({ onComplete }) => {
  const root = useRef();
  const mask = useRef();
  const logoRef = useRef();
  const textRef = useRef();

  useEffect(() => {
    document.body.style.overflow = "hidden";

    const tl = gsap.timeline({
      defaults: { ease: "power4.inOut" },
      onComplete: () => {
        document.body.style.overflow = "auto";
        onComplete && onComplete();
      },
    });

    // INITIAL STATES
    gsap.set(mask.current, {
      scaleY: 0.03,
      transformOrigin: "center bottom",
    });

    gsap.set([logoRef.current, textRef.current], {
      y: "160%",
      skewY: 7,
    });

    // PRESSURE BUILD
    tl.to(mask.current, {
      scaleY: 1,
      duration: 1,
      ease: "expo.out",
    })

      // LOGO FORCED UP
      .to(
        logoRef.current,
        {
          y: "0%",
          skewY: 0,
          duration: 1,
          ease: "power4.out",
        },
        "-=0.5"
      )

      // TEXT OVERSHOOT (ARTISTIC SNAP)
      .to(
        textRef.current,
        {
          y: "-10%",
          skewY: 0,
          duration: 0.8,
          ease: "back.out(2)",
        },
        "-=0.7"
      )

      // SNAP TO PERFECT ALIGNMENT
      .to(
        textRef.current,
        {
          y: "0%",
          duration: 0.25,
          ease: "power1.out",
        },
        "-=0.2"
      )

      // TEAR UPWARD (AGGRESSIVE EXIT)
      .to(mask.current, {
        y: "-120%",
        duration: 1.2,
        ease: "expo.inOut",
      })

      .to(
        root.current,
        {
          y: "-120%",
          duration: 1,
          ease: "expo.inOut",
        },
        "-=0.9"
      );

    return () => tl.kill();
  }, [onComplete]);

  return (
    <div
      ref={root}
      className="fixed inset-0 z-[9999] bg-white overflow-hidden"
    >
      {/* PRESSURE PLANE */}
      <div
        ref={mask}
        className="absolute inset-0 bg-white shadow-[0_-60px_120px_rgba(0,0,0,0.18)]"
      />

      {/* CENTER CONTENT */}
      <div className="absolute inset-0 z-10 flex flex-col items-center justify-center gap-8 text-black">
        <div className="overflow-hidden">
          <img
            ref={logoRef}
            src={logo}
            alt="Pegal"
            className="w-32 md:w-40"
          />
        </div>

        <div className="overflow-hidden">
          <h1
            ref={textRef}
            className="text-3xl md:text-5xl font-semibold tracking-tight"
          >
            PEGAL AGENCY
          </h1>
        </div>
      </div>
    </div>
  );
};

export default LightAggressiveIntro;

