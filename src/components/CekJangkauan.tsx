"use client";

import { useState } from "react";

type CoverageStatus = "idle" | "loading" | "available" | "unavailable";

export default function CekJangkauan() {
  const [address, setAddress] = useState("");
  const [status, setStatus] = useState<CoverageStatus>("idle");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!address.trim()) return;

    setStatus("loading");

    // Simulate API call
    setTimeout(() => {
      const isAvailable = address.toLowerCase().includes("binjai") ||
        address.toLowerCase().includes("stabat") ||
        address.toLowerCase().includes("medan") ||
        address.length > 5;
      setStatus(isAvailable ? "available" : "unavailable");
    }, 2000);
  };

  const resetForm = () => {
    setAddress("");
    setStatus("idle");
  };

  return (
    <section id="cek-jangkauan" className="relative bg-surface section-padding">
      <div className="container-main">
        <div className="mx-auto max-w-3xl text-center">
          {/* Section header */}
          <div className="mb-3 inline-flex items-center gap-2 rounded-full bg-primary/5 px-4 py-2">
            <svg className="h-4 w-4 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
            <span className="text-xs font-semibold text-primary uppercase tracking-wider">Cek Jangkauan</span>
          </div>

          <h2 className="mb-4 text-3xl font-bold text-primary sm:text-4xl lg:text-5xl">
            Cek Ketersediaan di Area Anda
          </h2>
          <p className="mb-10 text-base text-text-muted sm:text-lg">
            Masukkan alamat atau kode pos untuk mengetahui apakah layanan XL SATU
            sudah tersedia di lokasi Anda
          </p>

          {/* Form card */}
          <div className="mx-auto max-w-2xl rounded-3xl bg-white p-6 shadow-xl sm:p-8 md:p-10">
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="relative">
                <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-4">
                  <svg className="h-5 w-5 text-text-muted" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                </div>
                <input
                  type="text"
                  value={address}
                  onChange={(e) => {
                    setAddress(e.target.value);
                    if (status !== "idle") setStatus("idle");
                  }}
                  placeholder="Masukkan alamat lengkap atau kode pos..."
                  className="w-full rounded-2xl border-2 border-gray-100 bg-surface py-4 pl-12 pr-4 text-sm text-text outline-none transition-all duration-300 placeholder:text-text-light focus:border-primary focus:ring-4 focus:ring-primary/10 sm:text-base"
                  disabled={status === "loading"}
                />
              </div>
              <button
                type="submit"
                disabled={status === "loading" || !address.trim()}
                className="btn-primary w-full py-4 text-base disabled:cursor-not-allowed disabled:opacity-50"
              >
                {status === "loading" ? (
                  <span className="flex items-center justify-center gap-3">
                    <svg className="h-5 w-5 animate-spin" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                    </svg>
                    Mengecek jangkauan...
                  </span>
                ) : (
                  "Cek Jangkauan Sekarang"
                )}
              </button>
            </form>

            {/* Results */}
            {status === "available" && (
              <div className="mt-6 animate-fade-in-up rounded-2xl border-2 border-green-200 bg-green-50 p-6">
                <div className="flex flex-col items-center gap-4 text-center">
                  <div className="flex h-16 w-16 items-center justify-center rounded-full bg-green-100">
                    <svg className="h-8 w-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-green-800">🎉 Area Anda Terjangkau!</h3>
                    <p className="mt-1 text-sm text-green-700">
                      Layanan XL SATU tersedia di lokasi <strong>{address}</strong>. Hubungi sales kami untuk
                      proses pemasangan.
                    </p>
                  </div>
                  <div className="flex flex-col gap-3 sm:flex-row">
                    <a
                      href={`https://wa.me/6285857547266?text=Halo%2C%20saya%20ingin%20pasang%20XL%20Satu%20di%20${encodeURIComponent(address)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-whatsapp"
                    >
                      <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                      </svg>
                      Hubungi Sales via WhatsApp
                    </a>
                    <button onClick={resetForm} className="btn-secondary text-sm">
                      Cek Alamat Lain
                    </button>
                  </div>
                </div>
              </div>
            )}

            {status === "unavailable" && (
              <div className="mt-6 animate-fade-in-up rounded-2xl border-2 border-amber-200 bg-amber-50 p-6">
                <div className="flex flex-col items-center gap-4 text-center">
                  <div className="flex h-16 w-16 items-center justify-center rounded-full bg-amber-100">
                    <svg className="h-8 w-8 text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4.5c-.77-.833-2.694-.833-3.464 0L3.34 16.5c-.77.833.192 2.5 1.732 2.5z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-amber-800">Belum Tersedia</h3>
                    <p className="mt-1 text-sm text-amber-700">
                      Mohon maaf, layanan di <strong>{address}</strong> belum tersedia saat ini.
                      Hubungi sales kami untuk informasi lebih lanjut.
                    </p>
                  </div>
                  <div className="flex flex-col gap-3 sm:flex-row">
                    <a
                      href={`https://wa.me/6285857547266?text=Halo%2C%20saya%20ingin%20menanyakan%20ketersediaan%20XL%20Satu%20di%20${encodeURIComponent(address)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-whatsapp"
                    >
                      Tanya Sales
                    </a>
                    <button onClick={resetForm} className="btn-secondary text-sm">
                      Cek Alamat Lain
                    </button>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
