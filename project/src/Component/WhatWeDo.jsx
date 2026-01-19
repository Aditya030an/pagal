import React from "react";
import {
  PencilRuler,
  Code2,
  TrendingUp,
  Target,
  ArrowRight
} from "lucide-react";

const services = [
  { icon: PencilRuler, title: "Design & UX", desc: "User-centric design that builds trust and clarity." },
  { icon: Code2, title: "Development", desc: "Scalable websites engineered for performance." },
  { icon: TrendingUp, title: "Optimisation", desc: "Continuous CRO, SEO, and performance growth." },
  { icon: Target, title: "Marketing", desc: "Campaigns that attract, engage, and convert." }
];

const WhatWeDo = () => {
  return (
    <section className="relative w-full overflow-hidden bg-[#FAF7F2]">

      {/* SOFT BLUE BLOBS */}
     {/* LEFT BLOB – BABY BLUE */}
<div
  className="absolute -top-40 -left-40 w-[600px] h-[600px] rounded-full blur-3xl animate-floatSlow"
  style={{ backgroundColor: "rgba(104,187,227,0.45)" }} // #68BBE3
/>

{/* RIGHT BLOB – BLUE GROTTO */}
<div
  className="absolute top-1/3 -right-40 w-[520px] h-[520px] rounded-full blur-3xl animate-floatReverse"
  style={{ backgroundColor: "rgba(14,134,212,0.35)" }} // #0E86D4
/>

{/* BOTTOM BLOB – BLUE */}
<div
  className="absolute bottom-0 left-1/3 w-[420px] h-[420px] rounded-full blur-3xl animate-floatSlow"
  style={{ backgroundColor: "rgba(5,92,157,0.30)" }} // #055C9D
/>

      {/* CONTENT */}
      <div className="relative max-w-[1440px] mx-auto px-6 lg:px-[120px] py-36">

        <p className="text-sm uppercase tracking-[0.25em] text-[#0E86D4]">
          What we do
        </p>

        <h2 className="mt-6 text-[42px] md:text-[56px] lg:text-[64px] font-light leading-tight text-[#003060] max-w-5xl">
          High-impact{" "}
          <span className="text-[#055C9D] font-normal">
            digital experiences
          </span>{" "}
          crafted to{" "}
          <span className="text-[#0E86D4] font-normal">
            grow & scale effortlessly.  
          </span>
        </h2>

        <p className="mt-8 max-w-3xl text-lg text-slate-600 leading-relaxed">
          We combine strategy, creativity, and technology to build digital
          products that deliver long-term business value.
        </p>

        {/* SERVICES */}
        <div className="mt-24 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {services.map((item, i) => {
            const Icon = item.icon;
            return (
              <div
                key={i}
                className="group relative bg-white/75 backdrop-blur-xl rounded-3xl p-10
                           border border-white/40 shadow-lg
                           hover:shadow-2xl transition-all duration-300
                           hover:-translate-y-2"
              >
                {/* ICON */}
                <div className="w-14 h-14 rounded-2xl bg-[#68BBE3]/25 flex items-center justify-center
                                group-hover:bg-[#055C9D] transition">
                  <Icon className="w-7 h-7 text-[#055C9D] group-hover:text-white transition" />
                </div>

                <h3 className="mt-8 text-xl font-medium text-[#003060]">
                  {item.title}
                </h3>

                <p className="mt-4 text-slate-600">
                  {item.desc}
                </p>

                <div className="mt-6 inline-flex items-center gap-2 text-[#0E86D4] font-medium cursor-pointer">
                  Learn more
                  <ArrowRight
                    className="group-hover:translate-x-1 transition"
                    size={16}
                  />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default WhatWeDo;
