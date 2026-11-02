import { useState } from "react";
import { CheckCircle2, Mail, MessageCircle } from "lucide-react";
import { contactSchema, type ContactInput } from "@/lib/contact-schema";
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
  const [values, setValues] = useState<ContactInput>(EMPTY);
  const [errors, setErrors] = useState<Errors>({});
  const [sentVia, setSentVia] = useState<"" | "WhatsApp" | "your email app">("");

  const update = (k: keyof ContactInput, v: string) => {
    setValues((s) => ({ ...s, [k]: v }));
    if (errors[k]) setErrors((e) => ({ ...e, [k]: undefined }));
  };

  const submit = (via: "whatsapp" | "email") => {
    const parsed = contactSchema.safeParse(values);
    if (!parsed.success) {
      const next: Errors = {};
      for (const issue of parsed.error.issues) {
        const k = issue.path[0] as keyof ContactInput;
        if (!next[k]) next[k] = issue.message;
      }
      setErrors(next);
      setSentVia("");
      return;
    }
    const d = parsed.data;
    const details = `Name: ${d.name}\nEmail: ${d.email}${d.phone ? `\nPhone: ${d.phone}` : ""}`;
    if (via === "whatsapp") {
      const text = `Subject: ${d.subject}\n\n${d.message}\n\n${details}`;
      window.open(`${CONTACT.whatsappHref}?text=${encodeURIComponent(text)}`, "_blank", "noopener,noreferrer");
      setSentVia("WhatsApp");
    } else {
      window.location.href = `${CONTACT.emailHref}?subject=${encodeURIComponent(d.subject)}&body=${encodeURIComponent(`${d.message}\n\n${details}`)}`;
      setSentVia("your email app");
    }
  };

  const inputCls =
    "mt-1.5 w-full rounded-md border border-input bg-background px-3.5 py-2.5 text-foreground outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/20";

  return (
    <div className="rounded-lg border border-border bg-card p-6 shadow-card sm:p-8">
      <h2 className="text-2xl">Send Us a Message</h2>
      <span className="gold-rule mt-4" />
      <p className="mt-4 text-muted-foreground">Fields marked * are required.</p>

      <form onSubmit={(e) => { e.preventDefault(); submit("whatsapp"); }} noValidate className="mt-6 space-y-5">
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
          {sentVia && (
            <p className="flex gap-2 rounded-md bg-gold-soft p-3 text-primary">
              <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0" />
              <span>Your message is ready in {sentVia}. Please press send there to deliver it to us.</span>
            </p>
          )}
        </div>

        <div className="flex flex-wrap gap-3">
          <button type="submit" className="inline-flex items-center gap-2 rounded-md bg-primary px-6 py-3 font-semibold text-primary-foreground transition hover:bg-primary/90">
            <MessageCircle className="h-4 w-4" /> Send Message via WhatsApp
          </button>
          <button type="button" onClick={() => submit("email")} className="inline-flex items-center gap-2 rounded-md border border-primary px-6 py-3 font-semibold text-primary transition hover:bg-primary/5">
            <Mail className="h-4 w-4" /> Send by Email
          </button>
        </div>
        <p className="text-sm text-muted-foreground">Messages go to WhatsApp {CONTACT.whatsapp} or {CONTACT.email}.</p>
      </form>
    </div>
  );
}
