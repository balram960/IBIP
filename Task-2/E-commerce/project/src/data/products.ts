import type { Product } from "@/types";

export const products: Product[] = [
  {
    id: 1,
    name: "Hand-Thrown Stoneware Vase",
    price: 68,
    category: "Decor",
    image:
      "https://images.pexels.com/photos/27180805/pexels-photo-27180805.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
    description:
      "A minimalist stoneware vase thrown by hand and finished with a soft matte glaze. Each piece carries subtle variations that make it one of a kind — perfect for dried stems or a single statement bloom.",
    rating: 4.8,
    reviews: 126,
  },
  {
    id: 2,
    name: "Stonewashed Linen Throw",
    price: 124,
    category: "Textiles",
    image:
      "https://images.pexels.com/photos/11125918/pexels-photo-11125918.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
    description:
      "Woven from pure stonewashed linen, this throw softens with every wash. Drape it over the arm of a sofa or fold it at the foot of the bed for an effortless layer of warmth and texture.",
    rating: 4.9,
    reviews: 203,
  },
  {
    id: 3,
    name: "Olive Wood Cutting Board",
    price: 54,
    category: "Kitchen",
    image:
      "https://images.pexels.com/photos/9725823/pexels-photo-9725823.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
    description:
      "Carved from a single piece of Mediterranean olive wood, each board reveals a unique grain pattern. A juice groove along the edge makes it as practical as it is beautiful.",
    rating: 4.7,
    reviews: 89,
  },
  {
    id: 4,
    name: "Brass Pivot Table Lamp",
    price: 189,
    category: "Lighting",
    image:
      "https://images.pexels.com/photos/34193297/pexels-photo-34193297.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
    description:
      "A warm brass arm pivots on a weighted marble base, casting a focused glow exactly where you need it. The dimmable LED bulb lets you tune the atmosphere from focused to ambient.",
    rating: 4.6,
    reviews: 64,
  },
  {
    id: 5,
    name: "Seagrass Storage Basket",
    price: 42,
    category: "Storage",
    image:
      "https://images.pexels.com/photos/34667143/pexels-photo-34667143.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
    description:
      "Handwoven from natural seagrass with integrated handles. Roomy enough for blankets, firewood, or a stack of magazines, it brings organic warmth to any corner.",
    rating: 4.8,
    reviews: 151,
  },
  {
    id: 6,
    name: "Soy Wax Candle — Cedar & Sage",
    price: 38,
    category: "Decor",
    image:
      "https://images.pexels.com/photos/35505878/pexels-photo-35505878.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
    description:
      "Poured from clean-burning soy wax into a reusable glass vessel. Notes of cedar, sage, and a whisper of amber create a grounding, woodsy atmosphere that lasts up to 50 hours.",
    rating: 4.9,
    reviews: 312,
  },
  {
    id: 7,
    name: "Matte Glaze Mug Set",
    price: 46,
    category: "Kitchen",
    image:
      "https://images.pexels.com/photos/6312194/pexels-photo-6312194.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
    description:
      "A set of four ceramic mugs finished in a soft matte glaze with a comfortable oversized handle. Dishwasher and microwave safe for everyday rituals.",
    rating: 4.7,
    reviews: 178,
  },
  {
    id: 8,
    name: "Solid Oak Picture Frame",
    price: 58,
    category: "Decor",
    image:
      "https://images.pexels.com/photos/12961119/pexels-photo-12961119.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
    description:
      "Milled from solid white oak with a natural oil finish that deepens over time. The clean profile lets your photography take center stage on a shelf or gallery wall.",
    rating: 4.6,
    reviews: 73,
  },
  {
    id: 9,
    name: "Organic Cotton Bath Towel",
    price: 72,
    category: "Textiles",
    image:
      "https://images.pexels.com/photos/45980/pexels-photo-45980.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
    description:
      "Loomed from long-staple organic cotton for a plush, highly absorbent weave. The neutral tone complements any bathroom while the fabric grows softer with every cycle.",
    rating: 4.8,
    reviews: 197,
  },
];

export const categories: string[] = [
  ...new Set(products.map((p) => p.category)),
].sort();
