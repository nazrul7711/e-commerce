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
  let id = searchParams.get("id");
  let product = await prismadb.product.findUnique({
    where: {
      id: id!,
    },
  });
  if (product) {
    return NextResponse.json(product);
  } else {
    return NextResponse.json({ msg: "no product was available" });
  }
}
