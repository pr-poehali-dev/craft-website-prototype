import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [activeSection, setActiveSection] = useState('home');

  const scrollToSection = (sectionId: string) => {
    setActiveSection(sectionId);
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  const services = [
    {
      title: 'Крафтовые сыры',
      description: 'Авторские сыры ручной работы из натурального молока',
      price: 'от 800₽',
      icon: 'ChefHat'
    },
    {
      title: 'Домашние сладости',
      description: 'Уникальные десерты и конфеты по семейным рецептам',
      price: 'от 500₽',
      icon: 'Cake'
    },
    {
      title: 'Подарочные наборы',
      description: 'Красиво оформленные наборы для особых случаев',
      price: 'от 1500₽',
      icon: 'Gift'
    }
  ];

  const portfolio = [
    {
      title: 'Мраморный сыр с травами',
      image: 'https://cdn.poehali.dev/projects/0a65f82e-7d5c-4999-8abd-c33020a1acca/files/0c966078-f7d0-4ad0-8b66-bf65b83c5f86.jpg'
    },
    {
      title: 'Авторские десерты',
      image: 'https://cdn.poehali.dev/projects/0a65f82e-7d5c-4999-8abd-c33020a1acca/files/3cae458d-6eb5-40ec-9520-af46d6c40331.jpg'
    },
    {
      title: 'Процесс создания',
      image: 'https://cdn.poehali.dev/projects/0a65f82e-7d5c-4999-8abd-c33020a1acca/files/6caf81e1-ea55-4b02-b579-7805d5b98b83.jpg'
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-border">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <h1 className="text-2xl font-bold text-primary">Крафтовая мастерская</h1>
            <div className="flex gap-6">
              <button 
                onClick={() => scrollToSection('home')}
                className={`transition-colors hover:text-primary ${activeSection === 'home' ? 'text-primary' : 'text-foreground'}`}
              >
                Главная
              </button>
              <button 
                onClick={() => scrollToSection('about')}
                className={`transition-colors hover:text-primary ${activeSection === 'about' ? 'text-primary' : 'text-foreground'}`}
              >
                Обо мне
              </button>
              <button 
                onClick={() => scrollToSection('services')}
                className={`transition-colors hover:text-primary ${activeSection === 'services' ? 'text-primary' : 'text-foreground'}`}
              >
                Услуги
              </button>
              <button 
                onClick={() => scrollToSection('portfolio')}
                className={`transition-colors hover:text-primary ${activeSection === 'portfolio' ? 'text-primary' : 'text-foreground'}`}
              >
                Портфолио
              </button>
            </div>
          </div>
        </div>
      </nav>

      <section id="home" className="min-h-screen flex items-center justify-center bg-gradient-to-b from-secondary to-background">
        <div className="container mx-auto px-4 text-center animate-fade-in">
          <h2 className="text-5xl md:text-6xl font-bold mb-6 text-foreground">
            Создаю вкус с любовью
          </h2>
          <p className="text-xl md:text-2xl mb-8 text-muted-foreground max-w-2xl mx-auto">
            Крафтовые сыры и домашние сладости ручной работы из натуральных ингредиентов
          </p>
          <Button 
            size="lg" 
            onClick={() => scrollToSection('services')}
            className="text-lg px-8 py-6"
          >
            Посмотреть услуги
          </Button>
        </div>
      </section>

      <section id="about" className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center max-w-5xl mx-auto">
            <div className="animate-fade-in">
              <img 
                src="https://cdn.poehali.dev/projects/0a65f82e-7d5c-4999-8abd-c33020a1acca/files/6caf81e1-ea55-4b02-b579-7805d5b98b83.jpg"
                alt="Мастерская"
                className="rounded-2xl shadow-2xl w-full object-cover h-[400px]"
              />
            </div>
            <div className="animate-fade-in">
              <h2 className="text-4xl font-bold mb-6 text-foreground">Обо мне</h2>
              <p className="text-lg text-muted-foreground mb-4 leading-relaxed">
                Привет! Я создаю крафтовые сыры и домашние сладости уже более 5 лет. 
                Каждый продукт делаю вручную, с вниманием к деталям и любовью к своему делу.
              </p>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                Использую только натуральные ингредиенты от проверенных поставщиков. 
                Мои сыры созревают по традиционным технологиям, а сладости готовятся 
                по семейным рецептам, передающимся из поколения в поколение.
              </p>
              <div className="flex gap-4">
                <div className="flex items-center gap-2">
                  <Icon name="Heart" className="text-primary" size={24} />
                  <span className="text-sm">100% натурально</span>
                </div>
                <div className="flex items-center gap-2">
                  <Icon name="Award" className="text-primary" size={24} />
                  <span className="text-sm">5+ лет опыта</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="services" className="py-20 bg-secondary">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-4 text-foreground">Услуги и цены</h2>
          <p className="text-center text-muted-foreground mb-12 text-lg">
            Выберите то, что вам по душе
          </p>
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {services.map((service, index) => (
              <Card 
                key={index} 
                className="animate-scale-in hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-2"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardHeader>
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                    <Icon name={service.icon as any} className="text-primary" size={32} />
                  </div>
                  <CardTitle className="text-2xl">{service.title}</CardTitle>
                  <CardDescription className="text-base">{service.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-3xl font-bold text-primary mb-4">{service.price}</p>
                  <Button className="w-full" variant="outline">
                    Заказать
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="portfolio" className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-4 text-foreground">Портфолио работ</h2>
          <p className="text-center text-muted-foreground mb-12 text-lg">
            Посмотрите на мои творения
          </p>
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {portfolio.map((item, index) => (
              <div 
                key={index} 
                className="group relative overflow-hidden rounded-2xl shadow-lg animate-fade-in hover:shadow-2xl transition-all duration-300"
                style={{ animationDelay: `${index * 0.15}s` }}
              >
                <img 
                  src={item.image} 
                  alt={item.title}
                  className="w-full h-80 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <h3 className="text-white text-xl font-bold">{item.title}</h3>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <footer className="bg-primary text-primary-foreground py-12">
        <div className="container mx-auto px-4 text-center">
          <h3 className="text-2xl font-bold mb-4">Свяжитесь со мной</h3>
          <div className="flex justify-center gap-6 mb-6">
            <a href="tel:+79999999999" className="flex items-center gap-2 hover:opacity-80 transition-opacity">
              <Icon name="Phone" size={20} />
              <span>+7 (999) 999-99-99</span>
            </a>
            <a href="mailto:info@example.com" className="flex items-center gap-2 hover:opacity-80 transition-opacity">
              <Icon name="Mail" size={20} />
              <span>info@example.com</span>
            </a>
          </div>
          <p className="text-sm opacity-80">© 2024 Крафтовая мастерская. Создано с любовью.</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
