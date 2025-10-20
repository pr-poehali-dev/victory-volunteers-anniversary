import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Icon from "@/components/ui/icon";

const Index = () => {
  const testimonials = [
    {
      name: "Анна Петрова",
      role: "Волонтёр с 2015 года",
      text: "Волонтёры Победы — это не просто движение, это семья. За 10 лет мы помогли тысячам ветеранов и сохранили память о подвиге наших дедов.",
      avatar: "👩",
    },
    {
      name: "Дмитрий Соколов",
      role: "Координатор проекта",
      text: "Горжусь тем, что являюсь частью этого великого движения. Каждая акция, каждая встреча с ветеранами — это бесценный опыт и огромная ответственность.",
      avatar: "👨",
    },
    {
      name: "Елена Михайлова",
      role: "Волонтёр с 2017 года",
      text: "10 лет — это только начало! Вместе мы делаем мир добрее, сохраняя память о героях и передавая эстафету подвига молодому поколению.",
      avatar: "👩‍🦰",
    },
  ];

  const achievements = [
    { icon: "Users", value: "250 000+", label: "Волонтёров" },
    { icon: "MapPin", value: "85", label: "Регионов России" },
    { icon: "Award", value: "1000+", label: "Мероприятий ежегодно" },
    { icon: "Heart", value: "∞", label: "Благодарностей" },
  ];

  return (
    <div className="min-h-screen">
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-background via-primary/20 to-secondary/20">
        <div className="absolute inset-0 bg-[url('https://cdn.poehali.dev/projects/1083aa4f-01d6-4114-97c7-63eebec8b977/files/94571d7a-a051-4251-8de1-9adfc40c0872.jpg')] bg-cover bg-center opacity-20"></div>
        
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/50 to-background"></div>

        <div className="relative z-10 text-center px-4 py-20 animate-fade-in">
          <Badge className="mb-6 text-lg px-6 py-2 bg-accent text-accent-foreground font-heading font-bold">
            2015 — 2025
          </Badge>
          
          <h1 className="text-6xl md:text-8xl font-heading font-extrabold mb-6 bg-gradient-to-r from-white via-accent to-white bg-clip-text text-transparent animate-shine bg-[length:200%_auto]">
            10 ЛЕТ
          </h1>
          
          <h2 className="text-3xl md:text-5xl font-heading font-bold mb-4 text-foreground">
            ВОЛОНТЁРАМ ПОБЕДЫ
          </h2>
          
          <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto mb-12 leading-relaxed">
            Десятилетие служения памяти, подвига и благодарности героям
          </p>

          <div className="flex flex-wrap gap-4 justify-center items-center">
            <div className="flex items-center gap-2 text-primary bg-primary/10 px-6 py-3 rounded-full border border-primary/30">
              <Icon name="Flag" size={24} />
              <span className="font-heading font-semibold">Патриотизм</span>
            </div>
            <div className="flex items-center gap-2 text-secondary bg-secondary/10 px-6 py-3 rounded-full border border-secondary/30">
              <Icon name="HeartHandshake" size={24} />
              <span className="font-heading font-semibold">Добро</span>
            </div>
            <div className="flex items-center gap-2 text-accent bg-accent/10 px-6 py-3 rounded-full border border-accent/30">
              <Icon name="Star" size={24} />
              <span className="font-heading font-semibold">Память</span>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 px-4 bg-gradient-to-b from-background to-muted/30">
        <div className="container mx-auto">
          <div className="text-center mb-16 animate-slide-up">
            <h2 className="text-4xl md:text-5xl font-heading font-bold mb-4">
              Наши достижения
            </h2>
            <p className="text-xl text-muted-foreground">
              За 10 лет вместе мы совершили великое дело
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {achievements.map((item, index) => (
              <Card
                key={index}
                className="text-center hover:scale-105 transition-all duration-300 hover:border-accent bg-card/50 backdrop-blur animate-slide-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="pt-8 pb-6">
                  <div className="mb-4 flex justify-center">
                    <div className="w-16 h-16 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center">
                      <Icon name={item.icon as any} size={32} className="text-white" />
                    </div>
                  </div>
                  <div className="text-4xl font-heading font-bold mb-2 bg-gradient-to-r from-primary via-accent to-secondary bg-clip-text text-transparent">
                    {item.value}
                  </div>
                  <div className="text-muted-foreground font-semibold">
                    {item.label}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-4 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://cdn.poehali.dev/projects/1083aa4f-01d6-4114-97c7-63eebec8b977/files/041db5ce-522b-4faa-9358-fd3d874d6c3e.jpg')] bg-cover bg-center opacity-10"></div>
        
        <div className="container mx-auto relative z-10">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-heading font-bold mb-4">
              Поздравления и отзывы
            </h2>
            <p className="text-xl text-muted-foreground">
              Слова благодарности от наших волонтёров
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {testimonials.map((testimonial, index) => (
              <Card
                key={index}
                className="hover:shadow-2xl transition-all duration-300 hover:scale-105 hover:border-accent bg-card/80 backdrop-blur animate-slide-up"
                style={{ animationDelay: `${index * 0.15}s` }}
              >
                <CardContent className="pt-8 pb-6">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-16 h-16 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center text-4xl">
                      {testimonial.avatar}
                    </div>
                    <div>
                      <h3 className="font-heading font-bold text-lg">
                        {testimonial.name}
                      </h3>
                      <p className="text-sm text-muted-foreground">
                        {testimonial.role}
                      </p>
                    </div>
                  </div>
                  
                  <div className="mb-4">
                    <Icon name="Quote" size={24} className="text-accent opacity-50" />
                  </div>
                  
                  <p className="text-foreground leading-relaxed italic">
                    "{testimonial.text}"
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-4 bg-gradient-to-br from-primary via-secondary to-accent relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.1),transparent)]"></div>
        
        <div className="container mx-auto text-center relative z-10">
          <div className="max-w-4xl mx-auto animate-fade-in">
            <Icon name="Medal" size={64} className="mx-auto mb-6 text-accent-foreground" />
            
            <h2 className="text-4xl md:text-6xl font-heading font-extrabold mb-6 text-white">
              С юбилеем, Волонтёры Победы!
            </h2>
            
            <p className="text-xl md:text-2xl text-white/90 mb-8 leading-relaxed">
              Спасибо за ваш труд, энергию и преданность делу сохранения памяти о Великой Победе. 
              Вы — достойное продолжение героического поколения!
            </p>

            <div className="flex flex-wrap gap-6 justify-center items-center text-white/80">
              <div className="flex items-center gap-2">
                <Icon name="Sparkles" size={20} />
                <span className="font-semibold">Гордимся вами</span>
              </div>
              <div className="flex items-center gap-2">
                <Icon name="Trophy" size={20} />
                <span className="font-semibold">Вы — лучшие</span>
              </div>
              <div className="flex items-center gap-2">
                <Icon name="Flame" size={20} />
                <span className="font-semibold">Вперёд к новым победам</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer className="py-8 px-4 bg-muted/30 text-center text-muted-foreground border-t border-border">
        <p className="font-heading">
          © 2015-2025 Волонтёры Победы. Десятилетие служения памяти.
        </p>
      </footer>
    </div>
  );
};

export default Index;
