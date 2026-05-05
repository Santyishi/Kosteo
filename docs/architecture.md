# Kosteo — Arquitectura

## Stack técnico

### Frontend
- Angular 17+ (módulos, NO standalone components)
- Angular Material
- SCSS
- HttpClient con interceptores

### Backend
- NestJS
- Prisma ORM
- PostgreSQL
- JWT (passport-jwt)
- class-validator

### Infraestructura (producción)
- DB: Supabase o Neon
- Backend: Render / Railway / Fly.io
- Frontend: Vercel / Netlify

## Estructura del proyecto
```
kosteo/
├── frontend/        # Angular app
├── backend/         # NestJS app
├── docs/            # Documentación
├── .gitignore
└── README.md
```

## Modelos principales
- User (id, email, passwordHash, phoneNumber, role)
- Category (id, name, userId nullable, isGlobal)
- Expense (id, amount, description, date, userId, categoryId, origin)
- Budget (id, userId, categoryId, month, year, amount) [post-MVP]
- RecurringExpense (id, userId, name, amount, categoryId) [post-MVP]
