import { createFileRoute } from "@tanstack/react-router";
import { CheckoutPage } from "@/components/CheckoutPage";
export const Route = createFileRoute("/checkout")({head:()=>({meta:[
  {title:"Checkout — FreshDash"},{name:"description",content:"Choose your delivery time and complete your FreshDash order."},
  {property:"og:title",content:"Checkout — FreshDash"},{property:"og:description",content:"Complete your fresh grocery order."},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary_large_image"},
]}),component:CheckoutPage});