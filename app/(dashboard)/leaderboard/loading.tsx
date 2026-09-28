import { SkeletonHeader, SkeletonStatRow, SkeletonList } from '@/components/ui/skeleton'

export default function LeaderboardLoading() {
  return (
    <div className="space-y-6 max-w-2xl mx-auto">
      <SkeletonHeader />
      <SkeletonStatRow count={2} />
      <SkeletonList count={6} />
    </div>
  )
}
