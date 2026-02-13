"use client";

import { Button } from "@/components/ui/button";
import { ThemeToggleDropdown } from "@/components/theme-toggle-dropdown";
import { MobileSidebar } from "@/components/shared/mobile-sidebar";
import { useLogout } from "@/features/auth/hooks/use-logout";
import { Settings, LogOut } from "lucide-react";

export function Header() {
    const { logout } = useLogout();

    return (
        <header className="border-b bg-card">
            <div className="flex h-16 items-center justify-between px-4 md:px-6">
                <div className="flex items-center gap-4">
                    <MobileSidebar />
                    <h2 className="text-lg font-semibold">Espace Administration</h2>
                </div>
                <div className="flex items-center gap-2 md:gap-4">
                    <ThemeToggleDropdown />
                    <Button variant="ghost" size="sm" className="hidden md:flex">
                        <Settings className="h-4 w-4 mr-2" />
                        Paramètres
                    </Button>
                    <Button variant="outline" size="sm" onClick={logout}>
                        <LogOut className="h-4 w-4 md:mr-2" />
                        <span className="hidden md:inline">Déconnexion</span>
                    </Button>
                </div>
            </div>
        </header>
    );
}
