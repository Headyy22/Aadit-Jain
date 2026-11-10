import { ADDRESS, whatsappLink } from "@/lib/config";

export default function Footer() {
  return (
    <footer className="border-t border-gold/40 px-4 py-8 text-center">
      <p className="font-sans text-[11px] uppercase tracking-wider2 text-tan">
        <a href={whatsappLink("Hello Tresorie, I'd like to make an enquiry.")} target="_blank" rel="noopener noreferrer" className="text-gold-light hover:text-ivory">
          Enquire on WhatsApp
        </a>
        <span className="mx-2 text-gold">·</span>
        {ADDRESS}
      </p>
    </footer>
  );
}
