
import { ArrowRight } from "lucide-react";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function ServicesPage() {
    const blob1 = useRef(null);
    const blob2 = useRef(null);
    const blob3 = useRef(null);
    const badgeRef = useRef(null);
    const contentRef = useRef(null);
    const listRef = useRef(null);

    useEffect(() => {
        /* ---------------- BLOBS ---------------- */
        if (blob1.current) {
            gsap.to(blob1.current, {
                y: -120,
                scrollTrigger: {
                    trigger: blob1.current,
                    start: "top bottom",
                    end: "bottom top",
                    scrub: 1.2,
                },
            });
        }

        if (blob2.current) {
            gsap.to(blob2.current, {
                y: 160,
                scrollTrigger: {
                    trigger: blob2.current,
                    start: "top bottom",
                    end: "bottom top",
                    scrub: 1.6,
                },
            });
        }

        if (blob3.current) {
            gsap.to(blob3.current, {
                x: -140,
                scrollTrigger: {
                    trigger: blob3.current,
                    start: "top bottom",
                    end: "bottom top",
                    scrub: 2,
                },
            });
        }

        /* ---------------- HERO ENTRANCE ---------------- */
        if (badgeRef.current) {
            gsap.fromTo(
                badgeRef.current,
                { y: 20, opacity: 0 },
                { y: 0, opacity: 1, duration: 0.8, ease: "power2.out" }
            );
        }

        if (contentRef.current) {
            gsap.fromTo(
                Array.from(contentRef.current.children),
                { y: 40, opacity: 0 },
                {
                    y: 0,
                    opacity: 1,
                    duration: 1,
                    stagger: 0.12,
                    ease: "power3.out",
                    delay: 0.2,
                }
            );
        }

        /* ---------------- SERVICES LIST ---------------- */
        if (listRef.current) {
            gsap.fromTo(
                Array.from(listRef.current.children),
                { y: 40, opacity: 0 },
                {
                    y: 0,
                    opacity: 1,
                    stagger: 0.15,
                    duration: 1,
                    ease: "power3.out",
                    scrollTrigger: {
                        trigger: listRef.current,
                        start: "top 80%",
                    },
                }
            );
        }
    }, []);

    const services = [
        {
            title: "Web Development",
            desc: "High-performance websites engineered for speed, scalability and clarity.",
        },
        {
            title: "App Development",
            desc: "Cross-platform mobile applications with refined UX and robust architecture.",
        },
        {
            title: "Pre-Templates",
            desc: "Premium ready-made templates customised to feel fully bespoke.",
        },
        {
            title: "UI / UX Design",
            desc: "Human-centered interfaces that convert, guide and delight users.",
        },
        {
            title: "SEO Optimization",
            desc: "Search-first structure designed for long-term organic growth.",
        },
    ];

    return (
        <>
            {/* ================= HERO ================= */}
            <section className="relative min-h-screen overflow-hidden bg-[#f4f9fc] flex items-center">

                {/* Ghost text */}
                <div className="pointer-events-none absolute right-[6%] top-[10%] text-[220px] font-semibold text-[#003060]/5 select-none">
                    Services
                </div>

                {/* Vignette */}
                <div className="absolute inset-0 bg-gradient-to-b from-white/60 via-transparent to-[#f4f9fc]" />

                {/* Blobs */}
                <div className="absolute inset-0 pointer-events-none">
                    <div
                        ref={blob1}
                        className="absolute -top-40 -left-40 w-[600px] h-[600px] rounded-full blur-3xl animate-floatSlow"
                        style={{ backgroundColor: "rgba(104,187,227,0.45)" }}
                    />
                    <div
                        ref={blob2}
                        className="absolute top-1/3 -right-40 w-[520px] h-[520px] rounded-full blur-3xl animate-floatReverse"
                        style={{ backgroundColor: "rgba(14,134,212,0.35)" }}
                    />
                    <div
                        ref={blob3}
                        className="absolute bottom-0 left-1/3 w-[420px] h-[420px] rounded-full blur-3xl animate-floatSlow"
                        style={{ backgroundColor: "rgba(5,92,157,0.30)" }}
                    />
                </div>

                {/* Hero Content */}
                <div className="relative z-10 max-w-[1440px] mx-auto px-6 lg:px-24 py-24 w-full">
                    <div
                        ref={badgeRef}
                        className="inline-flex items-center gap-3 mb-14 rounded-full border border-[#003060]/25 bg-white/70 px-6 py-2 text-sm text-[#055c9d] backdrop-blur"
                    >
                        <span className="h-2 w-2 rounded-full bg-[#0e86d4]" />
                        Our Services
                    </div>

                    <div ref={contentRef}>
                        <h1 className="max-w-5xl text-[clamp(3.2rem,5.8vw,5.4rem)] leading-[1.02] font-medium text-[#003060]">
                            Digital services
                            <br />
                            crafted to feel
                            <span className="block text-[#0e86d4]">
                                effortless, modern & human
                            </span>
                        </h1>

                        <div className="mt-4 h-[120px] w-[420px] rounded-full bg-[#0e86d4]/20 blur-[90px]" />

                        <p className="mt-8 max-w-2xl text-[1.25rem] leading-relaxed text-[#055c9d]">
                            We blend strategy, design and engineering to build digital
                            experiences that feel intuitive on first interaction and powerful
                            over time.
                        </p>

                        <div className="mt-5">
                            <button className="group inline-flex items-center gap-4 rounded-full bg-[#003060] px-10 py-5 text-lg font-medium text-white shadow-xl shadow-[#003060]/25 transition hover:-translate-y-[3px]">
                                Start a project
                                <span className="flex h-9 w-9 items-center justify-center rounded-full bg-white/20 transition-transform group-hover:translate-x-1">
                                    <ArrowRight size={18} />
                                </span>
                            </button>
                        </div>
                    </div>
                </div>
            </section>

            {/* ================= GOD MODE SERVICES ================= */}
            {/* ================= PREMIUM LIGHT SERVICES ================= */}
            <section className="relative bg-[#f7fafc] pt-28 pb-40 overflow-hidden">




                <div className="relative z-10 max-w-[1440px] mx-auto px-6 lg:px-24">

                    {/* Heading */}
                    <div className="mb-32 max-w-3xl">
                        <p className="uppercase tracking-[0.35em] text-sm text-[#0e86d4] mb-6">
                            Capabilities
                        </p>

                        <h2 className="text-[clamp(3rem,5vw,4.2rem)] leading-[1.05] font-medium text-[#003060]">
                            Services designed
                            <br />
                            with clarity & intent
                        </h2>

                        <p className="mt-6 text-lg text-[#055c9d]">
                            Each service is built as a refined system — scalable, thoughtful
                            and designed to perform beautifully.
                        </p>
                    </div>

                    {/* Services Grid */}
                    <div ref={listRef} className="grid grid-cols-1 md:grid-cols-2 gap-16">

                        {services.map((service, i) => (
                            <div
                                key={i}
                                className="group relative overflow-hidden rounded-[28px] bg-white/70 backdrop-blur-xl p-12
                   border border-[#003060]/10 transition-all duration-700
                   hover:-translate-y-2 hover:shadow-2xl hover:shadow-[#003060]/10"
                            >

                                {/* Soft hover gradient */}
                                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700
                        bg-gradient-to-br from-[#68bbe3]/30 via-transparent to-[#0e86d4]/25" />

                                {/* Content */}
                                <div className="relative z-10">

                                    {/* Index */}
                                    <div className="absolute right-6 top-4 text-[88px] font-semibold text-[#003060]/5
                          transition-all duration-700 group-hover:translate-x-3 group-hover:scale-110">
                                        {`0${i + 1}`}
                                    </div>

                                    {/* Accent dot */}
                                    <div className="mb-8 h-3 w-3 rounded-full bg-[#0e86d4]" />

                                    <h3 className="text-3xl font-medium text-[#003060] mb-6">
                                        {service.title}
                                    </h3>

                                    <p className="max-w-md text-[#055c9d] leading-relaxed mb-10">
                                        {service.desc}
                                    </p>

                                    {/* CTA */}
                                    <div className="inline-flex items-center gap-4 text-[#003060] font-medium">
                                        Explore service
                                        <ArrowRight
                                            size={18}
                                            className="transition-transform duration-500 group-hover:translate-x-2"
                                        />
                                    </div>

                                </div>
                            </div>
                        ))}

                    </div>
                </div>
            </section>


            {/* ================= SECTION 3 : EDITORIAL NARRATIVE ================= */}
            <section className="bg-white pt-32 pb-40">

                <div className="max-w-[1440px] mx-auto px-6 lg:px-24">

                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-20">

                        {/* LEFT — STICKY NARRATIVE */}
                        <div className="lg:col-span-5 lg:sticky lg:top-40 h-fit">

                            <p className="uppercase tracking-[0.35em] text-sm text-[#0e86d4] mb-6">
                                How we work
                            </p>

                            <h2 className="text-[clamp(3rem,5vw,4.2rem)] leading-[1.05] font-medium text-[#003060]">
                                We don’t follow
                                <br />
                                trends —
                                <br />
                                we build
                                <br />
                                systems
                            </h2>

                            <p className="mt-8 text-lg text-[#055c9d] max-w-md">
                            Our proven process removes friction, reduces guesswork, and delivers high-performing digital products that are built to scale — with clarity, speed, and confidence.
                            </p>
                        </div>

                        {/* RIGHT — FLOW CONTENT */}
                        <div className="lg:col-span-7 space-y-32">

                            {/* Block 01 */}
                            <div className="relative">
                                <div className="absolute -left-16 top-0 text-[120px] font-semibold text-[#003060]/5">
                                    01
                                </div>

                                <h3 className="text-3xl font-medium text-[#003060] mb-6">
                                    Strategy before screens
                                </h3>

                                <p className="text-[#055c9d] text-lg leading-relaxed max-w-xl">
                                Before design or development begins, we align on your business goals, target audience behavior, and long-term growth vision — so every decision is intentional, measurable, and built to deliver real results.
                                    
                                </p>
                            </div>

                            {/* Block 02 */}
                            <div className="relative">
                                <div className="absolute -left-16 top-0 text-[120px] font-semibold text-[#003060]/5">
                                    02
                                </div>

                                <h3 className="text-3xl font-medium text-[#003060] mb-6">
                                    Design that feels inevitable
                                </h3>

                                <p className="text-[#055c9d] text-lg leading-relaxed max-w-xl">
                                We design user-first interfaces that feel instantly intuitive — not because they’re basic, but because every interaction is strategically planned, usability-tested, and built for clarity, speed, and conversions.
                                </p>
                            </div>

                            {/* Block 03 */}
                            <div className="relative">
                                <div className="absolute -left-16 top-0 text-[120px] font-semibold text-[#003060]/5">
                                    03
                                </div>

                                <h3 className="text-3xl font-medium text-[#003060] mb-6">
                                    Engineering with intent
                                </h3>

                                <p className="text-[#055c9d] text-lg leading-relaxed max-w-xl">
                                    Clean architecture, modern stacks and performance-first
                                    decisions ensure what we build lasts — and scales.
                                </p>
                            </div>

                            {/* Block 04 */}
                            <div className="relative">
                                <div className="absolute -left-16 top-0 text-[120px] font-semibold text-[#003060]/5">
                                    04
                                </div>

                                <h3 className="text-3xl font-medium text-[#003060] mb-6">
                                    Launch is just the beginning
                                </h3>

                                <p className="text-[#055c9d] text-lg leading-relaxed max-w-xl">
                                    Post-launch, we optimise, iterate and support growth —
                                    treating products as living systems, not one-time projects.
                                </p>
                            </div>

                        </div>
                    </div>
                </div>
            </section>


            {/* ================= SECTION 4 : FINAL CTA ================= */}
            <section className="bg-white pt-32 pb-32">

                <div className="max-w-[1440px] mx-auto px-6 lg:px-24">

                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-20 items-end">

                        {/* LEFT — MESSAGE */}
                        <div className="lg:col-span-7">

                            <p className="uppercase tracking-[0.35em] text-sm text-[#0e86d4] mb-8">
                                Ready when you are
                            </p>

                            <h2 className="text-[clamp(3.2rem,6vw,5rem)] leading-[1.02] font-medium text-[#003060]">
                                Let’s build something
                                <br />
                                that actually matters
                            </h2>

                            <p className="mt-8 text-lg text-[#055c9d] max-w-xl">
                                Whether you’re launching a new product, redesigning an existing
                                experience or scaling your business — we’re ready to collaborate.
                            </p>
                        </div>

                        {/* RIGHT — ACTION */}
                        <div className="lg:col-span-5 flex lg:justify-end">

                            <div className="flex flex-col items-start gap-6">

                                <button className="group inline-flex items-center gap-6 rounded-full bg-[#003060] px-12 py-6 text-xl font-medium text-white shadow-xl shadow-[#003060]/25 transition hover:-translate-y-[3px]">
                                    Start a project
                                    <span className="flex h-10 w-10 items-center justify-center rounded-full bg-white/20 transition-transform group-hover:translate-x-2">
                                        →
                                    </span>
                                </button>

                                <p className="text-[#055c9d] text-sm max-w-xs">
                                    Prefer email?
                                    <span className="underline underline-offset-4 ml-1 cursor-pointer">
                                        hello@yourstudio.com
                                    </span>
                                </p>

                            </div>
                        </div>
                    </div>

                    {/* Divider */}
                    <div className="mt-32 h-px w-full bg-[#003060]/10" />

                </div>
            </section>


        </>
    );
}





