import { SkeletonHeader, SkeletonCardGrid } from '@/components/ui/skeleton'

export default function CurriculumLoading() {
  return (
    <div className="space-y-6 max-w-6xl mx-auto">
      <SkeletonHeader />
      <SkeletonCardGrid count={9} />
    </div>
  )
}
