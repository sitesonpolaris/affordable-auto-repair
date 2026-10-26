import type { MetadataRoute } from "next";
export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Affordable Auto Repair",
    short_name: "Affordable Auto",
    start_url: "/",
    display: "browser",
    background_color: "#0d1522",
    theme_color: "#0d1522",
    icons: [{ src: "/icon.svg", sizes: "any", type: "image/svg+xml" }],
  };
}
