

// import { ArrowUpRight } from "lucide-react";

// import project1 from "./photos/digitalpetclinic.png";
// import project2 from "./photos/kaarigar.png";
// import project3 from "./photos/movementrehab.png";
// import project4 from "./photos/navnirman.png";
// import project5 from "./photos/roof.png";
// import project6 from "./photos/pinchofyum.png";
// import project7 from "./photos/temp.png";


// const projects = [
//   {
//     title: "Digital Pet Clinic",
//     desc: "A modern veterinary platform focused on accessibility, trust, and performance.",
//     image: project1,
//     link: "https://digitalpetclinic.com",
//   },
//   {
//     title: "Kaarigar",
//     desc: "A brand-driven website crafted to showcase craftsmanship and authenticity.",
//     image: project2,
//     link: "https://kaarigar.com",
//   },
//   {
//     title: "Movement Rehab",
//     desc: "A healthcare-focused website designed for clarity, usability, and credibility.",
//     image: project3,
//     link: "https://movementrehab.com",
//   },
//   {
//     title: "Navnirman",
//     desc: "A corporate construction website built with structure, trust, and scale in mind.",
//     image: project4,
//     link: "https://navnirman.com",
//   },
//   {
//     title: "Roof Solutions",
//     desc: "A clean, conversion-focused business website with strong visual hierarchy.",
//     image: project5,
//     link: "https://roofsolutions.com",
//   },
//   {
//     title: "Pinch of Yum",
//     desc: "A food & lifestyle website designed to feel warm, engaging, and intuitive.",
//     image: project6,
//     link: "https://pinchofyum.com",
//   },
//   {
//     title: "Creative Showcase",
//     desc: "A portfolio-style website built to highlight work with clarity and confidence.",
//     image: project7,
//     link: "https://example.com",
//   },
// ];


// const PortfolioCinematic = () => {
//   return (
//     <section className="relative bg-[#f4f9fc] px-6 md:px-24 py-44">

//       {/* Section intro */}
//       <div className="max-w-3xl mb-56">
//         <p className="uppercase tracking-[0.35em] text-[0.7rem] text-[#0e86d4] mb-8">
//           Selected Work
//         </p>

//         <h2 className="text-[clamp(2.8rem,5vw,4.2rem)] leading-[1.02] font-medium text-[#003060]">
//           Calm, focused digital work
//           <br />
//           designed for clarity,
//           <br />
//           performance & longevity
//         </h2>
//       </div>

//       {/* Projects */}
//       {projects.map((project, index) => {
//         const isEven = index % 2 === 1;

//         return (
//           <div key={index} className="mb-80">

//             {/* Text */}
//             <div
//               className={`max-w-xl mb-28 ${
//                 isEven ? "ml-auto text-right" : ""
//               }`}
//             >
//               <p className="text-[0.75rem] tracking-[0.32em] text-[#0e86d4] mb-6">
//                 {String(index + 1).padStart(2, "0")}
//               </p>

//               <h3 className="text-[2.4rem] font-medium text-[#003060] mb-6 leading-tight">
//                 {project.title}
//               </h3>

//               <p className="text-[#055c9d] leading-relaxed max-w-md">
//                 {project.desc}
//               </p>

//               <a
//                 href={project.link}
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className={`mt-12 inline-flex items-center gap-3 text-sm text-[#003060] group ${
//                   isEven ? "ml-auto justify-end" : ""
//                 }`}
//               >
//                 View Live Website
//                 <ArrowUpRight
//                   size={16}
//                   className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300"
//                 />
//               </a>
//             </div>

//             {/* Image */}
//             <a
//               href={project.link}
//               target="_blank"
//               rel="noopener noreferrer"
//               className={`block relative h-[580px] rounded-[42px] overflow-hidden group ${
//                 isEven ? "ml-auto max-w-[92%]" : ""
//               }`}
//             >
//               <img
//                 src={project.image}
//                 alt={project.title}
//                 loading="lazy"
//                 className="absolute inset-0 w-full h-full object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-[1.04]"
//               />

//               {/* subtle luxury overlay */}
//               <div className="absolute inset-0 bg-gradient-to-t from-black/15 via-transparent to-transparent" />
//             </a>

//           </div>
//         );
//       })}
//     </section>
//   );
// };

// export default PortfolioCinematic;




import { useEffect } from "react";
import { ArrowUpRight } from "lucide-react";

import project1 from "./photos/digitalpetclinic.png";
import project2 from "./photos/kaarigar.png";
import project3 from "./photos/movementrehab.png";
import project4 from "./photos/navnirman.png";
import project5 from "./photos/roof.png";
import project6 from "./photos/pinchofyum.png";
import project7 from "./photos/temp.png";

const projects = [
  {
    title: "Digital Pet Clinic",
    desc: "A modern veterinary platform focused on accessibility, trust, and performance.",
    image: project1,
    link: "https://digitalpetclinic.com",
  },
  {
    title: "Kaarigar",
    desc: "A brand-driven website crafted to showcase craftsmanship and authenticity.",
    image: project2,
    link: "https://kaarigar.com",
  },
  {
    title: "Movement Rehab",
    desc: "A healthcare-focused website designed for clarity, usability, and credibility.",
    image: project3,
    link: "https://movementrehab.com",
  },
  {
    title: "Navnirman",
    desc: "A corporate construction website built with structure, trust, and scale in mind.",
    image: project4,
    link: "https://navnirman.com",
  },
  {
    title: "Roof Solutions",
    desc: "A clean, conversion-focused business website with strong visual hierarchy.",
    image: project5,
    link: "https://roofsolutions.com",
  },
  {
    title: "Pinch of Yum",
    desc: "A food & lifestyle website designed to feel warm, engaging, and intuitive.",
    image: project6,
    link: "https://pinchofyum.com",
  },
  {
    title: "Creative Showcase",
    desc: "A portfolio-style website built to highlight work with clarity and confidence.",
    image: project7,
    link: "https://example.com",
  },
];

const PortfolioCinematic = () => {

  /* ================= SCROLL ANIMATION ================= */
  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add("show");
          }
        });
      },
      { threshold: 0.15 }
    );

    document
      .querySelectorAll(".fade-up, .image-reveal")
      .forEach(el => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <section className="relative bg-[#f4f9fc] px-6 md:px-24 py-44 overflow-hidden">

      {/* ================= INLINE ANIMATION STYLES ================= */}
      <style>{`
        .fade-up {
          opacity: 0;
          transform: translateY(32px);
          transition: opacity 0.9s ease, transform 0.9s ease;
        }

        .fade-up.show {
          opacity: 1;
          transform: translateY(0);
        }

        .image-reveal {
          opacity: 0;
          transform: translateY(60px) scale(0.96);
          transition: opacity 1.1s ease, transform 1.1s ease;
        }

        .image-reveal.show {
          opacity: 1;
          transform: translateY(0) scale(1);
        }
      `}</style>

      {/* ================= SECTION INTRO ================= */}
      <div className="max-w-3xl mb-56 fade-up">
        <p className="uppercase tracking-[0.35em] text-[0.7rem] text-[#0e86d4] mb-8">
          Selected Work
        </p>

        <h2 className="text-[clamp(2.8rem,5vw,4.2rem)] leading-[1.02] font-medium text-[#003060]">
          Calm, focused digital work
          <br />
          designed for clarity,
          <br />
          performance & longevity
        </h2>
      </div>

      {/* ================= PROJECTS ================= */}
      {projects.map((project, index) => {
        const isEven = index % 2 === 1;

        return (
          <div key={index} className="mb-80">

            {/* Text */}
            <div
              className={`max-w-xl mb-28 fade-up ${
                isEven ? "ml-auto text-right" : ""
              }`}
            >
              <p className="text-[0.75rem] tracking-[0.32em] text-[#0e86d4] mb-6">
                {String(index + 1).padStart(2, "0")}
              </p>

              <h3 className="text-[2.4rem] font-medium text-[#003060] mb-6 leading-tight">
                {project.title}
              </h3>

              <p className="text-[#055c9d] leading-relaxed max-w-md">
                {project.desc}
              </p>

              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className={`mt-12 inline-flex items-center gap-3 text-sm text-[#003060] group ${
                  isEven ? "ml-auto justify-end" : ""
                }`}
              >
                View Live Website
                <ArrowUpRight
                  size={16}
                  className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300"
                />
              </a>
            </div>

            {/* Image */}
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className={`block relative h-[580px] rounded-[42px] overflow-hidden group image-reveal ${
                isEven ? "ml-auto max-w-[92%]" : ""
              }`}
            >
              <img
                src={project.image}
                alt={project.title}
                loading="lazy"
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-[1.04]"
              />

              {/* luxury depth (NO blur) */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/15 via-transparent to-transparent" />
            </a>

          </div>
        );
      })}
    </section>
  );
};

export default PortfolioCinematic;