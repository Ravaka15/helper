export const APP_NAME = "Backoffice App";
export const APP_VERSION = "1.0.0";

export const ROUTES = {
  HOME: "/",
  LOGIN: "/",
  DASHBOARD: "/dashboard",
  ASSISTANT: "/assistant",
} as const;

export const API_ENDPOINTS = {
  AUTH: "/auth",
  LOGIN: "/auth/login",
  LOGOUT: "/auth/logout",
  USERS: "/users",
  DASHBOARD: "/dashboard",
} as const;
