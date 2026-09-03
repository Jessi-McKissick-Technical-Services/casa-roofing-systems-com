import type { Route } from "./+types/home";
import services from "../../JSON_data/services.json";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Casa Roofing Systems - Our Services" },
    { name: "description", content: "Respectful-Clean-Guaranteed!" },
  ];
}

export default function Services() {
    const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };
  return (
    // TODO: add click to jump functionality to the service plates
    <div id="services">
        <div id="service_heroes">
            <div className="service_hero" id="shingled_roofing" onClick={() => scrollToSection("info_shingled")} style={{ cursor: "pointer" }}>
                <h3>Shingle</h3>
            </div>
            <div className="service_hero" id="metal_roofing" onClick={() => scrollToSection("info_metal")} style={{ cursor: "pointer" }}>
                <h3>Metal</h3>
            </div>
            <div className="service_hero" id="flat_roofing" onClick={() => scrollToSection("info_flat")} style={{ cursor: "pointer" }}>
                <h3>Flat</h3>
            </div>
            <div className="service_hero" id="tile_roofing" onClick={() => scrollToSection("info_tile")} style={{ cursor: "pointer" }}>
                <h3>Tile</h3>
            </div>
        </div>
        <div id="service_spiels">
            <div className="service_info_plate" id="info_shingled">
                <h2>Shingle Roofing</h2>
                <p>{services.shingled}</p>
            </div>
            <div className="service_info_plate" id="info_metal">
                <h2>Metal Roofing</h2>
                <p>{services.metal}</p>
            </div>
            <div className="service_info_plate" id="info_flat">
                <h2>Flat Roofing</h2>
                <p>{services.flat}</p>
            </div>
            <div className="service_info_plate" id="info_tile">
                <h2>Tile Roofing</h2>
                <p>{services.tiled}</p>
            </div>
        </div>
    </div>
  );
}
