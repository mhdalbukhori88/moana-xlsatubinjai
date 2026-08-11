import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "XL Satu Binjai — Internet Rumah Unlimited Fiber Optic | Sales Resmi",
  description:
    "Pasang internet rumah unlimited XL SATU di Binjai dan sekitarnya. Fiber optic hingga 300 Mbps, gratis instalasi, harga mulai Rp250.000/bulan. Hubungi sales resmi sekarang!",
  keywords:
    "internet rumah binjai, xl satu binjai, wifi rumah binjai, fiber optic binjai, internet unlimited binjai, pasang wifi binjai",
  openGraph: {
    title: "XL Satu Binjai — Internet Rumah Unlimited Fiber Optic",
    description:
      "Pasang internet rumah unlimited XL SATU di Binjai. Fiber optic cepat, harga terjangkau. Hubungi sales resmi!",
    type: "website",
    locale: "id_ID",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id" className="scroll-smooth">
      <body className="antialiased">{children}</body>
    </html>
  );
}
