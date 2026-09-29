import { Clock3, Minus, Plus, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useFreshDash } from "@/components/FreshDashProvider";
import type { Product } from "@/data/products";
import { GroceryIcon } from "@/components/GroceryIcon";

export function ProductCard({ product, compact = false }: { product: Product; compact?: boolean }) {
  const store = useFreshDash();
  const qty = store.quantity(product.id);
  const discount = Math.round((1 - product.price / product.mrp) * 100);
  return (
    <article className={`group relative flex shrink-0 snap-start flex-col overflow-hidden rounded-2xl bg-card p-3 shadow-soft transition duration-300 hover:-translate-y-1 hover:shadow-lift ${compact ? "w-[156px] sm:w-[180px]" : "w-full"}`}>
      <button className="relative aspect-square w-full overflow-hidden rounded-xl bg-muted focus-visible:ring-2 focus-visible:ring-ring" onClick={() => store.setDetail(product)} aria-label={`View ${product.name}`}>
        <span className="absolute left-2 top-2 z-10 rounded-full bg-background/90 px-2 py-1 text-[10px] font-bold text-primary"><Clock3 className="mr-1 inline size-3"/>9 MIN</span>
        {discount > 5 && <span className="absolute right-2 top-0 z-10 rounded-b-lg bg-brand-yellow px-2 py-1 text-[10px] font-extrabold text-brand-yellow-foreground">{discount}% OFF</span>}
        <span className="grid size-full place-items-center text-primary transition duration-300 group-hover:scale-105"><GroceryIcon category={product.category} className="size-16"/></span>
      </button>
      <div className="flex min-h-[142px] flex-1 flex-col pt-3">
        <p className="line-clamp-2 min-h-10 text-sm font-bold leading-5">{product.name}</p>
        <p className="mt-1 text-xs text-muted-foreground">{product.unit}</p>
        <div className="mt-auto flex items-end justify-between gap-2 pt-3">
          <div><p className="text-sm font-extrabold">₹{product.price}</p><p className="text-[11px] text-muted-foreground line-through">₹{product.mrp}</p></div>
          {product.stock === 0 ? <Button size="sm" variant="outline" onClick={() => store.setDetail(product)}>Notify me</Button> : qty === 0 ?
            <Button size="sm" variant="outline" className="rounded-full border-primary px-4 font-extrabold text-primary shadow-none hover:bg-primary hover:text-primary-foreground" onClick={() => store.add(product)}>ADD</Button> :
            <div className="flex h-8 animate-bump items-center rounded-full bg-primary text-primary-foreground">
              <Button size="icon-sm" variant="ghost" className="rounded-full hover:bg-primary/80 hover:text-primary-foreground" aria-label={`Remove ${product.name}`} onClick={() => store.remove(product)}><Minus/></Button>
              <span className="w-6 text-center text-xs font-bold">{qty}</span>
              <Button size="icon-sm" variant="ghost" className="rounded-full hover:bg-primary/80 hover:text-primary-foreground" aria-label={`Add ${product.name}`} onClick={() => store.add(product)}><Plus/></Button>
            </div>}
        </div>
      </div>
      {product.stock === 0 && <div className="absolute inset-0 z-20 flex items-center justify-center bg-background/70 backdrop-blur-[1px]"><Button variant="secondary" className="rounded-full" onClick={() => store.setDetail(product)}><Sparkles/> AI alternatives</Button></div>}
    </article>
  );
}