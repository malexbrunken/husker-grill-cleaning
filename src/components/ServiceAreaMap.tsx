import { site } from "@/lib/site";

/**
 * Google Business Profile map from Share > Embed a map.
 * The frame has a fixed height so the footer does not shift while the
 * lazy iframe loads.
 */
export function ServiceAreaMap() {
  return (
    <div className="footer-map">
      <iframe
        title="Husker Grill Cleaning on Google Maps"
        src={site.google.embedUrl}
        width={600}
        height={340}
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        allowFullScreen
      />
    </div>
  );
}
