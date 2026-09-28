import { SkeletonHeader, SkeletonList } from '@/components/ui/skeleton'

export default function TeacherLoading() {
  return (
    <div className="space-y-6 max-w-5xl mx-auto">
      <SkeletonHeader />
      <SkeletonList count={5} />
    </div>
  )
}
