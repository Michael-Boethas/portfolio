import { notFound } from "next/navigation";

/**
 * Calling `notFound()` from `next/navigation` signals Next.js
 * to render the nearest `not-found.tsx` in the folder hierarchy,
 * which acts as the route’s 404 page.
 */
export default function CatchAllPage() {
  notFound();
}
