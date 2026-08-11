"use client";

const testimonials = [
  {
    name: "Budi Santoso",
    role: "Warga Binjai Kota",
    quote:
      "Instalasi XL SATU sangat cepat, pesan hari ini besok teknisi langsung datang pasang. Koneksinya sangat stabil untuk WFH dan anak-anak belajar online.",
    initials: "BS",
    rating: 5,
    package: "XL SATU Max 100 Mbps",
  },
  {
    name: "Siti Rahma",
    role: "Pengusaha Olshop Binjai Barat",
    quote:
      "Sangat terbantu dengan paket internet + kuota HP sekeluarga dari XL SATU. Hemat banget dibanding bayar terpisah. Sales-nya juga sangat ramah dan responsif!",
    initials: "SR",
    rating: 5,
    package: "XL SATU Pro 200 Mbps",
  },
  {
    name: "Dedi Kurniawan",
    role: "Gamer & Content Creator Binjai Timur",
    quote:
      "Latency rendah dan speed-nya sesuai janji, streaming 4K tanpa buffering. Rekomendasi banget buat yang butuh wifi cepat dan stabil di Binjai.",
    initials: "DK",
    rating: 5,
    package: "XL SATU Ultra 300 Mbps",
  },
];

export default function Testimoni() {
  return (
    <section className="relative bg-white section-padding overflow-hidden">
      <div className="container-main">
        <div className="mb-12 text-center lg:mb-16">
          <div className="mb-3 inline-flex items-center gap-2 rounded-full bg-primary/5 px-4 py-2">
            <svg className="h-4 w-4 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
            </svg>
            <span className="text-xs font-semibold text-primary uppercase tracking-wider">Testimoni</span>
          </div>
          <h2 className="mb-4 text-3xl font-bold text-primary sm:text-4xl lg:text-5xl">
            Apa Kata Pelanggan Kami?
          </h2>
          <p className="mx-auto max-w-2xl text-base text-text-muted sm:text-lg">
            Pengalaman nyata dari pelanggan XL SATU di area Binjai dan sekitarnya
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {testimonials.map((item, index) => (
            <div
              key={item.name}
              className="group relative flex flex-col justify-between rounded-3xl bg-surface p-6 shadow-md transition-all duration-500 hover:-translate-y-2 hover:bg-white hover:shadow-xl sm:p-8 border border-gray-100"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <div>
                {/* Rating stars */}
                <div className="mb-4 flex items-center gap-1 text-amber-400">
                  {[...Array(item.rating)].map((_, i) => (
                    <svg key={i} className="h-5 w-5 fill-current" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>

                {/* Quote */}
                <p className="mb-6 text-sm italic leading-relaxed text-text">
                  &ldquo;{item.quote}&rdquo;
                </p>
              </div>

              {/* Profile info */}
              <div className="flex items-center gap-4 pt-4 border-t border-gray-200/60">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-primary to-support text-base font-bold text-white shadow-md">
                  {item.initials}
                </div>
                <div>
                  <h3 className="text-base font-bold text-text">{item.name}</h3>
                  <p className="text-xs text-text-muted">{item.role}</p>
                  <span className="mt-1 inline-block text-[11px] font-semibold text-primary">
                    {item.package}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
