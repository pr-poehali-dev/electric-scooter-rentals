import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

interface TestimonialCardProps {
  name: string;
  avatar?: string;
  text: string;
  date: string;
}

const TestimonialCard = ({ name, avatar, text, date }: TestimonialCardProps) => {
  const initials = name
    .split(" ")
    .map((part) => part[0])
    .join("")
    .toUpperCase();

  return (
    <Card className="h-full">
      <CardContent className="pt-6">
        <div className="flex items-start gap-4 mb-4">
          <Avatar>
            <AvatarImage src={avatar} alt={name} />
            <AvatarFallback>{initials}</AvatarFallback>
          </Avatar>
          <div>
            <div className="font-medium">{name}</div>
            <div className="text-sm text-muted-foreground">{date}</div>
          </div>
        </div>
        <p className="text-muted-foreground">{text}</p>
      </CardContent>
    </Card>
  );
};

export default TestimonialCard;
