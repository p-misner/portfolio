import type { Metadata } from "next";
import { Inter, League_Spartan } from "next/font/google";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v13-appRouter";
import "./globals.css";
import StyledComponentsRegistry from "./lib/registry";

const inter = Inter({ subsets: ["latin"] });
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
        <AppRouterCacheProvider options={{ enableCssLayer: true }}>
          <StyledComponentsRegistry>{children}</StyledComponentsRegistry>
        </AppRouterCacheProvider>
      </body>
    </html>
  );
}
