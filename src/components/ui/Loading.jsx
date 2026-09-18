export default function Loading() {
  return (
    <div className="flex justify-center items-center py-12">
      <div className="animate-spin">
        <div className="h-12 w-12 border-4 border-primary-green border-t-accent-yellow rounded-full"></div>
      </div>
      <span className="ml-3 text-gray-600">Loading...</span>
    </div>
  )
}