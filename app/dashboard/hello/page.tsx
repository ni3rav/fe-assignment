"use client";

import { useSession } from "next-auth/react";
import { Pizza } from "lucide-react";

export default function HelloPage() {
  const { data: session } = useSession();

  return (
    <div className="w-full flex flex-col items-center justify-center min-h-[calc(100vh-10rem)]">
      <div className="max-w-3xl w-full text-center space-y-6">
        <div className="flex flex-col items-center space-y-4">
          <div className="p-4 rounded-full bg-primary/10">
            <Pizza className="w-12 h-12 text-primary" />
          </div>
          <h1 className="text-4xl font-bold tracking-tight text-center lg:text-5xl">
            Hello, {session?.user?.name || "Guest"}!
          </h1>
          <p className="text-lg text-center text-muted-foreground">
            Welcome to your pizza dashboard. Here you can view and manage your
            orders.
          </p>
        </div>
      </div>
    </div>
  );
}
