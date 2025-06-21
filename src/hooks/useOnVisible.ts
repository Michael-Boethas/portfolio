import { useEffect, useRef, useState } from "react";

/**
 * Custom hook that observes the visibility of an element in the viewport.
 *
 * @param threshold - The percentage of the element that must be visible to trigger the callback (default is 5%).
 * @param triggerOnce - Whether to trigger the callback only once (default is true).
 * @returns A ref to attach to the element and a boolean indicating visibility status.
 */

export default function useOnVisible<T extends HTMLElement>(
  threshold = 0.05,
  triggerOnce = true,
): [React.RefObject<T | null>, boolean] {
  const ref = useRef<T | null>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          if (triggerOnce) observer.disconnect(); // Only triggers once
        }
      },
      { threshold },
    );

    observer.observe(element);
    return () => observer.disconnect();
  }, [threshold, triggerOnce]);

  return [ref, isVisible];
}
