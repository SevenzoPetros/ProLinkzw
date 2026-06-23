"use client";

import { useState, type FormEvent } from "react";
import { Loader2, CheckCircle2, AlertCircle } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { serviceCategories } from "@/lib/data/services";

type Status = "idle" | "loading" | "success" | "error";

export function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [errorMessage, setErrorMessage] = useState("");

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("loading");
    setErrorMessage("");

    const form = e.currentTarget;
    const data = new FormData(form);
    const payload = {
      name: String(data.get("name") || ""),
      email: String(data.get("email") || ""),
      phone: String(data.get("phone") || ""),
      service: String(data.get("service") || ""),
      message: String(data.get("message") || ""),
    };

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      const result = await res.json();

      if (!res.ok) {
        setErrorMessage(result.error || "Something went wrong. Please try again.");
        setStatus("error");
        return;
      }

      setStatus("success");
      form.reset();
    } catch {
      setErrorMessage("Couldn't reach the server. Please try again or message us on WhatsApp.");
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <div className="flex flex-col items-start gap-3 rounded-2xl border border-teal-400/30 bg-teal-50 p-8 dark:bg-teal-400/10">
        <CheckCircle2 className="h-8 w-8 text-teal-500 dark:text-teal-200" />
        <h3 className="font-display text-lg font-semibold text-ink dark:text-mist-50">
          Message sent — thank you.
        </h3>
        <p className="text-sm leading-relaxed text-ink-muted dark:text-mist-300/80">
          We typically reply within one business day. If it&apos;s urgent, message us directly on WhatsApp.
        </p>
        <Button variant="outline" size="sm" onClick={() => setStatus("idle")}>
          Send another message
        </Button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div className="grid gap-5 sm:grid-cols-2">
        <div className="space-y-2">
          <Label htmlFor="name">Full name</Label>
          <Input id="name" name="name" placeholder="Tendai Marufu" required minLength={2} />
        </div>
        <div className="space-y-2">
          <Label htmlFor="email">Email address</Label>
          <Input id="email" name="email" type="email" placeholder="you@business.co.zw" required />
        </div>
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <div className="space-y-2">
          <Label htmlFor="phone">Phone / WhatsApp (optional)</Label>
          <Input id="phone" name="phone" type="tel" placeholder="+263 77 000 0000" />
        </div>
        <div className="space-y-2">
          <Label htmlFor="service">Service of interest</Label>
          <select
            id="service"
            name="service"
            defaultValue=""
            className="flex h-12 w-full rounded-xl border border-ink/12 bg-mist-50 px-4 text-sm text-ink transition-colors focus-visible:border-copper-400 dark:border-white/12 dark:bg-night-100 dark:text-mist-50"
          >
            <option value="">Select a service</option>
            {serviceCategories.map((s) => (
              <option key={s.slug} value={s.name}>
                {s.name}
              </option>
            ))}
            <option value="Not sure yet">Not sure yet</option>
          </select>
        </div>
      </div>

      <div className="space-y-2">
        <Label htmlFor="message">Tell us about your project</Label>
        <Textarea
          id="message"
          name="message"
          placeholder="What does your business do, and what are you hoping to fix or build?"
          required
          minLength={10}
        />
      </div>

      {status === "error" && (
        <div className="flex items-start gap-2.5 rounded-xl border border-red-400/30 bg-red-50 p-4 text-sm text-red-600 dark:bg-red-400/10 dark:text-red-300">
          <AlertCircle className="mt-0.5 h-4 w-4 shrink-0" />
          {errorMessage}
        </div>
      )}

      <Button type="submit" size="lg" className="w-full sm:w-auto" disabled={status === "loading"}>
        {status === "loading" ? (
          <>
            <Loader2 className="h-4 w-4 animate-spin" />
            Sending...
          </>
        ) : (
          "Send message"
        )}
      </Button>
    </form>
  );
}
