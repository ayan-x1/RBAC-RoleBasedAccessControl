import Link from "next/link";

export default function BackButton({
  href = "/",
  label = "Back",
}) {
  return (
    <Link href={href} className="btn-back">
      <span aria-hidden="true">←</span>
      <span>{label}</span>
    </Link>
  );
}
