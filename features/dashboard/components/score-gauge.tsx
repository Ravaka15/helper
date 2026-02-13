"use client";

import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { TrendingUp, TrendingDown } from "lucide-react";

interface ScoreGaugeProps {
    score: number;
    previousScore?: number;
}

export function ScoreGauge({ score, previousScore = 4.0 }: ScoreGaugeProps) {
    const percentage = (score / 5) * 100;
    const evolution = score - previousScore;
    const isPositive = evolution >= 0;

    const getColor = () => {
        if (score >= 4) return "text-green-500";
        if (score >= 3) return "text-yellow-500";
        return "text-red-500";
    };

    const getGaugeColor = () => {
        if (score >= 4) return "bg-green-500";
        if (score >= 3) return "bg-yellow-500";
        return "bg-red-500";
    };

    return (
        <Card className="shadow-sm">
            <CardHeader>
                <CardTitle>Score moyen global</CardTitle>
            </CardHeader>
            <CardContent>
                <div className="flex flex-col items-center justify-center py-6">
                    <div className="relative w-48 h-48 mb-4">
                        <svg className="w-full h-full transform -rotate-90">
                            <circle
                                cx="96"
                                cy="96"
                                r="80"
                                stroke="currentColor"
                                strokeWidth="12"
                                fill="none"
                                className="text-muted"
                            />
                            <circle
                                cx="96"
                                cy="96"
                                r="80"
                                stroke="currentColor"
                                strokeWidth="12"
                                fill="none"
                                strokeDasharray={`${2 * Math.PI * 80}`}
                                strokeDashoffset={`${2 * Math.PI * 80 * (1 - percentage / 100)}`}
                                className={getGaugeColor()}
                                strokeLinecap="round"
                            />
                        </svg>
                        <div className="absolute inset-0 flex flex-col items-center justify-center">
                            <span className={`text-5xl font-bold ${getColor()}`}>
                                {score.toFixed(1)}
                            </span>
                            <span className="text-sm text-muted-foreground">/ 5.0</span>
                        </div>
                    </div>

                    <div className="flex items-center gap-2">
                        {isPositive ? (
                            <TrendingUp className="h-4 w-4 text-green-500" />
                        ) : (
                            <TrendingDown className="h-4 w-4 text-red-500" />
                        )}
                        <span className={`text-sm font-medium ${isPositive ? 'text-green-500' : 'text-red-500'}`}>
                            {isPositive ? '+' : ''}{evolution.toFixed(2)} vs mois dernier
                        </span>
                    </div>
                </div>
            </CardContent>
        </Card>
    );
}
