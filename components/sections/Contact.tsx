import { Mail, Phone } from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ContactForm } from "@/components/sections/ContactForm";
import { CONTACT_EMAIL, CONTACT_PHONE } from "@/lib/constants";

export function Contact() {
  return (
    <section className="bg-cloud py-20 lg:py-28">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Contact"
          title="Have a Question? Let's Chat"
          subtitle="Send us a message and we'll reply over WhatsApp — usually within a day."
        />

        <div className="mt-10 flex flex-col gap-4 text-sm text-warm-gray sm:flex-row sm:items-center sm:justify-center sm:gap-10">
          <a
            href={`mailto:${CONTACT_EMAIL}`}
            className="inline-flex items-center gap-2 py-3 transition-colors hover:text-sky-dark"
          >
            <Mail size={16} aria-hidden="true" /> {CONTACT_EMAIL}
          </a>
          <span className="inline-flex items-center gap-2 py-3">
            <Phone size={16} aria-hidden="true" /> {CONTACT_PHONE}
          </span>
        </div>

        <div className="mt-10">
          <ContactForm />
        </div>
      </div>
    </section>
  );
}
