import prisma from "../src/config/prisma";

async function main() {
  await prisma.user.create({
    data: {
      email: "kiishijoseph@gmail.com",
      github_url: "https://github.com/adeoluwa/HNG",
    },
  });
}

main()
  .catch((e) => console.error(e))
  .finally(async () => {
    await prisma.$disconnect();
  });
