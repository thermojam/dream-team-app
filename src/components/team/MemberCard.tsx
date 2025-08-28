import Link from 'next/link';
import Image from 'next/image';
import {Card, CardContent, CardFooter, CardHeader, CardTitle} from '@/components/ui/card';
import {Badge, type BadgeProps} from '@/components/ui/badge';
import type {TeamMember} from '@/types';
import FavoriteButton from './FavoriteButton';
import {Button} from '@/components/ui/button';
import {ArrowRight} from 'lucide-react';

interface MemberCardProps {
    member: TeamMember;
}

const MemberCard = ({member}: MemberCardProps) => {

    const getRoleBadgeVariant = (role: string): BadgeProps['variant'] => {
        if (role.toLowerCase().includes('frontend')) return 'success';
        if (role.toLowerCase().includes('backend')) return 'info';
        if (role.toLowerCase().includes('full-stack')) return 'warning';
        if (role.toLowerCase().includes('ui/ux')) return 'pink';
        return 'secondary';
    }

    return (
        <Card
            className="flex flex-col overflow-hidden transition-transform transform hover:-translate-y-1 hover:shadow-xl">
            <CardHeader className="relative p-0">
                <Link href={`/team/${member.id}`} className="block">
                    <Image
                        src={member.photoUrl}
                        alt={`Фото ${member.name}`}
                        width={400}
                        height={400}
                        className="aspect-square w-full object-cover"
                        data-ai-hint="person portrait"
                    />
                </Link>
                <div className="absolute top-2 right-2">
                    <FavoriteButton member={member}/>
                </div>
            </CardHeader>
            <CardContent className="flex-grow p-4 flex justify-between items-center">
                <div>
                    <Link href={`/team/${member.id}`} className="block">
                        <CardTitle className="text-xl font-headline hover:underline">{member.name}</CardTitle>
                    </Link>
                    <Badge variant={getRoleBadgeVariant(member.role)} className="mt-2">{member.role}</Badge>
                </div>
                <Button asChild variant="outline" size="sm" className="bg-violet-500 text-white">
                    <Link href={`/team/${member.id}`}>
                        Open
                        <ArrowRight className="ml-2 h-4 w-4"/>
                    </Link>
                </Button>
            </CardContent>
            <CardFooter className="p-4 pt-0 absolute mt-6">
                {member.isLead && <Badge variant="destructive">Тимлид</Badge>}
            </CardFooter>
        </Card>
    );
};

export default MemberCard;
