import prisma from "../src/config/prisma";

async function main() {
  const userData = {
    email: "kiishijoseph@gmail.com",
    github_url: "https://github.com/adeoluwa/HNG",
  };

  console.log("Seeding user data:", userData);

  await prisma.user.create({
    data: userData,
  });
}

main()
  .catch((e) => console.error(e))
  .finally(async () => {
    await prisma.$disconnect();
  });
