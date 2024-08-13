'use client';

import { Session } from "next-auth"
import Link from "next/link"
import { LoginButton, LogoutButton } from "./AuthButton"
import { buttonVariants } from "@/components/ui/button"
import { cn } from "../utils/utils"
import { usePathname } from "next/navigation"
import { UserDropdown } from "./UserDropdown";
import { CalendarRange, Home, Leaf, MessageSquare, Sprout, Vegan } from "lucide-react";
import { Separator } from "@/components/ui/separator"
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip"


export const Sidebar = ({session}: {session: Session | null}) => {
    const pathName = usePathname();
    return (
      <nav className="w-[5rem] h-[calc(100vh-2rem)] p-2 flex flex-col justify-between">
        <div className="flex flex-col gap-6 items-center justify-start">
      <div className="text-xl font-extrabold">
        <Link href="/">
        <Vegan className="w-8 h-8 stroke-slate-900" />
      </Link>
      </div>
      <Separator className="w-full bg-slate-500" orientation="horizontal" />
      <div className="w-full flex flex-col items-center justify-between gap-6">
      <TooltipProvider delayDuration={100}>
        <Tooltip>
          <TooltipTrigger asChild>
              <Link href="/plantes" className={cn(buttonVariants({variant: "ghost"}), pathName === "/plantes" ? "bg-slate-100" : null, "text-slate-900")}>
          <Leaf className="w-6 h-6" />
              </Link>
            </TooltipTrigger>
              <TooltipContent side="right">
            <p>Plantes</p>
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>
      <TooltipProvider delayDuration={100}>
        <Tooltip>
          <TooltipTrigger asChild>
              <Link href="/#" className={cn(buttonVariants({variant: "ghost"}), pathName === "/plantes" ? "bg-slate-100" : null, "text-slate-900 cursor-auto bg-slate-100")}>
          <MessageSquare className="w-6 h-6 stroke-slate-500" />
              </Link>
            </TooltipTrigger>
              <TooltipContent side="right">
            <p>Fils de discussions</p>
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>
      <TooltipProvider delayDuration={100}>
        <Tooltip>
          <TooltipTrigger asChild>
              <Link href="/#" className={cn(buttonVariants({variant: "ghost"}), pathName === "/plantes" ? "bg-slate-100" : null, "text-slate-900 cursor-auto bg-slate-100")}>
          <CalendarRange className="w-6 h-6 stroke-slate-500" />
              </Link>
            </TooltipTrigger>
              <TooltipContent side="right">
            <p>Calendrier du jardin</p>
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>
      </div>
      </div>
      <UserDropdown session={session} />
  </nav>
    )
}