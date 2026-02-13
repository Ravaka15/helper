"use client";

import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ThumbsUp, ThumbsDown, Minus, Clock } from "lucide-react";
import analysisHistory from "@/data/analysis-history.json";

export function AnalysisHistory() {
    const getSentimentIcon = (sentiment: string) => {
        switch (sentiment) {
            case "positive":
                return <ThumbsUp className="h-4 w-4 text-green-500" />;
            case "negative":
                return <ThumbsDown className="h-4 w-4 text-red-500" />;
            default:
                return <Minus className="h-4 w-4 text-yellow-500" />;
        }
    };

    const getSentimentColor = (sentiment: string) => {
        switch (sentiment) {
            case "positive":
                return "bg-green-500/10 text-green-500 border-green-500/20";
            case "negative":
                return "bg-red-500/10 text-red-500 border-red-500/20";
            default:
                return "bg-yellow-500/10 text-yellow-500 border-yellow-500/20";
        }
    };

    const formatDate = (dateString: string) => {
        const date = new Date(dateString);
        return new Intl.DateTimeFormat("fr-FR", {
            day: "2-digit",
            month: "short",
            hour: "2-digit",
            minute: "2-digit"
        }).format(date);
    };

    return (
        <Card className="shadow-sm">
            <CardHeader>
                <CardTitle className="text-lg flex items-center gap-2">
                    <Clock className="h-5 w-5" />
                    Historique des analyses
                </CardTitle>
            </CardHeader>
            <CardContent>
                <div className="space-y-4">
                    {analysisHistory.analyses.map((analysis) => (
                        <div
                            key={analysis.id}
                            className="p-4 rounded-lg border bg-card hover:bg-accent/50 transition-colors"
                        >
                            <div className="flex items-start justify-between gap-4 mb-2">
                                <div className="flex items-center gap-2">
                                    {getSentimentIcon(analysis.sentiment)}
                                    <span className="text-xs text-muted-foreground">
                                        {formatDate(analysis.date)}
                                    </span>
                                </div>
                                <Badge className={getSentimentColor(analysis.sentiment)}>
                                    {(analysis.scores[analysis.sentiment as keyof typeof analysis.scores] * 100).toFixed(0)}%
                                </Badge>
                            </div>

                            <p className="text-sm mb-2 line-clamp-2">{analysis.content}</p>

                            <div className="flex flex-wrap gap-2 mb-2">
                                {analysis.categories.map((category) => (
                                    <Badge key={category} variant="outline" className="text-xs">
                                        {category}
                                    </Badge>
                                ))}
                            </div>

                            <p className="text-xs text-muted-foreground">{analysis.summary}</p>
                        </div>
                    ))}
                </div>
            </CardContent>
        </Card>
    );
}
