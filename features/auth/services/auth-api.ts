import { apiClient } from "@/shared/api-client";
import type { ApiResponse } from "@/shared/types";

interface LoginCredentials {
  email: string;
  password: string;
}

interface AuthResponse {
  token: string;
  user: {
    id: string;
    email: string;
    name: string;
  };
}

export async function login(
  credentials: LoginCredentials
): Promise<ApiResponse<AuthResponse>> {
  return apiClient.post<AuthResponse>("/auth/login", credentials);
}

export async function logout(): Promise<void> {
  // TODO: Implémenter la déconnexion
}
