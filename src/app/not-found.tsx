import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-surface px-4 text-center">
      <h1 className="text-6xl font-extrabold text-primary">404</h1>
      <h2 className="mt-4 text-2xl font-bold text-text">Halaman Tidak Ditemukan</h2>
      <p className="mt-2 text-sm text-text-muted">
        Maaf, halaman yang Anda cari tidak tersedia.
      </p>
      <Link
        href="/"
        className="btn-primary mt-6 text-sm"
      >
        Kembali ke Beranda
      </Link>
    </div>
  );
}
