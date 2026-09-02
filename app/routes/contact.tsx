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

    </div>
  );
}
