'use client';

import { useState, useEffect, useCallback } from 'react';
import type { TeamMember } from '@/types';
import { useToast } from './use-toast';

const FAVORITES_KEY = 'favoriteTeamMembers';

export const useFavorites = () => {
  const [favorites, setFavorites] = useState<string[]>([]);
  const [isLoaded, setIsLoaded] = useState(false);
  const { toast } = useToast();

  useEffect(() => {
    try {
      const item = window.localStorage.getItem(FAVORITES_KEY);
      if (item) {
        setFavorites(JSON.parse(item));
      }
    } catch (error) {
      console.error('Failed to load favorites from localStorage', error);
    } finally {
      setIsLoaded(true);
    }
  }, []);

  const updateLocalStorage = (updatedFavorites: string[]) => {
    try {
      window.localStorage.setItem(FAVORITES_KEY, JSON.stringify(updatedFavorites));
    } catch (error) {
      console.error('Failed to save favorites to localStorage', error);
    }
  };

  const addFavorite = useCallback((member: TeamMember) => {
    const newFavorites = [...favorites, member.id];
    setFavorites(newFavorites);
    updateLocalStorage(newFavorites);
    toast({
      title: "Добавлено в избранное",
      description: `${member.name} теперь в вашем списке избранных.`,
    });
  }, [favorites, toast]);

  const removeFavorite = useCallback((member: TeamMember) => {
    const newFavorites = favorites.filter((id) => id !== member.id);
    setFavorites(newFavorites);
    updateLocalStorage(newFavorites);
    toast({
      title: "Удалено из избранного",
      description: `${member.name} больше не в вашем списке избранных.`,
      variant: "destructive",
    });
  }, [favorites, toast]);

  const isFavorite = useCallback((memberId: string) => {
    return favorites.includes(memberId);
  }, [favorites]);

  return { favorites, addFavorite, removeFavorite, isFavorite, isLoaded };
};
