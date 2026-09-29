export type Product = {
  id: string; name: string; brand: string; category: string; unit: string;
  price: number; mrp: number; rating: number; tags: string[]; stock: number;
  emoji: string; nutrition: string; description: string;
};

export const categories = [
  ["Fruits & Veg", "🥬"], ["Dairy", "🥛"], ["Snacks", "🍿"], ["Beverages", "🧃"],
  ["Bakery", "🥐"], ["Meat & Fish", "🐟"], ["Household", "🧽"], ["Baby", "🧸"],
  ["Pet", "🐾"], ["Personal Care", "🧴"],
] as const;

const catalog = [
  [["Fresh Spinach","Tomatoes","Bananas","Alphonso Mango","Potatoes","Avocado"],"Fruits & Veg","🥬"],
  [["Full Cream Milk","Fresh Paneer","Greek Yogurt","Salted Butter","Farm Eggs","Cheese Slices"],"Dairy","🥛"],
  [["Sea Salt Chips","Masala Makhana","Dark Chocolate","Trail Mix","Nachos","Oat Cookies"],"Snacks","🍿"],
  [["Coconut Water","Orange Juice","Cold Coffee","Lemon Soda","Green Tea","Mango Lassi"],"Beverages","🧃"],
  [["Whole Wheat Bread","Butter Croissant","Burger Buns","Banana Cake","Garlic Bread","Multigrain Loaf"],"Bakery","🥐"],
  [["Chicken Breast","Atlantic Salmon","Chicken Keema","Prawns","Rohu Steaks","Free Range Chicken"],"Meat & Fish","🐟"],
  [["Dishwash Liquid","Floor Cleaner","Laundry Pods","Kitchen Towels","Garbage Bags","Surface Spray"],"Household","🧽"],
  [["Baby Diapers","Baby Wipes","Cerelac Wheat","Baby Lotion","Feeding Bottle","Baby Shampoo"],"Baby","🧸"],
  [["Adult Dog Food","Cat Treats","Pet Shampoo","Puppy Biscuits","Cat Litter","Dental Chews"],"Pet","🐾"],
  [["Face Wash","Shampoo","Body Lotion","Toothpaste","Hand Wash","Sunscreen SPF 50"],"Personal Care","🧴"],
] as const;

export const products: Product[] = catalog.flatMap(([names, category, emoji], categoryIndex) =>
  names.map((name, index) => {
    const price = 35 + categoryIndex * 17 + index * 14;
    return {
      id: `p-${categoryIndex + 1}-${index + 1}`, name, brand: ["FreshFarm","Daily Good","Green Basket","Purely","HomeJoy"][index % 5] ?? "FreshDash",
      category, unit: index % 2 ? "500 g" : "1 pack", price, mrp: price + 10 + index * 3,
      rating: 4 + ((categoryIndex + index) % 9) / 10, tags: index % 3 === 0 ? ["veg","vegan","gluten-free"] : ["veg"],
      stock: (categoryIndex + index) % 13 === 0 ? 0 : 12 - index, emoji,
      nutrition: "Energy 120 kcal · Protein 6 g · Fibre 4 g per serving",
      description: `Carefully selected ${name.toLowerCase()} packed fresh for your everyday needs.`,
    };
  }),
);

export const promos = [
  { eyebrow: "FRESH PICKS", title: "Farm fresh, at your door", copy: "Up to 30% off fruits & vegetables", emoji: "🥑", tone: "bg-soft" },
  { eyebrow: "10-MINUTE BREAKFAST", title: "Mornings, sorted", copy: "Milk, eggs, bread and more from ₹29", emoji: "🍳", tone: "bg-brand-yellow" },
  { eyebrow: "MIDNIGHT MUNCHIES", title: "Snack attack? We got you.", copy: "Extra 15% off after 10 PM", emoji: "🍿", tone: "bg-accent" },
] as const;

export const recipes = ["Paneer butter masala","Veggie pasta","Masala omelette","Berry smoothie","Chicken curry","Taco night"];
export const coupons = { FIRST50: 50, FREEDEL: 25, SAVE20: 20 } as const;