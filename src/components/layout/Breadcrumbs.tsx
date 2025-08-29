"use client";

import React from "react";
import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

interface BreadcrumbItem {
    label: string;
    href: string;
}

interface BreadcrumbsProps {
    items: BreadcrumbItem[];
    className?: string;
    variant?: "default" | "favorites";
    colorClass?: string;
}

const Breadcrumbs: React.FC<BreadcrumbsProps> = ({
    items,
    className,
    variant = "default",
    colorClass,
}) => {
    const pathname = usePathname();

    const baseText =
        colorClass ??
        (variant === "favorites" ? "text-rose-200" : "text-muted-foreground");
    const hoverClass =
        variant === "favorites"
            ? "hover:text-rose-200"
            : "hover:text-foreground";
    const currentClass =
        variant === "favorites"
            ? "font-semibold text-rose-200"
            : "font-semibold text-foreground";

    return (
        <nav aria-label="Breadcrumb" className={cn("mb-4", className)}>
            <ol className={cn("flex items-center space-x-2 text-sm", baseText)}>
                {items.map((item, index) => {
                    const isLast = index === items.length - 1;
                    const isCurrentPage = item.href === pathname;

                    return (
                        <li key={item.href} className="flex items-center">
                            {index > 0 && (
                                <ChevronRight className="h-4 w-4 mx-2" />
                            )}
                            <Link
                                href={item.href}
                                className={cn(
                                    hoverClass,
                                    isCurrentPage ? currentClass : ""
                                )}
                                aria-current={
                                    isCurrentPage ? "page" : undefined
                                }
                            >
                                {item.label}
                            </Link>
                        </li>
                    );
                })}
            </ol>
        </nav>
    );
};

export default Breadcrumbs;
