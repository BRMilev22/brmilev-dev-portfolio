# Строителен Маркет "Драгомански" - Уебсайт

Модерен уебсайт за строителни материали, създаден с Next.js, TypeScript, Tailwind CSS и Framer Motion.

## 🏗️ Функционалности

- **Модерен дизайн** с красиви анимации и визуални ефекти
- **Responsive дизайн** - работи отлично на всички устройства
- **Интерактивни секции** с плавни анимации
- **Продуктов каталог** с категории и филтриране
- **Контактна форма** за заявки
- **Оптимизирана производителност** с Next.js
- **Български език** - пълно локализиране

## 🚀 Технологии

- **Next.js 14** - React framework
- **TypeScript** - Type safety
- **Tailwind CSS** - Utility-first CSS framework
- **Framer Motion** - Animation library
- **Lucide React** - Icons
- **MySQL** - Database
- **AOS** - Animate On Scroll library

## 📦 Инсталация

### 1. Клонирайте проекта
```bash
git clone [repository-url]
cd dragomanski-website
```

### 2. Инсталирайте dependencies
```bash
npm install
```

### 3. Настройте базата данни

#### Стъпки за MySQL:
1. Отворете MySQL Workbench или друг MySQL клиент
2. Създайте нова connection с:
   - Host: localhost
   - Port: 3306
   - Username: root
   - Password: (оставете празно)
3. Изпълнете SQL файла:
   ```sql
   source /path/to/dragomanski-website/database.sql
   ```

### 4. Стартирайте development server
```bash
npm run dev
```

Отворете [http://localhost:3000](http://localhost:3000) в браузъра.

## 🗄️ База данни

Проектът използва MySQL база данни с следните таблици:

- **categories** - Категории продукти
- **products** - Продукти
- **company_info** - Информация за компанията
- **services** - Услуги
- **contact_messages** - Съобщения от контактната форма

### Настройка на базата данни:

1. Стартирайте MySQL сървър
2. Изпълнете файла `database.sql` в MySQL:
   ```bash
   mysql -u root -p < database.sql
   ```

## 🎨 Дизайн система

### Цветове:
- **Primary**: Червено (#dc2626)
- **Secondary**: Сиво (#64748b)
- **Accent**: Жълто (#eab308)

### Типография:
- **Heading**: Poppins
- **Body**: Inter

### Компоненти:
- `Header` - Навигация с прозрачен фон
- `Hero` - Главна секция с анимации
- `About` - За компанията
- `Products` - Продуктов каталог
- `Services` - Услуги
- `Contact` - Контакти и форма
- `Footer` - Footer с информация

## 📱 Responsive дизайн

Уебсайтът е оптимизиран за:
- **Desktop** (1200px+)
- **Tablet** (768px - 1199px)
- **Mobile** (до 767px)

## 🔧 Развитие

### Добавяне на нов продукт:
1. Добавете записа в базата данни
2. Продуктът автоматично ще се появи в съответната категория

### Промяна на контактна информация:
1. Редактирайте `company_info` таблицата в базата данни
2. Или директно промените в компонентите

### Добавяне на нова секция:
1. Създайте нов компонент в `components/`
2. Добавете го в `app/page.tsx`
3. Добавете навигацията в `Header.tsx`

## 🚢 Deployment

### Vercel (Препоръчано):
1. Push кода в GitHub
2. Свържете с Vercel
3. Настройте environment variables за базата данни

### Netlify:
1. Build command: `npm run build`
2. Publish directory: `out`
3. Добавете environment variables

## 📞 Контакти

За въпроси относно кода или техническа поддръжка:

**Строителен Маркет "Драгомански"**
- 📞 Телефон: 089 547 3356
- 📧 Email: info@dragomanski.bg
- 📍 Адрес: гр. Средец, ул. Васил Коларов №99

## 📄 Лиценз

Този проект е създаден специално за Строителен Маркет "Драгомански".

---

**"Градим доверието – тухла по тухла!"** 🏠 