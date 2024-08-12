'use client';

import { Session } from "next-auth"
import Link from "next/link"
import { LoginButton, LogoutButton } from "./AuthButton"
import { buttonVariants } from "@/components/ui/button"
import { cn } from "../utils/utils"
import { usePathname } from "next/navigation"

export const Navbar = ({session}: {session: Session | null}) => {
    const pathName = usePathname();
    return (
      <nav className="w-full flex gap-6 items-center justify-between">
      <h1>{session?.user ? "Connecté ✅" : "Non connecté ❌"}</h1>
      <div className="flex items-center justify-between gap-6">
        <Link href="/" className={cn(buttonVariants({variant: "ghost"}), pathName === "/" ? "bg-green-100" : null, "font-medium")}>Accueil</Link>
        <Link href="/plantes" className={cn(buttonVariants({variant: "ghost"}), pathName === "/plantes" ? "bg-green-100" : null, "font-medium")}>Plantes</Link>
      </div>
      {session?.user ? <LogoutButton /> : <LoginButton />}
  </nav>
    )
}