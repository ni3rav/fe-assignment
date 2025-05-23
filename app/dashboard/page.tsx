import { RouteProtector } from "@/components/route-protector";

export default function DashboardPage() {
  return (
    <RouteProtector>
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-6">Dashboard</h1>
        <div className="bg-card rounded-lg p-6 shadow-sm">
          <p className="text-muted-foreground">Welcome to your dashboard!</p>
        </div>
      </div>
    </RouteProtector>
  );
}
