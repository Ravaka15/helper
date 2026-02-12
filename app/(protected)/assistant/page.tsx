import { ChatInterface } from "@/features/assistant/components/chat-interface";

export default function AssistantPage() {
    return (
        <div className="space-y-6 h-full flex flex-col">
            <div>
                <h1 className="text-3xl font-bold">Assistant</h1>
                <p className="text-muted-foreground">
                    Posez vos questions à l&apos;assistant IA
                </p>
            </div>

            <div className="flex-1">
                <ChatInterface />
            </div>
        </div>
    );
}
