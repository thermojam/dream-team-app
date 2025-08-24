import type { TeamMember } from '@/types';

export const teamData: TeamMember[] = [
  {
    id: '1',
    name: 'Елена Васильева',
    age: 28,
    role: 'Frontend Разработчик',
    isLead: true,
    bio: 'Увлеченный frontend-разработчик с опытом создания интуитивно понятных и динамичных пользовательских интерфейсов. Люблю превращать сложные проблемы в элегантные решения.',
    contribution: 'Разработала архитектуру клиентской части, создала основные компоненты пользовательского интерфейса и обеспечила отзывчивость и производительность приложения.',
    photoUrl: 'https://placehold.co/400x400/E6D1F2/4F3A59.png',
    socials: {
      github: 'https://github.com',
      linkedin: 'https://linkedin.com',
    },
    skills: [
      { name: 'React', level: 95 },
      { name: 'TypeScript', level: 90 },
      { name: 'Next.js', level: 85 },
      { name: 'CSS/Tailwind', level: 98 },
    ],
    portfolio: [
      'https://placehold.co/600x400.png',
      'https://placehold.co/600x400.png',
      'https://placehold.co/600x400.png',
    ],
  },
  {
    id: '2',
    name: 'Иван Петров',
    age: 32,
    role: 'Backend Разработчик',
    bio: 'Опытный backend-инженер, специализирующийся на создании надежных и масштабируемых систем. В восторге от чистой архитектуры и эффективных баз данных.',
    contribution: 'Проектировал и реализовывал API, управлял базами данных и обеспечивал безопасность и стабильность серверной части.',
    photoUrl: 'https://placehold.co/400x400/D1F2E6/3A594F.png',
    socials: {
      github: 'https://github.com',
      twitter: 'https://twitter.com',
    },
    skills: [
      { name: 'Node.js', level: 92 },
      { name: 'PostgreSQL', level: 88 },
      { name: 'Docker', level: 80 },
      { name: 'GraphQL', level: 75 },
    ],
    portfolio: [
      'https://placehold.co/600x400.png',
      'https://placehold.co/600x400.png',
    ],
  },
  {
    id: '3',
    name: 'Анна Сидорова',
    age: 25,
    role: 'UI/UX Дизайнер',
    bio: 'Творческий дизайнер с острым взглядом на детали и страстью к созданию восхитительных пользовательских впечатлений. Превращаю идеи в визуально привлекательные и удобные дизайны.',
    contribution: 'Создала дизайн-систему, разработала макеты и прототипы, провела юзабилити-тестирование для улучшения общего пользовательского опыта.',
    photoUrl: 'https://placehold.co/400x400/F2D1D1/593A3A.png',
    socials: {
      linkedin: 'https://linkedin.com',
    },
    skills: [
      { name: 'Figma', level: 97 },
      { name: 'User Research', level: 90 },
      { name: 'Prototyping', level: 94 },
      { name: 'Design Systems', level: 89 },
    ],
    portfolio: [
      'https://placehold.co/600x400.png',
      'https://placehold.co/600x400.png',
      'https://placehold.co/600x400.png',
      'https://placehold.co/600x400.png',
    ],
  },
  {
    id: '4',
    name: 'Дмитрий Козлов',
    age: 29,
    role: 'Full-stack Разработчик',
    bio: 'Универсальный разработчик, который чувствует себя как дома как на фронтенде, так и на бэкенде. Люблю решать сложные задачи и создавать полноценные продукты.',
    contribution: 'Работал над интеграцией фронтенда и бэкенда, настраивал процессы развертывания и помогал в разработке как клиентской, так и серверной частей.',
    photoUrl: 'https://placehold.co/400x400/D1E6F2/3A4F59.png',
    socials: {
      github: 'https://github.com',
    },
    skills: [
      { name: 'React', level: 88 },
      { name: 'Node.js', level: 85 },
      { name: 'CI/CD', level: 78 },
      { name: 'Firebase', level: 82 },
    ],
    portfolio: [
      'https://placehold.co/600x400.png',
    ],
  },
];
