"use client";

import { useState } from "react";

const faqs = [
  {
    question: "Bagaimana proses pendaftaran & pemasangan XL SATU di Binjai?",
    answer:
      "Prosesnya sangat mudah! Cukup klik tombol WhatsApp di website ini untuk berkonsultasi dengan sales kami, berikan alamat lengkap Anda untuk pengecekan lokasi. Jika ter-cover, pilih paket dan tentukan jadwal pemasangan teknisi (1-3 hari kerja).",
  },
  {
    question: "Apakah lokasi rumah saya di Binjai sudah bisa pasang XL SATU?",
    answer:
      "XL SATU terus memperluas jaringan fiber optiknya di Binjai dan sekitarnya (seperti Binjai Kota, Binjai Barat, Binjai Timur, Binjai Utara, Binjai Selatan, hingga Stabat & Langkat). Silakan gunakan form 'Cek Jangkauan' di atas atau langsung kirimkan share location ke WhatsApp sales kami.",
  },
  {
    question: "Berapa biaya instalasi awal XL SATU?",
    answer:
      "Saat ini terdapat promo Gratis Biaya Instalasi untuk paket tertentu! Tidak ada biaya tersembunyi, Anda cukup membayar tagihan paket bulanan yang dipilih.",
  },
  {
    question: "Bagaimana sistem pembayaran tagihan bulanan?",
    answer:
      "Pembayaran tagihan dapat dilakukan dengan mudah melalui aplikasi MyXL, m-Banking (BCA, Mandiri, BRI, BNI), E-wallet (Gopay, OVO, DANA, ShopeePay), minimarket (Indomaret/Alfamart), atau ATM.",
  },
  {
    question: "Apakah paket internet XL SATU beneran unlimited?",
    answer:
      "Ya! Semua paket internet rumah XL SATU menggunakan jaringan Fiber Optic 100% Unlimited tanpa FUP (Fair Usage Policy), sehingga kecepatan internet Anda tidak akan turun sepanjang bulan.",
  },
  {
    question: "Apa saja dokumen yang dibutuhkan untuk mendaftar?",
    answer:
      "Anda hanya perlu menyiapkan foto KTP (Kartu Tanda Penduduk) dan nomor HP aktif (sebaiknya nomor XL agar dapat menikmati bonus Kuota Sekeluarga langsung).",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="relative bg-white section-padding overflow-hidden">
      <div className="container-main">
        <div className="mb-12 text-center lg:mb-16">
          <div className="mb-3 inline-flex items-center gap-2 rounded-full bg-primary/5 px-4 py-2">
            <svg className="h-4 w-4 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <span className="text-xs font-semibold text-primary uppercase tracking-wider">Tanya Jawab</span>
          </div>
          <h2 className="mb-4 text-3xl font-bold text-primary sm:text-4xl lg:text-5xl">
            Pertanyaan Yang Sering Diajukan (FAQ)
          </h2>
          <p className="mx-auto max-w-2xl text-base text-text-muted sm:text-lg">
            Temukan jawaban lengkap seputar pendaftaran, instalasi, dan layanan XL SATU
          </p>
        </div>

        <div className="mx-auto max-w-3xl space-y-4">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={faq.question}
                className="overflow-hidden rounded-2xl border border-gray-100 bg-surface transition-all duration-300 hover:border-primary/30 shadow-sm"
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className="flex w-full items-center justify-between p-5 text-left font-bold text-text transition-colors duration-200 hover:text-primary sm:p-6"
                  aria-expanded={isOpen}
                >
                  <span className="text-base sm:text-lg pr-4">{faq.question}</span>
                  <div
                    className={`flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-white transition-transform duration-300 shadow-xs ${
                      isOpen ? "rotate-180 bg-primary text-white" : "text-primary"
                    }`}
                  >
                    <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </div>
                </button>

                <div
                  className={`grid transition-all duration-300 ease-in-out ${
                    isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
                  }`}
                >
                  <div className="overflow-hidden">
                    <p className="p-5 pt-0 text-sm leading-relaxed text-text-muted sm:p-6 sm:pt-0 sm:text-base border-t border-gray-200/50 mt-2">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Still have questions banner */}
        <div className="mt-12 rounded-3xl bg-gradient-to-r from-primary to-support p-8 text-center text-white shadow-xl max-w-3xl mx-auto">
          <h3 className="text-xl font-bold mb-2">Masih Memiliki Pertanyaan Lain?</h3>
          <p className="text-sm text-white/80 mb-6 max-w-md mx-auto">
            Tim sales resmi kami siap menjawab segala pertanyaan Anda dengan cepat via WhatsApp.
          </p>
          <a
            href="https://wa.me/6285857547266?text=Halo%20sales%20XL%20Satu%20Binjai%2C%20saya%20punya%20pertanyaan%20seputar%20layanan"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-whatsapp px-8 py-3.5 text-sm"
          >
            Tanya Sales Sekarang
          </a>
        </div>
      </div>
    </section>
  );
}
