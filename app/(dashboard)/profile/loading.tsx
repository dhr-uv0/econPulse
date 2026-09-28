import { Skeleton, SkeletonHeader } from '@/components/ui/skeleton'

export default function ProfileLoading() {
  return (
    <div className="space-y-6 max-w-2xl mx-auto">
      <SkeletonHeader />
      <div className="card-surface space-y-4 p-6">
        <Skeleton className="h-4 w-32" />
        <Skeleton className="h-10 w-full rounded-lg" />
        <Skeleton className="h-4 w-24" />
        <Skeleton className="h-10 w-full rounded-lg" />
        <Skeleton className="h-4 w-28" />
        <Skeleton className="h-10 w-full rounded-lg" />
      </div>
    </div>
  )
}
