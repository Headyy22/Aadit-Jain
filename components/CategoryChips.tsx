"use client";
import type { Category } from "@/lib/pieces";

type Value = "All" | Category;

export default function CategoryChips({ categories, active, onChange }: { categories: Value[]; active: Value; onChange: (c: Value) => void }) {
  return (
    <nav aria-label="Categories" className="mx-auto max-w-5xl px-4">
      <ul className="flex flex-wrap justify-center gap-2 sm:gap-3">
        {categories.map((c) => {
          const on = c === active;
          return (
            <li key={c}>
              <button
                onClick={() => onChange(c)}
                aria-pressed={on}
                className={`border px-4 py-2 font-sans text-[11px] uppercase tracking-wider2 transition-colors duration-500 ${
                  on ? "border-gold-light bg-burgundy text-ivory" : "border-gold/30 text-tan hover:border-gold hover:text-gold-light"
                }`}
              >
                {c}
              </button>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
