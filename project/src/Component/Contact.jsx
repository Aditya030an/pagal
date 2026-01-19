import { useEffect, useRef } from "react";
import gsap from "gsap";

export default function ContactPegolPremium() {
  const sectionRef = useRef(null);
  const contentRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      contentRef.current.children,
      { y: 60, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 1.1,
        stagger: 0.15,
        ease: "power3.out",
      }
    );
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative min-h-screen bg-[#ffff] overflow-hidden flex items-center"
    >
      {/* Soft luxury blobs */}
      <div className="absolute -top-40 -left-40 h-[520px] w-[520px] rounded-full bg-[#B9DFF2] blur-[120px]" />
      <div className="absolute top-1/3 -right-40 h-[480px] w-[480px] rounded-full bg-[#B8D7F0] blur-[120px]" />

      {/* Ghost Word */}
      <div className="absolute right-[6%] top-24 text-[220px] font-semibold text-[#E6E1DA] select-none">
        Contact
      </div>

      <div
        ref={contentRef} 
        className="relative max-w-7xl mx-auto px-6 w-full py-32"
      >
        {/* Editorial Heading */}
        <div className="max-w-2xl mb-28">
          <p className="text-sm uppercase tracking-widest text-[#7B5A4A]">
            Get in touch
          </p>
          <h1 className="mt-6 text-[clamp(3rem,7vw,5.5rem)] font-semibold leading-[1.05] text-[#1E1E1E]">
            Let’s build<br />something meaningful
          </h1>
        </div>

        {/* Main Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24">

          {/* Left Content */}
          <div className="space-y-10 text-lg text-[#6F6F6F] max-w-xl">
            <p>
              Pegol collaborates with ambitious brands to create calm,
              intentional digital experiences — built to last.
            </p>

            <div className="space-y-6">
              <p>
                <span className="block text-[#1E1E1E] font-medium">Email</span>
                pegalagency@gmail.com
              </p>
              <p>
                <span className="block text-[#1E1E1E] font-medium">Location</span>
                India · Working worldwide
              </p>
            </div>
          </div>

          {/* Form */}
          <form className="relative bg-white/70 backdrop-blur-xl border border-[#E5E1DA] rounded-[32px] p-12 space-y-10">

            <input
              type="text"
              placeholder="Your name"
              className="w-full bg-transparent border-b border-[#D6D0C8] py-4 outline-none focus:border-[#7B5A4A]"
            />

            <input
              type="email"
              placeholder="Your email"
              className="w-full bg-transparent border-b border-[#D6D0C8] py-4 outline-none focus:border-[#7B5A4A]"
            />

            <textarea
              placeholder="Tell us about your project"
              rows="4"
              className="w-full bg-transparent border-b border-[#D6D0C8] py-4 outline-none focus:border-[#7B5A4A]"
            />

            <button
              type="submit"
              className="group flex items-center gap-6 pt-4"
            >
              <span className="text-lg font-medium text-[#1E1E1E]">
                Send message
              </span>
              <span className="h-[1.5px] w-14 bg-[#7B5A4A] transition-all duration-300 group-hover:w-24" />
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}