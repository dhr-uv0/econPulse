import { Skeleton, SkeletonHeader, SkeletonStatRow } from '@/components/ui/skeleton'

export default function ProgressLoading() {
  return (
    <div className="space-y-6 max-w-5xl mx-auto">
      <SkeletonHeader />
      <SkeletonStatRow />
      <Skeleton className="h-64 w-full rounded-xl" />
      <Skeleton className="h-48 w-full rounded-xl" />
    </div>
  )
}
