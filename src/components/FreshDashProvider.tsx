import { createContext, useContext, useEffect, useMemo, useState, type ReactNode } from "react";
import { products, type Product } from "@/data/products";

type Cart = Record<string, number>;
type Store = { cart: Cart; address: string; budgetMode: boolean; budget: number; cartOpen: boolean; detail: Product | null; total: number; count: number; setCartOpen(v:boolean):void; setDetail(v:Product|null):void; setAddress(v:string):void; setBudgetMode(v:boolean):void; setBudget(v:number):void; add(p:Product):void; remove(p:Product):void; quantity(id:string):number };
const Context = createContext<Store | null>(null);

export function FreshDashProvider({ children }: { children: ReactNode }) {
  const [cart, setCart] = useState<Cart>({});
  const [address, setAddressState] = useState("Home · Indiranagar");
  const [budgetMode, setBudgetModeState] = useState(false);
  const [budget, setBudgetState] = useState(800);
  const [cartOpen, setCartOpen] = useState(false);
  const [detail, setDetail] = useState<Product | null>(null);
  useEffect(() => { const saved = localStorage.getItem("freshdash-store"); if (saved) { try { const s = JSON.parse(saved) as {cart?:Cart;address?:string;budgetMode?:boolean;budget?:number}; setCart(s.cart ?? {}); setAddressState(s.address ?? "Home · Indiranagar"); setBudgetModeState(s.budgetMode ?? false); setBudgetState(s.budget ?? 800); } catch { /* ignore malformed local data */ } } }, []);
  useEffect(() => { localStorage.setItem("freshdash-store", JSON.stringify({ cart, address, budgetMode, budget })); }, [cart,address,budgetMode,budget]);
  const value = useMemo<Store>(() => {
    const count = Object.values(cart).reduce((a,b) => a+b, 0);
    const total = products.reduce((sum,p) => sum + p.price * (cart[p.id] ?? 0), 0);
    return { cart,address,budgetMode,budget,cartOpen,detail,total,count,setCartOpen,setDetail,setAddress:setAddressState,setBudgetMode:setBudgetModeState,setBudget:setBudgetState,
      add:(p) => setCart((c) => ({...c,[p.id]:(c[p.id]??0)+1})), remove:(p) => setCart((c) => ({...c,[p.id]:Math.max(0,(c[p.id]??0)-1)})), quantity:(id) => cart[id]??0 };
  }, [cart,address,budgetMode,budget,cartOpen,detail]);
  return <Context.Provider value={value}>{children}</Context.Provider>;
}
export function useFreshDash() { const value = useContext(Context); if (!value) throw new Error("FreshDashProvider missing"); return value; }