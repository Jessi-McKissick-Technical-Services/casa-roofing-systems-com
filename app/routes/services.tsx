import type { Route } from "./+types/home";
import Header from "~/components/Header";
import Footer from "~/components/footer";
import services from "../../JSON_data/services.json";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Casa Roofing Systems - Our Services" },
    { name: "description", content: "Respectful-Clean-Guaranteed!" },
  ];
}

export default function Services() {
  return (
    <div id="services">
        <div id="service_heroes">
            <div className="service_hero" id="shingled_roofing">
                <h3>Shingled</h3>
                <button onClick={function(){

                }}>Read More</button>
            </div>
                        {/* TODO: Change metal_roofing bg img to a metal roof. none are in the asset batch */}

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
                <h3>Tiled</h3>
                <button onClick={function(){

                }}>Read More</button>
            </div>
        </div>
        <div id="service_spiels">
            <div className="service_info_plate">
                <h2>Shingled Roofing</h2>
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
                <h2>Tiled Roofing</h2>
                <p>{services.tiled}</p>
            </div>
        </div>
    </div>
  );
}
