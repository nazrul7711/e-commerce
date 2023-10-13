import { authOptions } from "@/utils/auth";
import prismadb from "@/utils/prismaclient";
import { getServerSession } from "next-auth";
import { NextResponse } from "next/server";

export async function GET(req: Request) {
  let session = await getServerSession(authOptions);
  let { searchParams } = new URL(req.url);
  const categoryId = searchParams.get("categoryId");

  if (!session) {
    return NextResponse.json({ message: "user not logged in" });
  }
  let subcategories = await prismadb.subcategory.findMany({
    where: {
      categoryId: categoryId!,
    },
  });

  return NextResponse.json({ msg: subcategories });
}
