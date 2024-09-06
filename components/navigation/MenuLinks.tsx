"use client";

import React from "react";
import Link from "next/link";
import { House, Users, Package, Shirt, Component, Icon } from "lucide-react";
import { usePathname } from "next/navigation";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { motion } from "framer-motion";

const menuItems = [
  { href: "/", label: "Dashboard", icon: House },
  { href: "/customers", label: "Customers", icon: Users },
  { href: "/orders", label: "Orders", icon: Package },
  { href: "/products", label: "Products", icon: Shirt },
  { href: "/team", label: "Team", icon: Component },
];
const MenuLinks = ({ isOpen }: { isOpen: Boolean }) => {
  const pathName = usePathname();

  const linkVariants = {
    active: {
      backgroundColor: "#2463EB",
      color: "#fff",
      scale: "1.05",
    },
    inActive: {
      backgroundColor: "transparent",
      color: "inherit",
      scale: 1,
    },
  };

  return (
    <TooltipProvider>
      <ul className="flex flex-col gap-10 ">
        {menuItems.map(({ href, label, icon: Icon }) => {
          const isActive =
            (pathName.includes(href) && href.length > 1) || pathName === href;
          return (
            <li key={href}>
              <Tooltip>
                <TooltipTrigger asChild>
                  <Link href={href}>
                    <motion.div
                      animate={isActive ? "active" : "inActive"}
                      transition={{ duration: 0.3 }}
                      variants={linkVariants}
                      className="flex gap-4 py-1 items-center px-4 rounded-md"
                    >
                      <Icon size={23} className="mb-1" />
                      <span className={`max-md:hidden ${isOpen && "hidden"}`}>
                        {label}
                      </span>
                    </motion.div>
                  </Link>
                </TooltipTrigger>
                {isOpen && (
                  <TooltipContent>
                    <p>{label}</p>
                  </TooltipContent>
                )}
              </Tooltip>
            </li>
          );
        })}
      </ul>
    </TooltipProvider>
  );
};

export default MenuLinks;
