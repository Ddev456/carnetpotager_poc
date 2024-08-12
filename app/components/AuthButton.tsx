'use client'

import { Button } from "@/components/ui/button"
import { useToast } from "@/components/ui/use-toast";
import { signIn, signOut } from "next-auth/react"

export const LoginButton = () => {
    const { toast } = useToast();
    const handleLogin = () => {
        signIn()
        toast({
            title: "Connecté avec succès",
            description: "Vous êtes maintenant connecté à votre compte."
        })
    }
  return <Button variant="secondary" className="btn btn-primary" onClick={() => handleLogin()}>Sign in</Button>
}

export const LogoutButton = () => {
  return <Button variant="destructive" className="btn btn-outline btn-error" onClick={() => signOut()}>Sign out</Button>
}