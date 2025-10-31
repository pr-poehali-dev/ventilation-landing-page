import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';
import { useToast } from '@/hooks/use-toast';

const Index = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Заявка отправлена!",
      description: "Мы свяжемся с вами в ближайшее время.",
    });
    setFormData({ name: '', phone: '', message: '' });
  };

  const services = [
    {
      icon: 'Wind',
      title: 'Приточная вентиляция',
      description: 'Обеспечивает постоянный приток свежего воздуха в помещение с возможностью фильтрации и подогрева',
      features: ['Фильтрация воздуха', 'Подогрев зимой', 'Регулировка потока']
    },
    {
      icon: 'Fan',
      title: 'Вытяжная вентиляция',
      description: 'Эффективно удаляет загрязненный воздух, влагу и неприятные запахи из помещения',
      features: ['Удаление запахов', 'Контроль влажности', 'Энергоэффективность']
    },
    {
      icon: 'Cpu',
      title: 'Приточно-вытяжная',
      description: 'Современная система с рекуперацией тепла - одновременная подача и удаление воздуха',
      features: ['Рекуперация тепла', 'Экономия до 90%', 'Полный воздухообмен']
    }
  ];

  const benefits = [
    { icon: 'Award', title: 'Опыт 15+ лет', description: 'Более 500 успешных проектов' },
    { icon: 'Shield', title: 'Гарантия 5 лет', description: 'На все виды работ и оборудование' },
    { icon: 'Clock', title: 'Монтаж 2-5 дней', description: 'Быстрая установка без простоев' },
    { icon: 'Wrench', title: 'Сервис 24/7', description: 'Техподдержка и обслуживание' }
  ];

  const steps = [
    { number: '01', title: 'Заявка', description: 'Оставьте заявку на сайте или позвоните нам' },
    { number: '02', title: 'Выезд инженера', description: 'Бесплатный осмотр объекта и замеры' },
    { number: '03', title: 'Проект', description: 'Разработка проекта и расчет стоимости' },
    { number: '04', title: 'Монтаж', description: 'Профессиональная установка системы' },
    { number: '05', title: 'Запуск', description: 'Наладка, тестирование и обучение' }
  ];

  const portfolio = [
    { title: 'Офисный центр', area: '450 м²', type: 'Приточно-вытяжная', location: 'Москва' },
    { title: 'Торговый центр', area: '1200 м²', type: 'Вытяжная', location: 'Санкт-Петербург' },
    { title: 'Производство', area: '800 м²', type: 'Приточная', location: 'Казань' },
    { title: 'Ресторан', area: '250 м²', type: 'Приточно-вытяжная', location: 'Москва' }
  ];

  const prices = [
    {
      title: 'Стандарт',
      price: 'от 85 000 ₽',
      features: [
        'Приточная вентиляция',
        'Площадь до 100 м²',
        'Базовая комплектация',
        'Монтаж и настройка',
        'Гарантия 3 года'
      ]
    },
    {
      title: 'Оптимал',
      price: 'от 150 000 ₽',
      features: [
        'Приточно-вытяжная',
        'Площадь до 200 м²',
        'Расширенная комплектация',
        'Рекуперация тепла',
        'Гарантия 5 лет'
      ],
      popular: true
    },
    {
      title: 'Премиум',
      price: 'от 300 000 ₽',
      features: [
        'Умная система управления',
        'Площадь от 200 м²',
        'Премиум оборудование',
        'Автоматизация',
        'Гарантия 7 лет'
      ]
    }
  ];

  const reviews = [
    {
      name: 'Алексей Морозов',
      position: 'Владелец ресторана',
      text: 'Установили систему вентиляции на кухне и в залах. Работают быстро, качественно. Теперь никаких запахов!',
      rating: 5
    },
    {
      name: 'Елена Соколова',
      position: 'Управляющая офисом',
      text: 'Отличная команда профессионалов. Сделали проект, установили, настроили. В офисе стало комфортно работать.',
      rating: 5
    },
    {
      name: 'Дмитрий Волков',
      position: 'Директор производства',
      text: 'Большой объект, сложная система. Справились на отлично. Рекомендую!',
      rating: 5
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Icon name="Wind" className="text-primary" size={32} />
            <span className="text-xl font-bold">VentPro</span>
          </div>
          <div className="hidden md:flex items-center gap-6">
            <a href="#services" className="hover:text-primary transition-colors">Услуги</a>
            <a href="#portfolio" className="hover:text-primary transition-colors">Портфолио</a>
            <a href="#prices" className="hover:text-primary transition-colors">Цены</a>
            <a href="#reviews" className="hover:text-primary transition-colors">Отзывы</a>
            <a href="#contact" className="hover:text-primary transition-colors">Контакты</a>
          </div>
          <Button asChild>
            <a href="#contact">Заказать звонок</a>
          </Button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-br from-secondary via-secondary/95 to-primary/20 text-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in">
              <Badge className="mb-4 bg-primary">Профессиональный монтаж</Badge>
              <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
                Монтаж систем вентиляции под ключ
              </h1>
              <p className="text-xl mb-8 text-white/90">
                Проектирование, установка и обслуживание вентиляционных систем любой сложности. Гарантия 5 лет.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button size="lg" className="bg-white text-secondary hover:bg-white/90" asChild>
                  <a href="#contact">Получить расчет</a>
                </Button>
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
                  Наши работы
                </Button>
              </div>
              <div className="grid grid-cols-3 gap-6 mt-12">
                <div>
                  <div className="text-3xl font-bold">15+</div>
                  <div className="text-white/70">лет опыта</div>
                </div>
                <div>
                  <div className="text-3xl font-bold">500+</div>
                  <div className="text-white/70">проектов</div>
                </div>
                <div>
                  <div className="text-3xl font-bold">98%</div>
                  <div className="text-white/70">довольных клиентов</div>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
                <h3 className="text-2xl font-bold mb-6">Быстрый расчет стоимости</h3>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <Input
                    placeholder="Ваше имя"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="bg-white/90 text-secondary"
                    required
                  />
                  <Input
                    type="tel"
                    placeholder="Телефон"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="bg-white/90 text-secondary"
                    required
                  />
                  <Textarea
                    placeholder="Опишите ваш объект"
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="bg-white/90 text-secondary"
                    rows={3}
                  />
                  <Button type="submit" className="w-full bg-primary hover:bg-primary/90" size="lg">
                    Получить расчет
                  </Button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge className="mb-4">Наши услуги</Badge>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Типы вентиляционных систем</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Предлагаем полный спектр решений для обеспечения идеального микроклимата
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-2">
                <CardHeader>
                  <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mb-4">
                    <Icon name={service.icon} className="text-primary" size={32} />
                  </div>
                  <CardTitle className="text-2xl">{service.title}</CardTitle>
                  <CardDescription className="text-base">{service.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {service.features.map((feature, i) => (
                      <li key={i} className="flex items-center gap-2">
                        <Icon name="CheckCircle2" className="text-primary" size={20} />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge className="mb-4">Преимущества</Badge>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Почему выбирают нас</h2>
          </div>
          <div className="grid md:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="text-center">
                <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon name={benefit.icon} className="text-primary" size={36} />
                </div>
                <h3 className="text-xl font-bold mb-2">{benefit.title}</h3>
                <p className="text-muted-foreground">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section id="portfolio" className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge className="mb-4">Портфолио</Badge>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Наши работы</h2>
            <p className="text-xl text-muted-foreground">Реализованные проекты различной сложности</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {portfolio.map((project, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="text-xl">{project.title}</CardTitle>
                  <CardDescription>{project.location}</CardDescription>
                </CardHeader>
                <CardContent className="space-y-2">
                  <div className="flex items-center gap-2 text-sm">
                    <Icon name="Maximize" size={16} className="text-primary" />
                    <span>{project.area}</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <Icon name="Settings" size={16} className="text-primary" />
                    <span>{project.type}</span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Steps Section */}
      <section className="py-20 bg-secondary text-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-primary">Этапы работы</Badge>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Как мы работаем</h2>
          </div>
          <div className="grid md:grid-cols-5 gap-8">
            {steps.map((step, index) => (
              <div key={index} className="text-center">
                <div className="text-6xl font-bold text-primary/30 mb-4">{step.number}</div>
                <h3 className="text-xl font-bold mb-2">{step.title}</h3>
                <p className="text-white/70">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Prices Section */}
      <section id="prices" className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge className="mb-4">Цены</Badge>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Тарифы и стоимость</h2>
            <p className="text-xl text-muted-foreground">Прозрачные цены без скрытых платежей</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {prices.map((price, index) => (
              <Card key={index} className={`relative ${price.popular ? 'border-primary border-2 shadow-xl' : ''}`}>
                {price.popular && (
                  <Badge className="absolute -top-3 left-1/2 -translate-x-1/2 bg-primary">
                    Популярный
                  </Badge>
                )}
                <CardHeader>
                  <CardTitle className="text-2xl">{price.title}</CardTitle>
                  <div className="text-3xl font-bold text-primary mt-4">{price.price}</div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3 mb-6">
                    {price.features.map((feature, i) => (
                      <li key={i} className="flex items-center gap-2">
                        <Icon name="Check" className="text-primary" size={20} />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button className="w-full" variant={price.popular ? "default" : "outline"}>
                    Выбрать тариф
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Reviews Section */}
      <section id="reviews" className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge className="mb-4">Отзывы</Badge>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Что говорят наши клиенты</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {reviews.map((review, index) => (
              <Card key={index}>
                <CardHeader>
                  <div className="flex gap-1 mb-4">
                    {[...Array(review.rating)].map((_, i) => (
                      <Icon key={i} name="Star" className="text-yellow-400 fill-yellow-400" size={20} />
                    ))}
                  </div>
                  <CardTitle className="text-xl">{review.name}</CardTitle>
                  <CardDescription>{review.position}</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground italic">"{review.text}"</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <Badge className="mb-4">Контакты</Badge>
              <h2 className="text-4xl md:text-5xl font-bold mb-4">Свяжитесь с нами</h2>
              <p className="text-xl text-muted-foreground">Ответим на все вопросы и рассчитаем стоимость проекта</p>
            </div>
            <div className="grid md:grid-cols-2 gap-12">
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Icon name="Phone" className="text-primary" size={24} />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-1">Телефон</h3>
                    <a href="tel:+79991234567" className="text-primary text-lg">+7 (999) 123-45-67</a>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Icon name="Mail" className="text-primary" size={24} />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-1">Email</h3>
                    <a href="mailto:info@ventpro.ru" className="text-primary">info@ventpro.ru</a>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Icon name="MapPin" className="text-primary" size={24} />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-1">Адрес</h3>
                    <p>г. Москва, ул. Примерная, д. 1</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Icon name="Clock" className="text-primary" size={24} />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-1">Режим работы</h3>
                    <p>Пн-Пт: 9:00 - 18:00<br />Сб-Вс: по договоренности</p>
                  </div>
                </div>
              </div>
              <Card>
                <CardHeader>
                  <CardTitle>Оставьте заявку</CardTitle>
                  <CardDescription>И мы свяжемся с вами в течение 15 минут</CardDescription>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <Input
                      placeholder="Ваше имя"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      required
                    />
                    <Input
                      type="tel"
                      placeholder="Телефон"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      required
                    />
                    <Textarea
                      placeholder="Ваше сообщение"
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      rows={4}
                    />
                    <Button type="submit" className="w-full" size="lg">
                      Отправить заявку
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-secondary text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Icon name="Wind" className="text-primary" size={32} />
                <span className="text-xl font-bold">VentPro</span>
              </div>
              <p className="text-white/70">Профессиональный монтаж систем вентиляции любой сложности</p>
            </div>
            <div>
              <h3 className="font-bold mb-4">Услуги</h3>
              <ul className="space-y-2 text-white/70">
                <li><a href="#services" className="hover:text-white transition-colors">Приточная вентиляция</a></li>
                <li><a href="#services" className="hover:text-white transition-colors">Вытяжная вентиляция</a></li>
                <li><a href="#services" className="hover:text-white transition-colors">Приточно-вытяжная</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold mb-4">Компания</h3>
              <ul className="space-y-2 text-white/70">
                <li><a href="#portfolio" className="hover:text-white transition-colors">Портфолио</a></li>
                <li><a href="#prices" className="hover:text-white transition-colors">Цены</a></li>
                <li><a href="#reviews" className="hover:text-white transition-colors">Отзывы</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold mb-4">Контакты</h3>
              <ul className="space-y-2 text-white/70">
                <li>+7 (999) 123-45-67</li>
                <li>info@ventpro.ru</li>
                <li>г. Москва, ул. Примерная, д. 1</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-white/10 pt-8 text-center text-white/70">
            <p>&copy; 2024 VentPro. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
