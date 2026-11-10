import type { Piece } from "@/lib/pieces";

// Gold line-drawing placeholders; replace with photography later.
const art: Record<Piece["motif"], React.ReactElement> = {
  solitaire: (<><circle cx="50" cy="68" r="22" /><path d="M38 40 L50 22 L62 40 L50 52 Z M38 40h24M50 22v30" /></>),
  cocktail: (<><circle cx="50" cy="72" r="20" /><circle cx="50" cy="38" r="7" /><circle cx="35" cy="45" r="5" /><circle cx="65" cy="45" r="5" /><circle cx="39" cy="31" r="4" /><circle cx="61" cy="31" r="4" /></>),
  pendant: (<><path d="M20 12 Q50 70 80 12" /><path d="M50 52 L40 66 Q50 84 60 66 Z" /><path d="M40 66h20" /></>),
  choker: (<><path d="M14 22 Q50 78 86 22" />{[26, 36, 46, 54, 64, 74].map((x, i) => <circle key={i} cx={x} cy={[36, 50, 58, 58, 50, 36][i] + 0} r="3.5" />)}</>),
  jhumka: (<><circle cx="50" cy="16" r="4" /><path d="M32 52 Q50 20 68 52 Z M36 52v4M44 52v4M52 52v4M60 52v4" /><circle cx="50" cy="72" r="5" /><path d="M50 56v11" /></>),
  hoop: (<><circle cx="50" cy="50" r="28" /><circle cx="50" cy="50" r="22" /><path d="M50 22v-8" /></>),
  bangle: (<><ellipse cx="50" cy="50" rx="34" ry="30" /><ellipse cx="50" cy="50" rx="26" ry="22" />{[0, 1, 2, 3, 4, 5, 6].map((i) => <path key={i} d={`M${24 + i * 8.7} 30 l3 -3`} />)}</>),
  cuff: (<><path d="M16 36 Q50 20 84 36 L84 64 Q50 48 16 64 Z" /><path d="M16 50 Q50 34 84 50" /><circle cx="40" cy="42" r="2.5" /><circle cx="50" cy="40" r="2.5" /><circle cx="60" cy="42" r="2.5" /></>),
  maangtika: (<><path d="M10 14 Q50 30 90 14" /><path d="M50 22v14" /><circle cx="50" cy="48" r="11" /><circle cx="50" cy="48" r="5" /><path d="M50 59v6M44 62l6 9 6-9" /></>),
};

export default function PieceArt({ motif }: { motif: Piece["motif"] }) {
  return (
    <svg viewBox="0 0 100 100" fill="none" stroke="#d4ae68" strokeWidth="0.9" strokeLinejoin="round" strokeLinecap="round" className="h-full w-full" aria-hidden>
      {art[motif]}
    </svg>
  );
}
