import { Button } from "@/components/ui/button";
import Header from "@/components/Header";
import ScooterCard from "@/components/ScooterCard";
import HowItWorks from "@/components/HowItWorks";
import TestimonialCard from "@/components/TestimonialCard";
import { ArrowRight, Zap, Shield, HeartHandshake } from "lucide-react";

const Index = () => {
  const scooters = [
    {
      name: "Городской Эксплорер",
      image: "/placeholder.svg",
      price: 300,
      range: 25,
      speed: 25,
      isPopular: true
    },
    {
      name: "Спортивный Раннер",
      image: "/placeholder.svg",
      price: 400,
      range: 35,
      speed: 35
    },
    {
      name: "Компакт Мини",
      image: "/placeholder.svg",
      price: 250,
      range: 20,
      speed: 20
    }
  ];

  const testimonials = [
    {
      name: "Анна Петрова",
      text: "Отличный сервис! Арендовала самокат на выходных, чтобы покататься по парку. Очень удобное приложение и быстрая разблокировка.",
      date: "14 мая 2023"
    },
    {
      name: "Иван Смирнов",
      text: "Самокаты всегда в хорошем состоянии, заряда хватает на весь день. Рекомендую всем, кто хочет быстро передвигаться по городу.",
      date: "28 июня 2023"
    },
    {
      name: "Мария Иванова",
      text: "Пользуюсь уже полгода. Экономлю время на дорогу до работы и получаю удовольствие от поездки. Очень довольна сервисом!",
      date: "3 июля 2023"
    }
  ];

  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      
      {/* Hero Section */}
      <section className="relative py-20 md:py-32 bg-gradient-to-b from-secondary/50 to-background">
        <div className="container grid gap-8 md:grid-cols-2 items-center">
          <div className="space-y-6">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight">
              Исследуйте город на <span className="text-primary">электросамокате</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-[600px]">
              Аренда современных электросамокатов во всех районах города. Быстро, экологично и удобно.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="gap-2">
                Арендовать сейчас
                <ArrowRight className="h-4 w-4" />
              </Button>
              <Button variant="outline" size="lg">
                Узнать больше
              </Button>
            </div>
          </div>
          <div className="relative h-[300px] md:h-[400px] bg-muted rounded-lg overflow-hidden">
            <img 
              src="/placeholder.svg" 
              alt="Электросамокат" 
              className="object-cover w-full h-full"
            />
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-16 bg-card">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="flex flex-col items-center text-center animate-fade-in">
              <div className="mb-4 p-4 rounded-full bg-secondary">
                <Zap className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Скорость и маневренность</h3>
              <p className="text-muted-foreground">Быстрое перемещение по городу, минуя пробки и заторы.</p>
            </div>
            <div className="flex flex-col items-center text-center animate-fade-in" style={{ animationDelay: '150ms' }}>
              <div className="mb-4 p-4 rounded-full bg-secondary">
                <Shield className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Безопасность и надежность</h3>
              <p className="text-muted-foreground">Регулярное техобслуживание и страховка для каждого самоката.</p>
            </div>
            <div className="flex flex-col items-center text-center animate-fade-in" style={{ animationDelay: '300ms' }}>
              <div className="mb-4 p-4 rounded-full bg-secondary">
                <HeartHandshake className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Забота об экологии</h3>
              <p className="text-muted-foreground">Электросамокаты - экологичная альтернатива общественному транспорту.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Popular Scooters */}
      <section id="scooters" className="py-16">
        <div className="container">
          <h2 className="text-3xl font-bold text-center mb-4">Популярные модели</h2>
          <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
            Выберите самокат, который подходит именно вам. У нас есть модели для любых целей и маршрутов.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {scooters.map((scooter, index) => (
              <ScooterCard
                key={index}
                name={scooter.name}
                image={scooter.image}
                price={scooter.price}
                range={scooter.range}
                speed={scooter.speed}
                isPopular={scooter.isPopular}
              />
            ))}
          </div>
          <div className="mt-12 text-center">
            <Button variant="outline">Посмотреть все самокаты</Button>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <HowItWorks />

      {/* Testimonials */}
      <section id="reviews" className="py-16">
        <div className="container">
          <h2 className="text-3xl font-bold text-center mb-12">Что говорят наши клиенты</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <TestimonialCard
                key={index}
                name={testimonial.name}
                text={testimonial.text}
                date={testimonial.date}
              />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary text-primary-foreground">
        <div className="container text-center">
          <h2 className="text-3xl font-bold mb-4">Готовы к поездке?</h2>
          <p className="mb-8 max-w-lg mx-auto">
            Скачайте наше приложение и получите первые 30 минут бесплатно!
          </p>
          <Button variant="secondary" size="lg">
            Скачать приложение
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 border-t">
        <div className="container">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="font-bold text-xl mb-4 md:mb-0">
              <span className="text-primary">Скутер</span>Шеринг
            </div>
            <div className="text-sm text-muted-foreground">
              © 2023 СкутерШеринг. Все права защищены.
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
