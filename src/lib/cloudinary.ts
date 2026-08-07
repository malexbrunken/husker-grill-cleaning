/** Cloudinary delivery helpers for the See Our Work gallery. */

export const CLOUDINARY_CLOUD = "f69kw8ao";
export const CLOUDINARY_HOST = "res.cloudinary.com";

export type GalleryItem = {
  id: string;
  src: string;
  alt: string;
};

/** Insert Cloudinary transforms after /upload/ */
export function cloudinaryUrl(
  url: string,
  width: number,
  mode: "thumb" | "full" = "thumb",
): string {
  const transform =
    mode === "thumb"
      ? `f_auto,q_auto:good,dpr_auto,w_${width},c_fill,g_auto`
      : `f_auto,q_auto:good,dpr_auto,w_${width},c_limit`;
  return url.replace("/upload/", `/upload/${transform}/`);
}

export function galleryAlt(index: number): string {
  return `Grill after professional deep cleaning by Husker Grill Cleaning — result ${index + 1}`;
}

/** Masonry aspect ratios cycling through the gallery (matches live site). */
export const GALLERY_RATIOS = [
  "4 / 3",
  "3 / 4",
  "1 / 1",
  "4 / 5",
  "16 / 11",
  "3 / 4",
  "4 / 3",
  "1 / 1",
] as const;

export const MARQUEE_TOP_INDEXES = [0, 19, 30, 44, 59, 76] as const;
export const MARQUEE_BOTTOM_INDEXES = [4, 12, 24, 37, 51, 68] as const;
