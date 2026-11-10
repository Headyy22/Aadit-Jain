import type { Piece } from "@/lib/pieces";
import { whatsappLink } from "@/lib/config";
import PieceArt from "./PieceArt";
import Reveal from "./Reveal";

export default function PieceCard({ piece, index = 0 }: { piece: Piece; index?: number }) {
  const href = whatsappLink(`Hello Tresorie, I'd like to enquire about "${piece.title}" (${piece.category}).`);
  return (
    <Reveal delay={(index % 4) * 120} className="h-full">
      <article className="h-full border border-gold bg-panel p-1.5 sm:p-2">
        <div className="flex h-full flex-col border border-gold/40 bg-burgundy/60 p-3 text-center sm:p-5">
          <div className="mx-auto aspect-square w-full max-w-[160px] p-2">
            <PieceArt motif={piece.motif} />
          </div>
          <p className="mt-2 font-sans text-[9px] uppercase tracking-wider2 text-tan">{piece.category}</p>
          <h3 className="mt-1 font-serif text-lg leading-snug text-ivory sm:text-2xl">{piece.title}</h3>
          <p className="mt-2 flex-1 font-serif text-sm leading-snug text-tan sm:text-base">{piece.description}</p>
          <a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="mx-auto mt-4 inline-block border-b border-gold/60 pb-1 font-sans text-[11px] uppercase tracking-widest text-gold-light transition-colors hover:border-gold-light hover:text-ivory"
          >
            Enquire
          </a>
        </div>
      </article>
    </Reveal>
  );
}
