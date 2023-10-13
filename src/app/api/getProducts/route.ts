import { authOptions } from "@/utils/auth";
import prismadb from "@/utils/prismaclient";
import { getServerSession } from "next-auth";
import { NextResponse } from "next/server";

export async function GET() {
  let session = await getServerSession(authOptions);

  if (!session) {
    return NextResponse.json({ message: "user not logged in" });
  }
  let products = await prismadb.product.findMany();
  return NextResponse.json({ products });
}
