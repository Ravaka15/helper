"use client";

import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";

export function Chart() {
    return (
        <Card>
            <CardHeader>
                <CardTitle>Graphique</CardTitle>
            </CardHeader>
            <CardContent>
                <div className="h-[300px] flex items-center justify-center text-muted-foreground">
                    Graphique à implémenter
                </div>
            </CardContent>
        </Card>
    );
}
