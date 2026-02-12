import { apiClient } from "@/shared/api-client";
import type { ApiResponse } from "@/shared/types";

interface ChatMessage {
  role: "user" | "assistant";
  content: string;
}

interface ChatResponse {
  message: string;
}

export async function sendChatMessage(
  message: string
): Promise<ApiResponse<ChatResponse>> {
  return apiClient.post<ChatResponse>("/assistant/chat", { message });
}
