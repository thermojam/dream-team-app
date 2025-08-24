'use client';

import {useFavorites} from '@/hooks/use-favorites';
import MemberCard from '@/components/team/MemberCard';
import {HeartCrack} from 'lucide-react';
import {teamData} from '@/lib/team-data';
import type {TeamMember} from '@/types';
import {useEffect, useState} from 'react';

export default function FavoritesPage() {
    const {favorites: favoriteIds, isLoaded} = useFavorites();
    const [favoriteMembers, setFavoriteMembers] = useState<TeamMember[]>([]);

    useEffect(() => {
        if (isLoaded) {
            const members = teamData.filter(member => favoriteIds.includes(member.id));
            setFavoriteMembers(members);
        }
    }, [favoriteIds, isLoaded]);

    if (!isLoaded) {
        return (
            <div className="flex min-h-[calc(100vh-4rem)] items-center justify-center">
                <div className="h-12 w-12 animate-spin rounded-full border-4 border-primary border-t-transparent"/>
            </div>
        );
    }

    return (
        <div className="container mx-auto px-4 py-8">
            <header className="text-center my-12">
                <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl font-headline">
                    Избранные Участники
                </h1>
                <p className="mt-4 text-lg text-gray-100 text-muted-foreground max-w-2xl mx-auto">
                    Ваш личный список самых выдающихся членов команды.
                </p>
            </header>

            {favoriteMembers.length > 0 ? (
                <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                    {favoriteMembers.map((member) => (
                        <MemberCard key={member.id} member={member}/>
                    ))}
                </div>
            ) : (
                <div className="text-center py-16">
                    <HeartCrack className="mx-auto h-60 w-60 text-rose-400"/>
                    <h2 className="mt-4 text-2xl font-semibold text-muted-foreground text-white">Список избранного пуст</h2>
                    <p className="mt-2 text-muted-foreground text-white">
                        Вы еще не добавили ни одного участника. Вернитесь на главную, чтобы выбрать.
                    </p>
                </div>
            )}
        </div>
    );
}
