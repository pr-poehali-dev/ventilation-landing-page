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
      icon: 'Home',
      title: 'Для квартир и домов',
      description: 'Канальные системы для жилых помещений площадью от 50 до 300 м². Скрытая установка, тихая работа.',
      features: ['Скрытый монтаж', 'Бесшумная работа', 'Зональный контроль']
    },
    {
      icon: 'Building',
      title: 'Для офисов',
      description: 'Профессиональные решения для бизнес-центров и офисных пространств любой площади.',
      features: ['Центральное управление', 'Энергоэффективность', 'Быстрый монтаж']
    },
    {
      icon: 'ShoppingBag',
      title: 'Для торговых площадей',
      description: 'Мощные системы для магазинов, ресторанов и коммерческих объектов с высокой проходимостью.',
      features: ['Высокая мощность', 'Многозональность', 'Надежность 24/7']
    }
  ];

  const benefits = [
    { 
      icon: 'Eye', 
      title: 'Незаметность', 
      description: 'Внутренний блок скрыт за подвесным потолком' 
    },
    { 
      icon: 'Volume2', 
      title: 'Тихая работа', 
      description: 'Уровень шума от 22 дБ - тише шепота' 
    },
    { 
      icon: 'Snowflake', 
      title: 'Равномерное охлаждение', 
      description: 'Климат-контроль во всех помещениях' 
    },
    { 
      icon: 'Zap', 
      title: 'Экономия энергии', 
      description: 'Инверторные технологии класса A++' 
    }
  ];

  const steps = [
    { number: '01', title: 'Консультация', description: 'Обсудим ваши задачи и подберём решение' },
    { number: '02', title: 'Замер объекта', description: 'Выезд специалиста для точных расчетов' },
    { number: '03', title: 'Проектирование', description: 'Разработка схемы размещения оборудования' },
    { number: '04', title: 'Монтаж', description: 'Профессиональная установка за 3-7 дней' },
    { number: '05', title: 'Запуск и настройка', description: 'Тестирование и обучение управлению' }
  ];

  const brands = [
    { name: 'Daikin', description: 'Японское качество' },
    { name: 'Mitsubishi', description: 'Премиум класс' },
    { name: 'LG', description: 'Инновации' },
    { name: 'Gree', description: 'Оптимальная цена' }
  ];

  const prices = [
    {
      title: 'Базовый',
      price: 'от 120 000 ₽',
      features: [
        'Площадь до 70 м²',
        'Кондиционер Gree',
        'Стандартный монтаж',
        'Один внутренний блок',
        'Гарантия 2 года'
      ]
    },
    {
      title: 'Оптимальный',
      price: 'от 180 000 ₽',
      features: [
        'Площадь до 120 м²',
        'Кондиционер LG/Daikin',
        'Полный монтаж',
        'До 3-х зон охлаждения',
        'Гарантия 3 года'
      ],
      popular: true
    },
    {
      title: 'Премиум',
      price: 'от 350 000 ₽',
      features: [
        'Площадь от 120 м²',
        'Mitsubishi/Daikin VRV',
        'Премиум оборудование',
        'Многозональная система',
        'Гарантия 5 лет'
      ]
    }
  ];

  const reviews = [
    {
      name: 'Игорь Петров',
      position: 'Владелец квартиры',
      text: 'Установили канальник в трёшке. Теперь во всех комнатах одинаковая температура, и ничего не торчит на стенах. Очень доволен!',
      rating: 5
    },
    {
      name: 'Марина Сидорова',
      position: 'Управляющая салоном',
      text: 'В салоне красоты важна атмосфера. Канальная система работает бесшумно, клиенты даже не замечают. Отличное решение!',
      rating: 5
    },
    {
      name: 'Андрей Волков',
      position: 'Директор офиса',
      text: 'Охлаждает весь офис 150 м² равномерно. Энергопотребление ниже, чем у сплит-систем. Рекомендую для бизнеса!',
      rating: 5
    }
  ];

  const features = [
    {
      title: 'Скрытая установка',
      description: 'Внутренний блок монтируется за подвесным потолком - снаружи видны только декоративные решётки',
      icon: 'EyeOff'
    },
    {
      title: 'Зональное управление',
      description: 'Независимая регулировка температуры в разных помещениях через единую систему',
      icon: 'Layers'
    },
    {
      title: 'Фильтрация воздуха',
      description: 'Многоступенчатая очистка от пыли, аллергенов и бактерий для здорового микроклимата',
      icon: 'Filter'
    },
    {
      title: 'Умное управление',
      description: 'Возможность интеграции с системой умного дома и дистанционное управление со смартфона',
      icon: 'Smartphone'
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-md border-b">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Icon name="AirVent" className="text-primary" size={32} />
            <span className="text-xl font-bold">CoolAir Pro</span>
          </div>
          <div className="hidden md:flex items-center gap-6">
            <a href="#services" className="hover:text-primary transition-colors">Услуги</a>
            <a href="#features" className="hover:text-primary transition-colors">Преимущества</a>
            <a href="#prices" className="hover:text-primary transition-colors">Цены</a>
            <a href="#reviews" className="hover:text-primary transition-colors">Отзывы</a>
            <a href="#contact" className="hover:text-primary transition-colors">Контакты</a>
          </div>
          <Button asChild>
            <a href="#contact">Заказать расчет</a>
          </Button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-br from-primary/5 via-white to-secondary/5">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in">
              <Badge className="mb-4 bg-primary">Профессиональная установка</Badge>
              <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
                Канальные кондиционеры под ключ
              </h1>
              <p className="text-xl mb-8 text-muted-foreground">
                Невидимое охлаждение всего дома или офиса. Скрытый монтаж, тихая работа, равномерный климат в каждой комнате.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button size="lg" asChild>
                  <a href="#contact">Бесплатный расчет</a>
                </Button>
                <Button size="lg" variant="outline">
                  Примеры работ
                </Button>
              </div>
              <div className="grid grid-cols-3 gap-6 mt-12">
                <div>
                  <div className="text-3xl font-bold text-primary">12+</div>
                  <div className="text-muted-foreground">лет опыта</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-primary">350+</div>
                  <div className="text-muted-foreground">установок</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-primary">99%</div>
                  <div className="text-muted-foreground">довольных клиентов</div>
                </div>
              </div>
            </div>
            <div className="relative">
              <Card className="shadow-2xl">
                <CardHeader className="bg-gradient-to-br from-primary to-secondary text-white">
                  <CardTitle className="text-2xl">Узнайте стоимость за 2 минуты</CardTitle>
                  <CardDescription className="text-white/90">Заполните форму - мы рассчитаем точную цену</CardDescription>
                </CardHeader>
                <CardContent className="pt-6">
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
                      placeholder="Площадь помещения и тип объекта"
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      rows={3}
                    />
                    <Button type="submit" className="w-full" size="lg">
                      Получить расчет
                    </Button>
                    <p className="text-xs text-center text-muted-foreground">
                      Нажимая кнопку, вы соглашаетесь с политикой конфиденциальности
                    </p>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge className="mb-4">Наши услуги</Badge>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Для каких объектов подходит</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Канальные кондиционеры - универсальное решение для любых помещений
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
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
                        <Icon name="Check" className="text-primary" size={20} />
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

      {/* Features Section */}
      <section id="features" className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge className="mb-4">Преимущества</Badge>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Почему канальные системы</h2>
            <p className="text-xl text-muted-foreground">Главные преимущества перед обычными кондиционерами</p>
          </div>
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {features.map((feature, index) => (
              <Card key={index} className="border-2 hover:border-primary transition-colors">
                <CardHeader>
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                      <Icon name={feature.icon} className="text-primary" size={24} />
                    </div>
                    <div>
                      <CardTitle className="text-xl mb-2">{feature.title}</CardTitle>
                      <CardDescription className="text-base">{feature.description}</CardDescription>
                    </div>
                  </div>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Что вы получаете</h2>
          </div>
          <div className="grid md:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="text-center">
                <div className="w-20 h-20 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon name={benefit.icon} className="text-white" size={36} />
                </div>
                <h3 className="text-xl font-bold mb-2">{benefit.title}</h3>
                <p className="text-muted-foreground">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Brands Section */}
      <section className="py-20 bg-secondary text-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-primary">Производители</Badge>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Работаем с лучшими брендами</h2>
            <p className="text-xl text-white/80">Официальные партнеры мировых производителей</p>
          </div>
          <div className="grid md:grid-cols-4 gap-8">
            {brands.map((brand, index) => (
              <Card key={index} className="bg-white/10 border-white/20 text-white hover:bg-white/20 transition-colors">
                <CardHeader className="text-center">
                  <CardTitle className="text-2xl">{brand.name}</CardTitle>
                  <CardDescription className="text-white/70">{brand.description}</CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Steps Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge className="mb-4">Этапы работы</Badge>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Как мы работаем</h2>
            <p className="text-xl text-muted-foreground">От заявки до запуска системы</p>
          </div>
          <div className="grid md:grid-cols-5 gap-8">
            {steps.map((step, index) => (
              <div key={index} className="text-center relative">
                <div className="w-20 h-20 bg-primary text-white rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold shadow-lg">
                  {step.number}
                </div>
                <h3 className="text-xl font-bold mb-2">{step.title}</h3>
                <p className="text-muted-foreground text-sm">{step.description}</p>
                {index < steps.length - 1 && (
                  <div className="hidden md:block absolute top-10 left-[60%] w-[80%] h-0.5 bg-primary/30" />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Prices Section */}
      <section id="prices" className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge className="mb-4">Цены</Badge>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Стоимость установки</h2>
            <p className="text-xl text-muted-foreground">Фиксированные цены без скрытых доплат</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {prices.map((price, index) => (
              <Card key={index} className={`relative ${price.popular ? 'border-primary border-2 shadow-2xl scale-105' : ''}`}>
                {price.popular && (
                  <Badge className="absolute -top-3 left-1/2 -translate-x-1/2 bg-primary">
                    Хит продаж
                  </Badge>
                )}
                <CardHeader className={price.popular ? 'bg-gradient-to-br from-primary to-secondary text-white' : ''}>
                  <CardTitle className="text-2xl">{price.title}</CardTitle>
                  <div className={`text-4xl font-bold mt-4 ${price.popular ? 'text-white' : 'text-primary'}`}>
                    {price.price}
                  </div>
                </CardHeader>
                <CardContent className="pt-6">
                  <ul className="space-y-3 mb-6">
                    {price.features.map((feature, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <Icon name="CheckCircle2" className="text-primary flex-shrink-0 mt-0.5" size={20} />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button className="w-full" variant={price.popular ? "default" : "outline"} size="lg">
                    Выбрать пакет
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Reviews Section */}
      <section id="reviews" className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge className="mb-4">Отзывы</Badge>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Что говорят наши клиенты</h2>
            <p className="text-xl text-muted-foreground">Реальные отзывы от реальных людей</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {reviews.map((review, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
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
      <section id="contact" className="py-20 bg-gradient-to-br from-primary to-secondary text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-bold mb-4">Готовы начать?</h2>
              <p className="text-xl text-white/90">Оставьте заявку - наш специалист свяжется с вами в течение 10 минут</p>
            </div>
            <div className="grid md:grid-cols-2 gap-12">
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Icon name="Phone" className="text-white" size={24} />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-1">Телефон</h3>
                    <a href="tel:+79991234567" className="text-xl hover:underline">+7 (999) 123-45-67</a>
                    <p className="text-white/70 text-sm mt-1">Ежедневно с 8:00 до 22:00</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Icon name="Mail" className="text-white" size={24} />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-1">Email</h3>
                    <a href="mailto:info@coolair.ru" className="hover:underline">info@coolair.ru</a>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Icon name="MapPin" className="text-white" size={24} />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-1">Адрес</h3>
                    <p>г. Москва, ул. Центральная, д. 15</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Icon name="Award" className="text-white" size={24} />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-1">Гарантии</h3>
                    <p>До 5 лет гарантии на оборудование</p>
                    <p className="text-white/70 text-sm mt-1">Бесплатное обслуживание первый год</p>
                  </div>
                </div>
              </div>
              <Card className="bg-white">
                <CardHeader>
                  <CardTitle className="text-secondary">Оставьте заявку</CardTitle>
                  <CardDescription>Мы перезвоним в течение 10 минут</CardDescription>
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
                      placeholder="Расскажите о вашем объекте"
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      rows={4}
                    />
                    <Button type="submit" className="w-full bg-secondary hover:bg-secondary/90" size="lg">
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
                <Icon name="AirVent" className="text-primary" size={32} />
                <span className="text-xl font-bold">CoolAir Pro</span>
              </div>
              <p className="text-white/70">Профессиональная установка канальных кондиционеров под ключ</p>
            </div>
            <div>
              <h3 className="font-bold mb-4">Услуги</h3>
              <ul className="space-y-2 text-white/70">
                <li><a href="#services" className="hover:text-white transition-colors">Для квартир</a></li>
                <li><a href="#services" className="hover:text-white transition-colors">Для офисов</a></li>
                <li><a href="#services" className="hover:text-white transition-colors">Для магазинов</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold mb-4">Информация</h3>
              <ul className="space-y-2 text-white/70">
                <li><a href="#features" className="hover:text-white transition-colors">Преимущества</a></li>
                <li><a href="#prices" className="hover:text-white transition-colors">Цены</a></li>
                <li><a href="#reviews" className="hover:text-white transition-colors">Отзывы</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold mb-4">Контакты</h3>
              <ul className="space-y-2 text-white/70">
                <li>+7 (999) 123-45-67</li>
                <li>info@coolair.ru</li>
                <li>г. Москва, ул. Центральная, д. 15</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-white/10 pt-8 text-center text-white/70">
            <p>&copy; 2024 CoolAir Pro. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
