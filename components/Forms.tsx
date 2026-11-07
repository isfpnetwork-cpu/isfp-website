"use client";

import Link from "next/link";
import { type FormEvent, type ReactNode, useId, useState } from "react";
import { newsletterConsentText, newsletterConsentVersion, type NewsletterSource } from "@/lib/newsletter";

type Option = {
  label: string;
  value: string;
};

const defaultInterests: Option[] = [
  { label: "Founding community", value: "founding-community" },
  { label: "Capability assessment pilot", value: "assessment" },
  { label: "Advisory or working group", value: "advisory" },
  { label: "Partnership or institutional engagement", value: "partnership" },
  { label: "Resources and updates", value: "resources" }
];

export function InterestForm({
  title,
  submitLabel,
  interests = defaultInterests
}: {
  title: string;
  submitLabel: string;
  interests?: Option[];
}) {
  const formNoteId = useId();

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
  }

  return (
    <form className="rounded-md border border-navy/10 bg-white p-6 shadow-soft" onSubmit={handleSubmit}>
      {/* Future integration point: connect this form to backend validation, database storage, CRM routing and email notifications. */}
      <h2 className="font-serif text-2xl text-navy">{title}</h2>
      <div className="mt-6 grid gap-4 sm:grid-cols-2">
        <Field label="Name" name="name" autoComplete="name" />
        <Field label="Email" name="email" type="email" autoComplete="email" />
        <Field label="Organisation" name="organisation" autoComplete="organization" />
        <Field label="Role" name="role" autoComplete="organization-title" />
        <Field label="Country" name="country" autoComplete="country-name" />
        <label className="text-sm font-medium text-navy">
          Area of interest
          <select name="interest" className="focus-ring mt-2 h-12 w-full rounded-md border border-navy/20 bg-ivory px-3 text-sm text-navy">
            {interests.map((interest) => (
              <option key={interest.value} value={interest.value}>{interest.label}</option>
            ))}
          </select>
        </label>
      </div>
      <label className="mt-4 block text-sm font-medium text-navy">
        Message
        <textarea name="message" rows={5} className="focus-ring mt-2 w-full rounded-md border border-navy/20 bg-ivory px-3 py-3 text-sm text-navy" />
      </label>
      <label className="mt-4 flex gap-3 text-sm leading-6 text-slate">
        <input type="checkbox" name="consent" className="mt-1 h-4 w-4 rounded border-navy/20 text-navy" required />
        I agree to be contacted about ISFP updates, opportunities and related professional body activity.
      </label>
      <button type="submit" className="focus-ring mt-6 rounded-md bg-navy px-5 py-3 text-sm font-semibold text-white transition hover:bg-ink" aria-describedby={formNoteId}>
        {submitLabel}
      </button>
      <p id={formNoteId} className="sr-only">This form is prepared for future backend integration.</p>
    </form>
  );
}

export function NewsletterForm({ source, children }: { source: NewsletterSource; children?: ReactNode }) {
  const emailId = useId();
  const noticeId = useId();
  const [state, setState] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [error, setError] = useState("");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (state === "loading") return;

    const form = event.currentTarget;
    const fields = new FormData(form);
    setState("loading");
    setError("");

    try {
      const response = await fetch("/api/newsletter", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          email: fields.get("email"),
          consent: fields.get("consent") === "on",
          consentVersion: newsletterConsentVersion,
          source
        }),
        signal: AbortSignal.timeout(16000)
      });

      if (response.ok && (await response.json()).ok === true) {
        form.reset();
        setState("success");
        return;
      }

      setError(response.status === 429
        ? "Too many attempts. Please wait a minute and try again."
        : response.status === 400
          ? "Check your email address and consent, then try again. If the issue persists, refresh the page."
          : "We could not confirm your signup. Please try again shortly.");
    } catch {
      setError("We could not confirm your signup. Please try again shortly.");
    }
    setState("error");
  }

  return (
    <div className="grid gap-8 lg:grid-cols-[1fr_0.9fr] lg:items-start">
      <div>
        <h2 className="font-serif text-3xl leading-tight sm:text-4xl">Stay Connected with ISFP</h2>
        <p className="mt-4 max-w-2xl text-sm leading-7 text-white/75">
          Receive updates on ISFP&apos;s development, professional standards, research, insights and community activities.
        </p>
        {children}
      </div>
      <form action="/api/newsletter" method="post" onSubmit={handleSubmit} aria-busy={state === "loading"}>
        <fieldset disabled={state === "loading"} className="min-w-0 space-y-4">
          <legend className="sr-only">Newsletter signup</legend>
          <label className="sr-only" htmlFor={emailId}>Email address</label>
          <input id={emailId} name="email" type="email" autoComplete="email" maxLength={254} required placeholder="Enter your email address" className="focus-ring min-h-11 w-full rounded-md border border-white/20 bg-white px-4 text-sm text-navy placeholder:text-slate" />
          <label className="flex items-start gap-3 text-sm leading-6">
            <input type="checkbox" name="consent" required aria-describedby={noticeId} className="focus-ring mt-1 h-4 w-4 shrink-0 accent-gold" />
            <span>{newsletterConsentText}</span>
          </label>
          <p id={noticeId} className="text-sm leading-6 text-white/75">
            You can withdraw your consent at any time. Read our <Link href="/privacy" className="focus-ring rounded-sm text-white underline decoration-gold underline-offset-4">Privacy Notice</Link> to learn how we handle your information.
          </p>
          <button type="submit" className="focus-ring min-h-11 min-w-28 rounded-md bg-gold px-5 py-3 text-sm font-semibold text-navy hover:bg-white disabled:cursor-wait disabled:opacity-75">
            {state === "loading" ? "Signing up..." : "Sign up"}
          </button>
        </fieldset>
        <p role="status" className="mt-3 text-sm leading-6 text-white empty:mt-0">
          {state === "success" && "Thank you. Your newsletter signup request has been received."}
        </p>
        {state === "error" && <p role="alert" className="mt-3 text-sm leading-6 text-white">{error}</p>}
      </form>
    </div>
  );
}

function Field({
  label,
  name,
  type = "text",
  autoComplete
}: {
  label: string;
  name: string;
  type?: string;
  autoComplete?: string;
}) {
  return (
    <label className="text-sm font-medium text-navy">
      {label}
      <input name={name} type={type} autoComplete={autoComplete} className="focus-ring mt-2 h-12 w-full rounded-md border border-navy/20 bg-ivory px-3 text-sm text-navy" />
    </label>
  );
}
