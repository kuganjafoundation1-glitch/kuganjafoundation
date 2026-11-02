import { createServerFn } from "@tanstack/react-start";
import { z } from "zod";

export const contactSchema = z.object({
  name: z.string().trim().min(1, "Please enter your full name").max(100, "Name must be under 100 characters"),
  email: z.string().trim().min(1, "Please enter your email address").email("Please enter a valid email address").max(255),
  phone: z
    .string()
    .trim()
    .max(30, "Phone number is too long")
    .regex(/^[+\d\s()-]*$/, "Use digits, spaces, +, - or brackets only"),
  subject: z.string().trim().min(1, "Please enter a subject").max(150, "Subject must be under 150 characters"),
  message: z.string().trim().min(1, "Please enter a message").max(2000, "Message must be under 2000 characters"),
});

export type ContactInput = z.infer<typeof contactSchema>;

/**
 * Delivers a contact message to the foundation's official inbox.
 * Delivery requires a verified sender email domain owned by the foundation.
 * Until one is configured this returns `not_configured` — never a false success.
 */
export const sendContactMessage = createServerFn({ method: "POST" })
  .inputValidator((input: unknown) => contactSchema.parse(input))
  .handler(async (): Promise<{ ok: true } | { ok: false; reason: "not_configured" }> => {
    return { ok: false, reason: "not_configured" };
  });
