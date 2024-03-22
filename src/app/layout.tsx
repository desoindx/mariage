import type { Metadata } from "next";
import "./global.css";

export const metadata: Metadata = {
  title: "Mariage Anouck & Benjamin",
  description: "Toutes les infos sur le mariage :)",
  openGraph: {
    images: "https://www.mariage-benoucks.com//header.jpeg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body>{children}</body>
    </html>
  );
}
