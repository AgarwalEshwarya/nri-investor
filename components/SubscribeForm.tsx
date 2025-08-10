"use client";

export default function SubscribeForm() {
  return (
    <form
      className="mt-6 flex flex-col sm:flex-row gap-3"
      onSubmit={(e) => { e.preventDefault(); alert("Thanks! You'll hear from us soon."); }}
    >
      <input
        required
        type="email"
        placeholder="you@example.com"
        className="px-4 py-3 rounded-xl border w-full sm:w-96 bg-transparent"
        style={{ borderColor: "var(--ring)", color: "var(--fg)" }}
      />
      <button
        className="px-5 py-3 rounded-xl font-medium"
        style={{ background: "var(--primary)", color: "white" }}
      >
        Subscribe
      </button>
    </form>
  );
}
