"use client";

import React from "react";
import MenuLinks from "./MenuLinks";
import { motion } from "framer-motion";
import { useMenuStore } from "@/store/toggleMenuStore";
import Logout from "../authenticate/Logout";

const Sidebar = () => {
  const { isOpen } = useMenuStore();
  return (
    <motion.div
      className={`sticky z-10 top-0 flex flex-col h-screen items-center overflow-hidden py-10 border-r max-md:max-w-[80px] ${
        isOpen ? "max-md:hidden gap-10" : "block justify-between"
      }`}
      initial={{ width: isOpen ? 80 : 250 }}
      animate={{ width: isOpen ? 80 : 250 }}
      transition={{ duration: "0.3", ease: "easeInOut" }}
    >
      <h2 className={`text-sm max-md:hidden ${isOpen && "hidden"}`}>
        Main Menu
      </h2>
      <MenuLinks isOpen={isOpen} />
      <Logout />
    </motion.div>
  );
};

export default Sidebar;
