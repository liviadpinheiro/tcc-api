import { Prisma } from '@prisma/client';

export const contactSeed: Prisma.ContactCreateManyInput[] = [
  {
    id: '86f770fb-8c8c-4329-a128-19976584c18b',
    name: 'Maria',
    message:
      'Finalmente, um lugar onde posso organizar todas as minhas tiragens. As anotações me ajudam a entender melhor cada carta e sua relação com as outras. Simplesmente genial!',
    email: 'maria@jornada.com',
    state: 'Rio de Janeiro',
    theme: 'relato',
    isValidTestimonial: true,
  },
  {
    id: '8f5001d7-e6c8-4d27-9e85-d70dd35d708a',
    name: 'Carla',
    message:
      'Estou encantado com a facilidade de fazer anotações e salvar tiragens! Isso me permite refletir sobre minhas leituras de forma mais profunda. Super prático!',
    email: 'carla@jornada.com',
    state: 'Espírito Santo',
    theme: 'relato',
    isValidTestimonial: true,
  },
  {
    id: 'c1f3e466-977f-41a8-9958-f38be2654990',
    name: 'João',
    message:
      'A função de salvar tiragens é um divisor de águas para mim. Posso voltar e analisar leituras passadas para ver como se alinham com eventos atuais em minha vida e na dos meus consulentes.',
    email: 'joao@jornada.com',
    state: 'Bahia',
    theme: 'relato',
    isValidTestimonial: true,
  },
];
