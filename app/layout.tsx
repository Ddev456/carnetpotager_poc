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
import { Sidebar } from "./components/Sidebar";

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
        <main className="bg-white flex gap-2 pl-4 py-4">
          <Sidebar session={session ?? null} />
          <div className="flex border border-slate-300 bg-slate-50 rounded-l-[1.5rem] w-[calc(100vw-5rem)] h-[calc(100vh-2rem)] p-6 overflow-y-auto">
          {children}
          </div>
        </main>
        <Toaster />
      </body>
    </html>
  );
}
