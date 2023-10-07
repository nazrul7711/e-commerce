
import prismadb from "@/app/utils/prismaclient"
export default async function getProducts() {
  let products = await prismadb.product.findMany()
  return {products}
}
