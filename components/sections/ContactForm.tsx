"use client";

import { useState, type FormEvent } from "react";
import { Button } from "@/components/ui/Button";
import { buildContactMessage, openWhatsApp } from "@/lib/utils/whatsapp";

const inputClasses =
  "w-full rounded-xl border border-warm-gray-light bg-cloud px-4 py-3 text-base text-charcoal placeholder:text-warm-gray focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky";

export function ContactForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    openWhatsApp(buildContactMessage({ name, email, message }));
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-5">
      <div className="flex flex-col gap-2">
        <label
          htmlFor="contact-name"
          className="text-sm font-semibold text-charcoal"
        >
          Name
        </label>
        <input
          id="contact-name"
          name="name"
          type="text"
          required
          value={name}
          onChange={(event) => setName(event.target.value)}
          placeholder="Your name"
          className={inputClasses}
        />
      </div>

      <div className="flex flex-col gap-2">
        <label
          htmlFor="contact-email"
          className="text-sm font-semibold text-charcoal"
        >
          Email
        </label>
        <input
          id="contact-email"
          name="email"
          type="email"
          required
          value={email}
          onChange={(event) => setEmail(event.target.value)}
          placeholder="you@example.com"
          className={inputClasses}
        />
      </div>

      <div className="flex flex-col gap-2">
        <label
          htmlFor="contact-message"
          className="text-sm font-semibold text-charcoal"
        >
          Message
        </label>
        <textarea
          id="contact-message"
          name="message"
          required
          rows={4}
          value={message}
          onChange={(event) => setMessage(event.target.value)}
          placeholder="How can we help?"
          className={inputClasses}
        />
      </div>

      <Button type="submit" size="lg" className="w-full sm:w-auto">
        Send via WhatsApp
      </Button>
    </form>
  );
}
