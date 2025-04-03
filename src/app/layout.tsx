import type React from "react";
import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { ThemeProvider } from "./component/ui/theme-provider";
import Loader from "./component/ui/loader";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Chukuweike Jude | Junior Frontend Developer",
  description:
    "Portfolio of Chukuweike Jude, a Junior Frontend Developer specializing in building responsive, accessible web applications with modern technologies.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <Loader duration={3000} />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
