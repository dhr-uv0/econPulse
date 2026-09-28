import { Skeleton, SkeletonHeader, SkeletonStatRow, SkeletonList } from '@/components/ui/skeleton'

export default function AdminLoading() {
  return (
    <div className="space-y-6 max-w-6xl mx-auto">
      <SkeletonHeader />
      <SkeletonStatRow />
      <Skeleton className="h-10 w-full max-w-sm rounded-lg" />
      <SkeletonList count={8} />
    </div>
  )
}
