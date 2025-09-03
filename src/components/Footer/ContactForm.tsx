"use client";

import clsx from "clsx";
import Modal from "@/components/Modal/Modal";
import { useContactForm } from "@/hooks/useContactForm";
import { useLanguage } from "@/context/LanguageContext";
import { useTheme } from "@/context/ThemeContext";

interface ContactFormProps {
  // Modal controls
  isOpen: boolean;
  onClose: () => void;
}

/**
 * ContactForm component rendered inside a Modal.
 */
export default function ContactForm({ isOpen, onClose }: ContactFormProps) {
  const { textContent } = useLanguage();
  const { theme } = useTheme();

  const {
    email,
    setEmail,
    message,
    setMessage,
    status,
    handleSubmit,
    resetStatus,
  } = useContactForm({
    endpoint: `${process.env.NEXT_PUBLIC_EMAIL_SERVICE_ENDPOINT}`,
    successMessage: textContent.sections.contact.success_message,
    errorMessage: textContent.sections.contact.error_message,
  });

  return (
    <Modal
      isOpen={isOpen}
      onClose={() => {
        resetStatus();
        onClose();
      }}
      className={clsx(
        theme === "light" ? "theme-L" : "theme-D",
        "w-full bg-[var(--color-bg-contact)] p-6",
        "max-h-[75vh] overflow-scroll",
        "md:max-w-2/3 md:overflow-auto",
      )}
    >
      <div
        id="contact"
        className="flex items-center justify-between border-b-1 border-gray-300 pb-4"
      >
        <h2
          className={clsx(
            theme === "light"
              ? "theme-L text-[var(--color-txt-dark)]"
              : "theme-D text-[var(--color-txt-light)]",
            "text-lg",
          )}
        >
          {textContent.sections.contact.title}
        </h2>
        <button
          onClick={() => {
            resetStatus();
            onClose();
          }}
          className={clsx(
            theme === "light" ? "" : "text-[var(--color-txt-light)]",
            "px-4 text-5xl transition-opacity hover:text-[var(--color-primary)]",
          )}
          aria-label="Close"
        >
          &times;
        </button>
      </div>

      <form onSubmit={handleSubmit} className="mt-4 flex flex-col gap-4 pb-4">
        <input
          type="text"
          name="beeVomitJar"
          className="hidden"
          tabIndex={-1}
          autoComplete="off"
        />

        <div className="flex flex-col">
          <label
            htmlFor="emailInput"
            className={clsx(
              theme === "light"
                ? "theme-L text-[var(--color-txt-dark)]"
                : "theme-D text-[var(--color-txt-light)]",
              "py-4",
            )}
          >
            {textContent.sections.contact.email_input_label}
          </label>
          <input
            type="email"
            id="emailInput"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className={clsx(
              theme === "dark" ? "bg-white/60" : "bg-white",
              "border-1 border-gray-300 px-3 py-2",
            )}
          />
        </div>

        <div className="flex flex-col">
          <label
            htmlFor="messageTextArea"
            className={clsx(
              theme === "light"
                ? "theme-L text-[var(--color-txt-dark)]"
                : "theme-D text-[var(--color-txt-light)]",
              "py-4",
            )}
          >
            {textContent.sections.contact.text_input_label}
          </label>
          <textarea
            id="messageTextArea"
            rows={12}
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            required
            className={clsx(
              theme === "dark" ? "bg-white/60" : "bg-white",
              "border-1 border-gray-300 px-3 py-2",
            )}
          />
        </div>

        <button
          type="submit"
          className={clsx(
            "self-center bg-[var(--color-primary)]/80 px-6 py-3 text-xl text-white",
            "hover:bg-[var(--color-primary)]",
          )}
        >
          {textContent.sections.contact.submit_button_label}
        </button>
      </form>

      {status.message && (
        <p
          className={clsx(
            status.success ? "text-green-600" : "text-red-600",
            "mt-4 text-center text-xl",
          )}
        >
          {status.message}
        </p>
      )}
    </Modal>
  );
}
