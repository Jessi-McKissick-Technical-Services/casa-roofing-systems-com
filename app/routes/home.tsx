import type { Route } from "./+types/home";
import Header from "~/components/Header";
import Footer from "~/components/footer";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Casa Roofing Systems - Home" },
    { name: "description", content: "Respectful-Clean-Guaranteed!" },
  ];
}

export default function Home() {
  return (
    <div id="home">
      <img src="./app/assets/upscaled/IMG_1895.png" id="hero"></img>
      <div id="sizzle_tape">
          <h2>We serve the greater LA area!</h2>
      </div>
      <div id="bullet_box">
          <div id="point_1" className="selling_point">
              <img src="https://placehold.co/400x400" className="point_image" />
              <div>
                  <h3 className="point_title">Lorem</h3>
                  <p className="point_info">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                  </p>
              </div>

          </div>
          <div id="point_2" className="selling_point">
              <img src="https://placehold.co/400x400" className="point_image" />
              <div>
                  <h3 className="point_title">Ipsum</h3>
                  <p className="point_info">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                  </p>
              </div>
          </div>
          <div id="point_3" className="selling_point">
              <img src="https://placehold.co/400x400" className="point_image" />
              <div>
                  <h3 className="point_title">Dolor</h3>
                  <p className="point_info">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                  </p>
              </div>
          </div>
          <div id="point_4" className="selling_point">
              <img src="https://placehold.co/400x400" className="point_image" />
              <div>
                  <h3 className="point_title">Sit amet</h3>
                  <p className="point_info">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                  </p>
              </div>
          </div>
      </div>
      <div id="service_box">
          <div id="process_box">
              <h2>The process</h2>
              <div className="process_step">
                  <img src="" />
                  <h3>FREE Inspection</h3>
                  <p>Our seasoned professionals assess your roof for leaks, structural damage, and condition.</p>
              </div >
              <div className="process_step">
                  <img src="" />
                  <h3>Approval</h3>
                  <p>Once approved, we handle the rest. Permits, scheduling, and process.</p>
              </div>
              <div className="process_step">
                  <img src="" />
                  <h3>Install</h3>
                  <p>We safely remove the old roofing, inspect decking, and install your brand new roof with expert precision and care.</p>
              </div>
              <div className="process_step">
                  <img src="" />
                  <h3>Final inspection</h3>
                  <p>We perform final checks to ensure quality and finish, and provide you with a warranty just in case.</p>
              </div>
          </div>
          <div id="gallery">
              {/* TODO: Add click and drag to scroll during programming phase */}
              <img src="./app/assets/upscaled/roofing1.png" className="gallery_item"></img>
              <img src="./app/assets/upscaled/roofing2.png" className="gallery_item"></img>
              <img src="./app/assets/upscaled/roofing3.png" className="gallery_item"></img>
              <img src="./app/assets/upscaled/roofing4.png" className="gallery_item"></img>
              <img src="./app/assets/upscaled/roofing5.png" className="gallery_item"></img>
              <img src="./app/assets/upscaled/roofing6.png" className="gallery_item"></img>
              <img src="./app/assets/upscaled/roofing7.png" className="gallery_item"></img>
          </div>
      </div>
      <div id="FAQ_box">
          <div className="FAQ_item">
              <h3>What makes cleaning and protecting my roof so important?</h3>
              <p>By keeping your roof clean and protected you are helping to ensure its longevity, 
                  prevent costly repairs, and maintains its efficacy.
              </p>
          </div>
          <div className="FAQ_item">
              <h3>Lorem Ipsum Dolor</h3>
              <p>Lorem ipsum dolor sit amet, etc etc.</p>
          </div>
          <div className="FAQ_item">
              <h3>Lorem Ipsum Dolor</h3>
              <p>Lorem ipsum dolor sit amet, etc etc.</p>
          </div>
          <div className="FAQ_item">
              <h3>Lorem Ipsum Dolor</h3>
              <p>Lorem ipsum dolor sit amet, etc etc.</p>
          </div>
          {/* TODO: a set of FAQs. */}
      </div>
    </div>
  );
}
