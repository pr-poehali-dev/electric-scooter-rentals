import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-6">
          <Link to="/" className="flex items-center gap-2 font-bold text-xl">
            <span className="text-primary">Скутер</span>Шеринг
          </Link>
          <nav className="hidden md:flex gap-6">
            <Link to="/" className="text-sm font-medium transition-colors hover:text-primary">
              Главная
            </Link>
            <Link to="/rental" className="text-sm font-medium transition-colors hover:text-primary">
              Аренда
            </Link>
            <Link to="#how-it-works" className="text-sm font-medium transition-colors hover:text-primary">
              Как это работает
            </Link>
            <Link to="#reviews" className="text-sm font-medium transition-colors hover:text-primary">
              Отзывы
            </Link>
          </nav>
        </div>
        <div className="flex items-center gap-4">
          <Button variant="ghost" className="hidden md:flex">
            Войти
          </Button>
          <Button as={Link} to="/rental">Арендовать сейчас</Button>
        </div>
      </div>
    </header>
  );
};

export default Header;
