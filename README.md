# Проект "Dream Team"

"Dream Team" — это веб-приложение для демонстрации команды проекта, созданное с использованием Next.js, TypeScript и shadcn/ui. Оно позволяет просматривать информацию об участниках, их навыки, вклад в проект, а также добавлять их в список избранного.

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
