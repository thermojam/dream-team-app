import {Accordion, AccordionContent, AccordionItem, AccordionTrigger} from "@/components/ui/accordion";
import {teamData} from "@/lib/team-data";
import MemberCard from "@/components/team/MemberCard";

export default function Home() {
    return (
        <div className="container mx-auto px-4 py-14">
            <header className="text-center mb-12">
                <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl md:text-6xl font-headline">
                    Наша Команда
                </h1>
                <p className="mt-2 text-lg text-gray-100 text-muted-foreground max-w-2xl mx-auto">
                    Познакомьтесь с талантливыми людьми, которые сделали этот проект возможным.
                </p>
            </header>

            <div className="max-w-4xl mx-auto mb-12">
                <Accordion type="single" collapsible className="w-full bg-card rounded-lg p-2 shadow-sm">
                    <AccordionItem value="item-1">
                        <AccordionTrigger className="text-lg font-semibold px-4">Информация о команде</AccordionTrigger>
                        <AccordionContent className="px-4 pt-2 text-muted-foreground">
                            Мы — сплоченная команда энтузиастов, увлеченных созданием современных и удобных
                            веб-приложений. Наш коллективный опыт охватывает весь спектр веб-разработки, от фронтенда до
                            бэкенда. Мы верим в сотрудничество, постоянное обучение и стремимся к совершенству в каждом
                            проекте, за который беремся.
                        </AccordionContent>
                    </AccordionItem>
                </Accordion>
            </div>

            <section>
                <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                    {teamData.map((member) => (
                        <MemberCard key={member.id} member={member}/>
                    ))}
                </div>
            </section>
        </div>
    );
}
