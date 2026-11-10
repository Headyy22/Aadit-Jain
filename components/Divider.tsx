export default function Divider() {
  return (
    <div className="mx-auto flex w-full max-w-xs items-center gap-3" aria-hidden>
      <span className="h-px flex-1 bg-gradient-to-r from-transparent to-gold" />
      <span className="block h-2 w-2 rotate-45 border border-gold-light bg-burgundy" />
      <span className="h-px flex-1 bg-gradient-to-l from-transparent to-gold" />
    </div>
  );
}
