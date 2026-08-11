"use client";

const quickPackages = [
  { speed: "20 Mbps", price: "205.350", tag: "Hemat" },
  { speed: "250 Mbps", price: "254.190", tag: "Terfavorit", highlight: true },
  { speed: "350 Mbps", price: "309.690", tag: "" },
  { speed: "400 Mbps", price: "333.000", tag: "" },
  { speed: "600 Mbps", price: "555.000", tag: "Bisnis" },
  { speed: "1000 Mbps", price: "999.000", tag: "Pro" },
];

export default function Hero() {
  return (
    <section id="beranda" className="bg-[#002CBA] pt-20 pb-16 md:pt-28 md:pb-20 text-white">
      <div className="container-main px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          
          {/* Left Column: Corporate Heading & Value Proposition */}
          <div className="lg:col-span-7 text-center lg:text-left">
            <div className="inline-flex items-center gap-2 rounded-md bg-white/10 px-3 py-1.5 border border-white/20 text-xs sm:text-sm font-semibold tracking-wide mb-6">
              <span>📍</span>
              <span>Layanan Resmi Sales XL SATU Kota Binjai</span>
            </div>

            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight tracking-tight mb-6">
              Internet Fiber Optic Rumah &amp; Bisnis Super Cepat
            </h1>

            <p className="text-base sm:text-lg text-white/90 leading-relaxed max-w-2xl mx-auto lg:mx-0 mb-8">
              Koneksi cepat, stabil, dan terpercaya dari <strong className="text-white">XL SATU SPARK FTTH</strong>. Tanpa batasan FUP, gratis router WiFi, dan didukung jaringan 100% Fiber Optic khusus area Binjai.
            </p>

            {/* Corporate Feature List */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 mb-8 text-xs sm:text-sm font-medium text-white/95 max-w-lg mx-auto lg:mx-0 text-left">
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5 text-emerald-400 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span>100% Fiber Optic</span>
              </div>
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5 text-emerald-400 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span>Unlimited Tanpa FUP</span>
              </div>
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5 text-emerald-400 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span>Gratis Router WiFi</span>
              </div>
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5 text-emerald-400 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span>Termasuk PPN 11%</span>
              </div>
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5 text-emerald-400 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span>Streaming 4K &amp; Gaming</span>
              </div>
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5 text-emerald-400 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span>Proses Pasang Cepat</span>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <a
                href="#cek-jangkauan"
                className="inline-flex items-center justify-center gap-2 rounded-lg bg-white px-6 py-3.5 text-sm font-bold text-[#002CBA] shadow-md hover:bg-slate-100 transition-colors"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                Cek Ketersediaan Area
              </a>
              <a
                href="https://wa.me/6285857547266?text=Halo%20Sales%20XL%20Satu%20Binjai%2C%20saya%20ingin%20konsultasi%20pemasangan%20internet"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-lg bg-[#25D366] px-6 py-3.5 text-sm font-bold text-white shadow-md hover:bg-[#20bd5a] transition-colors"
              >
                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
                Hubungi Sales via WhatsApp
              </a>
            </div>
          </div>

          {/* Right Column: Clean Corporate Pricing Overview Table/Card */}
          <div className="lg:col-span-5 text-[#1E293B]">
            <div className="bg-white rounded-2xl p-6 sm:p-7 shadow-xl border border-slate-200">
              
              <div className="flex items-center justify-between border-b border-slate-100 pb-4 mb-4">
                <div>
                  <h3 className="text-lg font-extrabold text-slate-900">Daftar Paket XL SATU</h3>
                  <p className="text-xs text-slate-500 font-medium">Layanan Internet Only (Kota Binjai)</p>
                </div>
                <span className="text-[11px] font-bold text-[#002CBA] bg-blue-50 px-2.5 py-1 rounded-md border border-blue-100">
                  Resmi XL FTTH
                </span>
              </div>

              {/* Package Rows */}
              <div className="space-y-2.5 mb-6">
                {quickPackages.map((item) => (
                  <div
                    key={item.speed}
                    className={`flex items-center justify-between p-3 rounded-xl transition-colors ${
                      item.highlight
                        ? "bg-blue-50/80 border-2 border-[#002CBA]"
                        : "bg-slate-50 border border-slate-100"
                    }`}
                  >
                    <div className="flex items-center gap-2.5">
                      <span className="text-sm font-bold text-slate-900">{item.speed}</span>
                      {item.tag && (
                        <span className={`text-[10px] font-extrabold px-2 py-0.5 rounded ${
                          item.highlight
                            ? "bg-[#002CBA] text-white"
                            : "bg-slate-200 text-slate-700"
                        }`}>
                          {item.tag}
                        </span>
                      )}
                    </div>
                    <div className="text-right">
                      <span className="text-xs text-slate-500 mr-1">Rp</span>
                      <span className="text-sm sm:text-base font-extrabold text-slate-900">{item.price}</span>
                      <span className="text-[11px] text-slate-500">/bln</span>
                    </div>
                  </div>
                ))}
              </div>

              {/* Sub-info */}
              <div className="text-[11px] text-slate-500 space-y-1 mb-5 bg-slate-50 p-3 rounded-lg border border-slate-100">
                <div className="flex items-center gap-1.5 font-medium text-slate-700">
                  <svg className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span>Harga sudah termasuk PPN 11%</span>
                </div>
                <div className="flex items-center gap-1.5 font-medium text-slate-700">
                  <svg className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span>Promo khusus pelanggan baru area XL Footprint Binjai</span>
                </div>
              </div>

              {/* CTA button */}
              <a
                href="https://wa.me/6285857547266?text=Halo%20Sales%2C%20saya%20tertarik%20dengan%20paket%20XL%20Satu%20Binjai"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-2 rounded-lg bg-[#002CBA] py-3 px-4 text-xs sm:text-sm font-bold text-white shadow-md hover:bg-blue-900 transition-colors"
              >
                Pesan / Tanya Sales via WhatsApp
              </a>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
