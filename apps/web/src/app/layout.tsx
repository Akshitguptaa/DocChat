import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import Navbar from "@/components/navbar";
import { ClerkProvider } from "@clerk/nextjs";
import { ThemeProvider } from "@/components/theme-provider"

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <html lang="en" suppressHydrationWarning>
          <body
            className={cn(
              `bg-background text-foreground antialiased
              font-sans grainy`,
            )}
          >
              <ThemeProvider 
                   attribute="class"
                  defaultTheme="dark"
                >
            <Navbar />

            <div className="fixed inset-0 -z-20 bg-gradient-to-br from-gray-900 via-gray-950 to-purple-900 animate-gradient-x" />
            <div className="fixed top-0 left-0 w-80 h-80 bg-blue-900 rounded-full opacity-30 blur-3xl -z-10 animate-blob" />
            <div className="fixed bottom-0 right-0 w-80 h-80 bg-purple-900 rounded-full opacity-30 blur-3xl -z-10 animate-blob animation-delay-2000" />

              {children}

            </ThemeProvider>
          </body>
      </html>
    </ClerkProvider>
  );
}
