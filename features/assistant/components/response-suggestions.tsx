"use client";

import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Copy, Check } from "lucide-react";
import { useState } from "react";
import responseTemplates from "@/data/response-templates.json";

interface ResponseSuggestionsProps {
    sentiment: "positive" | "negative" | "neutral";
}

export function ResponseSuggestions({ sentiment }: ResponseSuggestionsProps) {
    const [copiedIndex, setCopiedIndex] = useState<number | null>(null);
    const suggestions = responseTemplates[sentiment] || [];

    const handleCopy = (text: string, index: number) => {
        navigator.clipboard.writeText(text);
        setCopiedIndex(index);
        setTimeout(() => setCopiedIndex(null), 2000);
    };

    return (
        <Card className="shadow-sm">
            <CardHeader>
                <CardTitle className="text-lg">Suggestions de réponse</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
                {suggestions.map((suggestion, index) => (
                    <div
                        key={index}
                        className="p-3 rounded-lg bg-muted/50 border relative group"
                    >
                        <p className="text-sm pr-10">{suggestion}</p>
                        <Button
                            variant="ghost"
                            size="icon"
                            className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity"
                            onClick={() => handleCopy(suggestion, index)}
                        >
                            {copiedIndex === index ? (
                                <Check className="h-4 w-4 text-green-500" />
                            ) : (
                                <Copy className="h-4 w-4" />
                            )}
                        </Button>
                    </div>
                ))}
            </CardContent>
        </Card>
    );
}
