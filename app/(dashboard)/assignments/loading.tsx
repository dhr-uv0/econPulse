import { SkeletonHeader, SkeletonCardGrid } from '@/components/ui/skeleton'

export default function AssignmentsLoading() {
  return (
    <div className="space-y-6 max-w-4xl mx-auto">
      <SkeletonHeader />
      <SkeletonCardGrid count={4} />
    </div>
  )
}
