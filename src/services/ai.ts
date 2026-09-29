import { products, type Product } from "@/data/products";

const wait = (key: string) => new Promise((resolve) => setTimeout(resolve, 600 + (key.length % 7) * 90));
const words = (value: string) => value.toLowerCase().split(/\W+/).filter(Boolean);

export async function naturalSearch(query: string) {
  await wait(query);
  const q = words(query);
  const paneer = query.toLowerCase().includes("paneer");
  const healthy = query.toLowerCase().includes("healthy");
  const matched = products.filter((p) => q.some((w) => p.name.toLowerCase().includes(w) || p.category.toLowerCase().includes(w)));
  const fallback = paneer ? products.filter((p) => ["Fresh Paneer","Tomatoes","Salted Butter","Fresh Spinach"].includes(p.name)) : healthy ? products.filter((p) => p.tags.includes("vegan")).slice(0, 6) : products.slice(6, 12);
  return { intent: paneer ? ["Recipe","4 servings","Indian"] : healthy ? ["Healthy","Under ₹300","Breakfast"] : ["Smart match","Fast delivery"], products: (matched.length ? matched : fallback).slice(0, 8) };
}

export async function recipeToCart(dish: string, servings = 4) {
  await wait(dish);
  const result = await naturalSearch(dish);
  return { dish, servings, products: result.products.slice(0, Math.max(4, Math.min(8, servings + 1))) };
}

export async function substitution(product: Product) {
  await wait(product.id);
  const alternative = products.find((p) => p.category === product.category && p.stock > 0 && p.id !== product.id) ?? products[1];
  return { product: alternative, reason: `Similar pick, in stock and ₹${Math.abs((alternative?.price ?? 0) - product.price)} price difference` };
}

export async function budgetAdvice(total: number, budget: number) {
  await wait(`${total}${budget}`);
  return total <= budget ? `You're ₹${budget - total} under budget. Nice planning!` : `Swap two premium picks to save about ₹${Math.ceil((total - budget) * .7)}.`;
}

export async function chatReply(prompt: string) {
  await wait(prompt);
  const result = await naturalSearch(prompt);
  const text = prompt.toLowerCase().includes("week") ? "I made a balanced weekly basket with breakfast basics, fresh produce and quick dinner helpers." : "Here are a few fresh picks that fit what you asked for.";
  return { text, products: result.products.slice(0, 3) };
}