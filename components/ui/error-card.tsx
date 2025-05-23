import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

interface ErrorCardProps {
  title?: string;
  message?: string;
  retry?: () => void;
}

export function ErrorCard({
  title = "Something went wrong",
  message = "An error occurred while loading the data. Please try again.",
  retry,
}: ErrorCardProps) {
  return (
    <Card className="mx-auto max-w-md">
      <CardHeader>
        <CardTitle className="text-destructive">{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-muted-foreground mb-4">{message}</p>
        {retry && (
          <Button onClick={retry} variant="outline">
            Try Again
          </Button>
        )}
      </CardContent>
    </Card>
  );
}
