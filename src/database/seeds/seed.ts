import { PrismaClient } from '@prisma/client';
import { deckSeed } from './deck.seed';

const prisma = new PrismaClient();

async function main() {
  await prisma.deck.createMany({ data: deckSeed, skipDuplicates: true });
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
