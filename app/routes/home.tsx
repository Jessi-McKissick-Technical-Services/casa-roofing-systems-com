import type { Route } from "./+types/home";
import home from "../../JSON_data/home.json";
import img_1895 from "../assets/upscaled/IMG_1895.png";
import roofing_1 from "../assets/upscaled/roofing1.png";
import roofing_2 from "../assets/upscaled/roofing2.png";
import roofing_3 from "../assets/upscaled/roofing3.png";
import roofing_4 from "../assets/upscaled/roofing4.png";
import roofing_5 from "../assets/upscaled/roofing5.png";
import roofing_6 from "../assets/upscaled/roofing6.png";
import roofing_7 from "../assets/upscaled/roofing7.png";
import inspection_icon from "../assets/icons/magnifying-glass-solid-full.svg";
import approval_icon from "../assets/icons/handshake-regular-full.svg";
import install_icon from "../assets/icons/helmet-safety-solid-full.svg";
import final_icon from "../assets/icons/clipboard-regular-full.svg";


export function meta({}: Route.MetaArgs) {
  return [
    { title: "Casa Roofing Systems - Home" },
    { name: "description", content: "Respectful-Clean-Guaranteed!" },
  ];
}

export default function Home() {
  return (
    <div id="home">
      <img src={img_1895} id="hero" alt="Image of a high quality shingle roof."></img>
      <div id="sizzle_tape">
          <h2>{home.Hero_Banner}</h2>
      </div>
      <div id="bullet_box">
          <div id="point_1" className="selling_point">
              <img src="https://placehold.co/400x400" className="point_image" alt="Point image 1" />
              <div>
                  <h3 className="point_title">{home.point_1_title}</h3>
                  <p className="point_info">
                      {home.point_1_content}
                  </p>
              </div>

          </div>
          <div id="point_2" className="selling_point">
              <img src="https://placehold.co/400x400" className="point_image" alt="Point image 2"/>
              <div>
                  <h3 className="point_title">{home.point_2_title}</h3>
                  <p className="point_info">
                      {home.point_2_content}
                  </p>
              </div>
          </div>
          <div id="point_3" className="selling_point">
              <img src="https://placehold.co/400x400" className="point_image" alt="Point image 3"/>
              <div>
                  <h3 className="point_title">{home.point_3_title}</h3>
                  <p className="point_info">
                      {home.point_3_content}
                  </p>
              </div>
          </div>
          <div id="point_4" className="selling_point">
              <img src="https://placehold.co/400x400" className="point_image" alt="Point image 4"/>
              <div>
                  <h3 className="point_title">{home.point_4_title}</h3>
                  <p className="point_info">
                      {home.point_4_content}
                  </p>
              </div>
          </div>
      </div>
      <div id="service_box">
          <div id="process_box">
              <h2>The process</h2>
              <div className="process_step">
                  <img src={inspection_icon} alt="Inspection icon"/>
                  <h3>FREE Inspection</h3>
                  <p>Our seasoned professionals assess your roof for leaks, structural damage, and condition.</p>
              </div >
              <div className="process_step">
                  <img src={approval_icon} alt="Client approval icon" />
                  <h3>Approval</h3>
                  <p>Once approved, we handle the rest. Permits, scheduling, and process.</p>
              </div>
              <div className="process_step">
                  <img src={install_icon} alt="Installation icon" />
                  <h3>Install</h3>
                  <p>We safely remove the old roofing, inspect decking, and install your brand new roof with expert precision and care.</p>
              </div>
              <div className="process_step">
                  <img src={final_icon} alt="Final inspection logo" />
                  <h3>Final inspection</h3>
                  <p>We perform final checks to ensure quality and finish, and provide you with a warranty just in case.</p>
              </div>
          </div>
          <div id="gallery">
              {/* TODO: Add click and drag to scroll during programming phase */}
              <img src={roofing_1} className="gallery_item" alt="Gallery image of prior work."></img>
              <img src={roofing_2} className="gallery_item" alt="Gallery image of prior work."></img>
              <img src={roofing_3} className="gallery_item" alt="Gallery image of prior work."></img>
              <img src={roofing_4} className="gallery_item" alt="Gallery image of prior work."></img>
              <img src={roofing_5} className="gallery_item" alt="Gallery image of prior work."></img>
              <img src={roofing_6} className="gallery_item" alt="Gallery image of prior work."></img>
              <img src={roofing_7} className="gallery_item" alt="Gallery image of prior work."></img>
          </div>
      </div>
      <div id="FAQ_box">
          <div className="FAQ_item">
              <h3>{home.FAQ_1_title}</h3>
              <p>{home.FAQ_1_content}</p>
          </div>
          <div className="FAQ_item">
              <h3>{home.FAQ_2_title}</h3>
              <p>{home.FAQ_2_content}</p>
          </div>
          <div className="FAQ_item">
              <h3>{home.FAQ_3_title}</h3>
              <p>{home.FAQ_3_content}</p>
          </div>
          <div className="FAQ_item">
              <h3>{home.FAQ_4_title}</h3>
              <p>{home.FAQ_4_content}</p>
          </div>
          <div className="FAQ_item">
              <h3>{home.FAQ_5_title}</h3>
              <p>{home.FAQ_5_content}</p>
          </div>
      </div>
    </div>
  );
}
