'use client';

import {Heart} from 'lucide-react';
import {Button} from '@/components/ui/button';
import {useFavorites} from '@/hooks/use-favorites';
import type {TeamMember} from '@/types';

interface FavoriteButtonProps {
    member: TeamMember;
}

const FavoriteButton = ({member}: FavoriteButtonProps) => {
    const {addFavorite, removeFavorite, isFavorite, isLoaded} = useFavorites();
    const isFav = isFavorite(member.id);

    const handleToggleFavorite = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        e.stopPropagation();
        if (isFav) {
            removeFavorite(member);
        } else {
            addFavorite(member);
        }
    };

    if (!isLoaded) {
        return <Button size="icon" variant="ghost" className="bg-card/50 hover:bg-card/80" disabled><Heart
            className="h-5 w-5"/></Button>;
    }

    return (
        <Button
            size="icon"
            variant="ghost"
            onClick={handleToggleFavorite}
            className="bg-card/50 hover:bg-card/80 text-destructive"
            aria-label={isFav ? 'Удалить из избранного' : 'Добавить в избранное'}
        >
            <Heart className={`h-5 w-5 transition-all  ${isFav ? 'fill-current' : ''}`}/>
        </Button>
    );
};

export default FavoriteButton;
