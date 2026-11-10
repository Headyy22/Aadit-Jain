// Single source for catalogue data — swap getPieces() for a DB/API call later.
export type Category = "Rings" | "Necklaces" | "Earrings" | "Bangles" | "Bridal";

export interface Piece {
  id: string;
  title: string;
  category: Category;
  description: string;
  motif: "solitaire" | "pendant" | "jhumka" | "bangle" | "choker" | "hoop" | "cocktail" | "maangtika" | "cuff";
}

export const categories: ("All" | Category)[] = ["All", "Rings", "Necklaces", "Earrings", "Bangles", "Bridal"];

export const pieces: Piece[] = [
  { id: "solitaire-regent", title: "The Regent Solitaire", category: "Rings", motif: "solitaire", description: "A single brilliant stone, claw-set in hand-finished gold." },
  { id: "cocktail-rani", title: "Rani Cocktail Ring", category: "Rings", motif: "cocktail", description: "A cluster of rubies and pearls, wrought in the old Mewar manner." },
  { id: "pendant-mayfair", title: "Mayfair Pendant", category: "Necklaces", motif: "pendant", description: "A teardrop pendant on a fine rope chain, made for everyday elegance." },
  { id: "choker-kensington", title: "Kensington Choker", category: "Necklaces", motif: "choker", description: "Graduated pearls and gold beads, worn close at the collarbone." },
  { id: "jhumka-udaipur", title: "Udaipur Jhumkas", category: "Earrings", motif: "jhumka", description: "Domed bells with delicate filigree and a soft pearl drop." },
  { id: "hoops-belgravia", title: "Belgravia Hoops", category: "Earrings", motif: "hoop", description: "Slim twisted hoops, light on the ear and made to be worn daily." },
  { id: "bangle-heirloom", title: "Heirloom Kada", category: "Bangles", motif: "bangle", description: "An engraved gold bangle, crafted to be handed down." },
  { id: "cuff-fifth", title: "Fifth Avenue Cuff", category: "Bangles", motif: "cuff", description: "A sleek open cuff with a single band of channel-set diamonds." },
  { id: "maangtika-vivaah", title: "Vivaah Maang Tikka", category: "Bridal", motif: "maangtika", description: "A bridal forehead jewel in polki and gold, finished to your wedding palette." },
  { id: "bridal-set-maharani", title: "Maharani Bridal Set", category: "Bridal", motif: "choker", description: "Necklace, earrings and tikka designed together, entirely to order." },
];

export async function getPieces(): Promise<Piece[]> {
  return pieces;
}
