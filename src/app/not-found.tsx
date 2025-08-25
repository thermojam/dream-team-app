import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { AlertTriangle } from 'lucide-react';

export default function NotFound() {
    return (
        <div className="flex min-h-[calc(100vh-12rem)] flex-col items-center justify-center text-center">
            <AlertTriangle className="mx-auto h-60 w-60 text-destructive" />
            <h1 className="mt-4 text-4xl font-bold tracking-tight text-white sm:text-5xl">
                Страница не найдена
            </h1>
            <p className="mt-4 text-lg text-muted-foreground text-white">
                К сожалению, мы не смогли найти страницу, которую вы ищете.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
                <Button asChild className="bg-white">
                    <Link className="text-purple-950" href="/">Вернуться на главную</Link>
                </Button>
            </div>
        </div>
    );
}
