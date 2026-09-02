import type { Route } from "./+types/home";
import services from "../../JSON_data/contact.json";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Casa Roofing Systems - Contact us" },
    { name: "description", content: "Respectful-Clean-Guaranteed!" },
  ];
}

export default function Contact() {
  return (
    <div id="contact">
        <p id="spiel">

        </p>

        <p id="phone_num">Phone: {services.contact_phone}</p>
        <p id="email_addr">Email: {services.contact_email}</p>
        <p id="address_cont">Address {services.address}</p>
    </div>
  );
}
