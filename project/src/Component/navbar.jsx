

import React, { useState, useEffect, useRef } from "react";
import logo from "./photos/pegal123.png";
import hoverlogo from "./photos/agency.png";
import MenuOverlay from "./MenuOverlay";
import { Link } from "react-router-dom";

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
        className={`fixed top-0 left-0 w-full z-50 bg-transparent 
        transition-transform duration-500 ease-in-out
        ${visible ? "translate-y-0" : "-translate-y-full"}`}
      >
        <div className="flex items-center justify-between h-28 px-16">

          {/* LOGO HOVER SWAP */}
          <Link to="/" className="group block">
            <div className="relative h-24 overflow-hidden">

              {/* LOGO WRAPPER */}
              <div
                className="flex flex-col transition-transform duration-700
                ease-[cubic-bezier(.76,0,.24,1)]
                group-hover:-translate-y-24"
              >
                {/* DEFAULT LOGO */}
                <img
                  src={logo}
                  alt="Pegal logo"
                  className="h-24 w-auto object-contain"
                />

                {/* HOVER LOGO */}
                <img
                  src={hoverlogo}
                  alt="Pegal hover logo"
                  className="h-24 w-auto object-contain"
                />
              </div>

            </div>
          </Link>

          {/* HAMBURGER */}
          <div
            className="space-y-2 cursor-pointer group"
            onClick={() => setOpen(true)}
          >
            <span className="block w-9 h-[3px] bg-[#003060] rounded transition-all duration-300 group-hover:w-7"></span>
            <span className="block w-9 h-[3px] bg-[#003060] rounded"></span>
            <span className="block w-9 h-[3px] bg-[#003060] rounded transition-all duration-300 group-hover:w-5"></span>
          </div>

        </div>
      </nav>

      {open && <MenuOverlay close={() => setOpen(false)} />}
    </>
  );
};

export default Navbar;

