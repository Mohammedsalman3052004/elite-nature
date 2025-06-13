"use client"

import { useEffect } from "react"
import { CheckCircle, X, AlertCircle, Info } from "lucide-react"

interface ToastProps {
  message: string
  type: "success" | "error" | "info"
  isVisible: boolean
  onClose: () => void
  duration?: number
}

export default function Toast({ message, type, isVisible, onClose, duration = 4000 }: ToastProps) {
  useEffect(() => {
    if (isVisible) {
      const timer = setTimeout(() => {
        onClose()
      }, duration)

      return () => clearTimeout(timer)
    }
  }, [isVisible, duration, onClose])

  if (!isVisible) return null

  const getToastStyles = () => {
    switch (type) {
      case "success":
        return "bg-green-50 border-green-200 text-green-800"
      case "error":
        return "bg-red-50 border-red-200 text-red-800"
      case "info":
        return "bg-blue-50 border-blue-200 text-blue-800"
      default:
        return "bg-gray-50 border-gray-200 text-gray-800"
    }
  }

  const getIcon = () => {
    switch (type) {
      case "success":
        return <CheckCircle className="h-6 w-6 text-green-500" />
      case "error":
        return <AlertCircle className="h-6 w-6 text-red-500" />
      case "info":
        return <Info className="h-6 w-6 text-blue-500" />
      default:
        return <CheckCircle className="h-6 w-6 text-gray-500" />
    }
  }

  return (
    <div className="fixed top-4 right-4 z-50 animate-slide-in max-w-sm">
      <div
        className={`w-full border rounded-lg shadow-lg p-4 ${getToastStyles()} transform transition-all duration-300`}
      >
        <div className="flex items-start">
          <div className="flex-shrink-0">{getIcon()}</div>
          <div className="ml-3 w-0 flex-1">
            <p className="text-sm font-medium leading-5">{message}</p>
          </div>
          <div className="ml-4 flex-shrink-0 flex">
            <button
              className={`inline-flex rounded-md p-1.5 focus:outline-none focus:ring-2 focus:ring-offset-2 hover:bg-opacity-75 ${
                type === "success"
                  ? "text-green-500 hover:bg-green-100 focus:ring-green-600"
                  : type === "error"
                    ? "text-red-500 hover:bg-red-100 focus:ring-red-600"
                    : "text-blue-500 hover:bg-blue-100 focus:ring-blue-600"
              }`}
              onClick={onClose}
            >
              <X className="h-5 w-5" />
            </button>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes slide-in {
          from {
            transform: translateX(100%);
            opacity: 0;
          }
          to {
            transform: translateX(0);
            opacity: 1;
          }
        }

        .animate-slide-in {
          animation: slide-in 0.3s ease-out;
        }
      `}</style>
    </div>
  )
}
