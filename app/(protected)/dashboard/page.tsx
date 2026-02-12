import { StatsCard } from "@/features/dashboard/components/stats-card";
import { Chart } from "@/features/dashboard/components/chart";

export default function DashboardPage() {
    return (
        <div className="space-y-6">
            <div>
                <h1 className="text-3xl font-bold">Dashboard</h1>
                <p className="text-muted-foreground">
                    Vue d&apos;ensemble de vos statistiques
                </p>
            </div>

            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                <StatsCard
                    title="Utilisateurs totaux"
                    value="1,234"
                    description="+20% par rapport au mois dernier"
                    icon="👥"
                />
                <StatsCard
                    title="Utilisateurs actifs"
                    value="567"
                    description="+12% par rapport au mois dernier"
                    icon="✅"
                />
                <StatsCard
                    title="Revenu"
                    value="89,000 €"
                    description="+8% par rapport au mois dernier"
                    icon="💰"
                />
            </div>

            <div className="grid gap-4 md:grid-cols-2">
                <Chart />
                <Chart />
            </div>
        </div>
    );
}
