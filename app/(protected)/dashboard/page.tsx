import { StatsCard } from "@/features/dashboard/components/stats-card";
import { SentimentTrendChart } from "@/features/dashboard/components/sentiment-trend-chart";
import { CategoryPieChart } from "@/features/dashboard/components/category-pie-chart";
import { ScoreGauge } from "@/features/dashboard/components/score-gauge";
import { KeywordsCloud } from "@/features/dashboard/components/keywords-cloud";
import { AlertsList } from "@/features/dashboard/components/alerts-list";
import { MessageSquare, TrendingUp, AlertTriangle } from "lucide-react";
import reviewsData from "@/data/reviews-data.json";

export default function DashboardPage() {
    return (
        <div className="space-y-6">
            <div>
                <h1 className="text-3xl font-bold">Dashboard</h1>
                <p className="text-muted-foreground">
                    Analyse des avis clients en temps réel
                </p>
            </div>

            {/* Stats Cards */}
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                <StatsCard
                    title="Total des avis"
                    value={reviewsData.globalStats.totalReviews.toLocaleString()}
                    description="Tous les avis analysés"
                    icon={MessageSquare}
                />
                <StatsCard
                    title="Score moyen"
                    value={`${reviewsData.globalStats.averageScore}/5`}
                    description={`${reviewsData.globalStats.positivePercentage}% d'avis positifs`}
                    icon={TrendingUp}
                />
                <StatsCard
                    title="Alertes actives"
                    value={reviewsData.alerts.length}
                    description="Avis nécessitant une attention"
                    icon={AlertTriangle}
                />
            </div>

            {/* Score Gauge + Alerts */}
            <div className="grid gap-4 md:grid-cols-2">
                <ScoreGauge score={reviewsData.globalStats.averageScore} />
                <AlertsList alerts={reviewsData.alerts} />
            </div>

            {/* Charts */}
            <div className="grid gap-4 md:grid-cols-2">
                <SentimentTrendChart data={reviewsData.sentimentTrend} />
                <CategoryPieChart data={reviewsData.categoryDistribution} />
            </div>

            {/* Keywords Cloud */}
            <KeywordsCloud keywords={reviewsData.topKeywords} />
        </div>
    );
}
