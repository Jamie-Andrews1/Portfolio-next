import { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Script from "next/script";
import { Navbar } from "@/components/Navbar";
import { MyThemeContextProvider } from "./theme-provider";
import Footer from "@/components/Footer/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Portfolio",
  description: "By Jamie",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <MyThemeContextProvider>
          <div className="wrapper">
            <Navbar />
            <div className="content">{children}</div>
            <Footer />
            <Script src="https://kit.fontawesome.com/531433d77d.js" />
          </div>
        </MyThemeContextProvider>
      </body>
    </html>
  );
}
