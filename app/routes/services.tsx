import type { Route } from "./+types/home";
import services from "../../JSON_data/services.json";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Casa Roofing Systems - Our Services" },
    { name: "description", content: "Respectful-Clean-Guaranteed!" },
  ];
}

export default function Services() {
  return (
    // TODO: add click to jump functionality to the service plates
    <div id="services">
        <div id="service_heroes">
            <div className="service_hero" id="shingled_roofing">
                <h3>Shingle</h3>
                <button onClick={function(){

                }}>Read More</button>
            </div>
            <div className="service_hero" id="metal_roofing">
                <h3>Metal</h3>
                <button onClick={function(){

                }}>Read More</button>
            </div>
            <div className="service_hero" id="flat_roofing">
                <h3>Flat</h3>
                <button onClick={function(){

                }}>Read More</button>
            </div>
            <div className="service_hero" id="tile_roofing">
                <h3>Tile</h3>
                <button onClick={function(){

                }}>Read More</button>
            </div>
        </div>
        <div id="service_spiels">
            <div className="service_info_plate">
                <h2>Shingle Roofing</h2>
                <p>{services.shingled}</p>
            </div>
            <div className="service_info_plate">
                <h2>Metal Roofing</h2>
                <p>{services.metal}</p>
            </div>
            <div className="service_info_plate">
                <h2>Flat Roofing</h2>
                <p>{services.flat}</p>
            </div>
            <div className="service_info_plate">
                <h2>Tiles Roofing</h2>
                <p>{services.tiled}</p>
            </div>
        </div>
    </div>
  );
}
