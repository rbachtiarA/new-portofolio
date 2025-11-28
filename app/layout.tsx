import { ThemeProvider } from "@/components/theme-provider";
import type { Metadata } from "next";
import { Manrope } from "next/font/google";
import "./globals.css";
import MainWrapper from "@/components/main/MainWrapper";
import LeftSideBar from "@/components/sidebar/Left.Sidebar";
import RightSideBar from "@/components/sidebar/Right.Sidebar";
import Header from "@/components/main/Header/Header";
import Script from "next/script";

const CustomFont = Manrope({
  subsets: ["latin"],
  weight: ["400", "700"],
});
export const metadata: Metadata = {
  title: "Ryan Bachtiar Abdalla | Fullstack Developer | Portofolio",
  description:
    "Ryan Bachtiar Abdalla - Full-stack Web Developer | A verstaile full-stack web developer with expertise in frontend technologies for crafting engaging user interfaces and backend systems for building robust, scalable infrastructures. Skilled in database design and search engine optimization (SEO), James creates high-performing web applications that deliver exceptional user experiences and maximize online visibility",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <Script
        async
        src="https://www.googletagmanager.com/gtag/js?id=G-62DYTD6MMR"
      ></Script>
      <Script
        id="gta"
        dangerouslySetInnerHTML={{
          __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){window.dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-62DYTD6MMR');
            `,
        }}
      />
      <body
        className={`${CustomFont.className} antialiased flex flex-col justify-center items-end h-screen`}
      >
        <ThemeProvider
          attribute={"class"}
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <div className="flex flex-1 justify-center items-center w-full">
            <h1 className="hidden md:block text-sm font-semibold">
              Ryan Bachtiar Abdalla | Portofolio
            </h1>
          </div>
          <MainWrapper>
            <LeftSideBar />
            <div className="flex flex-col w-full h-full">
              <Header />
              {children}
            </div>
            <RightSideBar />
          </MainWrapper>
        </ThemeProvider>
      </body>
    </html>
  );
}
