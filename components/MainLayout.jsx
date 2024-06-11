"use client";
import React from "react";
import MainHeader from "./MainHeader";

function MainLayout({ children }) {
  return (
    <div className="bg-gray-100 w-full min-h-screen">
      <MainHeader />

      <main>{children}</main>
    </div>
  );
}

export default MainLayout;
