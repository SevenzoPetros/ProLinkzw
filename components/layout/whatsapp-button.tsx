"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageCircle, X } from "lucide-react";
import { siteConfig } from "@/lib/site-config";

export function WhatsAppButton() {
  const [open, setOpen] = useState(false);
  const waLink1 = `https://wa.me/${siteConfig.contact.whatsapp.replace(/[^0-9]/g, "")}?text=${encodeURIComponent(
    "Hi ProLinkzw, I'd like to find out more about your services.",
  )}`;
  const waLink2 = `https://wa.me/${siteConfig.contact.whatsapp2.replace(/[^0-9]/g, "")}?text=${encodeURIComponent(
    "Hi ProLinkzw, I'd like to find out more about your services.",
  )}`;

  return (
    <div className="fixed bottom-5 right-5 z-40 flex flex-col items-end gap-3 md:bottom-7 md:right-7">
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 12, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 12, scale: 0.96 }}
            transition={{ duration: 0.2 }}
            className="w-72 rounded-2xl border border-ink/10 bg-mist-50 p-5 shadow-card-hover dark:border-white/10 dark:bg-night-100"
          >
            <div className="flex items-start justify-between gap-3">
              <div>
                <p className="font-display text-sm font-semibold text-ink dark:text-mist-50">
                  Chat with ProLinkzw
                </p>
                <p className="mt-1.5 text-sm leading-relaxed text-ink-muted dark:text-mist-300/75">
                  Typical reply time: under 2 hours during business days.
                </p>
              </div>
              <button
                onClick={() => setOpen(false)}
                className="rounded-full p-1 text-ink-soft transition-colors hover:bg-ink/5 dark:hover:bg-white/10"
                aria-label="Close"
              >
                <X className="h-4 w-4" />
              </button>
            </div>
            <div className="mt-4 flex flex-col gap-2">
              <a
                href={waLink1}
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-11 items-center justify-center gap-2 rounded-full bg-teal-400 text-sm font-medium text-white transition-colors hover:bg-teal-500"
              >
                <MessageCircle className="h-4 w-4" />
                {siteConfig.contact.whatsappDisplay}
              </a>
              <a
                href={waLink2}
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-11 items-center justify-center gap-2 rounded-full bg-teal-400 text-sm font-medium text-white transition-colors hover:bg-teal-500"
              >
                <MessageCircle className="h-4 w-4" />
                {siteConfig.contact.whatsappDisplay2}
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.button
        onClick={() => setOpen((v) => !v)}
        whileTap={{ scale: 0.92 }}
        aria-label="Open WhatsApp chat"
        className="flex h-14 w-14 items-center justify-center rounded-full bg-teal-400 text-white shadow-card-hover transition-colors hover:bg-teal-500"
      >
        <AnimatePresence mode="wait" initial={false}>
          {open ? (
            <motion.span key="x" initial={{ rotate: -90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: 90, opacity: 0 }}>
              <X className="h-6 w-6" />
            </motion.span>
          ) : (
            <motion.span key="msg" initial={{ rotate: 90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: -90, opacity: 0 }}>
              <MessageCircle className="h-6 w-6" />
            </motion.span>
          )}
        </AnimatePresence>
      </motion.button>
    </div>
  );
}
