"use client";

import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";

interface KeywordsCloudProps {
    keywords: Array<{
        text: string;
        value: number;
    }>;
}

export function KeywordsCloud({ keywords }: KeywordsCloudProps) {
    const maxValue = Math.max(...keywords.map(k => k.value));

    const getFontSize = (value: number) => {
        const minSize = 14;
        const maxSize = 32;
        return minSize + ((value / maxValue) * (maxSize - minSize));
    };

    const getColor = (index: number) => {
        const colors = [
            'text-blue-500',
            'text-purple-500',
            'text-pink-500',
            'text-green-500',
            'text-yellow-500',
            'text-cyan-500',
            'text-indigo-500',
            'text-red-500',
            'text-orange-500',
            'text-teal-500'
        ];
        return colors[index % colors.length];
    };

    return (
        <Card className="shadow-sm">
            <CardHeader>
                <CardTitle>Mots-clés les plus fréquents</CardTitle>
            </CardHeader>
            <CardContent>
                <div className="flex flex-wrap gap-4 items-center justify-center min-h-[300px] p-4">
                    {keywords.map((keyword, index) => (
                        <span
                            key={keyword.text}
                            className={`font-semibold ${getColor(index)} hover:opacity-80 transition-opacity cursor-pointer`}
                            style={{ fontSize: `${getFontSize(keyword.value)}px` }}
                            title={`${keyword.value} mentions`}
                        >
                            {keyword.text}
                        </span>
                    ))}
                </div>
            </CardContent>
        </Card>
    );
}
