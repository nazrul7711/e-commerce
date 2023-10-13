import GoogleProvider from "next-auth/providers/google";
import prismadb from "./prismaclient"
import { AuthOptions } from "next-auth";
import { PrismaAdapter } from "@auth/prisma-adapter";


export const authOptions:AuthOptions = {
  adapter:PrismaAdapter(prismadb),
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_ID!,
      clientSecret: process.env.GOOGLE_SECRET!,
    }),
  ],
};
