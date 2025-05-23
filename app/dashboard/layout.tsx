"use client";

import type React from "react";

import { RouteProtector } from "@/components/route-protector";
import Link from "next/link";
import { AuthButton } from "@/components/auth-button";
import NavLink from "@/components/nav-link";
import { MobileNav } from "@/components/mobile-nav";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <RouteProtector>
      <div className="flex min-h-screen flex-col">
        <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
          <div className="container flex h-14 items-center mx-auto px-4">
            <div className="flex items-center flex-1">
              <MobileNav />
              <Link
                href="/dashboard/hello"
                className="mr-6 flex items-center space-x-2"
              >
                <span className="font-bold hidden sm:inline-block">
                  My Dashboard
                </span>
                <span className="font-bold sm:hidden">Dashboard</span>
              </Link>
              <nav className="hidden md:flex items-center space-x-6 text-sm font-medium">
                <NavLink href="/dashboard/hello">Home</NavLink>
                <NavLink href="/dashboard/orders">Orders</NavLink>
              </nav>
              <div className="ml-auto hidden md:flex items-center">
                <AuthButton />
              </div>
            </div>
          </div>
        </header>
        <main className="flex-1 container mx-auto py-6 px-4">
          {children}
        </main>
      </div>
    </RouteProtector>
  );
}
