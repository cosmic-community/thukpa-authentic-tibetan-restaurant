export default function Loading() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-warm-50">
      <div className="text-center space-y-8">
        {/* Loading Animation */}
        <div className="relative">
          <div className="w-16 h-16 bg-gradient-warm rounded-full flex items-center justify-center animate-bounce-gentle">
            <span className="text-white text-2xl">🍜</span>
          </div>
          <div className="absolute inset-0 w-16 h-16 rounded-full border-4 border-primary/20 border-t-primary animate-spin"></div>
        </div>
        
        {/* Loading Text */}
        <div className="space-y-2">
          <h2 className="text-2xl font-bold text-gray-900">
            Preparing Your Experience
          </h2>
          <p className="text-gray-600">
            Warming up the authentic flavors of Tibet...
          </p>
        </div>
      </div>
    </div>
  )
}