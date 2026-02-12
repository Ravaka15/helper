"use client";

import { Button } from "@/components/ui/button";
import { useLogout } from "@/features/auth/hooks/use-logout";

export function Header() {
    const { logout } = useLogout();

    return (
        <header className="border-b bg-card">
            <div className="flex h-16 items-center justify-between px-6">
                <div className="flex items-center gap-4">
                    <h2 className="text-lg font-semibold">Espace Administration</h2>
                </div>
                <div className="flex items-center gap-4">
                    <Button variant="ghost" size="sm">
                        ⚙️ Paramètres
                    </Button>
                    <Button variant="outline" size="sm" onClick={logout}>
                        🚪 Déconnexion
                    </Button>
                </div>
            </div>
        </header>
    );
}
