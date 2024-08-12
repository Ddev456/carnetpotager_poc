import type { Metadata } from "next";
import { Fira_Code } from "next/font/google";
import "./globals.css";
import { auth } from "@/auth";
import { LoginButton, LogoutButton } from "./components/AuthButton";
import Link from "next/link";
import { Toaster } from "@/components/ui/toaster"
import { cn } from "@/lib/utils";
import { buttonVariants } from "@/components/ui/button";
import { usePathname } from "next/navigation";
import { Navbar } from "./components/Navbar";

const firaCode = Fira_Code({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Carnet Potager",
  description: "Plateforme pour les jardiniers",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const session = await auth();
  
  return (
    <html lang="en">
      <body className={firaCode.className}>
        <main className="flex flex-col gap-2 p-8">
          <Navbar session={session ?? null} />
          <div className="flex bg-slate-100 rounded-lg h-[calc(100vh-6rem)] p-6">
          {children}
          </div>
        </main>
        <Toaster />
      </body>
    </html>
  );
}
