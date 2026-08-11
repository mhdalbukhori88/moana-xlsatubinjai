"use client";

export default function Hero() {
  return (
    <section id="beranda" className="relative overflow-hidden pt-20 pb-16 md:pt-28 md:pb-24 gradient-hero">
      {/* Dynamic Background Effects */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -right-20 -top-20 h-[350px] w-[350px] sm:h-[550px] sm:w-[550px] rounded-full bg-secondary/15 blur-3xl" />
        <div className="absolute -left-32 bottom-10 h-[300px] w-[300px] sm:h-[450px] sm:w-[450px] rounded-full bg-support/20 blur-3xl" />
        <div className="absolute inset-0 opacity-[0.03]" style={{
          backgroundImage: `radial-gradient(circle, #FFFFFF 1px, transparent 1px)`,
          backgroundSize: "32px 32px"
        }} />
      </div>

      <div className="container-main relative z-10 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          
          {/* Left Column: Copywriting & CTA */}
          <div className="lg:col-span-7 text-center lg:text-left">
            {/* Location Tag */}
            <div className="inline-flex items-center gap-2 rounded-full bg-white/10 border border-white/20 px-3.5 py-1.5 backdrop-blur-md mb-5">
              <span className="relative flex h-2.5 w-2.5">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-emerald-500" />
              </span>
              <span className="text-xs sm:text-sm font-medium text-white/95 tracking-wide">
                Sales Resmi XL SATU Kota Binjai &amp; Sekitarnya
              </span>
            </div>

            {/* Main Title */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black leading-[1.15] text-white tracking-tight mb-5">
              Internet Fiber Optic{" "}
              <span className="text-amber-300 drop-shadow-sm block sm:inline">
                Super Cepat &amp; Stabil
              </span>{" "}
              untuk Rumah Anda
            </h1>

            {/* Subtitle */}
            <p className="text-sm sm:text-base md:text-lg text-white/85 max-w-2xl mx-auto lg:mx-0 leading-relaxed mb-6">
              Upgrade ke <strong className="text-white font-bold">XL SATU SPARK FTTH</strong>. Solusi wifi cepat tanpa lemot, <span className="underline decoration-amber-300 underline-offset-4 font-semibold text-white">unlimited tanpa FUP</span> untuk kerja, belajar, streaming 4K, dan gaming responsif.
            </p>

            {/* Price Teaser Ribbon */}
            <div className="inline-flex flex-wrap items-center justify-center lg:justify-start gap-3 bg-white/10 backdrop-blur-md rounded-2xl p-2.5 sm:p-3 border border-white/15 mb-8 max-w-md mx-auto lg:mx-0">
              <div className="bg-amber-400 text-slate-900 text-xs font-extrabold px-3 py-1 rounded-xl uppercase tracking-wider">
                Harga Promo
              </div>
              <div className="text-white text-xs sm:text-sm font-medium">
                Mulai <span className="text-lg font-black text-amber-300">Rp205.350</span> /bln
              </div>
              <div className="hidden sm:block text-white/40">|</div>
              <div className="text-emerald-300 text-xs font-semibold flex items-center gap-1">
                <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                Gratis Pasang
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-3.5 justify-center lg:justify-start mb-10">
              <a
                href="#cek-jangkauan"
                className="inline-flex items-center justify-center gap-2.5 rounded-full bg-white px-7 py-3.5 text-sm font-extrabold text-primary shadow-xl hover:bg-slate-100 hover:shadow-2xl hover:-translate-y-0.5 transition-all duration-200"
              >
                <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                Cek Jangkauan Area
              </a>
              <a
                href="https://wa.me/6285857547266?text=Halo%20Sales%20XL%20Satu%20Binjai%2C%20saya%20ingin%20tanya%20paket%20internet%20rumah"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2.5 rounded-full bg-[#25D366] px-7 py-3.5 text-sm font-extrabold text-white shadow-xl hover:bg-[#20bd5a] hover:shadow-2xl hover:-translate-y-0.5 transition-all duration-200"
              >
                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
                Chat WhatsApp Sales
              </a>
            </div>

            {/* Feature Highlights Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 pt-4 border-t border-white/10 max-w-xl mx-auto lg:mx-0">
              <div className="flex items-center gap-2 text-white/90 text-xs sm:text-sm font-semibold">
                <div className="flex-shrink-0 w-5 h-5 rounded-full bg-emerald-500/20 text-emerald-300 flex items-center justify-center">
                  <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <span>100% Fiber Optic</span>
              </div>

              <div className="flex items-center gap-2 text-white/90 text-xs sm:text-sm font-semibold">
                <div className="flex-shrink-0 w-5 h-5 rounded-full bg-emerald-500/20 text-emerald-300 flex items-center justify-center">
                  <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <span>Unlimited Tanpa FUP</span>
              </div>

              <div className="flex items-center gap-2 text-white/90 text-xs sm:text-sm font-semibold col-span-2 sm:col-span-1">
                <div className="flex-shrink-0 w-5 h-5 rounded-full bg-emerald-500/20 text-emerald-300 flex items-center justify-center">
                  <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <span>Router WiFi Dualband</span>
              </div>
            </div>

          </div>

          {/* Right Column: High-Converting Promo Showcase Card */}
          <div className="lg:col-span-5 relative mt-4 lg:mt-0">
            {/* Background Glow */}
            <div className="absolute inset-0 bg-gradient-to-tr from-amber-400/20 to-blue-500/20 rounded-3xl blur-2xl transform scale-95" />

            {/* Main Showcase Card */}
            <div className="relative rounded-3xl bg-white p-6 sm:p-8 shadow-2xl border border-slate-100">
              
              {/* Top Banner Tag */}
              <div className="flex items-center justify-between gap-2 mb-6 pb-4 border-b border-slate-100">
                <span className="inline-flex items-center gap-1.5 rounded-full bg-amber-100 text-amber-900 px-3 py-1 text-xs font-black tracking-wider uppercase">
                  <span className="w-2 h-2 rounded-full bg-amber-500 animate-pulse" />
                  PAKET FAVORIT BINJAI
                </span>
                <span className="text-xs font-semibold text-slate-400">XL SATU SPARK</span>
              </div>

              {/* Package Speed */}
              <div className="mb-4">
                <div className="flex items-baseline gap-2">
                  <span className="text-5xl sm:text-6xl font-black text-slate-900 tracking-tight">250</span>
                  <span className="text-xl sm:text-2xl font-extrabold text-primary">Mbps</span>
                </div>
                <p className="text-xs text-slate-500 font-medium mt-1">Super Fast High Speed Fiber Optic</p>
              </div>

              {/* Pricing Box */}
              <div className="rounded-2xl bg-slate-50 p-4 mb-6 border border-slate-100 flex items-center justify-between">
                <div>
                  <span className="text-xs text-slate-400 block font-medium">Harga Bulanan</span>
                  <div className="flex items-baseline gap-1">
                    <span className="text-xs font-bold text-slate-600">Rp</span>
                    <span className="text-2xl sm:text-3xl font-extrabold text-slate-900">254.190</span>
                    <span className="text-xs text-slate-500">/bln</span>
                  </div>
                </div>
                <div className="text-right">
                  <span className="inline-block text-[11px] font-bold text-emerald-700 bg-emerald-100 px-2.5 py-1 rounded-lg">
                    Termasuk PPN 11%
                  </span>
                </div>
              </div>

              {/* Features checklist */}
              <ul className="space-y-2.5 mb-6 text-xs sm:text-sm text-slate-700 font-medium">
                <li className="flex items-center gap-2.5">
                  <div className="w-4 h-4 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center flex-shrink-0">
                    <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span>Kecepatan hingga <strong>250 Mbps</strong> Simetris</span>
                </li>
                <li className="flex items-center gap-2.5">
                  <div className="w-4 h-4 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center flex-shrink-0">
                    <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span>Internet Unlimited <strong>Tanpa FUP</strong></span>
                </li>
                <li className="flex items-center gap-2.5">
                  <div className="w-4 h-4 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center flex-shrink-0">
                    <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span>Gratis Biaya Pemasangan &amp; Modem Router</span>
                </li>
              </ul>

              {/* Direct Card Action Button */}
              <a
                href="https://wa.me/6285857547266?text=Halo%20Sales%2C%20saya%20berminat%20paket%20XL%20SATU%20250%20Mbps%20Rp254.190%2Fbulan"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-2 rounded-2xl bg-primary py-3.5 px-4 text-xs sm:text-sm font-extrabold text-white shadow-lg hover:bg-primary-dark transition-all duration-200"
              >
                Pesan Paket Ini via WA
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </a>

              {/* Subnote */}
              <div className="mt-3 text-center text-[11px] text-slate-400 font-medium">
                ⚡ Bebas biaya tersembunyi • Pemasangan H+1
              </div>
            </div>

            {/* Overlapping Floating Status Card */}
            <div className="hidden sm:flex absolute -bottom-6 -left-6 bg-slate-900/90 text-white backdrop-blur-md p-3.5 rounded-2xl shadow-xl border border-white/10 items-center gap-3">
              <div className="w-9 h-9 rounded-xl bg-emerald-500/20 text-emerald-400 flex items-center justify-center font-black text-sm">
                ⚡
              </div>
              <div>
                <div className="text-xs font-bold text-white flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
                  Jaringan Fiber Optic Aktif
                </div>
                <div className="text-[11px] text-slate-300 font-medium">Cover Area Kota Binjai</div>
              </div>
            </div>

          </div>

        </div>
      </div>

      {/* Bottom Wave Transition */}
      <div className="absolute bottom-0 left-0 right-0 leading-none z-10 pointer-events-none">
        <svg viewBox="0 0 1440 80" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-8 sm:h-12 md:h-16 preserve-3d">
          <path d="M0 80L60 73.3C120 67 240 53 360 48C480 43 600 48 720 53.3C840 59 960 64 1080 61.3C1200 59 1320 48 1380 42.7L1440 37V80H1380C1320 80 1200 80 1080 80C960 80 840 80 720 80C600 80 480 80 360 80C240 80 120 80 60 80H0Z" fill="#FFFFFF" />
        </svg>
      </div>
    </section>
  );
}
