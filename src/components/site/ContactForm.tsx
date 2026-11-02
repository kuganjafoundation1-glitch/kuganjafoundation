import { useState } from "react";
import { useServerFn } from "@tanstack/react-start";
import { CheckCircle2, AlertCircle, Send } from "lucide-react";
import { contactSchema, sendContactMessage, type ContactInput } from "@/lib/contact.functions";
import { CONTACT } from "@/lib/site";

const EMPTY: ContactInput = { name: "", email: "", phone: "", subject: "", message: "" };
type Errors = Partial<Record<keyof ContactInput, string>>;

const FIELDS: { key: keyof ContactInput; label: string; type?: string; required: boolean; auto?: string }[] = [
  { key: "name", label: "Full Name", required: true, auto: "name" },
  { key: "email", label: "Email Address", type: "email", required: true, auto: "email" },
  { key: "phone", label: "Phone Number", type: "tel", required: false, auto: "tel" },
  { key: "subject", label: "Subject", required: true },
];

export function ContactForm() {
  const send = useServerFn(sendContactMessage);
  const [values, setValues] = useState<ContactInput>(EMPTY);
  const [errors, setErrors] = useState<Errors>({});
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "unavailable" | "error">("idle");

  const update = (k: keyof ContactInput, v: string) => {
    setValues((s) => ({ ...s, [k]: v }));
    if (errors[k]) setErrors((e) => ({ ...e, [k]: undefined }));
  };

  const mailto = `${CONTACT.emailHref}?subject=${encodeURIComponent(values.subject)}&body=${encodeURIComponent(
    `${values.message}\n\n${values.name}${values.phone ? `\n${values.phone}` : ""}\n${values.email}`,
  )}`;

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const parsed = contactSchema.safeParse(values);
    if (!parsed.success) {
      const next: Errors = {};
      for (const issue of parsed.error.issues) {
        const k = issue.path[0] as keyof ContactInput;
        if (!next[k]) next[k] = issue.message;
      }
      setErrors(next);
      setStatus("idle");
      return;
    }
    setStatus("sending");
    try {
      const res = await send({ data: parsed.data });
      if (res.ok) {
        setStatus("sent");
        setValues(EMPTY);
      } else {
        setStatus("unavailable");
      }
    } catch {
      setStatus("error");
    }
  };

  const inputCls =
    "mt-1.5 w-full rounded-md border border-input bg-background px-3.5 py-2.5 text-foreground outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/20";

  return (
    <div className="rounded-lg border border-border bg-card p-6 shadow-card sm:p-8">
      <h2 className="text-2xl">Send Us a Message</h2>
      <span className="gold-rule mt-4" />
      <p className="mt-4 text-muted-foreground">Fields marked * are required.</p>

      <form onSubmit={onSubmit} noValidate className="mt-6 space-y-5">
        <div className="grid gap-5 sm:grid-cols-2">
          {FIELDS.map((f) => (
            <div key={f.key}>
              <label htmlFor={`cf-${f.key}`} className="text-sm font-semibold text-primary">
                {f.label}{f.required && <span className="text-gold"> *</span>}
              </label>
              <input
                id={`cf-${f.key}`}
                type={f.type ?? "text"}
                autoComplete={f.auto}
                value={values[f.key]}
                onChange={(e) => update(f.key, e.target.value)}
                aria-invalid={!!errors[f.key]}
                aria-describedby={errors[f.key] ? `cf-${f.key}-err` : undefined}
                className={inputCls}
              />
              {errors[f.key] && <p id={`cf-${f.key}-err`} className="mt-1 text-sm text-destructive">{errors[f.key]}</p>}
            </div>
          ))}
        </div>
        <div>
          <label htmlFor="cf-message" className="text-sm font-semibold text-primary">
            Message<span className="text-gold"> *</span>
          </label>
          <textarea
            id="cf-message"
            rows={6}
            value={values.message}
            onChange={(e) => update("message", e.target.value)}
            aria-invalid={!!errors.message}
            className={`${inputCls} resize-y`}
          />
          {errors.message && <p className="mt-1 text-sm text-destructive">{errors.message}</p>}
        </div>

        <div aria-live="polite">
          {status === "sent" && (
            <p className="flex gap-2 rounded-md bg-gold-soft p-3 text-primary">
              <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0" /> Thank you — your message has been sent. We'll get back to you soon.
            </p>
          )}
          {(status === "unavailable" || status === "error") && (
            <p className="flex gap-2 rounded-md border border-destructive/40 bg-destructive/5 p-3 text-foreground">
              <AlertCircle className="mt-0.5 h-5 w-5 shrink-0 text-destructive" />
              <span>
                Your message could not be sent{status === "unavailable" ? " — online messaging isn't available yet" : ""}. Please{" "}
                <a href={mailto} className="font-semibold text-primary underline hover:text-gold">email us directly</a>{" "}
                or call {CONTACT.phone}.
              </span>
            </p>
          )}
        </div>

        <button
          type="submit"
          disabled={status === "sending"}
          className="inline-flex items-center gap-2 rounded-md bg-primary px-6 py-3 font-semibold text-primary-foreground transition hover:bg-primary/90 disabled:opacity-60"
        >
          <Send className="h-4 w-4" /> {status === "sending" ? "Sending…" : "Send Message"}
        </button>
      </form>
    </div>
  );
}
