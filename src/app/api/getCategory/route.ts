import { authOptions } from "@/utils/auth";
import { getServerSession } from "next-auth";
import { NextResponse } from "next/server";
import prismadb from "@/utils/prismaclient";

export async function GET(req: Request) {
  let session = await getServerSession(authOptions);
  if (!session) {
    return NextResponse.json({ msg: "user is not logged in" });
  }
  let { searchParams } = new URL(req.url);
  let categoryId = searchParams.get("category");
  let category = await prismadb.category.findUnique({
    where: {
      id: categoryId!,
    },
  });
  if (category) {
    return NextResponse.json(category);
  } else {
    return NextResponse.json({ msg: "no category of this name is available" });
  }
}
