"use client";
import { useRef, useEffect, useState } from "react";
import Link from "next/link";
import ThemeSwitch from "./ThemeSwitch";

interface Props {}

export function Navbar({}: Props) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [scrollY, setScrollY] = useState(0);
  const ref: any = useRef(null);
  const btnRef: any = useRef(null);

  const title = "Jamie Andrews";

  useEffect(() => {
    // add when mounted
    document.addEventListener("mousedown", handleClick);
    function handleClick(event: MouseEvent) {
      if (btnRef.current.contains(event.target)) {
        if (ref.current.getAttribute("data-visible") === "false") {
          btnRef.current.setAttribute("aria-expanded", "true");
          return ref.current.setAttribute("data-visible", "true");
        }
      }
      if (ref.current.getAttribute("data-visible", "true")) {
        btnRef.current.setAttribute("aria-expanded", "false");
        return ref.current.setAttribute("data-visible", "false");
      }
    }
    // return function to be called when unmounted
    return () => {
      document.removeEventListener("mousedown", handleClick);
    };
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPostition = window.scrollY;
      setScrollY(window.scrollY);
      setIsScrolled(scrollPostition > scrollY);
    };
    // Add the scroll event listener
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [scrollY]);

  const scrollClass = isScrolled ? "" : "visible";

  return (
    <div className={["navbar", scrollClass].join(" ")}>
      <button
        className="nav-toggle"
        style={{ fill: "currentcolor" }}
        aria-controls="nav"
        aria-expanded="false"
        ref={btnRef}
      >
        <span className="sr-only">menu</span>
      </button>
      <nav>
        <h2>
          <Link href="/">{title}</Link>
        </h2>
        <ul className="links" id="nav" data-visible="false" ref={ref}>
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/about">About</Link>
          </li>
          <li>
            <Link href="/projects">Portfolio Projects</Link>
          </li>
          <li>
            <Link href="/contact">Contact</Link>
          </li>
          <li>
            <a>
              <ThemeSwitch />
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
}
