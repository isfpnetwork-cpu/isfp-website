"use client";

import { type FormEvent, useId } from "react";

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

export function NewsletterForm() {
  const emailId = useId();

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
  }

  return (
    <form className="flex flex-col gap-3 sm:flex-row" onSubmit={handleSubmit}>
      {/* Future integration point: connect newsletter signups to email marketing consent, CRM tagging and preference management. */}
      <label className="sr-only" htmlFor={emailId}>Email address</label>
      <input id={emailId} name="email" type="email" placeholder="Email address" className="focus-ring min-h-11 flex-1 rounded-md border border-white/20 bg-white px-4 text-sm text-navy placeholder:text-slate" />
      <button type="submit" className="focus-ring rounded-md bg-gold px-5 py-3 text-sm font-semibold text-navy transition hover:bg-white">
        Sign up
      </button>
    </form>
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
