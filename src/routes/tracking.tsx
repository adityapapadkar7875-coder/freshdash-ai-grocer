import { createFileRoute } from "@tanstack/react-router";
import { TrackingPage } from "@/components/TrackingPage";
export const Route = createFileRoute("/tracking")({head:()=>({meta:[
  {title:"Track Your Order — FreshDash"},{name:"description",content:"Follow your FreshDash grocery order from packing to arrival."},
  {property:"og:title",content:"Track Your Order — FreshDash"},{property:"og:description",content:"Your fresh grocery order is on the move."},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary_large_image"},
]}),component:TrackingPage});