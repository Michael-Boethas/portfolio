import { notFound } from "next/navigation";

export default function CatchAllPage({
  params,
}: {
  params: { slug?: string[] };
}) {
  notFound();
}
