import React from "react";
import { IoIosArrowBack } from "react-icons/io";
import Link from "next/link";

function Drawer({ isOpen, onClose }) {
  return (
    <div
      className={`fixed inset-0 bg-white-800 bg-opacity-75 transition-opacity ${
        isOpen ? "opacity-100" : "opacity-0 pointer-events-none"
      }`}
    >
      <div
        className={`fixed inset-y-0 left-0 bg-white w-64 p-4 transform ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } transition-transform`}
      >
        <div className="flex items-center space-x-3">
          <div>
            <button onClick={onClose} className="mb-4">
              <IoIosArrowBack />
            </button>
          </div>
          <div>Back</div>
        </div>

        <div>
          <div className="p-2 border-t border-b "> <Link href="/login">Go to the Login Page</Link> </div>
          <div className="p-2 border-t border-b ">Drawer Content</div>
          <div className="p-2 border-t border-b ">Drawer Content</div>
          <div className="p-2 border-t border-b ">Drawer Content</div>
        </div>

      </div>
    </div>
  );
}

export default Drawer;
