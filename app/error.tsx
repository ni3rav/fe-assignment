"use client";

import { ErrorCard } from "@/components/ui/error-card";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <div className="flex-1 flex items-center justify-center min-h-[400px]">
      <ErrorCard
        title="Application Error"
        message={error.message || "Something went wrong. Please try again."}
        retry={reset}
      />
    </div>
  );
}
