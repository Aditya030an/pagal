import React from "react";
import poster from "./photos/poster.jpg"

const UltraPremiumSection = () => {
  return (
    <section className="relative bg-[#f6f6f6] overflow-hidden">

      {/* Vertical architectural line */}
      <div className="absolute top-0 left-[6%] h-full w-[1px] bg-gradient-to-b from-transparent via-slate-300 to-transparent" />

      {/* Oversized step number */}
      <div className="absolute top-28 left-[2.5%] text-[200px] font-semibold text-slate-200 select-none">
        01
      </div>

      {/* Moving accent dots */}
      <div className="absolute top-1/3 left-[5.7%] flex flex-col gap-4 animate-dotDrift">
        <span className="w-1.5 h-1.5 bg-slate-400 rounded-full"></span>
        <span className="w-1.5 h-1.5 bg-slate-300 rounded-full"></span>
        <span className="w-1.5 h-1.5 bg-slate-200 rounded-full"></span>
      </div>

      <div className="relative max-w-[1320px] mx-auto px-6 py-40 grid grid-cols-1 lg:grid-cols-2 gap-24">

        {/* LEFT CONTENT */}
        <div>

          {/* Eyebrow */}
          <div className="flex items-center gap-4 mb-12">
            <span className="h-[1px] w-12 bg-slate-300"></span>
            <p className="text-xs uppercase tracking-widest text-slate-500">
              Our Process
            </p>
          </div>

          {/* Headline */}
          <h1 className="text-[clamp(2.8rem,5vw,4.5rem)] font-medium leading-[1.05] text-slate-900 max-w-xl">
            Behind every great website is a{" "}
            <span className="relative inline-block">
              <span className="relative z-10">clear</span>
              <span className="absolute left-0 bottom-1 w-full h-[6px] bg-gradient-to-r from-slate-200 to-slate-300"></span>
            </span>
            , proven{" "}
            <span className="relative inline-block">
              <span className="relative z-10">process</span>
              <span className="absolute left-0 bottom-1 w-full h-[6px] bg-gradient-to-r from-slate-200 to-slate-300"></span>
            </span>
            .
          </h1>

          {/* Copy */}
          <div className="mt-16 space-y-8 max-w-lg">
            <p className="text-lg text-slate-600 leading-relaxed">
              Before we design anything, we map everything. Our framework blends
              psychology, design thinking, and strategy into a repeatable system.
            </p>

            <p className="text-lg text-slate-600 leading-relaxed">
              This clarity allows us to design with confidence, intention, and
              measurable outcomes.
            </p>
          </div>

          {/* Actions */}
          <div className="mt-20 flex gap-16 items-center">
            <a className="group relative text-slate-900 text-lg font-medium">
              Learn more
              <span className="absolute left-0 -bottom-1 h-[1px] w-0 bg-slate-900 transition-all duration-300 group-hover:w-full"></span>
            </a>

            <a className="group relative text-slate-500 text-lg">
              Book a discovery call
              <span className="absolute left-0 -bottom-1 h-[1px] w-0 bg-slate-500 transition-all duration-300 group-hover:w-full"></span>
            </a>
          </div>
        </div>

        {/* RIGHT IMAGE PANEL */}
        <div className="relative">

          {/* Image background */}
          <div className="relative h-[520px] rounded-[2.5rem] overflow-hidden">
            <img
              src={poster}
              alt="Editorial"
              className="absolute inset-0 w-full h-full object-cover scale-105"
            />
            <div className="absolute inset-0 bg-white/10"></div>
          </div>

          {/* Caption */}
          <p className="mt-6 text-sm text-slate-500 max-w-sm">
            Strategy-first design ensures clarity before creativity.
          </p>
        </div>

      </div>
    </section>
  );
};

export default UltraPremiumSection;
