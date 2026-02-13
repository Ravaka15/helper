"use client";

import { useState } from "react";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Send, FileText, History } from "lucide-react";
import { AnalysisResult } from "./analysis-result";
import { ResponseSuggestions } from "./response-suggestions";
import { AnalysisHistory } from "./analysis-history";
import { analyzeReview } from "@/shared/utils/analyze-review";

interface AnalysisData {
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

export function ChatInterface() {
    const [input, setInput] = useState("");
    const [loading, setLoading] = useState(false);
    const [analysis, setAnalysis] = useState<AnalysisData | null>(null);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!input.trim()) return;

        setLoading(true);

        // Simulation d'analyse
        setTimeout(() => {
            const result = analyzeReview(input);
            setAnalysis(result);
            setLoading(false);
        }, 1500);
    };

    const handleClear = () => {
        setInput("");
        setAnalysis(null);
    };

    return (
        <div className="space-y-6">
            <div>
                <h1 className="text-3xl font-bold">Assistant d&apos;analyse</h1>
                <p className="text-muted-foreground">
                    Analysez les avis clients en temps réel
                </p>
            </div>

            <Tabs defaultValue="analyze" className="w-full">
                <TabsList className="grid w-full grid-cols-2">
                    <TabsTrigger value="analyze" className="flex items-center gap-2">
                        <FileText className="h-4 w-4" />
                        Analyser
                    </TabsTrigger>
                    <TabsTrigger value="history" className="flex items-center gap-2">
                        <History className="h-4 w-4" />
                        Historique
                    </TabsTrigger>
                </TabsList>

                <TabsContent value="analyze" className="space-y-6">
                    <Card className="shadow-sm">
                        <CardHeader>
                            <CardTitle>Saisir un avis client</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <form onSubmit={handleSubmit} className="space-y-4">
                                <Textarea
                                    value={input}
                                    onChange={(e) => setInput(e.target.value)}
                                    placeholder="Collez ici l'avis client à analyser..."
                                    className="min-h-[150px]"
                                    disabled={loading}
                                />
                                <div className="flex gap-2">
                                    <Button type="submit" disabled={loading || !input.trim()} className="flex-1">
                                        {loading ? (
                                            "Analyse en cours..."
                                        ) : (
                                            <>
                                                <Send className="h-4 w-4 mr-2" />
                                                Analyser
                                            </>
                                        )}
                                    </Button>
                                    {analysis && (
                                        <Button type="button" variant="outline" onClick={handleClear}>
                                            Nouveau
                                        </Button>
                                    )}
                                </div>
                            </form>
                        </CardContent>
                    </Card>

                    {analysis && (
                        <div className="grid gap-6 md:grid-cols-2">
                            <AnalysisResult
                                categories={analysis.categories}
                                sentiment={analysis.sentiment}
                                scores={analysis.scores}
                                keywords={analysis.keywords}
                                summary={analysis.summary}
                            />
                            <ResponseSuggestions sentiment={analysis.sentiment} />
                        </div>
                    )}
                </TabsContent>

                <TabsContent value="history">
                    <AnalysisHistory />
                </TabsContent>
            </Tabs>
        </div>
    );
}
