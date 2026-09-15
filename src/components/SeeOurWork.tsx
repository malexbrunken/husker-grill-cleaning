"use client";

import Link from "next/link";
import {
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
  type CSSProperties,
  type TouchEvent,
} from "react";
import galleryData from "@/data/gallery.json";
import {
  cloudinaryUrl,
  galleryAlt,
  GALLERY_RATIOS,
  MARQUEE_BOTTOM_INDEXES,
  MARQUEE_TOP_INDEXES,
  type GalleryItem,
} from "@/lib/cloudinary";
import { site } from "@/lib/site";

type OrderedItem = GalleryItem & { originalIndex: number };

function shuffleArray<T>(items: T[]): T[] {
  const next = [...items];
  for (let i = next.length - 1; i > 0; i -= 1) {
    const j = Math.floor(Math.random() * (i + 1));
    [next[i], next[j]] = [next[j], next[i]];
  }
  return next;
}

function MarqueeTrack({
  urls,
  indexes,
}: {
  urls: string[];
  indexes: readonly number[];
}) {
  const sequence = [...indexes, ...indexes];
  return (
    <div className="hgc-marquee-track">
      {sequence.map((imageIndex, position) => {
        const src = urls[imageIndex];
        if (!src) return null;
        return (
          <figure key={`${imageIndex}-${position}`}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              alt=""
              loading={position < 3 ? "eager" : "lazy"}
              decoding="async"
              src={cloudinaryUrl(src, 620, "thumb")}
            />
          </figure>
        );
      })}
    </div>
  );
}

export function SeeOurWork() {
  const items = galleryData as GalleryItem[];
  const count = items.length;
  const urls = useMemo(() => items.map((item) => item.src), [items]);

  const [order, setOrder] = useState<OrderedItem[]>(() =>
    items.map((item, originalIndex) => ({ ...item, originalIndex })),
  );
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);
  const [imageLoaded, setImageLoaded] = useState(false);
  const [visibleCards, setVisibleCards] = useState<Record<string, boolean>>(
    {},
  );
  const [revealed, setRevealed] = useState<Record<string, boolean>>({});
  const [progress, setProgress] = useState(0);
  const [shufflePulse, setShufflePulse] = useState(false);

  const rootRef = useRef<HTMLElement>(null);
  const closeBtnRef = useRef<HTMLButtonElement>(null);
  const lastFocusedRef = useRef<HTMLElement | null>(null);
  const touchStart = useRef({ x: 0, y: 0 });
  const cardRefs = useRef<Map<string, HTMLButtonElement>>(new Map());

  const openLightbox = useCallback((position: number, el?: HTMLElement) => {
    setActiveIndex(position);
    setImageLoaded(false);
    if (el) lastFocusedRef.current = el;
    setLightboxOpen(true);
  }, []);

  const closeLightbox = useCallback(() => {
    setLightboxOpen(false);
    queueMicrotask(() => lastFocusedRef.current?.focus({ preventScroll: true }));
  }, []);

  const showPrevious = useCallback(() => {
    setImageLoaded(false);
    setActiveIndex((i) => (i - 1 + order.length) % order.length);
  }, [order.length]);

  const showNext = useCallback(() => {
    setImageLoaded(false);
    setActiveIndex((i) => (i + 1) % order.length);
  }, [order.length]);

  const shuffleGallery = useCallback(() => {
    setOrder((prev) => shuffleArray(prev));
    setVisibleCards({});
    setShufflePulse(true);
    window.setTimeout(() => setShufflePulse(false), 280);
  }, []);

  // Body scroll lock for lightbox
  useEffect(() => {
    if (lightboxOpen) {
      document.body.classList.add("hgc-lightbox-open");
      closeBtnRef.current?.focus({ preventScroll: true });
    } else {
      document.body.classList.remove("hgc-lightbox-open");
    }
    return () => document.body.classList.remove("hgc-lightbox-open");
  }, [lightboxOpen]);

  // Keyboard nav
  useEffect(() => {
    if (!lightboxOpen) return;
    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") closeLightbox();
      if (e.key === "ArrowLeft") showPrevious();
      if (e.key === "ArrowRight") showNext();
    }
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [lightboxOpen, closeLightbox, showPrevious, showNext]);

  // Preload adjacent lightbox images
  useEffect(() => {
    if (!lightboxOpen || order.length === 0) return;
    for (const offset of [-1, 1] as const) {
      const idx = (activeIndex + offset + order.length) % order.length;
      const preload = new window.Image();
      preload.src = cloudinaryUrl(order[idx].src, 2000, "full");
    }
  }, [lightboxOpen, activeIndex, order]);

  // Scroll progress bar
  useEffect(() => {
    const root = rootRef.current;
    if (!root) return;
    let ticking = false;
    function update() {
      if (!root) return;
      const rect = root.getBoundingClientRect();
      const total = root.offsetHeight - window.innerHeight;
      const traveled = Math.min(Math.max(-rect.top, 0), Math.max(total, 1));
      setProgress(traveled / Math.max(total, 1));
      ticking = false;
    }
    function onScroll() {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(update);
    }
    window.addEventListener("scroll", onScroll, { passive: true });
    update();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Reveal sections + gallery cards via IntersectionObserver on live DOM nodes
  useEffect(() => {
    const root = rootRef.current;
    if (!root) return;

    const revealNodes = [
      ...root.querySelectorAll<HTMLElement>("[data-reveal]"),
    ];
    const cardNodes = [
      ...root.querySelectorAll<HTMLElement>(".hgc-gallery-card[data-card-id]"),
    ];

    const markAllVisible = () => {
      const reveals: Record<string, boolean> = {};
      revealNodes.forEach((n) => {
        if (n.dataset.reveal) reveals[n.dataset.reveal] = true;
      });
      setRevealed(reveals);

      const cards: Record<string, boolean> = {};
      cardNodes.forEach((n) => {
        if (n.dataset.cardId) cards[n.dataset.cardId] = true;
      });
      setVisibleCards(cards);
    };

    if (!("IntersectionObserver" in window) || cardNodes.length === 0) {
      const id = requestAnimationFrame(markAllVisible);
      return () => cancelAnimationFrame(id);
    }

    const revealObserver = new IntersectionObserver(
      (entries, obs) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          const key = (entry.target as HTMLElement).dataset.reveal;
          if (key) setRevealed((prev) => ({ ...prev, [key]: true }));
          obs.unobserve(entry.target);
        });
      },
      { threshold: 0.12 },
    );

    const cardObserver = new IntersectionObserver(
      (entries, obs) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          const id = (entry.target as HTMLElement).dataset.cardId;
          if (id) setVisibleCards((prev) => ({ ...prev, [id]: true }));
          obs.unobserve(entry.target);
        });
      },
      { rootMargin: "200px 0px", threshold: 0.01 },
    );

    revealNodes.forEach((n) => revealObserver.observe(n));
    cardNodes.forEach((n) => cardObserver.observe(n));

    // Failsafe: if nothing revealed after a beat (headless/odd viewports), show all
    const failsafe = window.setTimeout(() => {
      setVisibleCards((prev) => {
        if (Object.keys(prev).length >= Math.min(4, cardNodes.length)) return prev;
        const cards: Record<string, boolean> = {};
        cardNodes.forEach((n) => {
          if (n.dataset.cardId) cards[n.dataset.cardId] = true;
        });
        return cards;
      });
      setRevealed((prev) => ({
        manifesto: true,
        intro: true,
        cta: true,
        ...prev,
      }));
    }, 600);

    return () => {
      revealObserver.disconnect();
      cardObserver.disconnect();
      window.clearTimeout(failsafe);
    };
  }, [order]);

  const active = order[activeIndex];
  const lightboxSrc = active ? cloudinaryUrl(active.src, 2000, "full") : "";

  function onTouchStart(e: TouchEvent) {
    const t = e.changedTouches[0];
    touchStart.current = { x: t.clientX, y: t.clientY };
  }

  function onTouchEnd(e: TouchEvent) {
    const t = e.changedTouches[0];
    const deltaX = t.clientX - touchStart.current.x;
    const deltaY = t.clientY - touchStart.current.y;
    if (Math.abs(deltaX) < 55 || Math.abs(deltaX) < Math.abs(deltaY)) return;
    if (deltaX > 0) showPrevious();
    else showNext();
  }

  return (
    <section
      id="hgc-work"
      ref={rootRef}
      aria-labelledby="hgc-work-title"
    >
      <div className="hgc-progress" aria-hidden="true">
        <span style={{ transform: `scaleX(${progress})` }} />
      </div>

      <header className="hgc-hero">
        <div className="hgc-hero-noise" aria-hidden="true" />

        <div className="hgc-marquee hgc-marquee-top" aria-hidden="true">
          <MarqueeTrack urls={urls} indexes={MARQUEE_TOP_INDEXES} />
        </div>

        <div className="hgc-hero-copy">
          <p className="hgc-kicker">
            <span /> Husker Grill Cleaning — Our Work
          </p>
          <h1 id="hgc-work-title">
            Our competition says
            <br />
            they&apos;re the best.
            <br />
            <em>We show you.</em>
          </h1>
          <p className="hgc-lede">
            The proof of performance is in the results. Every photo below is a
            real grill we cleaned—not a stock image, showroom display, or empty
            promise.
          </p>
          <div className="hgc-hero-actions">
            <a className="hgc-btn hgc-btn-primary" href="#hgc-gallery-start">
              See the results <span aria-hidden="true">↓</span>
            </a>
            <Link className="hgc-btn hgc-btn-ghost" href={site.bookingPath}>
              Schedule service <span aria-hidden="true">↗</span>
            </Link>
          </div>
          <div className="hgc-proof-row" aria-label="Gallery highlights">
            <div>
              <strong>100+</strong>
              <span>real completed-work photos</span>
            </div>
            <div>
              <strong>0</strong>
              <span>stock images</span>
            </div>
            <div>
              <strong>100%</strong>
              <span>our work</span>
            </div>
          </div>
        </div>

        <div className="hgc-marquee hgc-marquee-bottom" aria-hidden="true">
          <MarqueeTrack urls={urls} indexes={MARQUEE_BOTTOM_INDEXES} />
        </div>

        <a
          className="hgc-scroll-cue"
          href="#hgc-gallery-start"
          aria-label="Scroll to the gallery"
        >
          <span>Explore</span>
          <i aria-hidden="true" />
        </a>
      </header>

      <section
        className={`hgc-manifesto hgc-reveal${revealed.manifesto ? " hgc-visible" : ""}`}
        id="hgc-gallery-start"
        data-reveal="manifesto"
      >
        <p className="hgc-section-label">Proof, not promises</p>
        <div className="hgc-manifesto-grid">
          <h2>This is what a professionally cleaned grill should look like.</h2>
          <div>
            <p>
              Stainless brought back to life. Grates cleared of old buildup.
              Cooking surfaces reset. The details handled—not hidden.
            </p>
            <p className="hgc-manifesto-note">
              Tap any result to see it full screen. Swipe on mobile.
            </p>
          </div>
        </div>
      </section>

      <div className="hgc-ticker" aria-hidden="true">
        <div className="hgc-ticker-track">
          <span>REAL GRILLS</span>
          <b>✦</b>
          <span>REAL RESULTS</span>
          <b>✦</b>
          <span>LINCOLN + OMAHA</span>
          <b>✦</b>
          <span>PROOF OF PERFORMANCE</span>
          <b>✦</b>
          <span>REAL GRILLS</span>
          <b>✦</b>
          <span>REAL RESULTS</span>
          <b>✦</b>
          <span>LINCOLN + OMAHA</span>
          <b>✦</b>
          <span>PROOF OF PERFORMANCE</span>
          <b>✦</b>
        </div>
      </div>

      <section
        className="hgc-gallery-shell"
        aria-label="Husker Grill Cleaning completed work gallery"
      >
        <div
          className={`hgc-gallery-intro hgc-reveal${revealed.intro ? " hgc-visible" : ""}`}
          data-reveal="intro"
        >
          <div>
            <p className="hgc-section-label">The after gallery</p>
            <h2>Results that speak for themselves.</h2>
          </div>
          <button
            className="hgc-shuffle"
            type="button"
            aria-label="Shuffle gallery order"
            onClick={shuffleGallery}
            style={
              shufflePulse
                ? ({ transform: "rotate(2deg) scale(0.98)" } as CSSProperties)
                : undefined
            }
          >
            <svg viewBox="0 0 24 24" aria-hidden="true">
              <path d="M16 3h5v5M4 7h3.5c2 0 3.2 1.1 4.4 3l.2.3M21 16v5h-5M4 17h3.5c2.1 0 3.3-1.2 4.6-3.3L14 10.8C15.2 8.7 16.5 7 19 7h2M14.2 14.5c1.2 1.7 2.5 2.5 4.8 2.5h2" />
            </svg>
            Shuffle the proof
          </button>
        </div>

        <div className="hgc-gallery" id="hgc-gallery">
          {order.map((item, position) => {
            const ratio =
              GALLERY_RATIOS[item.originalIndex % GALLERY_RATIOS.length];
            const isVisible = visibleCards[item.id];
            const delay = `${Math.min(position % 6, 5) * 55}ms`;
            return (
              <button
                key={`${item.id}-${position}`}
                type="button"
                className={`hgc-gallery-card${isVisible ? " hgc-visible" : ""}`}
                style={
                  {
                    aspectRatio: ratio,
                    transitionDelay: isVisible ? delay : undefined,
                  } as CSSProperties
                }
                aria-label={`Open completed grill cleaning result ${item.originalIndex + 1}`}
                data-card-id={item.id}
                data-position={position}
                ref={(el) => {
                  if (el) cardRefs.current.set(item.id, el);
                  else cardRefs.current.delete(item.id);
                }}
                onClick={(e) => openLightbox(position, e.currentTarget)}
              >
                {/* Native lazy-loading is unreliable with CSS multi-column masonry */}
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  alt={galleryAlt(item.originalIndex)}
                  loading={position < 12 ? "eager" : undefined}
                  decoding="async"
                  fetchPriority={position < 4 ? "high" : "auto"}
                  src={cloudinaryUrl(item.src, 700, "thumb")}
                  srcSet={[360, 560, 760, 1000]
                    .map(
                      (w) => `${cloudinaryUrl(item.src, w, "thumb")} ${w}w`,
                    )
                    .join(", ")}
                  sizes="(max-width: 390px) 100vw, (max-width: 760px) 50vw, (max-width: 1100px) 33vw, 25vw"
                />
                <span className="hgc-card-overlay">
                  <span>
                    Result {String(item.originalIndex + 1).padStart(2, "0")}
                  </span>
                  <span aria-hidden="true">＋</span>
                </span>
              </button>
            );
          })}
        </div>

        <p className="hgc-gallery-status" aria-live="polite">
          <span>{count}</span> completed-work photos shown
        </p>
      </section>

      <section
        className={`hgc-final-cta hgc-reveal${revealed.cta ? " hgc-visible" : ""}`}
        data-reveal="cta"
      >
        <div className="hgc-final-cta-glow" aria-hidden="true" />
        <p className="hgc-section-label">Your grill belongs here</p>
        <h2>Ready for your own after photo?</h2>
        <p>
          Give your grill the deep clean it deserves—and your outdoor kitchen a
          finish worth showing off.
        </p>
        <div className="hgc-hero-actions hgc-final-actions">
          <Link className="hgc-btn hgc-btn-light" href={site.bookingPath}>
            Schedule my cleaning <span aria-hidden="true">↗</span>
          </Link>
          <Link className="hgc-btn hgc-btn-outline-light" href="/pricing">
            See pricing
          </Link>
        </div>
      </section>

      <div
        className={`hgc-lightbox${lightboxOpen ? " hgc-open" : ""}`}
        id="hgc-lightbox"
        role="dialog"
        aria-modal="true"
        aria-label="Expanded gallery image"
        aria-hidden={lightboxOpen ? "false" : "true"}
        onTouchStart={onTouchStart}
        onTouchEnd={onTouchEnd}
      >
        <div
          className="hgc-lightbox-backdrop"
          onClick={closeLightbox}
          onKeyDown={() => undefined}
          role="presentation"
        />
        <button
          ref={closeBtnRef}
          className="hgc-lightbox-close"
          type="button"
          aria-label="Close image"
          onClick={closeLightbox}
        >
          ×
        </button>
        <button
          className="hgc-lightbox-arrow hgc-lightbox-prev"
          type="button"
          aria-label="Previous image"
          onClick={showPrevious}
        >
          ‹
        </button>
        <figure className="hgc-lightbox-stage">
          <div
            className={`hgc-lightbox-loader${imageLoaded ? " hgc-hidden" : ""}`}
            aria-hidden="true"
          />
          {active ? (
            // eslint-disable-next-line @next/next/no-img-element
            <img
              key={lightboxSrc}
              src={lightboxSrc}
              alt={galleryAlt(active.originalIndex)}
              id="hgc-lightbox-image"
              className={imageLoaded ? "hgc-loaded" : undefined}
              onLoad={() => setImageLoaded(true)}
              ref={(el) => {
                // Cached images may already be complete before onLoad binds
                if (el?.complete && el.naturalWidth > 0) {
                  queueMicrotask(() => setImageLoaded(true));
                }
              }}
            />
          ) : null}
          <figcaption>
            <span>
              Husker Grill Cleaning result{" "}
              {active
                ? String(active.originalIndex + 1).padStart(2, "0")
                : "01"}
            </span>
            <span>
              {activeIndex + 1} / {order.length}
            </span>
          </figcaption>
        </figure>
        <button
          className="hgc-lightbox-arrow hgc-lightbox-next"
          type="button"
          aria-label="Next image"
          onClick={showNext}
        >
          ›
        </button>
      </div>
    </section>
  );
}
