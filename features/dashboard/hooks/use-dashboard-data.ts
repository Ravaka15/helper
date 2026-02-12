"use client";

import { useState, useEffect } from "react";

interface DashboardData {
  totalUsers: number;
  activeUsers: number;
  revenue: number;
}

export function useDashboardData() {
  const [data, setData] = useState<DashboardData | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // TODO: Remplacer par un vrai appel API
    setTimeout(() => {
      setData({
        totalUsers: 1234,
        activeUsers: 567,
        revenue: 89000,
      });
      setLoading(false);
    }, 1000);
  }, []);

  return { data, loading };
}
