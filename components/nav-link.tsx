"use client";

import type React from "react";

import Link from "next/link";
import { usePathname } from "next/navigation";

interface NavLinkProps {
  href: string;
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
}

export default function NavLink({
  href,
  children,
  className = "",
  onClick,
}: NavLinkProps) {
  const pathname = usePathname();
  const isActive =
    pathname === href ||
    (href === "/dashboard/hello" && pathname === "/dashboard");

  return (
    <Link
      href={href}
      className={`transition-colors hover:text-primary ${
        isActive ? "text-primary" : "text-muted-foreground"
      } ${className}`}
      onClick={onClick}
    >
      {children}
    </Link>
  );
}
