import Link from "next/link";

export default function NotFound() {
  return (
    <div className="mx-auto max-w-lg px-4 py-24 text-center">
      <h1 className="text-4xl font-black text-gg-pink">404</h1>
      <p className="mt-4 text-lg text-white">Page not found</p>
      <p className="mt-2 text-sm text-gg-muted">
        The page you&apos;re looking for doesn&apos;t exist.
      </p>
      <Link
        href="/"
        className="mt-6 inline-block rounded-full gg-gradient-pink px-8 py-3 text-sm font-bold uppercase text-white"
      >
        Back to Home
      </Link>
    </div>
  );
}
