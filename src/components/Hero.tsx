"use client";

import Image from "next/image";

export default function Hero() {
  return (
    <section id="beranda" className="relative min-h-[85vh] sm:min-h-[90vh] flex items-center overflow-hidden pt-20 pb-16 md:pt-28 md:pb-24">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/hero-bg.jpg"
          alt="XL SATU Internet Rumah Super Cepat"
          fill
          priority
          className="object-cover object-center"
        />
        {/* Gradient overlay for optimal readability & contrast */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#00186B]/95 via-[#002CBA]/85 to-[#00186B]/60" />
      </div>

      <div className="container-main relative z-10 px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl text-center lg:text-left text-white">
          
          {/* Tagline Badge */}
          <div className="inline-flex items-center gap-2 rounded-full bg-white/15 px-4 py-1.5 border border-white/25 backdrop-blur-sm text-xs sm:text-sm font-semibold tracking-wide mb-6">
            <span>⚡</span>
            <span>XL SATU Udah Siap buat KASIH LEBIHHH!</span>
          </div>

          {/* Main Title */}
          <h1 className="text-3xl sm:text-5xl md:text-6xl font-extrabold leading-[1.15] tracking-tight mb-6 text-white drop-shadow-md">
            Internet Rumah Fiber Optic <span className="text-amber-300">Super Cepat &amp; Stabil</span>
          </h1>

          {/* Subhead */}
          <p className="text-base sm:text-lg md:text-xl text-white/90 leading-relaxed mb-8 max-w-2xl mx-auto lg:mx-0 font-normal">
            Nikmati koneksi cepat, stabil, dan terpercaya dari <strong className="text-white font-bold">XL SATU SPARK FTTH</strong>. Bebas FUP, gratis router WiFi, dan siap pasang cepat khusus wilayah Binjai.
          </p>

          {/* Pricing Highlight Tag */}
          <div className="inline-flex flex-wrap items-center justify-center lg:justify-start gap-3 bg-white/10 backdrop-blur-md rounded-2xl p-3 border border-white/20 mb-8">
            <span className="bg-amber-400 text-slate-900 text-xs font-black px-3 py-1 rounded-xl uppercase tracking-wider">
              Promo Spesial
            </span>
            <span className="text-sm font-medium">
              Mulai <strong className="text-lg font-black text-amber-300">Rp205.350</strong> /bulan
            </span>
            <span className="text-emerald-300 text-xs font-bold flex items-center gap-1">
              ✓ Gratis Pasang
            </span>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
            <a
              href="#cek-jangkauan"
              className="inline-flex items-center justify-center gap-2.5 rounded-full bg-white px-8 py-4 text-sm sm:text-base font-extrabold text-[#002CBA] shadow-xl hover:bg-slate-100 hover:shadow-2xl hover:-translate-y-0.5 transition-all duration-200"
            >
              <svg className="w-5 h-5 text-[#002CBA]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              Cek Ketersediaan Area
            </a>
            <a
              href="https://wa.me/6285857547266?text=Halo%20Sales%20XL%20Satu%20Binjai%2C%20saya%20ingin%20konsultasi%20pemasangan%20internet"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2.5 rounded-full bg-[#25D366] px-8 py-4 text-sm sm:text-base font-extrabold text-white shadow-xl hover:bg-[#20bd5a] hover:shadow-2xl hover:-translate-y-0.5 transition-all duration-200"
            >
              <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
              Hubungi Sales via WhatsApp
            </a>
          </div>

        </div>
      </div>
    </section>
  );
}
