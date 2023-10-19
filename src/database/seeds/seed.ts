import { PrismaClient } from '@prisma/client';
import { deckSeed } from './deck.seed';
import { cardDeck1Seed } from './card-deck-1.seed';
import { cardDeck2Seed } from './card-deck-2.seed';
import { contactSeed } from './contact.seed';

const prisma = new PrismaClient();

async function main() {
  await prisma.deck.createMany({ data: deckSeed, skipDuplicates: true });

  await prisma.card.createMany({ data: cardDeck1Seed, skipDuplicates: true });
  await prisma.card.createMany({ data: cardDeck2Seed, skipDuplicates: true });

  await prisma.contact.createMany({ data: contactSeed, skipDuplicates: true });
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
