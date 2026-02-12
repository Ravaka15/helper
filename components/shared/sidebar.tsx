"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/shared/utils/cn";
import { ROUTES } from "@/shared/constants";

const menuItems = [
    {
        title: "Dashboard",
        href: ROUTES.DASHBOARD,
        icon: "📊",
    },
    {
        title: "Assistant",
        href: ROUTES.ASSISTANT,
        icon: "💬",
    },
];

export function Sidebar() {
    const pathname = usePathname();

    return (
        <aside className="w-64 border-r bg-card">
            <div className="flex h-full flex-col">
                <div className="border-b p-6">
                    <Link href={ROUTES.DASHBOARD} className="flex items-center gap-2">
                        <div className="text-2xl">🏢</div>
                        <span className="text-xl font-bold">Backoffice</span>
                    </Link>
                </div>

                <nav className="flex-1 space-y-1 p-4">
                    {menuItems.map((item) => {
                        const isActive = pathname === item.href;
                        return (
                            <Link
                                key={item.href}
                                href={item.href}
                                className={cn(
                                    "flex items-center gap-3 rounded-lg px-3 py-2 text-sm font-medium transition-colors",
                                    isActive
                                        ? "bg-primary text-primary-foreground"
                                        : "text-muted-foreground hover:bg-accent hover:text-accent-foreground"
                                )}
                            >
                                <span className="text-lg">{item.icon}</span>
                                {item.title}
                            </Link>
                        );
                    })}
                </nav>

                <div className="border-t p-4">
                    <div className="flex items-center gap-3 rounded-lg px-3 py-2">
                        <div className="h-8 w-8 rounded-full bg-primary/10 flex items-center justify-center">
                            <span className="text-sm">👤</span>
                        </div>
                        <div className="flex-1 text-sm">
                            <p className="font-medium">Utilisateur</p>
                            <p className="text-xs text-muted-foreground">user@exemple.com</p>
                        </div>
                    </div>
                </div>
            </div>
        </aside>
    );
}
