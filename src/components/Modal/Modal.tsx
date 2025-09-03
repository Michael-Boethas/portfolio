"use client";

import { useState, useEffect } from "react";
import { createPortal } from "react-dom";
import clsx from "clsx";

interface ModalProps {
  children: React.ReactNode;
  isOpen: boolean;
  onClose: () => void;
  className?: string;
}

/**
 * Modal component rendered via a portal.
 **/
export default function Modal({
  children,
  isOpen,
  onClose,
  className,
}: ModalProps) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", handleEsc);
    return () => document.removeEventListener("keydown", handleEsc);
  }, [onClose]);

  if (!mounted) return null;

  return createPortal(
    <>
      {/* Backdrop */}
      <div
        className={clsx(
          isOpen
            ? "pointer-events-auto opacity-100"
            : "pointer-events-none opacity-0",
          "fixed inset-0 z-10 h-screen w-screen bg-black/65 transition-opacity duration-300",
        )}
        onClick={onClose} // Close on backdrop click
      />
      {/* Modal container */}
      <div
        className={clsx(
          isOpen ? "translate-y-0" : "translate-y-[200%]",
          "pointer-events-none fixed inset-0 z-50 flex items-center justify-center p-4 transition-transform duration-300",
        )}
        tabIndex={-1}
      >
        {/* Modal content */}
        <div
          className={`pointer-events-auto relative ${className}`}
          onClick={(e) => e.stopPropagation()} // Prevent backdrop close when clicking inside
        >
          {children}
        </div>
      </div>
    </>,
    document.body, // Portal target
  );
}
