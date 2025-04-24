import { useState } from "react";
import { Button } from "@/components/ui/button";
import Header from "@/components/Header";
import ScooterCard from "@/components/ScooterCard";
import { 
  Card,
  CardContent,
  CardHeader,
  CardTitle
} from "@/components/ui/card";
import { 
  Tabs, 
  TabsContent, 
  TabsList, 
  TabsTrigger 
} from "@/components/ui/tabs";
import { 
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue
} from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Calendar } from "@/components/ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { format } from "date-fns";
import { ru } from "date-fns/locale";
import { CalendarIcon, ChevronRight } from "lucide-react";

const Rental = () => {
  const [date, setDate] = useState<Date | undefined>(new Date());
  const [duration, setDuration] = useState<string>("2");
  
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

  const locations = [
    "Парк Горького",
    "Площадь Ленина",
    "ТЦ Европейский",
    "Набережная реки"
  ];

  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-secondary/50 to-background py-12">
        <div className="container">
          <h1 className="text-4xl font-bold mb-4">Аренда электросамокатов</h1>
          <p className="text-xl text-muted-foreground max-w-[600px] mb-6">
            Выберите подходящий самокат, локацию и время — и отправляйтесь исследовать город!
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-12">
        <div className="container">
          <Tabs defaultValue="scooters" className="w-full">
            <TabsList className="grid w-full grid-cols-2 mb-8">
              <TabsTrigger value="scooters">Выбор самоката</TabsTrigger>
              <TabsTrigger value="reservation">Детали аренды</TabsTrigger>
            </TabsList>
            
            <TabsContent value="scooters" className="space-y-8">
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
              
              <div className="flex justify-end">
                <Button>
                  Продолжить
                  <ChevronRight className="ml-1 h-4 w-4" />
                </Button>
              </div>
            </TabsContent>
            
            <TabsContent value="reservation">
              <div className="grid md:grid-cols-2 gap-8">
                <Card>
                  <CardHeader>
                    <CardTitle>Детали аренды</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="location">Локация получения</Label>
                      <Select>
                        <SelectTrigger id="location">
                          <SelectValue placeholder="Выберите точку аренды" />
                        </SelectTrigger>
                        <SelectContent>
                          {locations.map((location, index) => (
                            <SelectItem key={index} value={location.toLowerCase().replace(/\s+/g, '-')}>
                              {location}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="date">Дата аренды</Label>
                      <Popover>
                        <PopoverTrigger asChild>
                          <Button
                            variant="outline"
                            className="w-full justify-start text-left font-normal"
                            id="date"
                          >
                            <CalendarIcon className="mr-2 h-4 w-4" />
                            {date ? format(date, 'd MMMM yyyy', { locale: ru }) : <span>Выберите дату</span>}
                          </Button>
                        </PopoverTrigger>
                        <PopoverContent className="w-auto p-0">
                          <Calendar
                            mode="single"
                            selected={date}
                            onSelect={setDate}
                            initialFocus
                          />
                        </PopoverContent>
                      </Popover>
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="duration">Длительность (часы)</Label>
                      <Select value={duration} onValueChange={setDuration}>
                        <SelectTrigger id="duration">
                          <SelectValue placeholder="Выберите длительность" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="1">1 час</SelectItem>
                          <SelectItem value="2">2 часа</SelectItem>
                          <SelectItem value="3">3 часа</SelectItem>
                          <SelectItem value="5">5 часов</SelectItem>
                          <SelectItem value="12">12 часов</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="name">Ваше имя</Label>
                      <Input id="name" placeholder="Иван Петров" />
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="phone">Номер телефона</Label>
                      <Input id="phone" placeholder="+7 (___) ___-__-__" />
                    </div>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardHeader>
                    <CardTitle>Ваш заказ</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="space-y-2">
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Самокат:</span>
                        <span className="font-medium">Городской Эксплорер</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Длительность:</span>
                        <span className="font-medium">{duration} ч.</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Дата:</span>
                        <span className="font-medium">
                          {date ? format(date, 'd MMMM yyyy', { locale: ru }) : 'Не выбрана'}
                        </span>
                      </div>
                      
                      <div className="border-t pt-4 mt-4">
                        <div className="flex justify-between font-semibold">
                          <span>Итого:</span>
                          <span className="text-primary">{300 * parseInt(duration)} ₽</span>
                        </div>
                      </div>
                    </div>
                    
                    <Button className="w-full">Забронировать самокат</Button>
                    
                    <p className="text-sm text-muted-foreground">
                      Нажимая кнопку «Забронировать самокат», вы соглашаетесь с правилами аренды и условиями использования сервиса.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>
      
      {/* FAQ Section */}
      <section className="py-12 bg-secondary/30">
        <div className="container">
          <h2 className="text-3xl font-bold text-center mb-8">Часто задаваемые вопросы</h2>
          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Нужны ли права для аренды электросамоката?</CardTitle>
              </CardHeader>
              <CardContent>
                <p>Для аренды наших электросамокатов водительские права не требуются. Однако рекомендуем ознакомиться с правилами дорожного движения для электросамокатов в вашем городе.</p>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Что делать, если самокат сломался?</CardTitle>
              </CardHeader>
              <CardContent>
                <p>В случае поломки самоката во время аренды, пожалуйста, свяжитесь с нашей службой поддержки. Мы организуем замену самоката или вернем деньги за неиспользованное время.</p>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Можно ли продлить аренду?</CardTitle>
              </CardHeader>
              <CardContent>
                <p>Да, вы можете продлить аренду через приложение или на нашем сайте, если самокат не забронирован другим пользователем на следующее время.</p>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Есть ли залог при аренде?</CardTitle>
              </CardHeader>
              <CardContent>
                <p>При аренде через приложение залог не требуется, так как мы используем данные банковской карты для гарантии. При аренде на месте может потребоваться документ, удостоверяющий личность.</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 border-t mt-auto">
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

export default Rental;
