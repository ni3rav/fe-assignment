"use client";

import { Menu, X } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import NavLink from "@/components/nav-link";
import { AuthButton } from "@/components/auth-button";

export function MobileNav() {
  const [open, setOpen] = useState(false);

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <Button variant="ghost" size="icon" className="md:hidden">
          <Menu className="h-5 w-5" />
          <span className="sr-only">Toggle menu</span>
        </Button>
      </SheetTrigger>
      <SheetContent side="left" className="flex flex-col">
        <div className="flex items-center justify-between border-b pb-4">
          <span className="font-bold">My Dashboard</span>
          <Button variant="ghost" size="icon" onClick={() => setOpen(false)}>
            <X className="h-5 w-5" />
            <span className="sr-only">Close menu</span>
          </Button>
        </div>
        <nav className="flex flex-col space-y-4 mt-4">
          <NavLink
            href="/dashboard/hello"
            className="text-base py-2"
            onClick={() => setOpen(false)}
          >
            Home
          </NavLink>
          <NavLink
            href="/dashboard/orders"
            className="text-base py-2"
            onClick={() => setOpen(false)}
          >
            Orders
          </NavLink>
        </nav>
        <div className="mt-auto border-t pt-4">
          <AuthButton />
        </div>
      </SheetContent>
    </Sheet>
  );
}
