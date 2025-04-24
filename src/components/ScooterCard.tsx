import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

interface ScooterCardProps {
  name: string;
  image: string;
  price: number;
  range: number;
  speed: number;
  isPopular?: boolean;
}

const ScooterCard = ({ name, image, price, range, speed, isPopular = false }: ScooterCardProps) => {
  return (
    <Card className="overflow-hidden transition-all duration-300 hover:shadow-lg">
      <div className="relative">
        {isPopular && (
          <Badge className="absolute right-2 top-2 z-10" variant="secondary">
            Популярный
          </Badge>
        )}
        <img
          src={image}
          alt={name}
          className="h-48 w-full object-cover"
        />
      </div>
      <CardHeader>
        <CardTitle>{name}</CardTitle>
        <CardDescription>{price} ₽/час</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-2 gap-2 text-sm">
          <div className="flex flex-col">
            <span className="text-muted-foreground">Запас хода</span>
            <span className="font-medium">{range} км</span>
          </div>
          <div className="flex flex-col">
            <span className="text-muted-foreground">Скорость</span>
            <span className="font-medium">{speed} км/ч</span>
          </div>
        </div>
      </CardContent>
      <CardFooter>
        <Button className="w-full">Забронировать</Button>
      </CardFooter>
    </Card>
  );
};

export default ScooterCard;
