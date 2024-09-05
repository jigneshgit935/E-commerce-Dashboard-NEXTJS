import React from "react";
import Logo from "./Logo";
import MenuToggle from "./MenuToggle";
import {ModeToggle} from "./ModeToggle";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";

const Navbar = () => {
  return (
    <div className="py-4 border-b ">
      <div className="md:w-[95%] w-[92%]  mx-auto flex items-center justify-between">
        <div className="flex items-center gap-5">
          <Logo />
          <MenuToggle />
        </div>

        <div className="flex gap-8 items-center">
            <ModeToggle/>
            <span className="max-md:hidden">Welcome Back Jignesh👋</span>
            <Avatar>
                <AvatarImage src="avatar-image.avif"/>
                <AvatarFallback>Me</AvatarFallback>
            </Avatar>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
