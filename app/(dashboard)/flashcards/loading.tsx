import { SkeletonHeader, SkeletonCardGrid } from '@/components/ui/skeleton'

export default function FlashcardsLoading() {
  return (
    <div className="space-y-6 max-w-4xl mx-auto">
      <SkeletonHeader />
      <SkeletonCardGrid count={6} />
    </div>
  )
}
