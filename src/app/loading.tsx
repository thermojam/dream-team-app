import { LoaderCircle } from "lucide-react";

export default function LoadingSpinner() {
    return (
        <div className="flex min-h-[calc(100vh-4rem)] items-center justify-center">
            <LoaderCircle className="h-12 w-12 animate-spin text-white" />
        </div>
    );
}
