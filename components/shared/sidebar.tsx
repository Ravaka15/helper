"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/shared/utils/cn";
import { ROUTES } from "@/shared/constants";
import { LayoutDashboard, MessageSquare, Building2, User } from "lucide-react";

const menuItems = [
    {
        title: "Dashboard",
        href: ROUTES.DASHBOARD,
        icon: LayoutDashboard,
    },
    {
        title: "Assistant",
        href: ROUTES.ASSISTANT,
        icon: MessageSquare,
    },
];

export function Sidebar() {
    const pathname = usePathname();

    return (
        <aside className="hidden md:flex w-64 border-r bg-card">
            <div className="flex h-full flex-col w-full">
                <div className="border-b p-4">
                    <Link href={ROUTES.DASHBOARD} className="flex items-center gap-2">
                        <Building2 className="h-8 w-8" />
                        <span className="text-xl font-bold">Helper</span>
                    </Link>
                </div>

                <nav className="flex-1 space-y-1 p-4">
                    {menuItems.map((item) => {
                        const isActive = pathname === item.href;
                        const Icon = item.icon;
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
                                <Icon className="h-4 w-4" />
                                {item.title}
                            </Link>
                        );
                    })}
                </nav>

                <div className="border-t p-4">
                    <div className="flex items-center gap-3 rounded-lg px-3 py-2">
                        <div className="h-8 w-8 rounded-full bg-primary/10 flex items-center justify-center">
                            <User className="h-4 w-4" />
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
