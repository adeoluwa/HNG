import prisma from "../config/prisma";

export const getUser = async () => {
  return await prisma.user.findFirst();
}

