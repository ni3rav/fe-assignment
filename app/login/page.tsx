import { AuthButton } from "@/components/auth-button";
import { useSession } from "next-auth/react";
import { redirect } from "next/navigation";

export default function LoginPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-background">
      <div className="max-w-md w-full px-4 py-8">
        <div className="text-center space-y-6">
          <h1 className="text-3xl font-bold tracking-tighter text-primary">
            Welcome Back
          </h1>
          <p className="text-muted-foreground">
            Sign in to access your dashboard and place orders
          </p>
          <div className="flex justify-center">
            <AuthButton />
          </div>
        </div>
      </div>
    </div>
  );
}
