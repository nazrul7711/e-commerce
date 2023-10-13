import { authOptions } from "@/utils/auth";
import { getServerSession } from "next-auth";
import { NextResponse } from "next/server";
import prismadb from "@/utils/prismaclient";

export async function GET(req: Request) {
  let session = await getServerSession(authOptions);
  if (!session) {
    return NextResponse.json({ msg: "user is not logged in" });
  }

  let categorys = await prismadb.category.findMany();
  if (categorys) {
    return NextResponse.json(categorys);
  } else {
    return NextResponse.json({ msg: "no category of this name is available" });
  }
}
