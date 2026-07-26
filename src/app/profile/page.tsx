export const metadata = {
  title: "Profile | Girls Girl by Bigg Britt",
  description: "Your Girls Girl account.",
};

export default function ProfilePage() {
  return (
    <div className="mx-auto max-w-lg px-4 py-16 text-center md:py-24">
      <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-gg-pink/20 text-2xl font-black text-gg-pink">
        GG
      </div>
      <h1 className="mt-4 text-xl font-black uppercase tracking-wide text-white">
        Girls Girl Club
      </h1>
      <p className="mt-2 text-sm text-gg-muted">
        Sign in to access your orders, wishlist, and exclusive member drops.
      </p>
      <button
        type="button"
        className="mt-6 rounded-full gg-gradient-pink px-8 py-3 text-sm font-bold uppercase tracking-wide text-white transition-opacity hover:opacity-90"
      >
        Sign In
      </button>
    </div>
  );
}
