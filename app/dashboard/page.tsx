import { redirect } from "next/navigation";

export default function DashboardPage() {
  redirect("/dashboard/hello");
  return null; // Or a loading spinner, but redirect should happen server-side
}
