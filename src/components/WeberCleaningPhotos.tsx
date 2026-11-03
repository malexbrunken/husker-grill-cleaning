import Image from "next/image";
import { cloudinaryUrl } from "@/lib/cloudinary";

type WeberPhoto = {
  src: string;
  alt: string;
  width: number;
};

/**
 * Owner-supplied Weber photos. HG-12 is the same frame as HG-32, so only HG-32 is used.
 * HG-71 is omitted: the lid interior is still heavily coated, so it is a weaker result shot.
 */
const FEATURED: WeberPhoto = {
  src: "https://res.cloudinary.com/f69kw8ao/image/upload/v1785504601/HG-74_oze0e4.jpg",
  alt: "Stainless Weber gas grill with the lid closed, side shelves, three control knobs with red tabs, and a two-door cabinet, on a concrete patio in front of house siding.",
  width: 1400,
};

const GALLERY: readonly WeberPhoto[] = [
  {
    src: "https://res.cloudinary.com/f69kw8ao/image/upload/v1785504590/HG-18_ibsizc.jpg",
    alt: "Black Weber SmokeFire pellet grill with a glossy closed lid, stainless side shelf, and a digital control panel, on a stone patio.",
    width: 1400,
  },
  {
    src: "https://res.cloudinary.com/f69kw8ao/image/upload/v1785504599/HG-63_gv4zoj.jpg",
    alt: "Open Weber Spirit gas grill with cooking grates and a warming rack. The lid interior is mostly bare metal, with dark residue along the upper edges.",
    width: 1200,
  },
  {
    src: "https://res.cloudinary.com/f69kw8ao/image/upload/v1785504595/HG-44_l38pzi.jpg",
    alt: "Close view of metal cooking grates and a warming rack inside a Weber grill, with three control knobs on the front panel.",
    width: 1200,
  },
  {
    src: "https://res.cloudinary.com/f69kw8ao/image/upload/v1785504594/HG-36_ifqk9w.jpg",
    alt: "Open Weber grill in a garage, with a warming rack and cooking grates. The lid interior still shows scattered dark spots.",
    width: 1200,
  },
  {
    src: "https://res.cloudinary.com/f69kw8ao/image/upload/v1785504592/HG-32_qwwwvf.png",
    alt: "Open Weber grill on a stainless table outdoors, cooking grates and a warming rack in place, with grass behind it.",
    width: 1200,
  },
  {
    src: "https://res.cloudinary.com/f69kw8ao/image/upload/v1785504590/HG-23_jlxola.jpg",
    alt: "Open black Weber grill on a wooden deck, cooking grates visible, with a lake, railing, and houses in the background.",
    width: 1200,
  },
];

function WeberPhotoFrame({
  photo,
  sizes,
  className,
}: {
  photo: WeberPhoto;
  sizes: string;
  className: string;
}) {
  return (
    <div className={className}>
      <Image
        src={cloudinaryUrl(photo.src, photo.width, "full")}
        alt={photo.alt}
        fill
        sizes={sizes}
      />
    </div>
  );
}

/** Sits beside the pricing card on desktop and directly under it on mobile. */
export function WeberFeaturedPhoto() {
  return (
    <figure className="weber-featured">
      <WeberPhotoFrame
        photo={FEATURED}
        sizes="(max-width: 900px) 92vw, 560px"
        className="weber-featured-frame"
      />
    </figure>
  );
}

/** Below-the-fold gallery. next/image lazy-loads these by default. */
export function WeberPhotoGallery() {
  return (
    <section className="weber-gallery" aria-labelledby="weber-gallery-title">
      <div className="bp-inner">
        <p className="eyebrow gold">After cleaning</p>
        <h2 id="weber-gallery-title">Weber grills after cleaning</h2>
        <ul className="weber-gallery-grid">
          {GALLERY.map((photo) => (
            <li key={photo.src}>
              <WeberPhotoFrame
                photo={photo}
                sizes="(max-width: 700px) 92vw, (max-width: 1100px) 45vw, 360px"
                className="weber-gallery-frame"
              />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
