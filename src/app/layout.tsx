import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import ToastContainerWrapper from "@/components/Wrapper/ToastContainerWrapper";
import { EnvironmentProvider } from "@/context/Environment";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Originação",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <EnvironmentProvider>
      <html className="bg-neutral-100" lang="en">
        <body className={`${inter.className}`}>
          {children}
          <ToastContainerWrapper />
        </body>
      </html>
    </EnvironmentProvider>
  );
}
