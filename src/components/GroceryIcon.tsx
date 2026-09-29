import { Baby, Croissant, CupSoda, Droplets, Fish, Leaf, Milk, PawPrint, Popcorn, SprayCan, type LucideIcon } from "lucide-react";

const iconMap: Record<string, LucideIcon> = {
  "Fruits & Veg": Leaf, Dairy: Milk, Snacks: Popcorn, Beverages: CupSoda,
  Bakery: Croissant, "Meat & Fish": Fish, Household: SprayCan, Baby,
  Pet: PawPrint, "Personal Care": Droplets,
};

export function GroceryIcon({ category, className = "size-12" }: { category: string; className?: string }) {
  const Icon = iconMap[category] ?? Leaf;
  return <Icon className={className} strokeWidth={1.7}/>;
}