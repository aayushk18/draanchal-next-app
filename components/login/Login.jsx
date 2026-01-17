"use client";

import { useState } from "react";
import { Mail, Lock, Eye, EyeOff, Stethoscope } from "lucide-react";

export default function Login() {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="min-h-screen grid lg:grid-cols-2 bg-slate-50">
      
      {/* LEFT SIDE */}
      <div className="hidden lg:flex flex-col justify-center px-16 bg-gradient-to-br from-blue-600 to-cyan-500 text-white">
        <div className="space-y-6 max-w-md">
          <div className="flex items-center gap-3">
            <Stethoscope size={40} />
            <h1 className="text-3xl font-bold">MediCare+</h1>
          </div>

          <h2 className="text-4xl font-semibold leading-tight">
            Doctor Portal Login
          </h2>

          <p className="text-blue-100 text-lg">
            Secure access for doctors to manage appointments, patients, and medical records.
          </p>

          <ul className="space-y-3 text-blue-100">
            <li>✔ Patient Records</li>
            <li>✔ Appointments</li>
            <li>✔ Prescriptions</li>
            <li>✔ Secure & HIPAA Compliant</li>
          </ul>
        </div>
      </div>

      {/* RIGHT SIDE */}
      <div className="flex items-center justify-center px-6 sm:px-12">
        <div className="w-full max-w-md bg-white rounded-2xl shadow-xl p-8 space-y-6">
          
          {/* Header */}
          <div className="text-center space-y-2">
            <div className="mx-auto w-14 h-14 flex items-center justify-center rounded-full bg-blue-100">
              <Stethoscope className="text-blue-600" size={28} />
            </div>
            <h2 className="text-2xl font-bold text-gray-800">
              Doctor Login
            </h2>
            <p className="text-gray-500">
              Enter your credentials to continue
            </p>
          </div>

          {/* Email */}
          <div className="space-y-1">
            <label className="text-sm font-medium text-gray-700">
              Email Address
            </label>
            <div className="relative">
              <Mail className="absolute left-3 top-3 text-gray-400" size={18} />
              <input
                type="email"
                placeholder="doctor@hospital.com"
                className="w-full pl-10 pr-4 py-2.5 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
              />
            </div>
          </div>

          {/* Password */}
          <div className="space-y-1">
            <label className="text-sm font-medium text-gray-700">
              Password
            </label>
            <div className="relative">
              <Lock className="absolute left-3 top-3 text-gray-400" size={18} />
              <input
                type={showPassword ? "text" : "password"}
                placeholder="••••••••"
                className="w-full pl-10 pr-10 py-2.5 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-2.5 text-gray-400 hover:text-gray-600"
              >
                {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
              </button>
            </div>
          </div>

          {/* Actions */}
          <div className="flex items-center justify-between text-sm">
            <label className="flex items-center gap-2 text-gray-600">
              <input type="checkbox" className="rounded" />
              Remember me
            </label>
            <a href="#" className="text-blue-600 hover:underline">
              Forgot password?
            </a>
          </div>

          {/* Button */}
          <button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2.5 rounded-lg transition">
            Login to Dashboard
          </button>

          {/* Footer */}
          <p className="text-center text-sm text-gray-500">
            Not authorized? Contact hospital administration
          </p>
        </div>
      </div>
    </div>
  );
}
