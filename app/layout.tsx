export const metadata = {
  title: "VALISCI — Precision through Discernment",
  description: "VALISCI enables confident decisions in complex environments.",
  openGraph: { title: "VALISCI — Precision through Discernment", description: "VALISCI enables confident decisions in complex environments.", images: [{ url: "/og.png", width: 1200, height: 630 }]},
  icons: { icon: "/favicon.ico" }
};
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (<html lang="en"><body className="bg-[#111111] text-white antialiased"><a href="#main" className="skip-link">Skip to content</a>{children}</body></html>);
}