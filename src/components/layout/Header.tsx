import Link from 'next/link';
import { Users } from 'lucide-react';

const Header = () => {
  return (
    <header className="bg-card/80 backdrop-blur-sm border-b sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          <Link href="/" className="flex items-center gap-2 font-bold text-lg text-primary-foreground/90 font-headline">
            <Users className="h-6 w-6 text-accent" />
            <span className="text-gray-500 text-sm/6">Dream Team</span>
          </Link>
          <nav className="flex items-center gap-6 text-sm font-medium">
            <Link href="/" className="transition-colors text-muted-foreground hover:text-foreground">
              Главная
            </Link>
            <Link href="/favorites" className="transition-colors text-muted-foreground hover:text-foreground">
              Избранное
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
