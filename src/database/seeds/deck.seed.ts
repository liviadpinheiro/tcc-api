import { Prisma } from '@prisma/client';

export const deckSeed: Prisma.DeckCreateManyInput[] = [
  {
    name: 'Tarô de Marselha',
    description:
      'Esse é um dos baralhos mais antigos e respeitados, originado na França medieval. É composto por 78 cartas ricas em simbolismo.',
    imageUrl:
      'https://drive.google.com/uc?export=view&id=11kHBNUjKhBvYceqJwD5l54ByKLGXLxnt',
    imagePosition: 'top',
  },
  {
    name: 'Baralho Cigano',
    description:
      'Esse é um oráculo baseado em 36 cartas que tem raízes na tradição cigana e é conhecido por suas mensagens diretas e práticas.',
    imageUrl:
      'https://drive.google.com/uc?export=view&id=1MrWwmIwxTCmB2zy16Clcj1W1GsbACTzw',
    imagePosition: 'top',
  },
];
