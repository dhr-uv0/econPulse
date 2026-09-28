import { Skeleton, SkeletonHeader } from '@/components/ui/skeleton'

export default function MockTestLoading() {
  return (
    <div className="space-y-6 max-w-3xl mx-auto">
      <SkeletonHeader />
      <div className="card-surface space-y-6 p-5">
        <Skeleton className="h-4 w-24" />
        <div className="flex flex-wrap gap-2">
          {Array.from({ length: 5 }, (_, i) => (
            <Skeleton key={i} className="h-8 w-24 rounded-lg" />
          ))}
        </div>
        <Skeleton className="h-4 w-24" />
        <div className="flex flex-wrap gap-2">
          {Array.from({ length: 3 }, (_, i) => (
            <Skeleton key={i} className="h-8 w-28 rounded-lg" />
          ))}
        </div>
      </div>
    </div>
  )
}
