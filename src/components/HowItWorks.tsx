import { MapPin, Smartphone, Clock } from "lucide-react";

const steps = [
  {
    icon: <Smartphone className="h-10 w-10 text-primary" />,
    title: "Скачайте приложение",
    description: "Установите наше приложение из App Store или Google Play для доступа к сети самокатов."
  },
  {
    icon: <MapPin className="h-10 w-10 text-primary" />,
    title: "Найдите самокат",
    description: "На карте приложения отображаются все доступные самокаты поблизости."
  },
  {
    icon: <Clock className="h-10 w-10 text-primary" />,
    title: "Наслаждайтесь поездкой",
    description: "Разблокируйте самокат через приложение и отправляйтесь в путь!"
  }
];

const HowItWorks = () => {
  return (
    <section id="how-it-works" className="py-16 bg-secondary/30">
      <div className="container">
        <h2 className="text-3xl font-bold text-center mb-12">Как это работает</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="flex flex-col items-center text-center animate-fade-in" style={{ animationDelay: `${index * 150}ms` }}>
              <div className="mb-4 p-4 rounded-full bg-secondary">{step.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
              <p className="text-muted-foreground">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
