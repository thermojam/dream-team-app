import { notFound } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { Github, Linkedin, Twitter } from 'lucide-react';
import { teamData } from '@/lib/team-data';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import Skills from '@/components/team/Skills';
import PortfolioSlider from '@/components/team/PortfolioSlider';
import FavoriteButton from '@/components/team/FavoriteButton';
import Breadcrumbs from '@/components/layout/Breadcrumbs';

interface MemberPageProps {
    params: {
        id: string;
    };
}

export async function generateStaticParams() {
    return teamData.map((member) => ({
        id: member.id,
    }));
}

const getMemberById = (id: string) => {
    return teamData.find((member) => member.id === id);
};

export default function MemberPage({ params }: MemberPageProps) {
    const member = getMemberById(params.id);

    if (!member) {
        notFound();
    }

    const breadcrumbItems = [
        { label: 'Команда', href: '/' },
        { label: member.name, href: `/team/${member.id}` },
    ];

    return (
        <div className="bg-card">
            <div className="container mx-auto px-4 py-8 md:py-16">
                <Breadcrumbs items={breadcrumbItems} />
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12 mt-8">
                    <div className="md:col-span-1">
                        <div className="sticky top-24">
                            <div className="relative">
                                <Image
                                    src={member.photoUrl}
                                    alt={`Фото ${member.name}`}
                                    width={400}
                                    height={400}
                                    className="rounded-lg shadow-lg w-full aspect-square object-cover"
                                    data-ai-hint="person portrait"
                                />
                                <div className="absolute top-4 right-4">
                                    <FavoriteButton member={member} />
                                </div>
                            </div>
                            <div className="mt-6">
                                <h1 className="text-3xl font-bold font-headline text-foreground">{member.name}</h1>
                                <p className="text-lg text-accent font-semibold mt-1">{member.role}</p>
                                {member.isLead && <Badge className="mt-2" variant="destructive">Тимлид</Badge>}
                                <div className="flex items-center space-x-4 mt-4">
                                    {member.socials.github && (
                                        <a href={member.socials.github} target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-foreground">
                                            <Github className="h-6 w-6" />
                                        </a>
                                    )}
                                    {member.socials.linkedin && (
                                        <a href={member.socials.linkedin} target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-foreground">
                                            <Linkedin className="h-6 w-6" />
                                        </a>
                                    )}
                                    {member.socials.twitter && (
                                        <a href={member.socials.twitter} target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-foreground">
                                            <Twitter className="h-6 w-6" />
                                        </a>
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="md:col-span-2">
                        <div className="space-y-8">
                            <div>
                                <h2 className="text-2xl font-semibold font-headline text-foreground">Обо мне</h2>
                                <p className="mt-2 text-muted-foreground leading-relaxed">{`Возраст: ${member.age} | ${member.bio}`}</p>
                            </div>
                            <Separator />
                            <div>
                                <h2 className="text-2xl font-semibold font-headline text-foreground">Вклад в проект</h2>
                                <p className="mt-2 text-muted-foreground leading-relaxed">{member.contribution}</p>
                            </div>
                            <Separator />
                            <div>
                                <h2 className="text-2xl font-semibold font-headline text-foreground">Ключевые навыки</h2>
                                <div className="mt-4">
                                    <Skills skills={member.skills} />
                                </div>
                            </div>
                            <div>
                                <h2 className="text-2xl font-semibold font-headline text-foreground">Пример кругового индикатора</h2>
                                <div className="mt-4 flex gap-4">
                                    <Skills skills={[{ name: 'Circular', level: 75, type: 'circle' }]} />
                                </div>
                            </div>
                            {member.portfolio && member.portfolio.length > 0 && (
                                <>
                                    <Separator />
                                    <div>
                                        <h2 className="text-2xl font-semibold font-headline text-foreground">Портфолио</h2>
                                        <div className="mt-4">
                                            <PortfolioSlider images={member.portfolio} name={member.name} />
                                        </div>
                                    </div>
                                </>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
