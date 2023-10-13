import { authOptions } from "@/utils/auth";
import { getServerSession } from "next-auth";
import { NextResponse } from "next/server";
import prismadb from "@/utils/prismaclient";

export async function POST(req: Request) {
  let session = await getServerSession(authOptions);
  if (!session) {
    return NextResponse.json({ msg: "user is not logged in" });
  }
  let data = await req.json();
  let title = data.title;

  let subcategory = await prismadb.subcategory.create({
    data: {
      title,
    },
  });
  if (subcategory) {
    return NextResponse.json({ msg: subcategory });
  }

  // let categorys = await prismadb.category.findMany();
  // if (categorys) {
  //   return NextResponse.json(categorys);
  // } else {
  return NextResponse.json({ msg: "no category of this name is available" });
  // }
}
