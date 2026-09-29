import { Link, useNavigate } from "@tanstack/react-router";
import { ChevronDown, MapPin, Menu, Search, ShoppingBag, UserRound, X } from "lucide-react";
import { useEffect, useState, type FormEvent, type ReactNode } from "react";
import { Button } from "@/components/ui/button";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { Sheet, SheetContent, SheetHeader, SheetTitle } from "@/components/ui/sheet";
import { FreshDashProvider, useFreshDash } from "@/components/FreshDashProvider";
import { CartDrawer, ProductDetail, SmartAssistant } from "@/components/Overlays";

export function AppChrome({ children }: { children: ReactNode }) {
  return <FreshDashProvider><Shell>{children}</Shell></FreshDashProvider>;
}

function Shell({ children }: { children: ReactNode }) {
  const store = useFreshDash();
  const navigate = useNavigate();
  const [query,setQuery] = useState(""); const [compact,setCompact] = useState(false); const [menu,setMenu] = useState(false);
  useEffect(() => { const onScroll=()=>setCompact(window.scrollY>30); onScroll(); window.addEventListener("scroll",onScroll,{passive:true}); return()=>window.removeEventListener("scroll",onScroll); },[]);
  const search = (event: FormEvent) => { event.preventDefault(); if(query.trim()) void navigate({to:"/browse",search:{q:query.trim()}}); };
  return <div className="min-h-screen bg-background">
    <header className={`sticky top-0 z-40 border-b border-border/60 bg-background/95 backdrop-blur-xl transition-all ${compact ? "shadow-soft" : ""}`}>
      <div className={`mx-auto grid max-w-[1440px] grid-cols-[minmax(0,1fr)_auto] items-center gap-3 px-4 transition-all sm:flex ${compact ? "py-2" : "py-3"}`}>
        <Link to="/" className="flex shrink-0 items-center gap-2 font-extrabold text-primary"><span className="grid size-9 place-items-center rounded-xl bg-primary text-lg text-primary-foreground">F</span><span className="text-xl">FreshDash</span></Link>
        <div className="hidden h-10 w-px bg-border lg:block"/>
        <DropdownMenu><DropdownMenuTrigger asChild><Button variant="ghost" className="hidden h-auto min-w-44 justify-start rounded-xl px-2 text-left sm:flex"><MapPin className="text-primary"/><span><span className="block text-[11px] font-extrabold">Delivery in 9 minutes <span className="inline-block size-2 animate-pulse-dot rounded-full bg-primary"/></span><span className="block max-w-40 truncate text-xs text-muted-foreground">{store.address}</span></span><ChevronDown className="ml-auto"/></Button></DropdownMenuTrigger><DropdownMenuContent align="start">{["Home · Indiranagar","Work · Koramangala","Add a new address"].map(a=><DropdownMenuItem key={a} onClick={()=>store.setAddress(a)}>{a}</DropdownMenuItem>)}</DropdownMenuContent></DropdownMenu>
        <form onSubmit={search} className="order-3 col-span-2 flex min-w-0 flex-1 items-center rounded-full bg-muted px-4 sm:order-none"><Search className="size-4 shrink-0 text-muted-foreground"/><input aria-label="Search groceries" className="h-11 min-w-0 flex-1 bg-transparent px-3 text-sm outline-none placeholder:text-muted-foreground" placeholder='Search "milk" or ask for a recipe' value={query} onChange={e=>setQuery(e.target.value)}/></form>
        <Button variant="ghost" className="hidden rounded-full lg:flex"><UserRound/>Login</Button>
        <Button className="rounded-full px-3 sm:px-5" onClick={()=>store.setCartOpen(true)} aria-label={`Open cart with ${store.count} items`}><ShoppingBag className={store.count ? "animate-bump" : ""}/><span className="hidden sm:inline">{store.count ? `${store.count} items · ₹${store.total}` : "My cart"}</span>{store.count>0&&<span className="sm:hidden">{store.count}</span>}</Button>
        <Button size="icon" variant="ghost" className="absolute right-16 top-3 sm:hidden" aria-label="Open menu" onClick={()=>setMenu(true)}><Menu/></Button>
      </div>
    </header>
    {children}
    <Footer/>
    <CartDrawer/><ProductDetail/><SmartAssistant/>
    <Sheet open={menu} onOpenChange={setMenu}><SheetContent side="left" className="w-[86%]"><SheetHeader><SheetTitle>FreshDash</SheetTitle></SheetHeader><nav className="grid gap-2 p-4"><Link to="/" className="rounded-xl p-3 font-semibold">Home</Link><Link to="/browse" search={{q:""}} className="rounded-xl p-3 font-semibold">Browse all</Link><Link to="/tracking" className="rounded-xl p-3 font-semibold">Track order</Link></nav></SheetContent></Sheet>
  </div>;
}

function Footer(){return <footer className="mt-16 bg-foreground text-background"><div className="mx-auto grid max-w-7xl gap-10 px-5 py-12 md:grid-cols-4"><div><p className="text-xl font-extrabold">FreshDash</p><p className="mt-3 text-sm opacity-70">Fresh groceries, friendly prices, right when you need them.</p></div>{[["Explore","Fruits & vegetables","Daily essentials","New arrivals"],["Help","FAQs","Delivery areas","Contact us"],["Get the app","▣ App Store","▶ Google Play"]].map(([h,...items])=><div key={h}><p className="font-bold">{h}</p>{items.map(i=><p className="mt-3 text-sm opacity-70" key={i}>{i}</p>)}</div>)}</div></footer>}