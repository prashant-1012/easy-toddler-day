import type { Metadata } from "next";
import { Mail, MapPin, Phone } from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ContactForm } from "@/components/sections/ContactForm";
import { CONTACT_ADDRESS, CONTACT_EMAIL, CONTACT_PHONE } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Get in touch with Easy Toddler Day — questions, bulk orders, or just to say hi.",
};

export default function ContactPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
      <SectionHeading
        eyebrow="Contact Us"
        title="We'd Love to Hear From You"
        subtitle="Questions about a workbook, bulk orders for a classroom, or just want to say hi — reach out and we'll get back to you over WhatsApp."
      />

      <div className="mx-auto mt-10 flex max-w-lg flex-col gap-4 text-sm text-warm-gray sm:flex-row sm:flex-wrap sm:justify-center sm:gap-8">
        <a
          href={`mailto:${CONTACT_EMAIL}`}
          className="inline-flex items-center gap-2 transition-colors hover:text-sky-dark"
        >
          <Mail size={16} aria-hidden="true" /> {CONTACT_EMAIL}
        </a>
        <span className="inline-flex items-center gap-2">
          <Phone size={16} aria-hidden="true" /> {CONTACT_PHONE}
        </span>
        <span className="inline-flex items-center gap-2">
          <MapPin size={16} aria-hidden="true" /> {CONTACT_ADDRESS}
        </span>
      </div>

      <div className="mt-12">
        <ContactForm />
      </div>
    </div>
  );
}
