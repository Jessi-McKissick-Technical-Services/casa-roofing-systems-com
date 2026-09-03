import type { Route } from "./+types/home";
import contact_data from "../../JSON_data/contact.json";
import roofing7 from "../assets/upscaled/roofing7.png";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Casa Roofing Systems - Contact us" },
    { name: "description", content: "Respectful-Clean-Guaranteed!" },
  ];
}

export default function Contact() {
  return (
    <div id="contact">
      <img src={roofing7}></img>
      <p id="spiel">{contact_data.spiel}</p>
      <div id="contact_plate">
        <p id="phone_num"><b>Phone:</b> <b></b>{contact_data.contact_phone}</p>
        <p id="email_addr"><b>Email:</b> {contact_data.contact_email}</p>
        <p id="address_cont"><b>Address:</b> {contact_data.address}</p>
      </div>
      <p id="CTA">Contact us today for your FREE quote!</p>
      <iframe src={contact_data.map_embed} width="600" height="450" loading="lazy"></iframe>

    </div>
  );
}
