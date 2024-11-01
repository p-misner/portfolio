import type { Metadata } from "next";
import { League_Spartan } from "next/font/google";
import "./globals.css";
import StyledComponentsRegistry from "./lib/registry";
import PageHeader from "./components/header";
import ThemeProvider from "./components/providers";
import { GoogleTagManager } from "@next/third-parties/google";
// const inter = Inter({ subsets: ["latin"] });
const leaguespartan = League_Spartan({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Priya Misner",
  description: "personal design portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={leaguespartan.className}>
        <GoogleTagManager gtmId="G-DBKNS31SWM" />

        <ThemeProvider>
          <StyledComponentsRegistry>
            {" "}
            <PageHeader />
            {children}
          </StyledComponentsRegistry>
        </ThemeProvider>
      </body>
    </html>
  );
}
