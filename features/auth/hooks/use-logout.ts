"use client";

import { useRouter } from "next/navigation";
import { ROUTES } from "@/shared/constants";

export function useLogout() {
  const router = useRouter();

  const logout = () => {
    // TODO: Nettoyer le token, les données utilisateur, etc.
    // localStorage.removeItem("token");
    // sessionStorage.clear();
    
    // Navigation sans rechargement de page
    router.push(ROUTES.LOGIN);
  };

  return { logout };
}
