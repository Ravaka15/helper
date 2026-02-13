"use client";

import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ThumbsUp, ThumbsDown, Minus, Tag, MessageSquare } from "lucide-react";

interface AnalysisResultProps {
    categories: string[];
    sentiment: "positive" | "negative" | "neutral";
    scores: {
        positive: number;
        negative: number;
        neutral: number;
    };
    keywords: string[];
    summary: string;
}

export function AnalysisResult({ categories, sentiment, scores, keywords, summary }: AnalysisResultProps) {
    const getSentimentColor = () => {
        switch (sentiment) {
            case "positive":
                return "bg-green-500/10 text-green-500 border-green-500/20";
            case "negative":
                return "bg-red-500/10 text-red-500 border-red-500/20";
            default:
                return "bg-yellow-500/10 text-yellow-500 border-yellow-500/20";
        }
    };

    const getSentimentIcon = () => {
        switch (sentiment) {
            case "positive":
                return <ThumbsUp className="h-4 w-4" />;
            case "negative":
                return <ThumbsDown className="h-4 w-4" />;
            default:
                return <Minus className="h-4 w-4" />;
        }
    };

    const getSentimentLabel = () => {
        switch (sentiment) {
            case "positive":
                return "Positif";
            case "negative":
                return "Négatif";
            default:
                return "Neutre";
        }
    };

    return (
        <Card className="shadow-sm">
            <CardHeader>
                <CardTitle className="text-lg">Résultat de l&apos;analyse</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
                {/* Sentiment */}
                <div>
                    <p className="text-sm font-medium mb-2">Sentiment</p>
                    <Badge className={`${getSentimentColor()} flex items-center gap-2 w-fit`}>
                        {getSentimentIcon()}
                        {getSentimentLabel()}
                    </Badge>
                </div>

                {/* Scores */}
                <div>
                    <p className="text-sm font-medium mb-2">Scores de confiance</p>
                    <div className="space-y-2">
                        <div>
                            <div className="flex justify-between text-xs mb-1">
                                <span className="text-green-500">Positif</span>
                                <span>{(scores.positive * 100).toFixed(0)}%</span>
                            </div>
                            <div className="h-2 bg-muted rounded-full overflow-hidden">
                                <div
                                    className="h-full bg-green-500"
                                    style={{ width: `${scores.positive * 100}%` }}
                                />
                            </div>
                        </div>
                        <div>
                            <div className="flex justify-between text-xs mb-1">
                                <span className="text-red-500">Négatif</span>
                                <span>{(scores.negative * 100).toFixed(0)}%</span>
                            </div>
                            <div className="h-2 bg-muted rounded-full overflow-hidden">
                                <div
                                    className="h-full bg-red-500"
                                    style={{ width: `${scores.negative * 100}%` }}
                                />
                            </div>
                        </div>
                        <div>
                            <div className="flex justify-between text-xs mb-1">
                                <span className="text-yellow-500">Neutre</span>
                                <span>{(scores.neutral * 100).toFixed(0)}%</span>
                            </div>
                            <div className="h-2 bg-muted rounded-full overflow-hidden">
                                <div
                                    className="h-full bg-yellow-500"
                                    style={{ width: `${scores.neutral * 100}%` }}
                                />
                            </div>
                        </div>
                    </div>
                </div>

                {/* Catégories */}
                <div>
                    <p className="text-sm font-medium mb-2 flex items-center gap-2">
                        <Tag className="h-4 w-4" />
                        Catégories détectées
                    </p>
                    <div className="flex flex-wrap gap-2">
                        {categories.map((category) => (
                            <Badge key={category} variant="outline">
                                {category}
                            </Badge>
                        ))}
                    </div>
                </div>

                {/* Mots-clés */}
                {keywords.length > 0 && (
                    <div>
                        <p className="text-sm font-medium mb-2">Mots-clés</p>
                        <div className="flex flex-wrap gap-2">
                            {keywords.map((keyword) => (
                                <Badge key={keyword} variant="secondary">
                                    {keyword}
                                </Badge>
                            ))}
                        </div>
                    </div>
                )}

                {/* Résumé */}
                <div>
                    <p className="text-sm font-medium mb-2 flex items-center gap-2">
                        <MessageSquare className="h-4 w-4" />
                        Résumé
                    </p>
                    <p className="text-sm text-muted-foreground">{summary}</p>
                </div>
            </CardContent>
        </Card>
    );
}
