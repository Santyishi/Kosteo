import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  const categories = [
    'Comida',
    'Transporte',
    'Entretenimiento',
    'Salud',
    'Educación',
    'Ropa',
    'Hogar',
    'Tecnología',
    'Viajes',
    'Otros',
  ];

  for (const name of categories) {
    await prisma.category.upsert({
      where: { id: name },
      update: {},
      create: {
        id: name,
        name,
        isGlobal: true,
      },
    });
  }

  console.log('Seed completado: 10 categorías globales creadas');
}

main()
  .catch(console.error)
  .finally(() => prisma.$disconnect());
