

// import React, { useRef, useMemo } from "react";
// import { Canvas, useFrame, useThree } from "@react-three/fiber";
// import * as THREE from "three";

// /* ============================
//    WOW DOT MATRIX (PARTICLES + LINES)
// ============================ */
// function WowDots() {
//   const pointsRef = useRef();
//   const linesRef = useRef();
//   const { mouse } = useThree();

//   const COUNT = 1200;
//   const MAX_DIST = 0.7;

//   const positions = useMemo(() => {
//     const arr = new Float32Array(COUNT * 3);
//     for (let i = 0; i < COUNT; i++) {
//       arr[i * 3] = (Math.random() - 0.5) * 14;
//       arr[i * 3 + 1] = (Math.random() - 0.5) * 10;
//       arr[i * 3 + 2] = -Math.random() * 6;
//     }
//     return arr;
//   }, []);

//   const linePositions = useMemo(
//     () => new Float32Array(COUNT * COUNT * 6),
//     []
//   );

//   useFrame(({ clock }) => {
//     const time = clock.elapsedTime;
//     const pos = pointsRef.current.geometry.attributes.position.array;

//     // DOT MOTION
//     for (let i = 0; i < COUNT; i++) {
//       const i3 = i * 3;

//       pos[i3 + 1] += Math.sin(time * 0.5 + pos[i3]) * 0.0015;
//       pos[i3] += Math.cos(time * 0.4 + pos[i3 + 1]) * 0.001;

//       // mouse magnetic field
//       pos[i3] += mouse.x * 0.003;
//       pos[i3 + 1] += mouse.y * 0.003;
//     }

//     pointsRef.current.geometry.attributes.position.needsUpdate = true;

//     // LINE CONNECTIONS
//     let ptr = 0;
//     for (let i = 0; i < COUNT; i++) {
//       for (let j = i + 1; j < COUNT; j++) {
//         const ax = pos[i * 3];
//         const ay = pos[i * 3 + 1];
//         const az = pos[i * 3 + 2];
//         const bx = pos[j * 3];
//         const by = pos[j * 3 + 1];
//         const bz = pos[j * 3 + 2];

//         const dx = ax - bx;
//         const dy = ay - by;
//         const dz = az - bz;
//         const dist = Math.sqrt(dx * dx + dy * dy + dz * dz);

//         if (dist < MAX_DIST) {
//           linePositions[ptr++] = ax;
//           linePositions[ptr++] = ay;
//           linePositions[ptr++] = az;
//           linePositions[ptr++] = bx;
//           linePositions[ptr++] = by;
//           linePositions[ptr++] = bz;
//         }
//       }
//     }

//     linesRef.current.geometry.setDrawRange(0, ptr / 3);
//     linesRef.current.geometry.attributes.position.needsUpdate = true;
//   });

//   return (
//     <>
//       {/* DOTS */}
//       <points ref={pointsRef}>
//         <bufferGeometry>
//           <bufferAttribute
//             attach="attributes-position"
//             count={COUNT}
//             array={positions}
//             itemSize={3}
//           />
//         </bufferGeometry>
//         <pointsMaterial
//           size={0.045}
//           color="#64748b"
//           transparent
//           opacity={0.55}
//           depthWrite={false}
//         />
//       </points>

//       {/* LINES */}
//       <lineSegments ref={linesRef}>
//         <bufferGeometry>
//           <bufferAttribute
//             attach="attributes-position"
//             count={linePositions.length / 3}
//             array={linePositions}
//             itemSize={3}
//           />
//         </bufferGeometry>
//         <lineBasicMaterial
//           color="#cbd5f5"
//           transparent
//           opacity={0.4}
//         />
//       </lineSegments>
//     </>
//   );
// }

// /* ============================
//    CARD
// ============================ */
// const AuditCard = ({ title, desc, index }) => (
//   <div
//     className="bg-white p-8 rounded-[1.8rem]
//     shadow-[0_20px_60px_-30px_rgba(0,0,0,0.25)]
//     transition-transform duration-700 hover:-translate-y-1"
//   >
//     <p className="text-xs tracking-widest text-slate-400 mb-1">
//       0{index + 1}
//     </p>
//     <h3 className="text-xl font-medium text-slate-900">
//       {title}
//     </h3>
//     <p className="text-slate-600 mt-2 leading-relaxed">
//       {desc}
//     </p>
//   </div>
// );

// /* ============================
//    MAIN SECTION (CONTENT SAME)
// ============================ */
// const FreeWebsiteAudit = () => {
//   return (
//     <section className="relative overflow-hidden bg-[#f9fafb] py-28">
      

//       {/* WOW BACKGROUND */}
//       <div className="absolute inset-0 pointer-events-none">
//         <Canvas camera={{ position: [0, 0, 6], fov: 55 }}>
//           <ambientLight intensity={1} />
//           <WowDots />
//         </Canvas>
//       </div>






//       {/* CONTENT */}
//       <div className="relative z-10 max-w-[1200px] mx-auto px-10">

//         <div className="max-w-3xl mb-20">
//           <p className="text-xs uppercase tracking-[0.35em] text-slate-500 mb-6">
//             A PEGOL Audit
//           </p>

//           <h1 className="text-[clamp(2.6rem,4vw,4.2rem)] font-medium leading-[1.1] text-slate-900">
//             A clear, expert review of your website —
//             <br />
//             <span className="text-slate-500">
//               focused on what truly matters.
//             </span>
//           </h1>

//           <p className="mt-8 text-lg text-slate-600 max-w-2xl">
//             We manually review your website for clarity, performance,
//             structure, and conversion readiness. No automation.
//             No generic feedback.
//           </p>
//         </div>

//         <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">

//           <div className="lg:col-span-7 space-y-16">
//             <div>
//               <p className="text-sm font-medium text-slate-700 mb-8">
//                 What we review
//               </p>
//               <div className="space-y-8">
//                 <AuditCard index={0} title="Design & UX" desc="Hierarchy, spacing, readability, and user flow." />
//                 <AuditCard index={1} title="Performance" desc="Load speed, responsiveness, and technical efficiency." />
//                 <AuditCard index={2} title="SEO foundations" desc="Structure, metadata, and content clarity." />
//                 <AuditCard index={3} title="Conversion clarity" desc="Messaging, calls-to-action, and trust signals." />
//               </div>
//             </div>

//             <div>
//               <p className="text-sm font-medium text-slate-700 mb-6">
//                 How it works
//               </p>
//               <ul className="space-y-4 text-lg text-slate-600">
//                 <li>We review your website manually, page by page.</li>
//                 <li>We identify issues, opportunities, and priorities.</li>
//                 <li>You receive a concise, actionable audit summary.</li>
//               </ul>
//             </div>
//           </div>

//           <div className="lg:col-span-5 sticky top-28">
//             <div className="bg-white p-10 rounded-[2.5rem]
//               shadow-[0_30px_80px_-40px_rgba(0,0,0,0.25)]">
//               <p className="text-slate-900 font-medium text-xl mb-2">
//                 Request your free audit
//               </p>
//               <p className="text-slate-600 mb-8">
//                 Share your website. We’ll take it from here.
//               </p>

//               <form className="space-y-6">
//                 <input placeholder="Your name" className="input" />
//                 <input placeholder="Email address" className="input" />
//                 <input placeholder="Website URL" className="input" />
//                 <button className="w-full py-4 bg-slate-900 text-white rounded-full">
//                   Request audit
//                 </button>
//               </form>

//               <p className="mt-6 text-sm text-slate-500">
//                 Manual review • Delivered within 48 hours
//               </p>
//             </div>
//           </div>
//         </div>
//       </div>

//       <style>{`
//         .input {
//           width: 100%;
//           border-bottom: 1px solid rgba(15,23,42,0.3);
//           padding: 10px 0;
//           outline: none;
//           background: transparent;
//           font-size: 16px;
//         }
//         .input::placeholder {
//           color: rgba(15,23,42,0.45);
//         }
//       `}</style>
//     </section>
//   );
// };

// export default FreeWebsiteAudit;














// import React, { useRef, useMemo } from "react";
// import { Canvas, useFrame, useThree } from "@react-three/fiber";
// import * as THREE from "three";

// /* ============================
//    WOW DOT MATRIX (PARTICLES + LINES)
// ============================ */
// function WowDots() {
//   const pointsRef = useRef();
//   const linesRef = useRef();
//   const { mouse } = useThree();

//   const COUNT = 1200;
//   const MAX_DIST = 0.7;

//   const positions = useMemo(() => {
//     const arr = new Float32Array(COUNT * 3);
//     for (let i = 0; i < COUNT; i++) {
//       arr[i * 3] = (Math.random() - 0.5) * 14;
//       arr[i * 3 + 1] = (Math.random() - 0.5) * 10;
//       arr[i * 3 + 2] = -Math.random() * 6;
//     }
//     return arr;
//   }, []);

//   const linePositions = useMemo(
//     () => new Float32Array(COUNT * COUNT * 6),
//     []
//   );

//   useFrame(({ clock }) => {
//     const time = clock.elapsedTime;
//     const pos = pointsRef.current.geometry.attributes.position.array;

//     // DOT MOTION
//     for (let i = 0; i < COUNT; i++) {
//       const i3 = i * 3;

//       pos[i3 + 1] += Math.sin(time * 0.5 + pos[i3]) * 0.0015;
//       pos[i3] += Math.cos(time * 0.4 + pos[i3 + 1]) * 0.001;

//       // mouse magnetic field
//       pos[i3] += mouse.x * 0.003;
//       pos[i3 + 1] += mouse.y * 0.003;
//     }

//     pointsRef.current.geometry.attributes.position.needsUpdate = true;

//     // LINE CONNECTIONS
//     let ptr = 0;
//     for (let i = 0; i < COUNT; i++) {
//       for (let j = i + 1; j < COUNT; j++) {
//         const ax = pos[i * 3];
//         const ay = pos[i * 3 + 1];
//         const az = pos[i * 3 + 2];
//         const bx = pos[j * 3];
//         const by = pos[j * 3 + 1];
//         const bz = pos[j * 3 + 2];

//         const dx = ax - bx;
//         const dy = ay - by;
//         const dz = az - bz;
//         const dist = Math.sqrt(dx * dx + dy * dy + dz * dz);

//         if (dist < MAX_DIST) {
//           linePositions[ptr++] = ax;
//           linePositions[ptr++] = ay;
//           linePositions[ptr++] = az;
//           linePositions[ptr++] = bx;
//           linePositions[ptr++] = by;
//           linePositions[ptr++] = bz;
//         }
//       }
//     }

//     linesRef.current.geometry.setDrawRange(0, ptr / 3);
//     linesRef.current.geometry.attributes.position.needsUpdate = true;
//   });

//   return (
//     <>
//       {/* DOTS */}
//       <points ref={pointsRef}>
//         <bufferGeometry>
//           <bufferAttribute
//             attach="attributes-position"
//             count={COUNT}
//             array={positions}
//             itemSize={3}
//           />
//         </bufferGeometry>
//         <pointsMaterial
//           size={0.045}
//           color="#64748b"
//           transparent
//           opacity={0.55}
//           depthWrite={false}
//         />
//       </points>

//       {/* LINES */}
//       <lineSegments ref={linesRef}>
//         <bufferGeometry>
//           <bufferAttribute
//             attach="attributes-position"
//             count={linePositions.length / 3}
//             array={linePositions}
//             itemSize={3}
//           />
//         </bufferGeometry>
//         <lineBasicMaterial
//           color="#cbd5f5"
//           transparent
//           opacity={0.4}
//         />
//       </lineSegments>
//     </>
//   );
// }

// /* ============================
//    CARD
// ============================ */
// const AuditCard = ({ title, desc, index }) => (
//   <div
//     className="bg-white p-8 rounded-[1.8rem]
//     shadow-[0_20px_60px_-30px_rgba(0,0,0,0.25)]
//     transition-transform duration-700 hover:-translate-y-1"
//   >
//     <p className="text-xs tracking-widest text-slate-400 mb-1">
//       0{index + 1}
//     </p>
//     <h3 className="text-xl font-medium text-slate-900">
//       {title}
//     </h3>
//     <p className="text-slate-600 mt-2 leading-relaxed">
//       {desc}
//     </p>
//   </div>
// );

// /* ============================
//    MAIN SECTION (CONTENT SAME)
// ============================ */
// const FreeWebsiteAudit = () => {
//   return (
//     <section className="relative overflow-hidden bg-[#f9fafb] py-28">
      

//       {/* WOW BACKGROUND */}
//       <div className="absolute inset-0 pointer-events-none">
//         <Canvas camera={{ position: [0, 0, 6], fov: 55 }}>
//           <ambientLight intensity={1} />
//           <WowDots />
//         </Canvas>
//       </div>






//       {/* CONTENT */}
//       <div className="relative z-10 max-w-[1200px] mx-auto px-10">

//         <div className="max-w-3xl mb-20">
//           <p className="text-xs uppercase tracking-[0.35em] text-slate-500 mb-6">
//             A PEGOL Audit
//           </p>

//           <h1 className="text-[clamp(2.6rem,4vw,4.2rem)] font-medium leading-[1.1] text-slate-900">
//             A clear, expert review of your website —
//             <br />
//             <span className="text-slate-500">
//               focused on what truly matters.
//             </span>
//           </h1>

//           <p className="mt-8 text-lg text-slate-600 max-w-2xl">
//             We manually review your website for clarity, performance,
//             structure, and conversion readiness. No automation.
//             No generic feedback.
//           </p>
//         </div>

//         <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">

//           <div className="lg:col-span-7 space-y-16">
//             <div>
//               <p className="text-sm font-medium text-slate-700 mb-8">
//                 What we review
//               </p>
//               <div className="space-y-8">
//                 <AuditCard index={0} title="Design & UX" desc="Hierarchy, spacing, readability, and user flow." />
//                 <AuditCard index={1} title="Performance" desc="Load speed, responsiveness, and technical efficiency." />
//                 <AuditCard index={2} title="SEO foundations" desc="Structure, metadata, and content clarity." />
//                 <AuditCard index={3} title="Conversion clarity" desc="Messaging, calls-to-action, and trust signals." />
//               </div>
//             </div>

//             <div>
//               <p className="text-sm font-medium text-slate-700 mb-6">
//                 How it works
//               </p>
//               <ul className="space-y-4 text-lg text-slate-600">
//                 <li>We review your website manually, page by page.</li>
//                 <li>We identify issues, opportunities, and priorities.</li>
//                 <li>You receive a concise, actionable audit summary.</li>
//               </ul>
//             </div>
//           </div>




//         <div className="lg:col-span-5 sticky top-28">
//           <div className="bg-white p-10 rounded-[2.5rem] shadow-[0_30px_80px_-40px_rgba(0,0,0,0.25)]">
//             <p className="text-xl font-medium mb-6">Request free audit</p>

//             <form className="space-y-8">

//               {/* SELECT */}
//               <div>
//                 <p className="text-sm text-slate-600 mb-4">What do you want audited?</p>
//                 <div className="grid grid-cols-2 gap-3">
//                   {["Website", "Mobile App", "SEO", "Design"].map((type) => (
//                     <button
//                       type="button"
//                       key={type}
//                       onClick={() => setAuditType(type)}
//                       className={`px-4 py-3 rounded-full text-sm border transition-all
//                         ${auditType === type
//                           ? "bg-slate-900 text-white border-slate-900"
//                           : "bg-white text-slate-600 border-slate-300 hover:border-slate-500"
//                         }`}
//                     >
//                       {type}
//                     </button>
//                   ))}
//                 </div>
//               </div>

//               <input placeholder="Your name" className="input" />
//               <input placeholder="Email address" className="input" />
//               <input placeholder={getPlaceholder()} className="input" disabled={!auditType} />

//               <button
//                 disabled={!auditType}
//                 className={`w-full py-4 rounded-full
//                   ${!auditType ? "bg-slate-300 text-slate-500" : "bg-slate-900 text-white"}`}
//               >
//                 Request audit
//               </button>

//             </form>
//           </div>
//         </div>




//         </div>
//       </div>

//       <style>{`
//         .input {
//           width: 100%;
//           border-bottom: 1px solid rgba(15,23,42,0.3);
//           padding: 10px 0;
//           outline: none;
//           background: transparent;
//           font-size: 16px;
//         }
//         .input::placeholder {
//           color: rgba(15,23,42,0.45);
//         }
//       `}</style>
//     </section>
//   );
// };

// export default FreeWebsiteAudit;



import React, { useRef, useMemo, useState } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import * as THREE from "three";

/* ============================
   WOW DOT MATRIX (OPTIMIZED)
============================ */
function WowDots() {
  const pointsRef = useRef();
  const linesRef = useRef();
  const { mouse } = useThree();

  const COUNT = 420; // 🔥 reduced (performance safe)
  const MAX_DIST = 0.65;

  const positions = useMemo(() => {
    const arr = new Float32Array(COUNT * 3);
    for (let i = 0; i < COUNT; i++) {
      arr[i * 3] = (Math.random() - 0.5) * 14;
      arr[i * 3 + 1] = (Math.random() - 0.5) * 10;
      arr[i * 3 + 2] = -Math.random() * 6;
    }
    return arr;
  }, []);

  // 👇 SAFE max connections buffer
  const MAX_LINES = COUNT * 6;
  const linePositions = useMemo(
    () => new Float32Array(MAX_LINES * 3),
    []
  );

  useFrame(({ clock }) => {
    const time = clock.elapsedTime;
    const pos = pointsRef.current.geometry.attributes.position.array;

    // DOT MOTION
    for (let i = 0; i < COUNT; i++) {
      const i3 = i * 3;
      pos[i3 + 1] += Math.sin(time * 0.5 + pos[i3]) * 0.0015;
      pos[i3] += Math.cos(time * 0.4 + pos[i3 + 1]) * 0.001;
      pos[i3] += mouse.x * 0.003;
      pos[i3 + 1] += mouse.y * 0.003;
    }

    pointsRef.current.geometry.attributes.position.needsUpdate = true;

    // LINE CONNECTIONS
    let ptr = 0;
    for (let i = 0; i < COUNT; i++) {
      for (let j = i + 1; j < COUNT; j++) {
        const ax = pos[i * 3];
        const ay = pos[i * 3 + 1];
        const az = pos[i * 3 + 2];
        const bx = pos[j * 3];
        const by = pos[j * 3 + 1];
        const bz = pos[j * 3 + 2];

        const dx = ax - bx;
        const dy = ay - by;
        const dz = az - bz;
        const dist = dx * dx + dy * dy + dz * dz;

        if (dist < MAX_DIST * MAX_DIST && ptr < linePositions.length - 6) {
          linePositions[ptr++] = ax;
          linePositions[ptr++] = ay;
          linePositions[ptr++] = az;
          linePositions[ptr++] = bx;
          linePositions[ptr++] = by;
          linePositions[ptr++] = bz;
        }
      }
    }

    linesRef.current.geometry.setDrawRange(0, ptr / 3);
    linesRef.current.geometry.attributes.position.needsUpdate = true;
  });

  return (
    <>
      <points ref={pointsRef}>
        <bufferGeometry>
          <bufferAttribute
            attach="attributes-position"
            count={COUNT}
            array={positions}
            itemSize={3}
          />
        </bufferGeometry>
        <pointsMaterial
          size={0.045}
          color="#64748b"
          transparent
          opacity={0.55}
          depthWrite={false}
        />
      </points>

      <lineSegments ref={linesRef}>
        <bufferGeometry>
          <bufferAttribute
            attach="attributes-position"
            count={linePositions.length / 3}
            array={linePositions}
            itemSize={3}
          />
        </bufferGeometry>
        <lineBasicMaterial
          color="#cbd5f5"
          transparent
          opacity={0.4}
        />
      </lineSegments>
    </>
  );
}

/* ============================
   AUDIT CARD
============================ */
const AuditCard = ({ title, desc, index }) => (
  <div className="bg-white p-8 rounded-[1.8rem]
    shadow-[0_20px_60px_-30px_rgba(0,0,0,0.25)]
    transition-transform duration-700 hover:-translate-y-1"
  >
    <p className="text-xs tracking-widest text-slate-400 mb-1">
      0{index + 1}
    </p>
    <h3 className="text-xl font-medium text-slate-900">{title}</h3>
    <p className="text-slate-600 mt-2 leading-relaxed">{desc}</p>
  </div>
);

/* ============================
   MAIN SECTION
============================ */
const FreeWebsiteAudit = () => {
  const [auditType, setAuditType] = useState(null);

  const getPlaceholder = () => {
    if (auditType === "Website") return "Website URL";
    if (auditType === "Mobile App") return "App link";
    if (auditType === "SEO") return "Website URL";
    if (auditType === "Design") return "Design reference";
    return "";
  };

  return (
    <section className="relative overflow-hidden bg-[#f9fafb] py-28">

      {/* BACKGROUND */}
      <div className="absolute inset-0 pointer-events-none">
        <Canvas camera={{ position: [0, 0, 6], fov: 55 }}>
          <ambientLight intensity={1} />
          <WowDots />
        </Canvas>
      </div>

      {/* CONTENT */}
      <div className="relative z-10 max-w-[1200px] mx-auto px-6 lg:px-10">

        <div className="max-w-3xl mb-20">
          <p className="text-xs uppercase tracking-[0.35em] text-slate-500 mb-6">
            A PEGOL Audit
          </p>

          <h1 className="text-[clamp(2.4rem,4vw,4.2rem)] font-medium leading-tight text-slate-900">
            A clear, expert review of your website —
            <br />
            <span className="text-slate-500">
              focused on what truly matters.
            </span>
          </h1>

          <p className="mt-8 text-lg text-slate-600 max-w-2xl">
            We manually review your website for clarity, performance,
            structure, and conversion readiness.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">

          <div className="lg:col-span-7 space-y-16">
            <div className="space-y-8">
              {[
                ["Design & UX", "Hierarchy, spacing, readability, and flow."],
                ["Performance", "Load speed and responsiveness."],
                ["SEO foundations", "Structure and metadata."],
                ["Conversion clarity", "CTAs and trust signals."]
              ].map(([t, d], i) => (
                <AuditCard key={i} index={i} title={t} desc={d} />
              ))}
            </div>
          </div>

          <div className="lg:col-span-5 lg:sticky lg:top-28">
            <div className="bg-white p-10 rounded-[2.5rem] shadow-[0_30px_80px_-40px_rgba(0,0,0,0.25)]">
              <p className="text-xl font-medium mb-6">Request free audit</p>

              <form className="space-y-8">
                <div className="grid grid-cols-2 gap-3">
                  {["Website", "Mobile App", "SEO", "Design"].map(type => (
                    <button
                      type="button"
                      key={type}
                      onClick={() => setAuditType(type)}
                      className={`px-4 py-3 rounded-full text-sm border transition
                        ${auditType === type
                          ? "bg-slate-900 text-white"
                          : "border-slate-300 text-slate-600 hover:border-slate-500"}
                      `}
                    >
                      {type}
                    </button>
                  ))}
                </div>

                <input placeholder="Your name" className="input" />
                <input placeholder="Email address" className="input" />
                <input
                  placeholder={getPlaceholder()}
                  disabled={!auditType}
                  className="input"
                />

                <button
                  disabled={!auditType}
                  className={`w-full py-4 rounded-full
                    ${auditType
                      ? "bg-slate-900 text-white"
                      : "bg-slate-300 text-slate-500"}
                  `}
                >
                  Request audit
                </button>
              </form>
            </div>
          </div>

        </div>
      </div>

      <style>{`
        .input {
          width: 100%;
          border-bottom: 1px solid rgba(15,23,42,0.3);
          padding: 10px 0;
          background: transparent;
          outline: none;
          font-size: 16px;
        }
      `}</style>
    </section>
  );
};

export default FreeWebsiteAudit;
