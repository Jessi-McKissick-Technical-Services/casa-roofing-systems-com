import type { Route } from "./+types/home";
import Header from "~/components/Header";
import Footer from "~/components/footer";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Casa Roofing Systems - Our Services" },
    { name: "description", content: "Respectful-Clean-Guaranteed!" },
  ];
}

export default function Services() {
  return (
    <div id="services">
        
    </div>
  );
}
