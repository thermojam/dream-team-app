# Проект "Team Showcase"

"Team Showcase" — это веб-приложение для демонстрации команды проекта, созданное с использованием Next.js, TypeScript и shadcn/ui. Оно позволяет просматривать информацию об участниках, их навыки, вклад в проект, а также добавлять их в список избранного.

## Оценка времени на реализацию

Один разработчик среднего уровня может реализовать этот проект примерно за **7-11 рабочих дней**.

*   **Этап 1: Настройка и архитектура (1-2 дня)**
    *   Инициализация проекта, установка зависимостей.
    *   Настройка TypeScript, Tailwind CSS, `shadcn/ui`.
    *   Создание структуры папок и базового макета (`Header`, `Footer`).
*   **Этап 2: Главная страница (2-3 дня)**
    *   Создание моковых данных.
    *   Разработка компонента `MemberCard`.
    *   Верстка главной страницы с сеткой карточек.
*   **Этап 3: Страница участника (2-3 дня)**
    *   Настройка динамической маршрутизации.
    *   Разработка компонентов `Skills`, `PortfolioSlider`, `Breadcrumbs`.
    *   Верстка детальной страницы.
*   **Этап 4: Функционал "Избранное" (1-2 дня)**
    *   Создание хука `useFavorites` с использованием `localStorage`.
    *   Интеграция кнопки `FavoriteButton`.
    *   Создание страницы "Избранное".
*   **Этап 5: Тестирование и доработка (1 день)**
    *   Проверка адаптивности, исправление ошибок.
    *   Финальная полировка интерфейса.

---

## Технологический стек

Для сборки и запуска проекта используются следующие технологии и библиотеки:

*   **Фреймворк:** [Next.js](https://nextjs.org/) (с App Router)
*   **Язык:** [TypeScript](https://www.typescriptlang.org/)
*   **Стилизация:** [Tailwind CSS](https://tailwindcss.com/)
*   **UI-компоненты:** [shadcn/ui](https://ui.shadcn.com/)
*   **Иконки:** [Lucide React](https://lucide.dev/guide/packages/lucide-react)
*   **Слайдер:** [Embla Carousel React](https://www.embla-carousel.com/get-started/react/)
*   **Утилиты для классов:** `clsx` и `tailwind-merge`
*   **Уведомления (Toasts):** `@radix-ui/react-toast`

### Все зависимости проекта:

```json
{
  "dependencies": {
    "@radix-ui/react-accordion": "...",
    "@radix-ui/react-dialog": "...",
    "@radix-ui/react-progress": "...",
    "@radix-ui/react-separator": "...",
    "@radix-ui/react-slot": "...",
    "@radix-ui/react-toast": "...",
    "class-variance-authority": "...",
    "clsx": "...",
    "embla-carousel-react": "...",
    "lucide-react": "...",
    "next": "...",
    "react": "...",
    "react-dom": "...",
    "tailwind-merge": "...",
    "tailwindcss-animate": "..."
  },
  "devDependencies": {
    "@types/node": "...",
    "@types/react": "...",
    "@types/react-dom": "...",
    "postcss": "...",
    "tailwindcss": "...",
    "typescript": "..."
  }
}
```
*Версии указаны как "..." для краткости. Актуальные версии находятся в файле `package.json`.*

---

## Воспроизведение проекта с нуля

### Шаг 1: Инициализация проекта Next.js

```bash
npx create-next-app@latest team-showcase --ts --tailwind --eslint
```
Перейдите в созданную директорию:
```bash
cd team-showcase
```

### Шаг 2: Настройка `shadcn/ui`

1.  **Инициализация `shadcn/ui`:**
    ```bash
    npx shadcn-ui@latest init
    ```
    В процессе инициализации выберите следующие опции:
    *   `Default`
    *   `New York`
    *   `Yes` (для CSS-переменных)
    *   Оставьте пути по умолчанию.

2.  **Установка необходимых компонентов:**
    ```bash
    npx shadcn-ui@latest add card badge button progress carousel separator toast accordion
    ```
    Это автоматически добавит нужные зависимости и создаст файлы компонентов в `src/components/ui`.

### Шаг 3: Установка дополнительных зависимостей

```bash
npm install lucide-react embla-carousel-react
```

### Шаг 4: Создание структуры проекта

Создайте следующие папки и файлы внутри директории `src`:
```
/src
├── /app
│   ├── /                 # Главная
│   ├── /favorites        # Избранное
│   └── /team/[id]        # Страница участника
│   ├── layout.tsx
│   └── globals.css
│
├── /components
│   ├── /layout           # Header, Footer, Breadcrumbs
│   ├── /team             # MemberCard, Skills, PortfolioSlider, FavoriteButton
│   └── /ui               # Компоненты shadcn/ui
│
├── /hooks
│   └── use-favorites.ts
│   └── use-toast.ts
│
├── /lib
│   ├── team-data.ts
│   └── utils.ts
│
└── /types
    └── index.ts
```

### Шаг 5: Наполнение файлов кодом

Скопируйте содержимое соответствующих файлов из этого проекта в созданную вами структуру.

1.  **Настройте `globals.css`:** Задайте основные цвета и стили.
2.  **Создайте `layout.tsx`:** Добавьте `Header`, `Footer` и `Toaster`.
3.  **Определите типы в `src/types/index.ts`**.
4.  **Создайте моковые данные в `src/lib/team-data.ts`**.
5.  **Реализуйте компоненты** в папках `/components/layout` и `/components/team`.
6.  **Создайте хуки** `useFavorites` и `useToast`.
7.  **Сверстайте страницы** в папке `/app`.

### Шаг 6: Запуск проекта

```bash
npm run dev
```
Откройте [http://localhost:3000](http://localhost:3000) в вашем браузере, чтобы увидеть результат.
