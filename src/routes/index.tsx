import { createFileRoute } from "@tanstack/react-router";
import { HomePage } from "@/components/HomePage";

export const Route = createFileRoute("/")({
  head: () => ({ meta: [
    { title: "FreshDash — Groceries in 10 Minutes" },
    { name: "description", content: "Fresh groceries, smart baskets and everyday essentials delivered in minutes." },
    { property: "og:title", content: "FreshDash — Groceries in 10 Minutes" },
    { property: "og:description", content: "Fresh groceries and smart baskets delivered in minutes." },
    { property: "og:type", content: "website" },
    { name: "twitter:card", content: "summary_large_image" },
  ]}), component: HomePage,
});