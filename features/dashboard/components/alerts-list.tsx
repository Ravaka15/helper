"use client";

import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { AlertTriangle, AlertCircle } from "lucide-react";

interface Alert {
    id: string;
    type: string;
    category: string;
    message: string;
    score: number;
    date: string;
    priority: "high" | "medium" | "low";
}

interface AlertsListProps {
    alerts: Alert[];
}

export function AlertsList({ alerts }: AlertsListProps) {
    const getPriorityColor = (priority: string) => {
        switch (priority) {
            case "high":
                return "text-red-500 bg-red-500/10";
            case "medium":
                return "text-orange-500 bg-orange-500/10";
            default:
                return "text-yellow-500 bg-yellow-500/10";
        }
    };

    const getPriorityIcon = (priority: string) => {
        return priority === "high" ? AlertTriangle : AlertCircle;
    };

    return (
        <Card className="shadow-sm">
            <CardHeader>
                <CardTitle>Alertes récentes</CardTitle>
            </CardHeader>
            <CardContent>
                <div className="space-y-3">
                    {alerts.length === 0 ? (
                        <p className="text-muted-foreground text-center py-8">
                            Aucune alerte pour le moment
                        </p>
                    ) : (
                        alerts.map((alert) => {
                            const Icon = getPriorityIcon(alert.priority);
                            return (
                                <div
                                    key={alert.id}
                                    className={`flex items-start gap-3 p-3 rounded-lg ${getPriorityColor(alert.priority)}`}
                                >
                                    <Icon className="h-5 w-5 mt-0.5 flex-shrink-0" />
                                    <div className="flex-1 min-w-0">
                                        <div className="flex items-center justify-between gap-2 mb-1">
                                            <span className="font-medium text-sm">{alert.category}</span>
                                            <span className="text-xs opacity-70">{alert.date}</span>
                                        </div>
                                        <p className="text-sm opacity-90">{alert.message}</p>
                                        <p className="text-xs opacity-70 mt-1">Score: {alert.score}</p>
                                    </div>
                                </div>
                            );
                        })
                    )}
                </div>
            </CardContent>
        </Card>
    );
}
