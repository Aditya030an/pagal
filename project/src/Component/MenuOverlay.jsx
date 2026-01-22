// import React from "react";
// import { Link } from "react-router-dom";
// import logo from "./photos/design2.svg";
// import { ArrowRight, X } from "lucide-react";

// const MenuOverlay = ({ close }) => {
//   return (
//     <div className="fixed inset-0 z-50 bg-white">
//       <div className="h-full flex">

//         {/* LEFT PANEL */}
//         <div className="w-1/3 px-24 py-20 flex flex-col justify-between border-r border-slate-200">

//           {/* Header */}
//           <div className="flex justify-between items-center">
//             <p className="text-xs tracking-[0.3em] text-slate-400 uppercase">
//               Menu
//             </p>
//             <button
//               onClick={close}
//               className="text-slate-800 hover:rotate-90 transition-transform duration-300"
//             >
//               <X size={28} />
//             </button>
//           </div>

//           {/* MENU (Premium Interaction) */}
//           <ul className="space-y-10 text-[42px] font-extralight text-slate-900">

//             {[
//               { label: "Home", link: "/" },
//               { label: "Service", link: "/Service" },
//               { label: "Portfolio", link: "/Portfolio" },

//               { label: "About", link: "/AboutUs" },
//               { label: "Blog", link: "/Blog"  },
//               { label: "Contact", link: "/Contact" }
//             ].map((item, i) => (
//               <li
//                 key={item.label}
//                 className={`
//                   group flex items-center gap-6
//                   transition-all duration-500
//                   ${item.disabled ? "text-slate-400 cursor-not-allowed" : ""}
//                 `}
//                 style={{ transitionDelay: `${i * 70}ms` }}
//               >
//                 {/* Editorial dot */}
//                 <span
//                   className={`
//                     h-2 w-2 rounded-full bg-slate-900
//                     transition-all duration-300
//                     ${item.active ? "opacity-100" : "opacity-0 group-hover:opacity-100"}
//                   `}
//                 />

//                 {item.link ? (
//                   <Link
//                     to={item.link}
//                     onClick={close}
//                     className="relative"
//                   >
//                     {item.label}
//                     <span className="absolute left-0 -bottom-2 h-[1px] w-0 bg-slate-900 transition-all duration-500 group-hover:w-full" />
//                   </Link>
//                 ) : (
//                   <span>{item.label}</span>
//                 )}
//               </li>
//             ))}

//           </ul>

//           {/* Footer */}
//           <div className="text-xs tracking-wide text-slate-500 space-y-2">
//             <p>Your Company Pvt Ltd</p>
//             <p>Indore, India</p>
//             <p>+91 00000 00000</p>
//           </div>
//         </div>

//         {/* RIGHT PANEL — REDESIGNED */}
//       {/* RIGHT PANEL — CLASSY & TIMELESS */}
// <div className="w-2/3 bg-white px-24 py-20 flex flex-col justify-between">

// {/* Top subtle label */}
// <p className="text-xs tracking-[0.35em] uppercase text-slate-400">
//   Studio
// </p>

// {/* Main message */}
// <div className="max-w-[560px]">
//   <h2 className="text-[52px] leading-[1.1] font-light text-slate-900 mb-14">
//     Designing digital experiences <br />
//     with clarity and intent.
//   </h2>

//   <button className="group text-lg font-light text-slate-900 flex items-center gap-3">
//     Book a discovery call
//     <span className="h-[1px] w-10 bg-slate-900 transition-all duration-500 group-hover:w-16" />
//   </button>
// </div>

// {/* Bottom actions */}
// <div className="flex justify-between items-end border-t border-slate-200 pt-12">

//   <div className="space-y-3">
//     <p className="text-xs tracking-[0.3em] uppercase text-slate-400">
//       Audit
//     </p>
//     <p className="text-xl font-light text-slate-900">
//       Grade your website
//     </p>
//   </div>

//   <div className="space-y-3 text-right">
//     <p className="text-xs tracking-[0.3em] uppercase text-slate-400">
//       Contact
//     </p>
//     <p className="text-xl font-light text-slate-900">
//       Send us an email
//     </p>
//   </div>

// </div>
// </div>


//       </div>
//     </div>
//   );
// };

// export default MenuOverlay;



import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { X } from "lucide-react";
import { supabase } from "../lib/supabase";
import {
  FaUserShield,
  FaSignOutAlt,
} from "react-icons/fa";

const MenuOverlay = ({ close }) => {
  const [show, setShow] = useState(false);
  const [user , setUser] = useState(null);
   const navigate = useNavigate();

  useEffect(() => {
    setShow(true);
  }, []);

  const handleClose = () => {
    setShow(false);
    setTimeout(close, 500);
  };

   useEffect(() => {
    supabase.auth.getUser().then(({ data }) => {
      setUser(data.user);
    });

    const { data: listener } = supabase.auth.onAuthStateChange(
      (_event, session) => {
        setUser(session?.user ?? null);
      },
    );

    return () => listener.subscription.unsubscribe();
  }, []);

    const handleLogout = async () => {
    await supabase.auth.signOut();
    navigate("/");
    close;
  };


  return (
    <div
      className={`fixed inset-0 z-50 bg-white transition-opacity duration-500
        ${show ? "opacity-100" : "opacity-0"}
      `}
    >
      {/* MAIN WRAPPER */}
      <div className="h-screen flex flex-col lg:flex-row overflow-y-auto">

        {/* ================= LEFT PANEL ================= */}
        <div
          className={`w-full lg:w-1/3 px-8 sm:px-14 lg:px-24 py-10 lg:py-20
            flex flex-col justify-between border-b lg:border-b-0 lg:border-r border-slate-200
            transition-transform duration-700 ease-out
            ${show ? "translate-x-0" : "-translate-x-6"}
          `}
        >

          {/* Header */}
          <div className="flex justify-between items-center mb-10">
            <p className="text-xs tracking-[0.3em] text-slate-400 uppercase">
              Menu
            </p>
            <button
              onClick={handleClose}
              className="text-slate-800 hover:rotate-90 transition-transform duration-300"
            >
              <X size={26} />
            </button>
          </div>

          {/* MENU */}
          <ul className="flex flex-col justify-center flex-1 space-y-6 sm:space-y-8 text-3xl sm:text-[40px] font-extralight text-slate-900">
            {[
              { label: "Home", link: "/" },
              { label: "Services", link: "/Service" },
              { label: "Portfolio", link: "/Portfolio" },
              { label: "About", link: "/AboutUs" },
              { label: "Blog", link: "/Blog" },
              { label: "Contact", link: "/Contact" },
            ].map((item, i) => (
              <li
                key={item.label}
                className={`group flex items-center gap-5
                  transition-all duration-700 ease-out
                  ${show ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}
                `}
                style={{ transitionDelay: `${i * 80}ms` }}
              >
                <span className="h-2 w-2 rounded-full bg-slate-900 opacity-0 group-hover:opacity-100 transition" />
                <Link
                  to={item.link}
                  onClick={handleClose}
                  className="relative"
                >
                  {item.label}
                  <span className="absolute left-0 -bottom-2 h-[1px] w-0 bg-slate-900 transition-all duration-500 group-hover:w-full" />
                </Link>
              </li>
            ))}
          </ul>

           {!user ? (
            <Link to="/login" onClick={close} className="p-2 border rounded-full">
              <FaUserShield />
            </Link>
          ) : (
            <button
              onClick={handleLogout}
              className="flex items-center gap-2 text-red-600"
            >
              <FaSignOutAlt /> Logout
            </button>
          )}

          {/* Footer */}
          <div className="mt-10 text-xs tracking-wide text-slate-500 space-y-2">
            <p>Pegol Digital Agency</p>
            <p>Indore, India</p>
            <p>hello@pegol.in</p>
          </div>
        </div>

        {/* ================= RIGHT PANEL ================= */}
        <div
          className={`w-full lg:w-2/3 px-8 sm:px-14 lg:px-24 py-10 lg:py-20
            flex flex-col justify-between
            transition-transform duration-700 ease-out
            ${show ? "translate-x-0" : "translate-x-6"}
          `}
        >

          <p className="text-xs tracking-[0.35em] uppercase text-slate-400 mb-10">
            Studio
          </p>

          {/* CENTER CONTENT */}
          <div
            className={`flex flex-col justify-center flex-1 max-w-xl
              transition-all duration-700 ease-out delay-200
              ${show ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}
            `}
          >
            <h2 className="text-3xl sm:text-4xl lg:text-[52px] leading-tight font-light text-slate-900 mb-10">
              Designing digital experiences
              <br />
              with clarity and intent.
            </h2>

            <button className="group text-base sm:text-lg font-light text-slate-900 flex items-center gap-3">
              Book a discovery call
              <span className="h-[1px] w-10 bg-slate-900 transition-all duration-500 group-hover:w-16" />
            </button>
          </div>

          {/* BOTTOM ACTIONS */}
          <div
            className={`mt-12 pt-10 border-t border-slate-200
              flex flex-col sm:flex-row gap-10 sm:gap-0 sm:justify-between
              transition-all duration-700 ease-out delay-300
              ${show ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}
            `}
          >
            <div className="space-y-2">
              <p className="text-xs tracking-[0.3em] uppercase text-slate-400">
                Audit
              </p>
              <p className="text-lg sm:text-xl font-light text-slate-900">
                Grade your website
              </p>
            </div>

            <div className="space-y-2 sm:text-right">
              <p className="text-xs tracking-[0.3em] uppercase text-slate-400">
                Contact
              </p>
              <p className="text-lg sm:text-xl font-light text-slate-900">
                Send us an email
              </p>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default MenuOverlay;
