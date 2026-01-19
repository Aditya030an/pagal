




// // import React, { useState, useEffect, useRef } from "react";
// // import logo from "./photos/design2.svg";
// // import MenuOverlay from "./MenuOverlay";

// // const Navbar = () => {
// //   const [open, setOpen] = useState(false);
// //   const [visible, setVisible] = useState(true);
// //   const lastScrollY = useRef(0);

// //   useEffect(() => {
// //     const handleScroll = () => {
// //       const currentScrollY = window.scrollY;

// //       // Hide on scroll down, show on scroll up
// //       if (currentScrollY > lastScrollY.current && currentScrollY > 80) {
// //         setVisible(false);
// //       } else {
// //         setVisible(true);
// //       }

// //       lastScrollY.current = currentScrollY;
// //     };

// //     window.addEventListener("scroll", handleScroll);
// //     return () => window.removeEventListener("scroll", handleScroll);
// //   }, []);

// //   return (
// //     <>
// //       <nav
// //         className={`fixed top-0 left-0 w-full z-50 transition-transform duration-500 ease-in-out
// //           ${visible ? "translate-y-0" : "-translate-y-full"}
// //         `}
// //       >
// //         <div className="flex items-center justify-between h-32 px-16 bg-white/90 backdrop-blur-md shadow-sm">

// //           {/* Hamburger */}
// //           <div
// //             className="space-y-2 cursor-pointer group"
// //             onClick={() => setOpen(true)}
// //           >
// //             <span className="block w-9 h-[3px] bg-[#003060] rounded transition group-hover:w-7"></span>
// //             <span className="block w-9 h-[3px] bg-[#003060] rounded"></span>
// //             <span className="block w-9 h-[3px] bg-[#003060] rounded transition group-hover:w-5"></span>
// //           </div>

// //           {/* Logo */}
// //           <img
// //             src={logo}
// //             alt="Logo"
// //             className="h-28 w-auto object-contain"
// //           />
// //         </div>
// //       </nav>

// //       {/* Overlay Menu */}
// //       {open && <MenuOverlay close={() => setOpen(false)} />}
// //     </>
// //   );
// // };

// // export default Navbar;




// import React, { useState, useEffect, useRef } from "react";
// import logo from "./photos/design2.svg";
// import MenuOverlay from "./MenuOverlay";

// const Navbar = () => {
//   const [open, setOpen] = useState(false);
//   const [visible, setVisible] = useState(true);
//   const lastScrollY = useRef(0);

//   useEffect(() => {
//     const handleScroll = () => {
//       const currentScrollY = window.scrollY;

//       if (currentScrollY > lastScrollY.current && currentScrollY > 80) {
//         setVisible(false);
//       } else {
//         setVisible(true);
//       }

//       lastScrollY.current = currentScrollY;
//     };

//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   return (
//     <>
//       <nav
//         className={`fixed top-0 left-0 w-full z-50 transition-transform duration-500 ease-in-out
//           ${visible ? "translate-y-0" : "-translate-y-full"}
//         `}
//       >
//         <div className="flex items-center justify-between bg-black h-32 px-16 bg-transparent">

//           {/* Hamburger */}
//           <div
//             className="space-y-2 cursor-pointer group"
//             onClick={() => setOpen(true)}
//           >
//             <span className="block w-9 h-[3px] bg-[#003060] rounded transition-all group-hover:w-7"></span>
//             <span className="block w-9 h-[3px] bg-[#003060] rounded"></span>
//             <span className="block w-9 h-[3px] bg-[#003060] rounded transition-all group-hover:w-5"></span>
//           </div>

//           {/* Logo */}
//           <img
//             src={logo}
//             alt="Pegol logo"
//             className="h-28 w-auto object-contain pointer-events-none"
//           />
//         </div>
//       </nav>

//       {open && <MenuOverlay close={() => setOpen(false)} />}
//     </>
//   );
// };

// export default Navbar;



import React, { useState, useEffect, useRef } from "react";
import logo from "./photos/design2.svg";
import MenuOverlay from "./MenuOverlay";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [visible, setVisible] = useState(true);
  const lastScrollY = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > lastScrollY.current && currentScrollY > 80) {
        setVisible(false);
      } else {
        setVisible(true);
      }

      lastScrollY.current = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
<nav
  className={`fixed top-0 left-0 w-full h-32 z-50
  bg-transparent pointer-events-auto
  transition-transform duration-500 ease-in-out
  ${visible ? "translate-y-0" : "-translate-y-full"}
  `}
>
  <div className="flex items-center justify-between h-full px-16">
    <div
      className="space-y-2 cursor-pointer group"
      onClick={() => setOpen(true)}
    >
      <span className="block w-9 h-[3px] bg-[#003060] rounded transition-all duration-300 group-hover:w-7"></span>
      <span className="block w-9 h-[3px] bg-[#003060] rounded"></span>
      <span className="block w-9 h-[3px] bg-[#003060] rounded transition-all duration-300 group-hover:w-5"></span>
    </div>

    <img
      src={logo}
      alt="Pegol logo"
      className="h-28 w-auto object-contain pointer-events-none"
    />
  </div>
</nav>



      {open && <MenuOverlay close={() => setOpen(false)} />}
    </>
  );
};

export default Navbar;