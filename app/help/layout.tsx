import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "help",
  description: "page that helps customers",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
