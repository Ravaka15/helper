import { apiClient } from "@/shared/api-client";
import type { ApiResponse } from "@/shared/types";

interface DashboardStats {
  totalUsers: number;
  activeUsers: number;
  revenue: number;
}

export async function getDashboardStats(): Promise<ApiResponse<DashboardStats>> {
  return apiClient.get<DashboardStats>("/dashboard/stats");
}
