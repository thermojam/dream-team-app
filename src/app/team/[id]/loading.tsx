import { Skeleton } from "@/components/ui/skeleton";

export default function MemberLoading() {
    return (
        <div className="container mx-auto px-4 py-8 md:py-16 animate-pulse">
            <Skeleton className="h-10 w-48 mb-8" />
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
                <div className="md:col-span-1">
                    <div className="sticky top-24 space-y-6">
                        <Skeleton className="rounded-lg w-full aspect-square" />
                        <Skeleton className="h-8 w-3/4" />
                        <Skeleton className="h-6 w-1/2" />
                        <div className="flex space-x-4">
                            <Skeleton className="h-8 w-8 rounded-full" />
                            <Skeleton className="h-8 w-8 rounded-full" />
                        </div>
                    </div>
                </div>

                <div className="md:col-span-2 space-y-8">
                    <div>
                        <Skeleton className="h-8 w-40 mb-2" />
                        <Skeleton className="h-5 w-full" />
                        <Skeleton className="h-5 w-5/6 mt-2" />
                    </div>
                    <div>
                        <Skeleton className="h-8 w-52 mb-2" />
                        <Skeleton className="h-5 w-full" />
                    </div>
                    <div>
                        <Skeleton className="h-8 w-48 mb-4" />
                        <div className="space-y-4">
                            <Skeleton className="h-6 w-full" />
                            <Skeleton className="h-6 w-full" />
                            <Skeleton className="h-6 w-full" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
