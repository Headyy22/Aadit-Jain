import Divider from "./Divider";
import Reveal from "./Reveal";

export default function Hero() {
  return (
    <section className="px-6 py-12 text-center sm:py-20">
      <Reveal>
        <p className="font-sans text-[11px] uppercase tracking-widest2 text-gold">Jewels and more</p>
        <h2 className="mx-auto mt-5 max-w-2xl font-serif text-4xl leading-tight text-ivory sm:text-6xl">
          Made to order, made for you
        </h2>
        <p className="mx-auto mt-5 max-w-md font-serif text-lg text-tan sm:text-xl">
          Each piece is drawn, cast and finished by hand in Udaipur, to your wish and your occasion.
        </p>
        <div className="mt-8"><Divider /></div>
      </Reveal>
    </section>
  );
}
