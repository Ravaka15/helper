"use client";

import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from "recharts";

interface SentimentTrendChartProps {
  data: Array<{
    date: string;
    positive: number;
    negative: number;
    neutral: number;
  }>;
}

export function SentimentTrendChart({ data }: SentimentTrendChartProps) {
  return (
    <Card className="shadow-sm">
      <CardHeader>
        <CardTitle>Évolution des sentiments</CardTitle>
      </CardHeader>
      <CardContent>
        <ResponsiveContainer width="100%" height={300}>
          <LineChart data={data}>
            <CartesianGrid strokeDasharray="3 3" className="stroke-muted" />
            <XAxis dataKey="date" className="text-xs" />
            <YAxis className="text-xs" />
            <Tooltip 
              contentStyle={{ 
                backgroundColor: 'hsl(var(--card))',
                border: '1px solid hsl(var(--border))',
                borderRadius: '6px'
              }}
            />
            <Legend />
            <Line type="monotone" dataKey="positive" stroke="#22c55e" strokeWidth={2} name="Positif" />
            <Line type="monotone" dataKey="negative" stroke="#ef4444" strokeWidth={2} name="Négatif" />
            <Line type="monotone" dataKey="neutral" stroke="#f59e0b" strokeWidth={2} name="Neutre" />
          </LineChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  );
}
