"use client";

import { useEffect } from "react";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-surface px-4 text-center">
      <h1 className="text-5xl font-extrabold text-primary">500</h1>
      <h2 className="mt-4 text-2xl font-bold text-text">Terjadi Kesalahan System</h2>
      <p className="mt-2 text-sm text-text-muted">
        Mohon maaf, terjadi kendala saat memuat halaman.
      </p>
      <button
        onClick={() => reset()}
        className="btn-primary mt-6 text-sm"
      >
        Coba Lagi
      </button>
    </div>
  );
}
