import bcrypt from "bcryptjs";
import { PrismaClient } from "../generated/prisma";
const prisma = new PrismaClient();

type CreateUserInput = {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
};

type UpdatePasswordInput = {
  id: string;
  password: string;
};

const query = {
  user: {
    getAll: async () => await prisma.user.findMany(),
    getById: async (id: string) =>
      await prisma.user.findUnique({ where: { id } }),
    getByEmail: async (email: string) =>
      await prisma.user.findUnique({ where: { email } }),
    createUser: async ({
      firstName,
      lastName,
      email,
      password,
    }: CreateUserInput) => {
      // 1. Hash the plain‐text password
      const hashedPassword = await bcrypt.hash(password, 10);

      await prisma.user.create({
        data: {
          firstName,
          lastName,
          email,
          password: hashedPassword,
        },
      });
    },
    updatePassword: async ({ id, password }: UpdatePasswordInput) => {
      const hashedPassword = await bcrypt.hash(password.trim(), 10);

      await prisma.user.update({
        where: {
          id: id,
        },
        data: {
          password: hashedPassword,
        },
      });
    },
  },
};

export default query;
