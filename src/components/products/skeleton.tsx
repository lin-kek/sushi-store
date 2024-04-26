import { Skeleton } from "../ui/skeleton";

export default function SkeletonTab() {
  return (
    <div>
      <Skeleton className="w-full h-10 rounded-xl" />
      <div className="grid gap-5 grid-cols-2 sm:grid-cols-3 md:grid-cols-4 mt-6">
        {Array.from({ length: 8 }, (item, index) => (
          <div key={index}>
            <Skeleton className="w-full h-32 rounded-xl" />
            <Skeleton className="w-full h-7 mt-2 rounded-xl" />
            <Skeleton className="w-16 h-5 mt-2 rounded-xl" />
            <Skeleton className="w-full h-9 mt-2 rounded-xl" />
          </div>
        ))}
      </div>
    </div>
  );
}
