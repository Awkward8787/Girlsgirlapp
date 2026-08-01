export const metadata = {
  title: "Profile | Girls Girl WTTB",
  description: "Your Girls Girl Club account.",
};

export default function ProfilePage() {
  return (
    <div
      data-od-id="profile"
      className="mx-auto flex max-w-lg flex-col items-center px-4 py-20 text-center md:py-28"
    >
      <div className="flex h-24 w-24 items-center justify-center rounded-full border border-gg-champagne/30 bg-gg-surface">
        <span className="font-display text-3xl italic text-gg-champagne">GG</span>
      </div>
      <p className="gg-editorial-label mt-8">Girls Girl Club</p>
      <h1 className="gg-display mt-2 text-3xl uppercase">Your Account</h1>
      <p className="mt-4 max-w-xs text-sm leading-relaxed text-white/45">
        Sign in to access orders, wishlist, and exclusive member drops.
      </p>
      <button type="button" className="gg-btn-primary mt-8">
        Sign In
      </button>
    </div>
  );
}
