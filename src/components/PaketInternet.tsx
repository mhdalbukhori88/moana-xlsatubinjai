"use client";

import Image from "next/image";

const packages = [
  {
    name: "Starter",
    speed: "20",
    price: "205.350",
    popular: false,
    features: [
      "Internet Unlimited 20 Mbps",
      "WiFi Router Gratis",
      "Termasuk PPN 11%",
      "Cocok untuk rumah",
      "Streaming tanpa buffering",
    ],
    color: "from-support to-secondary",
    ringColor: "ring-support/20",
  },
  {
    name: "SPARK 250",
    speed: "250",
    price: "254.190",
    popular: true,
    features: [
      "Internet Unlimited 250 Mbps",
      "WiFi Router Gratis",
      "Termasuk PPN 11%",
      "Gratis Biaya Instalasi",
      "Cocok keluarga & UMKM",
    ],
    color: "from-primary to-secondary",
    ringColor: "ring-primary/20",
  },
  {
    name: "SPARK 350",
    speed: "350",
    price: "309.690",
    popular: false,
    features: [
      "Internet Unlimited 350 Mbps",
      "WiFi Router Gratis",
      "Termasuk PPN 11%",
      "Rapat online & WFH lancar",
      "Banyak perangkat sekaligus",
    ],
    color: "from-primary to-support",
    ringColor: "ring-primary/20",
  },
  {
    name: "SPARK 400",
    speed: "400",
    price: "333.000",
    popular: false,
    features: [
      "Internet Unlimited 400 Mbps",
      "WiFi Router Gratis",
      "Termasuk PPN 11%",
      "Gaming lebih responsif",
      "Streaming 4K bersamaan",
    ],
    color: "from-secondary to-primary",
    ringColor: "ring-secondary/20",
  },
  {
    name: "SPARK 600",
    speed: "600",
    price: "555.000",
    popular: false,
    features: [
      "Internet Unlimited 600 Mbps",
      "WiFi Router Gratis Premium",
      "Termasuk PPN 11%",
      "Cocok untuk Kantor & Bisnis",
      "Unduh & unggah super cepat",
    ],
    color: "from-secondary to-support",
    ringColor: "ring-secondary/20",
  },
  {
    name: "SPARK 1000",
    speed: "1000",
    price: "999.000",
    popular: false,
    features: [
      "Internet Unlimited 1000 Mbps",
      "WiFi Router Gratis Premium",
      "Termasuk PPN 11%",
      "Kecepatan Maksimal Fiber Optic",
      "Dukungan prioritas 24/7",
    ],
    color: "from-primary via-secondary to-support",
    ringColor: "ring-primary/20",
  },
];

export default function PaketInternet() {
  return (
    <section id="paket" className="relative bg-white section-padding overflow-hidden">
      {/* Background decoration */}
      <div className="absolute -right-40 top-0 h-[500px] w-[500px] rounded-full bg-primary/[0.02] blur-3xl" />
      <div className="absolute -left-40 bottom-0 h-[400px] w-[400px] rounded-full bg-secondary/[0.02] blur-3xl" />
      
      <div className="container-main relative px-4 sm:px-6 lg:px-8">
        <div className="mb-8 sm:mb-12 text-center lg:mb-16">
          <div className="mb-3 inline-flex items-center gap-2 rounded-full bg-primary/5 px-3 sm:px-4 py-1.5 sm:py-2">
            <svg className="h-3.5 w-3.5 sm:h-4 sm:w-4 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
            <span className="text-[10px] sm:text-xs font-semibold text-primary uppercase tracking-wider">Pilihan Paket</span>
          </div>
          <h2 className="mb-3 sm:mb-4 text-2xl sm:text-3xl font-bold text-primary md:text-4xl lg:text-5xl">
            Pilih Paket Internet Terbaik
          </h2>
          <div className="mx-auto max-w-2xl text-sm sm:text-base text-text-muted sm:text-lg space-y-3 sm:space-y-4 text-center">
            <p>
              Tersedia pilihan hingga 1000 Mbps! Cocok untuk rumah, keluarga, UMKM, kantor, hingga bisnis. 
              Nikmati streaming tanpa buffering, rapat online lancar, gaming lebih responsif, serta unduh & unggah super cepat.
            </p>
            <div className="inline-flex flex-col items-center justify-center gap-1 mt-2 p-3 sm:p-4 bg-yellow-50 rounded-xl border border-yellow-200">
              <p className="text-xs sm:text-sm font-semibold text-yellow-800">⚡ Promo berlaku untuk pelanggan baru di area XL Footprint.</p>
              <p className="text-[10px] sm:text-sm font-medium text-yellow-700">📍 Khusus untuk wilayah Kota Binjai</p>
            </div>
          </div>
        </div>

        <div className="grid gap-4 sm:gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          {packages.map((pkg) => (
            <div
              key={pkg.name}
              className={`group relative flex flex-col rounded-2xl sm:rounded-3xl bg-white p-4 sm:p-6 shadow-lg transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl ${
                pkg.popular
                  ? "ring-2 ring-primary scale-[1.01] sm:scale-[1.02] lg:scale-105 z-10"
                  : "ring-1 ring-gray-100"
              }`}
            >
              {/* Popular badge */}
              {pkg.popular && (
                <div className="absolute -top-3 sm:-top-4 left-1/2 -translate-x-1/2">
                  <span className="inline-flex items-center gap-1 rounded-full bg-gradient-to-r from-primary to-support px-3 sm:px-5 py-1 sm:py-1.5 text-[10px] sm:text-xs font-bold text-white shadow-lg whitespace-nowrap">
                    <svg className="h-3 w-3 sm:h-3.5 sm:w-3.5" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                    Paling Populer
                  </span>
                </div>
              )}

              {/* Header */}
              <div className={`mb-4 sm:mb-6 rounded-xl sm:rounded-2xl bg-gradient-to-br ${pkg.color} p-4 sm:p-5 text-center`}>
                <h3 className="mb-1 text-sm sm:text-lg font-bold text-white">{pkg.name}</h3>
                <div className="flex items-end justify-center gap-1">
                  <span className="text-3xl sm:text-5xl font-black text-white">{pkg.speed}</span>
                  <span className="mb-1 text-xs sm:text-sm font-semibold text-white/80">Mbps</span>
                </div>
              </div>

              {/* Price */}
              <div className="mb-4 sm:mb-6 text-center">
                <div className="text-xs text-text-muted">Hanya</div>
                <div className="flex items-baseline justify-center gap-1">
                  <span className="text-xs sm:text-sm font-medium text-text-muted">Rp</span>
                  <span className="text-2xl sm:text-3xl font-extrabold text-text">{pkg.price}</span>
                </div>
                <div className="text-xs text-text-muted">/bulan</div>
              </div>

              {/* Features */}
              <ul className="mb-6 sm:mb-8 flex-1 space-y-2 sm:space-y-3">
                {pkg.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-2 sm:gap-3 text-xs sm:text-sm text-text">
                    <svg className="mt-0.5 h-3.5 w-3.5 sm:h-4 sm:w-4 flex-shrink-0 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              {/* CTA */}
              <a
                href={`https://wa.me/6285857547266?text=Halo%2C%20saya%20tertarik%20paket%20XL%20Satu%20${encodeURIComponent(pkg.name)}%20${pkg.speed}%20Mbps%20seharga%20Rp${pkg.price}%2Fbulan`}
                target="_blank"
                rel="noopener noreferrer"
                className={`flex items-center justify-center gap-2 rounded-full py-2.5 sm:py-3.5 text-xs sm:text-sm font-bold transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg ${
                  pkg.popular
                    ? "bg-primary text-white shadow-lg hover:bg-primary-dark"
                    : "border-2 border-primary bg-transparent text-primary hover:bg-primary hover:text-white"
                }`}
              >
                <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
                Pesan via WhatsApp
              </a>
            </div>
          ))}
        </div>

        {/* Brochure Section */}
        <div className="mt-12 sm:mt-20">
          <h3 className="mb-4 sm:mb-8 text-center text-xl sm:text-2xl font-bold text-primary md:text-3xl">
            Brosur Resmi XL SATU
          </h3>
          <div className="grid gap-4 sm:gap-8 grid-cols-1 md:grid-cols-2 max-w-5xl mx-auto">
            <div className="overflow-hidden rounded-xl sm:rounded-2xl shadow-xl transition-transform duration-300 hover:scale-[1.02]">
              <Image 
                src="/brosur-1.png" 
                alt="Brosur Harga XL SATU SPARK" 
                width={800} 
                height={1000} 
                className="w-full h-auto object-cover"
              />
            </div>
            <div className="overflow-hidden rounded-xl sm:rounded-2xl shadow-xl transition-transform duration-300 hover:scale-[1.02]">
              <Image 
                src="/brosur-2.png" 
                alt="Brosur XL SATU Fixed Wireless Access" 
                width={800} 
                height={1000} 
                className="w-full h-auto object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
