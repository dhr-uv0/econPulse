import { Skeleton, SkeletonHeader, SkeletonCardGrid } from '@/components/ui/skeleton'

export default function QuizLoading() {
  return (
    <div className="space-y-6 max-w-4xl mx-auto">
      <SkeletonHeader />
      <Skeleton className="h-20 w-full rounded-xl" />
      <SkeletonCardGrid count={6} />
    </div>
  )
}
