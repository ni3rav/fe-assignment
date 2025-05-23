import { Button } from "@/components/ui/button";
import { Pizza } from "lucide-react";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <main className="flex-1">
        <section className="w-full min-h-screen flex items-center justify-center bg-background">
          <div className="container px-4 md:px-6 mx-auto">
            <div className="flex flex-col items-center justify-center text-center space-y-8 max-w-3xl mx-auto">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-primary/10 px-3 py-1 text-sm text-primary">
                  Fast Delivery
                </div>
                <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none text-primary">
                  Hot & Fresh Pizza Delivered To Your Door
                </h1>
                <p className="max-w-[600px] text-muted-foreground md:text-xl mx-auto">
                  Order your favorite pizza in seconds and enjoy the best
                  delivery experience. Fresh ingredients, amazing taste, right
                  to your doorstep.
                </p>
              </div>
              <div className="flex flex-col gap-2 min-[400px]:flex-row justify-center">
                <Link href="dashboard">
                  <Button size="lg" className="bg-primary hover:bg-primary/90">
                    Order Now <Pizza className="ml-2 h-5 w-5" />
                  </Button>
                </Link>
              </div>
              <div className="flex items-center justify-center space-x-6 text-sm">
                <div className="flex items-center gap-1">
                  <div className="rounded-full bg-green-500 p-1">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="12"
                      height="12"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="text-primary-foreground"
                    >
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                  </div>
                  <span className="text-muted-foreground">Free delivery</span>
                </div>
                <div className="flex items-center gap-1">
                  <div className="rounded-full bg-green-500 p-1">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="12"
                      height="12"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="text-primary-foreground"
                    >
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                  </div>
                  <span className="text-muted-foreground">30 min or free</span>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
