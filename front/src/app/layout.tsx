import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Header from "@/components/shared/ui/header/header";
//import { ErrorBoundary } from "react-error-boundary";
//import ErrorDisplay from "./error";
import CssBaseline from "@mui/material/CssBaseline";
import { ThemeProvider } from "@mui/material/styles";
import theme from "../theme";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ja">
      {/** [TODO] ロード時表示崩れが発生するので、一旦コメントアウト
        <ThemeProvider theme={theme}>
        <CssBaseline />*/}
      <body className={inter.className}>
        <Header />
        <main>{children}</main>
      </body>
      {/**</ThemeProvider>**/}
    </html>
  );
}
