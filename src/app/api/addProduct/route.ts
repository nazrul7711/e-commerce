import { NextResponse } from "next/server";
import prismadb from "@/app/utils/prismaclient";

import {
  getStorage,
  ref,
  uploadBytesResumable,
  getDownloadURL,
} from "firebase/storage";
import { app } from "@/app/utils/firebase";

export async function POST(req: Request) {
  let data = await req.formData();
  const productImg: File | null = data.get("productImage") as unknown as File;
  const productImageFile2 = data.get("productImage2");
  let productImg2: File | null = null;
  if (productImageFile2 === "undefined") {
    productImg2 = null;
  } else {
    productImg2 = productImageFile2 as unknown as File;
  }
  const title = data.get("title") as string;
  const description = data.get("description") as string;
  const price = parseInt(data.get("price") as string);
  const isNew = Boolean(data.get("isNew") as string);
  const oldPrice = parseInt(data.get("oldprice") as string);
  const subcategory = data.get("subcategory") as string;


  let files = [productImg];

  if (productImg2) {
    files.push(productImg2);
  }
  let storage = getStorage(app);
  let result = files.map(async (file, index) => {
    let storageRef = ref(storage, title + String(index + 1));
    const uploadTask = uploadBytesResumable(
      storageRef,
      await file.arrayBuffer()
    );
    return new Promise((resolve, reject) => {
      uploadTask.on(
        "state_changed",
        (snapshot) => {
          const progress =
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
          console.log("Upload is " + progress + "% done");
        },
        (error) => {
          reject(error);
        },
        () => {
          getDownloadURL(uploadTask.snapshot.ref)
            .then((downloadURL) => {
              resolve(downloadURL);
            })
            .catch((error) => reject(error));
        }
      );
    });
  });
  const uploadResults: string[] = (await Promise.all(result)) as string[];
  let newProduct = await prismadb.product.create({
    data: {
      title,
      desc: description,
      img: uploadResults[0],
      img2: uploadResults[1],
      price: price,
      isNew: isNew,
      oldPrice,
      subcategoryId:subcategory,
    },
  });
  return NextResponse.json({ message: newProduct });
}

export async function GET(req: Request) {
  return NextResponse.json("successfull buddy");
}
