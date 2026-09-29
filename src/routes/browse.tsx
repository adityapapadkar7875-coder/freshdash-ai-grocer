import { createFileRoute } from "@tanstack/react-router";
import { z } from "zod";
import { BrowsePage } from "@/components/BrowsePage";
export const Route = createFileRoute("/browse")({
  validateSearch: z.object({ q: z.string().catch("") }),
  head: () => ({ meta: [
    { title: "Browse Groceries — FreshDash" }, { name: "description", content: "Browse fresh groceries, daily essentials and quick deals." },
    { property: "og:title", content: "Browse Groceries — FreshDash" }, { property: "og:description", content: "Fresh groceries and essentials delivered fast." },
    { property: "og:type", content: "website" }, { name: "twitter:card", content: "summary_large_image" },
  ]}), component: BrowseRoute,
});
function BrowseRoute(){const {q}=Route.useSearch();return <BrowsePage query={q}/>}