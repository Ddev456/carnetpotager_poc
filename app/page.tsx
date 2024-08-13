import { auth } from "@/auth";
import Image from "next/image";
import { LoginButton, LogoutButton } from "./components/AuthButton";
import { FeaturesList } from "./components/FeaturesList";
import { Dashboard } from "./components/Dashboard";

export default async function Home() {
  const session = await auth()
  return (
    <Dashboard />
  );
}
