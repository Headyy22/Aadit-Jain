"use client";
import { useState } from "react";
import { categories, type Category, type Piece } from "@/lib/pieces";
import CategoryChips from "./CategoryChips";
import PieceCard from "./PieceCard";

export default function Catalogue({ pieces }: { pieces: Piece[] }) {
  const [active, setActive] = useState<"All" | Category>("All");
  const shown = active === "All" ? pieces : pieces.filter((p) => p.category === active);
  return (
    <section className="pb-16">
      <CategoryChips categories={categories} active={active} onChange={setActive} />
      <div className="mx-auto mt-8 grid max-w-6xl grid-cols-2 gap-3 px-3 sm:gap-6 sm:px-6 lg:grid-cols-4">
        {shown.map((p, i) => (
          <PieceCard key={`${active}-${p.id}`} piece={p} index={i} />
        ))}
      </div>
    </section>
  );
}
