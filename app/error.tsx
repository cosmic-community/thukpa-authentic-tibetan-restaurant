'use client'

import { useEffect } from 'react'
import { AlertCircle, RefreshCw, Home } from 'lucide-react'

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  useEffect(() => {
    console.error('Application error:', error)
  }, [error])

  return (
    <div className="min-h-screen flex items-center justify-center bg-warm-50 section-padding">
      <div className="text-center max-w-md mx-auto">
        {/* Error Icon */}
        <div className="w-20 h-20 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-8">
          <AlertCircle className="w-10 h-10 text-red-600" />
        </div>
        
        {/* Error Content */}
        <div className="space-y-6">
          <div>
            <h1 className="text-3xl font-bold text-gray-900 mb-2">
              Oops! Something went wrong
            </h1>
            <p className="text-gray-600">
              We encountered an unexpected error while preparing your page. 
              Don't worry, our kitchen is still cooking up great food!
            </p>
          </div>

          {/* Error Details (for development) */}
          {process.env.NODE_ENV === 'development' && (
            <div className="bg-red-50 border border-red-200 rounded-lg p-4 text-left">
              <h3 className="font-semibold text-red-800 mb-2">Error Details:</h3>
              <p className="text-red-700 text-sm font-mono break-all">
                {error.message}
              </p>
              {error.digest && (
                <p className="text-red-600 text-xs mt-2">
                  Error ID: {error.digest}
                </p>
              )}
            </div>
          )}

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={reset}
              className="btn-primary flex items-center justify-center space-x-2"
            >
              <RefreshCw className="w-4 h-4" />
              <span>Try Again</span>
            </button>
            <a
              href="/"
              className="btn-secondary flex items-center justify-center space-x-2"
            >
              <Home className="w-4 h-4" />
              <span>Go Home</span>
            </a>
          </div>
        </div>

        {/* Support Message */}
        <div className="mt-12 p-6 bg-white rounded-xl shadow-sm">
          <p className="text-sm text-gray-500 mb-2">
            Still having trouble? Contact our support team:
          </p>
          <a
            href="mailto:info@thukparestaurant.com"
            className="text-accent hover:text-accent-600 font-medium transition-colors"
          >
            info@thukparestaurant.com
          </a>
        </div>
      </div>
    </div>
  )
}