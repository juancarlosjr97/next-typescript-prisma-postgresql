import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

/**
 * Create dummy data for testing
 */
const createDummyData = async () => {
  await prisma.post.createMany({
    data: [
      {
        title: "Test Post 1 - Published",
        content: "Test Content Post 1",
        published: true,
      },
      {
        title: "Test Post 2 - Draft",
        content: "Test Content Post 2",
      },
    ],
    skipDuplicates: true,
  });
};

const main = async () => {
  await createDummyData();
};

main()
  .catch(() => {
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
