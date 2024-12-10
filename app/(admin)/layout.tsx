import type { Metadata } from "next";
import localFont from "next/font/local";
import NavBar from "./_components/NavBar";
import NextAuthProvider from "@/providers/session";
import { ThemeProvider } from "@/providers/theme"
import "@/app/globals.css";
import { getServerSession } from "next-auth";
import DynamicBreadcrumbs from "@/components/DynamicBreadcrumbs";
import SkipLink from "@/components/SkipLink";

const geistSans = localFont({
  src: "../fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "../fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Admin Dashboard",
  description: "Demo App Admin Dashboard",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  const session = await getServerSession();

  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased font-sans bg-background`}
      >
        <NextAuthProvider session={session}>
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            <SkipLink />
            <aside>
              <NavBar />
            </aside>
            <DynamicBreadcrumbs />
            <main id="main-content">
              {children}
            </main>
          </ThemeProvider>
        </NextAuthProvider>
      </body>
    </html>
  );
}

