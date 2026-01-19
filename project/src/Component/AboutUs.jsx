import { useEffect, useRef } from "react";
import gsap from "gsap";

export default function AboutHero() {
  const contentRef = useRef(null);

  useEffect(() => {
    if (!contentRef.current) return;

    gsap.fromTo(
      Array.from(contentRef.current.children),
      { y: 40, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 1,
        stagger: 0.12,
        ease: "power3.out",
      }
    );
  }, []);

  return (
    <>
      <section className="relative min-h-screen bg-[#f4f9fc] flex items-center overflow-hidden">

        {/* Ghost word */}
        <div className="pointer-events-none absolute right-[10%] top-[12%] text-[220px] font-semibold text-[#003060]/5 select-none">
          Pegol
        </div>

        {/* Soft vignette */}
        <div className="absolute inset-0 bg-gradient-to-b from-white/70 via-transparent to-[#f4f9fc]" />

        {/* Content */}
        <div className="relative z-10 max-w-[1440px] mx-auto px-6 lg:px-24 py-24 w-full">
          <div ref={contentRef} className="max-w-4xl">

            <p className="uppercase tracking-[0.35em] text-sm text-[#0e86d4] mb-10">
              About Pegol
            </p>

            <h1 className="text-[clamp(3.2rem,6vw,5.4rem)] leading-[1.02] font-medium text-[#003060]">
              We design digital
              <br />
              systems —
              <br />
              not just interfaces
            </h1>

            <div className="mt-2 h-[120px] w-[420px] rounded-full bg-[#0e86d4]/20 blur-[90px]" />

            <p className="mt-6 text-[1.25rem] leading-relaxed text-[#055c9d] max-w-2xl">
              <span className="font-medium text-[#003060]">Pegal</span> is a design & tech studio that builds scroll-stopping, conversion-ready digital products — crafted with sharp strategy, clean design, and future-proof development
            </p>

          </div>
        </div>
      </section>



      <section className="bg-white pt-32 pb-40">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-24">

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-24">

            {/* LEFT — PEGOL (ORIGIN) */}
            <div className="lg:col-span-4">
              <div className="lg:sticky lg:top-40">

                <h2 className="text-[clamp(3.6rem,6vw,5rem)] leading-[1] font-medium text-[#003060]/80">
                  Pegal
                </h2>

                <p className="mt-6 text-[#055c9d] text-lg max-w-xs">
                  Our original identity —
                  where the journey began.
                </p>

              </div>
            </div>

            {/* RIGHT — STORY */}
            <div className="lg:col-span-8">

              <p className="uppercase tracking-[0.35em] text-sm text-[#0e86d4] mb-10">
                About the studio
              </p>

              <h3 className="text-[clamp(2.6rem,4.5vw,3.8rem)] leading-[1.06] font-medium text-[#003060] mb-12">
                From Pegal to Pegal —
                <br />
                an evolution shaped
                <br />
                by clarity
              </h3>

              <div className="space-y-10 max-w-3xl text-[#055c9d] text-lg leading-relaxed">

                <p>
                  <span className="font-medium text-[#003060]">Pegal</span> was the 
                   start of our story — a name that captured our early curiosity, experimentation, and hands-on work building digital products for growing businesses.

                </p>

                <p>
                As our experience expanded, so did our approach. We moved beyond designing individual screens and features, and began building complete digital systems — blending strategy, UI/UX design, and scalable development to support long-term growth.

                </p>

                <p>
                Over time, we realized our original identity no longer reflected who we are today. The way we work, the problems we solve, and the founders and teams we partner with have all evolved.

                </p>

                <p>
                  <span className="font-medium text-[#003060]">Pegal</span> isn’t a departure from Pegal — it’s a refinement. A clearer, more intentional expression of the same values: simplicity, thoughtful design, strong technology, and products built to last.

                </p>

                This rebrand represents alignment — between our name, our voice, and the kind of high-performing websites, apps, and digital experiences we design and build today.

              </div>

            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#f4f9fc] pt-40 pb-48">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-24">

          {/* Heading */}
          <div className="mb-32 max-w-4xl">
            <p className="uppercase tracking-[0.35em] text-sm text-[#0e86d4] mb-8">
              Why Pegal
            </p>

            <h2 className="text-[clamp(3rem,5vw,4.4rem)] leading-[1.04] font-medium text-[#003060]">
              From scroll to sale 
              <br />
              — we design the journey.
            </h2>

            <p className="mt-8 text-lg text-[#055c9d] max-w-2xl">
              Our approach is shaped by restraint, clarity and long-term thinking —
              not by trends, shortcuts or quick wins.
            </p>
          </div>

          {/* Comparison Blocks */}
          <div className="space-y-28 max-w-5xl">

            {/* Block 1 */}
            <div>
              <h3 className="text-2xl font-medium text-[#003060] mb-4">
                Systems over surface
              </h3>
              <p className="text-[#055c9d] text-lg leading-relaxed max-w-3xl">
                While many studios focus on how things look, we prioritise how
                they work. Design systems, scalable architecture and thoughtful
                decisions ensure our work remains useful long after launch.
              </p>
            </div>

            {/* Block 2 */}
            <div>
              <h3 className="text-2xl font-medium text-[#003060] mb-4">
                Clarity beats complexity
              </h3>
              <p className="text-[#055c9d] text-lg leading-relaxed max-w-3xl">
                We simplify where others complicate. Clear structure, intentional
                interfaces and honest communication define how we design and
                collaborate.
              </p>
            </div>

            {/* Block 3 */}
            <div>
              <h3 className="text-2xl font-medium text-[#003060] mb-4">
                Built for longevity
              </h3>
              <p className="text-[#055c9d] text-lg leading-relaxed max-w-3xl">
              Our work is built to last. We use proven, scalable technologies and clean development practices to create future-ready websites and digital products that grow with your business — not hold it back.
              </p>
            </div>

            {/* Block 4 */}
            <div>
              <h3 className="text-2xl font-medium text-[#003060] mb-4">
                Partnership, not production
              </h3>
              <p className="text-[#055c9d] text-lg leading-relaxed max-w-3xl">
                We don’t operate as a task-based vendor. We collaborate closely,
                challenge assumptions when needed, and align ourselves with your
                long-term goals.
              </p>
            </div>

          </div>
        </div>
      </section>




      <section className="bg-white pt-40 pb-48">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-24">

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-24">

            {/* LEFT — CONTEXT */}
            <div className="lg:col-span-5">
              <p className="uppercase tracking-[0.35em] text-sm text-[#0e86d4] mb-8">
                Culture & Mindset
              </p>

              <h2 className="text-[clamp(2.8rem,5vw,4.2rem)] leading-[1.05] font-medium text-[#003060]">
                How we think,
                <br />
                collaborate
                <br />
                and build
              </h2>
            </div>

            {/* RIGHT — CONTENT */}
            <div className="lg:col-span-7">

              <div className="space-y-12 max-w-3xl text-[#055c9d] text-lg leading-relaxed">

                <p>
                  At <span className="font-medium text-[#003060]">Pegal</span>, we value clarity over speed and strategy over noise. We take time to understand your business, users, and goals before we build — because the right decision early creates a smoother process, better performance, and long-term results.

                </p>

                <p>
                We work best with teams who see websites and digital products as evolving systems, not one-time deliverables. Through collaboration, honest feedback, and shared ownership, we create high-performing websites, web apps, and brand experiences that stay relevant as your business grows.

                </p>

                <p>
                Our process is structured, flexible, and transparent. From planning and UX to development, SEO, and launch, we communicate clearly at every stage — adapting when needed without losing focus on outcomes.

                </p>

                <p>
                We believe the best work comes from calm execution, mutual respect, and realistic timelines. No chaos. No unnecessary pressure. Just focused, thoughtful progress — and digital work that’s built to last.
                </p>

              </div>

            </div>
          </div>
        </div>
      </section>


      <section className="bg-[#f4f9fc] pt-40 pb-48">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-24">

          <div className="max-w-4xl">

            <p className="uppercase tracking-[0.35em] text-sm text-[#0e86d4] mb-10">
              Let’s talk
            </p>

            <h2 className="text-[clamp(3rem,5vw,4.4rem)] leading-[1.04] font-medium text-[#003060]">
              If our way of thinking
              <br />
              resonates with you,
              <br />
              we’d love to collaborate
            </h2>

            <p className="mt-10 text-lg text-[#055c9d] max-w-2xl leading-relaxed">
              Whether you’re exploring ideas, planning a new product, or simply
              looking for the right long-term partner — we’re always open to
              thoughtful conversations.
            </p>

            <div className="mt-12 flex flex-wrap items-center gap-8">

              <a
                href="/contact"
                className="inline-flex items-center gap-4 rounded-full bg-[#003060] px-10 py-5 text-lg font-medium text-white shadow-lg shadow-[#003060]/25 transition hover:-translate-y-[2px]"
              >
                Start a conversation
                <span className="text-xl">→</span>
              </a>

              <span className="text-[#055c9d] text-lg">
                or email us at{" "}
                <a
                  href="mailto:hello@yourstudio.com"
                  className="underline underline-offset-4"
                >
                  hello@yourstudio.com
                </a>
              </span>

            </div>

          </div>
        </div>
      </section>




      <section className="bg-white py-40">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-24">

          <div className="max-w-5xl">

            {/* Quote mark */}


            <div className="relative max-w-5xl">

              {/* Opening quote */}
              <div className="text-[120px] leading-none font-serif text-[#003060]/10 mb-6">
                “
              </div>

              {/* Quote */}
              <blockquote className="text-[clamp(2.2rem,4vw,3.4rem)] leading-[1.15] font-medium text-[#003060]">
                Design is not how something looks.
                <br />
                It’s how clearly it understands
                <br />
                the people who use it.
              </blockquote>

              {/* Closing quote */}
              <div className="absolute right-0 bottom-[-40px] text-[120px] leading-none font-serif text-[#003060]/10">
                ”
              </div>

            </div>







            {/* Divider */}
            <div className="mt-16 h-px w-24 bg-[#003060]/20" />

            {/* Attribution */}
            <p className="mt-8 text-lg text-[#055c9d]">
              Our philosophy at <span className="font-medium text-[#003060]">Pegol</span>
            </p>

          </div>
        </div>
      </section>

    </>
  );
}
