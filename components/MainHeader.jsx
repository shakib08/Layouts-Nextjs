"use client";
import React from "react";
import { useState } from "react";
import { FaBars } from "react-icons/fa";
import Drawer from "./Drawer";
import Image from "next/image";

function MainHeader() {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const toggleDrawer = () => {
    setIsDrawerOpen(!isDrawerOpen);
  };
  return (
    <div>
      <div className="bg-white p-3 flex items-center space-x-4">
        <div onClick={toggleDrawer} className="cursor-pointer">
          <FaBars />
        </div>
        <div>
          <Image src="/checkbox.png" width={70} height={25} alt="Checkbox" />
        </div>
      </div>
      <Drawer isOpen={isDrawerOpen} onClose={toggleDrawer} />
    </div>
  );
}

export default MainHeader;
