import { LoginForm } from "@/features/auth/components/login-form";
import { ThemeToggle } from "@/components/theme-toggle";

export default function Home() {
    return (
        <div className="flex min-h-screen items-center justify-center bg-muted/50">
            <div className="absolute top-4 right-4">
                <ThemeToggle />
            </div>
            <div className="w-full max-w-md px-4">
                <div className="text-center mb-8">
                    <h1 className="text-4xl font-bold mb-2">Backoffice App</h1>
                    <p className="text-muted-foreground">
                        Connectez-vous pour accéder à votre espace
                    </p>
                </div>
                <LoginForm />
            </div>
        </div>
    );
}
