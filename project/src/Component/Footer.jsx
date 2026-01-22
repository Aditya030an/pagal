// // export default function FooterPegol() {
// //   return (
// //     <footer className="relative bg-[#F4F9FC] overflow-hidden">

// //       {/* Animated wave divider */}
// //       <svg
// //         className="absolute top-0 left-0 w-full h-[160px]"
// //         viewBox="0 0 1440 160"
// //         preserveAspectRatio="none"
// //       >
// //         <path
// //           fill="#68BBE3"
// //           fillOpacity="0.18"
// //           d="M0,80 C240,120 480,40 720,60 960,80 1200,120 1440,90 L1440,0 L0,0 Z"
// //         />
// //       </svg>

// //       {/* Grid texture */}
// //       <div
// //         className="absolute inset-0 opacity-[0.16] pointer-events-none"
// //         style={{
// //           backgroundImage: `
// //             linear-gradient(to right, rgba(0,48,96,0.06) 1px, transparent 1px),
// //             linear-gradient(to bottom, rgba(0,48,96,0.06) 1px, transparent 1px)
// //           `,
// //           backgroundSize: "96px 96px",
// //         }}
// //       />

// //       <div className="relative max-w-[1440px] mx-auto px-6 lg:px-24 pt-40 pb-16">

// //         {/* BIG CTA */}
// //         <div className="max-w-4xl mb-32">
// //           <h2 className="text-[clamp(2.6rem,5vw,4.2rem)] leading-[1.05] font-medium text-[#003060]">
// //             Let’s create something
// //             <br />
// //             <span className="text-[#0E86D4] font-normal">
// //               calm, human & effective
// //             </span>
// //           </h2>

// //           <p className="mt-6 max-w-xl text-[#055C9D] text-lg">
// //             Ready to collaborate? We work with thoughtful brands who value
// //             clarity, design, and long-term impact.
// //           </p>

// //           <div className="mt-10">
// //             <a
// //               href="/contact"
// //               className="group inline-flex items-center gap-6 text-lg font-medium text-[#003060]"
// //             >
// //               Start a project
// //               <span className="h-[2px] w-14 bg-[#0E86D4] transition-all duration-300 group-hover:w-28" />
// //             </a>
// //           </div>
// //         </div>

// //         {/* Info Grid */}
// //         <div className="grid grid-cols-1 md:grid-cols-3 gap-20 mb-20">

// //           {/* Brand */}
// //           <div className="space-y-5">
// //             <h3 className="text-xl font-medium text-[#003060]">Pegol</h3>
// //             <p className="text-[#055C9D] leading-relaxed max-w-sm">
// //               A digital agency crafting thoughtful, high-performing digital
// //               experiences through strategy, design, and engineering.
// //             </p>
// //           </div>

// //           {/* Navigation */}
// //           <div className="space-y-4">
// //             <p className="text-sm uppercase tracking-widest text-[#0E86D4]">
// //               Navigation
// //             </p>
// //             <ul className="space-y-3 text-[#055C9D] text-lg">
// //               {["Home", "About", "Work", "Contact"].map((item) => (
// //                 <li
// //                   key={item}
// //                   className="group w-fit cursor-pointer"
// //                 >
// //                   <span className="relative">
// //                     {item}
// //                     <span className="absolute left-0 -bottom-1 h-[1.5px] w-0 bg-[#0E86D4] transition-all duration-300 group-hover:w-full" />
// //                   </span>
// //                 </li>
// //               ))}
// //             </ul>
// //           </div>

// //           {/* Contact */}
// //           <div className="space-y-4">
// //             <p className="text-sm uppercase tracking-widest text-[#0E86D4]">
// //               Contact
// //             </p>
// //             <div className="space-y-3 text-[#055C9D] text-lg">
// //               <p>hello@pegol.agency</p>
// //               <p>India · Working worldwide</p>
// //             </div>
// //           </div>
// //         </div>

// //         {/* Bottom bar */}
// //         <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 border-t border-[rgba(0,48,96,0.12)] pt-8">

// //           <p className="text-sm text-[#055C9D]">
// //             © {new Date().getFullYear()} Pegol. All rights reserved.
// //           </p>

// //           <div className="flex gap-10 text-sm text-[#055C9D]">
// //             <span className="hover:text-[#003060] cursor-pointer transition">
// //               Privacy
// //             </span>
// //             <span className="hover:text-[#003060] cursor-pointer transition">
// //               Terms
// //             </span>
// //           </div>
// //         </div>

// //       </div>
// //     </footer>
// //   );
// // }







// export default function FooterPegol() {
//   return (
//     <footer className="relative bg-[#F4F9FC] overflow-hidden">

//       {/* Soft grid texture */}
//       <div
//         className="absolute inset-0 opacity-[0.14] pointer-events-none"
//         style={{
//           backgroundImage: `
//             linear-gradient(to right, rgba(0,48,96,0.05) 1px, transparent 1px),
//             linear-gradient(to bottom, rgba(0,48,96,0.05) 1px, transparent 1px)
//           `,
//           backgroundSize: "96px 96px",
//         }}
//       />

//       <div className="relative max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-24 pt-20 sm:pt-28 pb-10">

//         {/* CTA */}
//         <div className="max-w-3xl mb-20 sm:mb-28">
//           <h2 className="text-[clamp(2rem,6vw,3.6rem)] leading-[1.1] font-medium text-[#003060]">
//             Let’s create something
//             <br />
//             <span className="text-[#0E86D4] font-normal">
//               calm, human & effective
//             </span>
//           </h2>

//           <p className="mt-5 text-[#055C9D] text-base sm:text-lg max-w-xl">
//             We collaborate with thoughtful brands to design and build digital
//             experiences that feel effortless and perform beautifully.
//           </p>

//           <a
//             href="/contact"
//             className="group inline-flex items-center gap-4 mt-8 text-base sm:text-lg font-medium text-[#003060]"
//           >
//             Start a project
//             <span className="h-[2px] w-10 bg-[#0E86D4] transition-all duration-300 group-hover:w-20" />
//           </a>
//         </div>

//         {/* Info grid */}
//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-14 sm:gap-16 mb-14">

//           {/* Brand */}
//           <div className="space-y-4">
//             <h3 className="text-xl font-medium text-[#003060]">Pegol</h3>
//             <p className="text-[#055C9D] leading-relaxed max-w-sm text-sm sm:text-base">
//               A digital agency crafting thoughtful, high-performing digital
//               experiences through strategy, design, and engineering.
//             </p>
//           </div>

//           {/* Navigation */}
//           <div className="space-y-4">
//             <p className="text-xs uppercase tracking-widest text-[#0E86D4]">
//               Navigation
//             </p>
//             <ul className="space-y-3 text-[#055C9D] text-base">
//               {["Home", "About", "Work", "Contact"].map((item) => (
//                 <li key={item}>
//                   <a
//                     href={`/${item.toLowerCase()}`}
//                     className="group relative inline-block"
//                   >
//                     {item}
//                     <span className="absolute left-0 -bottom-1 h-[1.5px] w-0 bg-[#0E86D4] transition-all duration-300 group-hover:w-full" />
//                   </a>
//                 </li>
//               ))}
//             </ul>
//           </div>

//           {/* Contact */}
//           <div className="space-y-4">
//             <p className="text-xs uppercase tracking-widest text-[#0E86D4]">
//               Contact
//             </p>
//             <div className="space-y-2 text-[#055C9D] text-base">
//               <p>hello@pegol.agency</p>
//               <p>India · Working worldwide</p>
//             </div>
//           </div>
//         </div>

//         {/* Bottom bar */}
//         <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border-t border-[rgba(0,48,96,0.12)] pt-6">

//           <p className="text-xs sm:text-sm text-[#055C9D]">
//             © {new Date().getFullYear()} Pegol. All rights reserved.
//           </p>

//           <div className="flex gap-6 text-xs sm:text-sm text-[#055C9D]">
//             <span className="hover:text-[#003060] cursor-pointer transition">
//               Privacy
//             </span>
//             <span className="hover:text-[#003060] cursor-pointer transition">
//               Terms
//             </span>
//           </div>
//         </div>

//       </div>
//     </footer>
//   );
// }




import React from "react";

export default function FooterPegal() {
  return (
    <footer className="relative bg-white overflow-hidden">
      {/* Soft grid texture */}
      <div
        className="absolute inset-0 opacity-[0.08] pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(to right, rgba(0,48,96,0.04) 1px, transparent 1px), linear-gradient(to bottom, rgba(0,48,96,0.04) 1px, transparent 1px)",
          backgroundSize: "96px 96px",
        }}
      />

      <div className="relative max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-24 pt-20 sm:pt-28 pb-10">

        {/* CTA */}
        <div className="max-w-3xl mb-20 sm:mb-28">
          <h2 className="text-[clamp(2rem,6vw,3.6rem)] leading-[1.1] font-medium text-[#003060]">
            Let’s create something
            <br />
            <span className="text-[#0E86D4] font-normal">
              calm, human & effective
            </span>
          </h2>

          <p className="mt-5 text-[#055C9D] text-base sm:text-lg max-w-xl">
            We collaborate with thoughtful brands to design and build digital
            experiences that feel effortless and perform beautifully.
          </p>

          <a
            href="/contact"
            className="group inline-flex items-center gap-4 mt-8 text-base sm:text-lg font-medium text-[#003060]"
          >
            Start a project
            <span className="h-[2px] w-10 bg-[#0E86D4] transition-all duration-300 group-hover:w-20" />
          </a>
        </div>

        {/* GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-14 mb-14">

          {/* Brand */}
          <div>
            <h3 className="text-xl font-medium text-[#003060] mb-4">
              Pegal
            </h3>
            <p className="text-[#055C9D] text-sm sm:text-base max-w-sm">
              A digital agency crafting thoughtful, high-performing digital
              experiences through strategy, design, and engineering.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <p className="text-xs uppercase tracking-widest text-[#0E86D4] mb-4">
              Navigation
            </p>
            <ul className="space-y-3 text-[#055C9D]">
              <li><a href="/">Home</a></li>
              <li><a href="/services">Services</a></li>
              <li><a href="/portfolio">Portfolio</a></li>
              <li><a href="/about">About</a></li>
              <li><a href="/blog">Blog</a></li>
              <li><a href="/contact">Contact</a></li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <p className="text-xs uppercase tracking-widest text-[#0E86D4] mb-4">
              Social
            </p>
            <ul className="space-y-3 text-[#055C9D]">
              <li><a href="https://instagram.com" target="_blank">Instagram</a></li>
              <li><a href="https://linkedin.com" target="_blank">LinkedIn</a></li>

            </ul>
          </div>

          {/* Contact */}
          <div>
            <p className="text-xs uppercase tracking-widest text-[#0E86D4] mb-4">
              Contact
            </p>
            <p className="text-[#055C9D]">pegalagency@gmail.com</p>
            <p className="text-[#055C9D]">India · Working worldwide</p>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-[rgba(0,48,96,0.12)] pt-6 flex justify-between text-sm text-[#055C9D]">
          <span>© {new Date().getFullYear()} Pegal. All rights reserved.</span>
          <span>Privacy · Terms</span>
        </div>

      </div>
    </footer>
  );
}