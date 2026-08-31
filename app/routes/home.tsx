import type { Route } from "./+types/home";
import Header from "~/components/Header";
import Home_content from "~/components/home_core";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Casa Roofing Systems" },
    { name: "description", content: "Respectful-Clean-Guaranteed!" },
  ];
}

export default function Home() {
  return (
    <div id="app">
      <Header />
      <Home_content />
    </div>
  );
}
