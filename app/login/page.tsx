"use client";

import { AuthButton } from "@/components/auth-button";
import { useSession } from "next-auth/react";
import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function LoginPage() {
  const { data: session } = useSession();
  const router = useRouter();

  useEffect(() => {
    if (session) {
      router.replace("/dashboard");
    }
  }, [session, router]);

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
