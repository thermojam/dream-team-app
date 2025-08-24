import type {TeamMember} from '@/types';

export const teamData: TeamMember[] = [
    {
        id: '1',
        name: 'Никита Mенский',
        age: 33,
        role: 'Frontend Разработчик',
        isLead: true,
        bio: 'Увлеченный frontend-разработчик с опытом создания интуитивно понятных и динамичных пользовательских интерфейсов. Люблю превращать сложные проблемы в элегантные решения.',
        contribution: 'Разработал архитектуру клиентской части, создал основные компоненты пользовательского интерфейса и обеспечил отзывчивость и производительность приложения.',
        photoUrl: '/men.jpg',
        socials: {
            github: 'https://github.com',
            linkedin: 'https://linkedin.com',
        },
        skills: [
            {name: 'React', level: 100},
            {name: 'TypeScript', level: 90},
            {name: 'Next.js', level: 85},
            {name: 'CSS/Tailwind', level: 98},
        ],
        portfolio: [
            '/port-5.jpg',
            '/port-6.jpg',

        ],
    },
    {
        id: '2',
        name: 'Владислав Тим',
        age: 32,
        role: 'Backend Разработчик',
        bio: 'Опытный backend-инженер, специализирующийся на создании надежных и масштабируемых систем. В восторге от чистой архитектуры и эффективных баз данных.',
        contribution: 'Проектировал и реализовывал API, управлял базами данных и обеспечивал безопасность и стабильность серверной части.',
        photoUrl: '/tim.jpg',
        socials: {
            github: 'https://github.com',
            twitter: 'https://twitter.com',
        },
        skills: [
            {name: 'Node.js', level: 100},
            {name: 'PostgreSQL', level: 88},
            {name: 'Docker', level: 80},
            {name: 'GraphQL', level: 75},
        ],
        portfolio: [
            '/port-7.jpg',
            '/port-8.jpg',
        ],
    },
    {
        id: '3',
        name: 'Алиса Веббер',
        age: 25,
        role: 'UI/UX Дизайнер',
        bio: 'Творческий дизайнер с острым взглядом на детали и страстью к созданию восхитительных пользовательских впечатлений. Превращаю идеи в визуально привлекательные и удобные дизайны.',
        contribution: 'Создала дизайн-систему, разработала макеты и прототипы, провела юзабилити-тестирование для улучшения общего пользовательского опыта.',
        photoUrl: '/webber.jpg',
        socials: {
            linkedin: 'https://linkedin.com',
        },
        skills: [
            {name: 'Figma', level: 97},
            {name: 'User Research', level: 90},
            {name: 'Prototyping', level: 94},
            {name: 'Design Systems', level: 89},
        ],
        portfolio: [
            '/port-3.jpg',
            '/port-4.jpg',
            '/port-2.jpg',
        ],
    },
    {
        id: '4',
        name: 'Максим Донской',
        age: 29,
        role: 'Full-stack Разработчик',
        bio: 'Универсальный разработчик, который чувствует себя как дома как на фронтенде, так и на бэкенде. Люблю решать сложные задачи и создавать полноценные продукты.',
        contribution: 'Работал над интеграцией фронтенда и бэкенда, настраивал процессы развертывания и помогал в разработке как клиентской, так и серверной частей.',
        photoUrl: '/don.jpg',
        socials: {
            github: 'https://github.com',
        },
        skills: [
            {name: 'React', level: 88},
            {name: 'Node.js', level: 85},
            {name: 'CI/CD', level: 78},
            {name: 'Firebase', level: 82},
        ],
        portfolio: [
            '/port-1.jpg',
        ],
    },
];
