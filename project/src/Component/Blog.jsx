import React from "react";
import { Link } from "react-router-dom";

const posts = [
  {
    id: 1,
    title: "Designing calm digital experiences",
    excerpt:
      "Why clarity, restraint, and intention matter more than trends in modern web design.",
    date: "Aug 12, 2025",
    category: "Design",
  },
  {
    id: 2,
    title: "How performance shapes user trust",
    excerpt:
      "Fast websites don’t just convert better — they feel more trustworthy.",
    date: "Jul 28, 2025",
    category: "Development",
  },
  {
    id: 3,
    title: "Brand systems that scale",
    excerpt:
      "A practical look at building brand systems that grow with your business.",
    date: "Jul 10, 2025",
    category: "Branding",
  },
];

export default function Blog() {
  return (
    <section className="bg-[#F4F9FC] min-h-screen">

      {/* HERO */}
      <div className="max-w-[1440px] mx-auto px-6 sm:px-12 lg:px-24 pt-36 pb-28">
        <p className="text-xs tracking-[0.35em] uppercase text-[#0E86D4]">
          Journal
        </p>

        <h1 className="mt-6 max-w-4xl text-[clamp(2.6rem,6vw,4.4rem)] leading-[1.05] font-medium text-[#003060]">
          Thoughts on design,
          <br />
          technology & clarity.
        </h1>

        <p className="mt-8 max-w-xl text-lg text-[#055C9D]">
          Insights from our studio — exploring how calm design and thoughtful
          engineering create meaningful digital experiences.
        </p>
      </div>

      {/* FEATURED */}
      <div className="max-w-[1440px] mx-auto px-6 sm:px-12 lg:px-24 mb-32">
        <div className="border border-[rgba(0,48,96,0.12)] rounded-3xl p-10 sm:p-14 bg-white/70 backdrop-blur-xl">

          <p className="text-xs tracking-[0.3em] uppercase text-[#0E86D4]">
            Featured
          </p>

          <h2 className="mt-6 text-[clamp(2rem,5vw,3rem)] font-light text-[#003060]">
            Designing calm digital experiences
          </h2>

          <p className="mt-6 max-w-2xl text-[#055C9D] text-lg">
            A deeper look into how restraint, hierarchy, and clarity shape
            premium digital products — and why calm is the new competitive
            advantage.
          </p>

          <Link
            to="/blog/designing-calm-digital-experiences"
            className="group inline-flex items-center gap-4 mt-10 text-lg font-medium text-[#003060]"
          >
            Read article
            <span className="h-[2px] w-12 bg-[#0E86D4] transition-all duration-300 group-hover:w-24" />
          </Link>
        </div>
      </div>

      {/* LIST */}
      <div className="max-w-[1440px] mx-auto px-6 sm:px-12 lg:px-24 pb-32">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16">

          {posts.map((post) => (
            <article key={post.id} className="group">
              <p className="text-xs tracking-[0.3em] uppercase text-[#0E86D4]">
                {post.category}
              </p>

              <h3 className="mt-4 text-xl font-medium text-[#003060] leading-snug">
                {post.title}
              </h3>

              <p className="mt-4 text-[#055C9D] leading-relaxed">
                {post.excerpt}
              </p>

              <div className="mt-6 flex items-center justify-between">
                <span className="text-sm text-[#055C9D]">
                  {post.date}
                </span>

                <Link
                  to={`/blog/${post.id}`}
                  className="relative text-sm font-medium text-[#003060]"
                >
                  Read
                  <span className="absolute left-0 -bottom-1 h-[1.5px] w-0 bg-[#0E86D4] transition-all duration-300 group-hover:w-full" />
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>

    </section>
  );
}