import { Skeleton, SkeletonHeader, SkeletonStatRow, SkeletonCardGrid } from '@/components/ui/skeleton'

export default function DashboardLoading() {
  return (
    <div className="space-y-6 max-w-7xl mx-auto">
      <SkeletonHeader />
      <SkeletonStatRow />
      <Skeleton className="h-40 w-full rounded-xl" />
      <SkeletonCardGrid count={3} />
    </div>
  )
}
