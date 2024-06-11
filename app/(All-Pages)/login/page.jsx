"use client"
import React, { useState } from 'react';
import Image from "next/image";

function page() {
    const [loginMethod, setLoginMethod] = useState('email');
  return (
    <div className="flex justify-center items-center h-screen">
    <div className="bg-gray-300 rounded-lg p-8">
      {/* Row 1: Logo */}
      <div className="text-center mb-4">
        <img src="/checkbox.png" alt="Logo" className="mx-auto h-16" />
      </div>
      {/* Row 2: Login with Email and Phone */}
      <div className="grid grid-cols-2 gap-4 mb-4">
        <div
          className={`bg-white rounded-lg p-4 text-center cursor-pointer ${
            loginMethod === 'email' ? 'bg-blue-500 text-white' : ''
          }`}
          onClick={() => setLoginMethod('email')}
        >
          Login with Email
        </div>
        <div
          className={`bg-white rounded-lg p-4 text-center cursor-pointer ${
            loginMethod === 'phone' ? 'bg-blue-500 text-white' : ''
          }`}
          onClick={() => setLoginMethod('phone')}
        >
          Login with Phone
        </div>
      </div>
      {/* Row 3: Text field for email or phone */}
      <div className="mb-4">
        {loginMethod === 'email' ? (
          <input
            type="email"
            placeholder="Email"
            className="w-full rounded-lg p-2 border border-gray-300 focus:outline-none focus:border-blue-500"
          />
        ) : (
          <input
            type="tel"
            placeholder="Phone"
            className="w-full rounded-lg p-2 border border-gray-300 focus:outline-none focus:border-blue-500"
          />
        )}
      </div>
      {/* Row 4: Text field for password */}
      <div className="mb-4">
        <input
          type="password"
          placeholder="Password"
          className="w-full rounded-lg p-2 border border-gray-300 focus:outline-none focus:border-blue-500"
        />
      </div>
      {/* Row 5: Button Login */}
      <div className="text-center mb-4">
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg focus:outline-none focus:shadow-outline">
          Login
        </button>
      </div>
      {/* Row 6: Don't have an account */}
      <div className="text-center mb-4">
        <p>Don't have an account?</p>
      </div>
      {/* Row 7: Sign in */}
      <div className="text-center">
        <a href="#" className="text-blue-500 hover:underline">
          Sign in
        </a>
      </div>
    </div>
  </div>
  )
}

export default page
