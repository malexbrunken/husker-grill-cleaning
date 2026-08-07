"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useId, useRef, useState } from "react";
import { aboutLinks, navLinks, site } from "@/lib/site";

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [aboutOpen, setAboutOpen] = useState(false);
  const aboutId = useId();
  const aboutRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") {
        setMobileOpen(false);
        setAboutOpen(false);
      }
    }
    function onClick(e: MouseEvent) {
      if (aboutRef.current && !aboutRef.current.contains(e.target as Node)) {
        setAboutOpen(false);
      }
    }
    document.addEventListener("keydown", onKey);
    document.addEventListener("mousedown", onClick);
    return () => {
      document.removeEventListener("keydown", onKey);
      document.removeEventListener("mousedown", onClick);
    };
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  return (
    <header className="site-header">
      <a href="#main-content" className="skip-link">
        Skip to Content
      </a>
      <div className="site-header-inner">
        <Link href="/" className="site-logo" aria-label="Husker Grill Cleaning home">
          <Image
            src="/brand/logo-square.webp"
            alt="Husker Grill Cleaning"
            width={56}
            height={56}
            priority
            className="site-logo-img"
          />
          <span className="site-logo-text">
            Husker Grill
            <span>Cleaning</span>
          </span>
        </Link>

        <nav className="site-nav desktop-nav" aria-label="Primary">
          {navLinks.map((link) => (
            <Link key={link.href} href={link.href}>
              {link.label}
            </Link>
          ))}
          <div className="nav-dropdown" ref={aboutRef}>
            <button
              type="button"
              className="nav-dropdown-trigger"
              aria-expanded={aboutOpen}
              aria-controls={aboutId}
              onClick={() => setAboutOpen((v) => !v)}
            >
              About
              <span aria-hidden="true" className="chevron">
                ▾
              </span>
            </button>
            <div
              id={aboutId}
              className={`nav-dropdown-menu${aboutOpen ? " open" : ""}`}
              hidden={!aboutOpen}
            >
              {aboutLinks.map((link) =>
                "external" in link && link.external ? (
                  <a
                    key={link.href}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {link.label}
                  </a>
                ) : (
                  <Link key={link.href} href={link.href} onClick={() => setAboutOpen(false)}>
                    {link.label}
                  </Link>
                ),
              )}
            </div>
          </div>
        </nav>

        <div className="header-actions">
          <a href={`tel:${site.phoneTel}`} className="header-phone" aria-label={`Call ${site.phoneDisplay}`}>
            {site.phoneDisplay}
          </a>
          <Link href={site.bookingPath} className="btn-schedule-header">
            Schedule
          </Link>
          <button
            type="button"
            className="mobile-menu-btn"
            aria-expanded={mobileOpen}
            aria-controls="mobile-nav"
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
            onClick={() => setMobileOpen((v) => !v)}
          >
            <span />
            <span />
            <span />
          </button>
        </div>
      </div>

      <div
        id="mobile-nav"
        className={`mobile-nav${mobileOpen ? " open" : ""}`}
        hidden={!mobileOpen}
      >
        <nav aria-label="Mobile">
          {navLinks.map((link) => (
            <Link key={link.href} href={link.href} onClick={() => setMobileOpen(false)}>
              {link.label}
            </Link>
          ))}
          {aboutLinks.map((link) =>
            "external" in link && link.external ? (
              <a
                key={link.href}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setMobileOpen(false)}
              >
                {link.label}
              </a>
            ) : (
              <Link key={link.href} href={link.href} onClick={() => setMobileOpen(false)}>
                {link.label}
              </Link>
            ),
          )}
          <Link
            href={site.bookingPath}
            className="btn-schedule-header mobile-cta"
            onClick={() => setMobileOpen(false)}
          >
            Schedule
          </Link>
        </nav>
      </div>
    </header>
  );
}
